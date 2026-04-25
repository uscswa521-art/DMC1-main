"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const STEPS = [
  {
    num: "1",
    icon: "📝",
    title: "註冊 Bitunix 帳戶",
    desc: "點擊下方連結前往 Bitunix 交易所官網，完成免費帳戶註冊。Bitunix 是 DMC 官方合作交易所，擁有業界最低滑點。",
  },
  {
    num: "2",
    icon: "🆔",
    title: "複製你的 UID",
    desc: "登入 Bitunix 後，在個人資料頁面找到你的專屬 UID（用戶識別碼），複製備用。",
  },
  {
    num: "3",
    icon: "📲",
    title: "加入社群並提交 UID",
    desc: "加入 DMC Telegram 社群，向管理員提交你的 Bitunix UID，核實後即刻獲取完整指標禮包與教學資源。",
  },
];

const UNLOCKED_ITEMS = [
  "完整核心指標套件",
  "風控工具套件",
  "200+ 部免費教學影片",
  "每日盤面策略分析",
  "社群群友互助",
];

function UnlockPage() {
  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Back link ── */}
        <div className="mb-12">
          <a
            href="/indicators"
            className="inline-flex items-center gap-2 font-code text-xs tracking-widest text-white/30 hover:text-neon-green/70 transition-colors duration-200 uppercase"
          >
            ← 獨家指標
          </a>
        </div>

        {/* ── Header ── */}
        <div className="mb-16 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            03 · 如何獲取
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            解鎖指標禮包
          </h1>
          <p className="text-white/40 font-body text-base max-w-xl leading-relaxed">
            完全免費 · 僅需 3 個步驟
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mb-16">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="group relative bg-[#111713]/60 border border-neon-green/12 rounded-2xl p-8 hover:border-neon-green/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top, #0DF25808, transparent 65%)" }}
              />

              {/* Step number */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neon-green/30 mb-5">
                <span className="font-headline font-black text-lg text-neon-green">{step.num}</span>
              </div>

              <span className="text-4xl mb-4 block">{step.icon}</span>
              <h2 className="font-headline font-bold text-xl text-white/90 mb-3">{step.title}</h2>
              <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #0DF25860, transparent)" }}
              />
            </div>
          ))}
        </div>

        {/* ── What you get box ── */}
        <div className="max-w-5xl mb-16">
          <div className="bg-[#111713]/60 border border-neon-green/20 rounded-2xl p-8">
            <h3 className="font-headline font-bold text-lg text-white/90 mb-6">
              解鎖後你將獲得
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {UNLOCKED_ITEMS.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green flex-shrink-0" />
                  <span className="text-white/70 text-sm font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA buttons ── */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.bitunix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon-green to-[#9ED600] text-black font-headline font-bold text-sm px-8 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            立即註冊 Bitunix
          </a>
          <a
            href="/community"
            className="inline-flex items-center gap-3 border border-neon-green/40 text-neon-green font-headline font-bold text-sm px-8 py-4 rounded-full hover:border-neon-green/70 hover:bg-neon-green/5 hover:-translate-y-0.5 transition-all duration-200"
          >
            加入 DMC 社群
          </a>
        </div>

      </div>
    </section>
  );
}

export default function IndicatorsUnlockPageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><UnlockPage /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
