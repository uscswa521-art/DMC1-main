"use client";

import { useLanguage } from "@/contexts/LanguageContext";

/* ── Network topology ── */
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
    <div className="relative w-full max-w-[520px]" style={{ perspective: "800px" }}>

      {/* ── Orbital ring 1 (green, slow) ── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            width: "115%",
            aspectRatio: "2.4/1",
            border: "1px solid rgba(13,242,88,0.18)",
            borderRadius: "50%",
            animation: "orbitalSpin 14s linear infinite",
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute", top: -4, left: "50%",
            transform: "translateX(-50%)",
            width: 8, height: 8, borderRadius: "50%",
            background: "#0DF258",
            boxShadow: "0 0 14px #0DF258, 0 0 28px rgba(13,242,88,0.6)",
          }} />
        </div>
      </div>

      {/* ── Orbital ring 2 (chartreuse, counter-rotate, fast) ── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            width: "128%",
            aspectRatio: "3/1",
            border: "1px solid rgba(200,224,82,0.12)",
            borderRadius: "50%",
            animation: "orbitalSpin 9s linear infinite reverse",
            position: "relative",
          }}
        >
          <div style={{
            position: "absolute", top: -4, left: "50%",
            transform: "translateX(-50%)",
            width: 7, height: 7, borderRadius: "50%",
            background: "#C8E052",
            boxShadow: "0 0 12px #C8E052, 0 0 24px rgba(200,224,82,0.5)",
          }} />
        </div>
      </div>

      {/* ── Main floating card ── */}
      <div
        className="relative z-10"
        style={{ animation: "heroFloat 7s ease-in-out infinite" }}
      >
        {/* Outer glow halo */}
        <div
          className="absolute -inset-1 rounded-2xl pointer-events-none"
          style={{ animation: "borderScan 4s ease-in-out infinite" }}
        />

        <div
          className="relative rounded-xl border border-neon-green/25 overflow-hidden"
          style={{
            background: "linear-gradient(150deg, #060d07 0%, #0c1a0e 50%, #050a06 100%)",
            boxShadow: "0 0 80px rgba(13,242,88,0.18), 0 0 200px rgba(13,242,88,0.06)",
          }}
        >
          {/* Scanlines overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-25" style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.035) 50%)",
            backgroundSize: "100% 3px",
          }} />

          {/* Green radial atmosphere */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 120%, rgba(13,242,88,0.12) 0%, transparent 65%)",
          }} />

          {/* Sweeping scan line */}
          <div
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              height: 2,
              background: "linear-gradient(to right, transparent 0%, rgba(13,242,88,0.5) 30%, rgba(13,242,88,0.9) 50%, rgba(13,242,88,0.5) 70%, transparent 100%)",
              animation: "scanSweep 4s ease-in-out infinite",
              zIndex: 2,
            }}
          />

          {/* Network SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 500 380"
            preserveAspectRatio="xMidYMid slice"
          >
            {EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={NODES[a][0]} y1={NODES[a][1]}
                x2={NODES[b][0]} y2={NODES[b][1]}
                stroke="rgba(13,242,88,0.18)"
                strokeWidth="0.6"
                strokeDasharray="180"
                style={{
                  animation: `lineFlow 3.5s ease-in-out ${(i * 0.19).toFixed(2)}s infinite`,
                } as React.CSSProperties}
              />
            ))}
            {NODES.map(([cx, cy], i) => (
              <circle
                key={i} cx={cx} cy={cy} r="3"
                fill="rgba(13,242,88,0.55)"
                style={{
                  animation: `nodesPulse 2.8s ease-in-out ${(i * 0.15).toFixed(2)}s infinite`,
                } as React.CSSProperties}
              />
            ))}
          </svg>

          {/* ── Central text block ── */}
          <div className="relative z-10 flex flex-col items-center justify-center px-8 py-10 gap-0">

            {/* Top micro label */}
            <div style={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: 9,
              color: "rgba(13,242,88,0.4)",
              letterSpacing: "0.3em",
              marginBottom: 12,
              textTransform: "uppercase",
            }}>◈ OFFICIAL PARTNER ◈</div>

            {/* DMC — massive, intense glow */}
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(72px, 14vw, 130px)",
              color: "#ffffff",
              letterSpacing: "0.12em",
              lineHeight: 1,
              animation: "dmcGlowPulse 2.8s ease-in-out infinite",
              display: "block",
            }}>DMC</span>

            {/* × — oversized, chartreuse burst */}
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 7vw, 64px)",
              color: "#C8E052",
              lineHeight: 1,
              display: "block",
              margin: "4px 0 2px",
              animation: "xBurst 2s ease-in-out 0.6s infinite",
            }}>×</span>

            {/* BITUNIX */}
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 9.5vw, 96px)",
              color: "#ffffff",
              letterSpacing: "0.08em",
              lineHeight: 1,
              animation: "dmcGlowPulse 2.8s ease-in-out 1.4s infinite",
              display: "block",
            }}>BITUNIX</span>

            {/* Divider + subtitle */}
            <div style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: "1px solid rgba(13,242,88,0.2)",
              width: "100%",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: "clamp(7px, 1.1vw, 10px)",
                color: "rgba(13,242,88,0.45)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>PARTNERSHIP ｜ CRYPTO &amp; BLOCKCHAIN ECOSYSTEM</div>
            </div>
          </div>

          {/* HUD corner brackets — larger */}
          {[
            "top-2 left-2 border-l-2 border-t-2",
            "top-2 right-2 border-r-2 border-t-2",
            "bottom-2 left-2 border-l-2 border-b-2",
            "bottom-2 right-2 border-r-2 border-b-2",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-6 h-6 ${cls} border-neon-green/50`} />
          ))}

          {/* LIVE indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.5)", letterSpacing: "0.2em" }}>LIVE</span>
          </div>
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

        {/* ── Left: Text (no buttons) ── */}
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
        </div>

        {/* ── Right: Animated DMC × BITUNIX ── */}
        <div className="hidden lg:flex items-center justify-center">
          <PartnershipVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-20" />
    </section>
  );
}
