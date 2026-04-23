"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Advantages } from "@/components/sections/Advantages";
import { Indicators } from "@/components/sections/Indicators";
import { TrainingMatrix } from "@/components/sections/TrainingMatrix";
import { BitunixPartner } from "@/components/sections/BitunixPartner";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Advantages />
        <About />
        <Indicators />
        <TrainingMatrix />
        <BitunixPartner />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />

        {/* Global Background Scanline Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100]">
          <div className="absolute inset-0 bg-transparent animate-scanline"
               style={{ background: 'linear-gradient(to bottom, transparent, rgba(13, 242, 88, 0.03) 50%, transparent)' }} />
        </div>
      </main>
    </LanguageProvider>
  );
}
