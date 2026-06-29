# NIFTY Indicator-Consensus Dashboard

A self-contained dark dashboard that visualises the multi-indicator **consensus**
(RSI · MACD · ADX/DMI · Bollinger · Supertrend · z-score · ROC) for each instrument:
direction + confidence, bullish-vs-bearish vote share, per-category breakdown,
ATR-based targets, a backtested hit-ratio, and a candlestick chart.

## Files
- `public/index.html` — the dashboard (no build step, no dependencies; pure HTML/CSS/JS,
  candles drawn with inline SVG). Reads `public/summary.json`.
- `public/summary.json` — the data (array of instrument objects). Schema matches what
  the main pipeline's `generate_summary.py` emits.
- `make_index_summary.py` — generates `summary.json` from the local index CSVs
  (NIFTY 50 / BANKNIFTY / SENSEX) — **no downloads needed**.

## Run locally
```bash
python dashboard/make_index_summary.py        # build summary.json from local data
python -m http.server 8099 -d dashboard/public # then open http://localhost:8099
```

## Full Nifty 50 / 500 data
`python update_dashboard.py` runs the complete pipeline (download -> 400+ indicators ->
`generate_summary.py`) and writes the same `dashboard/public/summary.json` with all
stocks. The dashboard renders that automatically.

## Deploy (GitHub Pages)
`.github/workflows/pages.yml` publishes `dashboard/public/` on every push to `main`.
Enable once: repo **Settings -> Pages -> Source: GitHub Actions**.
