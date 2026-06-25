"""
live_forecast.py
================
One consolidated LIVE forecast for NIFTY 50 across all three expiries. For each
horizon it reports BOTH:
  * TREND      : BULLISH / BEARISH / SIDEWAYS  (direction)
  * VOLATILITY : CALM / VOLATILE
...with each model's honest walk-forward accuracy, so you know which call to trust.

HONEST NOTE: direction is only reliably predictable at the WEEKLY horizon. Intraday
and monthly DIRECTION are near-random (we measured this) -> their trend call is shown
but flagged LOW-TRUST. Their reliable signal is VOLATILITY.

Leak-free: walk-forward, train-only thresholds, embargo; live call = fit on all
labelled history, predict the most recent bar.
"""
import json
import os
import sys

import numpy as np
import pandas as pd
from sklearn.model_selection import TimeSeriesSplit
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from xgboost import XGBClassifier

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from regime_features import XGB_FEATURES, add_structural_features

N_SPLITS = 5
DIRLAB = ["BEARISH", "SIDEWAYS", "BULLISH"]


def xgb(nclass):
    obj = "multi:softprob" if nclass == 3 else "binary:logistic"
    kw = dict(n_estimators=120, max_depth=2, learning_rate=0.02, subsample=0.8,
              colsample_bytree=0.7, min_child_weight=15, reg_lambda=5.0,
              random_state=42, verbosity=0, eval_metric="mlogloss" if nclass == 3 else "logloss")
    if nclass == 3:
        kw.update(objective=obj, num_class=3)
    else:
        kw.update(objective=obj)
    return XGBClassifier(**kw)


def walk(X, y, H, nclass):
    """OOF accuracy + a model fit on all rows for the live call."""
    pred = np.full(len(y), -1); mask = np.zeros(len(y), bool)
    for tr, va in TimeSeriesSplit(n_splits=N_SPLITS).split(X):
        tr = tr[:-H]
        sc = StandardScaler().fit(X[tr]); m = xgb(nclass)
        m.fit(sc.transform(X[tr]), y[tr]); pred[va] = m.predict(sc.transform(X[va])); mask[va] = True
    acc = accuracy_score(y[mask], pred[mask]) * 100
    base = pd.Series(y[mask]).value_counts(normalize=True).max() * 100
    return acc, base


def forecast_horizon(name, df, feats, H, dir_band):
    d = df.dropna(subset=feats + ["ret", "fwd_ret", "fwd_vol"]).reset_index(drop=True)
    X = d[feats].values
    # --- DIRECTION: 3-class from forward return (rule-based, clean) ---
    yb = np.where(d["fwd_ret"] > dir_band, 2, np.where(d["fwd_ret"] < -dir_band, 0, 1))
    dir_acc, dir_base = walk(X, yb, H, 3)
    # --- VOLATILITY: forward vol vs per-fold train median ---
    yv = np.full(len(d), -1); predv = np.full(len(d), -1); maskv = np.zeros(len(d), bool)
    fv = np.asarray(d["fwd_vol"].values, dtype=float)
    for tr, va in TimeSeriesSplit(n_splits=N_SPLITS).split(X):
        tr = tr[:-H]; thr = np.nanmedian(fv[tr])
        ytr = (fv[tr] > thr).astype(int); yva = (fv[va] > thr).astype(int)
        sc = StandardScaler().fit(X[tr]); m = xgb(2); m.fit(sc.transform(X[tr]), ytr)
        predv[va] = (m.predict_proba(sc.transform(X[va]))[:, 1] > 0.5).astype(int)
        yv[va] = yva; maskv[va] = True
    vol_acc = accuracy_score(yv[maskv], predv[maskv]) * 100
    vol_base = max(yv[maskv].mean(), 1 - yv[maskv].mean()) * 100

    # --- LIVE calls (fit on all labelled, predict last available feature row) ---
    live = df.dropna(subset=feats).reset_index(drop=True)
    Xlive = live[feats].values
    md = xgb(3); scd = StandardScaler().fit(X); md.fit(scd.transform(X), yb)
    pd_ = md.predict_proba(scd.transform(Xlive[-1:]))[0]
    trend = DIRLAB[int(pd_.argmax())]; tconf = pd_.max() * 100
    thr_all = np.nanmedian(d["fwd_vol"].values)
    mv = xgb(2); mv.fit(scd.transform(X), (d["fwd_vol"].values > thr_all).astype(int))
    pv = mv.predict_proba(scd.transform(Xlive[-1:]))[0]
    vol = "VOLATILE" if pv[1] > 0.5 else "CALM"; vconf = pv.max() * 100
    return {
        "name": name, "asof": str(live["date"].iloc[-1].date()) if "date" in live else str(live["time"].iloc[-1]),
        "close": float(live["close"].iloc[-1]),
        "trend": trend, "trend_conf": tconf, "dir_acc": dir_acc, "dir_base": dir_base,
        "vol": vol, "vol_conf": vconf, "vol_acc": vol_acc, "vol_base": vol_base,
    }


# ---------------- data builders ----------------
def daily_df(H):
    with open(os.path.join(HERE, "output", "features_NIFTY.json")) as f:
        df = pd.DataFrame(json.load(f))
    df["date"] = pd.to_datetime(df["date"])
    df = add_structural_features(df.sort_values("date").reset_index(drop=True))
    df["ret"] = df["close"].pct_change()
    df["fwd_ret"] = df["close"].shift(-H) / df["close"] - 1.0
    W = max(H, 2)                       # rolling std needs >=2 points (H=1 outlook)
    df["fwd_vol"] = df["ret"].shift(-1).rolling(W).std().shift(-(W - 1))
    return df


def intraday_df(H, interval="15m"):
    df = pd.read_csv(os.path.join(HERE, f"NSE_NIFTY_intraday_{interval}.csv"))
    # keep IST (NSE local time, 09:15 open) so displayed/keyed times are correct
    df["time"] = pd.to_datetime(df["time"], utc=True).dt.tz_convert("Asia/Kolkata")
    df = df.sort_values("time").reset_index(drop=True)
    c = df["close"]
    df["ret"] = c.pct_change()
    for k in (1, 2, 4):
        df[f"ret_{k}"] = c.pct_change(k)
    df["mom_12"] = c.pct_change(12); df["vol_12"] = df["ret"].rolling(12).std()
    df["vol_24"] = df["ret"].rolling(24).std(); df["range_pct"] = (df["high"] - df["low"]) / c
    df["dist_sma_24"] = (c - c.rolling(24).mean()) / c.rolling(24).mean()
    df["bar_of_day"] = df.groupby(df["time"].dt.date).cumcount()
    df["fwd_ret"] = c.shift(-H) / c - 1.0
    df["fwd_vol"] = df["ret"].shift(-1).rolling(H).std().shift(-(H - 1))
    return df


def main():
    INTRA_FEATS = ["ret_1", "ret_2", "ret_4", "mom_12", "vol_12", "vol_24",
                   "range_pct", "dist_sma_24", "bar_of_day"]
    rows = []
    rows.append(forecast_horizon("Intraday 5-min (~4h)", intraday_df(48, "5m"), INTRA_FEATS, 48, 0.004))
    rows.append(forecast_horizon("Intraday 15-min (~4h)", intraday_df(16, "15m"), INTRA_FEATS, 16, 0.004))
    rows.append(forecast_horizon("Weekly expiry (5d)", daily_df(5), XGB_FEATURES, 5, 0.010))
    rows.append(forecast_horizon("Monthly expiry (21d)", daily_df(21), XGB_FEATURES, 21, 0.020))

    from datetime import datetime, timezone
    print("\n================  NIFTY 50 LIVE FORECAST  ================")
    payload = {"generated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"), "horizons": []}
    for r in rows:
        trust = "RELIABLE" if r["dir_acc"] - r["dir_base"] > 5 else "LOW-TRUST"
        print(f"\n{r['name']}  (as of {r['asof']}, NIFTY {r['close']:.0f})")
        print(f"  TREND      : {r['trend']:8s} (conf {r['trend_conf']:.0f}%)  "
              f"[model acc {r['dir_acc']:.1f}% vs base {r['dir_base']:.1f}% -> {trust}]")
        print(f"  VOLATILITY : {r['vol']:8s} (conf {r['vol_conf']:.0f}%)  "
              f"[model acc {r['vol_acc']:.1f}% vs base {r['vol_base']:.1f}%]")
        payload["horizons"].append({**r, "trend_trust": trust})
    print("\nNote: TREND is RELIABLE only where model beats baseline by >5 pts (weekly).")
    print("      Intraday/Monthly: trust the VOLATILITY call, treat TREND as weak.")

    out = os.path.join(HERE, "frontend", "frontend", "public", "data", "live_forecast.json")
    if os.path.isdir(os.path.dirname(out)):
        with open(out, "w") as f:
            json.dump(payload, f, indent=2, default=float)
        print(f"[OK] wrote {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
