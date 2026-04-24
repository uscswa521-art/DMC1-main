"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Activity, Gift, Maximize, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const FEATURE_ICONS = [ShieldCheck, Activity, Gift, Maximize];

// Image paths matching each feature card (order: 滑點 / 監管 / 送U / 多視窗)
const FEATURE_IMAGES = [
  "/bitunix-slippage.png",
  "/bitunix-license.png",
  "/bitunix-rewards.png",
  "/bitunix-multiwindow.png",
];

const STATS = [
  { label: "滑點控制", value: 95 },
  { label: "執行速度", value: 98 },
  { label: "獎勵豐富", value: 85 },
  { label: "安全合規", value: 90 },
  { label: "平台穩定", value: 99 },
  { label: "多視窗", value: 88 },
];

const NUM_AXES = 6;
const CX = 200;
const CY = 200;
const MAX_R = 148;
const LEVELS = 5;

function toRad(deg: number) { return (deg * Math.PI) / 180; }

function getPoint(idx: number, ratio: number) {
  const angle = toRad(-90 + idx * 60);
  const r = ratio * MAX_R;
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
}

function gridPolygon(level: number) {
  return Array.from({ length: NUM_AXES }, (_, i) => {
    const p = getPoint(i, level / LEVELS);
    return `${p.x},${p.y}`;
  }).join(" ");
}

/* ── Lightbox (full-screen image viewer) ── */
function Lightbox({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative mx-4"
        style={{
          maxWidth: "min(900px, 94vw)",
          width: "100%",
          background: "rgba(4,14,6,0.92)",
          border: "1px solid rgba(13,242,88,0.3)",
          borderRadius: 16,
          boxShadow: "0 0 60px rgba(13,242,88,0.2), 0 40px 80px rgba(0,0,0,0.8)",
          overflow: "hidden",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* HUD top bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 16px",
          borderBottom: "1px solid rgba(13,242,88,0.12)",
          background: "rgba(13,242,88,0.05)",
        }}>
          <span style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(13,242,88,0.7)", letterSpacing: "0.2em" }}>
            ◈ DMC × BITUNIX — {title.toUpperCase()}
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "1px solid rgba(13,242,88,0.3)",
              borderRadius: 4, padding: "2px 10px",
              color: "rgba(13,242,88,0.7)", fontFamily: "monospace",
              fontSize: 11, cursor: "pointer", letterSpacing: "0.1em",
            }}
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Full image */}
        <div style={{ position: "relative" }}>
          <Image
            src={src}
            alt={title}
            width={900}
            height={640}
            className="w-full h-auto block"
            style={{ filter: "brightness(0.95) saturate(0.85) contrast(1.05)" }}
          />
          {/* Scanline */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.02) 50%)",
            backgroundSize: "100% 3px",
          }} />
          {/* Corner HUD brackets */}
          {["top-2 left-2 border-l-2 border-t-2","top-2 right-2 border-r-2 border-t-2",
            "bottom-2 left-2 border-l-2 border-b-2","bottom-2 right-2 border-r-2 border-b-2",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 ${cls}`}
              style={{ borderColor: "rgba(13,242,88,0.45)" }} />
          ))}
        </div>

        {/* Bottom info bar */}
        <div style={{ padding: "8px 16px", borderTop: "1px solid rgba(13,242,88,0.08)" }}>
          <span style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", letterSpacing: "0.15em" }}>
            CLICK OUTSIDE OR PRESS ESC TO CLOSE
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Glassmorphism hover card ── */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  imageSrc: string;
  idx: number;
}

function FeatureCard({ icon, title, desc, imageSrc, idx }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({});
  const cardRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function scheduleHide() {
    hideTimer.current = setTimeout(() => setHovered(false), 180);
  }
  function cancelHide() {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  }

  function handleMouseEnter() {
    if (!cardRef.current) { setHovered(true); return; }
    const rect = cardRef.current.getBoundingClientRect();
    const PW = Math.min(420, window.innerWidth * 0.88); // popup width
    const GAP = 10;

    // ── Vertical: always below the card ──
    const topVal = rect.bottom + GAP;
    const botVal = undefined;

    // ── Horizontal: anchor left or right based on card centre ──
    const cardCentreX = rect.left + rect.width / 2;
    let leftVal: number;
    if (cardCentreX < window.innerWidth / 2) {
      // Card in left half → start popup at card's left edge
      leftVal = rect.left;
    } else {
      // Card in right half → end popup at card's right edge
      leftVal = rect.right - PW;
    }
    // Clamp within viewport with 8px margin
    leftVal = Math.max(8, Math.min(leftVal, window.innerWidth - PW - 8));

    setPopupStyle({
      position: "fixed",
      width: PW,
      top:  topVal,
      left: leftVal,
      zIndex: 9999,
    });
    setHovered(true);
  }

  return (
    <div
      ref={cardRef}
      className="relative space-y-4 cursor-pointer group"
      onMouseEnter={() => { cancelHide(); handleMouseEnter(); }}
      onMouseLeave={scheduleHide}
    >
      {/* Card body */}
      <div
        className="p-4 rounded-lg border transition-all duration-300"
        style={{
          background: hovered
            ? "rgba(13,242,88,0.06)"
            : "rgba(255,255,255,0.02)",
          borderColor: hovered
            ? "rgba(13,242,88,0.35)"
            : "rgba(13,242,88,0.1)",
          boxShadow: hovered
            ? "0 0 20px rgba(13,242,88,0.12), inset 0 0 12px rgba(13,242,88,0.04)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-neon-green/10 border border-neon-green/15 rounded">
            {icon}
          </div>
        </div>
        <h4 className="text-white font-headline font-bold text-xl leading-snug mb-2">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>

        {/* Hint indicator */}
        <div
          className="mt-3 flex items-center gap-1 transition-opacity duration-200"
          style={{ opacity: hovered ? 0 : 0.45 }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 9,
              color: "rgba(13,242,88,0.6)",
              letterSpacing: "0.15em",
            }}
          >
            HOVER TO PREVIEW
          </span>
          <span style={{ color: "rgba(13,242,88,0.6)", fontSize: 10 }}>▲</span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          src={imageSrc}
          title={title}
          onClose={() => { setLightboxOpen(false); setHovered(false); }}
        />
      )}

      {/* Glassmorphism popup — fixed to viewport, never clips */}
      <div
        onMouseEnter={cancelHide}
        onMouseLeave={scheduleHide}
        style={{
          ...popupStyle,
          opacity: hovered ? 1 : 0,
          transform: `translateY(${hovered ? "0px" : "-8px"})`,
          transition: "opacity 0.22s ease, transform 0.22s ease",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        {/* Glass container */}
        <div
          style={{
            background: "rgba(4, 14, 6, 0.82)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(13,242,88,0.25)",
            borderRadius: 12,
            boxShadow:
              "0 0 40px rgba(13,242,88,0.15), 0 20px 60px rgba(0,0,0,0.7), inset 0 0 20px rgba(13,242,88,0.04)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Top HUD bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderBottom: "1px solid rgba(13,242,88,0.12)",
              background: "rgba(13,242,88,0.05)",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                color: "rgba(13,242,88,0.7)",
                letterSpacing: "0.2em",
              }}
            >
              ◈ DMC × BITUNIX
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 8,
                  color: "rgba(13,242,88,0.5)",
                  letterSpacing: "0.15em",
                }}
              >
                LIVE
              </span>
            </div>
          </div>

          {/* Image with green tint overlay — click to enlarge */}
          <div
            className="relative cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
            title="點擊放大"
          >
            <Image
              src={imageSrc}
              alt={title}
              width={680}
              height={480}
              className="w-full h-auto block"
              style={{
                filter: "brightness(0.88) saturate(0.78) contrast(1.05)",
              }}
            />
            {/* Green tint overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(13,242,88,0.07) 0%, transparent 60%, rgba(0,0,0,0.25) 100%)",
              }}
            />
            {/* Zoom hint — bottom right */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 rounded"
              style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(13,242,88,0.3)" }}>
              <span style={{ fontSize: 12, color: "rgba(13,242,88,0.9)" }}>⊕</span>
              <span style={{ fontFamily: "monospace", fontSize: 8, color: "rgba(13,242,88,0.7)", letterSpacing: "0.1em" }}>
                CLICK TO EXPAND
              </span>
            </div>
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.025) 50%)",
                backgroundSize: "100% 3px",
                opacity: 0.5,
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-8"
              style={{
                background:
                  "linear-gradient(to top, rgba(4,14,6,0.9) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Bottom label */}
          <div
            style={{
              padding: "8px 12px",
              borderTop: "1px solid rgba(13,242,88,0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 9,
                color: "rgba(13,242,88,0.5)",
                letterSpacing: "0.12em",
              }}
            >
              {title.toUpperCase()}
            </span>
          </div>

          {/* Corner brackets */}
          {["top-1.5 left-1.5 border-l border-t", "top-1.5 right-1.5 border-r border-t",
            "bottom-1.5 left-1.5 border-l border-b", "bottom-1.5 right-1.5 border-r border-b",
          ].map((cls, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 ${cls}`}
              style={{ borderColor: "rgba(13,242,88,0.4)" }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

const EXPAND_MS   = 1000;
const HOLD_MS     = 3000;
const COLLAPSE_MS = 1000;
const CYCLE_MS    = EXPAND_MS + HOLD_MS + COLLAPSE_MS;

function RadarChart() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const phase = (ts - startTimeRef.current) % CYCLE_MS;

      let p: number;
      if (phase < EXPAND_MS) {
        const t = phase / EXPAND_MS;
        p = 1 - Math.pow(1 - t, 3);
      } else if (phase < EXPAND_MS + HOLD_MS) {
        p = 1;
      } else {
        const t = (phase - EXPAND_MS - HOLD_MS) / COLLAPSE_MS;
        p = 1 - Math.pow(t, 3);
      }

      setProgress(p);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const dataPolygon = STATS.map((s, i) => {
    const p = getPoint(i, (s.value / 100) * progress);
    return `${p.x},${p.y}`;
  }).join(" ");

  const labelR = MAX_R + 28;
  const labels = STATS.map((s, i) => {
    const angle = toRad(-90 + i * 60);
    return {
      label: s.label,
      value: s.value,
      x: CX + labelR * Math.cos(angle),
      y: CY + labelR * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="20 10 360 380" className="w-full mx-auto">
      {/* Axis lines */}
      {Array.from({ length: NUM_AXES }, (_, i) => {
        const end = getPoint(i, 1);
        return (
          <line key={i} x1={CX} y1={CY} x2={end.x} y2={end.y}
            stroke="rgba(13,242,88,0.25)" strokeWidth="1" />
        );
      })}

      {/* Grid hexagons */}
      {Array.from({ length: LEVELS }, (_, i) => (
        <polygon key={i} points={gridPolygon(i + 1)} fill="none"
          stroke={i === LEVELS - 1 ? "rgba(13,242,88,0.55)" : "rgba(13,242,88,0.15)"}
          strokeWidth={i === LEVELS - 1 ? "1.5" : "1"}
          strokeDasharray={i < LEVELS - 1 ? "4 3" : undefined} />
      ))}

      {/* Outer hex glow ring */}
      <polygon points={gridPolygon(LEVELS)} fill="none"
        stroke="rgba(13,242,88,0.2)" strokeWidth="6"
        style={{ filter: "blur(4px)" }} />

      {/* Max value ghost outline */}
      <polygon
        points={STATS.map((s, i) => { const p = getPoint(i, s.value / 100); return `${p.x},${p.y}`; }).join(" ")}
        fill="none" stroke="rgba(13,242,88,0.18)" strokeWidth="1.5" strokeDasharray="5 4" />

      {/* Data fill */}
      <polygon points={dataPolygon} fill="rgba(13,242,88,0.12)" stroke="rgba(13,242,88,1)"
        strokeWidth="2" style={{ filter: "drop-shadow(0 0 12px rgba(13,242,88,0.7))" }} />

      {/* Data dots */}
      {STATS.map((s, i) => {
        const p = getPoint(i, (s.value / 100) * progress);
        return (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill="#0DF258"
            style={{ filter: "drop-shadow(0 0 8px rgba(13,242,88,1))" }} />
        );
      })}

      {/* Center dot */}
      <circle cx={CX} cy={CY} r={4} fill="rgba(13,242,88,0.7)"
        style={{ filter: "drop-shadow(0 0 6px rgba(13,242,88,0.8))" }} />

      {/* Center label */}
      <text x={CX} y={CY - 9} textAnchor="middle" fill="rgba(255,255,255,0.95)"
        fontSize="12" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" letterSpacing="3">
        BITUNIX
      </text>

      {/* Axis labels + animated values */}
      {labels.map((l, i) => (
        <g key={i}>
          <text x={l.x} y={l.y} textAnchor="middle" dominantBaseline="middle"
            fill="rgba(255,255,255,0.85)" fontSize="11" fontFamily="'Space Grotesk', sans-serif" fontWeight="600">
            {l.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function BitunixPartner() {
  const { t } = useLanguage();

  return (
    <section id="bitunix" className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: text content */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-tight">
                {t.bitunix.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {t.bitunix.features.map((f, idx) => {
                const IconComp = FEATURE_ICONS[idx];
                return (
                  <FeatureCard
                    key={idx}
                    idx={idx}
                    icon={<IconComp className="text-neon-green" size={20} />}
                    title={f.title}
                    desc={f.desc}
                    imageSrc={FEATURE_IMAGES[idx]}
                  />
                );
              })}
            </div>

            <button className="flex items-center gap-4 group">
              <span className="text-neon-green font-code text-sm border-b border-neon-green group-hover:px-4 transition-all py-1">
                REGISTER ON BITUNIX NOW
              </span>
              <ArrowUpRight className="text-neon-green group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Right: hexagonal radar chart */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full">
              {/* Background glow */}
              <div className="absolute inset-[20%] rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
              <RadarChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
