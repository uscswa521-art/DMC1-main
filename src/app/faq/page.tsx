"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_CARDS = [
  {
    href: "/faq/getting-started",
    icon: "🚀",
    tag: "01 · 入門必讀",
    title: "加入方式 Q&A",
    titleEn: "Getting Started",
    desc: "免費嗎？如何加入？需要什麼條件？所有入門前你最想知道的問題，這裡都有答案。",
    cta: "查看加入方式 →",
    accent: "#0DF258",
  },
  {
    href: "/faq/learning",
    icon: "📚",
    tag: "02 · 系統學習",
    title: "學習系統 Q&A",
    titleEn: "Learning & System",
    desc: "能學到什麼？適用哪些市場？學習進度如何安排？關於 DMC 系統與學習路徑的完整解答。",
    cta: "了解學習系統 →",
    accent: "#9ED600",
  },
  {
    href: "/faq/community",
    icon: "🤝",
    tag: "03 · 社群互動",
    title: "社群活動 Q&A",
    titleEn: "Community & Events",
    desc: "有問題找誰問？線下聚會怎麼參加？深入了解 DMC 社群的日常運作與活動安排。",
    cta: "了解社群活動 →",
    accent: "#0DF258",
  },
];

function FAQHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            常見問題 · FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            常見問題
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            找到你最想知道的答案，一切從這裡開始
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

export default function FAQPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><FAQHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
