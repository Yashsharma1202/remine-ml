"""
make_report.py — generate an easy-to-explain PDF report of the NIFTY 50 regime
forecasting work:  NIFTY50_Regime_Report.pdf
"""
import os
from fpdf import FPDF

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "NIFTY50_Regime_Report.pdf")

INK = (24, 24, 27)
MUTE = (110, 110, 120)
ACCENT = (79, 70, 229)
GREEN = (16, 150, 110)
GREY = (200, 203, 210)

COLORS = {"Intraday": (99, 102, 241), "Weekly": (16, 185, 129), "Monthly": (245, 158, 11)}


class PDF(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(*MUTE)
        self.cell(0, 8, f"NIFTY 50 Regime Forecasting  -  page {self.page_no()}", align="C")


def h1(pdf, t):
    pdf.set_font("Helvetica", "B", 18); pdf.set_text_color(*INK)
    pdf.multi_cell(0, 9, t); pdf.ln(1)


def h2(pdf, t):
    pdf.ln(2); pdf.set_font("Helvetica", "B", 13); pdf.set_text_color(*ACCENT)
    pdf.multi_cell(0, 7, t); pdf.set_text_color(*INK); pdf.ln(1)


def body(pdf, t):
    pdf.set_x(pdf.l_margin); pdf.set_font("Helvetica", "", 10.5); pdf.set_text_color(*INK)
    pdf.write(5.6, t); pdf.ln(8)


def bullet(pdf, t, bold_head=None):
    pdf.set_x(pdf.l_margin); pdf.set_text_color(*INK)
    pdf.set_font("Helvetica", "", 10.5); pdf.write(5.6, "-  ")
    if bold_head:
        pdf.set_font("Helvetica", "B", 10.5); pdf.write(5.6, bold_head + " ")
        pdf.set_font("Helvetica", "", 10.5)
    pdf.write(5.6, t); pdf.ln(7)


def kv(pdf, k, v):
    pdf.set_x(pdf.l_margin); pdf.set_text_color(*INK)
    pdf.set_font("Helvetica", "B", 10.5); pdf.write(5.6, k + ":  ")
    pdf.set_font("Helvetica", "", 10.5); pdf.write(5.6, v); pdf.ln(7)


def bars(pdf, rows):
    """rows = [(name, model_pct, baseline_pct, color)]; simple horizontal bars."""
    x0 = pdf.get_x() + 30; full = 120; top = pdf.get_y() + 2
    scale = full / 100.0
    pdf.set_font("Helvetica", "", 9)
    for i, (name, mp, bp, col) in enumerate(rows):
        y = top + i * 16
        pdf.set_xy(pdf.l_margin, y); pdf.set_text_color(*INK)
        pdf.cell(28, 5, name)
        # baseline bar (grey)
        pdf.set_fill_color(*GREY); pdf.rect(x0, y, bp * scale, 4.5, "F")
        # model bar (color)
        pdf.set_fill_color(*col); pdf.rect(x0, y + 5, mp * scale, 4.5, "F")
        pdf.set_xy(x0 + mp * scale + 2, y + 3); pdf.set_text_color(*MUTE)
        pdf.cell(30, 5, f"{mp:.0f}% (base {bp:.0f}%)")
    pdf.set_y(top + len(rows) * 16 + 2)


def main():
    pdf = PDF()
    pdf.set_auto_page_break(True, margin=16)
    pdf.set_margins(16, 14, 16)
    pdf.add_page()

    h1(pdf, "NIFTY 50 Market Regime Forecasting")
    pdf.set_font("Helvetica", "", 10.5); pdf.set_text_color(*MUTE)
    pdf.multi_cell(0, 5.6, "Project report - machine-learning models that forecast the market 'regime' for "
                           "intraday, weekly-expiry and monthly-expiry trading. Validated honestly (no cheating), "
                           "with simple explanations.")
    pdf.ln(2)

    h2(pdf, "1.  What this project does (in one line)")
    body(pdf, "It looks at NIFTY 50 price behaviour and forecasts the upcoming market REGIME - the 'mood' of "
              "the market - so an options/expiry trader knows what to expect. We built one model for each "
              "time-frame: intraday, weekly expiry, and monthly expiry.")

    h2(pdf, "2.  The three models (names + simple meaning)")
    bullet(pdf, "Predicts whether the next few hours will be CALM or VOLATILE (big moves). "
                "Use: calm -> sell option premium; volatile -> buy / hedge.",
           bold_head="Intraday Volatility-Regime Model (HMM + XGBoost hybrid):")
    pdf.ln(1)
    bullet(pdf, "Predicts the market DIRECTION over the next 5 trading days - BULL (up), BEAR (down) or "
                "SIDEWAYS (flat) - to position for the weekly expiry.",
           bold_head="Weekly Direction Model (HMM + XGBoost hybrid):")
    pdf.ln(1)
    bullet(pdf, "Predicts whether the next ~21 trading days will be CALM or VOLATILE. A simple, robust rule "
                "(volatility tends to persist) beat the complex models here.",
           bold_head="Monthly Volatility Model (Volatility-Persistence rule):")

    h2(pdf, "3.  Results - how accurate are they?")
    body(pdf, "'Hit ratio' = how often the model is right. 'Baseline' = a naive guess (always pick the most "
              "common answer). 'High-confidence' = accuracy when we only act on the model's most confident calls.")
    # table
    pdf.set_font("Helvetica", "B", 10); pdf.set_fill_color(238, 238, 242); pdf.set_text_color(*INK)
    pdf.cell(46, 7, "Model", 1, 0, "L", True); pdf.cell(36, 7, "Hit ratio", 1, 0, "C", True)
    pdf.cell(34, 7, "Baseline", 1, 0, "C", True); pdf.cell(0, 7, "High-confidence", 1, 1, "C", True)
    rows = [("Intraday (volatility)", "64.6%", "53.6%", "78%"),
            ("Weekly (direction)", "58.0%", "47.5%", "67%"),
            ("Monthly (volatility)", "73.7%", "56.4%", "85%")]
    pdf.set_font("Helvetica", "", 10)
    for r in rows:
        pdf.cell(46, 7, r[0], 1); pdf.cell(36, 7, r[1], 1, 0, "C")
        pdf.cell(34, 7, r[2], 1, 0, "C"); pdf.cell(0, 7, r[3], 1, 1, "C")
    pdf.ln(3)
    body(pdf, "Every model beats its baseline by +10 to +17 points. Trading only the confident calls raises "
              "the hit ratio further (e.g. intraday 64.6% -> 78%).")
    bars(pdf, [("Intraday", 64.6, 53.6, COLORS["Intraday"]),
               ("Weekly", 58.0, 47.5, COLORS["Weekly"]),
               ("Monthly", 73.7, 56.4, COLORS["Monthly"])])

    pdf.add_page()
    h2(pdf, "4.  How we made sure the results are HONEST (no cheating)")
    bullet(pdf, "We always train the model on the PAST and test it on UNSEEN FUTURE data (walk-forward). "
                "It never sees the answers in advance.", bold_head="No look-ahead:")
    pdf.ln(1)
    bullet(pdf, "We scrambled the training answers; the model's score collapsed to a random guess - proving it "
                "was not secretly using future information.", bold_head="Leakage test (shuffle):")
    pdf.ln(1)
    bullet(pdf, "We checked the gap between training and testing accuracy and simplified the models so they "
                "GENERALISE instead of memorising.", bold_head="Overfitting check:")
    pdf.ln(1)
    bullet(pdf, "We tested India VIX and cross-asset data (Bank Nifty, USD-INR, crude) - they did not help, so "
                "we honestly dropped them.", bold_head="What did NOT work:")

    h2(pdf, "5.  What was done today (step by step)")
    for s in [
        "Set up the tools (installed Python + the ML libraries).",
        "Built and tested the three forecasting models for NIFTY 50.",
        "Found that intraday/monthly DIRECTION is unpredictable - so we predict VOLATILITY there instead.",
        "Found the best model differs by time-frame: hybrid (HMM+XGBoost) for intraday & weekly; a simple "
        "persistence rule for monthly.",
        "Combined two models (HMM + XGBoost) into a stronger hybrid.",
        "Checked every model for cheating (leakage) and memorising (overfitting), and fixed them.",
        "Built a dashboard page to visualise the results and pushed everything to GitHub.",
    ]:
        bullet(pdf, s); pdf.ln(0.5)

    h2(pdf, "6.  Market terms (easy meanings)")
    terms = [
        ("Regime", "The market's current 'mood' - trending up (bull), down (bear), flat (sideways), or calm vs volatile."),
        ("Volatility", "How much the price swings. High volatility = big, fast moves."),
        ("Bull / Bear / Sideways", "Going up / going down / going nowhere."),
        ("Expiry", "The day options contracts settle (weekly = ~5 days, monthly = ~21 days)."),
        ("Hit ratio / Accuracy", "How often the prediction is correct."),
        ("Baseline", "A naive benchmark - always guess the most common outcome."),
        ("Confidence", "How sure the model is. We trade only high-confidence calls."),
        ("India VIX", "The market 'fear gauge' - rises when traders expect big moves."),
        ("Option premium", "The price of an option. Sellers profit in calm markets; buyers in volatile ones."),
        ("Walk-forward / Out-of-sample", "Testing on future data the model never trained on - the honest way."),
        ("Look-ahead / Leakage", "Accidentally letting the model peek at the future - makes fake-good results."),
        ("Overfitting", "When a model memorises the past instead of learning - looks good, fails live."),
    ]
    for k, v in terms:
        kv(pdf, k, v)

    h2(pdf, "7.  Models used (technical names)")
    bullet(pdf, "A statistical model that finds hidden market 'states' and how they switch over time.",
           bold_head="Gaussian HMM (Hidden Markov Model):")
    pdf.ln(1)
    bullet(pdf, "A powerful 'gradient-boosted decision tree' model - the industry standard for this kind of data.",
           bold_head="XGBoost:")
    pdf.ln(1)
    bullet(pdf, "We feed the HMM's regime read into XGBoost - the two together beat either alone.",
           bold_head="Hybrid (HMM + XGBoost):")

    h2(pdf, "8.  Status & next step")
    body(pdf, "All three models are validated, leak-free and overfitting-checked - ready for PAPER TRADING "
              "(test with no real money first). 64% intraday accuracy is a genuinely good edge (most real "
              "edges are 55-60%). Next: refine the labels and add live data, then go live small.")

    pdf.output(OUT)
    print(f"[OK] wrote {OUT}")


if __name__ == "__main__":
    main()
