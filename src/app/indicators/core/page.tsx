"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

const CORE_MODULES = [
  {
    num: "01", label: "SCALPING MODULE",
    title: "極短線高頻交易策略", tag: "HIGH FREQUENCY",
    params: ["SESSION · ASIA / NY", "TIMEFRAME · M1–M5", "TYPE · MOMENTUM"],
  },
  {
    num: "02", label: "TIMING MODULE",
    title: "ICT 時間窗口提醒", tag: "SESSION FILTER",
    params: ["KILL ZONE · LONDON", "KILL ZONE · NEW YORK", "ALGO · ICT-BASED"],
  },
  {
    num: "03", label: "LIQUIDITY MODULE",
    title: "FVG 流動性缺口自動標註", tag: "SMART ENTRY",
    params: ["SCAN · REAL-TIME", "DEPTH · 3 TIMEFRAMES", "CONFIRM · 2+ TOUCH"],
  },
  {
    num: "04", label: "SMART MONEY",
    title: "主力吸籌/派發區間追蹤", tag: "VOLUME PROFILE",
    params: ["BASE · VOL PROFILE", "DETECT · VP + DELTA", "SIGNAL · ACCUM/DIST"],
  },
];

/* Brand colours: neon-green alternates with chartreuse */
const VIZ = [
  { r: "13,242,88",  hex: "#0DF258", label: "ENTRY SCAN ACTIVE"  },
  { r: "200,224,82", hex: "#C8E052", label: "KILL ZONE ACTIVE"   },
  { r: "13,242,88",  hex: "#0DF258", label: "FVG SCAN ACTIVE"    },
  { r: "200,224,82", hex: "#C8E052", label: "VP ANALYSIS ACTIVE" },
];

/* ── Reactive 3D Volume Matrix ── */
function FinancialViz({ active }: { active: number }) {
  const { r, label } = VIZ[active];
  const a = (op: number) => `rgba(${r},${op})`;
  const T = "opacity 0.40s ease";

  const floorY = 368;
  const bw = 20, sw = 9, sh = 5;
  const bars = [
    { x: 54,  h: 88  }, { x: 106, h: 148 },
    { x: 158, h: 190 }, { x: 210, h: 222 }, // POC
    { x: 268, h: 160 }, { x: 320, h: 90  },
    { x: 372, h: 126 }, { x: 422, h: 178 },
  ];
  const maxH = Math.max(...bars.map(b => b.h));

  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full">
      <defs>
        <radialGradient id="fg" cx="50%" cy="85%" r="55%">
          <stop offset="0%"   stopColor={VIZ[active].hex} stopOpacity="0.12" />
          <stop offset="100%" stopColor={VIZ[active].hex} stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="bf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#0DF258" stopOpacity="0.48" />
          <stop offset="100%" stopColor="#0A9C40" stopOpacity="0.07" />
        </linearGradient>
        <linearGradient id="bfh" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#4DF87A" stopOpacity="0.78" />
          <stop offset="100%" stopColor="#0DF258" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {/* Reactive ambient glow */}
      <ellipse cx="240" cy={floorY} rx="300" ry="130"
        fill="url(#fg)" style={{ transition: T }} />

      {/* Perspective depth lines */}
      {[0,64,128,192,256,320,384,448,480].map((x,i) => (
        <line key={i} x1={x} y1={floorY} x2={240} y2={155}
          stroke="#0DF258" strokeOpacity={0.04} strokeWidth={0.5}/>
      ))}

      {/* Perspective horizontal lines */}
      {[0.10,0.28,0.48,0.65,0.79,0.89,0.95].map((t,i) => {
        const y = floorY - t*(floorY-155), p = t*88;
        return <line key={i} x1={p} y1={y} x2={480-p} y2={y}
          stroke="#0DF258" strokeOpacity={0.03+t*0.025} strokeWidth={0.5}/>;
      })}

      {/* Floor baseline */}
      <line x1={0} y1={floorY} x2={480} y2={floorY}
        stroke="#0DF258" strokeOpacity={0.18} strokeWidth={0.8}/>

      {/* Volume bars */}
      {bars.map((b,i) => {
        const poc = b.h === maxH;
        return (
          <g key={i}>
            <polygon
              points={`${b.x+bw},${floorY-b.h} ${b.x+bw+sw},${floorY-b.h-sh} ${b.x+bw+sw},${floorY-sh} ${b.x+bw},${floorY}`}
              fill={poc?"#0A6030":"#074020"} fillOpacity={poc?0.35:0.20}/>
            <polygon
              points={`${b.x-bw},${floorY-b.h} ${b.x+bw},${floorY-b.h} ${b.x+bw+sw},${floorY-b.h-sh} ${b.x-bw+sw},${floorY-b.h-sh}`}
              fill={poc?"#4DF87A":"#0DF258"} fillOpacity={poc?0.55:0.28}/>
            <rect x={b.x-bw} y={floorY-b.h} width={bw*2} height={b.h}
              fill={poc?"url(#bfh)":"url(#bf)"}/>
            <line x1={b.x-bw} y1={floorY-b.h} x2={b.x+bw} y2={floorY-b.h}
              stroke={poc?"#80FF9A":"#0DF258"}
              strokeOpacity={poc?1.0:0.55} strokeWidth={poc?1.8:0.8}/>
            {poc && (
              <>
                <line x1={b.x+bw+sw+2} y1={floorY-b.h-sh}
                  x2={b.x+bw+sw+18} y2={floorY-b.h-sh-14}
                  stroke="#80FF9A" strokeOpacity={0.60} strokeWidth={0.8}/>
                <text x={b.x+bw+sw+20} y={floorY-b.h-sh-15}
                  fill="#80FF9A" fillOpacity={0.70} fontSize={7.5} fontFamily="monospace">POC</text>
              </>
            )}
          </g>
        );
      })}

      {/* Price trace */}
      <polyline points={bars.map(b=>`${b.x},${floorY-b.h-sh-2}`).join(" ")}
        stroke="rgba(255,255,255,0.22)" strokeWidth={0.9} strokeDasharray="5 3" fill="none"/>

      {/* ════ MODULE 0 · SCALPING ════ */}
      <g style={{ opacity: active===0 ? 1:0, transition: T }}>
        {([1,3,7] as const).map((bi,idx) => {
          const b=bars[bi], isLong=idx!==1;
          const ty=floorY-b.h-sh-24;
          return (
            <g key={bi}>
              <polygon
                points={isLong
                  ?`${b.x},${ty+12} ${b.x-7},${ty+22} ${b.x+7},${ty+22}`
                  :`${b.x},${ty+22} ${b.x-7},${ty+12} ${b.x+7},${ty+12}`}
                fill={a(0.85)}/>
              <line x1={b.x-bw-12} y1={floorY-b.h-sh} x2={b.x+bw+sw+18} y2={floorY-b.h-sh}
                stroke={a(0.40)} strokeWidth={0.7} strokeDasharray="4 2"/>
              <text x={b.x+bw+sw+20} y={floorY-b.h-sh+3}
                fill={a(0.72)} fontSize={7} fontFamily="monospace">{isLong?"BUY":"SELL"}</text>
              <circle cx={b.x} cy={floorY-b.h-sh} r={3} fill={a(0.75)}/>
            </g>
          );
        })}
        <text x={10} y={44} fill={a(0.72)} fontSize={7.5} fontFamily="monospace">● {label}  ·  3 SIGNALS</text>
      </g>

      {/* ════ MODULE 1 · TIMING ════ */}
      <g style={{ opacity: active===1 ? 1:0, transition: T }}>
        <rect x={30} y={155} width={152} height={floorY-155} fill={a(0.07)}/>
        <line x1={30} y1={155} x2={30} y2={floorY} stroke={a(0.55)} strokeWidth={1}/>
        <line x1={182} y1={155} x2={182} y2={floorY} stroke={a(0.28)} strokeWidth={0.6} strokeDasharray="5 3"/>
        <text x={36} y={173} fill={a(0.78)} fontSize={7.5} fontFamily="monospace">LONDON</text>
        <text x={36} y={184} fill={a(0.45)} fontSize={6.5} fontFamily="monospace">KILL ZONE</text>

        <rect x={296} y={155} width={156} height={floorY-155} fill={a(0.05)}/>
        <line x1={296} y1={155} x2={296} y2={floorY} stroke={a(0.50)} strokeWidth={1}/>
        <line x1={452} y1={155} x2={452} y2={floorY} stroke={a(0.24)} strokeWidth={0.6} strokeDasharray="5 3"/>
        <text x={302} y={173} fill={a(0.78)} fontSize={7.5} fontFamily="monospace">NEW YORK</text>
        <text x={302} y={184} fill={a(0.45)} fontSize={6.5} fontFamily="monospace">KILL ZONE</text>

        <text x={10} y={44} fill={a(0.72)} fontSize={7.5} fontFamily="monospace">● {label}  ·  2 SESSIONS</text>
      </g>

      {/* ════ MODULE 2 · LIQUIDITY ════ */}
      <g style={{ opacity: active===2 ? 1:0, transition: T }}>
        {[
          {y1:196,y2:218,id:"FVG 01"},{y1:152,y2:170,id:"FVG 02"},{y1:240,y2:256,id:"FVG 03"},
        ].map((z,i) => (
          <g key={i}>
            <rect x={60} y={z.y1} width={395} height={z.y2-z.y1}
              fill={a(0.09)} stroke={a(0.45)} strokeWidth={0.7} strokeDasharray="6 3"/>
            <text x={64} y={z.y1+(z.y2-z.y1)/2+2.5}
              fill={a(0.70)} fontSize={7} fontFamily="monospace">{z.id}</text>
            <line x1={240} y1={z.y2} x2={240} y2={z.y2+12} stroke={a(0.45)} strokeWidth={0.8}/>
            <polygon points={`${240},${z.y2+18} ${235},${z.y2+10} ${245},${z.y2+10}`} fill={a(0.58)}/>
          </g>
        ))}
        <text x={10} y={44} fill={a(0.72)} fontSize={7.5} fontFamily="monospace">● {label}  ·  3 ZONES</text>
      </g>

      {/* ════ MODULE 3 · SMART MONEY ════ */}
      <g style={{ opacity: active===3 ? 1:0, transition: T }}>
        {[
          {y:163,v:0.20},{y:182,v:0.36},{y:201,v:0.55},{y:220,v:0.78},
          {y:239,v:0.92},{y:258,v:1.00},{y:277,v:0.85},{y:296,v:0.60},
          {y:315,v:0.40},{y:334,v:0.26},{y:352,v:0.16},
        ].map((row,i) => {
          const poc=row.v===1.00, w=row.v*115;
          return (
            <g key={i}>
              <rect x={16} y={row.y-7} width={w} height={10}
                fill={poc?a(0.58):a(0.22)} stroke={poc?a(0.88):"none"} strokeWidth={poc?0.9:0}/>
              {poc && (
                <>
                  <line x1={16+w} y1={row.y-2} x2={458} y2={row.y-2}
                    stroke={a(0.40)} strokeWidth={0.7} strokeDasharray="8 4"/>
                  <text x={16+w+6} y={row.y+2} fill={a(0.72)} fontSize={7} fontFamily="monospace">← POC</text>
                </>
              )}
            </g>
          );
        })}
        <text x={10} y={44} fill={a(0.72)} fontSize={7.5} fontFamily="monospace">● {label}  ·  POC IDENTIFIED</text>
      </g>

      {/* Static level markers */}
      {[165,215,265,315].map((y,i) => (
        <g key={i}>
          <line x1={28} y1={y} x2={450} y2={y}
            stroke="#0DF258" strokeOpacity={0.06} strokeWidth={0.5} strokeDasharray="10 5"/>
          <text x={22} y={y+3} fill="#0DF258" fillOpacity={0.18}
            fontSize={7} fontFamily="monospace" textAnchor="end">{((4-i)*0.8).toFixed(1)}K</text>
        </g>
      ))}

      {/* HUD corners */}
      <g stroke="#0DF258" strokeOpacity={0.25} strokeWidth={1} fill="none">
        <polyline points="8,26 8,8 26,8"/>   <polyline points="454,8 472,8 472,26"/>
        <polyline points="8,394 8,412 26,412"/> <polyline points="454,412 472,412 472,394"/>
      </g>

      <text x={10} y={20} fill="#0DF258" fillOpacity={0.35} fontSize={7} fontFamily="monospace">VOL MATRIX</text>
      <text x={470} y={20} fill={a(0.55)} fontSize={7} fontFamily="monospace" textAnchor="end"
        style={{transition:T}}>{label}</text>
      <circle cx={464} cy={15} r={2.5} fill="#0DF258" fillOpacity={0.85}/>
      <polygon points="0,0 30,0 0,35"        fill="#0DF258" fillOpacity={0.020}/>
      <polygon points="480,385 480,420 445,420" fill="#0DF258" fillOpacity={0.015}/>
    </svg>
  );
}

/* ── Page ── */
function CoreContent() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">

      {/* BACK NAV */}
      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-8">
        <a href="/indicators"
          className="flex items-center gap-2 font-code text-[10px] tracking-widest text-white/25 hover:text-neon-green transition-colors uppercase">
          <span>←</span><span>[ 獨家指標 ]</span>
        </a>
      </div>

      {/* ══ DIAGONAL SPLIT ══ */}
      <div className="relative overflow-hidden">

        {/* ── Diagonal line — BOTTOM layer, smooth sine breath ── */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
          viewBox="0 0 100 100" preserveAspectRatio="none">

          {/* Ghost trace — always barely there */}
          <line x1="100" y1="0" x2="0" y2="100"
            stroke="rgba(13,242,88,0.03)" strokeWidth="0.4"/>

          {/* Glow bloom — sine-wave breath, very soft */}
          <line x1="100" y1="0" x2="0" y2="100"
            stroke="rgba(13,242,88,1)">
            <animate attributeName="stroke-opacity"
              values="0;0.01;0.05;0.09;0.12;0.12;0.09;0.05;0.01;0;0"
              keyTimes="0;0.05;0.18;0.32;0.44;0.54;0.66;0.80;0.90;0.95;1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
              dur="7s" repeatCount="indefinite"/>
            <animate attributeName="stroke-width"
              values="0.4;0.4;0.5;0.8;1.2;1.4;1.2;0.8;0.5;0.4;0.4"
              keyTimes="0;0.05;0.18;0.32;0.44;0.54;0.66;0.80;0.90;0.95;1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
              dur="7s" repeatCount="indefinite"/>
          </line>

          {/* Fine core — same sine envelope, slightly lighter */}
          <line x1="100" y1="0" x2="0" y2="100"
            stroke="rgba(210,255,220,1)" strokeWidth="0.35">
            <animate attributeName="stroke-opacity"
              values="0;0.01;0.07;0.14;0.20;0.20;0.14;0.07;0.01;0;0"
              keyTimes="0;0.05;0.18;0.32;0.44;0.54;0.66;0.80;0.90;0.95;1"
              calcMode="spline"
              keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
              dur="7s" repeatCount="indefinite"/>
          </line>
        </svg>

        {/* Left bg — green-tinted dark, sits above diagonal */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:"linear-gradient(160deg,#0b1a08 0%,#070e06 100%)",
            clipPath:"polygon(0 0,62% 0,52% 100%,0 100%)",
          }}/>

        {/* Right HUD grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            clipPath:"polygon(58% 0,100% 0,100% 100%,48% 100%)",
            backgroundImage:
              "linear-gradient(rgba(13,242,88,0.03) 1px,transparent 1px),"+
              "linear-gradient(90deg,rgba(13,242,88,0.03) 1px,transparent 1px)",
            backgroundSize:"32px 32px",
          }}/>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] gap-0 items-start">

            {/* LEFT */}
            <div className="relative" style={{ height:"500px" }}>
              <div className="absolute inset-0">
                <FinancialViz active={active}/>
              </div>

              {/* Title */}
              <div className="relative z-20">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-neon-green/50 font-code text-[11px]">[</span>
                  <span className="text-neon-green/70 font-code text-[11px] tracking-widest uppercase">
                    01 · 核心模組 · CORE INDICATORS
                  </span>
                  <span className="text-neon-green/50 font-code text-[11px]">]</span>
                </div>
                <h1 className="font-headline font-black text-white leading-none neon-glow"
                  style={{ fontSize:"clamp(40px,6vw,68px)" }}>
                  核心交易指標
                </h1>
                <p className="text-white/30 font-body text-sm mt-3 max-w-xs leading-relaxed">
                  四大核心模組完整覆蓋入場邏輯，從訊號識別到精準執行。
                </p>
              </div>

              {/* Status */}
              <div className="absolute bottom-4 left-0 z-20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"/>
                <span className="font-code text-[9px] tracking-widest uppercase"
                  style={{ color:`rgba(${VIZ[active].r},0.55)`, transition:"color 0.4s" }}>
                  {VIZ[active].label}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative lg:pl-16 pt-8 lg:pt-0">

              {/* Panel header */}
              <div className="mb-7">
                <p className="text-neon-green/25 font-code text-[10px] tracking-[0.3em] uppercase mb-2">
                  [ MODULE INDEX ]
                </p>
                <div className="h-px bg-gradient-to-r from-neon-green/20 to-transparent"/>
              </div>

              {/* Modules */}
              {CORE_MODULES.map((mod, i) => {
                const isActive = active === i;
                const v = VIZ[i];
                return (
                  <div key={i}
                    className="group relative mb-8 last:mb-0 cursor-pointer"
                    style={{ paddingLeft:`${16+i*16}px` }}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-opacity duration-300"
                      style={{ background:v.hex, opacity:isActive?1:0 }}/>

                    {/* Bracket label */}
                    <p className="font-code text-[10px] tracking-[0.2em] uppercase mb-2 transition-colors duration-300"
                      style={{ color:isActive?`rgba(${v.r},0.80)`:"rgba(13,242,88,0.28)" }}>
                      [ {mod.num} · {mod.label} ]
                    </p>

                    {/* Title */}
                    <h3 className="font-headline font-bold text-xl lg:text-[22px] mb-3 leading-snug transition-colors duration-300"
                      style={{ color:isActive?"#fff":"rgba(255,255,255,0.55)" }}>
                      {mod.title}
                    </h3>

                    {/* Params */}
                    <div className="space-y-1 mb-2.5">
                      {mod.params.map((p, pi) => (
                        <div key={pi} className="flex items-center gap-2">
                          <span className="shrink-0 block transition-all duration-300"
                            style={{
                              width:"13px", height:"1px",
                              background:isActive?`rgba(${v.r},0.50)`:"rgba(13,242,88,0.20)",
                            }}/>
                          <span className="font-code text-[9px] tracking-widest uppercase transition-colors duration-300"
                            style={{ color:isActive?"rgba(255,255,255,0.50)":"rgba(255,255,255,0.20)" }}>
                            {p}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tag */}
                    <span className="inline-block font-code text-[8px] tracking-widest px-2 py-0.5 uppercase transition-all duration-300"
                      style={{
                        color:  isActive?`rgba(${v.r},0.60)`:"rgba(13,242,88,0.18)",
                        border:`1px solid ${isActive?`rgba(${v.r},0.30)`:"rgba(13,242,88,0.10)"}`,
                      }}>
                      {mod.tag}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 lg:px-12 py-14 space-y-5">
        <div className="relative overflow-hidden border border-neon-green/10 bg-[#080d09]">
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-green/20"/>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-green/20"/>
          <div className="px-8 py-5">
            <p className="text-white/40 text-sm leading-relaxed font-body">
              <span className="text-neon-green/60 font-code text-[9px] tracking-widest uppercase mr-3">[ 注意 ]</span>
              所有指標均在 TradingView 平台運行，支援 PC 與手機端，加入社群後由助教協助一鍵安裝。
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a href="/indicators/unlock"
            className="inline-flex items-center gap-2 px-8 py-4 font-headline font-black text-sm text-black transition-all duration-200 hover:opacity-90"
            style={{ background:"linear-gradient(135deg,#b8e000,#0DF258)", boxShadow:"0 0 32px rgba(13,242,88,0.30)" }}>
            立即解鎖指標禮包 →
          </a>
          <a href="/indicators/risk"
            className="inline-flex items-center gap-2 px-6 py-4 font-headline font-black text-sm text-white border border-neon-green/25 bg-transparent hover:bg-neon-green/5 hover:border-neon-green/50 transition-all duration-200">
            查看風控指標 →
          </a>
        </div>
      </div>

    </div>
  );
}

export default function IndicatorsCorePageWrapper() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><CoreContent /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
