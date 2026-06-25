"""
resample_intraday.py — build 5m / 15m NIFTY 50 intraday bars from the user's
1-minute data (D:\\ML_regime\\NIFTY_50.csv, ~2016-2026), replacing the short
yfinance files. Also resamples BANKNIFTY / SENSEX (available as cross-asset).

1-minute OHLCV is aggregated into 5- and 15-minute bars. Resampling is done with
left labels so each bar is stamped at its OPEN time (matching NSE's 09:15 start);
empty overnight/weekend bins are dropped. No look-ahead — pure aggregation.
"""
import os
import pandas as pd

SRC = r"D:\ML_regime"
DST = os.path.dirname(os.path.abspath(__file__))
AGG = {"open": "first", "high": "max", "low": "min", "close": "last", "volume": "sum"}
JOBS = [("NIFTY_50.csv", "NSE_NIFTY"), ("BANKNIFTY.csv", "NSE_BANKNIFTY"),
        ("SENSEX.csv", "NSE_SENSEX")]


def resample_file(name_in, prefix):
    df = pd.read_csv(os.path.join(SRC, name_in))
    df.columns = [c.lower() for c in df.columns]
    df = df.rename(columns={"datetime": "time"})
    df["time"] = pd.to_datetime(df["time"])
    df = df.set_index("time").sort_index()
    for iv, rule in [("5m", "5min"), ("15m", "15min")]:
        r = (df.resample(rule, label="left", closed="left")
               .agg(AGG).dropna(subset=["open", "close"]))
        out = r.reset_index()[["time", "open", "high", "low", "close"]]
        path = os.path.join(DST, f"{prefix}_intraday_{iv}.csv")
        out.to_csv(path, index=False)
        print(f"  {prefix} {iv}: {len(out):>7d} bars | "
              f"{out['time'].min()} -> {out['time'].max()}")


def main():
    for name_in, prefix in JOBS:
        p = os.path.join(SRC, name_in)
        if not os.path.exists(p):
            print(f"  (skip {name_in}: not found)"); continue
        print(f"Resampling {name_in} ...")
        resample_file(name_in, prefix)
    print("[OK] resampled intraday bars written.")


if __name__ == "__main__":
    main()
