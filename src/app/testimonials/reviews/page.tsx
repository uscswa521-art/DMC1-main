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
  },
  {
    quote:
      "社群氛圍非常好，問題都能得到回應。跟了三個月的每日盤面分析，感覺自己的判斷力提升了很多。",
    author: "匿名群友",
    city: "來自台灣",
    tags: ["每日盤面", "BTC ETH"],
  },
  {
    quote:
      "以前靠感覺入場，輸多贏少。學了裸K判讀和 VP 邊緣之後，止損頻率明顯降低，心理壓力也少了很多。",
    author: "匿名群友",
    city: "來自澳洲",
    tags: ["裸K系統", "外匯"],
  },
  {
    quote:
      "線下聚會讓我認識了很多志同道合的交易者，互相分享覆盤，進步速度比自己摸索快很多倍。",
    author: "匿名群友",
    city: "來自新加坡",
    tags: ["線下聚會", "加密合約"],
  },
];

function ReviewsPage() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">

        {/* Back link */}
        <div className="mb-10">
          <a
            href="/testimonials"
            className="flex items-center gap-2 font-code text-[10px] tracking-widest text-white/25 hover:text-neon-green transition-colors uppercase"
          >
            <span>←</span>
            <span>群友見證</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-neon-green/50 font-code text-[11px]">[</span>
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">02 · 學員心得</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            學習心得分享
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent mt-6" />
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20 border border-neon-green/10">
          {REVIEWS.map((review, i) => {
            const isEven = i % 2 === 0;
            const accentColor = isEven ? "#0DF258" : "#C8E052";
            return (
              <div
                key={i}
                className="group relative bg-[#080d09] hover:bg-[#0a1209] border border-neon-green/10 hover:border-neon-green/30 p-8 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* HUD top-left bracket */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />
                {/* HUD bottom-right bracket */}
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />

                {/* Dots replacing stars */}
                <div className="mb-4 tracking-widest" style={{ color: accentColor, opacity: 0.6 }}>
                  · · · · ·
                </div>

                {/* Left accent border + quote */}
                <div
                  className="flex-1 pl-4 mb-6"
                  style={{ borderLeft: `2px solid ${accentColor}40` }}
                >
                  <p className="text-white/40 text-sm leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                {/* Author + tags row */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-code text-xs text-white/50 tracking-widest">{review.author}</p>
                    <p className="font-code text-[10px] text-white/25 tracking-widest mt-0.5">{review.city}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {review.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-code text-[8px] tracking-widest px-2 py-0.5 uppercase"
                        style={{
                          color: isEven ? "rgba(13,242,88,0.40)" : "rgba(200,224,82,0.40)",
                          border: isEven
                            ? "1px solid rgba(13,242,88,0.15)"
                            : "1px solid rgba(200,224,82,0.15)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom glow line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black"
            style={{
              background: "linear-gradient(135deg,#b8e000,#0DF258)",
              boxShadow: "0 0 32px rgba(13,242,88,0.30)",
            }}
          >
            加入社群 →
          </a>
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-4 font-headline font-black text-sm text-white border border-neon-green/25 bg-transparent hover:bg-neon-green/5 hover:border-neon-green/50 transition-all duration-200"
          >
            返回見證總覽
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
