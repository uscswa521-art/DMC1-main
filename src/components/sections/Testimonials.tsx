"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TESTIMONIALS = [
  { pnl: "+517.78%", market: "BTC/USDT", user: "User_4921", seed: 1 },
  { pnl: "+430.20%", market: "ETH/USDT", user: "CryptoNinja", seed: 2 },
  { pnl: "+215.11%", market: "SOL/USDT", user: "DMC_Whale", seed: 3 },
  { pnl: "+892.44%", market: "PEPE/USDT", user: "DiamondHands", seed: 4 },
  { pnl: "+310.05%", market: "BNB/USDT", user: "MarketScanner", seed: 5 },
  { pnl: "+154.29%", market: "XRP/USDT", user: "LogicTrader", seed: 6 },
];

export function Testimonials() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section id="testimonials" className="relative py-20 bg-[#1A201C]">
      <div className="container px-6 lg:px-12">

        {/* ── Clickable header ── */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full group focus:outline-none"
        >
          <div className="flex flex-col items-center gap-4 mb-2">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                {t.testimonials.heading}
              </h2>
              <ChevronDown
                size={32}
                className={`text-neon-green transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
              />
            </div>

            {/* animated underline hint */}
            <div className={`h-px bg-neon-green/40 transition-all duration-500 ${open ? "w-full" : "w-24 group-hover:w-48"}`} />

            <p className={`text-xs font-code text-neon-green/50 tracking-widest transition-opacity duration-300 ${open ? "opacity-0 h-0" : "opacity-100"}`}>
              CLICK TO EXPAND ▾
            </p>
          </div>
        </button>

        {/* ── Collapsible cards ── */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            open ? "max-h-[9999px] opacity-100 mt-16" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((item, idx) => (
              <Card
                key={idx}
                className="break-inside-avoid bg-[#050508] border border-neon-green/20 group hover:border-neon-green transition-all duration-300"
              >
                <div className="p-4 border-b border-white/5 flex justify-between items-center">
                  <span className="font-code text-[10px] text-neon-green/50">PACKET_ID: 0x{idx}F9A</span>
                  <span className="font-code text-[10px] text-white/30 uppercase">VERIFIED</span>
                </div>

                <div className="p-2">
                  <img
                    src={`https://picsum.photos/seed/profit${item.seed}/600/${Math.floor(Math.random() * 400) + 300}`}
                    alt={`DMC加密貨幣交易社群群友獲利截圖 ${item.user} ${item.market} 獲利${item.pnl}`}
                    className="w-full h-auto rounded grayscale group-hover:grayscale-0 transition-all duration-500"
                    data-ai-hint="trading pnl screenshot"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-code text-muted-foreground uppercase">Profit Rate:</p>
                      <p className="text-3xl font-headline font-black text-neon-green">{item.pnl}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-code text-muted-foreground uppercase">Market:</p>
                      <p className="text-sm font-code text-white">{item.market}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                      <span className="text-[10px] font-code text-white/70">{item.user}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(s => (
                        <div key={s} className="w-1 h-3 bg-neon-green/20 group-hover:bg-neon-green/60" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Collapse button at bottom */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-xs font-code text-neon-green/50 hover:text-neon-green border border-neon-green/20 hover:border-neon-green/50 px-6 py-2.5 rounded transition-all duration-200"
            >
              <ChevronDown size={14} className="rotate-180" />
              COLLAPSE
              <ChevronDown size={14} className="rotate-180" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
