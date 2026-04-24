"use client";

import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VIDEO_IMAGES = [
  "/orderbook.png",
  "/scalping.png",
  "/ict-time.png",
  "/sakata.png",
  "/ichimoku.png",
  "/dmc-strategy.png",
];

export function TrainingMatrix() {
  const { t } = useLanguage();

  return (
    <section id="training" className="relative py-32 bg-[#1A201C]">
      <div className="container px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white leading-snug">{t.training.heading}</h2>
          </div>
          <p className="text-muted-foreground max-w-md font-body leading-relaxed">
            {t.training.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.training.videos.map((video, idx) => (
            <div
              key={idx}
              className="group relative bg-[#050508] border border-white/5 overflow-hidden cursor-pointer"
            >
              {/* Full image — no crop */}
              <img
                src={VIDEO_IMAGES[idx]}
                alt={`DMC免費加密貨幣交易課程 - ${video.title}`}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-16 h-16 rounded-full border-2 border-neon-green flex items-center justify-center bg-neon-green/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="text-neon-green fill-neon-green ml-1" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-headline font-bold text-white mb-2 leading-snug group-hover:text-neon-green transition-colors">
                  {video.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-code text-neon-chartreuse/60 overflow-hidden">
                  <span className="group-hover:translate-x-0 -translate-x-full transition-transform duration-300">
                    &gt;_ PLAY VIDEO
                  </span>
                </div>
              </div>

              {/* Glowing Border Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-green transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
