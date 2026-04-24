"use client";

import { Navigation } from "@/components/Navigation";
import { Indicators } from "@/components/sections/Indicators";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

export default function IndicatorsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><Indicators /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
