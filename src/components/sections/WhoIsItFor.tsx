"use client";

import { Bitcoin, TrendingUp, BarChart2 } from "lucide-react";

const MARKETS = [
  {
    icon: Bitcoin,
    title: "加密貨幣合約",
    desc: "BTC、ETH、山寨幣的永續合約市場。主力資金龐大，VP 邊緣訊號清晰，是 DMC 策略的主戰場。",
    color: "#F7931A",
  },
  {
    icon: TrendingUp,
    title: "外匯 / 指數",
    desc: "美元、歐元、恒指、納指⋯ 主力思維跨越市場邊界，同樣的邏輯，同樣的精準。",
    color: "#0DF258",
  },
  {
    icon: BarChart2,
    title: "期貨 / 商品",
    desc: "原油、黃金、期貨市場。只要有成交量分佈，VP 策略就能發揮作用。",
    color: "#C8E052",
  },
];


export function WhoIsItFor() {
  return (
    <>
      {/* ── Section 1: Markets ── */}
      <section className="relative py-24 bg-[#050508]">
        <div className="absolute inset-0 parallax-wireframe opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug">
              DMC 策略適用於哪些市場？
            </h2>
            <p className="text-muted-foreground text-base">
              主力思維跨越市場邊界 — 只要有成交量，就有主力，就有訊號。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MARKETS.map((m, i) => {
              const IconComp = m.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-[#0c1a0e] border border-neon-green/15 rounded-xl p-10 hover:border-neon-green/50 transition-all duration-500 flex flex-col items-center text-center gap-5 overflow-hidden"
                >
                  {/* Corner brackets */}
                  {["top-2 left-2 border-l border-t", "top-2 right-2 border-r border-t",
                    "bottom-2 left-2 border-l border-b", "bottom-2 right-2 border-r border-b"].map((cls, j) => (
                    <div key={j} className={`absolute w-4 h-4 ${cls} border-neon-green/30 group-hover:border-neon-green/70 transition-colors duration-300`} />
                  ))}

                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: `${m.color}18`, border: `1px solid ${m.color}40` }}
                  >
                    <IconComp size={36} style={{ color: m.color }} />
                  </div>

                  <h3 className="text-xl font-headline font-bold text-white">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>

                  <div className="h-px w-0 group-hover:w-full bg-neon-green/60 transition-all duration-700 mt-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Manifesto ── */}
      <section className="relative py-32 bg-[#080d09] overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #0DF258 0%, transparent 70%)" }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* ── Main manifesto block ── */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            {/* Badge */}
            <span className="inline-block text-xs font-code tracking-widest text-neon-green/60 uppercase border border-neon-green/20 rounded-full px-4 py-1.5 mb-8">
              我們的承諾
            </span>

            {/* Statement */}
            <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-6">
              <span className="text-white">沒有報單。</span>
              <br />
              <span className="text-white">沒有收費。</span>
              <br />
              <span className="text-neon-green" style={{ textShadow: "0 0 40px rgba(13,242,88,0.4)" }}>
                只有純粹的交易智識。
              </span>
            </h2>

            {/* Sub-statement */}
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              讓你真正看懂市場結構、掌握主力節奏——
              <br className="hidden md:block" />
              <span className="text-white/80 font-semibold">從此，交易不再靠運氣。</span>
            </p>
          </div>

          {/* ── 3 pillars ── */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-neon-green/8 rounded-2xl overflow-hidden border border-neon-green/10 mb-16">
            {[
              {
                icon: "🌐",
                title: "線上教學 × 線下實戰",
                desc: "跨越地域限制的學習社群，無論你在哪裡，都能與頂尖交易者同步進化。",
              },
              {
                icon: "⚡",
                title: "拒絕廢話，直接實戰",
                desc: "每一個技巧都源自真實盤面驗證，零理論包袱，學完即用，即刻應用於市場。",
              },
              {
                icon: "🧠",
                title: "以簡馭繁，看穿盤面",
                desc: "用最簡單的方法，讀懂最複雜的主力意圖。複雜的市場，清晰的決策。",
              },
            ].map((p, i) => (
              <div key={i} className="bg-[#080d09] p-8 group hover:bg-neon-green/[0.04] transition-colors duration-300">
                <span className="text-3xl block mb-4">{p.icon}</span>
                <h3 className="text-white font-headline font-bold text-base mb-3 group-hover:text-neon-green transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="text-center space-y-5">
            <p className="text-white/35 font-code text-sm tracking-wider">
              加入大衛，一起進化成頂尖交易者
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/community"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-headline font-black text-base text-black transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 40px rgba(13,242,88,0.35)" }}
              >
                立即免費加入社群
              </a>
              <a
                href="/training"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-headline font-black text-sm text-white border border-neon-green/25 bg-neon-green/[0.05] hover:bg-neon-green/10 hover:border-neon-green/50 transition-all duration-200"
              >
                先看免費教學 →
              </a>
            </div>
            <p className="text-white/20 font-code text-[11px] tracking-wider pt-1">
              加入即送 DMC 獨家指標禮包 · 完全免費 · 無需信用卡
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
