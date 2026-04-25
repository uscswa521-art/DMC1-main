"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const RESULT_CARDS = [
  {
    username: "匿名群友 #1",
    market: "BTC 合約",
    profit: "+187%",
    desc: "利用 VP 邊緣識別主力吸籌完成，在突破前精準入場",
    date: "2025-03-14",
  },
  {
    username: "匿名群友 #2",
    market: "ETH 合約",
    profit: "+24.6%",
    desc: "裸K配合量能衰竭信號，捕捉主力洗盤後的加速段",
    date: "2025-04-02",
  },
  {
    username: "匿名群友 #3",
    market: "黃金",
    profit: "+63.1%",
    desc: "按 DMC 系統識別假突破 IDM 訊號，反向做空完美成立",
    date: "2025-05-19",
  },
  {
    username: "匿名群友 #4",
    market: "ETH 合約",
    profit: "+312%",
    desc: "跟隨每日盤面分析方向，VP 小 POC 下邊緣守住後入場做多",
    date: "2025-06-07",
  },
];

function ResultsPage() {
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
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">01 · 盈利截圖</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            交易成果見證
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent mt-6" />
        </div>

        {/* Section subtitle */}
        <div className="mb-10">
          <h2 className="font-headline font-bold text-xl text-white mb-2">截圖說明一切</h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
            以下截圖來自社群成員，已隱去個人資訊保護隱私
          </p>
        </div>

        {/* Result cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mb-20 border border-neon-green/10">
          {RESULT_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative bg-[#080d09] hover:bg-[#0a1209] border border-neon-green/10 hover:border-neon-green/30 p-8 transition-all duration-300 overflow-hidden"
            >
              {/* HUD top-left bracket */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />
              {/* HUD bottom-right bracket */}
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />

              {/* Number watermark */}
              <div
                className="absolute bottom-2 right-4 font-headline font-black text-neon-green/[0.04] leading-none select-none"
                style={{ fontSize: 64 }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Header row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-code text-xs text-white/50 tracking-widest mb-2">{card.username}</p>
                  <span
                    className="font-code text-[8px] tracking-widest px-2 py-0.5 uppercase"
                    style={{
                      color: "rgba(13,242,88,0.40)",
                      border: "1px solid rgba(13,242,88,0.15)",
                    }}
                  >
                    {card.market}
                  </span>
                </div>
                <span
                  className="font-headline font-black text-3xl"
                  style={{ color: "#0DF258" }}
                >
                  {card.profit}
                </span>
              </div>

              {/* Desc */}
              <p className="text-white/40 text-sm leading-relaxed mb-4 relative z-10">{card.desc}</p>

              {/* Date */}
              <p className="font-code text-[10px] text-white/20 tracking-widest">{card.date}</p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #0DF25840, transparent)" }}
              />
            </div>
          ))}
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
            加入社群看更多見證 →
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

export default function TestimonialsResultsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><ResultsPage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
