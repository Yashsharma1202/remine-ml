"""
forecast_ahead.py — LIVE multi-day OUTLOOK for NIFTY 50.

From the latest available daily features, forecast the market state over the next
N trading days (cumulative — "where will we be in h days"):
  * DIRECTION  : BULLISH / BEARISH / SIDEWAYS  (+ honest trust flag)
  * VOLATILITY : CALM / VOLATILE
...each with a LIVE confidence and the model's walk-forward accuracy for that lead.

Reuses live_forecast.forecast_horizon (same leak-free walk-forward + live-fit logic),
once per lead h in LEADS. Writes public/data/forecast_ahead.json for the dashboard.
"""
import json
import os
import sys
from datetime import datetime, timezone

import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from regime_features import XGB_FEATURES
from live_forecast import daily_df, forecast_horizon

LEADS = [1, 2, 3, 5, 7, 10]          # trading days ahead to forecast


def next_trading_days(last_date, n):
    """The next n weekday dates after last_date (NSE holidays not modelled)."""
    out, d = [], pd.Timestamp(last_date)
    while len(out) < n:
        d += pd.Timedelta(days=1)
        if d.weekday() < 5:           # Mon-Fri
            out.append(d)
    return out


def main():
    base = daily_df(1).dropna(subset=XGB_FEATURES)
    asof = base["date"].iloc[-1]
    asof_close = float(base["close"].iloc[-1])
    upcoming = next_trading_days(asof, max(LEADS))

    print("\n===========  NIFTY 50  —  UPCOMING-DAYS FORECAST  ===========")
    print(f"as of {asof.date()}  ·  NIFTY {asof_close:.0f}\n")

    days = []
    for h in LEADS:
        band = 0.004 * (h ** 0.5)     # wider tolerance for longer cumulative windows
        r = forecast_horizon(f"+{h}d", daily_df(h), XGB_FEATURES, h, band)
        trust = "RELIABLE" if r["dir_acc"] - r["dir_base"] > 5 else "LOW"
        date = str(upcoming[h - 1].date())
        days.append({
            "lead": h, "date": date,
            "dir": r["trend"], "dir_conf": round(r["trend_conf"], 1),
            "dir_acc": round(r["dir_acc"], 1), "dir_base": round(r["dir_base"], 1),
            "dir_trust": trust,
            "vol": r["vol"], "vol_conf": round(r["vol_conf"], 1),
            "vol_acc": round(r["vol_acc"], 1), "vol_base": round(r["vol_base"], 1),
        })
        print(f"  +{h:>2}d ({date}):  {r['trend']:8s} {r['trend_conf']:>3.0f}% [{trust:8s}]"
              f"   |   {r['vol']:8s} {r['vol_conf']:>3.0f}%   "
              f"(dir acc {r['dir_acc']:.0f}% / vol acc {r['vol_acc']:.0f}%)")

    payload = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "asof": str(asof.date()), "asof_close": asof_close, "days": days,
    }
    out = os.path.join(HERE, "frontend", "frontend", "public", "data", "forecast_ahead.json")
    if os.path.isdir(os.path.dirname(out)):
        with open(out, "w") as f:
            json.dump(payload, f, indent=2, default=float)
        print(f"\n[OK] wrote {out}")
    print("\nNote: DIRECTION is RELIABLE only where flagged (model beats base by >5 pts);")
    print("      elsewhere treat it as weak and trust the VOLATILITY call.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
