"""
add_trend.py — attach a per-bar TREND (bullish / bearish / sideways) to every
timeline point in our_models.json, so the dashboard timeline can show direction
alongside the volatility-regime predictions.

Direction is a walk-forward 3-class model on the forward return (leak-free: embargo,
train-only scaler). It is added ONLY as context — headline hit ratios are unchanged.
"""
import json
import os
import sys

import numpy as np
from sklearn.model_selection import TimeSeriesSplit
from sklearn.preprocessing import StandardScaler

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from regime_features import XGB_FEATURES
from live_forecast import daily_df, intraday_df, xgb, N_SPLITS

OUT = os.path.join(HERE, "frontend", "frontend", "public", "data", "our_models.json")
DIR = ["bearish", "sideways", "bullish"]

INTRADAY_FEATS = ["ret_1", "ret_2", "ret_4", "mom_12", "vol_12", "vol_24",
                  "range_pct", "dist_sma_24", "bar_of_day"]


def direction_map(df, feats, H, band, xcol, klen):
    d = df.dropna(subset=feats + ["fwd_ret"]).reset_index(drop=True)
    X = d[feats].values
    fr = d["fwd_ret"].values
    yb = np.where(fr > band, 2, np.where(fr < -band, 0, 1))
    pred = np.full(len(d), -1); mask = np.zeros(len(d), bool)
    for tr, va in TimeSeriesSplit(n_splits=N_SPLITS).split(X):
        tr = tr[:-H]
        sc = StandardScaler().fit(X[tr]); m = xgb(3); m.fit(sc.transform(X[tr]), yb[tr])
        pred[va] = m.predict(sc.transform(X[va])); mask[va] = True
    out = {}
    for i in range(len(d)):
        if mask[i]:
            out[str(d[xcol].iloc[i])[:klen]] = DIR[int(pred[i])]
    return out, klen


def main():
    with open(OUT) as f:
        payload = json.load(f)

    specs = {
        "intraday_5m":  (intraday_df(48, "5m"),  INTRADAY_FEATS, 48, 0.002, "time", 19),
        "intraday_15m": (intraday_df(16, "15m"), INTRADAY_FEATS, 16, 0.002, "time", 19),
        "weekly":       (daily_df(5),  XGB_FEATURES,  5, 0.010, "date", 10),
        "monthly":      (daily_df(21), XGB_FEATURES, 21, 0.020, "date", 10),
    }

    for t in payload["tracks"]:
        spec = specs.get(t["key"])
        if not spec:
            continue
        df, feats, H, band, xcol, klen = spec
        dmap, klen = direction_map(df, feats, H, band, xcol, klen)
        hit = 0
        for p in t["timeline"]:
            tr = dmap.get(str(p["x"])[:klen])
            p["trend"] = tr
            hit += tr is not None
        for p in t.get("recent", []):
            p["trend"] = dmap.get(str(p["x"])[:klen])
        for p in t.get("market_candles", []):
            p["trend"] = dmap.get(str(p["x"])[:klen])
        print(f"  {t['key']:9s}: trend attached to {hit}/{len(t['timeline'])} timeline points "
              f"(+{len(t.get('recent', []))} recent, +{len(t.get('market_candles', []))} market)")

    with open(OUT, "w") as f:
        json.dump(payload, f, indent=2, default=float)
    print(f"[OK] updated {OUT}")


if __name__ == "__main__":
    main()
