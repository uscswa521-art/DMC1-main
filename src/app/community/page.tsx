"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";
import { Check } from "lucide-react";

const STATS = [
  { value: "2,000+", label: "活躍社群成員",   icon: "👥" },
  { value: "200+",   label: "免費教學影片",   icon: "🎬" },
  { value: "免費",   label: "加入零門檻",     icon: "✅" },
  { value: "每日",   label: "盤面策略分析",   icon: "📊" },
];

const BENEFITS = [
  { icon: "📈", title: "每日盤面策略分析",      desc: "David 每天親自分析市場結構，分享當日重點看盤邏輯與入場佈局。" },
  { icon: "🎬", title: "完整免費影片教學庫",     desc: "超過 200 部實戰教學影片，從零基礎到進階裸K全部免費開放。" },
  { icon: "⚡", title: "DMC 獨家指標禮包",      desc: "加入即送獨家定制 TradingView 指標組，包含流動性掃描與 VP 區塊。" },
  { icon: "🎥", title: "直播實況盤中解析",      desc: "定期舉辦實況直播，帶你即時看懂主力資金動向，實戰示範入場時機。" },
  { icon: "🤝", title: "社群群友互助交流",      desc: "匯集 2,000+ 名志同道合的交易者，相互分享覆盤、提問與成長。" },
  { icon: "🛡️", title: "風控心理輔助",         desc: "不只教技術，更分享交易心態與風控紀律，幫助你長期穩定留在市場。" },
];

const JOIN_STEPS = [
  { step: "01", title: "點擊下方按鈕",     desc: "選擇最適合你的社群平台加入" },
  { step: "02", title: "發送加入申請",     desc: "向管理員說明你的交易背景即可" },
  { step: "03", title: "獲取指標禮包",     desc: "管理員確認後即送完整教學資源" },
  { step: "04", title: "開始每日學習",     desc: "跟著 David 每日解析，逐步建立主力思維" },
];

function CommunityContent() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            加入社群 · Join Community
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug">
            加入 DMC 社群
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl mx-auto leading-relaxed">
            與 2,000+ 名交易者一同學習主力思維，<br className="hidden md:block" />
            每日免費獲取實戰盤面分析與策略教學。
          </p>
        </div>

        {/* ── Stats grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-24">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-[#111713]/60 border border-neon-green/12 hover:border-neon-green/30 transition-all duration-300 group"
            >
              <span className="text-3xl block mb-3">{s.icon}</span>
              <p
                className="text-neon-green font-headline font-black text-2xl leading-none mb-1 group-hover:scale-105 transition-transform"
                style={{ textShadow: "0 0 16px rgba(13,242,88,0.5)" }}
              >
                {s.value}
              </p>
              <p className="text-white/35 font-code text-[10px] tracking-wider leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Benefits ── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-2xl font-headline font-bold text-white mb-3 text-center">
            加入後你能得到什麼？
          </h2>
          <p className="text-white/35 font-code text-xs text-center tracking-wider mb-10">完全免費 · 無需付費</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <div
                key={i}
                className="bg-[#111713]/40 border border-neon-green/8 rounded-xl p-6 hover:border-neon-green/25 hover:bg-[#111713]/60 transition-all duration-300 group"
              >
                <span className="text-2xl block mb-3">{b.icon}</span>
                <h3 className="text-white/90 font-headline font-bold text-sm mb-2 group-hover:text-neon-green transition-colors">
                  {b.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── How to join ── */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-headline font-bold text-white mb-10 text-center">
            如何加入？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JOIN_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#111713]/40 border border-neon-green/8">
                <span
                  className="font-headline font-black text-3xl leading-none shrink-0"
                  style={{ color: "rgba(13,242,88,0.25)" }}
                >
                  {step.step}
                </span>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick checklist ── */}
        <div className="max-w-md mx-auto mb-16 p-6 rounded-2xl border border-neon-green/15 bg-neon-green/[0.03]">
          <p className="text-white/40 font-code text-[9px] tracking-widest uppercase mb-4 text-center">加入前確認</p>
          {[
            "不需要任何交易經驗",
            "不需要付費或訂閱",
            "不需要下載任何 App",
            "只需要一顆想學習的心",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 py-1.5">
              <Check size={11} strokeWidth={3} className="text-neon-green shrink-0" />
              <span className="text-white/65 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* ── CTA buttons ── */}
        <div className="text-center space-y-4">
          <p className="text-white/35 font-code text-xs tracking-wider">選擇你的加入方式</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 30px rgba(13,242,88,0.3)" }}
            >
              📱 加入 Telegram 社群
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-headline font-black text-sm text-white border border-neon-green/30 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200"
            >
              💬 私訊 David
            </a>
          </div>
          <p className="text-white/20 font-code text-[10px] pt-2">
            加入後立即獲取 DMC 獨家指標禮包 · 完全免費
          </p>
        </div>

      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><CommunityContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
