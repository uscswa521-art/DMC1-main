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
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* Back link */}
        <div className="mb-10">
          <a
            href="/faq"
            className="flex items-center gap-2 font-code text-[10px] tracking-widest text-white/25 hover:text-neon-green transition-colors uppercase"
          >
            <span>←</span>
            <span>FAQ</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-neon-green/50 font-code text-[11px]">[</span>
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">02 · 系統學習</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            學習系統 Q&amp;A
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent mt-6" />
        </div>

        {/* Q&A step rows */}
        <div className="max-w-3xl mx-auto mb-20" style={{ display: "flex", flexDirection: "column" }}>
          {QA_ITEMS.map((item, i) => (
            <div
              key={item.num}
              className="group relative flex items-stretch bg-[#080d09] hover:bg-[#0a1209] border border-neon-green/8 hover:border-neon-green/25 transition-all duration-300 overflow-hidden"
              style={{ marginBottom: "-1px" }}
            >
              {/* HUD top-right bracket */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />
              {/* HUD bottom-left bracket */}
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />

              {/* Left Q number column */}
              <div className="w-16 lg:w-20 flex items-start justify-center flex-shrink-0 pt-8 pb-8">
                <span
                  className="font-headline font-black leading-none select-none"
                  style={{ fontSize: 40, color: "rgba(13,242,88,0.10)" }}
                >
                  {item.num}
                </span>
              </div>

              {/* Right content */}
              <div className="flex-1 py-8 pr-8">
                <p className="font-headline font-bold text-white text-lg mb-3 leading-snug">
                  {item.question}
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="/training"
            className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black"
            style={{
              background: "linear-gradient(135deg,#b8e000,#0DF258)",
              boxShadow: "0 0 32px rgba(13,242,88,0.30)",
            }}
          >
            查看完整教學 →
          </a>
          <a
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-4 font-headline font-black text-sm text-white border border-neon-green/25 bg-transparent hover:bg-neon-green/5 hover:border-neon-green/50 transition-all duration-200"
          >
            返回 FAQ
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
