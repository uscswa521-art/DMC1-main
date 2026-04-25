"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const REVIEWS = [
  {
    quote:
      "學 DMC 之前我花了兩年在各種指標上，從來沒有一個系統讓我覺得「終於看懂了」。大衛教的主力思維完全顛覆了我對市場的理解。",
    author: "匿名群友",
    city: "來自香港",
    tags: ["學習3個月", "加密合約"],
    stars: 5,
  },
  {
    quote:
      "社群氛圍非常好，問題都能得到回應。跟了三個月的每日盤面分析，感覺自己的判斷力提升了很多。",
    author: "匿名群友",
    city: "來自台灣",
    tags: ["每日盤面", "BTC ETH"],
    stars: 5,
  },
  {
    quote:
      "以前靠感覺入場，輸多贏少。學了裸K判讀和 VP 邊緣之後，止損頻率明顯降低，心理壓力也少了很多。",
    author: "匿名群友",
    city: "來自澳洲",
    tags: ["裸K系統", "外匯"],
    stars: 5,
  },
  {
    quote:
      "線下聚會讓我認識了很多志同道合的交易者，互相分享覆盤，進步速度比自己摸索快很多倍。",
    author: "匿名群友",
    city: "來自新加坡",
    tags: ["線下聚會", "加密合約"],
    stars: 5,
  },
];

function ReviewsPage() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">

        {/* ── Back link ── */}
        <div className="mb-10">
          <a
            href="/testimonials"
            className="text-white/30 hover:text-neon-green font-code text-xs tracking-wider transition-colors"
          >
            ← 群友見證
          </a>
        </div>

        {/* ── Header ── */}
        <div className="mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            02 · 學員心得
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            學習心得分享
          </h1>
        </div>

        {/* ── Review cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl p-8 hover:border-neon-green/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #9ED60008, transparent 65%)" }}
              />

              {/* Stars */}
              <div className="mb-4 text-[#9ED600] text-sm tracking-widest">
                {"★".repeat(review.stars)}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-code text-xs text-white/50 tracking-widest">{review.author}</p>
                  <p className="font-code text-[10px] text-white/25 tracking-widest mt-0.5">{review.city}</p>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {review.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-code tracking-widest border border-neon-green/20 rounded-full px-2 py-0.5"
                      style={{ color: "#9ED60090" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #9ED60060, transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="/community"
            className="inline-block bg-neon-green text-[#050508] font-headline font-black text-sm tracking-wider px-10 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            加入社群 →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function TestimonialsReviewsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><ReviewsPage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
