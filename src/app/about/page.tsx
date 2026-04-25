"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const DMC_PILLARS = [
  {
    icon: "⚡",
    code: "PILLAR 01",
    title: "主力思維交易系統",
    subtitle: "Smart Money Concept",
    desc: "DMC 不教你畫支撐阻力線，也不靠 RSI、MACD 等延遲指標。我們教你直接讀懂主力意圖——主力在哪裡建倉、在哪裡出貨，讓你跟著聰明錢走，而非成為主力的流動性來源。",
    points: ["主力建倉識別", "流動性池追蹤", "聰明錢跟隨策略"],
  },
  {
    icon: "📊",
    code: "PILLAR 02",
    title: "成交量分布分析",
    subtitle: "Volume Profile (VP)",
    desc: "透過 Volume Profile 即時追蹤資金流向，精準識別 POC（最大成交量價位）與 Value Area 邊緣。在主力完成吸籌前進場，捕捉突破前的最佳入場時機。",
    points: ["POC 價位判讀", "吸籌 / 派發區識別", "突破前精準布局"],
  },
  {
    icon: "🎯",
    code: "PILLAR 03",
    title: "裸K精準判讀",
    subtitle: "Price Action Reading",
    desc: "回歸價格本質，排除所有延遲指標的雜訊。通過 K 線形態與成交量交叉驗證，一眼辨別真突破與假訊號，大幅降低被主力掃損的頻率。",
    points: ["真假突破辨別", "K 線形態判讀", "量價交叉驗證"],
  },
];

const COMPARE = [
  {
    label: "信號時效",
    dmc: "前瞻性識別，在突破前入場",
    other: "事後確認，滯後 1–3 根 K 線",
  },
  {
    label: "資金結構",
    dmc: "追蹤主力「正在做什麼」",
    other: "解讀主力「過去做了什麼」",
  },
  {
    label: "止損頻率",
    dmc: "動態防守位，低止損頻率",
    other: "靜態關鍵位，反覆被掃損",
  },
];

function WhatIsDMCContent() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Header ── */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            甚麼是 DMC？· What is DMC?
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug neon-glow">
            主力思維交易系統
          </h1>
          <p className="text-white/45 font-body text-base max-w-2xl mx-auto leading-relaxed">
            DMC（Dominant Market Concept）是一套以「跟隨主力資金」為核心的實戰交易體系，
            整合成交量分布分析與裸K判讀，讓你在市場中站在主力那一側。
          </p>
        </div>

        {/* ── Core definition ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative p-8 rounded-2xl border border-neon-green/20 bg-neon-green/[0.03]">
            <div className="absolute -top-3 left-8">
              <span className="bg-[#050508] px-3 text-neon-green font-code text-[10px] tracking-widest uppercase border border-neon-green/30 rounded px-2 py-0.5">
                核心主張
              </span>
            </div>
            <p className="text-white/75 text-base leading-relaxed text-center">
              市場裡只有兩種角色：
              <span className="text-neon-green font-bold mx-1">主力的追蹤者</span>
              ，和
              <span className="text-red-400 font-bold mx-1">主力的流動性來源</span>。
              <br className="hidden md:block" />
              DMC 的目標，就是讓你永遠站在前者那一側。
            </p>
          </div>
        </div>

        {/* ── Three pillars ── */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-2xl font-headline font-bold text-white mb-3 text-center">
            DMC 三大核心支柱
          </h2>
          <p className="text-white/30 font-code text-xs text-center tracking-wider mb-10">
            三個維度相互驗證，缺一不可
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DMC_PILLARS.map((p, i) => (
              <div
                key={i}
                className="group relative bg-[#111713]/50 border border-neon-green/10 rounded-2xl p-7 hover:border-neon-green/35 hover:bg-[#111713]/70 transition-all duration-300 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(13,242,88,0.05), transparent 70%)" }} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <span className="text-white/20 font-code text-[10px] tracking-widest">{p.code}</span>
                  </div>
                  <h3 className="text-white font-headline font-bold text-lg mb-0.5 group-hover:text-neon-green transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-neon-green/50 font-code text-[10px] tracking-wider mb-4">{p.subtitle}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="space-y-1.5 pt-4 border-t border-neon-green/8">
                    {p.points.map((pt, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neon-green/60 shrink-0" />
                        <span className="text-white/55 text-xs">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DMC vs Others ── */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-2xl font-headline font-bold text-white mb-3 text-center">
            DMC vs SMC / SNR
          </h2>
          <p className="text-white/30 font-code text-xs text-center tracking-wider mb-10">
            為什麼專業交易者選擇 DMC？
          </p>

          <div className="rounded-2xl overflow-hidden border border-neon-green/12">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-[#0a0d0a] border-b border-neon-green/10">
              <div className="p-4 text-white/25 font-code text-[10px] tracking-widest uppercase">維度</div>
              <div className="p-4 text-neon-green font-code text-[10px] tracking-widest uppercase border-l border-neon-green/10">DMC ✓</div>
              <div className="p-4 text-white/25 font-code text-[10px] tracking-widest uppercase border-l border-neon-green/10">SMC / SNR ✕</div>
            </div>
            {COMPARE.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i < COMPARE.length - 1 ? "border-b border-neon-green/8" : ""}`}
              >
                <div className="p-4 bg-[#050508]">
                  <p className="text-white/50 text-xs font-bold">{row.label}</p>
                </div>
                <div className="p-4 bg-neon-green/[0.03] border-l border-neon-green/10">
                  <p className="text-neon-green/80 text-xs leading-snug">{row.dmc}</p>
                </div>
                <div className="p-4 bg-[#050508] border-l border-neon-green/10">
                  <p className="text-white/30 text-xs leading-snug">{row.other}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Applicable markets ── */}
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <p className="text-white/25 font-code text-[10px] tracking-widest uppercase mb-4">適用市場</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["加密貨幣合約", "外匯 Forex", "美股期貨", "黃金 XAU", "指數期貨"].map((m) => (
              <span
                key={m}
                className="px-3 py-1.5 rounded-full border border-neon-green/20 bg-neon-green/[0.04] text-neon-green/60 font-code text-xs"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-4">
          <p className="text-white/35 font-code text-xs tracking-wider">想深入了解 DMC？</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/david"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-white border border-neon-green/30 bg-neon-green/5 hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200"
            >
              認識大衛 →
            </a>
            <a
              href="/community"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 24px rgba(13,242,88,0.3)" }}
            >
              加入 DMC 社群 →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><WhatIsDMCContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
