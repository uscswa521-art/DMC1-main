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
    duration: "系列課程",
    level: "進階實戰",
  },
  {
    title: "DMC實戰必備技巧",
    category: "DMC策略",
    desc: "完整拆解 DMC 系統的每一個操作細節：POC 邊緣入場、IDM 反向訊號識別、三根有量突破判斷。",
    duration: "系列課程",
    level: "DMC 核心",
  },
];

const TECHNIQUES = [
  { icon: "📍", title: "POC 邊緣入場", desc: "在成交量最大價位（POC）的上下邊緣等待回測，配合 K 線確認後精準入場。" },
  { icon: "🔄", title: "IDM 反向識別", desc: "識別「刺穿邊緣收回」的 IDM 訊號，在假突破後進行反向交易，捕捉主力洗盤後的反彈。" },
  { icon: "📊", title: "VP 成交量驗證", desc: "用 Volume Profile 交叉驗證入場邏輯，確保每次入場都有資金結構支撐，非盲目猜測。" },
  { icon: "🎯", title: "動態止損管理", desc: "基於市場結構動態調整止損位，而非固定點數止損，避免被主力精準掃損。" },
  { icon: "⚡", title: "突破確認技巧", desc: "區分真突破與假突破的三個關鍵條件：連續三根有量K線、收盤確認、無立即回收。" },
  { icon: "💡", title: "多週期共振", desc: "H4→H1→M5 三個時間框架方向一致才入場，過濾低質量訊號，提高勝率。" },
];

function SkillsContent() {
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
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            02 · 進階實戰
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug"
            style={{ textShadow: "0 0 30px rgba(158,214,0,0.4)" }}>
            實戰技術課
          </h1>
          <p className="text-white/40 font-body text-sm max-w-xl mx-auto leading-relaxed">
            將 DMC 理論轉化為可執行的交易動作，每一個技巧都經過真實市場驗證。
          </p>
        </div>

        {/* ── Video list ── */}
        <div className="max-w-4xl mx-auto mb-20 space-y-5">
          <h2 className="text-lg font-headline font-bold text-white mb-6">課程影片</h2>
          {VIDEOS.map((v, i) => (
            <div
              key={i}
              className="group flex items-start gap-6 p-6 rounded-2xl bg-[#111713]/60 border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-neon-green/8 border border-neon-green/20 flex items-center justify-center group-hover:bg-neon-green/15 transition-colors">
                <Play size={20} className="text-neon-green fill-neon-green ml-1" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-neon-green font-code text-[10px] border border-neon-green/30 rounded px-1.5 py-0.5">{v.category}</span>
                  <span className="text-white/25 font-code text-[10px]">{v.level}</span>
                </div>
                <h3 className="text-white font-headline font-bold text-xl mb-2 group-hover:text-neon-green transition-colors">{v.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
              </div>
              <div className="shrink-0">
                <span className="text-white/20 font-code text-[10px]">{v.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Techniques grid ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-lg font-headline font-bold text-white mb-6">課程涵蓋技巧</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECHNIQUES.map((tc, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#111713]/40 border border-neon-green/8 hover:border-neon-green/20 transition-all">
                <span className="text-xl shrink-0">{tc.icon}</span>
                <div>
                  <h3 className="text-white/90 font-bold text-xs mb-1">{tc.title}</h3>
                  <p className="text-white/35 text-[11px] leading-relaxed">{tc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-4">
          <p className="text-white/30 font-code text-xs tracking-wider">想看真實盤面操作示範？</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/training/live" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-white border border-neon-green/30 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200">
              繼續：直播精華 →
            </a>
            <a href="/community" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 24px rgba(13,242,88,0.25)" }}>
              加入社群領完整教學 →
            </a>
          </div>
        </div>

      </div>
    </section>
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
