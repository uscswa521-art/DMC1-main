"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Advantages } from "@/components/sections/Advantages";
// import { Indicators } from "@/components/sections/Indicators";
import { BitunixPartner } from "@/components/sections/BitunixPartner";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
// import { Testimonials } from "@/components/sections/Testimonials";
// import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />

        {/* Hero — no reveal wrapper (has its own intro) */}
        <Hero />

        {/* Every section below gets the tile-shatter scroll reveal */}
        <SectionReveal><Advantages /></SectionReveal>
        {/* <SectionReveal><Indicators /></SectionReveal> */}
        <SectionReveal><BitunixPartner /></SectionReveal>
        <SectionReveal><WhoIsItFor /></SectionReveal>
        {/* <SectionReveal><Testimonials /></SectionReveal> */}
        {/* <SectionReveal><FAQ /></SectionReveal> */}
        <SectionReveal><CTA /></SectionReveal>
        <SectionReveal><Footer /></SectionReveal>

        {/* Global scanline overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <div
            className="absolute inset-0 animate-scanline"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(13, 242, 88, 0.03) 50%, transparent)" }}
          />
        </div>
      </main>
    </LanguageProvider>
  );
}
