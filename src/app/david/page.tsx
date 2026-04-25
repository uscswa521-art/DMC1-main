"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

function DavidContent() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "早期",
      icon: "💼",
      title: "普通上班族",
      desc: t.about.log001,
      color: "rgba(255,255,255,0.25)",
    },
    {
      year: "摸索期",
      icon: "📉",
      title: "走過彎路",
      desc: t.about.log002,
      color: "#ff5555",
    },
    {
      year: "突破期",
      icon: "⚡",
      title: "研發 DMC",
      desc: t.about.log003,
      color: "#0DF258",
    },
    {
      year: "現在",
      icon: "🎯",
      title: "傳授心法",
      desc: t.about.log004,
      color: "#0DF258",
    },
  ];

  const philosophies = [
    {
      icon: "🧠",
      title: "主力思維優先",
      desc: "不畫支撐阻力線，不靠 RSI MACD，只看主力在哪裡堆積成交量、在哪裡吸籌、在哪裡準備拉升。",
    },
    {
      icon: "📊",
      title: "成交量說話",
      desc: "每一根 K 線背後都有資金故事。裸K + 成交量分布（VP）是讀懂主力行為最直接的語言。",
    },
    {
      icon: "🛡️",
      title: "風控是生存之道",
      desc: "交易的目標不是「一夜暴富」，而是長期留在市場。嚴格的止損紀律讓你在下一次機會出現時還在場上。",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#050508] text-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 parallax-wireframe opacity-10 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32">

        {/* ── Page header ── */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5">
            認識大衛 · Meet David
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white leading-snug">
            {t.about.heading}
          </h1>
          <p className="text-white/40 font-code text-sm max-w-xl mx-auto">
            從一名普通上班族，到研發出 DMC 主力思維交易系統的歷程
          </p>
        </div>

        {/* ── Profile card ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-[#111713]/60 border border-neon-green/15 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar placeholder */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="w-28 h-28 rounded-full border-2 border-neon-green/30 bg-neon-green/5 flex items-center justify-center shadow-[0_0_30px_rgba(13,242,88,0.15)]">
                <span className="text-5xl">👤</span>
              </div>
              <div className="mt-3 text-center">
                <p className="text-neon-green font-headline font-black text-lg">David</p>
                <p className="text-white/35 font-code text-[10px] tracking-widest">DMC 創辦人</p>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1 space-y-4">
              <div className="h-px w-12 bg-neon-green/40" />
              <p className="text-white/70 text-base leading-relaxed italic">
                「我花了 3 年和無數損失，才學會一件事：市場裡有兩種人——追蹤主力的人，和成為主力流動性的人。DMC 的目標，就是讓你成為前者。」
              </p>
              <p className="text-neon-green/60 font-code text-xs">— David，DMC 主力思維交易系統創辦人</p>
            </div>
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-headline font-bold text-white mb-10 text-center">
            大衛的交易旅程
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-neon-green/10" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-6 pl-0">
                  {/* Dot */}
                  <div className="relative shrink-0 w-12 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full border flex items-center justify-center text-xl z-10 bg-[#050508]"
                      style={{ borderColor: item.color + "44", boxShadow: `0 0 14px ${item.color}22` }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-code text-[10px] tracking-widest uppercase px-2 py-0.5 rounded border"
                        style={{ color: item.color, borderColor: item.color + "33", background: item.color + "0d" }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-white font-headline font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Philosophy ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-headline font-bold text-white mb-8 text-center">
            David 的交易哲學
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {philosophies.map((p, i) => (
              <div
                key={i}
                className="bg-[#111713]/50 border border-neon-green/10 rounded-xl p-6 hover:border-neon-green/30 transition-all duration-300 group"
              >
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="text-white font-headline font-bold text-base mb-2 group-hover:text-neon-green transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center space-y-4">
          <p className="text-white/40 font-code text-sm">準備好了解 DMC 系統了嗎？</p>
          <a
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 30px rgba(13,242,88,0.3)" }}
          >
            加入 DMC 社群 →
          </a>
        </div>

      </div>
    </section>
  );
}

export default function DavidPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><DavidContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
