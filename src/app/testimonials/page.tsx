"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_CARDS = [
  {
    href: "/testimonials/results",
    icon: "📈",
    tag: "01 · 盈利截圖",
    title: "交易成果見證",
    titleEn: "Profit Logs",
    desc: "來自社群群友的真實盈利截圖，記錄每一次成功捕捉主力行為的實戰成果。",
    cta: "查看交易成果 →",
    accent: "#0DF258",
  },
  {
    href: "/testimonials/reviews",
    icon: "💬",
    tag: "02 · 學員心得",
    title: "學習心得分享",
    titleEn: "Member Reviews",
    desc: "群友學習 DMC 系統後的真實感受與心得，從初學者到穩定盈利的完整蛻變歷程。",
    cta: "閱讀學員心得 →",
    accent: "#9ED600",
  },
  {
    href: "/testimonials/videos",
    icon: "🎬",
    tag: "03 · 影片見證",
    title: "影片見證精選",
    titleEn: "Video Testimonials",
    desc: "真人出鏡見證，用最直接的方式讓你感受 DMC 系統改變交易者人生的真實故事。",
    cta: "觀看影片見證 →",
    accent: "#0DF258",
  },
];

function TestimonialsHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            群友見證 · Testimonials
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            群友見證
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            2,000+ 名交易者的真實反饋，不經包裝，不做篩選
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

export default function TestimonialsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><TestimonialsHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
