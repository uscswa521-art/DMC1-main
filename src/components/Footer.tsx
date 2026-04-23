
"use client";

import { Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

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
          點我註冊 Bitunix｜進 DMC 社群領完整實戰教學
          <ArrowRight
            size={24}
            className="shrink-0 group-hover:translate-x-1.5 transition-transform duration-300"
          />
          {/* inner glow ring */}
          <span className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors duration-300" />
        </a>
      </div>

      <div className="container px-6 lg:px-12 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-4">
              <div className="font-headline font-bold text-neon-green flex items-baseline">
                <span className="text-4xl tracking-tighter">DMC</span>
                <span className="text-lg font-medium whitespace-pre">  加密交易</span>
              </div>
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-neon-green/30 shadow-[0_0_12px_rgba(13,242,88,0.25)]">
                <Image
                  src="/dmc-logo.png"
                  alt="DMC Coin Footer"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <p className="text-[10px] font-code text-muted-foreground uppercase tracking-widest">
              {rightsText}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {['Privacy Policy', 'Terms of Service', 'Risk Warning', 'System Logs'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-code text-white/40 hover:text-neon-green transition-colors uppercase tracking-widest">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-white/20">
            <Terminal size={14} />
            <span className="text-[10px] font-code tracking-tighter">CONNECTION_SECURE // LATENCY: 22ms</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
