"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_CARDS = [
  {
    href: "/what-is-dmc",
    icon: "⚡",
    tag: "01 · 系統介紹",
    title: "甚麼是 DMC？",
    titleEn: "What is DMC?",
    desc: "了解 DMC 主力思維交易系統的三大核心支柱：主力思維、成交量分布分析、裸K精準判讀。",
    cta: "了解 DMC 系統 →",
    accent: "#0DF258",
  },
  {
    href: "/david",
    icon: "👤",
    tag: "02 · 創辦人",
    title: "認識大衛",
    titleEn: "Meet David",
    desc: "從普通上班族到研發出 DMC 系統的歷程，走過 3 年彎路後整合出這套專屬交易策略。",
    cta: "認識大衛的故事 →",
    accent: "#9ED600",
  },
  {
    href: "/community",
    icon: "🤝",
    tag: "03 · 社群",
    title: "加入社群",
    titleEn: "Join Community",
    desc: "2,000+ 名活躍交易者，每日免費盤面分析、200+ 教學影片、DMC 獨家指標禮包。",
    cta: "立即加入社群 →",
    accent: "#0DF258",
  },
];

function AboutHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            關於 DMC · About
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            關於 DMC
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            選擇你想了解的主題
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

export default function AboutPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><AboutHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
