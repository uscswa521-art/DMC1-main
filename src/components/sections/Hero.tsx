"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

// ─── Network topology (DMC × BITUNIX visual) ───────────────
const NODES: [number, number][] = [
  [40, 55], [145, 100], [275, 65], [385, 48], [448, 155],
  [465, 290], [375, 340], [245, 355], [95, 315], [25, 215],
  [195, 178], [330, 198], [72, 145], [418, 95], [205, 268],
  [310, 310], [155, 240], [430, 240],
];
const EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],
  [0,2],[1,10],[2,11],[3,13],[10,11],[10,14],[11,12],[7,14],
  [4,17],[17,5],[9,16],[16,14],[15,6],[15,7],[2,10],
];

function PartnershipVisual() {
  return (
    <div className="relative w-full max-w-[640px] aspect-square" style={{ perspective: "800px" }}>
      {/* Orbital ring 1 (green, slow) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 0 }}>
        <div style={{ width: "115%", aspectRatio: "2.4/1", border: "1px solid rgba(13,242,88,0.18)", borderRadius: "50%", animation: "orbitalSpin 14s linear infinite", position: "relative" }}>
          <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "#0DF258", boxShadow: "0 0 14px #0DF258, 0 0 28px rgba(13,242,88,0.6)" }} />
        </div>
      </div>
      {/* Orbital ring 2 (chartreuse, counter-rotate, fast) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 0 }}>
        <div style={{ width: "128%", aspectRatio: "3/1", border: "1px solid rgba(200,224,82,0.12)", borderRadius: "50%", animation: "orbitalSpin 9s linear infinite reverse", position: "relative" }}>
          <div style={{ position: "absolute", top: -4, left: "50%", transform: "translateX(-50%)", width: 7, height: 7, borderRadius: "50%", background: "#C8E052", boxShadow: "0 0 12px #C8E052, 0 0 24px rgba(200,224,82,0.5)" }} />
        </div>
      </div>
      {/* Main floating card */}
      <div className="relative z-10" style={{ animation: "heroFloat 7s ease-in-out infinite" }}>
        <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ animation: "borderScan 4s ease-in-out infinite" }} />
        <div className="relative rounded-xl border border-neon-green/25 overflow-hidden" style={{ background: "linear-gradient(150deg, #060d07 0%, #0c1a0e 50%, #050a06 100%)", boxShadow: "0 0 80px rgba(13,242,88,0.18), 0 0 200px rgba(13,242,88,0.06)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-25" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.035) 50%)", backgroundSize: "100% 3px" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(13,242,88,0.12) 0%, transparent 65%)" }} />
          <div className="absolute left-0 right-0 pointer-events-none" style={{ height: 2, background: "linear-gradient(to right, transparent 0%, rgba(13,242,88,0.5) 30%, rgba(13,242,88,0.9) 50%, rgba(13,242,88,0.5) 70%, transparent 100%)", animation: "scanSweep 4s ease-in-out infinite", zIndex: 2 }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
            {EDGES.map(([a, b], i) => (
              <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="rgba(13,242,88,0.18)" strokeWidth="0.6" strokeDasharray="180" style={{ animation: `lineFlow 3.5s ease-in-out ${(i * 0.19).toFixed(2)}s infinite` } as React.CSSProperties} />
            ))}
            {NODES.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(13,242,88,0.55)" style={{ animation: `nodesPulse 2.8s ease-in-out ${(i * 0.15).toFixed(2)}s infinite` } as React.CSSProperties} />
            ))}
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 gap-0">
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", letterSpacing: "0.3em", marginBottom: 12, textTransform: "uppercase" }}>◈ OFFICIAL PARTNER ◈</div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(72px, 14vw, 130px)", color: "#ffffff", letterSpacing: "0.12em", lineHeight: 1, animation: "dmcGlowPulse 2.8s ease-in-out infinite", display: "block" }}>DMC</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 7vw, 64px)", color: "#C8E052", lineHeight: 1, display: "block", margin: "4px 0 2px", animation: "xBurst 2s ease-in-out 0.6s infinite" }}>×</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: "clamp(48px, 9.5vw, 96px)", color: "#ffffff", letterSpacing: "0.08em", lineHeight: 1, animation: "dmcGlowPulse 2.8s ease-in-out 1.4s infinite", display: "block" }}>BITUNIX</span>
            <div style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(13,242,88,0.2)", width: "100%", textAlign: "center" }}>
              <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "clamp(7px, 1.1vw, 10px)", color: "rgba(13,242,88,0.45)", letterSpacing: "0.2em", textTransform: "uppercase" }}>PARTNERSHIP ｜ CRYPTO &amp; BLOCKCHAIN ECOSYSTEM</div>
            </div>
          </div>
          {["top-2 left-2 border-l-2 border-t-2","top-2 right-2 border-r-2 border-t-2","bottom-2 left-2 border-l-2 border-b-2","bottom-2 right-2 border-r-2 border-b-2"].map((cls, i) => (
            <div key={i} className={`absolute w-6 h-6 ${cls} border-neon-green/50`} />
          ))}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.5)", letterSpacing: "0.2em" }}>LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Types ─────────────────────────────────────────────────
interface Candle { open: number; close: number; high: number; low: number; vol: number; }

// ─── Helpers ────────────────────────────────────────────────
function genCandle(prev: number): Candle {
  const open = prev;
  const move = (Math.random() - 0.47) * open * 0.013;
  const close = open + move;
  const wick = Math.abs(move) * (0.4 + Math.random() * 0.9);
  return {
    open, close,
    high: Math.max(open, close) + wick * 0.6,
    low:  Math.min(open, close) - wick * 0.6,
    vol:  0.15 + Math.random() * 0.85,
  };
}

function makeCandles(n: number): Candle[] {
  let p = 67500;
  return Array.from({ length: n }, () => {
    const c = genCandle(p); p = c.close; return c;
  });
}

// ─── Price Ticker ───────────────────────────────────────────
const COINS = [
  { sym: "BTC/USDT", base: 67420 },
  { sym: "ETH/USDT", base: 3241 },
  { sym: "SOL/USDT", base: 178.4 },
  { sym: "BNB/USDT", base: 612.5 },
  { sym: "XRP/USDT", base: 0.5821 },
  { sym: "DOGE/USDT", base: 0.1623 },
  { sym: "ADA/USDT", base: 0.4521 },
  { sym: "MATIC/USDT", base: 0.8934 },
];

function PriceTicker() {
  const [prices, setPrices] = useState(() =>
    COINS.map(c => ({ price: c.base, delta: (Math.random() - 0.4) * 4 }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        price: p.price * (1 + (Math.random() - 0.49) * 0.002),
        delta: Math.max(-9.9, Math.min(9.9, p.delta + (Math.random() - 0.5) * 0.12)),
      })));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const doubled = [...COINS, ...COINS];

  return (
    <div
      className="absolute left-0 right-0 z-30 overflow-hidden border-b border-neon-green/8"
      style={{ top: "70px", background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
    >
      <div style={{ display: "flex", animation: "tickerScroll 36s linear infinite", width: "max-content" }}>
        {doubled.map((coin, i) => {
          const { price, delta } = prices[i % COINS.length];
          const up = delta >= 0;
          const fmt = price < 1 ? price.toFixed(4) : price < 10 ? price.toFixed(3) : price.toFixed(1);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 20px", flexShrink: 0 }}>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>{coin.sym}</span>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{fmt}</span>
              <span style={{ fontFamily: "monospace", fontSize: 10, color: up ? "#0DF258" : "#f87171" }}>
                {up ? "▲" : "▼"}{Math.abs(delta).toFixed(2)}%
              </span>
              <span style={{ color: "rgba(255,255,255,0.08)", marginLeft: 4 }}>·</span>
            </div>
          );
        })}
      </div>
      <style>{`@keyframes tickerScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}

// ─── Candlestick Chart ──────────────────────────────────────
function CandlestickVisual() {
  const [candles, setCandles] = useState<Candle[]>(() => makeCandles(24));
  const [newBar, setNewBar] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setNewBar(true);
      setTimeout(() => {
        setCandles(prev => {
          const c = genCandle(prev[prev.length - 1].close);
          return [...prev.slice(1), c];
        });
        setNewBar(false);
      }, 250);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Layout
  const W = 500, H = 320;
  const chartH = 228, volH = 52;
  const padR = 48, padT = 12;
  const chartW = W - padR;
  const n = candles.length;
  const slotW = chartW / n;
  const cw = Math.max(3, Math.floor(slotW * 0.62));

  const allPrices = candles.flatMap(c => [c.high, c.low]);
  const minP = Math.min(...allPrices);
  const maxP = Math.max(...allPrices);
  const pRange = maxP - minP || 100;
  const py = (p: number) => padT + ((maxP - p) / pRange) * chartH;

  // 5-period MA
  const ma5 = candles.map((_, i) =>
    i < 4 ? null : candles.slice(i - 4, i + 1).reduce((s, c) => s + (c.open + c.close) / 2, 0) / 5
  );

  const last = candles[candles.length - 1];
  const lastY = py(last.close);
  const isUp = last.close >= last.open;

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Outer glow */}
      <div className="absolute -inset-px pointer-events-none rounded-sm"
        style={{ boxShadow: "0 0 60px rgba(13,242,88,0.10), 0 0 120px rgba(13,242,88,0.04)" }} />

      <div className="relative border border-neon-green/15 overflow-hidden"
        style={{ background: "linear-gradient(160deg,#040c05 0%,#050a06 100%)" }}>

        {/* HUD corners */}
        {["top-0 left-0 border-l-2 border-t-2", "top-0 right-0 border-r-2 border-t-2",
          "bottom-0 left-0 border-l-2 border-b-2", "bottom-0 right-0 border-r-2 border-b-2"
        ].map((cls, i) => (
          <div key={i} className={`absolute w-4 h-4 ${cls} border-neon-green/40 z-10`} />
        ))}

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-neon-green/8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(13,242,88,0.65)", letterSpacing: "0.2em" }}>
              BTC/USDT · PERP
            </span>
          </div>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.2)", letterSpacing: "0.2em" }}>
            DMC VP SYSTEM
          </span>
        </div>

        {/* Price row */}
        <div className="flex items-center gap-3 px-4 pt-2 pb-1">
          <span className="font-headline font-black text-2xl text-white">
            ${last.close.toLocaleString("en", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
          </span>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: isUp ? "#0DF258" : "#f87171" }}>
            {isUp ? "▲" : "▼"}{Math.abs(((last.close - last.open) / last.open) * 100).toFixed(2)}%
          </span>
          {newBar && (
            <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(13,242,88,0.5)", letterSpacing: "0.2em" }}>
              NEW BAR
            </span>
          )}
        </div>

        {/* SVG chart */}
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block", opacity: newBar ? 0.75 : 1, transition: "opacity 0.25s" }}>

          {/* Grid */}
          {[0.25, 0.5, 0.75].map(r => (
            <line key={r}
              x1={0} y1={padT + r * chartH} x2={W - padR} y2={padT + r * chartH}
              stroke="rgba(13,242,88,0.055)" strokeWidth={1} strokeDasharray="4 5" />
          ))}

          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map(r => (
            <text key={r}
              x={W - padR + 4} y={padT + r * chartH + 4}
              fill="rgba(255,255,255,0.2)" fontSize={8}
              fontFamily="monospace">
              {(maxP - r * pRange).toFixed(0)}
            </text>
          ))}

          {/* MA5 line */}
          <polyline
            fill="none" stroke="rgba(200,224,82,0.45)" strokeWidth={1}
            points={ma5.map((v, i) =>
              v ? `${i * slotW + slotW / 2},${py(v)}` : ""
            ).filter(Boolean).join(" ")}
          />

          {/* Candles */}
          {candles.map((c, i) => {
            const cx = i * slotW + slotW / 2;
            const up = c.close >= c.open;
            const col = up ? "rgba(13,242,88,0.85)" : "rgba(248,113,113,0.85)";
            const fillCol = up ? "rgba(13,242,88,0.70)" : "rgba(248,113,113,0.60)";
            const bTop = py(Math.max(c.open, c.close));
            const bBot = py(Math.min(c.open, c.close));
            const bH = Math.max(1, bBot - bTop);
            const isLast = i === n - 1;
            return (
              <g key={i} style={isLast ? { filter: `drop-shadow(0 0 5px ${col})` } : {}}>
                <line x1={cx} y1={py(c.high)} x2={cx} y2={py(c.low)} stroke={col} strokeWidth={1} />
                <rect x={cx - cw / 2} y={bTop} width={cw} height={bH}
                  fill={fillCol} stroke={isLast ? col : "none"} strokeWidth={0.5} />
              </g>
            );
          })}

          {/* Current price dashed line */}
          <line x1={0} y1={lastY} x2={W - padR} y2={lastY}
            stroke="rgba(13,242,88,0.30)" strokeWidth={1} strokeDasharray="3 4" />

          {/* Price tag */}
          <rect x={W - padR + 1} y={lastY - 8} width={44} height={16}
            fill="rgba(13,242,88,0.88)" rx={1} />
          <text x={W - padR + 23} y={lastY + 4.5}
            textAnchor="middle" fill="#000" fontSize={8} fontWeight="bold" fontFamily="monospace">
            {last.close.toFixed(0)}
          </text>

          {/* Volume separator */}
          <line x1={0} y1={H - volH - 8} x2={W - padR} y2={H - volH - 8}
            stroke="rgba(255,255,255,0.04)" strokeWidth={1} />

          {/* Volume bars */}
          {candles.map((c, i) => {
            const cx = i * slotW + slotW / 2;
            const up = c.close >= c.open;
            const bH = c.vol * volH;
            return (
              <rect key={i}
                x={cx - cw / 2} y={H - bH} width={cw} height={bH}
                fill={up ? "rgba(13,242,88,0.22)" : "rgba(248,113,113,0.18)"} />
            );
          })}

          {/* VOL label */}
          <text x={3} y={H - 3} fill="rgba(255,255,255,0.12)" fontSize={8} fontFamily="monospace">VOL</text>
        </svg>

        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.025) 50%)",
          backgroundSize: "100% 3px",
        }} />
      </div>

      {/* Floating badge */}
      <div className="absolute -top-3 left-4 border border-neon-green/20 bg-[#050508] px-3 py-1 flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-neon-green animate-pulse" />
        <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(13,242,88,0.55)", letterSpacing: "0.25em" }}>
          LIVE · VP EDGE SIGNAL
        </span>
      </div>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────
export function Hero() {
  const { t } = useLanguage();

  const STATS = [
    { num: "2,000+", label: "社群成員" },
    { num: "72%",    label: "平均勝率", accent: true },
    { num: "FREE",   label: "完全免費" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "70px" }}
    >
      {/* Background Video */}
      <video autoPlay muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110 blur-[2px]">
        <source
          src="https://res.cloudinary.com/dfu6gb3nu/video/upload/v1776920594/DMC_TRADING_GROUP_202604231252_p9hpgp.webm"
          type="video/webm"
        />
      </video>

      {/* Dark overlay — slightly darker for better focus */}
      <div className="absolute inset-0 bg-black/82 z-10" />
      <div className="absolute inset-0 scanline-bg pointer-events-none z-[11] opacity-10" />

      {/* Price Ticker */}
      <PriceTicker />

      {/* Main content — pushed down by ticker (~32px) */}
      <div
        className="w-full relative z-20 px-6 md:px-12 lg:px-[8%] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        style={{ paddingTop: "52px", paddingBottom: "48px" }}
      >
        {/* ── Left: Text ── */}
        <div className="flex flex-col gap-5 lg:gap-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 w-fit"
            style={{
              border: "1px solid rgba(13,242,88,0.22)",
              padding: "5px 14px",
              background: "rgba(13,242,88,0.04)",
            }}>
            <span className="w-1.5 h-1.5 bg-neon-green animate-pulse" />
            <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(13,242,88,0.65)", letterSpacing: "0.25em" }}>
              INSTITUTIONAL VOLUME TRADING SYSTEM
            </span>
          </div>

          {/* Headline — massive focal point */}
          <h1
            className="font-headline font-black text-white leading-none"
            style={{ fontSize: "clamp(54px, 8.5vw, 108px)" }}
          >
            {t.hero.headline}
          </h1>

          {/* Subheadline */}
          <p
            className="font-headline leading-snug whitespace-pre-line"
            style={{
              fontSize: "clamp(16px, 1.8vw, 22px)",
              color: "rgba(13,242,88,0.88)",
              borderLeft: "3px solid #0DF258",
              paddingLeft: "16px",
            }}
          >
            {t.hero.subheadline}
          </p>

          {/* Body — de-emphasised */}
          <p className="text-white/28 text-xs font-code leading-relaxed tracking-wide whitespace-pre-line">
            {t.hero.body}
          </p>

          {/* CTA */}
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-headline font-black text-black transition-all duration-300 hover:scale-[1.03] w-fit"
            style={{
              padding: "14px 32px",
              background: "linear-gradient(135deg,#b8e000,#0DF258)",
              boxShadow: "0 0 36px rgba(13,242,88,0.42)",
              fontSize: "clamp(13px, 1.2vw, 16px)",
            }}
          >
            {t.hero.ctaRegister}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>

          {/* Stats strip */}
          <div className="flex items-stretch gap-0 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="flex flex-col pr-6 pt-4">
                  <span
                    className="font-headline font-black leading-none"
                    style={{ fontSize: "clamp(20px, 2.2vw, 26px)", color: s.accent ? "#0DF258" : "#ffffff" }}
                  >
                    {s.num}
                  </span>
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.2em", marginTop: 3 }}>
                    {s.label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div style={{ width: 1, height: 32, background: "rgba(13,242,88,0.15)", marginRight: 24 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: DMC × BITUNIX ── */}
        <div className="hidden lg:flex items-center justify-center">
          <PartnershipVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "0.35em" }}>
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(to bottom, rgba(13,242,88,0.55), transparent)",
            animation: "scrollPulse 1.6s ease-in-out infinite",
          }}
        />
        <style>{`
          @keyframes scrollPulse {
            0%,100% { opacity:0.3; transform:scaleY(0.9) translateY(0); }
            50%      { opacity:0.9; transform:scaleY(1.1) translateY(3px); }
          }
        `}</style>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-20" />
    </section>
  );
}
