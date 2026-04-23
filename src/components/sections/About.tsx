"use client";

import { Card } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 parallax-wireframe opacity-20" />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── 左欄：圖片 ── */}
        <div className="relative">
          <Card className="bg-[#111713] border-2 border-neon-green/30 p-1 rounded-xl shadow-[0_0_50px_rgba(13,242,88,0.1)] group transition-all duration-500 animate-pulse-glow">
            <div className="bg-[#050508] p-4 border-b border-neon-green/20 flex items-center rounded-t-lg">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/50" />
                <div className="w-3 h-3 rounded-full bg-neon-chartreuse/50" />
                <div className="w-3 h-3 rounded-full bg-neon-green/50" />
              </div>
            </div>
            <div className="p-6">
              <img
                src="/price-action.png"
                alt="DMC主力思維K線型態價格行為分析圖"
                className="w-full h-auto rounded border border-neon-green/10"
              />
            </div>
          </Card>
        </div>

        {/* ── 右欄：文字 ── */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">{t.about.heading}</h2>
          </div>

          <div className="bg-[#111713]/80 border border-neon-green/20 p-8 rounded-lg space-y-4 font-code text-sm">
            <p className="text-foreground">{t.about.log001}</p>
            <p className="text-foreground">{t.about.log002}</p>
            <p className="text-foreground">{t.about.log003}</p>
            <p className="text-foreground">{t.about.log004}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 border border-destructive/30 bg-destructive/5 rounded-md">
              <AlertCircle className="text-destructive shrink-0 mt-1" />
              <div>
                <h4 className="text-destructive font-bold mb-1">{t.about.warningTitle}</h4>
                <p className="text-muted-foreground text-sm">
                  {t.about.warningDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
