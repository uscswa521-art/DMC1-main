"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const RISK_MODULES = [
  {
    icon: "📉",
    label: "DYNAMIC STOP LOSS",
    title: "ATR 動態止損建議",
    desc: "基於市場真實波動率（ATR）動態計算最優止損距離，避免固定點數止損被主力精準掃損。",
    tag: "ATR BASED",
  },
  {
    icon: "⚖️",
    label: "RISK / REWARD",
    title: "風險收益比 (RR) 自動計算",
    desc: "入場後自動計算並顯示當前 RR 比例，幫助交易者在入場前評估交易品質，只做高 RR 機會。",
    tag: "QUALITY FILTER",
  },
  {
    icon: "🔄",
    label: "MULTI-TIMEFRAME",
    title: "多週期趨勢共振過濾",
    desc: "同時監控 H4、H1、M15 三個時間框架，只在方向完全一致時給出提示，過濾低質量訊號。",
    tag: "H4 · H1 · M15",
  },
  {
    icon: "🚨",
    label: "STRUCTURE ALERT",
    title: "市場結構轉變 (MSB) 警報",
    desc: "即時偵測市場結構轉變（Market Structure Break），在趨勢反轉的早期階段提示你調整倉位方向。",
    tag: "EARLY WARNING",
  },
];

function DiagonalCreditList({
  items,
  accentRgb,
}: {
  items: { label: string; title: string; tag: string }[];
  accentRgb: string;
}) {
  const a = (op: number) => `rgba(${accentRgb},${op})`;

  return (
    <div className="relative overflow-hidden">

      {/* HUD grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: `linear-gradient(${a(1)} 1px, transparent 1px), linear-gradient(90deg, ${a(1)} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Diagonal structural line (↗) + low-poly triangles + coordinate dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="100" x2="100" y2="0" stroke={a(0.14)} strokeWidth="0.5" />
        <circle cx="18" cy="82" r="1.1" fill={a(0.30)} />
        <circle cx="50" cy="50" r="1.8" fill={a(0.55)} />
        <circle cx="82" cy="18" r="1.1" fill={a(0.30)} />
        <polygon points="0,0 24,0 0,30"    fill={a(0.04)} />
        <polygon points="100,70 100,100 76,100" fill={a(0.03)} />
        <g stroke={a(0.35)} strokeWidth="0.5">
          <line x1="-2" y1="100" x2="5"   y2="100" />
          <line x1="0"  y1="97"  x2="0"   y2="103" />
          <line x1="95" y1="0"   x2="105" y2="0" />
          <line x1="100" y1="-3"  x2="100" y2="4" />
        </g>
      </svg>

      {/* Staggered entries (↘ visual direction — opposite of ↗ line) */}
      <div className="relative z-10 pt-8 pb-6 pr-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group mb-9 last:mb-0"
            style={{ paddingLeft: `${10 + i * 24}px` }}
          >
            <div className="flex items-start gap-2.5">
              <span
                className="shrink-0 font-code leading-none mt-0.5 transition-colors duration-300"
                style={{ fontSize: 20, color: a(0.25) }}
              >
                [
              </span>
              <div className="min-w-0">
                <p
                  className="font-code text-[8px] tracking-[0.25em] uppercase mb-1.5 transition-colors duration-300"
                  style={{ color: a(0.35) }}
                >
                  {item.label}
                </p>
                <h3 className="font-headline font-bold text-white/85 text-sm lg:text-[15px] leading-snug group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <span
                  className="mt-2 inline-block font-code text-[7px] tracking-widest px-1.5 py-0.5 uppercase transition-colors duration-300"
                  style={{ color: a(0.20), border: `1px solid ${a(0.12)}` }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function RiskContent() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* ══ HEADER ══ */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-12">
        <div className="mb-12">
          <a
            href="/indicators"
            className="flex items-center gap-2 font-code text-[10px] tracking-widest text-white/25 hover:text-neon-chartreuse transition-colors uppercase"
          >
            <span>←</span>
            <span>[ 獨家指標 ]</span>
          </a>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-neon-chartreuse/50 font-code text-[11px]">[</span>
          <span className="text-neon-chartreuse/70 font-code text-[11px] tracking-widest uppercase">02 · 風控套件 · RISK MANAGEMENT</span>
          <span className="text-neon-chartreuse/50 font-code text-[11px]">]</span>
        </div>
        <h1
          className="font-headline font-black text-white leading-none mb-4"
          style={{ fontSize: "clamp(40px, 7vw, 72px)", textShadow: "0 0 40px rgba(200,224,82,0.25)" }}
        >
          風控工具套件
        </h1>
        <p className="text-white/35 font-body text-base max-w-lg leading-relaxed">
          交易的勝負不只在入場，更在於每一筆交易背後的風險管理紀律。
        </p>
      </div>

      {/* ══ SPLIT ══ */}
      <div className="container mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-px bg-neon-chartreuse/5">

          {/* LEFT */}
          <div className="bg-[#050508]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neon-chartreuse/5">
              {RISK_MODULES.map((mod, i) => (
                <div
                  key={i}
                  className="group relative bg-[#080d09] p-8 hover:bg-[#0d1109] transition-colors duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-chartreuse/15 group-hover:border-neon-chartreuse/50 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-chartreuse/15 group-hover:border-neon-chartreuse/50 transition-colors duration-300" />
                  <span className="absolute bottom-2 right-4 font-headline font-black text-neon-chartreuse/[0.04] leading-none select-none" style={{ fontSize: 64 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10">
                    <span className="text-3xl block mb-5">{mod.icon}</span>
                    <p className="text-neon-chartreuse/40 font-code text-[9px] tracking-widest uppercase mb-2">[ {mod.label} ]</p>
                    <h2 className="font-headline font-bold text-white text-lg mb-3 group-hover:text-neon-chartreuse transition-colors duration-300 leading-snug">
                      {mod.title}
                    </h2>
                    <p className="text-white/40 text-xs leading-relaxed mb-5">{mod.desc}</p>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-chartreuse shrink-0" />
                      <span className="font-code text-[9px] tracking-widest text-neon-chartreuse/60 uppercase">TradingView 兼容</span>
                    </div>
                    <div className="mt-4 h-px w-0 bg-neon-chartreuse/30 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Diagonal credit list */}
          <div className="bg-[#080d09] lg:border-l border-neon-chartreuse/5">
            <div className="px-6 pt-6 pb-2">
              <p className="text-neon-chartreuse/25 font-code text-[8px] tracking-[0.3em] uppercase">[ MODULE INDEX ]</p>
            </div>
            <DiagonalCreditList items={RISK_MODULES} accentRgb="200,224,82" />
          </div>

        </div>
      </div>

      {/* ══ QUOTE + CTA ══ */}
      <div className="container mx-auto px-6 lg:px-12 pb-20 space-y-8">
        <div className="relative border-l-2 border-neon-chartreuse/30 pl-6 py-2 max-w-2xl">
          <p className="text-white/55 text-base font-body italic leading-relaxed mb-3">
            「風控不是讓你不虧損，而是讓你在虧損時依然能活下去，等待下一次機會。」
          </p>
          <cite className="font-code text-[9px] tracking-widest text-neon-chartreuse/50 uppercase not-italic">
            — David · DMC 創辦人
          </cite>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="/indicators/unlock"
            className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 32px rgba(13,242,88,0.3)" }}
          >
            立即解鎖指標禮包 →
          </a>
          <a
            href="/indicators/unlock"
            className="inline-flex items-center gap-2 px-6 py-4 font-headline font-black text-sm text-white border border-neon-chartreuse/25 bg-transparent hover:bg-neon-chartreuse/5 hover:border-neon-chartreuse/50 transition-all duration-200"
          >
            查看解鎖步驟 →
          </a>
        </div>
      </div>

    </div>
  );
}

export default function IndicatorsRiskPageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><RiskContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
