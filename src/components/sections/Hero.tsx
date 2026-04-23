"use client";

import { Typewriter } from "@/components/terminal/Typewriter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110 blur-[2px]"
      >
        <source
          src="https://res.cloudinary.com/dfu6gb3nu/video/upload/v1776920594/DMC_TRADING_GROUP_202604231252_p9hpgp.webm"
          type="video/webm"
        />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 scanline-bg pointer-events-none z-15" />

      <div className="container relative z-20 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 max-w-2xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight text-white neon-glow">
            {t.hero.headline}
          </h1>

          <p className="text-xl md:text-2xl font-headline text-neon-chartreuse/90 border-l-4 border-neon-green pl-6 py-2">
            {t.hero.subheadline}
          </p>

          <p className="text-muted-foreground text-lg font-body leading-relaxed">
            {t.hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="bg-neon-green text-black hover:bg-neon-green/90 shadow-[0_0_20px_rgba(13,242,88,0.5)] font-bold text-lg px-8 group">
              {t.hero.ctaPrimary}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-neon-green/50 text-neon-green bg-black hover:bg-neon-green hover:text-black transition-all font-code text-sm uppercase tracking-tighter">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Parallax Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050508] to-transparent z-20" />
    </section>
  );
}
