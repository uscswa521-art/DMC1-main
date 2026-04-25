"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    title: "機構主力行為解析",
    category: "核心概念",
    desc: "深入拆解機構與大戶如何在市場中建倉、洗盤、拉升，讓你看懂每一根 K 線背後的主力意圖。",
    level: "入門必看",
  },
  {
    title: "日內交易實戰思維",
    category: "思維認知",
    desc: "建立日內交易的正確心態框架，學習如何在高波動市場中保持紀律、管理情緒、穩定執行策略。",
    level: "思維建立",
  },
];

const CONCEPTS = [
  { title: "機構建倉邏輯", desc: "理解為何主力需要大量散戶流動性才能完成建倉，看懂「假突破」的本質目的。" },
  { title: "主力行為識別", desc: "透過成交量異動、盤口變化、K 線形態三重驗證，即時識別主力正在進行的操作。" },
  { title: "交易心理建設", desc: "克服 FOMO 與恐慌性止損，建立基於系統邏輯而非情緒的決策框架。" },
  { title: "盤前計劃制定", desc: "學習如何在每次開盤前制定清晰的交易計劃，包括入場條件、止損位、目標位。" },
];

function CoreContent() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* ══ HERO PANEL ══ */}
      <div className="relative overflow-hidden" style={{ minHeight: "52vh", background: "#060d07" }}>
        {/* Diagonal split: darker right panel */}
        <div
          className="absolute inset-0 bg-[#030505]"
          style={{ clipPath: "polygon(72% 0, 100% 0, 100% 100%, 80% 100%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.035,
            backgroundImage:
              "linear-gradient(rgba(13,242,88,1) 1px, transparent 1px), linear-gradient(90deg, rgba(13,242,88,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%", left: "0", width: "50%", height: "60%",
            background: "radial-gradient(ellipse at left center, rgba(13,242,88,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Back link */}
        <div className="absolute top-8 left-6 lg:left-12 z-20">
          <a
            href="/training"
            className="flex items-center gap-2 text-white/25 hover:text-neon-green transition-colors font-code text-[10px] tracking-widest uppercase"
          >
            <span>←</span>
            <span>[ 實戰教學 ]</span>
          </a>
        </div>

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-28 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end">

            {/* Left: number + title */}
            <div>
              <span
                className="font-headline font-black text-neon-green leading-none block select-none"
                style={{ fontSize: "clamp(110px, 22vw, 200px)", opacity: 0.055, marginBottom: "-0.18em", lineHeight: 1 }}
              >
                01
              </span>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-neon-green/50 font-code text-[11px]">[</span>
                <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">基礎必學 · CORE THEORY</span>
                <span className="text-neon-green/50 font-code text-[11px]">]</span>
              </div>
              <h1
                className="font-headline font-black text-white leading-none"
                style={{ fontSize: "clamp(46px, 8vw, 82px)" }}
              >
                核心<br />理論課
              </h1>
            </div>

            {/* Right: description + meta */}
            <div className="space-y-8">
              <p className="text-white/50 text-base leading-relaxed max-w-sm">
                交易最重要的不是技術指標，而是正確的思維框架。<br />這裡是一切的起點。
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "DIFFICULTY", value: "入門必看" },
                  { label: "FORMAT", value: "系列課程" },
                ].map((m) => (
                  <div key={m.label} className="border-l-2 border-neon-green/25 pl-3">
                    <p className="text-neon-green/40 font-code text-[9px] tracking-widest mb-1">{m.label}</p>
                    <p className="text-white/65 font-code text-xs">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal bottom cut */}
        <div
          className="absolute bottom-0 left-0 w-full bg-[#050508]"
          style={{ height: "80px", clipPath: "polygon(0 100%, 0 55%, 100% 0, 100% 100%)" }}
        />
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="container mx-auto px-6 lg:px-12 py-20">

        {/* ── Section 01: Videos ── */}
        <div className="mb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-headline font-black text-neon-green/8 leading-none select-none" style={{ fontSize: 72 }}>01</span>
            <div>
              <p className="text-neon-green/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">課程影片</h2>
            </div>
            <div className="flex-1 h-px bg-neon-green/8 ml-2" />
          </div>

          {/* Video rows */}
          <div className="space-y-px">
            {VIDEOS.map((v, i) => (
              <div
                key={i}
                className="group relative flex overflow-hidden border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/0 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green/0 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />

                {/* Number column */}
                <div className="shrink-0 w-16 lg:w-24 bg-[#080d09] border-r border-neon-green/8 flex items-center justify-center py-8">
                  <span className="font-headline font-black text-neon-green/12 leading-none select-none" style={{ fontSize: 52 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 bg-[#080d09] group-hover:bg-[#0a1209] transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <span className="text-neon-green font-code text-[10px] tracking-widest uppercase border-l-2 border-neon-green pl-2">
                      {v.category}
                    </span>
                    <span className="text-white/25 font-code text-[10px]">/ {v.level}</span>
                  </div>
                  <h3 className="font-headline font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-neon-green transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">{v.desc}</p>

                  {/* Play indicator */}
                  <div className="mt-4 flex items-center gap-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-5 h-5 border border-neon-green/60 flex items-center justify-center shrink-0">
                      <Play size={9} className="text-neon-green fill-neon-green ml-0.5" />
                    </div>
                    <span className="font-code text-[10px] text-neon-green/60 tracking-widest">PLAY VIDEO</span>
                  </div>
                </div>

                {/* Right accent bar */}
                <div className="shrink-0 w-1 bg-neon-green/0 group-hover:bg-neon-green/40 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Diagonal divider ── */}
        <div className="relative h-12 mb-20 overflow-visible">
          <div
            className="absolute left-0 right-0 top-1/2 h-px bg-neon-green/8"
            style={{ transform: "rotate(-0.6deg)" }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <span className="text-neon-green/20 font-code text-[9px]">—</span>
            <span className="text-neon-green/20 font-code text-[9px] tracking-widest">◈</span>
            <span className="text-neon-green/20 font-code text-[9px]">—</span>
          </div>
        </div>

        {/* ── Section 02: Concepts ── */}
        <div className="mb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-headline font-black text-neon-green/8 leading-none select-none" style={{ fontSize: 72 }}>02</span>
            <div>
              <p className="text-neon-green/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">課程學習重點</h2>
            </div>
            <div className="flex-1 h-px bg-neon-green/8 ml-2" />
          </div>

          {/* Concepts grid — seamless panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neon-green/5">
            {CONCEPTS.map((c, i) => (
              <div
                key={i}
                className="group relative bg-[#080d09] p-7 hover:bg-[#0a1209] transition-colors duration-300 overflow-hidden"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-green/15 group-hover:border-neon-green/50 transition-colors duration-300" />

                {/* Number watermark */}
                <span
                  className="absolute bottom-2 right-4 font-headline font-black text-neon-green/[0.04] leading-none select-none"
                  style={{ fontSize: 64 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <p className="text-neon-green/40 font-code text-[9px] tracking-widest uppercase mb-3">
                    [ {String(i + 1).padStart(2, "0")} ]
                  </p>
                  <h3 className="font-headline font-bold text-white text-base mb-3 group-hover:text-neon-green transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed">{c.desc}</p>
                  <div className="mt-5 h-px w-0 bg-neon-green/35 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA block ── */}
        <div className="relative border border-neon-green/15 bg-[#080d09] overflow-hidden">
          {/* Corner triangle accents */}
          <div
            className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neon-green/12"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neon-green/12"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12">
            <div>
              <p className="text-neon-green/40 font-code text-[10px] tracking-widest uppercase mb-2">[ NEXT STEP ]</p>
              <h3 className="font-headline font-bold text-white text-xl mb-1">準備好進入進階實戰了嗎？</h3>
              <p className="text-white/30 text-sm">理論已經打好基礎，是時候學習實際的操作技術。</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <a
                href="/training/skills"
                className="inline-flex items-center gap-2 px-6 py-3 font-headline font-black text-sm text-white border border-neon-green/30 bg-transparent hover:bg-neon-green/8 hover:border-neon-green/60 transition-all duration-200"
              >
                繼續：實戰技術課 →
              </a>
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 24px rgba(13,242,88,0.25)" }}
              >
                加入社群領完整教學 →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function CorePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><CoreContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
