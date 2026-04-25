"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const QA_ITEMS = [
  {
    num: "Q1",
    question: "有問題去哪發問？",
    answer: "社群內有 24 小時活躍的群友與助教。大衛本人也會定期在盤中進行解析，解決大家對行情的所有疑惑。",
  },
  {
    num: "Q2",
    question: "何時有線下聚會？",
    answer: "我們每季都會舉辦實體線下聚會，讓大家除了在線上交流，更能面對面討論交易心得與生活。",
  },
  {
    num: "Q3",
    question: "社群內的氛圍如何？",
    answer: "DMC 社群以互助學習為核心，群友之間相互分享覆盤、交流策略，沒有惡意競爭。我們嚴格禁止報單、廣告與負能量，只專注於學習成長。",
  },
  {
    num: "Q4",
    question: "可以直接問大衛問題嗎？",
    answer: "可以！大衛本人會在每次直播和聚會中親自與群友互動，解答盤面問題。日常問題則由活躍的助教和群友協助解答。",
  },
];

function FAQCommunityContent() {
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
            03 · 社群互動
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            社群活動 Q&amp;A
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

export default function FAQCommunityPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><FAQCommunityContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
