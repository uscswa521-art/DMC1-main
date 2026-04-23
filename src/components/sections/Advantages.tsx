"use client";

import { Zap, Eye, BarChart3, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ICONS = [Zap, Eye, BarChart3, Globe];

/* ── Animation 1: Candlestick chart ── */
function CandlestickAnim() {
  const candles = [
    { x: 8,   bodyY: 55, bodyH: 28, top: 42, bot: 95,  bull: false },
    { x: 32,  bodyY: 40, bodyH: 22, top: 28, bot: 72,  bull: true  },
    { x: 56,  bodyY: 52, bodyH: 18, top: 40, bot: 80,  bull: false },
    { x: 80,  bodyY: 32, bodyH: 30, top: 18, bot: 75,  bull: true  },
    { x: 104, bodyY: 45, bodyH: 20, top: 33, bot: 78,  bull: true  },
    { x: 128, bodyY: 28, bodyH: 26, top: 15, bot: 68,  bull: true  },
    { x: 152, bodyY: 38, bodyH: 22, top: 25, bot: 72,  bull: false },
  ];
  return (
    <svg viewBox="0 0 180 120" className="w-full h-full">
      {candles.map((c, i) => (
        <g key={i} style={{ animation: `cFlicker 1.8s ${i * 0.25}s ease-in-out infinite alternate` }}>
          <line x1={c.x + 8} y1={c.top} x2={c.x + 8} y2={c.bodyY}
            stroke={c.bull ? "#0DF258" : "#ff5555"} strokeWidth="1.5" />
          <line x1={c.x + 8} y1={c.bodyY + c.bodyH} x2={c.x + 8} y2={c.bot}
            stroke={c.bull ? "#0DF258" : "#ff5555"} strokeWidth="1.5" />
          <rect x={c.x} y={c.bodyY} width={16} height={c.bodyH}
            fill={c.bull ? "#0DF258" : "#ff5555"} opacity="0.55" rx="1" />
        </g>
      ))}
    </svg>
  );
}

/* ── Animation 2: Price wave curve ── */
function PriceWaveAnim() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polyline
        points="0,95 25,75 45,85 65,55 85,65 105,38 125,50 148,28 170,42 200,18"
        fill="none" stroke="#0DF258" strokeWidth="2.5"
        strokeDasharray="320" opacity="0.7"
        style={{ animation: "drawPath 3s ease-in-out infinite" }}
      />
      <polyline
        points="0,95 25,75 45,85 65,55 85,65 105,38 125,50 148,28 170,42 200,18"
        fill="none" stroke="#0DF258" strokeWidth="8"
        strokeDasharray="320" opacity="0.06"
        style={{ animation: "drawPath 3s ease-in-out infinite" }}
      />
    </svg>
  );
}

/* ── Animation 3: Volume bar chart ── */
function VolumeAnim() {
  const heights = [18, 35, 22, 50, 38, 62, 44, 75, 52, 65, 48, 82];
  return (
    <svg viewBox="0 0 185 120" className="w-full h-full">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 15 + 3} y={110 - h} width={11} height={h}
          fill="#0DF258" opacity="0.4" rx="1"
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
            animation: `volPulse 1.6s ${i * 0.12}s ease-in-out infinite alternate`,
          }}
        />
      ))}
      <line x1="0" y1="110" x2="185" y2="110" stroke="#0DF258" strokeWidth="0.8" opacity="0.3" />
    </svg>
  );
}

/* ── Animation 4: Three trend lines ── */
function TrendAnim() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      {/* Uptrend */}
      <polyline
        points="10,105 50,80 90,55 130,32 175,10"
        fill="none" stroke="#0DF258" strokeWidth="2"
        strokeDasharray="220" opacity="0.65"
        style={{ animation: "drawPath 2.8s ease-in-out infinite" }}
      />
      {/* Downtrend */}
      <polyline
        points="10,15 50,38 90,62 130,82 175,105"
        fill="none" stroke="#ff5555" strokeWidth="2"
        strokeDasharray="220" opacity="0.4"
        style={{ animation: "drawPath 2.8s 0.9s ease-in-out infinite" }}
      />
      {/* Sideways */}
      <polyline
        points="10,60 40,53 70,66 100,57 130,64 160,55 190,60"
        fill="none" stroke="#cccc00" strokeWidth="2"
        strokeDasharray="220" opacity="0.35"
        style={{ animation: "drawPath 2.8s 1.8s ease-in-out infinite" }}
      />
    </svg>
  );
}

const ANIMS = [CandlestickAnim, PriceWaveAnim, VolumeAnim, TrendAnim];

export function Advantages() {
  const { t } = useLanguage();

  return (
    <section id="advantages" className="relative py-32 bg-[#1A201C]">
      <style>{`
        @keyframes cFlicker {
          from { opacity: 0.25; transform: scaleY(0.88); }
          to   { opacity: 0.75; transform: scaleY(1);    }
        }
        @keyframes drawPath {
          0%   { stroke-dashoffset: 320; opacity: 0;   }
          20%  { opacity: 0.8; }
          75%  { stroke-dashoffset: 0; opacity: 0.8; }
          90%  { stroke-dashoffset: 0; opacity: 0;   }
          100% { stroke-dashoffset: 320; opacity: 0; }
        }
        @keyframes volPulse {
          from { transform: scaleY(0.55); opacity: 0.25; }
          to   { transform: scaleY(1.08); opacity: 0.6;  }
        }
      `}</style>

      <div className="container px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white neon-glow">
            {t.advantages.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.advantages.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.items.map((adv, idx) => {
            const AnimComp = ANIMS[idx];
            const IconComp = ICONS[idx];
            return (
              <div
                key={idx}
                className="group relative bg-[#050508] border border-neon-green/10 p-8 hover:border-neon-green/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background animation */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                  <AnimComp />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-neon-green/5 rounded-lg border border-neon-green/10 group-hover:bg-neon-green group-hover:text-black transition-all duration-300 w-fit">
                    <IconComp size={28} />
                  </div>

                  <h4 className="text-xl font-headline font-bold text-white mb-4 group-hover:text-neon-green transition-colors">
                    {adv.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {adv.desc}
                  </p>

                  <div className="h-1 w-0 bg-neon-green group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
