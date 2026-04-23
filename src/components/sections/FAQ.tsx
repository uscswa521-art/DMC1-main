"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section id="faq" className="relative py-20 bg-[#050508]">
      <div className="container px-6 lg:px-12 max-w-4xl">

        {/* ── Clickable header ── */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full group focus:outline-none"
        >
          <div className="flex flex-col items-center gap-4 mb-2">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white group-hover:text-neon-green transition-colors duration-300">
                {t.faq.heading}
              </h2>
              <ChevronDown
                size={32}
                className={`text-neon-green transition-transform duration-500 ${open ? "rotate-180" : "rotate-0"}`}
              />
            </div>

            {/* animated underline hint */}
            <div className={`h-px bg-neon-green/40 transition-all duration-500 ${open ? "w-full" : "w-24 group-hover:w-48"}`} />

            <p className={`text-xs font-code text-neon-green/50 tracking-widest transition-opacity duration-300 ${open ? "opacity-0 h-0" : "opacity-100"}`}>
              CLICK TO EXPAND ▾
            </p>
          </div>
        </button>

        {/* ── Collapsible content ── */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            open ? "max-h-[9999px] opacity-100 mt-12" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full space-y-4 border-none">
            {t.faq.items.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-neon-green/10 bg-[#111713] rounded-lg overflow-hidden group data-[state=open]:border-neon-green transition-all"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline text-left text-white group-hover:text-neon-green transition-colors font-headline text-lg">
                  <span className="font-code mr-4 opacity-30">[{idx + 1}]</span>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground font-body text-base leading-relaxed border-t border-neon-green/5 bg-black/20">
                  <div className="flex gap-4 pt-4">
                    <span className="text-neon-green font-code text-sm shrink-0 mt-1">RESPONSE_&gt;</span>
                    <p>{faq.a}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Collapse button at bottom */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-xs font-code text-neon-green/50 hover:text-neon-green border border-neon-green/20 hover:border-neon-green/50 px-6 py-2.5 rounded transition-all duration-200"
            >
              <ChevronDown size={14} className="rotate-180" />
              COLLAPSE
              <ChevronDown size={14} className="rotate-180" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
