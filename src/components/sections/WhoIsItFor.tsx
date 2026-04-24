"use client";

import { Bitcoin, TrendingUp, BarChart2, Check, X } from "lucide-react";

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

const FIT_YES = [
  "對交易感興趣，但不知如何真正入門",
  "想理解市場結構，而不只靠感覺入場",
  "願意花時間學習系統化方法",
  "希望用紀律和風險管理保護本金",
];

const FIT_NO = [
  "想找「保證獲利」的訊號跟單",
  "不想學習，只想快速致富",
  "無法接受有損失的交易系統",
  "期望一夜暴富，不願付出努力",
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

      {/* ── Section 2: Fit / Not Fit ── */}
      <section className="relative py-24 bg-[#080d09]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug">
              這套系統，<span className="text-neon-green">適合你嗎？</span>
            </h2>
            <p className="text-muted-foreground text-base">
              DMC 並非適合所有人 — 這是我們精心打造的系統。<br />
              如果你認真對待交易，你會在這裡找到答案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* ✓ Good fit */}
            <div className="bg-[#060d07] border border-neon-green/25 rounded-xl p-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-neon-green/15">
                <div className="w-8 h-8 rounded-full bg-neon-green/15 flex items-center justify-center">
                  <Check size={16} className="text-neon-green" />
                </div>
                <h3 className="font-headline font-bold text-white text-lg">適合你，如果你⋯</h3>
              </div>
              {FIT_YES.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={15} className="text-neon-green mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* ✗ Not a fit */}
            <div className="bg-[#100608] border border-red-500/20 rounded-xl p-8 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-red-500/15">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X size={16} className="text-red-400" />
                </div>
                <h3 className="font-headline font-bold text-white text-lg">不適合你，如果你⋯</h3>
              </div>
              {FIT_NO.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X size={15} className="text-red-400 mt-0.5 shrink-0" />
                  <span className="text-white/60 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
