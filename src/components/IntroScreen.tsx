"use client";

import { useEffect, useState } from "react";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [clock, setClock] = useState("00:00:00");

  // Capture clock only on client to avoid SSR mismatch
  useEffect(() => {
    setClock(new Date().toISOString().slice(11, 19));
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 3800),
      setTimeout(() => setPhase(3), 5800),
      setTimeout(onComplete, 6800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black overflow-hidden flex items-center justify-center"
      style={{
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? "opacity 1s ease" : "none",
        pointerEvents: phase === 3 ? "none" : "auto",
      }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(13,242,88,0.025) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* ── PHASE 0-1: Geometric wireframe ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          opacity: phase >= 2 ? 0.07 : 1,
          transition: "opacity 1.2s ease",
        }}
      >
        {/* Outer triangle */}
        <polyline
          points="720,55 55,845 1385,845 720,55"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.8"
          style={{
            strokeDasharray: 3100,
            strokeDashoffset: 3100,
            animation: "intro-drawLine 2.2s ease forwards",
          } as React.CSSProperties}
        />
        {/* Inner triangle */}
        <polyline
          points="720,190 255,745 1185,745 720,190"
          fill="none"
          stroke="rgba(13,242,88,0.18)"
          strokeWidth="0.6"
          style={{
            strokeDasharray: 2500,
            strokeDashoffset: 2500,
            animation: "intro-drawLine 2.4s ease 0.3s forwards",
          } as React.CSSProperties}
        />
        {/* Big circle */}
        <circle
          cx="720" cy="460" r="275"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.7"
          style={{
            strokeDasharray: 1730,
            strokeDashoffset: 1730,
            animation: "intro-drawLine 2.5s ease 0.2s forwards",
          } as React.CSSProperties}
        />
        {/* Horizontal rules */}
        {(
          [
            ["0","450","1440","450","0.06","1440","0.1"],
            ["0","225","1440","225","0.04","1440","0.5"],
            ["0","675","1440","675","0.04","1440","0.5"],
          ] as const
        ).map(([x1,y1,x2,y2,a,dl,delay], i) => (
          <line
            key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={`rgba(255,255,255,${a})`} strokeWidth="0.5"
            style={{
              strokeDasharray: Number(dl),
              strokeDashoffset: Number(dl),
              animation: `intro-drawLine 2s ease ${delay}s forwards`,
            } as React.CSSProperties}
          />
        ))}
        {/* Vertical center */}
        <line x1="720" y1="0" x2="720" y2="900"
          stroke="rgba(13,242,88,0.06)" strokeWidth="0.5"
          style={{ strokeDasharray: 900, strokeDashoffset: 900, animation: "intro-drawLine 1.6s ease 0.2s forwards" } as React.CSSProperties}
        />
        {/* Diagonals */}
        <line x1="0" y1="0" x2="1440" y2="900"
          stroke="rgba(255,255,255,0.04)" strokeWidth="0.4"
          style={{ strokeDasharray: 1732, strokeDashoffset: 1732, animation: "intro-drawLine 2.2s ease 0.6s forwards" } as React.CSSProperties}
        />
        <line x1="1440" y1="0" x2="0" y2="900"
          stroke="rgba(255,255,255,0.04)" strokeWidth="0.4"
          style={{ strokeDasharray: 1732, strokeDashoffset: 1732, animation: "intro-drawLine 2.2s ease 0.8s forwards" } as React.CSSProperties}
        />
        {/* Crosshair */}
        <line x1="676" y1="460" x2="764" y2="460"
          stroke="rgba(13,242,88,0.65)" strokeWidth="1.2"
          style={{ strokeDasharray: 88, strokeDashoffset: 88, animation: "intro-drawLine 0.35s ease 1.4s forwards" } as React.CSSProperties}
        />
        <line x1="720" y1="416" x2="720" y2="504"
          stroke="rgba(13,242,88,0.65)" strokeWidth="1.2"
          style={{ strokeDasharray: 88, strokeDashoffset: 88, animation: "intro-drawLine 0.35s ease 1.4s forwards" } as React.CSSProperties}
        />
        <circle cx="720" cy="460" r="6"
          fill="none" stroke="rgba(13,242,88,0.85)" strokeWidth="1.2"
          style={{ strokeDasharray: 38, strokeDashoffset: 38, animation: "intro-drawLine 0.3s ease 1.65s forwards" } as React.CSSProperties}
        />
      </svg>

      {/* ── PHASE 0: System init data text ── */}
      <div
        className="absolute top-10 left-10 space-y-1"
        style={{ opacity: phase === 0 ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        {[
          "INIT_SEQ........0x444D43",
          `CLOCK_SYNC......${clock}`,
          "SYS_CHECK.......PASS",
          "NODE_COUNT......2,048",
          "MEM_ALLOC.......OK",
        ].map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: 10,
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.05em",
            }}
          >{line}</div>
        ))}
      </div>

      {/* ── PHASE 2+: Blue matrix grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: phase >= 2 ? 0.14 : 0,
          transition: "opacity 1s ease",
          backgroundImage:
            "linear-gradient(rgba(0,80,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0,80,255,0.14) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── PHASE 1+: DMC text with chromatic aberration glitch ── */}
      {phase >= 1 && (
        <div
          className="relative flex flex-col items-center select-none"
          style={{ animation: phase === 1 ? "intro-shake 0.1s infinite" : "none" }}
        >
          {/* Red chromatic layer */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              animation: phase === 1 ? "intro-glitchR 0.13s infinite" : "none",
              opacity: phase === 1 ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(96px, 17vw, 216px)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              color: "#ff003c",
              lineHeight: 1,
            }}>DMC</span>
          </div>

          {/* Cyan chromatic layer */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              animation: phase === 1 ? "intro-glitchC 0.16s infinite" : "none",
              opacity: phase === 1 ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(96px, 17vw, 216px)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              color: "#00fff9",
              lineHeight: 1,
            }}>DMC</span>
          </div>

          {/* Main white text */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(96px, 17vw, 216px)",
              fontWeight: 900,
              letterSpacing: "0.04em",
              color: "white",
              lineHeight: 1,
              position: "relative",
              zIndex: 1,
              animation: phase === 1
                ? "intro-glitchW 0.3s infinite"
                : "intro-textReveal 0.7s ease both",
              textShadow:
                phase >= 2
                  ? "0 0 40px rgba(13,242,88,0.55), 0 0 80px rgba(13,242,88,0.2)"
                  : "none",
              transition: "text-shadow 0.8s ease",
            }}
          >DMC</span>

          {/* Subtitle — phase 2+ */}
          {phase >= 2 && (
            <p
              style={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: 11,
                letterSpacing: "0.38em",
                color: "rgba(13,242,88,0.6)",
                marginTop: 16,
                textTransform: "uppercase",
                animation: "intro-subtitleIn 0.6s ease 0.2s both",
                opacity: 0,
              }}
            >加密交易社群</p>
          )}
        </div>
      )}

      {/* ── PHASE 2+: HUD corners + progress bar ── */}
      {phase >= 2 && (
        <>
          {/* Top-left */}
          <div className="absolute top-8 left-8" style={{ animation: "intro-hudIn 0.5s ease both" }}>
            <div style={{
              width: 30, height: 30,
              borderLeft: "1.5px solid rgba(13,242,88,0.5)",
              borderTop: "1.5px solid rgba(13,242,88,0.5)",
              animation: "intro-cornerPulse 2s ease infinite",
            }} />
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", marginTop: 5, letterSpacing: "0.1em" }}>
              SYS_ACTIVE
            </div>
          </div>

          {/* Top-right */}
          <div className="absolute top-8 right-8" style={{ animation: "intro-hudIn 0.5s ease 0.1s both" }}>
            <div style={{
              width: 30, height: 30,
              borderRight: "1.5px solid rgba(13,242,88,0.5)",
              borderTop: "1.5px solid rgba(13,242,88,0.5)",
              marginLeft: "auto",
              animation: "intro-cornerPulse 2s ease 0.5s infinite",
            }} />
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", marginTop: 5, textAlign: "right", letterSpacing: "0.1em" }}>
              V_4.21.26
            </div>
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-8 left-8" style={{ animation: "intro-hudIn 0.5s ease 0.2s both" }}>
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", marginBottom: 5, letterSpacing: "0.1em" }}>
              DMC_PROTOCOL
            </div>
            <div style={{
              width: 30, height: 30,
              borderLeft: "1.5px solid rgba(13,242,88,0.5)",
              borderBottom: "1.5px solid rgba(13,242,88,0.5)",
              animation: "intro-cornerPulse 2s ease 1s infinite",
            }} />
          </div>

          {/* Bottom-right */}
          <div className="absolute bottom-8 right-8" style={{ animation: "intro-hudIn 0.5s ease 0.3s both" }}>
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: 9, color: "rgba(13,242,88,0.4)", marginBottom: 5, textAlign: "right", letterSpacing: "0.1em" }}>
              LOADING_COMPLETE
            </div>
            <div style={{
              width: 30, height: 30,
              borderRight: "1.5px solid rgba(13,242,88,0.5)",
              borderBottom: "1.5px solid rgba(13,242,88,0.5)",
              marginLeft: "auto",
              animation: "intro-cornerPulse 2s ease 1.5s infinite",
            }} />
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-20 left-1/2"
            style={{ transform: "translateX(-50%)", width: 200, animation: "intro-hudIn 0.4s ease both" }}
          >
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", width: "100%", overflow: "hidden" }}>
              <div style={{
                height: "100%",
                background: "rgba(13,242,88,0.75)",
                animation: "intro-progressFill 1.4s ease forwards",
                width: 0,
              }} />
            </div>
            <div style={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: 9,
              color: "rgba(13,242,88,0.35)",
              textAlign: "center",
              marginTop: 5,
              letterSpacing: "0.25em",
            }}>INITIALIZING...</div>
          </div>
        </>
      )}
    </div>
  );
}
