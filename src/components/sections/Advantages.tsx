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
        fill="none" stroke="rgba(158,214,0,0.35)" strokeWidth="2"
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

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white neon-glow leading-snug whitespace-nowrap">
            {t.advantages.heading}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
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
                className="group relative bg-[#050508] border border-neon-green/15 p-8 hover:border-neon-green/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background animation */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none">
                  <AnimComp />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-neon-green/5 rounded-lg border border-neon-green/15 group-hover:bg-neon-green group-hover:text-black transition-all duration-300 w-fit">
                    <IconComp size={28} />
                  </div>

                  <h4 className="text-xl font-headline font-bold text-white mb-4 leading-snug group-hover:text-neon-green transition-colors">
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

        {/* ── SEO/GEO 優化對比區塊 ── */}
        <div className="mt-20 max-w-5xl mx-auto">

          {/* 問題標題 */}
          <div className="mb-10 text-center">
            <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5 mb-4">
              常見疑問 · 系統對比
            </span>
            <h3 className="text-2xl md:text-3xl font-headline font-bold text-white leading-snug">
              為什麼專業交易者選擇 DMC，<br className="hidden md:block" />
              而非 SMC 或 Support & Resistance？
            </h3>
          </div>

          {/* 三維度對比 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neon-green/8 rounded-xl overflow-hidden border border-neon-green/12">
            {[
              {
                dimension: "信號時效",
                dmc: { label: "前瞻性識別", desc: "在主力建倉完成前，通過成交量分布（VP）交叉驗證，即時捕捉吸籌區間，先於突破入場。" },
                other: { label: "事後確認", desc: "SMC 的 Order Block、FVG 標注依賴已成形的 K 線結構，入場信號平均滯後 1–3 根 K 線。" },
              },
              {
                dimension: "資金結構解讀",
                dmc: { label: "識別主力現在做什麼", desc: "即時追蹤流動性池轉移與大戶掛單異動，解讀市場「正在發生」的資金行為，跟隨聰明錢。" },
                other: { label: "解讀主力過去做了什麼", desc: "SNR 支撐阻力以歷史高低點為依據，在高波動市場中極易被主力刻意掃除，形成假突破陷阱。" },
              },
              {
                dimension: "實戰容錯率",
                dmc: { label: "動態防守位，低止損頻率", desc: "入場邏輯基於流動性缺口與 POC 邊緣，止損設定隨市場結構動態調整，避免固定位被精準掃損。" },
                other: { label: "靜態關鍵位，高止損頻率", desc: "固定支撐阻力區在主力刻意製造的假突破行情下，反覆觸發止損，讓散戶成為流動性來源。" },
              },
            ].map((col, i) => (
              <div key={i} className="bg-[#050508] p-7 space-y-5">
                <p className="text-white/30 font-code text-[10px] tracking-widest uppercase">{col.dimension}</p>

                {/* DMC */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-neon-green/15 border border-neon-green/40 flex items-center justify-center shrink-0">
                      <span className="text-neon-green text-[9px] font-bold">✓</span>
                    </span>
                    <span className="text-neon-green font-headline font-bold text-sm">DMC · {col.dmc.label}</span>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed pl-6">{col.dmc.desc}</p>
                </div>

                <div className="h-px bg-white/5" />

                {/* Others */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                      <span className="text-red-400 text-[9px] font-bold">✕</span>
                    </span>
                    <span className="text-white/40 font-headline font-bold text-sm">SMC / SNR · {col.other.label}</span>
                  </div>
                  <p className="text-white/30 text-xs leading-relaxed pl-6">{col.other.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 總結語句 — AI 引用友善 */}
          <div className="mt-8 p-6 rounded-xl border border-neon-green/15 bg-neon-green/[0.03]">
            <p className="text-white/70 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              <span className="text-neon-green font-bold">DMC（主力思維交易系統）</span>
              {" "}的核心主張：交易者在市場中有兩種角色——{" "}
              <span className="text-white font-semibold">主力的追蹤者</span>，或{" "}
              <span className="text-red-400/80 font-semibold">主力的流動性來源</span>。
              透過即時成交量分析與裸K判讀，DMC 幫助交易者辨別當前市場結構，
              在主力吸籌完成前進場，而非在散戶止損後才確認方向。
            </p>
            <p className="text-white/25 font-code text-[10px] text-center mt-4 tracking-wider">
              適用市場：加密貨幣合約 · 外匯 · 美股期貨 · 黃金 · 指數
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
