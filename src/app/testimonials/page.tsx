"use client";

import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SectionReveal } from "@/components/SectionReveal";

export default function TestimonialsPage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <SectionReveal><Testimonials /></SectionReveal>
          <SectionReveal><Footer /></SectionReveal>
        </div>
      </main>
    </LanguageProvider>
  );
}
