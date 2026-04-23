"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '', uid: '' });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    alert("SYSTEM_MSG: Initialization Sequence Started. Check your email for next steps.");
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 scanline-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 lg:px-12 relative z-10 max-w-3xl">
        <div className="bg-[#111713] border-4 border-neon-green/30 p-10 rounded-2xl shadow-[0_0_100px_rgba(13,242,88,0.1)] space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-white">{t.cta.heading}</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green/50 font-code text-xs">[INPUT_NAME]</span>
                <Input
                  placeholder={t.cta.namePlaceholder}
                  className="pl-28 bg-black border-neon-green/30 text-neon-green font-code focus-visible:ring-neon-green focus-visible:border-neon-green h-14"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-neon-green group-focus-within:animate-ping opacity-50" />
              </div>

              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green/50 font-code text-xs">[INPUT_EMAIL]</span>
                <Input
                  type="email"
                  placeholder={t.cta.emailPlaceholder}
                  className="pl-32 bg-black border-neon-green/30 text-neon-green font-code focus-visible:ring-neon-green focus-visible:border-neon-green h-14"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neon-green/50 font-code text-xs">[INPUT_UID]</span>
                <Input
                  placeholder={t.cta.uidPlaceholder}
                  className="pl-28 bg-black border-neon-green/30 text-neon-green font-code focus-visible:ring-neon-green focus-visible:border-neon-green h-14"
                  value={formData.uid}
                  onChange={(e) => setFormData({ ...formData, uid: e.target.value })}
                  required
                />
              </div>
            </div>

            <Button size="lg" className="w-full h-20 bg-neon-green text-black hover:bg-neon-green/90 shadow-[0_0_40px_rgba(13,242,88,0.4)] font-black text-xl tracking-widest uppercase transition-all active:scale-[0.98]">
              {t.cta.submitButton}
            </Button>

            <p className="text-center text-[10px] font-code text-white/30 uppercase tracking-[0.3em]">
              Verification process may take up to 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
