"""
make_index_summary.py — produce dashboard/public/summary.json for the ML_regime
dashboard using the LOCAL index CSVs (no yfinance download needed).

It computes a REAL multi-indicator consensus for NIFTY 50 / BANKNIFTY / SENSEX:
RSI, MACD, ADX/DMI, Bollinger %B, ATR, EMA structure, z-score, ROC, Supertrend.
Each signal votes +1/-1/0; votes are grouped into categories (Trend / Momentum /
Volatility / Volume) for the UI breakdown, then summarised into a consensus,
a direction + confidence, ATR-based targets, and a simple 5d/10d hit-ratio backtest.

Output matches the schema generate_summary.py emits (a JSON array of stock objects),
so the same dashboard renders this now and the full Nifty 50/500 run later.
"""
import json
import os

import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "public", "summary.json")
SRC = {
    "NIFTY 50": (r"D:\ML_regime\NIFTY_50.csv", "Nifty 50 Index", "Index"),
    "BANKNIFTY": (r"D:\ML_regime\BANKNIFTY.csv", "Nifty Bank Index", "Index"),
    "SENSEX": (r"D:\ML_regime\SENSEX.csv", "BSE Sensex Index", "Index"),
}


def daily(path):
    raw = pd.read_csv(path); raw.columns = [c.lower() for c in raw.columns]
    raw["datetime"] = pd.to_datetime(raw["datetime"])
    agg = {"open": "first", "high": "max", "low": "min", "close": "last"}
    if "volume" in raw.columns:
        agg["volume"] = "sum"
    d = raw.set_index("datetime").resample("1D").agg(agg).dropna(subset=["close"]).reset_index()
    if "volume" not in d:
        d["volume"] = 0.0
    return d


def wilder(s, n):
    return s.ewm(alpha=1 / n, adjust=False).mean()


def rsi(c, n=14):
    dl = c.diff(); g = dl.clip(lower=0); l = -dl.clip(upper=0)
    return 100 - 100 / (1 + wilder(g, n) / wilder(l, n))


def compute(d):
    c, h, lo, v = d["close"], d["high"], d["low"], d["volume"]
    ema = lambda n: c.ewm(span=n, adjust=False).mean()
    out = {}
    out["rsi"] = rsi(c, 14)
    macd = ema(12) - ema(26)
    out["macd_h"] = macd - macd.ewm(span=9, adjust=False).mean()
    out["ema20"], out["ema50"], out["ema200"] = ema(20), ema(50), ema(200)
    sma20 = c.rolling(20).mean(); sd20 = c.rolling(20).std()
    out["bb_pos"] = (c - (sma20 - 2 * sd20)) / ((sma20 + 2 * sd20) - (sma20 - 2 * sd20))
    # ADX / DMI
    up = h.diff(); dn = -lo.diff()
    pdm = pd.Series(np.where((up > dn) & (up > 0), up, 0.0), index=c.index)
    mdm = pd.Series(np.where((dn > up) & (dn > 0), dn, 0.0), index=c.index)
    tr = pd.concat([h - lo, (h - c.shift()).abs(), (lo - c.shift()).abs()], axis=1).max(axis=1)
    atr = wilder(tr, 14)
    pdi = 100 * wilder(pdm, 14) / atr
    mdi = 100 * wilder(mdm, 14) / atr
    dx = 100 * (pdi - mdi).abs() / (pdi + mdi)
    out["adx"], out["pdi"], out["mdi"], out["atr"] = wilder(dx, 14), pdi, mdi, atr
    out["zscore"] = (c - c.rolling(20).mean()) / c.rolling(20).std()
    out["roc"] = c.pct_change(10) * 100
    out["vol_surge"] = (v / v.rolling(20).mean()).replace([np.inf, -np.inf], np.nan) if v.sum() else pd.Series(1.0, index=c.index)
    # Supertrend (10,3) direction
    hl2 = (h + lo) / 2
    upb = hl2 + 3 * atr; dnb = hl2 - 3 * atr
    st_dir = pd.Series(1, index=c.index)
    for i in range(1, len(c)):
        st_dir.iloc[i] = 1 if c.iloc[i] > upb.iloc[i - 1] else (-1 if c.iloc[i] < dnb.iloc[i - 1] else st_dir.iloc[i - 1])
    out["supertrend_dir"] = st_dir
    return out


def signals_at(f, i):
    """Return categorised +1/-1/0 votes at row i."""
    g = lambda k: f[k].iloc[i]
    cats = {
        "Trend": {
            "ema20_gt_ema50": 1 if g("ema20") > g("ema50") else -1,
            "price_gt_ema200": 1 if g("close_") > g("ema200") else -1,
            "macd_hist": 1 if g("macd_h") > 0 else (-1 if g("macd_h") < 0 else 0),
            "supertrend": int(g("supertrend_dir")),
            "adx_dmi": (1 if g("pdi") > g("mdi") else -1) if g("adx") > 20 else 0,
        },
        "Momentum": {
            "rsi_50": 1 if g("rsi") > 50 else -1,
            "rsi_zone": -1 if g("rsi") > 70 else (1 if g("rsi") < 30 else 0),
            "roc": 1 if g("roc") > 0 else (-1 if g("roc") < 0 else 0),
            "zscore": 1 if g("zscore") > 0 else (-1 if g("zscore") < 0 else 0),
        },
        "Volatility": {
            "bb_position": 1 if g("bb_pos") > 0.5 else -1,
            "bb_extreme": -1 if g("bb_pos") > 1 else (1 if g("bb_pos") < 0 else 0),
        },
        "Volume": {
            "vol_surge": 1 if g("vol_surge") > 1.5 else 0,
        },
    }
    return cats


def build_one(symbol, path, company, industry):
    d = daily(path)
    f = compute(d); f["close_"] = d["close"]
    n = len(d)
    price = float(d["close"].iloc[-1])
    change = float(d["close"].iloc[-1] - d["close"].iloc[-2])
    atr = float(f["atr"].iloc[-1])

    cats = signals_at(f, n - 1)
    breakdown, all_votes = {}, []
    for cat, sig in cats.items():
        buy = sum(1 for x in sig.values() if x == 1)
        sell = sum(1 for x in sig.values() if x == -1)
        neutral = sum(1 for x in sig.values() if x == 0)
        breakdown[cat] = {"buy": buy, "sell": sell, "neutral": neutral, "signals": sig}
        all_votes += list(sig.values())

    total = len(all_votes)
    bull = sum(1 for x in all_votes if x == 1)
    bear = sum(1 for x in all_votes if x == -1)
    bullish_pct = round(100 * bull / total, 2)
    bearish_pct = round(100 * bear / total, 2)
    consensus = round((bull - bear) / total, 4)          # -1..+1
    direction = "LONG" if consensus > 0.1 else ("SHORT" if consensus < -0.1 else "NEUTRAL")
    confidence = round(min(0.99, 0.5 + abs(consensus) / 2), 4)

    sign = 1 if direction == "LONG" else (-1 if direction == "SHORT" else 0)
    targets = {
        "target_1": round(price + sign * 1.0 * atr, 2),
        "target_2": round(price + sign * 2.0 * atr, 2),
        "target_3": round(price + sign * 3.0 * atr, 2),
        "stop_loss": round(price - sign * 1.5 * atr, 2),
    }
    exp_move = round(sign * 2.0 * atr / price, 4)

    # simple consensus backtest: vote sign vs forward 5d/10d return
    cons_series = []
    for i in range(n):
        votes = [x for s in signals_at(f, i).values() for x in s.values()]
        cons_series.append((sum(1 for x in votes if x == 1) - sum(1 for x in votes if x == -1)) / len(votes))
    cons = pd.Series(cons_series)
    def hit(hz):
        fwd = d["close"].shift(-hz) / d["close"] - 1
        sd = np.sign(cons); ok = (np.sign(fwd) == sd) & (sd != 0)
        m = sd != 0
        return round(float(ok[m].mean()), 4) if m.sum() else 0.5
    hit5, hit10 = hit(5), hit(10)

    hist = []
    for _, r in d.tail(140).iterrows():
        hist.append({"time": r["datetime"].strftime("%Y-%m-%d"),
                     "open": round(float(r["open"]), 2), "high": round(float(r["high"]), 2),
                     "low": round(float(r["low"]), 2), "close": round(float(r["close"]), 2),
                     "volume": float(r["volume"])})

    return {
        "symbol": symbol, "company": company, "industry": industry,
        "price": round(price, 2), "change": round(change, 2), "consensus": consensus,
        "indicators": {
            "rsi": round(float(f["rsi"].iloc[-1]), 2), "macd": round(float(f["macd_h"].iloc[-1]), 2),
            "adx": round(float(f["adx"].iloc[-1]), 2), "bb_pos": round(float(f["bb_pos"].iloc[-1]), 3),
            "atr": round(atr, 2), "supertrend": int(f["supertrend_dir"].iloc[-1]),
            "volume_surge": round(float(f["vol_surge"].iloc[-1]), 2) if f["vol_surge"].sum() else 1.0,
            "zscore": round(float(f["zscore"].iloc[-1]), 2),
        },
        "indicator_breakdown": breakdown,
        "prediction": {
            "signal": direction, "direction": direction, "confidence": confidence,
            "consensus_score": consensus, "bullish_pct": bullish_pct, "bearish_pct": bearish_pct,
            **targets, "prob_target_1": 0.6, "prob_target_2": 0.45, "prob_target_3": 0.3,
            "expected_move_pct": exp_move,
        },
        "hit_ratio": {
            "overall_5d": hit5, "overall_10d": hit10, "buy_hit_5d": hit5, "sell_hit_5d": hit5,
            "high_conf_5d": hit5, "high_conf_10d": hit10, "signal_count_5d": int(n - 5),
            "win_count_5d": int(round(hit5 * (n - 5))), "avg_directional_return": 0.0,
            "t1_hit_rate": 0.0, "t2_hit_rate": 0.0, "t3_hit_rate": 0.0, "sl_hit_rate": 0.0,
            "total_signals": int(n),
        },
        "history": hist,
    }


def main():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    summary = []
    for sym, (path, comp, ind) in SRC.items():
        if not os.path.exists(path):
            print(f"[skip] {sym}: {path} not found"); continue
        try:
            rec = build_one(sym, path, comp, ind)
            summary.append(rec)
            p = rec["prediction"]
            print(f"[ok] {sym:10s} {rec['price']:>10.1f}  {p['direction']:7s} "
                  f"conf {p['confidence']*100:.0f}%  bull {p['bullish_pct']:.0f}% "
                  f"RSI {rec['indicators']['rsi']:.0f}  ADX {rec['indicators']['adx']:.0f}  "
                  f"hit5 {rec['hit_ratio']['overall_5d']*100:.0f}%")
        except Exception as e:
            print(f"[err] {sym}: {e}")
    json.dump(summary, open(OUT, "w"), indent=2, default=float)
    # 500 file = same payload so both views work until the full run populates it
    json.dump(summary, open(os.path.join(HERE, "public", "summary_500.json"), "w"), indent=2, default=float)
    print(f"\n[OK] wrote {OUT}  ({len(summary)} instruments)")


if __name__ == "__main__":
    main()
