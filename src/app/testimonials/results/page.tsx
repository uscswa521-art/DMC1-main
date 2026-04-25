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
            01 · 盈利截圖
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            交易成果見證
          </h1>
        </div>

        {/* ── Section title ── */}
        <div className="mb-10">
          <h2 className="font-headline font-bold text-2xl text-white mb-2">截圖說明一切</h2>
          <p className="text-white/40 font-body text-sm max-w-2xl leading-relaxed">
            以下截圖來自社群成員，已隱去個人資訊保護隱私
          </p>
        </div>

        {/* ── Result cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {RESULT_CARDS.map((card, i) => (
            <div
              key={i}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl p-8 hover:border-neon-green/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #0DF25808, transparent 65%)" }} />

              {/* Header row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">👤</span>
                  <div>
                    <p className="font-code text-xs text-white/50 tracking-widest">{card.username}</p>
                    <span className="inline-block mt-1 text-[10px] font-code tracking-widest text-neon-green/60 border border-neon-green/20 rounded-full px-2 py-0.5">
                      {card.market}
                    </span>
                  </div>
                </div>
                <span className="font-headline font-black text-3xl" style={{ color: "#0DF258" }}>
                  {card.profit}
                </span>
              </div>

              {/* Desc */}
              <p className="text-white/50 text-sm leading-relaxed mb-4">{card.desc}</p>

              {/* Date */}
              <p className="font-code text-[10px] text-white/20 tracking-widest">{card.date}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #0DF25860, transparent)" }} />
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="/community"
            className="inline-block bg-neon-green text-[#050508] font-headline font-black text-sm tracking-wider px-10 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            加入社群看更多見證 →
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
