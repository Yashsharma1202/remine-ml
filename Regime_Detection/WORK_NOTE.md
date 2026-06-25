# Work Note — NIFTY 50 Regime Forecasting (Today vs Yesterday)

> Note: the split below is the natural two phases of the work — **Yesterday = building & validating the models**, **Today = real data + the live dashboard.**

---

## 📅 TODAY — real data + interactive dashboard

**Theme: better data, and turn the models into a hosted, explainable dashboard.**

1. **Switched to the REAL data.** Replaced yfinance's 2-month intraday with your **1-minute NIFTY 50 data (2016–2026)**, resampled to **5-min and 15-min** (full 10-year history).
2. **Intraday accuracy jumped** from 64.6% → **77.4% (5m) / 75.8% (15m)** — verified **leak-free** (shuffle AUC 0.53) and **not overfit** (train-val gap 0.004).
3. **Built the dashboard** (`/our-models`):
   - Dark theme; 4 model cards (5m, 15m, weekly, monthly) with "past N candles → predicts next N" info.
   - **Live forecast cards** (trend + volatility per timeframe).
   - **Market-behaviour panel**: daily **bull/bear/sideways** regime over **2,402 days**, regime-coloured candles.
   - **Re-optimised regime thresholds** (bearish 16% → **33%**, realistic) + **validated** it (bull > sideways > bear forward returns at all 3 horizons).
   - Candlestick "market" charts with OHLC.
   - **"Yesterday's intraday chart"** (09:15–13:15, 5-min candles, the 09:15 morning call).
   - **Data tables**: last 50 per timeframe; intraday = the **09:15 open call per day, last 50 days**; added **"Predicts (window)"** and **"Action (if miss → risk)"** columns.
4. **Fixed timezone** — intraday times now show **IST (09:15)** instead of UTC (was wrongly showing 08:45).
5. **Hosted on the LAN** — live at **http://10.10.7.70:3000/our-models** (fixed Next.js dev cross-origin block).

---

## 📅 YESTERDAY — building & validating the models

**Theme: build the forecasting models honestly and prove they work.**

1. **Set up tooling** — installed Python + the ML stack (nothing was present).
2. **Added XGBoost** to the ML_regime consensus optimiser; found XGBoost ≈ LightGBM there (same family).
3. **Pivoted to the Regime Detection project.** Found the advertised **84.85% was in-sample**; honest out-of-sample was **~38%**.
4. **The big win:** switched the horizon **21-day (monthly) → 5-day (weekly)** → **38% → 58%**, confirmed across NIFTY / BANKNIFTY / NIFTY 500.
5. **Built the three tracks** (intraday / weekly / monthly). Found **direction unpredictable** intraday & monthly → predict the **volatility regime** there instead.
6. **Added a Gaussian HMM**, then the **HMM + XGBoost hybrid**.
7. **Honest checks everywhere** — leakage (shuffle test), overfitting (regularised), no look-ahead (embargo).
8. Found the **best model differs by horizon** (hybrid for intraday/weekly, a simple persistence rule for monthly).
9. Tested **India VIX** (dropped — redundant) and **cross-asset** (dropped — overfit).
10. Wrote a **1-page PDF report** and **pushed everything to GitHub**.

---

## 🔁 Comparison

| Aspect | Yesterday | Today |
|--------|-----------|-------|
| Intraday data | yfinance 60-min (~2 yr, ~5k bars) | **real 1-min → 5m/15m (10 yr, 180k/60k bars)** |
| Intraday accuracy | 64.6% | **77.4% (5m) / 75.8% (15m)** |
| Intraday time | (UTC, wrong) | **IST 09:15 (fixed)** |
| Models | built + validated | retrained on better data |
| Dashboard | not built | **full dark dashboard, hosted on LAN** |
| Market regime view | none | **daily bull/bear/sideways (2,402 days), validated** |
| Trading guidance | none | **Action column** (hit → trade, miss → stop-loss/hedge) |
| Sharing | GitHub push | **live at 10.10.7.70:3000** |

---

## ✅ Net progress
- **+12.8 points** intraday accuracy, purely from using the real 1-minute data.
- Went from **models-in-scripts** → a **hosted, interactive, validated dashboard** with per-prediction trading actions, IST-correct intraday times, and a daily market-behaviour view.
- Everything still **honest**: leak-tested, overfitting-checked, no look-ahead.
