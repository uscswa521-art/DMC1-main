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
            03 · 影片見證
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            影片見證精選
          </h1>
        </div>

        {/* ── Video cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {VIDEOS.map((video, i) => (
            <div
              key={i}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl overflow-hidden hover:border-neon-green/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{ background: "radial-gradient(ellipse at top, #0DF25808, transparent 65%)" }}
              />

              {/* 16:9 video placeholder */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <div className="absolute inset-0 bg-[#0a110b] flex items-center justify-center">
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "linear-gradient(#0DF25820 1px, transparent 1px), linear-gradient(90deg, #0DF25820 1px, transparent 1px)",
                      backgroundSize: "32px 32px"
                    }}
                  />
                  {/* Play button */}
                  <div className="relative z-10 w-14 h-14 rounded-full border-2 border-neon-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "#0DF25815" }}>
                    <span className="text-neon-green text-xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-headline font-bold text-base text-white mb-2 leading-snug">
                  {video.title}
                </h3>
                <p className="text-white/45 text-xs leading-relaxed mb-4">{video.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {video.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-code tracking-widest border border-neon-green/20 rounded-full px-2 py-0.5"
                      style={{ color: "#0DF25880" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #0DF25860, transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* ── Unlock note ── */}
        <div className="text-center mb-12">
          <p className="font-code text-xs text-white/25 tracking-widest">
            更多見證影片 · 加入社群後可獲取完整播放清單
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <a
            href="/community"
            className="inline-block bg-neon-green text-[#050508] font-headline font-black text-sm tracking-wider px-10 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            加入社群解鎖更多 →
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
