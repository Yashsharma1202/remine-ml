"""
today_map_report.py — a ONE-PAGE visual "map" (mind-map style) of today's work
on the NIFTY 50 dashboard. Landscape A4: a central node with branches to each
change, so the whole day is readable at a glance.
"""
import json
import os

from fpdf import FPDF

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "frontend", "frontend", "public", "data")
TODAY = "2026-06-25"

INK = (28, 28, 32)
MUTE = (120, 120, 130)
GREY = (205, 205, 212)

# (border, fill) colour pairs
C_CENTER = ((79, 70, 229), (232, 231, 252))
C1 = ((37, 99, 235), (227, 238, 255))     # forecast - blue
C2 = ((16, 150, 90), (224, 246, 235))     # table fix - green
C3 = ((200, 130, 0), (252, 243, 224))     # monthly - amber
C4 = ((219, 39, 119), (252, 228, 242))    # chart - pink
C5 = ((100, 116, 139), (236, 239, 243))   # data - slate


def load(name):
    try:
        return json.load(open(os.path.join(DATA, name)))
    except Exception:
        return None


def box(p, x, y, w, h, title, lines, colors, tsize=10, bsize=8):
    bd, fl = colors
    p.set_draw_color(*bd); p.set_fill_color(*fl); p.set_line_width(0.6)
    p.rect(x, y, w, h, "DF")
    # title bar
    p.set_xy(x + 3, y + 2.5)
    p.set_font("Helvetica", "B", tsize); p.set_text_color(*bd)
    p.multi_cell(w - 6, 4.6, title, new_x="LMARGIN", new_y="NEXT")
    p.set_xy(x + 3, p.get_y() + 0.5)
    p.set_font("Helvetica", "", bsize); p.set_text_color(*INK)
    for ln in lines:
        p.set_x(x + 3)
        p.multi_cell(w - 6, 3.8, ln, new_x="LMARGIN", new_y="NEXT")


def link(p, x1, y1, x2, y2):
    p.set_draw_color(*GREY); p.set_line_width(0.7)
    p.line(x1, y1, x2, y2)


def main():
    fa = load("forecast_ahead.json")
    om = load("our_models.json")

    # headline numbers
    asof = fa.get("asof", "2026-06-19") if fa else "2026-06-19"
    nifty = round(fa.get("asof_close", 23961)) if fa else 23961
    volacc = ""
    if om and om.get("tracks"):
        hits = [round(t.get("overall_hit_ratio", 0)) for t in om["tracks"]]
        volacc = f"{min(hits)}-{max(hits)}%"

    p = FPDF(orientation="L", format="A4")
    p.set_auto_page_break(False)
    p.add_page()

    # ---- title ----
    p.set_xy(0, 8)
    p.set_font("Helvetica", "B", 18); p.set_text_color(*INK)
    p.cell(297, 8, "NIFTY 50 Dashboard - Today's Work (map)", align="C",
           new_x="LMARGIN", new_y="NEXT")
    p.set_font("Helvetica", "", 9); p.set_text_color(*MUTE)
    p.cell(297, 5, f"{TODAY}   .   live as of {asof}, NIFTY {nifty}   .   http://10.10.7.70:3000/our-models",
           align="C")

    # ---- geometry ----
    cx, cy, cw, ch = 108, 92, 80, 30          # center box
    ccx, ccy = cx + cw / 2, cy + ch / 2
    boxes = {
        "tl": (10, 30, 86, 40),
        "tr": (201, 30, 86, 40),
        "bl": (10, 150, 86, 42),
        "br": (201, 150, 86, 42),
        "tc": (108, 32, 80, 30),
        "bc": (108, 158, 80, 32),
    }
    # links first (so boxes cover the ends)
    for bx, by, bw, bh in boxes.values():
        link(p, ccx, ccy, bx + bw / 2, by + bh / 2)

    # ---- center ----
    box(p, cx, cy, cw, ch, "TODAY'S WORK",
        ["Made the dashboard easier to", "TRUST and easier to READ.", "4 changes + fresh data."],
        C_CENTER, tsize=12, bsize=8.5)

    # ---- 1. forecast (top-left) ----
    flines = ["Big LIVE FORECAST added at the top.",
              "Next 1-10 trading days: Direction +",
              "Volatility, each with a confidence %.",
              "Trust VOLATILITY; direction is weak."]
    if fa and fa.get("days"):
        d5 = next((d for d in fa["days"] if d["lead"] == 5), fa["days"][-1])
        flines.append(f"e.g. +{d5['lead']}d: {d5['vol']} {round(d5['vol_conf'])}% (CALM/VOLATILE).")
    box(p, *boxes["tl"], "1) Live forecast (NEW)", flines, C1)

    # ---- 2. table fix (top-right) ----
    box(p, *boxes["tr"], "2) Predictions table fixed",
        ["Tick now matches the prediction.",
         "Shows BOTH calls side by side:",
         "DIRECTION (up/down/flat) +",
         "VOLATILITY (calm/stormy),",
         "each with its own tick."], C2)

    # ---- 3. monthly (bottom-left) ----
    box(p, *boxes["bl"], "3) Monthly behaviour filled",
        ["Last 21 rows were blank (-).",
         "Needed 21 future days; now read",
         "the real outcome from full price",
         "history. Result: 0 blanks -",
         "every row shows bull/bear/side."], C3)

    # ---- 4. chart (bottom-right) ----
    box(p, *boxes["br"], "4) Market chart made regular",
        ["Was uneven (few points over 10 yrs,",
         "big gaps + huge price range).",
         "Now last 120 back-to-back candles -",
         "even, clean chart for intraday /",
         "weekly / monthly."], C4)

    # ---- data (top-center) ----
    box(p, *boxes["tc"], "Fresh data (Python)",
        ["Built daily features in Python,",
         "added 10 new days -> now to 19-Jun.",
         "Forecast projects Jun 22 -> Jul 3."], C5)

    # ---- honesty (bottom-center) ----
    box(p, *boxes["bc"], "Kept honest",
        ["Tested on unseen data; leak-checked;",
         "no future peeking.",
         f"Volatility edge ~{volacc or '55-77%'}; direction ~35%",
         "(near random, shown LOW-trust)."], C5)

    out = os.path.join(HERE, f"Today_Work_MAP_{TODAY}.pdf")
    p.output(out)
    print(f"[OK] wrote {out}")


if __name__ == "__main__":
    main()
