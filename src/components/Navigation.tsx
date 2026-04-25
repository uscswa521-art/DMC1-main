
"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Globe, ChevronDown, Zap, Eye, BarChart3, Play, Check } from "lucide-react";
import { LANGUAGES } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";
import { IntroScreen } from "@/components/IntroScreen";

// ── Shared popup header ───────────────────────────────────
function PopupHeader({ label, badge }: { label: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-neon-green/10 pb-3 mb-3">
      <span className="text-white/35 font-code text-[10px] tracking-widest uppercase">{label}</span>
      {badge && (
        <span className="text-neon-green font-code text-[9px] border border-neon-green/30 rounded px-1.5 py-0.5 tracking-wider">{badge}</span>
      )}
    </div>
  );
}

// ── Per-section popup panels ──────────────────────────────

function PopupAbout({ t, onAboutClick }: { t: any; onAboutClick: () => void }) {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  const TABS = ['甚麼是 DMC？', '認識大衛', '加入社群'];

  const DMC_POINTS = [
    { icon: '⚡', title: '主力思維交易系統', desc: '不教你畫線，而是讓你真正讀懂主力意圖，跟著聰明錢走，而非成為流動性。' },
    { icon: '📊', title: '成交量分布分析', desc: '即時追蹤資金流向，識別主力吸籌與派發區間，在突破前精準入場。' },
    { icon: '🎯', title: '裸K精準判讀', desc: '排除所有延遲指標，回歸價格本質，一眼辨別真突破與假訊號。' },
  ];

  const logs = [
    { text: t.about.log001 },
    { text: t.about.log002 },
    { text: t.about.log003 },
    { text: t.about.log004 },
  ];

  const COMMUNITY = [
    { value: '2,000+', label: '活躍社群成員' },
    { value: '200+',   label: '免費教學影片' },
    { value: '免費',   label: '加入零門檻' },
  ];

  return (
    <div className="w-80 overflow-hidden">
      {/* Tab header */}
      <div className="flex border-b border-neon-green/12">
        {TABS.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i as 0 | 1 | 2)}
            className="flex-1 px-2 py-3 text-[10px] font-code tracking-wider transition-all duration-150 relative"
            style={{
              color: activeTab === i ? '#0DF258' : 'rgba(255,255,255,0.3)',
              background: activeTab === i ? 'rgba(13,242,88,0.05)' : 'transparent',
            }}
          >
            {tab}
            {activeTab === i && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-neon-green" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-5">

        {/* Tab 0: 甚麼是 DMC？ */}
        {activeTab === 0 && (
          <div className="space-y-3">
            <p className="text-white/40 font-code text-[9px] tracking-widest uppercase">核心系統</p>
            <div className="space-y-2.5">
              {DMC_POINTS.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-neon-green/8 bg-neon-green/[0.03]">
                  <span className="text-base leading-none shrink-0 mt-0.5">{pt.icon}</span>
                  <div>
                    <p className="text-white/85 text-[11px] font-bold mb-0.5">{pt.title}</p>
                    <p className="text-white/40 text-[10px] leading-snug">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/what-is-dmc"
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-neon-green/20 bg-neon-green/5 hover:bg-neon-green/10 transition-all duration-200 group/l mt-1"
            >
              <span className="text-neon-green/70 font-code text-[10px] tracking-wider group-hover/l:text-neon-green transition-colors">了解更多 →</span>
            </a>
          </div>
        )}

        {/* Tab 1: 認識大衛 */}
        {activeTab === 1 && (
          <div className="space-y-3">
            <p className="text-white/40 font-code text-[9px] tracking-widest uppercase">大衛的故事</p>
            <div className="space-y-2">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="flex flex-col items-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green/70" />
                    {i < logs.length - 1 && <div className="w-px h-5 bg-neon-green/15 mt-0.5" />}
                  </div>
                  <p className="text-white/60 text-[11px] leading-snug pb-1">{log.text}</p>
                </div>
              ))}
            </div>
            <a
              href="/david"
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-neon-green/20 bg-neon-green/5 hover:bg-neon-green/10 transition-all duration-200 group/l"
            >
              <span className="text-neon-green/70 font-code text-[10px] tracking-wider group-hover/l:text-neon-green transition-colors">認識大衛的完整故事 →</span>
            </a>
          </div>
        )}

        {/* Tab 2: 加入社群 */}
        {activeTab === 2 && (
          <div className="space-y-3">
            <p className="text-white/40 font-code text-[9px] tracking-widest uppercase">社群福利</p>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {COMMUNITY.map((c) => (
                <div key={c.label} className="text-center p-2.5 rounded-lg bg-neon-green/[0.04] border border-neon-green/10">
                  <p className="text-neon-green font-headline font-black text-sm leading-none"
                    style={{ textShadow: '0 0 10px rgba(13,242,88,0.4)' }}>{c.value}</p>
                  <p className="text-white/35 font-code text-[8px] mt-1 leading-tight">{c.label}</p>
                </div>
              ))}
            </div>
            {/* Benefits */}
            <div className="space-y-1.5">
              {[
                '每日盤面策略分析',
                '完整免費影片教學庫',
                'DMC 獨家指標禮包',
                '直播實況盤中解析',
                '社群群友互助交流',
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={9} strokeWidth={3} className="text-neon-green shrink-0" />
                  <span className="text-white/60 text-[11px]">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="/community"
              className="w-full flex items-center justify-center px-3 py-2.5 rounded-lg font-headline font-black text-xs text-black transition-all duration-200 hover:opacity-90 mt-1"
              style={{ background: 'linear-gradient(135deg,#b8e000,#0DF258)', boxShadow: '0 0 20px rgba(13,242,88,0.3)' }}
            >
              立即了解加入方式 →
            </a>
          </div>
        )}

      </div>
    </div>
  );
}

function PopupAdvantages({ t }: { t: any }) {
  const ICONS = [Zap, Eye, BarChart3, Globe];
  return (
    <div className="p-5 w-72 space-y-3">
      <PopupHeader label="DMC 核心優勢" />
      <div className="space-y-2">
        {t.advantages.items.map((item: any, i: number) => {
          const Icon = ICONS[i % 4];
          return (
            <div key={i} className="flex items-start gap-3 px-3 py-2.5 rounded-lg border border-neon-green/8 bg-neon-green/[0.03] hover:border-neon-green/20 hover:bg-neon-green/[0.06] transition-all duration-200">
              <div className="p-1 bg-neon-green/10 rounded shrink-0 mt-0.5">
                <Icon size={11} className="text-neon-green" />
              </div>
              <div>
                <p className="text-white/85 text-[11px] font-bold leading-tight">{item.title}</p>
                <p className="text-white/35 text-[10px] leading-snug mt-0.5 line-clamp-1">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PopupIndicators({ t }: { t: any }) {
  return (
    <div className="p-5 w-72 space-y-3">
      <PopupHeader label="獨家指標禮包" badge="EXCLUSIVE" />
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
        <div>
          <p className="text-white/25 font-code text-[9px] tracking-widest uppercase mb-2">核心模組</p>
          {t.indicators.coreModules.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <Check size={9} strokeWidth={3} className="text-neon-green shrink-0" />
              <span className="text-white/65 text-[10px] leading-tight">{item}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="text-white/25 font-code text-[9px] tracking-widest uppercase mb-2">風控工具</p>
          {t.indicators.riskManagement.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-2 py-1">
              <Check size={9} strokeWidth={3} className="text-neon-green/60 shrink-0" />
              <span className="text-white/50 text-[10px] leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2 border-t border-neon-green/8">
        <p className="text-white/30 text-[10px] leading-snug">{t.indicators.requirementText}</p>
      </div>
    </div>
  );
}

function PopupTraining({ t }: { t: any }) {
  const CATEGORIES = [
    { icon: '📚', label: '核心理論課', sub: '主力行為 · 日內思維', href: '/training/core' },
    { icon: '⚡', label: '實戰技術課', sub: '加密實戰 · DMC策略', href: '/training/skills' },
    { icon: '🔴', label: '直播精華',   sub: '實況回放 · 盤中解析', href: '/training/live'  },
  ];
  return (
    <div className="p-5 w-64 space-y-3">
      <PopupHeader label="實戰教學" badge={`${t.training.videos.length} FREE`} />
      <div className="space-y-2">
        {CATEGORIES.map((c, i) => (
          <a key={i} href={c.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-neon-green/8 bg-neon-green/[0.03] hover:border-neon-green/25 hover:bg-neon-green/[0.07] transition-all duration-200 group/v">
            <span className="text-base shrink-0">{c.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-[11px] font-bold group-hover/v:text-neon-green transition-colors">{c.label}</p>
              <p className="text-white/30 text-[9px] font-code mt-0.5">{c.sub}</p>
            </div>
            <span className="text-neon-green/30 text-xs group-hover/v:translate-x-0.5 transition-transform">→</span>
          </a>
        ))}
      </div>
      <div className="pt-1 border-t border-neon-green/8">
        <a href="/training" className="flex items-center justify-between w-full px-2 py-1.5 text-white/25 hover:text-neon-green/60 font-code text-[10px] tracking-wider transition-colors">
          查看全部教學 →
        </a>
      </div>
    </div>
  );
}

function PopupBitunix({ t }: { t: any }) {
  const stats = [
    { label: "滑點控制", value: 95 },
    { label: "執行速度", value: 98 },
    { label: "平台穩定", value: 99 },
  ];
  return (
    <div className="p-5 w-64 space-y-3">
      <div className="flex items-center gap-2 border-b border-neon-green/10 pb-3">
        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shrink-0" />
        <span className="text-neon-green font-headline font-black text-sm tracking-wider">BITUNIX</span>
        <span className="text-white/30 font-code text-[9px] ml-auto">官方合作夥伴</span>
      </div>
      {/* Features */}
      <div className="space-y-2">
        {t.bitunix.features.map((f: any, i: number) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-1 h-1 rounded-full bg-neon-green/60 shrink-0" />
            <p className="text-white/60 text-[11px] leading-tight">{f.title}</p>
          </div>
        ))}
      </div>
      {/* Stats */}
      <div className="space-y-2 pt-2 border-t border-neon-green/8">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/40 font-code">{s.label}</span>
              <span className="text-neon-green font-code font-bold">{s.value}%</span>
            </div>
            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-neon-green" style={{ width: `${s.value}%`, boxShadow: '0 0 6px rgba(13,242,88,0.5)' }} />
            </div>
          </div>
        ))}
      </div>
      {/* Compare link */}
      <div className="pt-1 border-t border-neon-green/10">
        <a href="/bitunix-compare"
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-neon-green/8 border border-neon-green/20 hover:bg-neon-green/15 hover:border-neon-green/40 transition-all duration-200 group">
          <span className="text-neon-green/80 font-code text-[10px] tracking-wider group-hover:text-neon-green transition-colors">查看完整交易所對比</span>
          <span className="text-neon-green/60 text-xs group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}

function PopupTestimonials({ t }: { t: any }) {
  const stats = [
    { label: "社群成員", value: "2,000+", sub: "活躍交易者" },
    { label: "平均回報", value: "+300%", sub: "社群見證" },
    { label: "教學影片", value: "200+", sub: "完全免費" },
  ];
  return (
    <div className="p-5 w-64 space-y-3">
      <PopupHeader label="群友見證" badge="VERIFIED" />
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-2.5 rounded-lg bg-neon-green/[0.04] border border-neon-green/10">
            <p className="text-neon-green font-headline font-black text-base leading-none" style={{ textShadow: "0 0 12px rgba(13,242,88,0.4)" }}>{s.value}</p>
            <p className="text-white/40 font-code text-[8px] mt-1 tracking-wider">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 pt-1">
        <p className="text-white/30 font-code text-[9px] tracking-widest uppercase">最新動態</p>
        {[
          "「真的是我交易生涯轉捩點」",
          "「學會裸K後止損大幅減少」",
          "「社群氛圍超好，問題秒回」",
        ].map((q, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-neon-green/40 font-code text-[9px] mt-0.5 shrink-0">◈</span>
            <p className="text-white/50 text-[10px] leading-snug italic">{q}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopupFAQ({ t }: { t: any }) {
  return (
    <div className="p-5 w-72 space-y-3">
      <PopupHeader label="常見問題" />
      <div className="space-y-2.5">
        {t.faq.items.slice(0, 4).map((item: any, i: number) => (
          <div key={i} className="group/q">
            <div className="flex items-start gap-2.5">
              <span className="text-neon-green font-code text-[9px] font-bold shrink-0 mt-0.5 bg-neon-green/10 border border-neon-green/20 rounded px-1 py-0.5">Q{i + 1}</span>
              <div>
                <p className="text-white/75 text-[11px] font-bold leading-snug">{item.q}</p>
                <p className="text-white/35 text-[10px] leading-snug mt-0.5 line-clamp-1">{item.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Popup content router ──────────────────────────────────

function PopupContent({ href, t, onAboutClick, onPageLink }: { href: string; t: any; onAboutClick: () => void; onPageLink: (url: string) => void; }) {
  switch (href) {
    case '#about':        return <PopupAbout t={t} onAboutClick={onAboutClick} />;
    case '#advantages':   return <PopupAdvantages t={t} />;
    case '#indicators':   return <PopupIndicators t={t} />;
    case '#training':     return <PopupTraining t={t} />;
    case '#bitunix':      return <PopupBitunix t={t} />;
    case '#testimonials': return <PopupTestimonials t={t} />;
    case '#faq':          return <PopupFAQ t={t} />;
    default:              return null;
  }
}

// ── Main Navigation ───────────────────────────────────────

type Align = 'left' | 'center' | 'right';

// Pages that use CyberBoot transition (only 關於DMC)
const TRANSITION_PAGES: Record<string, string> = {
  '#about': '/about',
};

// Pages that navigate directly (no animation)
const PAGE_LINKS: Record<string, string> = {
  '#indicators':   '/indicators',
  '#training':     '/training',
  '#testimonials': '/testimonials',
  '#faq':          '/faq',
};

// Nav items that scroll directly — no hover popup
const NO_POPUP = new Set(['#advantages']);

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState('/about');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const triggerTransition = useCallback((target: string) => {
    setTransitionTarget(target);
    setShowTransition(true);
  }, []);

  const handleAboutClick = useCallback(() => {
    triggerTransition('/about');
  }, [triggerTransition]);

  const handleTransitionComplete = useCallback(() => {
    window.location.href = transitionTarget;
  }, [transitionTarget]);

  const NAV_LINKS: { name: string; href: string; align: Align }[] = [
    { name: t.nav.advantages,   href: '#advantages',   align: 'left'   },
    { name: t.nav.indicators,   href: '#indicators',   align: 'left'   },
    { name: t.nav.training,     href: '#training',     align: 'center' },
    { name: t.nav.bitunix,      href: '#bitunix',      align: 'center' },
    { name: t.nav.testimonials, href: '#testimonials', align: 'right'  },
    { name: '關於DMC',           href: '#about',        align: 'right'  },
    { name: t.nav.faq,          href: '#faq',          align: 'right'  },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <>
    {showTransition && (
      <IntroScreen onComplete={handleTransitionComplete} />
    )}
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 glass border-b",
      isScrolled ? "border-neon-green/50" : "border-transparent"
    )}>
      <div className="container mx-auto px-6 lg:px-12">
      <div className={cn(
        "flex items-center justify-between transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}>

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neon-green/30 shadow-[0_0_10px_rgba(13,242,88,0.25)]">
              <Image
                src="/dmc-logo.png"
                alt="DMC Coin Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="font-headline font-bold text-neon-green flex items-baseline">
              <span className="text-2xl tracking-tighter">DMC</span>
              <span className="text-sm font-medium whitespace-nowrap ml-1">加密交易術</span>
            </div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center space-x-5">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative group/nav">

              {/* Link text */}
              {TRANSITION_PAGES[link.href] ? (
                <button
                  onClick={() => triggerTransition(TRANSITION_PAGES[link.href])}
                  className="text-xs uppercase tracking-wider text-white/80 hover:text-neon-green transition-colors font-code font-semibold block py-1 whitespace-nowrap"
                >
                  {link.name}
                </button>
              ) : PAGE_LINKS[link.href] ? (
                <a
                  href={PAGE_LINKS[link.href]}
                  className="text-xs uppercase tracking-wider text-white/80 hover:text-neon-green transition-colors font-code font-semibold block py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-wider text-white/80 hover:text-neon-green transition-colors font-code font-semibold block py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              )}

              {/* ── Hover popup ── */}
              {!NO_POPUP.has(link.href) && <div className={cn(
                "absolute top-full mt-3 z-50",
                // fade + slide
                "opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible",
                "translate-y-1.5 group-hover/nav:translate-y-0",
                "transition-all duration-200 ease-out",
                // card style
                "bg-[#111713] border border-neon-green/20 rounded-xl",
                "shadow-[0_12px_40px_rgba(0,0,0,0.75),0_0_0_1px_rgba(13,242,88,0.07)]",
                // horizontal alignment
                link.align === 'left'   ? 'left-0' :
                link.align === 'right'  ? 'right-0' :
                                          'left-1/2 -translate-x-1/2'
              )}>
                {/* Arrow tip pointing to nav link */}
                <div className={cn(
                  "absolute -top-[5px] w-2.5 h-2.5 bg-[#111713]",
                  "border-l border-t border-neon-green/20 rotate-45",
                  link.align === 'left'  ? 'left-5' :
                  link.align === 'right' ? 'right-5' :
                                           'left-1/2 -translate-x-1/2'
                )} />

                <PopupContent
                  href={link.href}
                  t={t}
                  onAboutClick={() => triggerTransition('/about')}
                  onPageLink={(url) => { window.location.href = url; }}
                />
              </div>}
            </div>
          ))}

          {/* Language Selector only */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-xs font-code font-semibold text-white/80 hover:text-neon-green transition-colors uppercase tracking-widest border border-white/10 hover:border-neon-green/50 px-3 py-1.5 rounded"
            >
              <Globe size={12} />
              {currentLang?.label}
              <ChevronDown
                size={10}
                className={cn("transition-transform duration-200", dropdownOpen && "rotate-180")}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#111713] border border-neon-green/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(13,242,88,0.1)] z-50 min-w-[160px]">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setDropdownOpen(false); }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-xs font-code hover:bg-neon-green/10 hover:text-neon-green transition-colors",
                      l.code === lang ? "text-neon-green bg-neon-green/5" : "text-white/70"
                    )}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-neon-green">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>

      </div>
    </nav>

    </>
  );
}
