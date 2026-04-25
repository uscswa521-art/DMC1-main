"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_CARDS = [
  {
    href: "/training/core",
    icon: "📚",
    tag: "01 · 基礎必學",
    title: "核心理論課",
    titleEn: "Core Theory",
    desc: "機構主力行為解析、日內交易實戰思維。從零開始建立正確的主力思維框架，不走彎路。",
    videos: ["機構主力行為解析", "日內交易實戰思維"],
    cta: "開始學習核心理論 →",
    accent: "#0DF258",
  },
  {
    href: "/training/skills",
    icon: "⚡",
    tag: "02 · 進階實戰",
    title: "實戰技術課",
    titleEn: "Practical Skills",
    desc: "加密貨幣實戰精華、DMC 實戰必備技巧。將理論轉化為可執行的交易動作，實盤操作。",
    videos: ["加密貨幣實戰精華", "DMC實戰必備技巧"],
    cta: "進入實戰技術課 →",
    accent: "#9ED600",
  },
  {
    href: "/training/live",
    icon: "🔴",
    tag: "03 · 直播回放",
    title: "直播精華",
    titleEn: "Live Highlights",
    desc: "大衛直播實況精華剪輯，即時盤面解析與主力資金追蹤示範，真實市場操作完整記錄。",
    videos: ["實況精華"],
    cta: "觀看直播精華 →",
    accent: "#ff5555",
  },
];

function TrainingHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            實戰教學 · Training
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            免費實戰教學
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            從核心理論到實盤操作，選擇你的學習起點
          </p>
          <p className="text-white/25 font-code text-xs tracking-wider">
            200+ 免費影片 · 大衛親自錄製
          </p>
        </div>

        {/* ── 3 Hub cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
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
              <h2 className="font-headline font-black text-2xl mb-1 text-white/90 transition-colors group-hover:text-white">
                {card.title}
              </h2>
              <p className="font-code text-[10px] tracking-widest mb-4" style={{ color: card.accent + "80" }}>
                {card.titleEn}
              </p>

              {/* Desc */}
              <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">{card.desc}</p>

              {/* Video list */}
              <div className="space-y-1.5 mb-6 pt-4 border-t border-neon-green/8">
                <p className="text-white/20 font-code text-[9px] tracking-widest uppercase mb-2">收錄影片</p>
                {card.videos.map((v, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: card.accent + "80" }} />
                    <span className="text-white/50 text-xs">{v}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2">
                <span className="font-code text-xs tracking-wider transition-colors duration-200" style={{ color: card.accent + "90" }}>
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

        {/* ── Bottom note ── */}
        <div className="text-center">
          <p className="text-white/25 font-code text-xs tracking-wider">
            所有教學影片完全免費 · 加入社群後可獲取完整播放清單
          </p>
        </div>

      </div>
    </section>
  );
}

export default function TrainingPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><TrainingHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
