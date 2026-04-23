"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Indicators() {
  const { t } = useLanguage();

  return (
    <section id="indicators" className="relative py-32 bg-[#050508]">
      <div className="absolute inset-0 scanline-bg opacity-10 pointer-events-none" />

      <div className="container px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
            {t.indicators.headingPart1}<br />
            <span className="text-neon-green">{t.indicators.headingPart2}</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mock Terminal/Settings Window */}
          <div className="bg-[#111713] rounded-xl border border-neon-green/30 shadow-[0_0_80px_rgba(13,242,88,0.15)] overflow-hidden">
            <div className="bg-[#1A201C] p-4 flex items-center border-b border-neon-green/10">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-8 border-b md:border-b-0 md:border-r border-neon-green/10 space-y-6">
                <div className="space-y-4 text-sm font-code">
                  {t.indicators.coreModules.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded bg-neon-green text-black flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border-b lg:border-b-0 lg:border-r border-neon-green/10 space-y-6">
                <div className="space-y-4 text-sm font-code">
                  {t.indicators.riskManagement.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded border border-neon-chartreuse/50 text-neon-chartreuse flex items-center justify-center shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6 bg-black/40">
                <div className="space-y-6">
                  <div className="p-4 bg-[#050508] border border-white/5 rounded-lg">
                    <p className="text-[10px] font-code text-muted-foreground uppercase mb-2">{t.indicators.requirementLabel}</p>
                    <p className="text-white text-xs leading-relaxed">
                      {t.indicators.requirementText}
                    </p>
                  </div>
                  <button className="w-full py-4 bg-neon-green text-black font-headline font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(13,242,88,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                    Initialize Access Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
