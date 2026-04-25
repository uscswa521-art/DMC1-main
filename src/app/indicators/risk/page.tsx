"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const RISK_MODULES = [
  {
    icon: "📉",
    title: "ATR 動態止損建議",
    desc: "基於市場真實波動率（ATR）動態計算最優止損距離，避免固定點數止損被主力精準掃損。",
  },
  {
    icon: "⚖️",
    title: "風險收益比 (RR) 自動計算",
    desc: "入場後自動計算並顯示當前 RR 比例，幫助交易者在入場前評估交易品質，只做高 RR 機會。",
  },
  {
    icon: "🔄",
    title: "多週期趨勢共振過濾",
    desc: "同時監控 H4、H1、M15 三個時間框架，只在方向完全一致時給出提示，過濾低質量訊號。",
  },
  {
    icon: "🚨",
    title: "市場結構轉變 (MSB) 警報",
    desc: "即時偵測市場結構轉變（Market Structure Break），在趨勢反轉的早期階段提示你調整倉位方向。",
  },
];

function RiskPage() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Back link ── */}
        <div className="mb-12">
          <a
            href="/indicators"
            className="inline-flex items-center gap-2 font-code text-xs tracking-widest text-white/30 hover:text-neon-green/70 transition-colors duration-200 uppercase"
          >
            ← 獨家指標
          </a>
        </div>

        {/* ── Header ── */}
        <div className="mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-[#9ED600]/60 uppercase border border-[#9ED600]/20 rounded-full px-4 py-1.5">
            02 · 風控套件
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            風控工具套件
          </h1>
          <p className="text-white/40 font-body text-base max-w-2xl leading-relaxed">
            交易的勝負不只在入場，更在於每一筆交易背後的風險管理紀律。
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-16">
          {RISK_MODULES.map((mod, i) => (
            <div
              key={i}
              className="group relative bg-[#111713]/60 border border-[#9ED600]/12 rounded-2xl p-8 hover:border-[#9ED600]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #9ED60008, transparent 65%)" }}
              />

              <span className="text-4xl mb-5 block">{mod.icon}</span>
              <h2 className="font-headline font-bold text-xl text-white/90 mb-3">{mod.title}</h2>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{mod.desc}</p>

              {/* TradingView badge */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9ED600] inline-block" />
                <span className="font-code text-[10px] tracking-widest text-[#9ED600]/60 uppercase">
                  TradingView 兼容
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Quote block ── */}
        <div className="max-w-4xl mb-12">
          <blockquote className="border-l-2 border-[#9ED600]/40 pl-6 py-2">
            <p className="text-white/60 text-base font-body italic leading-relaxed mb-3">
              「風控不是讓你不虧損，而是讓你在虧損時依然能活下去，等待下一次機會。」
            </p>
            <cite className="font-code text-[10px] tracking-widest text-[#9ED600]/50 uppercase not-italic">
              — David
            </cite>
          </blockquote>
        </div>

        {/* ── CTA ── */}
        <div>
          <a
            href="/indicators/unlock"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-[#9ED600] text-black font-headline font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            立即解鎖指標禮包 →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function IndicatorsRiskPageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><RiskPage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
