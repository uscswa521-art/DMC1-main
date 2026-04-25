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
    duration: "系列課程",
    level: "入門必看",
  },
  {
    title: "日內交易實戰思維",
    category: "思維認知",
    desc: "建立日內交易的正確心態框架，學習如何在高波動市場中保持紀律、管理情緒、穩定執行策略。",
    duration: "系列課程",
    level: "思維建立",
  },
];

const CONCEPTS = [
  { icon: "🏛️", title: "機構建倉邏輯", desc: "理解為何主力需要大量散戶流動性才能完成建倉，看懂「假突破」的本質目的。" },
  { icon: "🔍", title: "主力行為識別", desc: "透過成交量異動、盤口變化、K 線形態三重驗證，即時識別主力正在進行的操作。" },
  { icon: "🧠", title: "交易心理建設", desc: "克服 FOMO 與恐慌性止損，建立基於系統邏輯而非情緒的決策框架。" },
  { icon: "📋", title: "盤前計劃制定", desc: "學習如何在每次開盤前制定清晰的交易計劃，包括入場條件、止損位、目標位。" },
];

function CoreContent() {
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
            01 · 基礎必學
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug neon-glow">
            核心理論課
          </h1>
          <p className="text-white/40 font-body text-sm max-w-xl mx-auto leading-relaxed">
            交易最重要的不是技術指標，而是正確的思維框架。這裡是一切的起點。
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
              {/* Play button */}
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
              <div className="shrink-0 text-right">
                <span className="text-white/20 font-code text-[10px]">{v.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Key concepts ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-lg font-headline font-bold text-white mb-6">課程學習重點</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CONCEPTS.map((c, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#111713]/40 border border-neon-green/8 hover:border-neon-green/20 transition-all">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <h3 className="text-white/90 font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-4">
          <p className="text-white/30 font-code text-xs tracking-wider">準備好進入進階實戰了嗎？</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/training/skills" className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-white border border-neon-green/30 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200">
              繼續：實戰技術課 →
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
