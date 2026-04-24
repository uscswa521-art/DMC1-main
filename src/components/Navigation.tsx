
"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Globe, ChevronDown, Zap, Eye, BarChart3, Play, Check } from "lucide-react";
import { LANGUAGES } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

// ── Per-section popup panels ──────────────────────────────

function PopupAbout({ t }: { t: any }) {
  return (
    <div className="p-5 w-60 space-y-3">
      <h4 className="text-neon-green font-headline font-bold text-sm border-b border-neon-green/15 pb-2.5 truncate">
        {t.about.heading}
      </h4>
      <div className="space-y-2">
        <p className="text-white/55 text-[11px] leading-relaxed line-clamp-2">{t.about.log001}</p>
        <p className="text-white/55 text-[11px] leading-relaxed line-clamp-2">{t.about.log002}</p>
      </div>
    </div>
  );
}

function PopupAdvantages({ t }: { t: any }) {
  const ICONS = [Zap, Eye, BarChart3, Globe];
  return (
    <div className="p-5 w-72 space-y-3">
      <h4 className="text-white/40 font-code text-[10px] tracking-widest border-b border-neon-green/10 pb-2.5 uppercase truncate">
        {t.advantages.heading}
      </h4>
      <div className="grid grid-cols-2 gap-2">
        {t.advantages.items.map((item: any, i: number) => {
          const Icon = ICONS[i % 4];
          return (
            <div key={i} className="flex items-center gap-2 px-2.5 py-2 bg-neon-green/5 border border-neon-green/10 rounded-lg">
              <Icon size={13} className="text-neon-green shrink-0" />
              <span className="text-white/80 text-[11px] font-bold leading-tight line-clamp-2">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PopupIndicators({ t }: { t: any }) {
  return (
    <div className="p-5 w-64 space-y-3">
      <h4 className="font-headline font-bold text-sm border-b border-neon-green/15 pb-2.5 truncate">
        <span className="text-white">{t.indicators.headingPart1}</span>
        <span className="text-neon-green ml-1">{t.indicators.headingPart2}</span>
      </h4>
      <div className="space-y-2">
        {t.indicators.coreModules.slice(0, 5).map((item: string) => (
          <div key={item} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded bg-neon-green/15 border border-neon-green/30 flex items-center justify-center shrink-0">
              <Check size={9} strokeWidth={3} className="text-neon-green" />
            </div>
            <span className="text-white/65 text-[11px]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopupTraining({ t }: { t: any }) {
  return (
    <div className="p-5 w-72 space-y-3">
      <div className="flex items-center justify-between border-b border-neon-green/10 pb-2.5">
        <h4 className="text-white/40 font-code text-[10px] tracking-widest uppercase truncate mr-2">{t.training.heading}</h4>
        <span className="text-neon-green font-code text-[10px] border border-neon-green/30 rounded px-1.5 py-0.5 shrink-0">
          {t.training.videos.length} FREE
        </span>
      </div>
      <div className="space-y-2">
        {t.training.videos.slice(0, 4).map((v: any, i: number) => (
          <div key={i} className="flex items-center gap-3 group/item">
            <div className="w-5 h-5 rounded-full bg-neon-green/10 border border-neon-green/20 flex items-center justify-center shrink-0">
              <Play size={7} className="text-neon-green fill-neon-green ml-0.5" />
            </div>
            <span className="text-white/65 text-[11px] group-hover/item:text-white/90 transition-colors leading-snug line-clamp-1">{v.title}</span>
          </div>
        ))}
        {t.training.videos.length > 4 && (
          <p className="text-neon-green/40 text-[10px] font-code pl-8">+{t.training.videos.length - 4} more</p>
        )}
      </div>
    </div>
  );
}

function PopupBitunix() {
  const stats = [
    { label: "滑點控制", value: 95 },
    { label: "執行速度", value: 98 },
    { label: "平台穩定", value: 99 },
  ];
  return (
    <div className="p-5 w-60 space-y-3">
      <div className="flex items-center gap-2 border-b border-neon-green/10 pb-2.5">
        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shrink-0" />
        <h4 className="text-neon-green font-headline font-black text-sm tracking-wider">BITUNIX</h4>
        <span className="text-white/35 text-[10px] font-code">官方合作</span>
      </div>
      <div className="space-y-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/55 font-code">{s.label}</span>
              <span className="text-neon-green font-code font-bold">{s.value}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-neon-green"
                style={{ width: `${s.value}%`, boxShadow: '0 0 6px rgba(13,242,88,0.5)' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopupTestimonials({ t }: { t: any }) {
  const items = [
    { user: "User_4921",    pnl: "+517%", market: "BTC/USDT" },
    { user: "CryptoNinja",  pnl: "+430%", market: "ETH/USDT" },
    { user: "DMC_Whale",    pnl: "+892%", market: "PEPE/USDT" },
  ];
  return (
    <div className="p-5 w-60 space-y-3">
      <h4 className="text-white/40 font-code text-[10px] tracking-widest uppercase border-b border-neon-green/10 pb-2.5 truncate">
        {t.testimonials.heading}
      </h4>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.user} className="flex items-center justify-between bg-neon-green/5 border border-neon-green/10 rounded-lg px-3 py-2">
            <div>
              <p className="text-[10px] font-code text-white/40">{item.user}</p>
              <p className="text-[9px]  font-code text-white/25">{item.market}</p>
            </div>
            <span className="text-neon-green font-headline font-black text-xl leading-none">{item.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopupFAQ({ t }: { t: any }) {
  return (
    <div className="p-5 w-72 space-y-3">
      <h4 className="text-white/40 font-code text-[10px] tracking-widest uppercase border-b border-neon-green/10 pb-2.5 truncate">
        {t.faq.heading}
      </h4>
      <div className="space-y-2.5">
        {t.faq.items.slice(0, 3).map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-2 group/q cursor-pointer">
            <span className="text-neon-green/50 font-code text-[10px] mt-0.5 shrink-0 font-bold">Q{i + 1}</span>
            <p className="text-white/60 text-[11px] leading-snug group-hover/q:text-white/90 transition-colors line-clamp-2">
              {item.q}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Popup content router ──────────────────────────────────

function PopupContent({ href, t }: { href: string; t: any }) {
  switch (href) {
    case '#about':        return <PopupAbout t={t} />;
    case '#advantages':   return <PopupAdvantages t={t} />;
    case '#indicators':   return <PopupIndicators t={t} />;
    case '#training':     return <PopupTraining t={t} />;
    case '#bitunix':      return <PopupBitunix />;
    case '#testimonials': return <PopupTestimonials t={t} />;
    case '#faq':          return <PopupFAQ t={t} />;
    default:              return null;
  }
}

// ── Main Navigation ───────────────────────────────────────

type Align = 'left' | 'center' | 'right';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS: { name: string; href: string; align: Align }[] = [
    { name: t.nav.about,        href: '#about',        align: 'left'   },
    { name: t.nav.advantages,   href: '#advantages',   align: 'left'   },
    { name: t.nav.indicators,   href: '#indicators',   align: 'center' },
    { name: t.nav.training,     href: '#training',     align: 'center' },
    { name: t.nav.bitunix,      href: '#bitunix',      align: 'right'  },
    { name: t.nav.testimonials, href: '#testimonials', align: 'right'  },
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
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 glass border-b",
      isScrolled ? "border-neon-green/50" : "border-transparent"
    )}>
      <div className="container px-6 lg:px-12">
      <div className={cn(
        "flex items-center justify-between transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}>

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-neon-green/30 shadow-[0_0_12px_rgba(13,242,88,0.25)]">
              <Image
                src="/dmc-logo.png"
                alt="DMC Coin Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="font-headline font-bold text-neon-green flex items-baseline">
              <span className="text-5xl tracking-tighter">DMC</span>
              <span className="text-xl font-medium whitespace-pre">  加密交易</span>
            </div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative group/nav">

              {/* Link text */}
              <a
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/80 hover:text-neon-green transition-colors font-code font-semibold block py-1"
              >
                {link.name}
              </a>

              {/* ── Hover popup ── */}
              <div className={cn(
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

                <PopupContent href={link.href} t={t} />
              </div>
            </div>
          ))}

          {/* Language Selector + Social Icons stacked */}
          <div className="flex flex-col items-end gap-1.5">

            {/* Language Selector */}
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

            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1877F2]/15 hover:bg-[#1877F2] border border-[#1877F2]/40 hover:border-[#1877F2] flex items-center justify-center transition-all duration-250 group hover:scale-110 hover:shadow-[0_0_14px_rgba(24,119,242,0.6)]">
                <svg viewBox="0 0 24 24" className="fill-[#1877F2] group-hover:fill-white transition-colors" style={{width:'18px',height:'18px'}}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#FF0000]/15 hover:bg-[#FF0000] border border-[#FF0000]/40 hover:border-[#FF0000] flex items-center justify-center transition-all duration-250 group hover:scale-110 hover:shadow-[0_0_14px_rgba(255,0,0,0.6)]">
                <svg viewBox="0 0 24 24" className="fill-[#FF0000] group-hover:fill-white transition-colors" style={{width:'18px',height:'18px'}}>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" aria-label="Telegram"
                className="w-9 h-9 rounded-full bg-[#26A5E4]/15 hover:bg-[#26A5E4] border border-[#26A5E4]/40 hover:border-[#26A5E4] flex items-center justify-center transition-all duration-250 group hover:scale-110 hover:shadow-[0_0_14px_rgba(38,165,228,0.6)]">
                <svg viewBox="0 0 24 24" className="fill-[#26A5E4] group-hover:fill-white transition-colors" style={{width:'18px',height:'18px'}}>
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              {/* Discord */}
              <a href="#" aria-label="Discord"
                className="w-9 h-9 rounded-full bg-[#5865F2]/15 hover:bg-[#5865F2] border border-[#5865F2]/40 hover:border-[#5865F2] flex items-center justify-center transition-all duration-250 group hover:scale-110 hover:shadow-[0_0_14px_rgba(88,101,242,0.6)]">
                <svg viewBox="0 0 24 24" className="fill-[#5865F2] group-hover:fill-white transition-colors" style={{width:'18px',height:'18px'}}>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.084.114 18.11.128 18.12a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#E1306C]/15 hover:bg-[#E1306C] border border-[#E1306C]/40 hover:border-[#E1306C] flex items-center justify-center transition-all duration-250 group hover:scale-110 hover:shadow-[0_0_14px_rgba(225,48,108,0.6)]">
                <svg viewBox="0 0 24 24" className="fill-[#E1306C] group-hover:fill-white transition-colors" style={{width:'18px',height:'18px'}}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>

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

    {/* ── 獨立 CTA 欄（固定，緊貼導航欄下方，靠右） ── */}
    <div className="fixed top-[112px] right-0 z-40 hidden lg:block">
      <a
        href="#"
        className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-l-full font-headline font-black text-sm text-black
          bg-gradient-to-r from-[#b8e000] via-[#9ed600] to-[#0DF258]
          shadow-[-6px_4px_24px_rgba(158,214,0,0.45)]
          hover:shadow-[-8px_4px_36px_rgba(158,214,0,0.7)]
          hover:pr-9 active:scale-[0.97] transition-all duration-300 whitespace-nowrap"
      >
        點我註冊 Bitunix｜進 DMC 社群領完整實戰教學
      </a>
    </div>
    </>
  );
}
