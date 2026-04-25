"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_ITEMS = [
  {
    href: "/faq/getting-started",
    label: "01 · 入門必讀",
    title: "加入方式 Q&A",
    titleEn: "Getting Started",
    desc: "免費嗎？如何加入？需要什麼條件？所有入門前你最想知道的問題，這裡都有答案。",
    cta: "查看加入方式 →",
    accent: "#0DF258",
  },
  {
    href: "/faq/learning",
    label: "02 · 系統學習",
    title: "學習系統 Q&A",
    titleEn: "Learning & System",
    desc: "能學到什麼？適用哪些市場？學習進度如何安排？關於 DMC 系統與學習路徑的完整解答。",
    cta: "了解學習系統 →",
    accent: "#C8E052",
  },
  {
    href: "/faq/community",
    label: "03 · 社群互動",
    title: "社群活動 Q&A",
    titleEn: "Community & Events",
    desc: "有問題找誰問？線下聚會怎麼參加？深入了解 DMC 社群的日常運作與活動安排。",
    cta: "了解社群活動 →",
    accent: "#0DF258",
  },
];

function FAQHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-neon-green/50 font-code text-[11px]">[</span>
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">常見問題 · FAQ</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            常見問題
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-xl">
            找到你最想知道的答案，一切從這裡開始
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent mb-16" />

        {/* Step rows */}
        <div className="flex flex-col">
          {HUB_ITEMS.map((item, i) => {
            const isChartreuse = i === 1;
            const accentColor = isChartreuse ? "#C8E052" : "#0DF258";
            return (
              <a
                key={i}
                href={item.href}
                className="group relative flex items-stretch border border-neon-green/8 hover:border-neon-green/25 bg-[#080d09] hover:bg-[#0a1209] transition-all duration-300 overflow-hidden"
                style={{ marginBottom: "-1px" }}
              >
                {/* Left number column */}
                <div className="w-16 lg:w-24 flex items-center justify-center flex-shrink-0 py-8">
                  <span
                    className="font-headline font-black leading-none select-none"
                    style={{ fontSize: 64, color: isChartreuse ? "rgba(200,224,82,0.07)" : "rgba(13,242,88,0.07)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Center content */}
                <div className="flex-1 py-8 pr-8">
                  <span
                    className="font-code text-[10px] tracking-widest uppercase block mb-2"
                    style={{ color: isChartreuse ? "rgba(200,224,82,0.40)" : "rgba(13,242,88,0.40)" }}
                  >
                    [ {item.label} ]
                  </span>
                  <h2 className="font-headline font-black text-white text-xl mb-1">{item.title}</h2>
                  <p
                    className="font-code text-[10px] tracking-widest mb-3"
                    style={{ color: accentColor + "70" }}
                  >
                    {item.titleEn}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl mb-4">{item.desc}</p>
                  <span
                    className="font-code text-[10px] tracking-widest uppercase"
                    style={{ color: accentColor + "80" }}
                  >
                    {item.cta}
                  </span>
                </div>

                {/* Right accent bar */}
                <div
                  className="w-px self-stretch opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: accentColor }}
                />

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accentColor}40, transparent)` }}
                />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default function FAQPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><FAQHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
