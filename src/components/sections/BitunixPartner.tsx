"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Activity, Gift, Maximize, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FEATURE_ICONS = [ShieldCheck, Activity, Gift, Maximize];

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
const MAX_R = 120;
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
    <svg viewBox="0 0 400 400" className="w-full max-w-[440px] mx-auto">
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
      <text x={CX} y={CY - 9} textAnchor="middle" fill="rgba(13,242,88,0.95)"
        fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="800" letterSpacing="3">
        BITUNIX
      </text>
      <text x={CX} y={CY + 9} textAnchor="middle" fill="rgba(255,255,255,0.35)"
        fontSize="7" fontFamily="ui-monospace, monospace" letterSpacing="2">
        PLATFORM
      </text>

      {/* Axis labels + animated values */}
      {labels.map((l, i) => (
        <g key={i}>
          <text x={l.x} y={l.y - 8} textAnchor="middle" dominantBaseline="middle"
            fill="rgba(255,255,255,0.85)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="600">
            {l.label}
          </text>
          <text x={l.x} y={l.y + 9} textAnchor="middle" dominantBaseline="middle"
            fill="rgba(13,242,88,0.9)" fontSize="10" fontFamily="ui-monospace, monospace">
            {l.value}
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

      <div className="container px-6 lg:px-12">
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
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neon-green/10 border border-neon-green/20 rounded">
                        <IconComp className="text-neon-green" size={20} />
                      </div>
                    </div>
                    <h4 className="text-white font-headline font-bold text-lg">{f.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
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
            <div className="relative w-full max-w-[480px]">
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
