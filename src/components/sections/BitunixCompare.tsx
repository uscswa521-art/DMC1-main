"use client";

import { useState, useEffect } from "react";
import { Check, X, Minus, ArrowRight, Zap, Shield, TrendingUp, Users, ChevronRight } from "lucide-react";

// ── Types ──────────────────────────────────────────────────
type CellValue = "best" | "good" | "mid" | "bad" | "none";

interface Cell { value: CellValue; text: string }

interface Row {
  label: string;
  sub?: string;
  bitunix:  Cell;
  binance:  Cell;
  bybit:    Cell;
  okx:      Cell;
  bitget:   Cell;
}

type ExchangeKey = "binance" | "bybit" | "okx" | "bitget";

// ── Data ───────────────────────────────────────────────────
const ROWS: Row[] = [
  {
    label: "Maker 手續費", sub: "掛單費率",
    bitunix: { value: "best", text: "極低" },
    binance: { value: "mid",  text: "標準" },
    bybit:   { value: "mid",  text: "標準" },
    okx:     { value: "mid",  text: "標準" },
    bitget:  { value: "mid",  text: "標準" },
  },
  {
    label: "Taker 手續費", sub: "市價費率",
    bitunix: { value: "best", text: "極低" },
    binance: { value: "mid",  text: "標準" },
    bybit:   { value: "mid",  text: "標準" },
    okx:     { value: "mid",  text: "標準" },
    bitget:  { value: "mid",  text: "標準" },
  },
  {
    label: "最高槓桿", sub: "合約交易",
    bitunix: { value: "best", text: "125×" },
    binance: { value: "best", text: "125×" },
    bybit:   { value: "good", text: "100×" },
    okx:     { value: "good", text: "100×" },
    bitget:  { value: "good", text: "100×" },
  },
  {
    label: "執行速度", sub: "訂單響應",
    bitunix: { value: "best", text: "極速" },
    binance: { value: "good", text: "快速" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "滑點控制", sub: "價格偏差",
    bitunix: { value: "best", text: "優秀" },
    binance: { value: "good", text: "良好" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "平台穩定性", sub: "宕機頻率",
    bitunix: { value: "best", text: "99.9%" },
    binance: { value: "mid",  text: "偶有宕機" },
    bybit:   { value: "good", text: "穩定" },
    okx:     { value: "mid",  text: "偶有宕機" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "DMC 專屬返傭", sub: "社群優惠",
    bitunix: { value: "best", text: "✦ 獨家" },
    binance: { value: "none", text: "無" },
    bybit:   { value: "none", text: "無" },
    okx:     { value: "none", text: "無" },
    bitget:  { value: "none", text: "無" },
  },
  {
    label: "新手友善程度", sub: "入門難度",
    bitunix: { value: "best", text: "極易上手" },
    binance: { value: "bad",  text: "介面複雜" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "bad",  text: "介面複雜" },
    bitget:  { value: "good", text: "較易" },
  },
  {
    label: "客服支援", sub: "回應質素",
    bitunix: { value: "best", text: "即時回覆" },
    binance: { value: "mid",  text: "慢" },
    bybit:   { value: "good", text: "良好" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "存提款速度", sub: "資金流動性",
    bitunix: { value: "best", text: "極快" },
    binance: { value: "good", text: "快速" },
    bybit:   { value: "good", text: "快速" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
];

const ADVANTAGES = [
  { icon: Zap,        title: "閃電執行速度", desc: "毫秒級訂單撮合，確保你在最佳價格成交，零延遲、零拖延。",           stat: "< 5ms",  statLabel: "平均延遲" },
  { icon: Shield,     title: "極低交易費用", desc: "業界最具競爭力的手續費結構，配合 DMC 專屬返傭，大幅降低交易成本。", stat: "最低",   statLabel: "手續費率" },
  { icon: TrendingUp, title: "精準滑點控制", desc: "深度流動性池保障下單滑點極低，特別適合日內短線及高頻交易策略。",   stat: "≈ 0",   statLabel: "滑點偏差" },
  { icon: Users,      title: "DMC 社群獨家福利", desc: "透過 DMC 專屬連結註冊，享有其他平台無法取得的額外返傭及優惠。", stat: "獨家",  statLabel: "DMC 返傭" },
];

const EXCHANGES: { key: ExchangeKey; name: string; color: string }[] = [
  { key: "binance", name: "Binance", color: "#F0B90B" },
  { key: "bybit",   name: "Bybit",   color: "#F7A600" },
  { key: "okx",     name: "OKX",     color: "#FFFFFF" },
  { key: "bitget",  name: "Bitget",  color: "#00CED1" },
];

// ── Helpers ────────────────────────────────────────────────
function outcomeOf(b: Cell, c: Cell): "win" | "draw" | "lose" {
  const rank = { best: 4, good: 3, mid: 2, bad: 1, none: 0 };
  const d = rank[b.value] - rank[c.value];
  return d > 0 ? "win" : d < 0 ? "lose" : "draw";
}

function CellBadge({ cell, highlight }: { cell: Cell; highlight: boolean }) {
  const color = highlight
    ? cell.value === "best" ? "#0DF258"
      : cell.value === "good" ? "rgba(13,242,88,0.65)"
      : "rgba(13,242,88,0.4)"
    : cell.value === "bad"  ? "rgba(255,80,80,0.6)"
    : cell.value === "none" ? "rgba(255,255,255,0.2)"
    : "rgba(255,255,255,0.45)";

  const icon = cell.value === "none"
    ? <X size={11} strokeWidth={2.5} />
    : cell.value === "best"
    ? <Check size={11} strokeWidth={3} />
    : <Minus size={11} strokeWidth={2} />;

  return (
    <div className="flex flex-col items-center gap-1">
      <span style={{ color }}>{icon}</span>
      <span className="text-[11px] font-bold" style={{ color }}>{cell.text}</span>
    </div>
  );
}

// ── VS Modal ───────────────────────────────────────────────
function VSModal({ exKey, onClose }: { exKey: ExchangeKey; onClose: () => void }) {
  const ex = EXCHANGES.find(e => e.key === exKey)!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const wins  = ROWS.filter(r => outcomeOf(r.bitunix, r[exKey]) === "win").length;
  const draws = ROWS.filter(r => outcomeOf(r.bitunix, r[exKey]) === "draw").length;
  const loses = ROWS.filter(r => outcomeOf(r.bitunix, r[exKey]) === "lose").length;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "rgba(5,5,8,0.97)",
          border: "1px solid rgba(13,242,88,0.25)",
          boxShadow: "0 0 80px rgba(13,242,88,0.15), 0 40px 100px rgba(0,0,0,0.8)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 px-6 py-4 flex items-center justify-between"
          style={{ background: "rgba(5,5,8,0.98)", borderBottom: "1px solid rgba(13,242,88,0.12)" }}>
          <div className="flex items-center gap-3">
            <span className="font-headline font-black text-lg" style={{ color: "#0DF258" }}>BITUNIX</span>
            <span className="text-white/30 font-code text-sm">VS</span>
            <span className="font-headline font-black text-lg" style={{ color: ex.color }}>{ex.name}</span>
          </div>
          <button onClick={onClose}
            className="text-white/40 hover:text-white transition-colors font-code text-xl leading-none">✕</button>
        </div>

        {/* Score summary */}
        <div className="px-6 py-5 grid grid-cols-3 gap-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-center p-3 rounded-xl" style={{ background: "rgba(13,242,88,0.08)", border: "1px solid rgba(13,242,88,0.2)" }}>
            <div className="text-3xl font-headline font-black" style={{ color: "#0DF258" }}>{wins}</div>
            <div className="text-[10px] font-code text-neon-green/50 tracking-wider mt-1">BITUNIX 勝出</div>
          </div>
          <div className="text-center p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-3xl font-headline font-black text-white/40">{draws}</div>
            <div className="text-[10px] font-code text-white/25 tracking-wider mt-1">平手</div>
          </div>
          <div className="text-center p-3 rounded-xl" style={{ background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.15)" }}>
            <div className="text-3xl font-headline font-black" style={{ color: "rgba(255,80,80,0.7)" }}>{loses}</div>
            <div className="text-[10px] font-code tracking-wider mt-1" style={{ color: "rgba(255,80,80,0.4)" }}>{ex.name} 勝出</div>
          </div>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_1px_1fr] px-6 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-center">
            <span className="font-headline font-black text-sm tracking-wider" style={{ color: "#0DF258" }}>BITUNIX</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="text-center">
            <span className="font-headline font-black text-sm tracking-wider" style={{ color: ex.color }}>{ex.name}</span>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/[0.04]">
          {ROWS.map((row) => {
            const outcome = outcomeOf(row.bitunix, row[exKey]);
            return (
              <div key={row.label} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-6 py-4"
                style={{ background: outcome === "win" ? "rgba(13,242,88,0.02)" : "transparent" }}>

                {/* Bitunix cell */}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold"
                    style={{ color: outcome === "win" ? "#0DF258" : outcome === "lose" ? "rgba(255,80,80,0.55)" : "rgba(255,255,255,0.4)" }}>
                    {row.bitunix.text}
                  </span>
                  {outcome === "win" && (
                    <span className="text-[9px] font-code px-1.5 py-0.5 rounded"
                      style={{ background: "rgba(13,242,88,0.12)", color: "rgba(13,242,88,0.7)", border: "1px solid rgba(13,242,88,0.2)" }}>
                      ✦ 勝出
                    </span>
                  )}
                </div>

                {/* Center label */}
                <div className="flex flex-col items-center gap-0.5 min-w-[80px]">
                  <span className="text-white/70 font-headline font-bold text-xs text-center">{row.label}</span>
                  {row.sub && <span className="text-white/25 font-code text-[9px]">{row.sub}</span>}
                  {/* Win indicator bar */}
                  <div className="flex items-center gap-1 mt-1">
                    <div className="h-1 w-8 rounded-full"
                      style={{ background: outcome === "win" ? "rgba(13,242,88,0.7)" : outcome === "lose" ? "rgba(255,80,80,0.3)" : "rgba(255,255,255,0.15)" }} />
                    <div className="h-1 w-8 rounded-full"
                      style={{ background: outcome === "lose" ? `${ex.color}99` : outcome === "win" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.15)" }} />
                  </div>
                </div>

                {/* Competitor cell */}
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold"
                    style={{ color: outcome === "lose" ? ex.color : "rgba(255,255,255,0.3)" }}>
                    {row[exKey].text}
                  </span>
                  {outcome === "lose" && (
                    <span className="text-[9px] font-code px-1.5 py-0.5 rounded"
                      style={{ background: `${ex.color}15`, color: `${ex.color}99`, border: `1px solid ${ex.color}30` }}>
                      勝出
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-6 text-center" style={{ borderTop: "1px solid rgba(13,242,88,0.1)" }}>
          <p className="text-white/35 text-xs mb-4 font-code">
            BITUNIX 在 {ROWS.length} 項指標中勝出 <span style={{ color: "#0DF258", fontWeight: 700 }}>{wins}</span> 項
          </p>
          <a href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-headline font-black text-sm text-black transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg,#b8e000,#0DF258)", boxShadow: "0 0 30px rgba(13,242,88,0.35)" }}>
            立即前往 BITUNIX 開戶
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────
export function BitunixCompare() {
  const [activeModal, setActiveModal] = useState<ExchangeKey | null>(null);

  return (
    <div className="min-h-screen bg-[#050508]">

      {/* Modal */}
      {activeModal && <VSModal exKey={activeModal} onClose={() => setActiveModal(null)} />}

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 parallax-wireframe opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-neon-green/5 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-green/25 bg-neon-green/5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-neon-green font-code text-xs tracking-widest uppercase">BITUNIX 專區</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black text-white mb-6 leading-tight">
            為什麼頂尖交易員<br />
            <span style={{ color: "#0DF258", textShadow: "0 0 40px rgba(13,242,88,0.5), 0 0 80px rgba(13,242,88,0.2)" }}>
              選擇 BITUNIX？
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            用數據說話，而非廣告詞。<br className="hidden md:block" />
            點擊任何一個交易所，即時查看與 BITUNIX 的鮮明對比。
          </p>

          {/* Clickable exchange cards */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {EXCHANGES.map((ex) => (
              <button
                key={ex.key}
                onClick={() => setActiveModal(ex.key)}
                className="group relative flex items-center gap-3 px-6 py-3.5 rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: `${ex.color}30`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${ex.color}12`; (e.currentTarget as HTMLElement).style.borderColor = `${ex.color}60`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = `${ex.color}30`; }}
              >
                <span className="font-headline font-black text-sm" style={{ color: ex.color }}>{ex.name}</span>
                <span className="font-code text-[10px] text-white/30 group-hover:text-white/60 transition-colors">點擊對比 →</span>
              </button>
            ))}
          </div>
          <p className="text-white/20 font-code text-[10px] tracking-widest mt-5">TAP ANY EXCHANGE TO COMPARE VS BITUNIX</p>
        </div>
      </section>

      {/* ── Advantage Cards ── */}
      <section className="py-16 bg-[#080d09]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div key={adv.title}
                  className="p-6 rounded-xl border border-neon-green/12 bg-neon-green/[0.03] hover:border-neon-green/30 hover:bg-neon-green/[0.06] transition-all duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-neon-green/10 border border-neon-green/15">
                      <Icon size={18} className="text-neon-green" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-headline font-black text-neon-green leading-none"
                        style={{ textShadow: "0 0 20px rgba(13,242,88,0.4)" }}>{adv.stat}</div>
                      <div className="text-[10px] font-code text-white/30 tracking-wider mt-0.5">{adv.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-headline font-bold text-white text-base mb-2">{adv.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full Comparison Table ── */}
      <section className="py-20 bg-[#050508]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">全面對比一覽</h2>
            <p className="text-white/35 font-code text-sm tracking-wider">COMPREHENSIVE COMPARISON · 10 KEY METRICS</p>
            <p className="text-white/25 font-code text-xs mt-2">點擊交易所名稱可查看詳細對比 ↓</p>
          </div>

          <div className="relative overflow-x-auto rounded-2xl border border-neon-green/15"
            style={{ boxShadow: "0 0 60px rgba(13,242,88,0.08), 0 40px 80px rgba(0,0,0,0.5)" }}>

            {/* Bitunix column bg */}
            <div className="absolute inset-y-0 pointer-events-none"
              style={{
                left: "calc(140px + 0px)",
                width: "calc((100% - 140px) / 5)",
                background: "linear-gradient(to bottom, rgba(13,242,88,0.07) 0%, rgba(13,242,88,0.04) 100%)",
                borderLeft: "1px solid rgba(13,242,88,0.2)",
                borderRight: "1px solid rgba(13,242,88,0.1)",
              }} />

            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="w-[140px] p-5 text-left">
                    <span className="text-white/20 font-code text-[10px] tracking-widest uppercase">指標</span>
                  </th>
                  {/* BITUNIX header */}
                  <th className="p-5 text-center" style={{ width: "calc((100% - 140px) / 5)" }}>
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                      <span className="font-headline font-black text-sm tracking-wider"
                        style={{ color: "#0DF258", textShadow: "0 0 15px rgba(13,242,88,0.6)" }}>BITUNIX</span>
                      <span className="text-[9px] font-code text-neon-green/50 tracking-widest">推薦</span>
                    </div>
                  </th>
                  {/* Competitor headers — clickable */}
                  {EXCHANGES.map((ex) => (
                    <th key={ex.key} className="p-5 text-center cursor-pointer group/th"
                      style={{ width: "calc((100% - 140px) / 5)" }}
                      onClick={() => setActiveModal(ex.key)}>
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-headline font-bold text-sm text-white/25 group-hover/th:text-white/60 transition-colors">{ex.name}</span>
                        <span className="text-[9px] font-code text-white/15 group-hover/th:text-white/35 transition-colors tracking-wider">點擊對比</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="p-5">
                      <div className="font-headline font-bold text-white/80 text-sm">{row.label}</div>
                      {row.sub && <div className="text-white/30 font-code text-[10px] mt-0.5 tracking-wider">{row.sub}</div>}
                    </td>
                    <td className="p-5 text-center"><CellBadge cell={row.bitunix} highlight={true} /></td>
                    {EXCHANGES.map((ex) => (
                      <td key={ex.key} className="p-5 text-center cursor-pointer hover:bg-white/[0.03] transition-colors"
                        onClick={() => setActiveModal(ex.key)}>
                        <CellBadge cell={row[ex.key]} highlight={false} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="border-t border-neon-green/15 bg-neon-green/[0.03]">
                  <td className="p-5">
                    <span className="text-white/40 font-code text-[10px] tracking-widest uppercase">綜合評分</span>
                  </td>
                  {[
                    { score: "9.8", stars: "★★★★★", color: "#0DF258", glow: true },
                    { score: "7.2", stars: "★★★★☆", color: "rgba(255,255,255,0.25)", glow: false },
                    { score: "7.0", stars: "★★★★☆", color: "rgba(255,255,255,0.25)", glow: false },
                    { score: "6.8", stars: "★★★☆☆", color: "rgba(255,255,255,0.25)", glow: false },
                    { score: "6.5", stars: "★★★☆☆", color: "rgba(255,255,255,0.25)", glow: false },
                  ].map((s, i) => (
                    <td key={i} className="p-5 text-center">
                      <div className="font-headline font-black text-xl"
                        style={{ color: s.color, textShadow: s.glow ? "0 0 20px rgba(13,242,88,0.5)" : "none" }}>
                        {s.score}
                      </div>
                      <div className="text-[9px] mt-0.5" style={{ color: s.glow ? "rgba(13,242,88,0.5)" : "rgba(255,255,255,0.15)" }}>
                        {s.stars}
                      </div>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>

            <div className="px-5 py-3 border-t border-white/5">
              <p className="text-white/20 font-code text-[9px] tracking-wider">
                ＊ 以上對比為概念性評估，實際數據因市場情況而異。DMC 不承擔任何因此作出的投資決策責任。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#080d09]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <p className="text-white/30 font-code text-xs tracking-widest uppercase mb-4">立即行動</p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
            透過 DMC 專屬連結<br />
            <span style={{ color: "#0DF258" }}>享額外返傭優惠</span>
          </h2>
          <p className="text-white/40 text-sm mb-10 max-w-md mx-auto">
            其他平台沒有的 DMC 獨家福利，只需透過以下連結註冊即可自動獲得。
          </p>
          <a href="#"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-headline font-black text-lg text-black transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #b8e000, #0DF258)", boxShadow: "0 0 40px rgba(13,242,88,0.4), 0 0 80px rgba(13,242,88,0.15)" }}>
            立即前往 BITUNIX 開戶
            <ArrowRight size={20} className="shrink-0" />
          </a>
          <p className="text-white/20 font-code text-[10px] mt-5 tracking-wider">
            DMC 專屬返傭 · 完全免費 · 無隱藏費用
          </p>
        </div>
      </section>

    </div>
  );
}
