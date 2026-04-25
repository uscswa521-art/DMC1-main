"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const HUB_ITEMS = [
  {
    href: "/testimonials/results",
    label: "01 · 盈利截圖",
    title: "交易成果見證",
    titleEn: "Profit Logs",
    desc: "來自社群群友的真實盈利截圖，記錄每一次成功捕捉主力行為的實戰成果。",
    cta: "查看交易成果 →",
    accent: "#0DF258",
    accentClass: "neon-green",
  },
  {
    href: "/testimonials/reviews",
    label: "02 · 學員心得",
    title: "學習心得分享",
    titleEn: "Member Reviews",
    desc: "群友學習 DMC 系統後的真實感受與心得，從初學者到穩定盈利的完整蛻變歷程。",
    cta: "閱讀學員心得 →",
    accent: "#C8E052",
    accentClass: "neon-chartreuse",
  },
  {
    href: "/testimonials/videos",
    label: "03 · 影片見證",
    title: "影片見證精選",
    titleEn: "Video Testimonials",
    desc: "真人出鏡見證，用最直接的方式讓你感受 DMC 系統改變交易者人生的真實故事。",
    cta: "觀看影片見證 →",
    accent: "#0DF258",
    accentClass: "neon-green",
  },
];

function TestimonialsHub() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden flex flex-col justify-center">
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-neon-green/50 font-code text-[11px]">[</span>
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">群友見證 · Testimonials</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            群友見證
          </h1>
          <p className="text-white/40 text-sm leading-relaxed max-w-xl">
            2,000+ 名交易者的真實反饋，不經包裝，不做篩選
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

export default function TestimonialsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><TestimonialsHub /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
