"""
weekly_harrv_nifty50.py
=======================
HAR-RV model on the WEEKLY (5-day) horizon for NIFTY 50.

IMPORTANT: HAR-RV forecasts VOLATILITY, not direction. So this is a WEEKLY
VOLATILITY model — "will the next 5 trading days be CALM or VOLATILE?" — a
complement to the weekly DIRECTION model (bull/bear/sideways), not a replacement.

HAR-RV (Corsi, 2009): forecast next-period realized volatility from three averages
of past volatility (daily / weekly / monthly):

    RV_fwd = b0 + b_d*RV_day + b_w*RV_week + b_m*RV_month   (linear regression)

It captures volatility's long memory across time-scales — the academic gold
standard for vol forecasting, robust and low-overfitting (3 features, linear).

We evaluate:
  * FORECAST skill: out-of-sample R2 / correlation of predicted vs actual 5-day vol.
  * REGIME skill  : threshold the forecast into high/low-vol and report hit ratio,
                    vs baseline and vs a naive 1-day persistence rule.

LEAK-FREE: HAR features use only past bars; the regression, the regime threshold,
and the comparison are all fit on TRAIN only; embargo between train and validation;
the target is the strictly-forward 5-day volatility.

DATA: output/features_NIFTY.json (NIFTY 50 daily close).
Usage:  python weekly_harrv_nifty50.py
"""
import json
import os

import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, accuracy_score
from sklearn.model_selection import TimeSeriesSplit

HERE = os.path.dirname(os.path.abspath(__file__))
H = 5                 # weekly horizon (trading days)
N_SPLITS = 5


def load():
    with open(os.path.join(HERE, "output", "features_NIFTY.json")) as f:
        df = pd.DataFrame(json.load(f))
    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values("date").reset_index(drop=True)
    df["ret"] = df["close"].pct_change()
    df["rvol"] = df["ret"].abs()                       # daily realized-vol proxy
    # HAR components (past only)
    df["rv_d"] = df["rvol"]
    df["rv_w"] = df["rvol"].rolling(5).mean()
    df["rv_m"] = df["rvol"].rolling(22).mean()
    # target: average realized vol over the NEXT H days (strictly forward)
    df["rv_fwd"] = df["rvol"].shift(-1).rolling(H).mean().shift(-(H - 1))
    return df


def main():
    df = load()
    d = df.dropna(subset=["rv_d", "rv_w", "rv_m", "rv_fwd"]).reset_index(drop=True)
    X = d[["rv_d", "rv_w", "rv_m"]].values
    yv = d["rv_fwd"].values
    n = len(d)

    print(f"=== HAR-RV — WEEKLY (5-day) VOLATILITY — NIFTY 50 | rows={n} | "
          f"{d['date'].iloc[0].date()} -> {d['date'].iloc[-1].date()} ===")
    print("(forecasts next-5-day volatility, then classifies calm vs volatile)\n")

    pred_rv = np.full(n, np.nan); pred_reg = np.full(n, -1); y_reg = np.full(n, -1)
    naive_reg = np.full(n, -1); mask = np.zeros(n, bool); r2s = []
    for tr, va in TimeSeriesSplit(n_splits=N_SPLITS).split(X):
        tr = tr[:-H]                                   # embargo
        m = LinearRegression().fit(X[tr], yv[tr])
        pv = m.predict(X[va]); pred_rv[va] = pv
        r2s.append(r2_score(yv[va], pv))
        thr = np.median(yv[tr])                        # high/low cut from TRAIN
        pred_reg[va] = (pv > thr).astype(int)
        y_reg[va] = (yv[va] > thr).astype(int)
        naive_reg[va] = (d["rv_d"].values[va] > np.median(d["rv_d"].values[tr])).astype(int)
        mask[va] = True

    yt = y_reg[mask]
    base = max(yt.mean(), 1 - yt.mean()) * 100
    har_acc = accuracy_score(yt, pred_reg[mask]) * 100
    naive_acc = accuracy_score(yt, naive_reg[mask]) * 100
    corr = np.corrcoef(yv[mask], pred_rv[mask])[0, 1]
    print("FORECAST skill (continuous next-5-day volatility):")
    print(f"  out-of-sample R2   : {np.mean(r2s):.3f}")
    print(f"  correlation (pred vs actual): {corr:.3f}\n")
    print("REGIME skill (calm vs volatile):")
    print(f"  HAR-RV accuracy    : {har_acc:.2f}%   baseline {base:.2f}%   edge {har_acc-base:+.2f}")
    print(f"  naive 1-day persist: {naive_acc:.2f}%   (HAR should match/beat this)")

    # coefficients from a final fit on all data (interpretation only)
    mfull = LinearRegression().fit(X, yv)
    bd, bw, bm = mfull.coef_
    print(f"\nHAR weights -> daily {bd:.3f} | weekly {bw:.3f} | monthly {bm:.3f}  "
          f"(which horizon drives next-week vol)")

    out = d.loc[mask, ["date", "close", "rv_fwd"]].copy()
    out["pred_rv"] = pred_rv[mask]
    out["pred_regime"] = np.where(pred_reg[mask] == 1, "volatile", "calm")
    out["actual_regime"] = np.where(yt == 1, "volatile", "calm")
    out["correct"] = out["pred_regime"] == out["actual_regime"]
    out.to_csv(os.path.join(HERE, "weekly_harrv_nifty50_eval.csv"), index=False)

    # live forecast
    last = df.dropna(subset=["rv_d", "rv_w", "rv_m"]).iloc[-1]
    pv = mfull.predict(last[["rv_d", "rv_w", "rv_m"]].values.reshape(1, -1))[0]
    reg = "VOLATILE" if pv > np.median(yv) else "CALM"
    print(f"\n================  LIVE FORECAST  ================")
    print(f"As of {last['date'].date()} (NIFTY {last['close']:.0f}):")
    print(f"  Next 5 trading days expected to be: {reg}  (predicted vol {pv:.4f} vs median {np.median(yv):.4f})")
    print(f"[OK] wrote weekly_harrv_nifty50_eval.csv")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
