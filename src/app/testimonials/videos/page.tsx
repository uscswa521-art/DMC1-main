"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const VIDEOS = [
  {
    title: "從虧損到穩定盈利的半年歷程",
    desc: "一位加密貨幣交易者分享如何通過 DMC 系統改變交易習慣",
    tags: ["加密合約", "6個月", "BTC ETH"],
  },
  {
    title: "副業交易者的 DMC 學習心路",
    desc: "全職上班族如何利用碎片時間學習並實踐主力思維",
    tags: ["兼職交易", "3個月"],
  },
  {
    title: "從傳統技術分析轉型 DMC",
    desc: "10年股票交易者分享為何放棄傳統指標擁抱裸K思維",
    tags: ["股票轉型", "外匯"],
  },
];

function VideosPage() {
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
            <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">03 · 影片見證</span>
            <span className="text-neon-green/50 font-code text-[11px]">]</span>
          </div>
          <h1
            className="font-headline font-black text-white leading-none mb-4"
            style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
          >
            影片見證精選
          </h1>
          <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent mt-6" />
        </div>

        {/* Video cards — single row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-10 border border-neon-green/10">
          {VIDEOS.map((video, i) => (
            <div
              key={i}
              className="group relative bg-[#080d09] hover:bg-[#0a1209] border border-neon-green/10 hover:border-neon-green/30 overflow-hidden transition-all duration-300"
            >
              {/* HUD top-left bracket */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />
              {/* HUD bottom-right bracket */}
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />

              {/* 16:9 video placeholder */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <div className="absolute inset-0 bg-[#050a06] flex items-center justify-center">
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(#0DF25820 1px, transparent 1px), linear-gradient(90deg, #0DF25820 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {/* Angular play button — square, not circle */}
                  <div
                    className="relative z-10 w-14 h-14 border-2 border-neon-green/40 flex items-center justify-center group-hover:border-neon-green/80 transition-colors duration-300"
                    style={{ background: "rgba(13,242,88,0.05)" }}
                  >
                    <span className="text-neon-green/70 text-xl ml-1 group-hover:text-neon-green transition-colors duration-300">▶</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-headline font-bold text-base text-white mb-2 leading-snug">
                  {video.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{video.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {video.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-code text-[8px] tracking-widest px-2 py-0.5 uppercase"
                      style={{
                        color: "rgba(13,242,88,0.40)",
                        border: "1px solid rgba(13,242,88,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #0DF25840, transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* Unlock note */}
        <div className="mb-12">
          <p className="font-code text-xs text-white/25 tracking-widest">
            更多見證影片 · 加入社群後可獲取完整播放清單
          </p>
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
            加入社群解鎖更多 →
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

export default function TestimonialsVideosPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><VideosPage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
