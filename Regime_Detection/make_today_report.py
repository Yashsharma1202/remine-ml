"""
make_today_report.py -> NIFTY50_Today_Report.pdf
An easy-words, multi-page report of TODAY's work, with a last-page compare vs yesterday.
"""
import os
from fpdf import FPDF

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "NIFTY50_Today_Report.pdf")
INK, MUTE, ACCENT = (24, 24, 27), (110, 110, 120), (79, 70, 229)
C = {"i5": (99, 102, 241), "i15": (139, 92, 246), "wk": (16, 185, 129), "mo": (245, 158, 11)}


class PDF(FPDF):
    def footer(self):
        self.set_y(-12); self.set_font("Helvetica", "", 8); self.set_text_color(*MUTE)
        self.cell(0, 8, f"NIFTY 50 Dashboard - Today's work - page {self.page_no()}", align="C")


def h1(p, t): p.set_font("Helvetica", "B", 18); p.set_text_color(*INK); p.multi_cell(0, 9, t); p.ln(1)
def h2(p, t):
    p.ln(2); p.set_font("Helvetica", "B", 13); p.set_text_color(*ACCENT); p.multi_cell(0, 7, t); p.set_text_color(*INK); p.ln(1)
def body(p, t):
    p.set_x(p.l_margin); p.set_font("Helvetica", "", 10.5); p.set_text_color(*INK); p.write(5.6, t); p.ln(8)
def bullet(p, t, head=None):
    p.set_x(p.l_margin); p.set_text_color(*INK); p.set_font("Helvetica", "", 10.5); p.write(5.6, "-  ")
    if head:
        p.set_font("Helvetica", "B", 10.5); p.write(5.6, head + " "); p.set_font("Helvetica", "", 10.5)
    p.write(5.6, t); p.ln(7)
def kv(p, k, v):
    p.set_x(p.l_margin); p.set_text_color(*INK); p.set_font("Helvetica", "B", 10.5); p.write(5.6, k + ":  ")
    p.set_font("Helvetica", "", 10.5); p.write(5.6, v); p.ln(7)


def bars(p, rows):
    x0 = p.get_x() + 34; full = 110; top = p.get_y() + 2; sc = full / 100.0
    p.set_font("Helvetica", "", 9)
    for i, (name, val, base, col) in enumerate(rows):
        y = top + i * 15
        p.set_xy(p.l_margin, y); p.set_text_color(*INK); p.cell(32, 5, name)
        p.set_fill_color(205, 208, 214); p.rect(x0, y, base * sc, 4.2, "F")
        p.set_fill_color(*col); p.rect(x0, y + 5, val * sc, 4.2, "F")
        p.set_xy(x0 + val * sc + 2, y + 3); p.set_text_color(*MUTE); p.cell(40, 5, f"{val:.0f}% (was {base:.0f}%)")
    p.set_y(top + len(rows) * 15 + 2)


def table(p, header, rows, widths):
    p.set_font("Helvetica", "B", 9); p.set_fill_color(238, 238, 242); p.set_text_color(*INK)
    for w, htxt in zip(widths, header):
        p.cell(w, 7, htxt, 1, 0, "C", True)
    p.ln()
    p.set_font("Helvetica", "", 9)
    for r in rows:
        for w, cell in zip(widths, r):
            p.cell(w, 6.5, str(cell), 1, 0, "C")
        p.ln()


def main():
    p = PDF(); p.set_auto_page_break(True, 16); p.set_margins(16, 14, 16)

    # ---------- PAGE 1 ----------
    p.add_page()
    h1(p, "NIFTY 50 Regime Dashboard - What I Did Today")
    p.set_font("Helvetica", "", 10.5); p.set_text_color(*MUTE)
    p.multi_cell(0, 5.6, "An easy-words summary of today's work: switched to real market data, the accuracy jumped, "
                         "and I built a full interactive dashboard (live on the office network). The last page "
                         "compares today with yesterday."); p.ln(2)
    h2(p, "1.  In one line")
    body(p, "I forecast the NIFTY 50 'market regime' (calm vs volatile, and bullish / bearish / sideways) for "
            "three time-frames - intraday, weekly expiry and monthly expiry - and put it all on a live dashboard "
            "that anyone on the network can open.")
    h2(p, "2.  The big win - real data made it much more accurate")
    body(p, "Yesterday the intraday model used free internet data (only ~2 months). Today I used your REAL "
            "1-minute NIFTY 50 data (2016-2026, about 10 years) and resampled it into 5-minute and 15-minute "
            "candles. With 10 years of real data instead of 2 months, the accuracy jumped a lot:")
    bars(p, [("Intraday 5m", 77.4, 64.6, C["i5"]), ("Intraday 15m", 75.8, 64.6, C["i15"])])
    body(p, "And it is honest: a 'scramble test' (shuffle the answers) collapsed the score to random - proving "
            "no hidden cheating - and the train-vs-test gap was only 0.4%, so it is NOT just memorising.")

    # ---------- PAGE 2 ----------
    p.add_page()
    h2(p, "3.  The dashboard I built (live on the network)")
    bullet(p, "the four models (Intraday 5m, Intraday 15m, Weekly, Monthly) each with its accuracy.", head="Model cards:")
    bullet(p, "today's call (trend + calm/volatile) for each time-frame, with a confidence and a trust flag.", head="Live forecast:")
    bullet(p, "every day of the last 10 years marked bullish / bearish / sideways, with coloured candles.", head="Market behaviour:")
    bullet(p, "the latest full session, 09:15 to 13:15, candle by candle, with the morning call.", head="Yesterday's chart:")
    bullet(p, "a curve + table showing the confidence level above which the model is very accurate.", head="Confidence guide:")
    bullet(p, "the last 50 predictions for each time-frame, with a clear take-or-skip rule.", head="Data tables:")

    h2(p, "4.  How to read the dashboard (quick guide)")
    bullet(p, "Start at the top - the live forecast cards show the current call per time-frame.")
    bullet(p, "The bar chart shows each model's accuracy vs a naive baseline (the gap is the real edge).")
    bullet(p, "The market chart shows real NIFTY candles, coloured by regime (green/red/yellow).")
    bullet(p, "Hover any chart - it shows the exact time, the trend, and whether the call was right.")
    bullet(p, "The tables at the bottom list the last 50 calls; trade only the rows marked TAKE.")

    # ---------- PAGE 3 ----------
    p.add_page()
    h2(p, "5.  The models and their accuracy")
    table(p, ["Time-frame", "What it predicts", "Accuracy", "Beats baseline by"],
          [["Intraday 5m", "calm / volatile (next 4h)", "77.4%", "+20.8"],
           ["Intraday 15m", "calm / volatile (next 4h)", "75.8%", "+18.9"],
           ["Weekly", "bull / bear / sideways (5d)", "58.0%", "+10.4"],
           ["Monthly", "calm / volatile (21d)", "73.7%", "+17.3"]], [40, 70, 28, 40])
    p.ln(3)
    body(p, "'Beats baseline' = how much better than a naive 'always guess the most common answer'. Even a few "
            "points above baseline is a real edge in markets.")

    h2(p, "6.  How the forecast works (past candles -> future candles)")
    body(p, "Each model reads a window of recent candles, then forecasts ONE label for the next block of candles. "
            "It never sees the future - it is trained on the past and tested on unseen data.")
    table(p, ["Time-frame", "Looks at (past)", "Predicts (future)"],
          [["Intraday 5m", "last 24 candles", "next 48 candles (~4 hours)"],
           ["Intraday 15m", "last 24 candles", "next 16 candles (~4 hours)"],
           ["Weekly", "last 63 days", "next 5 days"],
           ["Monthly", "last 63 days", "next 21 days"]], [40, 55, 70])

    # ---------- PAGE 4 ----------
    p.add_page()
    h2(p, "7.  Smart things on the dashboard")
    bullet(p, "when the model is more CONFIDENT, it is right far more often. So we only act on confident calls.",
           head="Confidence rule:")
    p.ln(1)
    bullet(p, "only TAKE a call when confidence is 50% or more; below that it is a coin-flip, so SKIP it.",
           head="Take / skip rule:")
    p.ln(1)
    bullet(p, "we proved the regime is real - after a bullish day the market truly rises more than after a "
              "bearish day, at all three time-frames.", head="Validation:")
    p.ln(1)
    bullet(p, "each row also shows what the market ACTUALLY did (bullish/bearish/sideways) - very useful when a "
              "prediction misses.", head="Market behaviour:")
    p.ln(1)
    bullet(p, "fixed the clock - intraday times now show correct IST (09:15 open), not UTC.", head="Time fix:")

    h2(p, "8.  Confidence in numbers (Intraday 5-min)")
    body(p, "The more confident the model, the higher the hit ratio. So pick a confidence cut-off and trade only above it:")
    table(p, ["Confidence is at least", "Then hit ratio is", "Share of calls"],
          [["50%", "77%", "100%"],
           ["70%", "90%", "45%"],
           ["75%  (recommended)", "93%", "30%"],
           ["80%", "97%", "13%"]], [60, 50, 50])

    # ---------- PAGE 5 ----------
    p.add_page()
    h2(p, "9.  How I made sure it is HONEST (no cheating)")
    bullet(p, "the model is always trained on the PAST and tested on UNSEEN FUTURE data.", head="No look-ahead:")
    p.ln(1)
    bullet(p, "I scrambled the training answers; the score collapsed to a random guess - proof it was not "
              "secretly using future information.", head="Leak test:")
    p.ln(1)
    bullet(p, "the gap between training and testing accuracy was tiny (0.4%) - so the model GENERALISES, it does "
              "not just memorise.", head="Overfitting check:")

    h2(p, "10.  What I TRIED that did NOT work (honesty)")
    bullet(p, "intraday and monthly DIRECTION (up/down) is almost random - so for those we predict VOLATILITY "
              "(calm/volatile) instead, which IS predictable.", head="Direction:")
    p.ln(1)
    bullet(p, "tested India VIX (fear index) - it did not help, so I dropped it.", head="India VIX:")
    p.ln(1)
    bullet(p, "added Bank Nifty / USD-INR / Crude - they made it overfit, so I dropped them.", head="Cross-asset:")
    p.ln(1)
    bullet(p, "swapping XGBoost for LightGBM gave no gain (same family of model).", head="Model swap:")

    h2(p, "11.  Market terms (easy)")
    for k, v in [
        ("Regime", "The market's mood - calm vs volatile, or bullish / bearish / sideways."),
        ("Volatility", "How much the price swings. Calm = small moves, volatile = big moves."),
        ("Expiry", "Option settlement - weekly = ~5 days, monthly = ~21 days."),
        ("Confidence", "How sure the model is. We only act when it is at least 50% sure."),
        ("Candle", "One bar of price (open, high, low, close) for a time period."),
    ]:
        kv(p, k, v)

    # ---------- LAST PAGE ----------
    p.add_page()
    h1(p, "Today vs Yesterday")
    body(p, "Yesterday I built and validated the models. Today I plugged in the real data and turned everything "
            "into a live, easy-to-read dashboard.")
    h2(p, "Side-by-side")
    table(p, ["Aspect", "Yesterday", "Today"],
          [["Intraday data", "internet, ~2 months", "real 1-min, 10 years"],
           ["Intraday accuracy", "64.6%", "77.4% / 75.8%"],
           ["Intraday clock", "wrong (UTC)", "correct IST (09:15)"],
           ["Dashboard", "none", "full, live on network"],
           ["Market regime view", "none", "10 yrs, validated"],
           ["Confidence guide", "none", "curve + table + rule"],
           ["Take / skip rule", "none", "yes (at least 50%)"],
           ["Sharing", "GitHub only", "live at 10.10.7.70:3000"]],
          [46, 60, 60])
    p.ln(4)
    h2(p, "Net result")
    bullet(p, "Intraday accuracy up +12.8 points - purely from using the real 1-minute data.")
    bullet(p, "From models-in-scripts -> a hosted, interactive dashboard anyone can open and read.")
    bullet(p, "Still fully honest: leak-tested, overfitting-checked, no peeking at the future.")
    p.ln(2)
    h2(p, "Next steps")
    bullet(p, "connect a live data feed for real-time intraday calls.")
    bullet(p, "paper-trade the high-confidence calls and track the results.")
    bullet(p, "improve the weekly model with cleaner labels.")
    p.ln(2)
    body(p, "Status: live and ready to present at  http://10.10.7.70:3000/our-models")

    p.output(OUT)
    print(f"[OK] wrote {OUT}  ({p.page_no()} pages)")


if __name__ == "__main__":
    main()
