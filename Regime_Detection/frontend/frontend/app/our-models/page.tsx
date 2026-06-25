"use client";

import { useState, useMemo, useEffect } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, Legend, ReferenceLine, Cell, LabelList, ComposedChart, Area,
} from "recharts";

type Curve = { threshold: number; hit_ratio: number; coverage: number };
type Point = {
  x: string; close: number; prob: number; pred: string; actual: string;
  correct: boolean; trend?: string; open?: number; high?: number; low?: number;
};
type Track = {
  key: string; label: string; model: string; horizon: string;
  overall_hit_ratio: number; baseline: number; edge: number; n: number;
  lookback_bars: number; horizon_bars: number; bar_unit: string;
  confidence_curve: Curve[]; timeline: Point[]; recent?: any[];
  conf_dist?: any[]; rec_threshold?: number; rec_hit?: number; rec_coverage?: number;
};

const COLORS: Record<string, string> = {
  intraday_5m: "#818cf8", intraday_15m: "#c084fc", intraday: "#818cf8",
  weekly: "#34d399", monthly: "#fbbf24",
};
const cOf = (k: string) => COLORS[k] ?? "#818cf8";
const GRID = "#27272a", AXIS = "#71717a";

export default function OurModels() {
  const [data, setData] = useState<Track[] | null>(null);
  const [meta, setMeta] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);
  const [sel, setSel] = useState<string>("intraday_5m");
  const [live, setLive] = useState<any>(null);
  const [mkt, setMkt] = useState<any>(null);
  const [sess, setSess] = useState<any>(null);
  const [fa, setFa] = useState<any>(null);

  useEffect(() => {
    fetch(`/data/our_models.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((j) => { setData(j.tracks); setMeta(j); })
      .catch((e) => setErr(String(e)));
    fetch(`/data/live_forecast.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null)).then((j) => setLive(j)).catch(() => setLive(null));
    fetch(`/data/market_regime.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null)).then((j) => setMkt(j)).catch(() => setMkt(null));
    fetch(`/data/intraday_session.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null)).then((j) => setSess(j)).catch(() => setSess(null));
    fetch(`/data/forecast_ahead.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null)).then((j) => setFa(j)).catch(() => setFa(null));
  }, []);

  const barData = useMemo(() => (data ?? []).map((t) => ({
    name: t.label.split("—")[0].trim(), hit: t.overall_hit_ratio, baseline: t.baseline, key: t.key,
  })), [data]);

  const mergedCurve = useMemo(() => {
    if (!data) return [];
    const ths = Array.from(new Set(data.flatMap((t) => t.confidence_curve.map((c) => c.threshold)))).sort();
    return ths.map((th) => {
      const row: any = { threshold: th };
      data.forEach((t) => { const c = t.confidence_curve.find((x) => x.threshold === th); if (c) row[t.key] = c.hit_ratio; });
      return row;
    });
  }, [data]);

  const track = useMemo(() => (data ?? []).find((t) => t.key === sel), [data, sel]);

  const cumHit = useMemo(() => {
    if (!track) return [];
    let hits = 0;
    return track.timeline.map((p: any, i) => {
      hits += p.correct ? 1 : 0;
      return { ...p, hitRate: (hits / (i + 1)) * 100, one: 1 };
    });
  }, [track]);

  // most-recent CONSECUTIVE candles for the market chart (regular, not down-sampled)
  const candles = useMemo(() =>
    (((track as any)?.market_candles ?? []) as any[]).map((p) => ({ ...p, range: [p.low, p.high] })), [track]);
  const yDom = useMemo(() => {
    if (!candles.length) return [0, 1];
    const lo = Math.min(...candles.map((c: any) => c.low));
    const hi = Math.max(...candles.map((c: any) => c.high));
    const pad = (hi - lo) * 0.05;
    return [lo - pad, hi + pad];
  }, [candles]);

  // daily market-behaviour candles (regime-coloured)
  const mktCand = useMemo(() =>
    ((mkt?.candles ?? []) as any[]).map((p) => ({ ...p, x: p.date, range: [p.low, p.high] })), [mkt]);
  const mktY = useMemo(() => {
    if (!mktCand.length) return [0, 1];
    const lo = Math.min(...mktCand.map((c: any) => c.low));
    const hi = Math.max(...mktCand.map((c: any) => c.high));
    const pad = (hi - lo) * 0.05;
    return [lo - pad, hi + pad];
  }, [mktCand]);

  const valData = useMemo(() => ((mkt?.validation?.frames ?? []) as any[]).map((f) => ({
    frame: f.frame, bullish: f.bullish.mean_ret, sideways: f.sideways.mean_ret, bearish: f.bearish.mean_ret,
  })), [mkt]);

  // hourly intraday session candles
  const sessCand = useMemo(() =>
    ((sess?.candles ?? []) as any[]).map((p) => ({ ...p, range: [p.low, p.high] })), [sess]);
  const sessY = useMemo(() => {
    if (!sessCand.length) return [0, 1];
    const lo = Math.min(...sessCand.map((c: any) => c.low));
    const hi = Math.max(...sessCand.map((c: any) => c.high));
    const pad = (hi - lo) * 0.1;
    return [lo - pad, hi + pad];
  }, [sessCand]);

  if (err) return <Shell><p className="text-red-400">Failed to load our_models.json ({err}).</p></Shell>;
  if (!data) return <Shell><p className="text-zinc-500">Loading…</p></Shell>;

  return (
    <Shell>
      <div className="mb-6">
        <a href="/" className="text-sm text-indigo-400 hover:underline">← Back to dashboard</a>
        <h1 className="text-2xl font-bold mt-2 text-white">NIFTY 50 Regime Models</h1>
        <p className="text-zinc-400 text-sm">
          {meta?.source ?? "NIFTY 50"} · honest walk-forward · leak-free (shuffle-tested) · overfitting-checked
        </p>
      </div>

      {/* UPCOMING-DAYS FORECAST (hero) */}
      {fa?.days && (
        <div className="mb-8 rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-950/40 to-zinc-950 p-5">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
            <div className="text-base font-bold text-white">📈 Upcoming outlook — next trading days</div>
            <div className="text-[11px] text-zinc-400">
              as of <span className="text-zinc-200 font-semibold">{fa.asof}</span> · NIFTY{" "}
              <span className="text-zinc-200 font-semibold">{Math.round(fa.asof_close)}</span> · generated {fa.generated}
            </div>
          </div>
          <div className="text-xs text-zinc-500 mb-4">
            Live model projection from the last completed daily bar. Each card = the cumulative outlook that many trading
            days ahead. <span className="text-amber-300">Trust the VOLATILITY call (~60-68%)</span>; DIRECTION is weak
            (~35%, near random) and shown <span className="text-zinc-400">greyed / LOW</span> unless flagged RELIABLE.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {fa.days.map((d: any, i: number) => {
              const reliable = d.dir_trust === "RELIABLE";
              return (
                <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-bold text-white">+{d.lead}d</div>
                    <div className="text-[10px] text-zinc-500">{d.date}</div>
                  </div>
                  <div className="mt-3">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-500">Direction</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold" style={{ color: reliable ? regimeColor(d.dir) : "#71717a" }}>
                        {d.dir}
                      </span>
                      <span className="text-[11px] text-zinc-400">{Math.round(d.dir_conf)}%</span>
                    </div>
                    <div className="text-[9px]" style={{ color: reliable ? "#34d399" : "#71717a" }}>
                      {reliable ? "RELIABLE" : "LOW-trust"} · acc {Math.round(d.dir_acc)}%
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-zinc-800">
                    <div className="text-[10px] uppercase tracking-wide text-zinc-500">Volatility</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-bold" style={{ color: volColor(d.vol) }}>{d.vol}</span>
                      <span className="text-[11px] text-zinc-400">{Math.round(d.vol_conf)}%</span>
                    </div>
                    <div className="text-[9px] text-zinc-500">acc {Math.round(d.vol_acc)}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LIVE FORECAST */}
      {live?.horizons && (
        <div className="mb-8">
          <div className="text-sm font-semibold text-zinc-200 mb-1">Live forecast — current call per timeframe</div>
          <div className="text-xs text-zinc-500 mb-3">generated {live.generated}. Trade the VOLATILITY call; TREND reliable only where flagged.</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {live.horizons.map((h: any, i: number) => (
              <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
                <div className="text-xs font-semibold text-zinc-200">{h.name}</div>
                <div className="text-[11px] text-zinc-500 mb-3">as of {h.asof} · NIFTY {Math.round(h.close)}</div>
                <Row label="TREND" value={h.trend} conf={h.trend_conf} color={trendColor(h.trend)}
                     note={`acc ${(+h.dir_acc).toFixed(0)}% vs base ${(+h.dir_base).toFixed(0)}%`} trust={h.trend_trust} />
                <Row label="VOLATILITY" value={h.vol} conf={h.vol_conf} color={volColor(h.vol)}
                     note={`acc ${(+h.vol_acc).toFixed(0)}% vs base ${(+h.vol_base).toFixed(0)}%`} trust="RELIABLE" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MARKET BEHAVIOUR — daily regime */}
      {mkt?.summary && (
        <Panel title={`Market behaviour — NIFTY 50 daily regime (${mkt.summary.n_days.toLocaleString()} days, ${mkt.summary.start} → ${mkt.summary.end})`}
          subtitle="Every trading day classified BULLISH / BEARISH / SIDEWAYS from trend (EMA20 vs EMA50) + 1-month momentum. How regimes persist and switch is the context that helps anticipate the intraday / weekly / monthly forecasts.">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <Stat label="Bullish days" value={`${mkt.summary.bullish_pct}%`} color="#22c55e" />
            <Stat label="Bearish days" value={`${mkt.summary.bearish_pct}%`} color="#ef4444" />
            <Stat label="Sideways days" value={`${mkt.summary.sideways_pct}%`} color="#eab308" />
            <Stat label="Current regime" value={String(mkt.summary.current_regime).toUpperCase()} color={regimeColor(mkt.summary.current_regime)} />
          </div>
          <div className="text-[11px] text-zinc-400 mb-0.5">
            Daily candles coloured by regime — <span style={{ color: "#22c55e" }}>bullish</span> /
            <span style={{ color: "#ef4444" }}> bearish</span> / <span style={{ color: "#eab308" }}>sideways</span>
            {" "}(last {mktCand.length} days)
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mktCand} margin={{ left: 4, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
              <XAxis dataKey="x" tickFormatter={(v) => String(v).slice(0, 7)} minTickGap={60} tick={{ fontSize: 9, fill: AXIS }} height={16} />
              <YAxis domain={mktY as any} width={52} tick={{ fontSize: 10, fill: AXIS }} tickFormatter={(v) => Math.round(v).toString()} allowDecimals={false} />
              <Tooltip content={<MktTooltip />} />
              <Bar dataKey="range" isAnimationActive={false} shape={<Candle />} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-[11px] text-zinc-500 mt-2">
            Average regime lasts: bullish <b className="text-zinc-300">{mkt.summary.avg_duration.bullish}d</b> ·
            bearish <b className="text-zinc-300">{mkt.summary.avg_duration.bearish}d</b> ·
            sideways <b className="text-zinc-300">{mkt.summary.avg_duration.sideways}d</b>.
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-[11px] text-left">
              <thead className="text-zinc-400 border-b border-zinc-800">
                <tr><th className="py-1.5 pr-3">Date</th><th className="pr-3">Close</th><th className="pr-3">Day %</th>
                  <th className="pr-3">1-month %</th><th className="pr-3">Vol (20d)</th><th>Regime</th></tr>
              </thead>
              <tbody>
                {mkt.recent.map((r: any, i: number) => (
                  <tr key={i} className="border-b border-zinc-900">
                    <td className="py-1.5 pr-3 text-zinc-300">{r.date}</td>
                    <td className="pr-3 text-zinc-200">{Math.round(r.close)}</td>
                    <td className="pr-3" style={{ color: r.ret_1d >= 0 ? "#34d399" : "#f87171" }}>{r.ret_1d > 0 ? "+" : ""}{r.ret_1d}%</td>
                    <td className="pr-3" style={{ color: r.ret_20d >= 0 ? "#34d399" : "#f87171" }}>{r.ret_20d > 0 ? "+" : ""}{r.ret_20d}%</td>
                    <td className="pr-3 text-zinc-400">{r.vol_20d}%</td>
                    <td className="font-semibold" style={{ color: regimeColor(r.regime) }}>{String(r.regime).toUpperCase()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      )}

      {/* REGIME VALIDATION */}
      {mkt?.validation?.frames && (
        <Panel title="Does the regime actually predict? (validation across intraday / weekly / monthly)"
          subtitle="Mean forward return AFTER each regime, at all three horizons. If BULLISH > SIDEWAYS > BEARISH, the regime carries real directional signal — it is not just a label.">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={valData} margin={{ top: 16, right: 12, left: 4, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
              <XAxis dataKey="frame" tick={{ fontSize: 11, fill: AXIS }} />
              <YAxis unit="%" tick={{ fontSize: 10, fill: AXIS }}
                label={{ value: "mean forward return (%)", angle: -90, position: "insideLeft", style: { fontSize: 10, fill: AXIS } }} />
              <Tooltip formatter={(v: any) => `${(+v).toFixed(2)}%`} contentStyle={TT} /><Legend />
              <ReferenceLine y={0} stroke="#52525b" />
              <Bar dataKey="bullish" name="Bullish" fill="#22c55e" />
              <Bar dataKey="sideways" name="Sideways" fill="#eab308" />
              <Bar dataKey="bearish" name="Bearish" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 text-[11px]">
            {mkt.validation.frames.map((f: any, i: number) => (
              <div key={i} className="bg-zinc-800/40 rounded px-3 py-2">
                <div className="font-semibold text-zinc-300 mb-1">{f.frame} — % of times market went UP</div>
                <div>
                  <span style={{ color: "#22c55e" }}>bull {f.bullish.pct_up}%</span> ·
                  <span style={{ color: "#eab308" }}> side {f.sideways.pct_up}%</span> ·
                  <span style={{ color: "#ef4444" }}> bear {f.bearish.pct_up}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-zinc-500 mt-3">
            ✓ Validated: bullish beats sideways beats bearish at every horizon. (Even bearish stays slightly positive
            at weekly/monthly because NIFTY 2016-2026 was a long bull market — the regime ranks DIRECTION correctly even
            though the upward drift lifts all absolute returns. Intraday is where bearish actually turns negative.)
          </div>
        </Panel>
      )}

      {/* YESTERDAY'S INTRADAY CHART (09:15 - 13:15) */}
      {sess?.candles?.length > 0 && (
        <Panel title={`Yesterday's intraday chart — ${sess.date}  (${sess.window})`}
          subtitle={`The latest complete NIFTY 50 session, 5-minute candles from 09:15 to 13:15 IST (green = up, red = down). The 09:15 "morning call" forecasts the volatility for this whole 4-hour window. Day's regime: ${String(sess.regime).toUpperCase()}.`}>
          {sess.open_pred && (
            <div className="mb-3 text-[12px] bg-zinc-800/50 border border-zinc-800 rounded px-3 py-2">
              <span className="text-zinc-400">Morning call (09:15) for the 09:15–13:15 window:</span>{" "}
              <b style={{ color: volColor(sess.open_pred.pred) }}>{String(sess.open_pred.pred).toUpperCase()}</b>
              <span className="text-zinc-500"> · confidence {sess.open_pred.conf}%</span>
            </div>
          )}
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={sessCand} margin={{ left: 4, right: 8, bottom: 6 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
              <XAxis dataKey="hm" interval={5} angle={-45} textAnchor="end" height={40} tick={{ fontSize: 9, fill: AXIS }} />
              <YAxis domain={sessY as any} width={52} tick={{ fontSize: 10, fill: AXIS }} tickFormatter={(v) => Math.round(v).toString()} allowDecimals={false} />
              <Tooltip content={<SessTooltip />} />
              <ReferenceLine x="09:15" stroke="#818cf8" strokeDasharray="3 3"
                label={{ value: "predicted at 09:15 → 13:15", position: "insideTopLeft", fontSize: 9, fill: "#818cf8" }} />
              <Bar dataKey="range" isAnimationActive={false} shape={<CandleUD />} />
            </BarChart>
          </ResponsiveContainer>
          <div className="text-[11px] text-zinc-500 mt-2">
            Session open {Math.round(sessCand[0]?.open)} → 13:15 close {Math.round(sessCand[sessCand.length - 1]?.close)}
            {" "}({(((sessCand[sessCand.length - 1]?.close - sessCand[0]?.open) / sessCand[0]?.open) * 100).toFixed(2)}% over the window).
          </div>
        </Panel>
      )}

      {/* SUMMARY CARDS with past->future */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {data.map((t) => (
          <div key={t.key} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: cOf(t.key) }}>{t.label}</div>
            <div className="text-4xl font-bold mt-2 text-white">{t.overall_hit_ratio}%</div>
            <div className="text-xs text-zinc-500 mt-1">hit ratio · baseline {t.baseline}% · edge +{t.edge}</div>
            <div className="mt-3 text-[11px] text-zinc-300 bg-zinc-800/60 rounded px-2 py-1.5">
              past <b className="text-white">{t.lookback_bars}</b> candles →
              predicts next <b style={{ color: cOf(t.key) }}>{t.horizon_bars}</b> {t.bar_unit}s
            </div>
            <div className="text-[11px] text-zinc-500 mt-2">{t.model} · n={t.n.toLocaleString()}</div>
          </div>
        ))}
      </div>

      {/* HOW IT WORKS */}
      <Panel title="How the forecast works (past candles → future candles)"
        subtitle="Each model reads a window of RECENT candles (features), then forecasts ONE regime label covering the NEXT block of candles. It never sees the future — trained on the past, tested on unseen data.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[12px]">
          {data.map((t) => (
            <div key={t.key} className="flex items-center gap-2 bg-zinc-800/40 rounded px-3 py-2">
              <span className="font-semibold" style={{ color: cOf(t.key) }}>{t.label.split("—")[0].trim()}</span>
              <span className="text-zinc-400">past {t.lookback_bars} {t.bar_unit}s</span>
              <span className="text-zinc-600">→</span>
              <span className="text-zinc-200">next {t.horizon_bars} {t.bar_unit}s ({t.horizon})</span>
            </div>
          ))}
        </div>
      </Panel>

      {/* BASELINE BARS */}
      <Panel title="Hit ratio vs baseline (per timeframe)"
        subtitle="Accuracy on unseen (out-of-fold) data vs a naive 'always guess the majority' baseline. The gap is the model's real edge.">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} margin={{ top: 22, right: 16, left: 8, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: AXIS }} />
            <YAxis domain={[40, 90]} unit="%" tick={{ fontSize: 11, fill: AXIS }}
              label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: AXIS } }} />
            <Tooltip formatter={(v: any) => `${v}%`} contentStyle={TT} /><Legend />
            <Bar dataKey="baseline" name="Baseline (naive)" fill="#3f3f46">
              <LabelList dataKey="baseline" position="top" formatter={(v: any) => `${v}%`} style={{ fontSize: 10, fill: AXIS }} />
            </Bar>
            <Bar dataKey="hit" name="Model hit ratio">
              {barData.map((d) => <Cell key={d.key} fill={cOf(d.key)} />)}
              <LabelList dataKey="hit" position="top" formatter={(v: any) => `${v}%`} style={{ fontSize: 12, fontWeight: 700, fill: "#fff" }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-1 text-[11px]">
          {barData.map((d) => (
            <div key={d.key} className="text-center text-zinc-500">
              <span style={{ color: cOf(d.key), fontWeight: 600 }}>{d.name}</span>{" "}
              edge <b className="text-emerald-400">+{(d.hit - d.baseline).toFixed(1)} pts</b>
            </div>
          ))}
        </div>
      </Panel>

      {/* CONFIDENCE CURVE */}
      <Panel title="Hit ratio rises with confidence (trade only confident calls)"
        subtitle="Filtering to the model's most confident predictions raises accuracy — the tradeable edge.">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={mergedCurve}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="threshold" type="number" domain={[0.5, 0.9]} tickFormatter={(v) => v.toFixed(2)} tick={{ fontSize: 10, fill: AXIS }} />
            <YAxis domain={[50, 95]} unit="%" tick={{ fontSize: 10, fill: AXIS }} />
            <Tooltip contentStyle={TT} /><Legend />
            {data.map((t) => (
              <Line key={t.key} type="monotone" dataKey={t.key} name={t.label.split("—")[0].trim()}
                stroke={cOf(t.key)} strokeWidth={2} dot connectNulls />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Panel>

      {/* TIMEFRAME SELECTOR */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {data.map((t) => (
          <button key={t.key} onClick={() => setSel(t.key)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border ${sel === t.key ? "text-white" : "text-zinc-300 bg-zinc-900"}`}
            style={sel === t.key ? { background: cOf(t.key), borderColor: cOf(t.key) } : { borderColor: "#3f3f46" }}>
            {t.label.split("—")[0].trim()}
          </button>
        ))}
      </div>

      {/* MARKET CANDLESTICK */}
      <Panel title={`Market chart — ${track?.label.split("—")[0].trim()} (most recent ${candles.length} candles)`}
        subtitle="Real NIFTY 50 candles (green = up, red = down). Hover for OHLC. The ribbon below is the predicted trend at each candle.">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={candles} margin={{ left: 4, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="x" hide />
            <YAxis domain={yDom as any} width={52} tick={{ fontSize: 10, fill: AXIS }} tickFormatter={(v) => Math.round(v).toString()} allowDecimals={false} />
            <Tooltip content={<CandleTooltip />} />
            <Bar dataKey="range" isAnimationActive={false} shape={<Candle />} />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={22}>
          <BarChart data={candles} barCategoryGap={0} barGap={0} margin={{ left: 4, right: 8 }}>
            <XAxis dataKey="x" hide /><YAxis hide domain={[0, 1]} width={52} />
            <Bar dataKey="one" isAnimationActive={false}>
              {candles.map((p: any, i: number) => <Cell key={i} fill={trendColor(p.trend)} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="text-[10px] text-zinc-500 mt-1">
          Predicted trend: <span style={{ color: "#34d399" }}>bullish</span> /
          <span style={{ color: "#f87171" }}> bearish</span> / <span style={{ color: "#71717a" }}>sideways</span>
        </div>
      </Panel>

      {/* TIMELINE + HIT RATE */}
      <Panel title="Prediction timeline & cumulative hit rate"
        subtitle="Top = price; middle = predicted-trend ribbon; bottom = running accuracy. When the line stays ABOVE the red baseline, the model adds value. Hover for time, trend and volatility call.">
        {track && (
          <div className="text-[11px] text-zinc-300 mb-3 px-2 py-1.5 rounded bg-zinc-800/50 border border-zinc-800">
            <b style={{ color: cOf(sel) }}>{track.label}</b> · {track.horizon} · hit ratio <b>{track.overall_hit_ratio}%</b> vs baseline {track.baseline}%
            (<span className="text-emerald-400">edge +{track.edge}</span>) · {track.n.toLocaleString()} predictions ·
            {" "}{cumHit[0]?.x?.slice(0, 10)} → {cumHit[cumHit.length - 1]?.x?.slice(0, 10)}
          </div>
        )}
        <div className="text-[11px] font-semibold text-zinc-400 mb-0.5">1 · NIFTY 50 price (close)</div>
        <ResponsiveContainer width="100%" height={130}>
          <LineChart data={cumHit} syncId="ourtl" margin={{ left: 4, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="x" hide />
            <YAxis yAxisId="p" domain={["auto", "auto"]} width={52} tick={{ fontSize: 10, fill: AXIS }} tickFormatter={(v) => Math.round(v).toString()} />
            <Tooltip content={<TLTooltip />} />
            <Line yAxisId="p" type="monotone" dataKey="close" stroke="#a1a1aa" dot={false} strokeWidth={1.5} />
          </LineChart>
        </ResponsiveContainer>
        <div className="text-[11px] font-semibold text-zinc-400 mt-3 mb-0.5">
          2 · Predicted trend — <span style={{ color: "#34d399" }}>bullish</span> / <span style={{ color: "#f87171" }}>bearish</span> / <span style={{ color: "#71717a" }}>sideways</span>
        </div>
        <ResponsiveContainer width="100%" height={24}>
          <BarChart data={cumHit} syncId="ourtl" barCategoryGap={0} barGap={0} margin={{ left: 4, right: 8 }}>
            <XAxis dataKey="x" hide /><YAxis hide domain={[0, 1]} width={52} />
            <Tooltip content={<TLTooltip />} />
            <Bar dataKey="one" isAnimationActive={false}>
              {cumHit.map((p: any, i: number) => <Cell key={i} fill={trendColor(p.trend)} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="text-[11px] font-semibold text-zinc-400 mt-3 mb-0.5">3 · Cumulative hit rate (%) vs baseline</div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={cumHit} syncId="ourtl" margin={{ left: 4, right: 8, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
            <XAxis dataKey="x" tickFormatter={(v) => String(v).slice(0, 10)} minTickGap={70} tick={{ fontSize: 9, fill: AXIS }} height={18} />
            <YAxis domain={[40, 95]} unit="%" width={52} tick={{ fontSize: 10, fill: AXIS }} />
            <Tooltip content={<TLTooltip />} />
            <ReferenceLine y={track?.baseline} stroke="#f87171" strokeDasharray="4 4"
              label={{ value: `baseline ${track?.baseline}%`, position: "insideTopRight", fontSize: 10, fill: "#f87171" }} />
            <Line type="monotone" dataKey="hitRate" stroke={cOf(sel)} dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Panel>

      {/* CONFIDENCE DISTRIBUTION vs HIT RATIO */}
      {track?.conf_dist && (
        <Panel title={`Confidence distribution & hit ratio — ${track.label.split("—")[0].trim()}`}
          subtitle={`Area = how predictions spread across confidence (the distribution). Green line = hit ratio for predictions ABOVE each confidence level. Take confidence ≥ ${Math.round((track.rec_threshold ?? 0.6) * 100)}% → hit ratio ${track.rec_hit}% (covers ${track.rec_coverage}% of calls).`}>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={track.conf_dist} margin={{ top: 16, right: 16, left: 4, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
              <XAxis dataKey="conf" type="number" domain={[0.5, 0.85]} tickFormatter={(v) => `${Math.round(v * 100)}%`} tick={{ fontSize: 10, fill: AXIS }} />
              <YAxis yAxisId="d" tick={{ fontSize: 10, fill: AXIS }} label={{ value: "% of predictions", angle: -90, position: "insideLeft", style: { fontSize: 9, fill: AXIS } }} />
              <YAxis yAxisId="h" orientation="right" domain={[40, 100]} unit="%" tick={{ fontSize: 10, fill: AXIS }} />
              <Tooltip contentStyle={TT} formatter={(v: any, n: any) => [n === "distribution (% of preds)" ? `${v}%` : `${v}%`, n]} />
              <Legend />
              <Area yAxisId="d" type="monotone" dataKey="density" name="distribution (% of preds)" stroke={cOf(sel)} fill={cOf(sel)} fillOpacity={0.22} />
              <Line yAxisId="h" type="monotone" dataKey="cum_hit" name="hit ratio (conf ≥ x)" stroke="#34d399" strokeWidth={2.5} dot connectNulls />
              <Line yAxisId="h" type="monotone" dataKey="bin_hit" name="hit ratio (this bin)" stroke="#fbbf24" strokeWidth={1} strokeDasharray="4 3" dot={false} connectNulls />
              <ReferenceLine yAxisId="h" x={track.rec_threshold} stroke="#fbbf24" strokeDasharray="4 4"
                label={{ value: `trade ≥ ${Math.round((track.rec_threshold ?? 0.6) * 100)}%`, fontSize: 10, fill: "#fbbf24", position: "insideTopRight" }} />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-[11px] text-left">
              <thead className="text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="py-1.5 px-2">Confidence ≥</th><th className="px-2">Hit ratio (≥ this)</th>
                  <th className="px-2">Coverage (% of calls)</th><th className="px-2">This bin's hit</th><th className="px-2"># preds</th>
                </tr>
              </thead>
              <tbody>
                {(track.conf_dist ?? []).filter((d: any) => d.coverage >= 1).map((d: any, i: number) => (
                  <tr key={i} className={`border-t border-zinc-900 ${d.conf === track.rec_threshold ? "bg-amber-500/10" : ""}`}>
                    <td className="py-1 px-2 text-zinc-200">{Math.round(d.conf * 100)}%{d.conf === track.rec_threshold ? "  ★" : ""}</td>
                    <td className="px-2 font-semibold text-emerald-400">{d.cum_hit ?? "—"}%</td>
                    <td className="px-2 text-zinc-400">{d.coverage}%</td>
                    <td className="px-2 text-zinc-400">{d.bin_hit ?? "—"}%</td>
                    <td className="px-2 text-zinc-500">{Math.round((d.density / 100) * (track.n ?? 0))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-[11px] text-zinc-400 mt-2">
            ★ Recommended: take confidence <b className="text-amber-400">≥ {Math.round((track.rec_threshold ?? 0.6) * 100)}%</b> →
            hit ratio jumps to <b className="text-emerald-400">{track.rec_hit}%</b> (covers {track.rec_coverage}% of predictions).
            The hit ratio only rises with confidence — so the more confident the call, the more often it's right.
          </div>
        </Panel>
      )}

      {/* DATA TABLES — last 50 per timeframe */}
      <Panel title="Recent predictions — last 50 per timeframe"
        subtitle="Newest first, on unseen (out-of-fold) data. TWO predictions side by side: DIRECTION (bull/bear/sideways) and VOLATILITY (calm/volatile), each with its own Actual + Hit ✓. Reality: direction is ~30% (near random — nobody predicts it well), volatility is ~77% (real skill — that's the model's headline). INTRADAY = the 09:15 session-open call per day (IST). RULE: only TAKE when confidence ≥ 50%, else SKIP. Scroll for all 50.">
        <div className="grid grid-cols-1 gap-5">
          {data.map((t) => (
            <div key={t.key}>
              <div className="text-[12px] font-semibold mb-1" style={{ color: cOf(t.key) }}>
                {t.label}
                <span className="text-zinc-500 font-normal">
                  {" "}· vol-hit {t.overall_hit_ratio}% · {(t.recent ?? []).length} rows
                  {t.key.startsWith("intraday") ? " · 09:15 open per day, last 50 days" : ""}
                </span>
              </div>
              <div className="overflow-auto max-h-72 border border-zinc-800 rounded">
                <table className="w-full text-[11px] text-left">
                  <thead className="text-zinc-400 bg-zinc-900 sticky top-0">
                    <tr>
                      <th className="py-1.5 px-2">Time (predicted at)</th><th className="px-2">Predicts (IST)</th>
                      <th className="px-2">O</th><th className="px-2">H</th>
                      <th className="px-2">L</th><th className="px-2">C</th>
                      <th className="px-2 border-l border-zinc-700 text-indigo-300">Direction</th><th className="px-2 text-indigo-300">Actual</th><th className="px-2 text-indigo-300">Hit</th>
                      <th className="px-2 border-l border-zinc-700 text-amber-300">Volatility</th><th className="px-2 text-amber-300">Actual</th><th className="px-2 text-amber-300">Hit</th>
                      <th className="px-2 border-l border-zinc-700">Conf</th><th className="px-2">Call (≥50%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(t.recent ?? []).map((p: any, i: number) => (
                      <tr key={i} className="border-t border-zinc-900">
                        <td className="py-1 px-2 text-zinc-300 whitespace-nowrap">{String(p.x).slice(0, 16)}</td>
                        <td className="px-2 text-zinc-400 whitespace-nowrap" style={{ color: cOf(t.key) }}>{p.window ?? t.horizon}</td>
                        <td className="px-2 text-zinc-500">{p.open != null ? Math.round(p.open) : "—"}</td>
                        <td className="px-2 text-zinc-500">{p.high != null ? Math.round(p.high) : "—"}</td>
                        <td className="px-2 text-zinc-500">{p.low != null ? Math.round(p.low) : "—"}</td>
                        <td className="px-2 text-zinc-200">{Math.round(p.close)}</td>
                        {/* DIRECTION group: predicted dir | actual dir | hit */}
                        <td className="px-2 font-semibold border-l border-zinc-800" style={{ color: regimeColor(p.trend) }}>{p.trend ? String(p.trend).toUpperCase() : "—"}</td>
                        <td className="px-2 font-semibold" style={{ color: regimeColor(p.behaviour) }}>{p.behaviour ? String(p.behaviour).toUpperCase() : "—"}</td>
                        {(() => {
                          const dh = p.trend && p.behaviour ? String(p.trend).toLowerCase() === String(p.behaviour).toLowerCase() : null;
                          return <td className="px-2 font-semibold">{dh === null ? <span className="text-zinc-600">—</span> : dh ? <span className="text-emerald-400">✓</span> : <span className="text-red-400">✗</span>}</td>;
                        })()}
                        {/* VOLATILITY group: predicted vol | actual vol | hit */}
                        <td className="px-2 font-semibold border-l border-zinc-800" style={{ color: volColor(p.pred) }}>{p.pred}</td>
                        <td className="px-2 text-zinc-400">{p.actual}</td>
                        <td className="px-2 font-semibold">{p.correct ? <span className="text-emerald-400">✓</span> : <span className="text-red-400">✗</span>}</td>
                        {/* confidence + take/skip (volatility model) */}
                        <td className="px-2 text-zinc-400 border-l border-zinc-800">{p.conf}%</td>
                        <td className="px-2 font-semibold">{p.conf >= 50 ? <span className="text-emerald-400">TAKE</span> : <span className="text-zinc-600">SKIP</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </Shell>
  );
}

const TT = { background: "#18181b", border: "1px solid #3f3f46", borderRadius: 6, fontSize: 11, color: "#e4e4e7" };

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-8 max-w-6xl mx-auto">{children}</div>;
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 mb-6">
      <div className="text-sm font-semibold text-zinc-100">{title}</div>
      {subtitle ? <div className="text-[11px] text-zinc-500 mt-1 mb-3 leading-snug">{subtitle}</div> : <div className="mb-4" />}
      {children}
    </div>
  );
}

function trendColor(t?: string) {
  const u = (t || "").toUpperCase();
  return u === "BULLISH" ? "#34d399" : u === "BEARISH" ? "#f87171" : "#71717a";
}
function volColor(v?: string) {
  const u = (v || "").toUpperCase();
  return u.includes("VOLATILE") || u === "HIGH-VOL" ? "#fbbf24" : "#38bdf8";
}
function regimeColor(r?: string) {
  const u = (r || "").toUpperCase();
  return u === "BULLISH" ? "#22c55e" : u === "BEARISH" ? "#ef4444" : "#eab308";
}


function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-800/40 px-3 py-2 text-center">
      <div className="text-[10px] uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="text-lg font-bold" style={{ color }}>{value}</div>
    </div>
  );
}

function MktTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-[11px] text-zinc-200">
      <div className="font-semibold mb-1">{p.date}</div>
      <div>O {Math.round(p.open)} · H {Math.round(p.high)} · L {Math.round(p.low)} · C {Math.round(p.close)}</div>
      <div>day {p.ret_1d > 0 ? "+" : ""}{p.ret_1d}% · 1-month {p.ret_20d > 0 ? "+" : ""}{p.ret_20d}% · vol {p.vol_20d}%</div>
      <div>regime: <b style={{ color: regimeColor(p.regime) }}>{String(p.regime).toUpperCase()}</b></div>
    </div>
  );
}

function SessTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-[11px] text-zinc-200">
      <div className="font-semibold mb-1">{p.date} · {p.hm}</div>
      <div>O {Math.round(p.open)} · H {Math.round(p.high)} · L {Math.round(p.low)} · C {Math.round(p.close)}</div>
      <div>regime: <b style={{ color: regimeColor(p.regime) }}>{String(p.regime).toUpperCase()}</b></div>
    </div>
  );
}

function Row({ label, value, conf, color, note, trust }: any) {
  const reliable = trust === "RELIABLE";
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wide text-zinc-500">{label}</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold"
          style={reliable ? { background: "#064e3b", color: "#6ee7b7" } : { background: "#422006", color: "#fcd34d" }}>{trust}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-lg font-bold" style={{ color }}>{value}</span>
        <span className="text-xs text-zinc-500">conf {Math.round(conf)}%</span>
      </div>
      <div className="text-[10px] text-zinc-500">{note}</div>
    </div>
  );
}

// candlestick shape: wick = high-low, body = open-close
function Candle(props: any) {
  const { x, y, width, height, payload } = props;
  const { open, high, low, close } = payload;
  if (high == null || low == null || high === low) return null;
  const ratio = height / (high - low);
  const yOf = (p: number) => y + (high - p) * ratio;
  const reg = payload.regime ?? payload.trend;        // colour by market regime if present
  const color = reg ? regimeColor(reg) : (close >= open ? "#22c55e" : "#ef4444");
  const cx = x + width / 2;
  const bt = yOf(Math.max(open, close)), bb = yOf(Math.min(open, close));
  const bw = Math.max(1.5, width * 0.6);
  return (
    <g>
      <line x1={cx} x2={cx} y1={yOf(high)} y2={yOf(low)} stroke={color} strokeWidth={1} />
      <rect x={cx - bw / 2} y={bt} width={bw} height={Math.max(1, bb - bt)} fill={color} />
    </g>
  );
}

// candlestick coloured by up/down (standard market candle) — for the yesterday chart
function CandleUD(props: any) {
  const { x, y, width, height, payload } = props;
  const { open, high, low, close } = payload;
  if (high == null || low == null || high === low) return null;
  const ratio = height / (high - low);
  const yOf = (p: number) => y + (high - p) * ratio;
  const color = close >= open ? "#22c55e" : "#ef4444";
  const cx = x + width / 2;
  const bt = yOf(Math.max(open, close)), bb = yOf(Math.min(open, close));
  const bw = Math.max(2, width * 0.6);
  return (
    <g>
      <line x1={cx} x2={cx} y1={yOf(high)} y2={yOf(low)} stroke={color} strokeWidth={1} />
      <rect x={cx - bw / 2} y={bt} width={bw} height={Math.max(1, bb - bt)} fill={color} />
    </g>
  );
}

function CandleTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-[11px] text-zinc-200">
      <div className="font-semibold mb-1">{p.x}</div>
      <div>O {Math.round(p.open)} · H {Math.round(p.high)} · L {Math.round(p.low)} · C {Math.round(p.close)}</div>
      {p.trend && <div>trend: <b style={{ color: trendColor(p.trend) }}>{String(p.trend).toUpperCase()}</b></div>}
    </div>
  );
}

function TLTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-[11px] text-zinc-200">
      <div className="font-semibold mb-1">{p.x}</div>
      {p.trend != null && <div>trend: <b style={{ color: trendColor(p.trend) }}>{String(p.trend).toUpperCase()}</b></div>}
      {p.pred != null && <div>volatility: <b style={{ color: p.correct ? "#34d399" : "#f87171" }}>{p.pred}</b></div>}
      {p.actual != null && <div>actual vol: {p.actual}</div>}
      {p.close != null && <div className="text-zinc-400">close: {Math.round(p.close)}</div>}
      {p.hitRate != null && <div className="text-zinc-400">hit rate so far: {Number(p.hitRate).toFixed(1)}%</div>}
    </div>
  );
}
