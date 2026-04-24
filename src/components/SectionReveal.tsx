"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "curtain" | "settle" | "done";

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
        if (entry.isIntersecting && phase === "idle") {
          // Phase 1: curtain sweeps across
          setPhase("curtain");
          // Phase 2: content appears while curtain is still visible, chroma begins
          setTimeout(() => setPhase("settle"), 300);
          // Phase 3: overlay removed, content fully settled
          setTimeout(() => setPhase("done"), 1100);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [phase]);

  const showOverlay = phase === "curtain" || phase === "settle";
  const contentVisible = phase === "settle" || phase === "done";
  const chromaActive = phase === "settle";

  return (
    <div ref={ref} id={id} className="relative overflow-hidden">

      {/* ── Curtain + triangle overlay ── */}
      {showOverlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-50"
        >
          {/* Main green curtain block */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(2,18,7,0.98) 0%, rgba(4,36,14,0.96) 70%, rgba(13,242,88,0.12) 92%, transparent 100%)",
              animation: "curtainSweep 0.72s cubic-bezier(0.76, 0, 0.24, 1) both",
            }}
          />

          {/* Bright leading edge strip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              width: 5,
              background:
                "linear-gradient(to bottom, rgba(13,242,88,0.1) 0%, rgba(13,242,88,0.9) 35%, rgba(200,224,82,1) 50%, rgba(13,242,88,0.9) 65%, rgba(13,242,88,0.1) 100%)",
              boxShadow:
                "0 0 16px rgba(13,242,88,0.95), 0 0 40px rgba(13,242,88,0.55), 0 0 80px rgba(13,242,88,0.2)",
              animation: "curtainEdgeSweep 0.72s cubic-bezier(0.76, 0, 0.24, 1) both",
            }}
          />

          {/* Wireframe triangle — centered, with chromatic aberration layers */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "triangleFlash 0.95s ease 0.08s both",
            }}
          >
            <svg
              width="170"
              height="148"
              viewBox="0 0 170 148"
              fill="none"
            >
              {/* Cyan aberration offset */}
              <polygon
                points="85,10 163,138 7,138"
                stroke="rgba(0,240,210,0.5)"
                strokeWidth="1.5"
                fill="none"
                transform="translate(-4,2)"
              />
              {/* Red aberration offset */}
              <polygon
                points="85,10 163,138 7,138"
                stroke="rgba(255,45,75,0.5)"
                strokeWidth="1.5"
                fill="none"
                transform="translate(4,-2)"
              />
              {/* Primary green triangle */}
              <polygon
                points="85,10 163,138 7,138"
                stroke="rgba(13,242,88,0.95)"
                strokeWidth="2"
                fill="rgba(13,242,88,0.03)"
              />
              {/* Internal guide lines */}
              <line
                x1="85" y1="10" x2="85" y2="138"
                stroke="rgba(13,242,88,0.22)"
                strokeWidth="0.5"
                strokeDasharray="5 4"
              />
              <line
                x1="7" y1="138" x2="163" y2="138"
                stroke="rgba(13,242,88,0.18)"
                strokeWidth="0.5"
              />
              {/* Vertex nodes */}
              <circle cx="85"  cy="10"  r="3.5" fill="#0DF258"
                style={{ filter: "drop-shadow(0 0 6px #0DF258)" }} />
              <circle cx="163" cy="138" r="3.5" fill="#0DF258"
                style={{ filter: "drop-shadow(0 0 6px #0DF258)" }} />
              <circle cx="7"   cy="138" r="3.5" fill="#0DF258"
                style={{ filter: "drop-shadow(0 0 6px #0DF258)" }} />
            </svg>
          </div>

          {/* Hollow "DMC" stamp — top-right corner */}
          <div
            style={{
              position: "absolute",
              top: 14,
              right: 18,
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 4.5vw, 52px)",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(13,242,88,0.55)",
              letterSpacing: "0.12em",
              animation: "triangleFlash 0.95s ease 0.08s both",
              userSelect: "none",
              textShadow: "0 0 20px rgba(13,242,88,0.2)",
            }}
          >
            DMC
          </div>
        </div>
      )}

      {/* ── Section content ── */}
      <div
        style={{
          opacity: contentVisible ? 1 : 0,
          animation: chromaActive ? "chromaSettle 0.88s ease both" : "none",
          transition: phase === "done" ? "none" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
