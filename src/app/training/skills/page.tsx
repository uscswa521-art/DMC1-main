"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    title: "加密貨幣實戰精華",
    category: "實戰技術",
    desc: "針對加密貨幣合約市場的實戰操作示範，包含 BTC、ETH 等主流幣種的主力追蹤策略與入場時機選擇。",
    level: "進階實戰",
  },
  {
    title: "DMC實戰必備技巧",
    category: "DMC策略",
    desc: "完整拆解 DMC 系統的每一個操作細節：POC 邊緣入場、IDM 反向訊號識別、三根有量突破判斷。",
    level: "DMC 核心",
  },
];

const TECHNIQUES = [
  { title: "POC 邊緣入場", desc: "在成交量最大價位（POC）的上下邊緣等待回測，配合 K 線確認後精準入場。" },
  { title: "IDM 反向識別", desc: "識別「刺穿邊緣收回」的 IDM 訊號，在假突破後進行反向交易，捕捉主力洗盤後的反彈。" },
  { title: "VP 成交量驗證", desc: "用 Volume Profile 交叉驗證入場邏輯，確保每次入場都有資金結構支撐，非盲目猜測。" },
  { title: "動態止損管理", desc: "基於市場結構動態調整止損位，而非固定點數止損，避免被主力精準掃損。" },
  { title: "突破確認技巧", desc: "區分真突破與假突破的三個關鍵條件：連續三根有量K線、收盤確認、無立即回收。" },
  { title: "多週期共振", desc: "H4→H1→M5 三個時間框架方向一致才入場，過濾低質量訊號，提高勝率。" },
];

function SkillsContent() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* ══ HERO PANEL ══ */}
      <div className="relative overflow-hidden" style={{ minHeight: "52vh", background: "#0d110a" }}>
        {/* Diagonal split: darker right panel */}
        <div
          className="absolute inset-0 bg-[#060807]"
          style={{ clipPath: "polygon(72% 0, 100% 0, 100% 100%, 80% 100%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(rgba(200,224,82,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,224,82,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%", left: "0", width: "50%", height: "70%",
            background: "radial-gradient(ellipse at left center, rgba(200,224,82,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Back link */}
        <div className="absolute top-8 left-6 lg:left-12 z-20">
          <a
            href="/training"
            className="flex items-center gap-2 text-white/25 hover:text-neon-chartreuse transition-colors font-code text-[10px] tracking-widest uppercase"
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
                className="font-headline font-black text-neon-chartreuse leading-none block select-none"
                style={{ fontSize: "clamp(110px, 22vw, 200px)", opacity: 0.055, marginBottom: "-0.18em", lineHeight: 1 }}
              >
                02
              </span>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-neon-chartreuse/50 font-code text-[11px]">[</span>
                <span className="text-neon-chartreuse/70 font-code text-[11px] tracking-widest uppercase">進階實戰 · ADVANCED SKILLS</span>
                <span className="text-neon-chartreuse/50 font-code text-[11px]">]</span>
              </div>
              <h1
                className="font-headline font-black text-white leading-none"
                style={{ fontSize: "clamp(46px, 8vw, 82px)" }}
              >
                實戰<br />技術課
              </h1>
            </div>

            {/* Right: description + meta */}
            <div className="space-y-8">
              <p className="text-white/50 text-base leading-relaxed max-w-sm">
                將 DMC 理論轉化為可執行的交易動作，<br />每一個技巧都經過真實市場驗證。
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "DIFFICULTY", value: "進階實戰" },
                  { label: "FORMAT", value: "系列課程" },
                ].map((m) => (
                  <div key={m.label} className="border-l-2 border-neon-chartreuse/25 pl-3">
                    <p className="text-neon-chartreuse/40 font-code text-[9px] tracking-widest mb-1">{m.label}</p>
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
            <span className="font-headline font-black text-neon-chartreuse/8 leading-none select-none" style={{ fontSize: 72 }}>
              01
            </span>
            <div>
              <p className="text-neon-chartreuse/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">課程影片</h2>
            </div>
            <div className="flex-1 h-px bg-neon-chartreuse/8 ml-2" />
          </div>

          {/* Video rows */}
          <div className="space-y-px">
            {VIDEOS.map((v, i) => (
              <div
                key={i}
                className="group relative flex overflow-hidden border border-neon-chartreuse/10 hover:border-neon-chartreuse/30 transition-all duration-300"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-chartreuse/0 group-hover:border-neon-chartreuse/50 transition-colors duration-300 z-10" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-chartreuse/0 group-hover:border-neon-chartreuse/50 transition-colors duration-300 z-10" />

                {/* Number column */}
                <div className="shrink-0 w-16 lg:w-24 bg-[#080d09] border-r border-neon-chartreuse/8 flex items-center justify-center py-8">
                  <span className="font-headline font-black text-neon-chartreuse/12 leading-none select-none" style={{ fontSize: 52 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 bg-[#080d09] group-hover:bg-[#0d1109] transition-colors duration-300">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <span className="text-neon-chartreuse font-code text-[10px] tracking-widest uppercase border-l-2 border-neon-chartreuse pl-2">
                      {v.category}
                    </span>
                    <span className="text-white/25 font-code text-[10px]">/ {v.level}</span>
                  </div>
                  <h3 className="font-headline font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-neon-chartreuse transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-2xl">{v.desc}</p>

                  {/* Play indicator */}
                  <div className="mt-4 flex items-center gap-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-5 h-5 border border-neon-chartreuse/60 flex items-center justify-center shrink-0">
                      <Play size={9} className="text-neon-chartreuse fill-neon-chartreuse ml-0.5" />
                    </div>
                    <span className="font-code text-[10px] text-neon-chartreuse/60 tracking-widest">PLAY VIDEO</span>
                  </div>
                </div>

                {/* Right accent bar */}
                <div className="shrink-0 w-1 bg-neon-chartreuse/0 group-hover:bg-neon-chartreuse/40 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Diagonal divider ── */}
        <div className="relative h-12 mb-20 overflow-visible">
          <div
            className="absolute left-0 right-0 top-1/2 h-px bg-neon-chartreuse/8"
            style={{ transform: "rotate(-0.6deg)" }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
            <span className="text-neon-chartreuse/25 font-code text-[9px]">—</span>
            <span className="text-neon-chartreuse/25 font-code text-[9px]">◈</span>
            <span className="text-neon-chartreuse/25 font-code text-[9px]">—</span>
          </div>
        </div>

        {/* ── Section 02: Techniques ── */}
        <div className="mb-24">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-headline font-black text-neon-chartreuse/8 leading-none select-none" style={{ fontSize: 72 }}>
              02
            </span>
            <div>
              <p className="text-neon-chartreuse/40 font-code text-[9px] tracking-widest uppercase mb-1">[ SECTION ]</p>
              <h2 className="font-headline font-bold text-white text-lg">課程涵蓋技巧</h2>
            </div>
            <div className="flex-1 h-px bg-neon-chartreuse/8 ml-2" />
          </div>

          {/* Techniques grid — seamless panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neon-chartreuse/5">
            {TECHNIQUES.map((tc, i) => (
              <div
                key={i}
                className="group relative bg-[#080d09] p-7 hover:bg-[#0d1109] transition-colors duration-300 overflow-hidden"
              >
                {/* HUD corner brackets */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-chartreuse/15 group-hover:border-neon-chartreuse/50 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-chartreuse/15 group-hover:border-neon-chartreuse/50 transition-colors duration-300" />

                {/* Number watermark */}
                <span
                  className="absolute bottom-2 right-4 font-headline font-black text-neon-chartreuse/[0.04] leading-none select-none"
                  style={{ fontSize: 64 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <p className="text-neon-chartreuse/40 font-code text-[9px] tracking-widest uppercase mb-3">
                    [ {String(i + 1).padStart(2, "0")} ]
                  </p>
                  <h3 className="font-headline font-bold text-white text-sm mb-3 group-hover:text-neon-chartreuse transition-colors duration-300">
                    {tc.title}
                  </h3>
                  <p className="text-white/35 text-xs leading-relaxed">{tc.desc}</p>
                  <div className="mt-5 h-px w-0 bg-neon-chartreuse/35 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA block ── */}
        <div className="relative border border-neon-chartreuse/15 bg-[#080d09] overflow-hidden">
          {/* Corner triangle accents */}
          <div
            className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neon-chartreuse/12"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neon-chartreuse/12"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12">
            <div>
              <p className="text-neon-chartreuse/40 font-code text-[10px] tracking-widest uppercase mb-2">[ NEXT STEP ]</p>
              <h3 className="font-headline font-bold text-white text-xl mb-1">想看真實盤面操作示範？</h3>
              <p className="text-white/30 text-sm">技術已掌握，是時候看大衛如何在真實盤面實戰操作。</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <a
                href="/training/live"
                className="inline-flex items-center gap-2 px-6 py-3 font-headline font-black text-sm text-white border border-neon-chartreuse/30 bg-transparent hover:bg-neon-chartreuse/8 hover:border-neon-chartreuse/60 transition-all duration-200"
              >
                繼續：直播精華 →
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

export default function SkillsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><SkillsContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
