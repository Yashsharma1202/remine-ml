"""
weekly_v2_nifty50.py
====================
IMPROVED Weekly-Expiry model for NIFTY 50 (5-day regime), with a live forecast.

Adds to the current weekly hybrid:
  1. CROSS-ASSET features  : BANKNIFTY / USDINR / WTI momentum, vol, trend
                             (bank-sector leadership, currency, oil) — as-of merged.
  2. INDIA VIX features    : level, change, z-score (the fear gauge precedes moves).
  3. HMM directional probs : 3-state Gaussian HMM filtered posteriors (persistence).
  4. FEATURE SELECTION     : per-fold top-K by gain (cuts overfitting on ~1500 rows).

Compares three configurations on the SAME walk-forward folds:
  A) CURRENT  : Nifty features + HMM           (reproduces ~58%)
  B) V2 all   : + cross-asset + VIX            (more signal, more features)
  C) V2 select: B, pruned to top-K per fold    (more signal, less overfitting)

Self-certifying: accuracy, macro-F1, train-val gap (overfitting), shuffle-label
control (leakage). LEAK-FREE: HMM fit on train; HMM/feature-selection use train
only; cross-asset & VIX merged backward; class weights train-only; embargo.

Finally PREDICTS the live 5-day-ahead regime for the most recent bar.

MODEL: 3-state Gaussian HMM + XGBoost multiclass.
Usage:  python weekly_v2_nifty50.py
"""
import argparse
import json
import os
import sys

import numpy as np
import pandas as pd
from hmmlearn.hmm import GaussianHMM
from scipy.stats import multivariate_normal
from sklearn.model_selection import TimeSeriesSplit
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, f1_score
from xgboost import XGBClassifier

HERE = os.path.dirname(os.path.abspath(__file__))
if HERE not in sys.path:
    sys.path.insert(0, HERE)
from regime_features import XGB_FEATURES, REGIME_TO_INT, LABELS, add_structural_features

SYMBOL = "NIFTY"
N_SPLITS = 5
H = 5
VOL_WIN = 10
HMM_STATES = 3
TOP_K = 12
CROSS = {"BANKNIFTY": ["ret_21d", "ret_63d", "vol_ratio", "rsi_14", "ema_gap", "adx"],
         "USDINR": ["ret_21d", "ret_63d", "vol_ratio"],
         "WTI": ["ret_21d", "ret_63d"]}


# ----------------------------------------------------------------- data
def _feats(sym):
    with open(os.path.join(HERE, "output", f"features_{sym}.json")) as f:
        d = pd.DataFrame(json.load(f))
    d["date"] = pd.to_datetime(d["date"])
    return d.sort_values("date").reset_index(drop=True)


def load_vix():
    path = os.path.join(HERE, "INDIAVIX_daily.csv")
    if not os.path.exists(path):
        import yfinance as yf
        v = yf.download("^INDIAVIX", period="max", interval="1d", progress=False, auto_adjust=True)
        if isinstance(v.columns, pd.MultiIndex):
            v.columns = v.columns.get_level_values(0)
        v = v.reset_index()[["Date", "Close"]].rename(columns={"Date": "date", "Close": "vix"})
        v.to_csv(path, index=False)
    v = pd.read_csv(path); v["date"] = pd.to_datetime(v["date"])
    v["vix_chg"] = v["vix"].pct_change()
    v["vix_z"] = (v["vix"] - v["vix"].rolling(63).mean()) / (v["vix"].rolling(63).std() + 1e-9)
    return v[["date", "vix", "vix_chg", "vix_z"]]


def build():
    df = add_structural_features(_feats(SYMBOL))
    lab = _feats_labels()
    df = df.merge(lab, on="date", how="inner")
    cross_cols = []
    for sym, cols in CROSS.items():
        x = _feats(sym)[["date"] + cols].rename(columns={c: f"{sym.lower()}_{c}" for c in cols})
        df = pd.merge_asof(df.sort_values("date"), x.sort_values("date"), on="date", direction="backward")
        cross_cols += [f"{sym.lower()}_{c}" for c in cols]
    vix = load_vix()
    df = pd.merge_asof(df.sort_values("date"), vix.sort_values("date"), on="date", direction="backward")
    vix_cols = ["vix", "vix_chg", "vix_z"]
    df[cross_cols + vix_cols] = df[cross_cols + vix_cols].replace([np.inf, -np.inf], np.nan).fillna(0.0)
    df["ret"] = np.log(df["close"]).diff()
    df["rv"] = df["ret"].rolling(VOL_WIN).std()
    df["target"] = df["regime"].shift(-H)
    return df, cross_cols, vix_cols


def _feats_labels():
    with open(os.path.join(HERE, "output", f"regime_clustered_{SYMBOL}.json")) as f:
        lab = pd.DataFrame(json.load(f))
    lab["date"] = pd.to_datetime(lab["date"])
    return lab[["date", "regime"]]


# ----------------------------------------------------------------- HMM (leak-free)
def forward_filter(obs, sp, tm, mu, cv):
    logB = np.column_stack([multivariate_normal.logpdf(obs, mu[s], cv[s], allow_singular=True)
                            for s in range(len(mu))])
    B = np.exp(logB - logB.max(axis=1, keepdims=True))
    n, k = B.shape; a = np.zeros((n, k)); cur = sp * B[0]; a[0] = cur / (cur.sum() + 1e-300)
    for t in range(1, n):
        cur = (a[t - 1] @ tm) * B[t]; a[t] = cur / (cur.sum() + 1e-300)
    return a


def hmm_probs(obs, tr, upto):
    sc = StandardScaler().fit(obs[tr])
    m = GaussianHMM(n_components=HMM_STATES, covariance_type="full", n_iter=120, random_state=42)
    m.fit(sc.transform(obs[tr]))
    return forward_filter(sc.transform(obs[:upto + 1]), m.startprob_, m.transmat_, m.means_, m.covars_)


def sw(y):
    c = pd.Series(y).value_counts().to_dict(); tot = len(y)
    w = {k: tot / v for k, v in c.items()}
    if REGIME_TO_INT["bear"] in w:
        w[REGIME_TO_INT["bear"]] *= 3.0
    return np.array([w[v] for v in y])


def xgb():
    return XGBClassifier(n_estimators=150, max_depth=2, learning_rate=0.02, subsample=0.8,
                         colsample_bytree=0.6, min_child_weight=20, gamma=0.05, reg_alpha=0.5,
                         reg_lambda=5.0, objective="multi:softprob", num_class=3,
                         eval_metric="mlogloss", random_state=42, verbosity=0)


# ----------------------------------------------------------------- evaluation
def evaluate(label, Xs, obs, y, n, select_k=None):
    pred = np.full(n, -1); preds_sh = np.full(n, -1); conf = np.zeros(n); mask = np.zeros(n, bool)
    tr_a, va_a = [], []; rng = np.random.default_rng(1)
    for tr, va in TimeSeriesSplit(n_splits=N_SPLITS).split(Xs):
        tr = tr[:-H]
        hp = hmm_probs(obs, tr, va[-1])
        hpf = np.full((n, HMM_STATES), 0.0); hpf[:len(hp)] = hp
        X = np.column_stack([Xs, hpf])
        cols = np.arange(X.shape[1])
        if select_k and select_k < X.shape[1]:
            sc0 = StandardScaler().fit(X[tr]); m0 = xgb(); m0.fit(sc0.transform(X[tr]), y[tr], sample_weight=sw(y[tr]))
            cols = np.argsort(m0.feature_importances_)[::-1][:select_k]
        sc = StandardScaler().fit(X[tr][:, cols]); w = sw(y[tr])
        m = xgb(); m.fit(sc.transform(X[tr][:, cols]), y[tr], sample_weight=w)
        pv = m.predict_proba(sc.transform(X[va][:, cols]))
        pred[va] = pv.argmax(1); conf[va] = pv.max(1)
        tr_a.append(accuracy_score(y[tr], m.predict(sc.transform(X[tr][:, cols])))); va_a.append(accuracy_score(y[va], pred[va]))
        ms = xgb(); ms.fit(sc.transform(X[tr][:, cols]), rng.permutation(y[tr]), sample_weight=w)
        preds_sh[va] = ms.predict(sc.transform(X[va][:, cols])); mask[va] = True
    yt = y[mask]
    acc = accuracy_score(yt, pred[mask]) * 100; f1 = f1_score(yt, pred[mask], average="macro")
    gap = (np.mean(tr_a) - np.mean(va_a)) * 100
    shuf = accuracy_score(yt, preds_sh[mask]) * 100
    base = pd.Series(yt).value_counts(normalize=True).max() * 100
    print(f"  {label:22s} acc={acc:5.2f}%  macroF1={f1:.3f}  edge={acc-base:+5.2f}  "
          f"gap={gap:4.1f}pts  shuffle={shuf:.1f}%")
    return acc, conf, pred, mask, base


def main():
    df, cross_cols, vix_cols = build()
    feats_nifty = XGB_FEATURES
    feats_all = XGB_FEATURES + cross_cols + vix_cols
    d = df.dropna(subset=feats_all + ["ret", "rv", "target"]).reset_index(drop=True)
    d["y"] = d["target"].map(REGIME_TO_INT)
    obs = d[["ret", "rv"]].values
    y = d["y"].astype(int).values
    n = len(d)

    print(f"=== WEEKLY v2 — NIFTY 50 | 5-day regime | rows={n} | "
          f"{d['date'].iloc[0].date()} -> {d['date'].iloc[-1].date()} ===")
    print("(acc = walk-forward OOF; gap = overfitting; shuffle should ~= baseline => no leakage)\n")

    a0, *_ = evaluate("A) current (Nifty+HMM)", d[feats_nifty].values, obs, y, n)
    aB, *_ = evaluate("B) v2 all (+cross+VIX)", d[feats_all].values, obs, y, n)
    aC, confC, predC, maskC, base = evaluate("C) v2 select (top-12)", d[feats_all].values, obs, y, n, select_k=TOP_K)

    best = max([("current", a0), ("v2_all", aB), ("v2_select", aC)], key=lambda kv: kv[1])
    print(f"\n  >>> best config: {best[0]} at {best[1]:.2f}%  (current was {a0:.2f}%, "
          f"delta {best[1]-a0:+.2f} pts)")

    # high-confidence hit ratio of the best v2 config
    yt = y[maskC]; correct = (predC[maskC] == yt)
    c = confC[maskC]
    print("\nv2-select hit ratio:")
    print(f"  overall          : {correct.mean()*100:.2f}%")
    for th in (0.50, 0.60, 0.70):
        m = c > th
        if m.sum() > 20:
            print(f"  confidence>{th:.2f}  : {correct[m].mean()*100:.2f}%  (on {m.mean()*100:.0f}% of bars)")

    # ---- LIVE FORECAST for the most recent bar ----------------------------
    predict_latest(df, feats_all)
    return 0


def predict_latest(df, feats_all):
    labeled = df.dropna(subset=feats_all + ["ret", "rv", "target"]).reset_index(drop=True)
    yL = labeled["target"].map(REGIME_TO_INT).astype(int).values
    obsL = labeled[["ret", "rv"]].values
    # HMM probs over the WHOLE series (filtered, fit on labeled history)
    live = df.dropna(subset=feats_all + ["ret", "rv"]).reset_index(drop=True)
    hp = hmm_probs(live[["ret", "rv"]].values, np.arange(len(labeled)), len(live) - 1)
    Xlive = np.column_stack([live[feats_all].values, hp])
    # train on labeled rows (first len(labeled)), predict the most recent row
    Xtr = Xlive[:len(labeled)]
    sc = StandardScaler().fit(Xtr); m = xgb(); m.fit(sc.transform(Xtr), yL, sample_weight=sw(yL))
    last = Xlive[-1:]
    p = m.predict_proba(sc.transform(last))[0]
    reg = LABELS[int(p.argmax())]
    print("\n================  LIVE FORECAST  ================")
    print(f"As of {live['date'].iloc[-1].date()} (NIFTY {live['close'].iloc[-1]:.0f}):")
    print(f"  Predicted regime in ~5 trading days: {reg.upper()}  (confidence {p.max()*100:.1f}%)")
    print(f"  probs -> bear {p[0]*100:.1f}%  sideways {p[1]*100:.1f}%  bull {p[2]*100:.1f}%")


if __name__ == "__main__":
    raise SystemExit(main())
