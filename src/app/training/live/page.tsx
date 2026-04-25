"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";
import { Play } from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "實況精華 · Vol.1",
    desc: "主力吸籌完整過程直播回放，展示如何從 VP 結構提前識別機構建倉區間，在散戶止損前已完成布局。",
    tags: ["BTC", "H1 黑線", "VP吸籌"],
  },
  {
    title: "實況精華 · Vol.2",
    desc: "ETH 假突破洗盤識別實況，帶你看懂主力如何在關鍵位製造假突破掃損，以及如何避免成為流動性。",
    tags: ["ETH", "假突破", "IDM"],
  },
  {
    title: "實況精華 · Vol.3",
    desc: "加密貨幣合約日內短線操作全程示範，從盤前計劃到盤中執行，完整呈現 DMC 系統的實際操作流程。",
    tags: ["日內短線", "M5入場", "止盈管理"],
  },
];

const LIVE_FEATURES = [
  { title: "即時盤面解析", desc: "直播中即時分析當前市場結構，不事後諸葛，全程真實操作。" },
  { title: "思維過程透明", desc: "完整解說每一個決策背後的邏輯：為什麼入場、為什麼這個位置止損。" },
  { title: "觀眾即時問答", desc: "直播期間開放觀眾提問，David 即時回答盤面問題與策略疑惑。" },
  { title: "定期更新回放", desc: "加入社群後可獲取完整直播回放庫，隨時重溫精彩盤面解析。" },
];

function LiveContent() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* ══ HERO PANEL ══ */}
      <div className="relative overflow-hidden" style={{ minHeight: "52vh", background: "#110808" }}>
        {/* Diagonal split: darker right panel */}
        <div
          className="absolute inset-0 bg-[#080505]"
          style={{ clipPath: "polygon(72% 0, 100% 0, 100% 100%, 80% 100%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(239,68,68,1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%", left: "0", width: "50%", height: "70%",
            background: "radial-gradient(ellipse at left center, rgba(239,68,68,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Back link */}
        <div className="absolute top-8 left-6 lg:left-12 z-20">
          <a
            href="/training"
            className="flex items-center gap-2 text-white/25 hover:text-red-400 transition-colors font-code text-[10px] tracking-widest uppercase"
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
                className="font-headline font-black text-red-500 leading-none block select-none"
                style={{ fontSize: "clamp(110px, 22vw, 200px)", opacity: 0.055, marginBottom: "-0.18em", lineHeight: 1 }}
              >
                03
              </span>
              <div className="flex items-center gap-2 mb-5">
                {/* Live dot */}
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="text-red-400/50 font-code text-[11px]">[</span>
                <span className="text-red-400/70 font-code text-[11px] tracking-widest uppercase">直播回放 · LIVE HIGHLIGHTS</span>
                <span className="text-red-400/50 font-code text-[11px]">]</span>
              </div>
              <h1
                className="font-headline font-black text-white leading-none"
                style={{ fontSize: "clamp(46px, 8vw, 82px)" }}
              >
                直播<br />精華
              </h1>
            </div>

            {/* Right: description + meta */}
            <div className="space-y-8">
              <p className="text-white/50 text-base leading-relaxed max-w-sm">
                大衛直播實況精華剪輯，真實盤面操作完整記錄，<br />看懂主力資金如何在市場中運作。
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "TYPE", value: "直播回放" },
                  { label: "ACCESS", value: "社群解鎖" },
                ].map((m) => (
                  <div key={m.label} className="border-l-2 border-red-500/25 pl-3">
                    <p className="text-red-400/40 font-code text-[9px] tracking-widest mb-1">{m.label}</p>
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

        {/* ── Section 01: Highlights ── */}
        <div className="mb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-headline font-black text-red-500/8 leading-none select-none" style={{ fontSize: 72 }}>
              01
            </span>
            <div>
              <p className="text-red-400/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">精華影片</h2>
            </div>
            <div className="flex-1 h-px bg-red-500/8 ml-2" />
          </div>

          {/* Highlight rows */}
          <div className="space-y-px">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className="group relative flex overflow-hidden border border-red-500/10 hover:border-red-500/30 transition-all duration-300"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-400/0 group-hover:border-red-400/50 transition-colors duration-300 z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-400/0 group-hover:border-red-400/50 transition-colors duration-300 z-10" />

                {/* Number column */}
                <div className="shrink-0 w-16 lg:w-24 bg-[#080d09] border-r border-red-500/8 flex items-center justify-center py-8">
                  <span className="font-headline font-black text-red-500/12 leading-none select-none" style={{ fontSize: 52 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 bg-[#080d09] group-hover:bg-[#120a0a] transition-colors duration-300">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {h.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-red-400/70 font-code text-[10px] tracking-widest uppercase border-l-2 border-red-400/40 pl-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-headline font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {h.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">{h.desc}</p>

                  {/* Play indicator */}
                  <div className="mt-4 flex items-center gap-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-5 h-5 border border-red-400/60 flex items-center justify-center shrink-0">
                      <Play size={9} className="text-red-400 fill-red-400 ml-0.5" />
                    </div>
                    <span className="font-code text-[10px] text-red-400/60 tracking-widest">PLAY VIDEO</span>
                  </div>
                </div>

                {/* Right accent bar */}
                <div className="shrink-0 w-1 bg-red-500/0 group-hover:bg-red-500/40 transition-colors duration-500" />
              </div>
            ))}
          </div>

          {/* Locked content notice */}
          <div className="mt-px border border-dashed border-white/8 bg-[#080d09] p-6 flex items-center gap-4">
            <span className="text-white/15 font-code text-[9px] tracking-widest">[ LOCKED ]</span>
            <p className="text-white/25 font-code text-[10px] tracking-wider">
              更多直播精華回放 · 加入 DMC 社群後解鎖完整播放清單
            </p>
            <div className="ml-auto flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400/40 font-code text-[9px] tracking-widest">LIVE</span>
            </div>
          </div>
        </div>

        {/* ── Diagonal divider ── */}
        <div className="relative h-12 mb-20 overflow-visible">
          <div
            className="absolute left-0 right-0 top-1/2 h-px bg-red-500/8"
            style={{ transform: "rotate(-0.6deg)" }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <span className="text-red-400/25 font-code text-[9px]">—</span>
            <span className="text-red-400/25 font-code text-[9px]">◈</span>
            <span className="text-red-400/25 font-code text-[9px]">—</span>
          </div>
        </div>

        {/* ── Section 02: Live features ── */}
        <div className="mb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-headline font-black text-red-500/8 leading-none select-none" style={{ fontSize: 72 }}>
              02
            </span>
            <div>
              <p className="text-red-400/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">直播特色</h2>
            </div>
            <div className="flex-1 h-px bg-red-500/8 ml-2" />
          </div>

          {/* Features grid — seamless panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-red-500/5">
            {LIVE_FEATURES.map((f, i) => (
              <div
                key={i}
                className="group relative bg-[#080d09] p-7 hover:bg-[#120a0a] transition-colors duration-300 overflow-hidden"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500/15 group-hover:border-red-500/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500/15 group-hover:border-red-500/50 transition-colors duration-300" />

                {/* Number watermark */}
                <span
                  className="absolute bottom-2 right-4 font-headline font-black text-red-500/[0.04] leading-none select-none"
                  style={{ fontSize: 64 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <p className="text-red-400/40 font-code text-[9px] tracking-widest uppercase mb-3">
                    [ {String(i + 1).padStart(2, "0")} ]
                  </p>
                  <h3 className="font-headline font-bold text-white text-base mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
                  <div className="mt-5 h-px w-0 bg-red-500/35 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA block ── */}
        <div className="relative border border-red-500/15 bg-[#080d09] overflow-hidden">
          {/* Corner triangle accents */}
          <div
            className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-red-500/12"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-red-500/12"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12">
            <div>
              <p className="text-red-400/40 font-code text-[10px] tracking-widest uppercase mb-2">[ UNLOCK ]</p>
              <h3 className="font-headline font-bold text-white text-xl mb-1">加入社群，獲取完整直播回放庫</h3>
              <p className="text-white/30 text-sm">數十小時真實盤面解析，免費解鎖，隨時重溫。</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <a
                href="/training"
                className="inline-flex items-center gap-2 px-6 py-3 font-headline font-black text-sm text-white border border-white/15 bg-transparent hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                ← 返回教學總覽
              </a>
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 24px rgba(13,242,88,0.25)" }}
              >
                加入社群解鎖完整教學 →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function LivePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><LiveContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
