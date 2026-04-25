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
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">03 · 社群互動</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            社群活動 Q&amp;A
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
