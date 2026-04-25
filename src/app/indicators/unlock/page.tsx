"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const STEPS = [
  {
    num: "01",
    label: "STEP ONE · EXCHANGE",
    title: "註冊 Bitunix 帳戶",
    desc: "點擊下方連結前往 Bitunix 交易所官網，完成免費帳戶註冊。Bitunix 是 DMC 官方合作交易所，擁有業界最低滑點。",
  },
  {
    num: "02",
    label: "STEP TWO · IDENTITY",
    title: "複製你的 UID",
    desc: "登入 Bitunix 後，在個人資料頁面找到你的專屬 UID（用戶識別碼），複製備用。",
  },
  {
    num: "03",
    label: "STEP THREE · UNLOCK",
    title: "加入社群並提交 UID",
    desc: "加入 DMC Telegram 社群，向管理員提交你的 Bitunix UID，核實後即刻獲取完整指標禮包與教學資源。",
  },
];

const UNLOCKED = [
  { label: "CORE PACKAGE",   title: "完整核心指標套件",  tag: "INDICATORS" },
  { label: "RISK TOOLS",     title: "風控工具套件",      tag: "RISK MGMT" },
  { label: "EDUCATION",      title: "200+ 部免費教學影片", tag: "VIDEOS" },
  { label: "DAILY ANALYSIS", title: "每日盤面策略分析",   tag: "DAILY" },
  { label: "COMMUNITY",      title: "社群群友互助支援",   tag: "MEMBERS" },
];

function DiagonalCreditList({
  items,
  accentRgb,
}: {
  items: { label: string; title: string; tag: string }[];
  accentRgb: string;
}) {
  const a = (op: number) => `rgba(${accentRgb},${op})`;

  return (
    <div className="relative overflow-hidden">

      {/* HUD grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage: `linear-gradient(${a(1)} 1px, transparent 1px), linear-gradient(90deg, ${a(1)} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Diagonal structural line (↗) + low-poly triangles + coordinate dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="100" x2="100" y2="0" stroke={a(0.14)} strokeWidth="0.5" />
        <circle cx="15" cy="85" r="1.0" fill={a(0.25)} />
        <circle cx="38" cy="62" r="1.3" fill={a(0.40)} />
        <circle cx="62" cy="38" r="1.3" fill={a(0.40)} />
        <circle cx="85" cy="15" r="1.0" fill={a(0.25)} />
        {/* Center crosshair at midpoint */}
        <circle cx="50" cy="50" r="2.0" fill={a(0.55)} />
        <polygon points="0,0 22,0 0,25"    fill={a(0.04)} />
        <polygon points="100,75 100,100 78,100" fill={a(0.03)} />
        <g stroke={a(0.30)} strokeWidth="0.5">
          <line x1="-2" y1="100" x2="5"   y2="100" />
          <line x1="0"  y1="97"  x2="0"   y2="103" />
          <line x1="95" y1="0"   x2="105" y2="0" />
          <line x1="100" y1="-3"  x2="100" y2="4" />
        </g>
      </svg>

      {/* Staggered entries */}
      <div className="relative z-10 pt-8 pb-6 pr-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group mb-7 last:mb-0"
            style={{ paddingLeft: `${10 + i * 18}px` }}
          >
            <div className="flex items-start gap-2.5">
              <span
                className="shrink-0 font-code leading-none mt-0.5 transition-colors duration-300"
                style={{ fontSize: 20, color: a(0.25) }}
              >
                [
              </span>
              <div className="min-w-0">
                <p
                  className="font-code text-[8px] tracking-[0.25em] uppercase mb-1 transition-colors duration-300"
                  style={{ color: a(0.35) }}
                >
                  {item.label}
                </p>
                <h3 className="font-headline font-bold text-white/85 text-sm leading-snug group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <span
                  className="mt-1.5 inline-block font-code text-[7px] tracking-widest px-1.5 py-0.5 uppercase"
                  style={{ color: a(0.18), border: `1px solid ${a(0.10)}` }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function UnlockContent() {
  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* ══ HEADER ══ */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-12">
        <div className="mb-12">
          <a
            href="/indicators"
            className="flex items-center gap-2 font-code text-[10px] tracking-widest text-white/25 hover:text-neon-green transition-colors uppercase"
          >
            <span>←</span>
            <span>[ 獨家指標 ]</span>
          </a>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-neon-green/50 font-code text-[11px]">[</span>
          <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">03 · 如何獲取 · HOW TO UNLOCK</span>
          <span className="text-neon-green/50 font-code text-[11px]">]</span>
        </div>
        <h1
          className="font-headline font-black text-white leading-none mb-4 neon-glow"
          style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
        >
          解鎖指標禮包
        </h1>
        <p className="text-white/35 font-body text-base max-w-lg leading-relaxed">
          完全免費 · 僅需 3 個步驟
        </p>
      </div>

      {/* ══ SPLIT ══ */}
      <div className="container mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-px bg-neon-green/5">

          {/* LEFT: steps */}
          <div className="bg-[#050508]">
            <div className="space-y-px">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className="group relative flex overflow-hidden border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/0 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-green/0 group-hover:border-neon-green/50 transition-colors duration-300 z-10" />
                  <div className="shrink-0 w-16 lg:w-24 bg-[#080d09] border-r border-neon-green/8 flex items-center justify-center py-10">
                    <span className="font-headline font-black text-neon-green/12 leading-none select-none" style={{ fontSize: 52 }}>
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1 p-6 lg:p-8 bg-[#080d09] group-hover:bg-[#0a1209] transition-colors duration-300">
                    <p className="text-neon-green font-code text-[10px] tracking-widest uppercase border-l-2 border-neon-green pl-2 mb-3">
                      {step.label}
                    </p>
                    <h2 className="font-headline font-bold text-white text-xl lg:text-2xl mb-3 group-hover:text-neon-green transition-colors duration-300">
                      {step.title}
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                  <div className="shrink-0 w-1 bg-neon-green/0 group-hover:bg-neon-green/40 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: diagonal credit list — what you get */}
          <div className="bg-[#080d09] lg:border-l border-neon-green/5">
            <div className="px-6 pt-6 pb-2">
              <p className="text-neon-green/25 font-code text-[8px] tracking-[0.3em] uppercase">[ 解鎖後你將獲得 ]</p>
            </div>
            <DiagonalCreditList items={UNLOCKED} accentRgb="13,242,88" />
          </div>

        </div>
      </div>

      {/* ══ CTA ══ */}
      <div className="container mx-auto px-6 lg:px-12 pb-20">
        <div className="relative border border-neon-green/15 bg-[#080d09] overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-neon-green/12"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }} />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-neon-green/12"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }} />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 lg:p-12">
            <div>
              <p className="text-neon-green/40 font-code text-[10px] tracking-widest uppercase mb-2">[ FREE · ZERO COST ]</p>
              <h3 className="font-headline font-bold text-white text-xl mb-1">立即開始，完全免費</h3>
              <p className="text-white/30 text-sm">無需信用卡 · 無月費 · 加入即送完整禮包</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <a
                href="https://www.bitunix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 32px rgba(13,242,88,0.3)" }}
              >
                立即註冊 Bitunix →
              </a>
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-4 font-headline font-black text-sm text-white border border-neon-green/25 bg-transparent hover:bg-neon-green/5 hover:border-neon-green/50 transition-all duration-200"
              >
                加入 DMC 社群
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function IndicatorsUnlockPageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><UnlockContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
