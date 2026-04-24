"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Network nodes for the partnership visual ── */
const NODES: [number, number][] = [
  [40, 60], [140, 110], [260, 75], [370, 55], [430, 160],
  [460, 280], [370, 330], [240, 345], [100, 310], [30, 220],
  [190, 180], [320, 200], [80, 150], [410, 100], [200, 260],
];

const EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],
  [0,2],[1,10],[2,11],[3,13],[10,11],[10,14],[11,12],[7,14],
];

function PartnershipVisual() {
  return (
    <div
      className="relative w-full max-w-[480px] select-none"
      style={{ animation: "heroFloat 7s ease-in-out infinite" }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute -inset-4 rounded-2xl pointer-events-none"
        style={{ animation: "borderScan 4s ease-in-out infinite" }}
      />

      {/* Main card */}
      <div
        className="relative rounded-xl border border-neon-green/20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #070c08 0%, #0a160b 50%, #050a06 100%)",
          boxShadow: "0 0 60px rgba(13,242,88,0.12)",
          aspectRatio: "4/3",
        }}
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.03) 50%)",
            backgroundSize: "100% 3px",
          }}
        />

        {/* Radial green atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 110%, rgba(13,242,88,0.1) 0%, transparent 65%)",
          }}
        />

        {/* Animated network SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 500 375"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Connection edges */}
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]} y1={NODES[a][1]}
              x2={NODES[b][0]} y2={NODES[b][1]}
              stroke="rgba(13,242,88,0.2)"
              strokeWidth="0.6"
              strokeDasharray="200"
              style={{
                animation: `lineFlow 3s ease-in-out ${(i * 0.22).toFixed(2)}s infinite`,
              } as React.CSSProperties}
            />
          ))}

          {/* Node dots */}
          {NODES.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx} cy={cy} r="2.8"
              fill="rgba(13,242,88,0.5)"
              style={{
                animation: `nodesPulse 2.5s ease-in-out ${(i * 0.18).toFixed(2)}s infinite`,
              } as React.CSSProperties}
            />
          ))}
        </svg>

        {/* ── Central text content ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0">

          {/* DMC */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 9vw, 92px)",
              color: "white",
              letterSpacing: "0.1em",
              lineHeight: 1,
              animation: "textGlowPulse 3s ease-in-out infinite",
            }}
          >DMC</span>

          {/* Divider lines + × */}
          <div className="flex items-center gap-3 my-1">
            <div
              style={{
                height: 1.5,
                width: "clamp(40px, 8vw, 80px)",
                background: "linear-gradient(to right, transparent, rgba(200,224,82,0.6))",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 4vw, 40px)",
                color: "#C8E052",
                lineHeight: 1,
                animation: "xGlow 2s ease-in-out 0.5s infinite",
              }}
            >×</span>
            <div
              style={{
                height: 1.5,
                width: "clamp(40px, 8vw, 80px)",
                background: "linear-gradient(to left, transparent, rgba(200,224,82,0.6))",
              }}
            />
          </div>

          {/* BITUNIX */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6.5vw, 72px)",
              color: "white",
              letterSpacing: "0.08em",
              lineHeight: 1,
              animation: "textGlowPulse 3s ease-in-out 1.5s infinite",
            }}
          >BITUNIX</span>

          {/* Partnership label */}
          <div
            style={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: "clamp(7px, 1vw, 10px)",
              color: "rgba(13,242,88,0.45)",
              letterSpacing: "0.22em",
              marginTop: 14,
              paddingTop: 8,
              borderTop: "1px solid rgba(13,242,88,0.18)",
              textTransform: "uppercase",
            }}
          >PARTNERSHIP ｜ CRYPTO &amp; BLOCKCHAIN ECOSYSTEM</div>
        </div>

        {/* HUD corner brackets */}
        {[
          "top-3 left-3 border-l border-t",
          "top-3 right-3 border-r border-t",
          "bottom-3 left-3 border-l border-b",
          "bottom-3 right-3 border-r border-b",
        ].map((cls, i) => (
          <div
            key={i}
            className={`absolute w-5 h-5 ${cls} border-neon-green/40`}
          />
        ))}

        {/* Bottom live indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
          <span style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 8, color: "rgba(13,242,88,0.4)", letterSpacing: "0.15em" }}>
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Hero Section ── */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110 blur-[2px]"
      >
        <source
          src="https://res.cloudinary.com/dfu6gb3nu/video/upload/v1776920594/DMC_TRADING_GROUP_202604231252_p9hpgp.webm"
          type="video/webm"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/75 z-10" />
      <div className="absolute inset-0 scanline-bg pointer-events-none z-[11] opacity-20" />

      {/* Content */}
      <div className="container relative z-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32">

        {/* ── Left: Text ── */}
        <div className="space-y-8">
          <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white neon-glow">
            {t.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl font-headline text-neon-chartreuse/90 border-l-4 border-neon-green pl-6 py-2 leading-snug">
            {t.hero.subheadline}
          </p>

          <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
            {t.hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button
              size="lg"
              className="bg-neon-green text-black hover:bg-neon-green/90 shadow-[0_0_20px_rgba(13,242,88,0.5)] font-bold text-base px-8 group"
            >
              {t.hero.ctaPrimary}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neon-green/50 text-neon-green bg-black hover:bg-neon-green hover:text-black transition-all font-code text-sm uppercase tracking-tighter"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* ── Right: Animated DMC × BITUNIX visual ── */}
        <div className="hidden lg:flex items-center justify-center">
          <PartnershipVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-20" />
    </section>
  );
}
