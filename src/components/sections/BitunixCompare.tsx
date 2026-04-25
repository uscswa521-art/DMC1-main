"use client";

import { Check, X, Minus, ArrowRight, Zap, Shield, TrendingUp, Users, HeadphonesIcon, Layers } from "lucide-react";

// ── Types ──────────────────────────────────────────────────
type CellValue = "best" | "good" | "mid" | "bad" | "none";

interface Row {
  label: string;
  sub?: string;
  bitunix: { value: CellValue; text: string };
  binance: { value: CellValue; text: string };
  bybit:   { value: CellValue; text: string };
  okx:     { value: CellValue; text: string };
  bitget:  { value: CellValue; text: string };
}

// ── Data ───────────────────────────────────────────────────
const ROWS: Row[] = [
  {
    label: "Maker 手續費",
    sub: "掛單費率",
    bitunix: { value: "best", text: "極低" },
    binance: { value: "mid",  text: "標準" },
    bybit:   { value: "mid",  text: "標準" },
    okx:     { value: "mid",  text: "標準" },
    bitget:  { value: "mid",  text: "標準" },
  },
  {
    label: "Taker 手續費",
    sub: "市價費率",
    bitunix: { value: "best", text: "極低" },
    binance: { value: "mid",  text: "標準" },
    bybit:   { value: "mid",  text: "標準" },
    okx:     { value: "mid",  text: "標準" },
    bitget:  { value: "mid",  text: "標準" },
  },
  {
    label: "最高槓桿",
    sub: "合約交易",
    bitunix: { value: "best", text: "125×" },
    binance: { value: "best", text: "125×" },
    bybit:   { value: "good", text: "100×" },
    okx:     { value: "good", text: "100×" },
    bitget:  { value: "good", text: "100×" },
  },
  {
    label: "執行速度",
    sub: "訂單響應",
    bitunix: { value: "best", text: "極速" },
    binance: { value: "good", text: "快速" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "滑點控制",
    sub: "價格偏差",
    bitunix: { value: "best", text: "優秀" },
    binance: { value: "good", text: "良好" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "平台穩定性",
    sub: "宕機頻率",
    bitunix: { value: "best", text: "99.9%" },
    binance: { value: "mid",  text: "偶有宕機" },
    bybit:   { value: "good", text: "穩定" },
    okx:     { value: "mid",  text: "偶有宕機" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "DMC 專屬返傭",
    sub: "社群優惠",
    bitunix: { value: "best", text: "✦ 獨家" },
    binance: { value: "none", text: "無" },
    bybit:   { value: "none", text: "無" },
    okx:     { value: "none", text: "無" },
    bitget:  { value: "none", text: "無" },
  },
  {
    label: "新手友善程度",
    sub: "入門難度",
    bitunix: { value: "best", text: "極易上手" },
    binance: { value: "bad",  text: "介面複雜" },
    bybit:   { value: "mid",  text: "一般" },
    okx:     { value: "bad",  text: "介面複雜" },
    bitget:  { value: "good", text: "較易" },
  },
  {
    label: "客服支援",
    sub: "回應質素",
    bitunix: { value: "best", text: "即時回覆" },
    binance: { value: "mid",  text: "慢" },
    bybit:   { value: "good", text: "良好" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
  {
    label: "存提款速度",
    sub: "資金流動性",
    bitunix: { value: "best", text: "極快" },
    binance: { value: "good", text: "快速" },
    bybit:   { value: "good", text: "快速" },
    okx:     { value: "mid",  text: "一般" },
    bitget:  { value: "mid",  text: "一般" },
  },
];

const ADVANTAGES = [
  {
    icon: Zap,
    title: "閃電執行速度",
    desc: "毫秒級訂單撮合，確保你在最佳價格成交，零延遲、零拖延。",
    stat: "< 5ms",
    statLabel: "平均延遲",
  },
  {
    icon: Shield,
    title: "極低交易費用",
    desc: "業界最具競爭力的手續費結構，配合 DMC 專屬返傭，大幅降低交易成本。",
    stat: "最低",
    statLabel: "手續費率",
  },
  {
    icon: TrendingUp,
    title: "精準滑點控制",
    desc: "深度流動性池保障下單滑點極低，特別適合日內短線及高頻交易策略。",
    stat: "≈ 0",
    statLabel: "滑點偏差",
  },
  {
    icon: Users,
    title: "DMC 社群獨家福利",
    desc: "透過 DMC 專屬連結註冊，享有其他平台無法取得的額外返傭及優惠。",
    stat: "獨家",
    statLabel: "DMC 返傭",
  },
];

// ── Cell renderer ──────────────────────────────────────────
function CellIcon({ value }: { value: CellValue }) {
  if (value === "best") return <Check size={14} className="mx-auto text-[#0DF258]" strokeWidth={3} />;
  if (value === "none") return <X size={14} className="mx-auto text-white/25" strokeWidth={2.5} />;
  return <Minus size={14} className="mx-auto text-white/35" strokeWidth={2} />;
}

function cellStyle(value: CellValue, isBitunix: boolean): React.CSSProperties {
  if (isBitunix) {
    return {
      color: value === "best" ? "#0DF258" : value === "good" ? "rgba(13,242,88,0.7)" : "rgba(13,242,88,0.5)",
      fontWeight: 700,
    };
  }
  return { color: value === "bad" ? "rgba(255,80,80,0.55)" : "rgba(255,255,255,0.35)" };
}

// ── Main Component ─────────────────────────────────────────
export function BitunixCompare() {
  const EXCHANGES = ["BITUNIX", "Binance", "Bybit", "OKX", "Bitget"];

  return (
    <div className="min-h-screen bg-[#050508]">

      {/* ── Hero ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 parallax-wireframe opacity-[0.06] pointer-events-none" />
        <div className="absolute inset-0 scanline-bg opacity-[0.06] pointer-events-none" />

        {/* Glow blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-neon-green/5 blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          {/* Badge */}
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
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            用數據說話，而非廣告詞。<br className="hidden md:block" />
            全方位對比業界四大主流交易所，看清差距。
          </p>

          {/* Exchange logos row */}
          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            {EXCHANGES.map((ex, i) => (
              <div key={ex} className="flex items-center gap-2">
                <span
                  className="px-4 py-2 rounded font-headline font-black text-sm tracking-wider"
                  style={i === 0 ? {
                    background: "rgba(13,242,88,0.12)",
                    border: "1px solid rgba(13,242,88,0.5)",
                    color: "#0DF258",
                    boxShadow: "0 0 20px rgba(13,242,88,0.2)",
                  } : {
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {ex}
                </span>
                {i < EXCHANGES.length - 1 && (
                  <span className="text-white/15 text-sm font-code">VS</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantage Cards ── */}
      <section className="py-16 bg-[#080d09]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="p-6 rounded-xl border border-neon-green/12 bg-neon-green/[0.03] hover:border-neon-green/30 hover:bg-neon-green/[0.06] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-neon-green/10 border border-neon-green/15">
                      <Icon size={18} className="text-neon-green" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-headline font-black text-neon-green leading-none"
                        style={{ textShadow: "0 0 20px rgba(13,242,88,0.4)" }}>
                        {adv.stat}
                      </div>
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

      {/* ── Comparison Table ── */}
      <section className="py-20 bg-[#050508]">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">
              全面對比一覽
            </h2>
            <p className="text-white/35 font-code text-sm tracking-wider">
              COMPREHENSIVE COMPARISON · 10 KEY METRICS
            </p>
          </div>

          {/* Table wrapper */}
          <div className="relative overflow-x-auto rounded-2xl border border-neon-green/15"
            style={{ boxShadow: "0 0 60px rgba(13,242,88,0.08), 0 40px 80px rgba(0,0,0,0.5)" }}>

            {/* Bitunix column glow */}
            <div className="absolute inset-y-0 pointer-events-none"
              style={{
                left: "calc(140px + (100% - 140px) / 5 * 0)",
                width: "calc((100% - 140px) / 5)",
                background: "linear-gradient(to bottom, rgba(13,242,88,0.06) 0%, rgba(13,242,88,0.04) 100%)",
                borderLeft: "1px solid rgba(13,242,88,0.2)",
                borderRight: "1px solid rgba(13,242,88,0.1)",
              }}
            />

            <table className="w-full min-w-[640px] border-collapse">

              {/* Header */}
              <thead>
                <tr className="border-b border-white/8">
                  {/* Metric label col */}
                  <th className="w-[140px] p-5 text-left">
                    <span className="text-white/20 font-code text-[10px] tracking-widest uppercase">指標</span>
                  </th>

                  {/* Exchange cols */}
                  {EXCHANGES.map((ex, i) => (
                    <th key={ex} className="p-5 text-center"
                      style={{ width: `calc((100% - 140px) / 5)` }}>
                      {i === 0 ? (
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                          <span className="font-headline font-black text-sm tracking-wider"
                            style={{ color: "#0DF258", textShadow: "0 0 15px rgba(13,242,88,0.6)" }}>
                            {ex}
                          </span>
                          <span className="text-[9px] font-code text-neon-green/50 tracking-widest">推薦</span>
                        </div>
                      ) : (
                        <span className="font-headline font-bold text-sm text-white/25">{ex}</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors duration-150"
                  >
                    {/* Metric */}
                    <td className="p-5">
                      <div className="font-headline font-bold text-white/80 text-sm">{row.label}</div>
                      {row.sub && <div className="text-white/30 font-code text-[10px] mt-0.5 tracking-wider">{row.sub}</div>}
                    </td>

                    {/* Bitunix */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <CellIcon value={row.bitunix.value} />
                        <span className="text-xs font-bold" style={cellStyle(row.bitunix.value, true)}>
                          {row.bitunix.text}
                        </span>
                      </div>
                    </td>

                    {/* Binance */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <CellIcon value={row.binance.value} />
                        <span className="text-xs" style={cellStyle(row.binance.value, false)}>{row.binance.text}</span>
                      </div>
                    </td>

                    {/* Bybit */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <CellIcon value={row.bybit.value} />
                        <span className="text-xs" style={cellStyle(row.bybit.value, false)}>{row.bybit.text}</span>
                      </div>
                    </td>

                    {/* OKX */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <CellIcon value={row.okx.value} />
                        <span className="text-xs" style={cellStyle(row.okx.value, false)}>{row.okx.text}</span>
                      </div>
                    </td>

                    {/* Bitget */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <CellIcon value={row.bitget.value} />
                        <span className="text-xs" style={cellStyle(row.bitget.value, false)}>{row.bitget.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Score footer */}
              <tfoot>
                <tr className="border-t border-neon-green/15 bg-neon-green/[0.03]">
                  <td className="p-5">
                    <span className="text-white/40 font-code text-[10px] tracking-widest uppercase">綜合評分</span>
                  </td>
                  {[
                    { score: "9.8", label: "★★★★★", color: "#0DF258" },
                    { score: "7.2", label: "★★★★☆", color: "rgba(255,255,255,0.25)" },
                    { score: "7.0", label: "★★★★☆", color: "rgba(255,255,255,0.25)" },
                    { score: "6.8", label: "★★★☆☆", color: "rgba(255,255,255,0.25)" },
                    { score: "6.5", label: "★★★☆☆", color: "rgba(255,255,255,0.25)" },
                  ].map((s, i) => (
                    <td key={i} className="p-5 text-center">
                      <div className="font-headline font-black text-xl" style={{ color: s.color, textShadow: i === 0 ? "0 0 20px rgba(13,242,88,0.5)" : "none" }}>
                        {s.score}
                      </div>
                      <div className="text-[9px] tracking-wider mt-0.5" style={{ color: i === 0 ? "rgba(13,242,88,0.5)" : "rgba(255,255,255,0.15)" }}>
                        {s.label}
                      </div>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>

            {/* Disclaimer */}
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
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-headline font-black text-lg text-black transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #b8e000, #0DF258)",
              boxShadow: "0 0 40px rgba(13,242,88,0.4), 0 0 80px rgba(13,242,88,0.15)",
            }}
          >
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
