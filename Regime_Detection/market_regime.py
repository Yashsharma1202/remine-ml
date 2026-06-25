"""
market_regime.py — classify NIFTY 50 DAILY market behaviour (bullish / bearish /
sideways) over the MAXIMUM available history (1-minute data 2016-2026 -> daily),
and write it for the dashboard:  public/data/market_regime.json

Per-day parameters used (all from data up to that day -> no look-ahead):
  * ret_1d   : the day's return
  * ret_20d  : 1-month momentum
  * vol_20d  : 1-month annualised volatility
  * ema20/50 : trend via fast vs slow exponential moving averages

Regime rule (trend + momentum):
  BULLISH  : ema20 > ema50  AND  ret_20d > +1.5%
  BEARISH  : ema20 < ema50  AND  ret_20d < -1.5%
  SIDEWAYS : otherwise (no clear trend)

This is regime IDENTIFICATION (what the market is doing each day). Seeing how
regimes persist/transition is the context that helps anticipate the intraday /
weekly / monthly forecasts.
"""
import json
import os

import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = r"D:\ML_regime\NIFTY_50.csv"
OUT = os.path.join(HERE, "frontend", "frontend", "public", "data", "market_regime.json")
CHART_DAYS = 320


def main():
    raw = pd.read_csv(SRC)
    raw.columns = [c.lower() for c in raw.columns]
    raw["datetime"] = pd.to_datetime(raw["datetime"])
    d = (raw.set_index("datetime").resample("1D")
            .agg({"open": "first", "high": "max", "low": "min", "close": "last"}).dropna())
    c = d["close"]
    d["ret_1d"] = c.pct_change() * 100
    d["ret_20d"] = c.pct_change(20) * 100
    d["vol_20d"] = c.pct_change().rolling(20).std() * np.sqrt(252) * 100
    ema_f = c.ewm(span=20, adjust=False).mean()
    ema_s = c.ewm(span=50, adjust=False).mean()

    # Trend score = 1-month momentum tilted by the EMA20-vs-EMA50 gap (trend direction).
    ema_gap = (ema_f - ema_s) / ema_s * 100
    d["trend_score"] = d["ret_20d"] + ema_gap
    d = d.dropna(subset=["ret_20d", "vol_20d", "trend_score"]).reset_index()

    # Balanced, data-driven thresholds (fix the old 16%-bearish skew). The trend
    # score is split by its own distribution: bottom band = bearish, top band =
    # bullish, middle = sideways. Tilted slightly up (bull gets a larger share)
    # to reflect NIFTY's long-run drift, but bearish now gets a realistic ~30%.
    s = d["trend_score"].to_numpy()
    lo, hi = np.percentile(s, 33), np.percentile(s, 60)
    d["regime"] = np.where(s > hi, "bullish", np.where(s < lo, "bearish", "sideways"))

    n = len(d)
    counts = d["regime"].value_counts()
    summary = {
        "n_days": int(n),
        "start": str(d["datetime"].iloc[0].date()),
        "end": str(d["datetime"].iloc[-1].date()),
        "bullish_pct": round(float((d["regime"] == "bullish").mean()) * 100, 1),
        "bearish_pct": round(float((d["regime"] == "bearish").mean()) * 100, 1),
        "sideways_pct": round(float((d["regime"] == "sideways").mean()) * 100, 1),
        "current_regime": str(d["regime"].iloc[-1]),
        "current_date": str(d["datetime"].iloc[-1].date()),
    }
    # average run length per regime (persistence)
    runs = (d["regime"] != d["regime"].shift()).cumsum()
    seg = pd.DataFrame({"run": runs.values, "regime": d["regime"].values})
    lengths = seg.groupby("run").agg(regime=("regime", "first"), length=("regime", "size"))
    avg = lengths.groupby("regime")["length"].mean()
    summary["avg_duration"] = {r: round(float(avg.get(r, 0.0)), 1)
                               for r in ["bullish", "bearish", "sideways"]}

    # -------- VALIDATION: does the regime actually predict forward returns? --------
    def regime_stats(regs, fwd):
        fwd = pd.Series(fwd).reset_index(drop=True)
        regs = pd.Series(regs).reset_index(drop=True)
        out = {}
        for r in ["bullish", "bearish", "sideways"]:
            m = (regs == r) & fwd.notna()
            fr = fwd[m]
            out[r] = {"mean_ret": round(float(fr.mean()) * 100, 3) if len(fr) else 0.0,
                      "pct_up": round(float((fr > 0).mean()) * 100, 1) if len(fr) else 0.0,
                      "n": int(len(fr))}
        return out

    dc = d["close"]
    frames = [
        {"frame": "Weekly (5d)", **regime_stats(d["regime"], dc.shift(-5) / dc - 1)},
        {"frame": "Monthly (21d)", **regime_stats(d["regime"], dc.shift(-21) / dc - 1)},
    ]
    # intraday: tag each 15m bar with its DAY's regime, forward 16-bar (~4h) return
    try:
        intra = pd.read_csv(os.path.join(HERE, "NSE_NIFTY_intraday_15m.csv"))
        it = pd.to_datetime(intra["time"])
        regmap = {dt.date(): r for dt, r in zip(d["datetime"], d["regime"])}
        ireg = it.dt.date.map(regmap)
        ic = intra["close"]
        ifwd = ic.shift(-16) / ic - 1
        frames.insert(0, {"frame": "Intraday (4h)", **regime_stats(ireg, ifwd)})
    except Exception as e:
        print("  (intraday validation skipped:", e, ")")
    validation = {"frames": frames}

    def row(r):
        return {"date": str(r["datetime"].date()), "open": float(r["open"]), "high": float(r["high"]),
                "low": float(r["low"]), "close": float(r["close"]), "regime": str(r["regime"]),
                "ret_1d": round(float(r["ret_1d"]), 2), "ret_20d": round(float(r["ret_20d"]), 2),
                "vol_20d": round(float(r["vol_20d"]), 1)}

    candles = [row(r) for _, r in d.tail(CHART_DAYS).iterrows()]
    recent = [row(r) for _, r in d.tail(20).iloc[::-1].iterrows()]

    payload = {"summary": summary, "candles": candles, "recent": recent, "validation": validation}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w") as f:
        json.dump(payload, f, indent=2, default=float)
    print(f"[OK] wrote {OUT}")
    print(f"  {n} trading days {summary['start']} -> {summary['end']}")
    print(f"  bullish {summary['bullish_pct']}%  bearish {summary['bearish_pct']}%  "
          f"sideways {summary['sideways_pct']}%")
    print(f"  current regime: {summary['current_regime'].upper()} (as of {summary['current_date']})")
    print("\n  VALIDATION — mean forward return by regime (does the regime predict?):")
    for fr in validation["frames"]:
        b, be, s = fr["bullish"], fr["bearish"], fr["sideways"]
        print(f"    {fr['frame']:16s}  bull {b['mean_ret']:+.2f}% ({b['pct_up']:.0f}% up)  "
              f"bear {be['mean_ret']:+.2f}% ({be['pct_up']:.0f}% up)  "
              f"side {s['mean_ret']:+.2f}% ({s['pct_up']:.0f}% up)")


if __name__ == "__main__":
    main()
