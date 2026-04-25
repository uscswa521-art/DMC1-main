"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const CORE_MODULES = [
  {
    icon: "📈",
    title: "極短線高頻交易策略",
    desc: "專為加密貨幣合約日內短線設計，自動識別高頻交易機會，標註最佳入場時間窗口與目標位。",
  },
  {
    icon: "🕐",
    title: "ICT 時間窗口提醒",
    desc: "自動顯示 ICT Kill Zone 與 Silver Bullet 等高流動性時間段，提醒你在最佳時段專注看盤。",
  },
  {
    icon: "🔍",
    title: "FVG 流動性缺口自動標註",
    desc: "即時掃描並標記所有 Fair Value Gap（流動性缺口），協助識別主力回補缺口前的入場機會。",
  },
  {
    icon: "🐋",
    title: "主力吸籌/派發區間追蹤",
    desc: "基於成交量分布（VP）自動識別主力建倉與出貨區間，讓你在主力完成吸籌前完成布局。",
  },
];

function CorePage() {
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
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            01 · 核心模組
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            核心交易指標
          </h1>
          <p className="text-white/40 font-body text-base max-w-2xl leading-relaxed">
            四大核心模組完整覆蓋入場邏輯，從訊號識別到精準執行，一套指標全面掌握。
          </p>
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-16">
          {CORE_MODULES.map((mod, i) => (
            <div
              key={i}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl p-8 hover:border-neon-green/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #0DF25808, transparent 65%)" }}
              />

              <span className="text-4xl mb-5 block">{mod.icon}</span>
              <h2 className="font-headline font-bold text-xl text-white/90 mb-3">{mod.title}</h2>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{mod.desc}</p>

              {/* TradingView badge */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green inline-block" />
                <span className="font-code text-[10px] tracking-widest text-neon-green/60 uppercase">
                  TradingView 兼容
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Note section ── */}
        <div className="max-w-4xl bg-[#111713]/40 border border-neon-green/10 rounded-2xl px-8 py-6 mb-12">
          <p className="text-white/50 text-sm leading-relaxed font-body">
            <span className="text-neon-green/70 font-code text-xs tracking-widest uppercase mr-3">注意</span>
            所有指標均在 TradingView 平台運行，支援 PC 與手機端，加入社群後由助教協助一鍵安裝。
          </p>
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

export default function IndicatorsCorePageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><CorePage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
