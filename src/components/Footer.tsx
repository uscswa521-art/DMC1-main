"use client";

import { Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const LINKS = ["首頁", "DMC優勢", "BITUNIX專區", "聯絡我們"];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const rightsText = t.footer.rights.replace('{year}', String(currentYear));

  return (
    <footer className="bg-[#050508] border-t border-white/5">

      {/* ── CTA Banner ── */}
      <div className="py-16 flex items-center justify-center px-6">
        <a
          href="#"
          className="group relative inline-flex items-center gap-4 px-12 py-5 rounded-full font-headline font-black text-xl md:text-2xl text-black
            bg-gradient-to-r from-[#b8e000] via-[#9ed600] to-[#0DF258]
            shadow-[0_0_40px_rgba(158,214,0,0.45),0_0_80px_rgba(13,242,88,0.2)]
            hover:shadow-[0_0_60px_rgba(158,214,0,0.65),0_0_100px_rgba(13,242,88,0.35)]
            hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
        >
          {t.hero.ctaRegister}
          <ArrowRight size={24} className="shrink-0 group-hover:translate-x-1.5 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
        </a>
      </div>

      {/* ── 4-column info bar ── */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* 免責聲明 */}
            <div className="space-y-4 lg:col-span-1">
              <h4 className="font-headline font-bold text-white text-sm tracking-widest uppercase">免責聲明</h4>
              <div className="h-px w-8 bg-neon-green/50" />
              <p className="text-xs text-white/40 leading-relaxed">
                DMC 加密交易術並未註冊為金融顧問。本網站及 DMC 提供的所有內容僅供教育用途，不應視為財務建議。您必須了解並願意承擔任何程度的風險才能投資金融市場。過往業績並不代表未來表現。
              </p>
            </div>

            {/* 聯絡方式 */}
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-white text-sm tracking-widest uppercase">聯絡方式</h4>
              <div className="h-px w-8 bg-neon-green/50" />
              <div className="space-y-2">
                <p className="text-xs text-white/40 uppercase tracking-wider">電郵</p>
                <a href="mailto:info@dmctrader.com" className="text-sm text-neon-green/80 hover:text-neon-green transition-colors font-code">
                  info@dmctrader.com
                </a>
              </div>

              {/* 社群 */}
              <div className="space-y-3 pt-4">
                <p className="text-xs text-white/40 uppercase tracking-wider">社群</p>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a href="#" aria-label="Facebook"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ background: "#1877F2" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="#" aria-label="YouTube"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ background: "#FF0000" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                    </svg>
                  </a>
                  {/* Telegram */}
                  <a href="#" aria-label="Telegram"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ background: "#229ED9" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.68 7.92c-.12.56-.46.7-.94.43l-2.6-1.92-1.25 1.2c-.14.14-.26.26-.52.26l.18-2.6 4.74-4.28c.2-.18-.04-.28-.32-.1L7.6 14.47l-2.52-.79c-.55-.17-.56-.55.12-.82l9.84-3.8c.46-.17.86.11.7.74z"/>
                    </svg>
                  </a>
                  {/* Discord */}
                  <a href="#" aria-label="Discord"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ background: "#5865F2" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" aria-label="Instagram"
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                    style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 連結 */}
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-white text-sm tracking-widest uppercase">連結</h4>
              <div className="h-px w-8 bg-neon-green/50" />
              <ul className="space-y-3">
                {LINKS.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-neon-green transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 法律 */}
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-white text-sm tracking-widest uppercase">法律</h4>
              <div className="h-px w-8 bg-neon-green/50" />
              <ul className="space-y-3">
                {['私隱政策', '服務條款', '風險警告'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 hover:text-neon-green transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neon-green/30 shadow-[0_0_10px_rgba(13,242,88,0.25)]">
                <Image src="/dmc-logo.png" alt="DMC" width={40} height={40} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-headline font-bold text-neon-green flex items-baseline">
                <span className="text-2xl tracking-tighter">DMC</span>
                <span className="text-sm font-medium whitespace-nowrap ml-1">加密交易術</span>
              </div>
            </div>

            <p className="text-xs font-code text-white/25 uppercase tracking-widest">
              {rightsText}
            </p>

            <div className="flex items-center gap-3 text-white/25">
              <Terminal size={12} />
              <span className="text-xs font-code tracking-tighter">CONNECTION_SECURE // LATENCY: 22ms</span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
