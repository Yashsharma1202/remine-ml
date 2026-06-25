"""
extend_daily_features.py — bring output/features_NIFTY.json up to the latest
available daily bar WITHOUT disturbing the authentic Rust-core history.

Strategy (minimise drift):
  * Keep every existing row (authentic Rust features) untouched.
  * For each NEW trading day after the last existing date, compute the same
    feature set in Python. Close-based rolling features use a STITCHED close
    series = authentic historical closes ++ new daily closes (from the 1-minute
    data), so the windows lean on authentic prices wherever they exist.
  * ADX needs high/low (absent from the existing file) -> computed from the full
    daily OHLC resampled from the 1-minute source.

Feature definitions were validated against the existing table (corr: macd_h 0.997,
adx 0.998, bb_pct 0.993, returns/vol ~0.99, ema_gap=(EMA20-EMA50)/close 0.986).
RSI/skew/kurt match ~0.89 (close drift) — acceptable for the few appended rows.

A timestamped backup of the original JSON is written before overwriting.
"""
import json
import os
import shutil
from datetime import datetime, timezone

import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
FEAT = os.path.join(HERE, "output", "features_NIFTY.json")
SRC = r"D:\ML_regime\NIFTY_50.csv"


def wilder_rsi(c, n):
    dl = c.diff(); g = dl.clip(lower=0); l = -dl.clip(upper=0)
    ag = g.ewm(alpha=1 / n, adjust=False).mean(); al = l.ewm(alpha=1 / n, adjust=False).mean()
    return 100 - 100 / (1 + ag / al)


def ema(s, n):
    return s.ewm(span=n, adjust=False).mean()


def daily_ohlc():
    raw = pd.read_csv(SRC); raw.columns = [c.lower() for c in raw.columns]
    raw["datetime"] = pd.to_datetime(raw["datetime"])
    d = (raw.set_index("datetime").resample("1D")
            .agg({"open": "first", "high": "max", "low": "min", "close": "last"}).dropna().reset_index())
    d["date"] = d["datetime"].dt.strftime("%Y-%m-%d")
    return d


def adx_series(d):
    c = d["close"]; up = d["high"].diff(); dn = -d["low"].diff()
    pdm = pd.Series(np.where((up > dn) & (up > 0), up, 0.0), index=c.index)
    mdm = pd.Series(np.where((dn > up) & (dn > 0), dn, 0.0), index=c.index)
    tr = pd.concat([d["high"] - d["low"], (d["high"] - c.shift()).abs(),
                    (d["low"] - c.shift()).abs()], axis=1).max(axis=1)
    atr = tr.ewm(alpha=1 / 14, adjust=False).mean()
    pdi = 100 * pdm.ewm(alpha=1 / 14, adjust=False).mean() / atr
    mdi = 100 * mdm.ewm(alpha=1 / 14, adjust=False).mean() / atr
    dx = 100 * (pdi - mdi).abs() / (pdi + mdi)
    return dx.ewm(alpha=1 / 14, adjust=False).mean()


def main():
    existing = json.load(open(FEAT))
    last_date = max(r["date"][:10] for r in existing)
    print(f"existing rows: {len(existing)} | last date: {last_date}")

    d = daily_ohlc()
    d["adx"] = adx_series(d)
    new = d[d["date"] > last_date].copy()
    if new.empty:
        print("nothing to append — already current."); return 0
    print(f"new trading days to append: {len(new)} ({new['date'].iloc[0]} -> {new['date'].iloc[-1]})")

    # stitched close series: authentic history ++ new daily closes
    hist = pd.DataFrame({"date": [r["date"][:10] for r in existing],
                         "close": [float(r["close"]) for r in existing]})
    stitch = pd.concat([hist, new[["date", "close"]]], ignore_index=True).drop_duplicates("date").sort_values("date").reset_index(drop=True)
    c = stitch["close"]; r1 = c.pct_change()
    macd = ema(c, 12) - ema(c, 26); macd_h = macd - ema(macd, 9)
    sma20 = c.rolling(20).mean(); sd20 = c.rolling(20).std()
    feats = pd.DataFrame({
        "date": stitch["date"],
        "ret_1d": r1, "ret_5d": c.pct_change(5), "ret_10d": c.pct_change(10),
        "ret_21d": c.pct_change(21), "ret_42d": c.pct_change(42), "ret_63d": c.pct_change(63),
        "ret_126d": c.pct_change(126),
        "vol_10d": r1.rolling(10).std() * np.sqrt(252),
        "vol_21d": r1.rolling(21).std() * np.sqrt(252),
        "vol_63d": r1.rolling(63).std() * np.sqrt(252),
        "skew_21d": r1.rolling(21).skew(), "kurt_21d": r1.rolling(21).kurt(),
        "rsi_14": wilder_rsi(c, 14), "rsi_21": wilder_rsi(c, 21),
        "macd_h": macd_h,
        "bb_pct": (c - (sma20 - 2 * sd20)) / ((sma20 + 2 * sd20) - (sma20 - 2 * sd20)),
        "ema_gap": (ema(c, 20) - ema(c, 50)) / c,
        "ret_z21": (r1 - r1.rolling(21).mean()) / r1.rolling(21).std(),
    })
    feats["vol_ratio"] = feats["vol_21d"] / feats["vol_63d"]
    adx_map = dict(zip(d["date"], d["adx"]))

    keys = list(existing[0].keys())
    rows = []
    for _, fr in feats[feats["date"] > last_date].iterrows():
        row = {"date": fr["date"], "symbol": existing[0].get("symbol", "NIFTY"),
               "close": float(stitch.loc[stitch["date"] == fr["date"], "close"].iloc[0])}
        for k in keys:
            if k in ("date", "symbol", "close"):
                continue
            v = adx_map.get(fr["date"]) if k == "adx" else fr.get(k)
            row[k] = float(v) if v is not None and not (isinstance(v, float) and np.isnan(v)) else 0.0
        rows.append({k: row.get(k, 0.0) for k in keys})

    print("\nappended rows (date | close | rsi_14 | macd_h | adx | vol_21d):")
    for r in rows:
        print(f"  {r['date']} | {r['close']:.1f} | rsi {r['rsi_14']:.1f} | macd {r['macd_h']:.1f} | "
              f"adx {r['adx']:.1f} | vol21 {r['vol_21d']:.3f}")

    bak = FEAT + "." + datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S") + ".bak"
    shutil.copy2(FEAT, bak)
    json.dump(existing + rows, open(FEAT, "w"))
    print(f"\n[OK] backup -> {bak}")
    print(f"[OK] wrote {FEAT}: {len(existing)} + {len(rows)} = {len(existing) + len(rows)} rows, "
          f"now through {rows[-1]['date']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
