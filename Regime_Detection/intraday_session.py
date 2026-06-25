"""
intraday_session.py — "Yesterday's intraday chart": the most recent COMPLETE
trading session, 5-minute candles from 09:15 to 13:15 (IST), with the model's
volatility prediction merged onto each candle.

09:15 -> 13:15 is exactly the window the 5-minute model forecasts (horizon = 48
bars = 4 hours), so the 09:15 "morning call" is the prediction for this whole
window. Writes public/data/intraday_session.json.
"""
import json
import os

import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = r"D:\ML_regime\NIFTY_50.csv"
MR = os.path.join(HERE, "frontend", "frontend", "public", "data", "market_regime.json")
OUT = os.path.join(HERE, "frontend", "frontend", "public", "data", "intraday_session.json")
INTERVAL = "5m"
START, END = "09:15", "13:15"


def main():
    # 5-minute candles (resampled from 1-minute), IST
    raw = pd.read_csv(SRC)
    raw.columns = [c.lower() for c in raw.columns]
    raw["datetime"] = pd.to_datetime(raw["datetime"])
    c = (raw.set_index("datetime").resample("5min", label="left", closed="left")
            .agg({"open": "first", "high": "max", "low": "min", "close": "last"}).dropna()
            .reset_index())
    c["d"] = c["datetime"].dt.strftime("%Y-%m-%d")
    c["hm"] = c["datetime"].dt.strftime("%H:%M")
    win = c[(c["hm"] >= START) & (c["hm"] <= END)].copy()

    # latest day that actually reaches ~13:15
    last_per_day = win.groupby("d")["hm"].max()
    full_days = sorted(last_per_day[last_per_day >= "13:05"].index)
    if not full_days:
        print("no complete 09:15-13:15 session found"); return
    day = full_days[-1]
    sess = win[win["d"] == day].sort_values("datetime").reset_index(drop=True)

    # merge the model's per-bar prediction (5m eval; eval time is UTC)
    ev = pd.read_csv(os.path.join(HERE, "intraday_hybrid_5m_eval.csv"))
    et = pd.to_datetime(ev["time"], utc=True).dt.tz_convert("Asia/Kolkata").dt.strftime("%Y-%m-%d %H:%M:%S")
    prob = ev["prob_highvol_hybrid"].to_numpy()
    pmap = {k: (str(p), str(a), bool(co), float(np.abs(pr - 0.5) + 0.5) * 100)
            for k, p, a, co, pr in zip(et, ev["pred"], ev["actual"], ev["correct"], prob)}

    regmap = {}
    if os.path.exists(MR):
        regmap = {r["date"]: r["regime"] for r in json.load(open(MR)).get("candles", [])}
    regime = regmap.get(day, "sideways")

    candles, open_pred = [], None
    for _, r in sess.iterrows():
        key = r["datetime"].strftime("%Y-%m-%d %H:%M:%S")
        pm = pmap.get(key)
        cd = {"x": key, "hm": r["hm"], "open": float(r["open"]), "high": float(r["high"]),
              "low": float(r["low"]), "close": float(r["close"]), "regime": regime}
        if pm:
            cd["pred"], cd["actual"], cd["correct"], cd["conf"] = pm[0], pm[1], pm[2], round(pm[3], 1)
        candles.append(cd)
        if r["hm"] == "09:15" and pm:
            open_pred = {"pred": pm[0], "conf": round(pm[3], 1)}

    payload = {"date": day, "window": f"{START}-{END} IST", "interval": INTERVAL,
               "regime": regime, "open_pred": open_pred, "candles": candles}
    with open(OUT, "w") as f:
        json.dump(payload, f, indent=2, default=float)
    print(f"[OK] wrote {OUT}")
    print(f"  yesterday session: {day} | {len(candles)} 5-min candles {START}-{END} | "
          f"regime={regime} | morning call={open_pred}")


if __name__ == "__main__":
    main()
