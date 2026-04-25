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
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">01 · 入門必讀</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            加入方式 Q&amp;A
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
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black"
            style={{
              background: "linear-gradient(135deg,#b8e000,#0DF258)",
              boxShadow: "0 0 32px rgba(13,242,88,0.30)",
            }}
          >
            立即加入社群 →
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
