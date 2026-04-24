"use client";

import { Navigation } from "@/components/Navigation";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

export default function FAQPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><FAQ /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
