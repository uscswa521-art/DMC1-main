"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const QA_ITEMS = [
  {
    num: "Q1",
    question: "加入 DMC 社群會收費嗎？",
    answer: "目前社群對外開放完全免費！你只需要完成 Bitunix 註冊並填寫 UID，即可領取指標與基礎教學影片。",
  },
  {
    num: "Q2",
    question: "如何正式加入群組？",
    answer: "點擊本頁面的「加入社群」按鈕，系統會引導你至專屬 Telegram 或 Line 群組，由管理員協助你開通權限。",
  },
  {
    num: "Q3",
    question: "需要有交易經驗才能加入嗎？",
    answer: "完全不需要！DMC 系統從基礎開始建立，即使你從未接觸過交易，大衛也會帶你從零開始理解市場運作邏輯。",
  },
  {
    num: "Q4",
    question: "加入後多久能開始交易？",
    answer: "這取決於你的學習速度。大多數群友在看完核心理論課後（約 1-2 週），就能開始用小倉位進行實踐。我們建議先模擬盤熟悉系統再真實入場。",
  },
];

function GettingStartedContent() {
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
            01 · 入門必讀
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            加入方式 Q&amp;A
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
            href="/community"
            className="inline-block font-code text-sm tracking-wider text-neon-green border border-neon-green/30 rounded-full px-8 py-3 hover:bg-neon-green/10 hover:border-neon-green/60 transition-all duration-300"
          >
            立即加入社群 →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function GettingStartedPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><GettingStartedContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
