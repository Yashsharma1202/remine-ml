"""
export_our_results.py
=====================
Bundle the NIFTY 50 model results into one JSON the dashboard plots:
  frontend/frontend/public/data/our_models.json

Per track: headline hit ratio + baseline + edge, a confidence curve, and a
down-sampled timeline that now also carries OHLC (for candlestick "market" charts)
plus how-it-works info (lookback candles -> forecast horizon candles).

Run after the model scripts. No look-ahead — only summarises OOF predictions.
"""
import json
import os

import numpy as np
import pandas as pd

HERE = os.path.dirname(os.path.abspath(__file__))
ML_SRC = r"D:\ML_regime\NIFTY_50.csv"   # 1-minute source for daily OHLC
OUT = os.path.join(HERE, "frontend", "frontend", "public", "data", "our_models.json")
MAX_POINTS = 360
THRESHOLDS = np.round(np.arange(0.50, 0.91, 0.05), 2)


def conf_curve(correct, conf):
    out = []
    for th in THRESHOLDS:
        m = conf >= th
        if m.sum() >= 20:
            out.append({"threshold": float(th),
                        "hit_ratio": round(float(correct[m].mean()) * 100, 2),
                        "coverage": round(float(m.mean()) * 100, 1)})
    return out


def conf_distribution(correct, conf):
    """Per-confidence-bin DISTRIBUTION of predictions + hit ratio, plus the
    recommended confidence cutoff above which the hit ratio is high."""
    bins = np.round(np.arange(0.50, 1.0001, 0.05), 2)
    total = len(conf)
    dist = []
    for i in range(len(bins) - 1):
        lo, hi = float(bins[i]), float(bins[i + 1])
        m = (conf >= lo) & (conf < hi) if i < len(bins) - 2 else (conf >= lo) & (conf <= hi)
        cum = conf >= lo
        cnt = int(m.sum())
        dist.append({"conf": lo,
                     "density": round(cnt / total * 100, 2),
                     "bin_hit": round(float(correct[m].mean()) * 100, 1) if cnt else None,
                     "cum_hit": round(float(correct[cum].mean()) * 100, 1) if cum.sum() else None,
                     "coverage": round(float(cum.mean()) * 100, 1)})
    # recommended cutoff: highest hit ratio that still covers >= 20% of predictions
    cands = [d for d in dist if d["coverage"] >= 20 and d["cum_hit"] is not None]
    rec = max(cands, key=lambda d: d["cum_hit"])["conf"] if cands else 0.6
    rec_hit = next((d["cum_hit"] for d in dist if d["conf"] == rec), None)
    rec_cov = next((d["coverage"] for d in dist if d["conf"] == rec), None)
    return dist, rec, rec_hit, rec_cov


def intraday_ohlc(interval):
    """OHLC lookup keyed by IST 'YYYY-MM-DD HH:MM:SS' (NSE local time, 09:15 open)."""
    src = pd.read_csv(os.path.join(HERE, f"NSE_NIFTY_intraday_{interval}.csv"))
    t = pd.to_datetime(src["time"], utc=True).dt.tz_convert("Asia/Kolkata").dt.strftime("%Y-%m-%d %H:%M:%S")
    return {k: (float(o), float(h), float(l), float(c))
            for k, o, h, l, c in zip(t, src["open"], src["high"], src["low"], src["close"])}


def to_ist(x_raw):
    """Convert a UTC intraday timestamp string to IST display string."""
    return pd.to_datetime(x_raw, utc=True).tz_convert("Asia/Kolkata").strftime("%Y-%m-%d %H:%M:%S")


def daily_ohlc():
    """Daily OHLC (resampled from 1-minute NIFTY) keyed by YYYY-MM-DD."""
    raw = pd.read_csv(ML_SRC)
    raw.columns = [c.lower() for c in raw.columns]
    raw["datetime"] = pd.to_datetime(raw["datetime"])
    d = (raw.set_index("datetime").resample("1D")
            .agg({"open": "first", "high": "max", "low": "min", "close": "last"}).dropna())
    return {dt.strftime("%Y-%m-%d"): (float(o), float(h), float(l), float(c))
            for dt, o, h, l, c in zip(d.index, d["open"], d["high"], d["low"], d["close"])}


def build(key, label, model, horizon, path, xcol, predcol, actualcol, confcol, raw_prob,
          baseline, lookback_bars, horizon_bars, bar_unit, ohlc, klen, is_intraday=False,
          behave_band=0.005):
    df = pd.read_csv(os.path.join(HERE, path))
    correct = df["correct"].astype(bool).to_numpy()
    raw = df[confcol].to_numpy(dtype=float)
    conf = (np.abs(raw - 0.5) + 0.5) if raw_prob else raw

    # ACTUAL market behaviour over the prediction window = forward return direction.
    # Computed from the FULL price series (ohlc, which extends PAST the eval), so even
    # the most recent rows get a real behaviour instead of a blank.
    _okeys = list(ohlc.keys()) if ohlc else []
    _ocl = [ohlc[k][3] for k in _okeys]
    _opos = {k: i for i, k in enumerate(_okeys)}
    _H = horizon_bars

    def behaviour(disp_x):
        i = _opos.get(disp_x[:klen])
        if i is None or i + _H >= len(_ocl):
            return None
        r = _ocl[i + _H] / _ocl[i] - 1.0
        return "bullish" if r > behave_band else ("bearish" if r < -behave_band else "sideways")

    def disp(r):
        x = str(r[xcol])
        return to_ist(x) if is_intraday else x      # intraday -> IST display

    d = df.iloc[:: max(1, len(df) // MAX_POINTS)] if len(df) > MAX_POINTS else df
    timeline = []
    for _, r in d.iterrows():
        x = disp(r)
        o = ohlc.get(x[:klen]) if ohlc else None
        pt = {"x": x, "close": float(r["close"]),
              "prob": round(float(r[confcol]), 4),
              "pred": str(r[predcol]), "actual": str(r[actualcol]),
              "correct": bool(r["correct"])}
        if o:
            pt["open"], pt["high"], pt["low"] = o[0], o[1], o[2]
            pt["close"] = o[3]
        timeline.append(pt)

    # recent rows (newest first): INTRADAY -> the 09:15 session-open prediction for
    # the last 50 trading DAYS; DAILY (weekly/monthly) -> the last 50 predictions.
    n = len(df)
    if is_intraday:
        ist = pd.to_datetime(df[xcol], utc=True).dt.tz_convert("Asia/Kolkata")
        dts = ist.dt.strftime("%Y-%m-%d").to_numpy()
        hm = ist.dt.strftime("%H:%M").to_numpy()
        pos = np.where(hm == "09:15")[0]
        if len(pos) == 0:                          # fallback: first bar of each day
            seen, lst = set(), []
            for i in range(n):
                if dts[i] not in seen:
                    seen.add(dts[i]); lst.append(i)
            pos = np.array(lst)
        keep = set(sorted(set(dts[pos]))[-50:])
        sel = sorted([p for p in pos if dts[p] in keep], reverse=True)
    else:
        sel = list(range(max(0, n - 50), n))[::-1]

    bar_min = 5 if "5-min" in bar_unit else (15 if "15-min" in bar_unit else 0)
    recent = []
    for p in sel:
        r = df.iloc[p]; cf = conf[p]
        x = disp(r); o = ohlc.get(x[:klen]) if ohlc else None
        rr = {"x": x, "pred": str(r[predcol]), "actual": str(r[actualcol]),
              "correct": bool(r["correct"]), "conf": round(float(cf) * 100, 1),
              "close": float(o[3]) if o else float(r["close"]),
              "behaviour": behaviour(x)}
        if o:
            rr["open"], rr["high"], rr["low"] = o[0], o[1], o[2]
        if is_intraday and bar_min:
            st = pd.to_datetime(x)
            et = st + pd.Timedelta(minutes=horizon_bars * bar_min)
            rr["window"] = f"{st.strftime('%H:%M')} → {et.strftime('%H:%M')}"
        recent.append(rr)

    # REGULAR market chart = the last 120 CONSECUTIVE candles (no down-sampling,
    # narrow recent price range) so the candlestick looks even/clean.
    market = []
    if ohlc:
        for k, v in list(ohlc.items())[-120:]:
            market.append({"x": k, "open": v[0], "high": v[1], "low": v[2], "close": v[3]})

    hit = float(correct.mean()) * 100
    cdist, rec, rec_hit, rec_cov = conf_distribution(correct, conf)
    return {"key": key, "label": label, "model": model, "horizon": horizon,
            "overall_hit_ratio": round(hit, 2), "baseline": round(baseline, 2),
            "edge": round(hit - baseline, 2), "n": int(len(df)),
            "lookback_bars": lookback_bars, "horizon_bars": horizon_bars, "bar_unit": bar_unit,
            "confidence_curve": conf_curve(correct, conf), "conf_dist": cdist,
            "rec_threshold": rec, "rec_hit": rec_hit, "rec_coverage": rec_cov,
            "timeline": timeline, "recent": recent, "market_candles": market}


def main():
    print("loading OHLC sources ...")
    o5 = intraday_ohlc("5m"); o15 = intraday_ohlc("15m"); od = daily_ohlc()
    tracks = [
        build("intraday_5m", "Intraday 5-min — Volatility Regime", "XGBoost (HMM+XGB)",
              "next ~4 hours (48 x 5m bars)", "intraday_hybrid_5m_eval.csv",
              "time", "pred", "actual", "prob_highvol_hybrid", True, 56.58,
              24, 48, "5-min candle", o5, 19, True, behave_band=0.002),
        build("intraday_15m", "Intraday 15-min — Volatility Regime", "XGBoost (HMM+XGB)",
              "next ~4 hours (16 x 15m bars)", "intraday_hybrid_15m_eval.csv",
              "time", "pred", "actual", "prob_highvol_hybrid", True, 56.97,
              24, 16, "15-min candle", o15, 19, True, behave_band=0.002),
        build("weekly", "Weekly Expiry — Direction", "HMM + XGBoost hybrid",
              "5 trading days", "weekly_hybrid_nifty50_eval.csv",
              "date", "pred_regime", "actual_regime", "confidence", False, 47.53,
              63, 5, "daily candle", od, 10, behave_band=0.010),
        build("monthly", "Monthly Expiry — Volatility Regime", "Volatility-persistence rule",
              "21 trading days", "monthly_persistence_nifty50_eval.csv",
              "date", "pred", "actual", "confidence", False, 56.39,
              63, 21, "daily candle", od, 10, behave_band=0.020),
    ]
    payload = {"title": "NIFTY 50 Regime Models",
               "source": "NIFTY 50 1-minute data (2016-2026), resampled",
               "tracks": tracks}
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w") as f:
        json.dump(payload, f, indent=2, default=float)
    print(f"[OK] wrote {OUT}")
    for t in tracks:
        oc = sum(1 for p in t["timeline"] if "open" in p)
        print(f"  {t['label']:42s} hit={t['overall_hit_ratio']}%  edge={t['edge']:+}  "
              f"n={t['n']}  ohlc={oc}/{len(t['timeline'])}")


if __name__ == "__main__":
    main()
