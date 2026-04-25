"use client";

import { Navigation } from "@/components/Navigation";
import { BitunixCompare } from "@/components/sections/BitunixCompare";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function BitunixComparePage() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <BitunixCompare />
          <Footer />
        </div>
      </main>
    </LanguageProvider>
  );
}
