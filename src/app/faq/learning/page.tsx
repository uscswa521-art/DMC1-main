"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const QA_ITEMS = [
  {
    num: "Q1",
    question: "社群可以學到什麼？",
    answer: "你將學會主力如何利用流動性進行吸籌與派發、如何判斷盤整區間、以及正確的風險管理與交易心態。",
  },
  {
    num: "Q2",
    question: "系統適用哪些市場？",
    answer: "DMC 核心邏輯適用於所有具備流動性的市場，包括加密貨幣、美股、黃金以及外匯市場。",
  },
  {
    num: "Q3",
    question: "需要購買任何課程嗎？",
    answer: "不需要！DMC 社群內所有基礎教學影片完全免費。你只需要加入社群，就能獲取大衛親自錄製的 200+ 部教學影片與每日盤面分析。",
  },
  {
    num: "Q4",
    question: "學習需要多少時間投入？",
    answer: "我們建議每天至少投入 30-60 分鐘學習。先掌握核心理論，再透過每日盤面分析練習判斷力。大多數群友在 1-3 個月內會有明顯進步。",
  },
];

function LearningContent() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Back link ── */}
        <div className="mb-10">
          <a href="/faq" className="text-white/30 hover:text-neon-green font-code text-xs tracking-wider transition-colors">
            ← FAQ
          </a>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            02 · 系統學習
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            學習系統 Q&amp;A
          </h1>
        </div>

        {/* ── Q&A Cards ── */}
        <div className="max-w-3xl mx-auto space-y-5 mb-20">
          {QA_ITEMS.map((item) => (
            <div
              key={item.num}
              className="bg-[#111713]/60 border border-neon-green/10 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 font-code text-xs font-bold text-neon-green bg-neon-green/10 border border-neon-green/20 rounded-full px-3 py-1 mt-0.5">
                  {item.num}
                </span>
                <div className="flex-1 space-y-3">
                  <p className="font-headline font-bold text-white text-lg leading-snug">
                    {item.question}
                  </p>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="/training"
            className="inline-block font-code text-sm tracking-wider text-neon-green border border-neon-green/30 rounded-full px-8 py-3 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300"
          >
            查看完整教學 →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function LearningPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><LearningContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
