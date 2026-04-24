"use client";

import { useEffect, useRef, useState } from "react";

/* ── Tile grid config ── */
const COLS = 9;
const ROWS = 4;
const TOTAL = COLS * ROWS;

// Blue-purple palette matching the video's 13s mosaic
const TILE_PALETTE = [
  "rgba(22,10,88,0.96)",
  "rgba(38,18,155,0.92)",
  "rgba(55,28,210,0.88)",
  "rgba(16,8,72,0.97)",
  "rgba(44,20,175,0.91)",
  "rgba(28,14,115,0.94)",
  "rgba(62,35,190,0.86)",
  "rgba(20,12,100,0.95)",
];

function tileColor(col: number, row: number) {
  return TILE_PALETTE[(col * 3 + row * 2 + col + row) % TILE_PALETTE.length];
}

// Diagonal wave: top-left → bottom-right
function tileDelay(col: number, row: number) {
  return (col + row) * 38;
}

// Max stagger time — used to time content reveal
const MAX_DELAY = ((COLS - 1) + (ROWS - 1)) * 38; // ≈ 456ms

type Phase = "idle" | "tiles" | "reveal" | "done";

interface SectionRevealProps {
  children: React.ReactNode;
  id?: string;
}

export function SectionReveal({ children, id }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (phase === "idle")) {
          // Phase 1: show tiles immediately
          setPhase("tiles");
          // Phase 2: start revealing content partway through tile destruction
          setTimeout(() => setPhase("reveal"), MAX_DELAY * 0.45);
          // Phase 3: fully done, remove tile DOM
          setTimeout(() => setPhase("done"), MAX_DELAY + 650);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [phase]);

  const showTiles = phase === "tiles" || phase === "reveal";
  const contentVisible = phase === "reveal" || phase === "done";
  const prismActive = phase === "reveal";

  return (
    <div ref={ref} id={id} className="relative overflow-hidden">

      {/* ── Tile mosaic overlay ── */}
      {showTiles && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-50"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {Array.from({ length: TOTAL }).map((_, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            return (
              <div
                key={i}
                style={{
                  background: tileColor(col, row),
                  animation: `tileShatter 0.52s cubic-bezier(0.55, 0, 0.85, 0.3) ${tileDelay(col, row)}ms both`,
                  // Subtle inner border for the tile-grid look
                  boxShadow: "inset 0 0 0 0.5px rgba(80,50,220,0.4)",
                }}
              />
            );
          })}

          {/* Wireframe triangle accent line sweeping across (16s style) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              background:
                "linear-gradient(to right, transparent, rgba(200,224,82,0.8) 30%, rgba(13,242,88,0.9) 50%, rgba(200,224,82,0.8) 70%, transparent)",
              animation: `wireframeDraw 0.6s ease ${MAX_DELAY * 0.3}ms forwards`,
              transform: "translateY(-50%)",
            }}
          />
        </div>
      )}

      {/* ── Section content ── */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          animation: contentVisible && prismActive
            ? `sectionSlideUp 0.65s ease both, prismaticFlash 0.8s ease both`
            : contentVisible
            ? "none"
            : "none",
          // Already settled after done
          transition: phase === "done" ? "none" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
