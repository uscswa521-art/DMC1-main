"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_CARDS = [
  {
    href: "/indicators/core",
    icon: "⚡",
    tag: "01 · 核心模組",
    title: "核心交易指標",
    titleEn: "Core Trading Modules",
    desc: "極短線高頻策略、ICT 時間窗口、FVG 流動性缺口、主力吸籌追蹤——四大核心模組，完整覆蓋入場邏輯。",
    cta: "查看核心指標 →",
    accent: "#0DF258",
  },
  {
    href: "/indicators/risk",
    icon: "🛡️",
    tag: "02 · 風控套件",
    title: "風控工具套件",
    titleEn: "Risk Management Tools",
    desc: "ATR 動態止損、RR 自動計算、多週期共振過濾、MSB 市場結構警報——讓每一筆交易都有紀律保護。",
    cta: "了解風控工具 →",
    accent: "#9ED600",
  },
  {
    href: "/indicators/unlock",
    icon: "🔓",
    tag: "03 · 如何獲取",
    title: "解鎖指標禮包",
    titleEn: "How to Unlock",
    desc: "指標禮包完全免費，限 DMC 社群成員專屬。完成 Bitunix 註冊並填寫 UID，即可立即解鎖全套指標。",
    cta: "立即解鎖指標 →",
    accent: "#0DF258",
  },
];

function IndicatorsHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            獨家指標 · Exclusive Indicators
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            獨家指標禮包
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            完全免費 · 限 DMC 社群成員專屬 · TradingView 一鍵安裝
          </p>
        </div>

        {/* ── 3 Hub cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {HUB_CARDS.map((card, i) => (
            <a
              key={i}
              href={card.href}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl p-8 flex flex-col hover:border-neon-green/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top, ${card.accent}08, transparent 65%)` }}
              />

              {/* Tag */}
              <span className="text-white/25 font-code text-[9px] tracking-widest uppercase mb-5 block">{card.tag}</span>

              {/* Icon */}
              <span className="text-5xl mb-5 block transition-transform duration-300 group-hover:scale-110 origin-left">
                {card.icon}
              </span>

              {/* Title */}
              <h2
                className="font-headline font-black text-2xl mb-1 transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {card.title}
              </h2>
              <p className="font-code text-[10px] tracking-widest mb-4" style={{ color: card.accent + "80" }}>
                {card.titleEn}
              </p>

              {/* Desc */}
              <p className="text-white/45 text-sm leading-relaxed flex-1 mb-8">{card.desc}</p>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <span
                  className="font-code text-xs tracking-wider transition-colors duration-200 group-hover:font-bold"
                  style={{ color: card.accent + "90" }}
                >
                  {card.cta}
                </span>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}60, transparent)` }}
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function IndicatorsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><IndicatorsHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
