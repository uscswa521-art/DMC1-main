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
  { icon: "📡", title: "即時盤面解析", desc: "直播中即時分析當前市場結構，不事後諸葛，全程真實操作。" },
  { icon: "🎙️", title: "思維過程透明", desc: "完整解說每一個決策背後的邏輯：為什麼入場、為什麼這個位置止損。" },
  { icon: "❓", title: "觀眾即時問答", desc: "直播期間開放觀眾提問，David 即時回答盤面問題與策略疑惑。" },
  { icon: "🔄", title: "定期更新回放", desc: "加入社群後可獲取完整直播回放庫，隨時重溫精彩盤面解析。" },
];

function LiveContent() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Back ── */}
        <div className="mb-10">
          <a href="/training" className="text-white/30 hover:text-neon-green font-code text-xs tracking-wider transition-colors">
            ← 實戰教學
          </a>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-red-400/70 uppercase border border-red-400/20 rounded-full px-4 py-1.5">
            🔴 直播回放 · Live Highlights
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug"
            style={{ textShadow: "0 0 30px rgba(255,85,85,0.3)" }}>
            直播精華
          </h1>
          <p className="text-white/40 font-body text-sm max-w-xl mx-auto leading-relaxed">
            大衛直播實況精華剪輯，真實盤面操作完整記錄，看懂主力資金如何在市場中運作。
          </p>
        </div>

        {/* ── Live highlights ── */}
        <div className="max-w-4xl mx-auto mb-20 space-y-5">
          <h2 className="text-lg font-headline font-bold text-white mb-6">精華影片</h2>
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={i}
              className="group flex items-start gap-6 p-6 rounded-2xl bg-[#111713]/60 border border-red-500/10 hover:border-red-500/25 transition-all duration-300"
            >
              {/* Play button */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-red-500/8 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/15 transition-colors">
                <Play size={20} className="text-red-400 fill-red-400 ml-1" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  {h.tags.map((tag) => (
                    <span key={tag} className="text-red-400/70 font-code text-[10px] border border-red-400/20 rounded px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-headline font-bold text-xl mb-2 group-hover:text-red-400 transition-colors">{h.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}

          {/* More content note */}
          <div className="text-center p-6 rounded-2xl border border-dashed border-white/10">
            <p className="text-white/30 font-code text-xs tracking-wider">
              更多直播精華回放 · 加入 DMC 社群後解鎖完整播放清單
            </p>
          </div>
        </div>

        {/* ── Live features ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-lg font-headline font-bold text-white mb-6">直播特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LIVE_FEATURES.map((f, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#111713]/40 border border-red-500/8 hover:border-red-500/20 transition-all">
                <span className="text-2xl shrink-0">{f.icon}</span>
                <div>
                  <h3 className="text-white/90 font-bold text-sm mb-1">{f.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-4">
          <p className="text-white/30 font-code text-xs tracking-wider">加入社群，獲取完整直播回放庫</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/training" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-white border border-neon-green/30 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200">
              ← 返回教學總覽
            </a>
            <a href="/community" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 24px rgba(13,242,88,0.25)" }}>
              加入社群解鎖完整教學 →
            </a>
          </div>
        </div>

      </div>
    </section>
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
