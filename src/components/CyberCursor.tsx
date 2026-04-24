"use client";

import { useEffect, useRef, useState } from "react";

export function CyberCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const checkTarget = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const clickable = el.closest("a, button, [role=button], [tabindex]");
      setActive(!!clickable);
    };

    const tick = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkTarget);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkTarget);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    >
      {/* Outer targeting ring */}
      <div
        className="absolute rounded-full border transition-all duration-150"
        style={{
          width:  active ? 44 : 0,
          height: active ? 44 : 0,
          top:    active ? -22 : 0,
          left:   active ? -22 : 0,
          border: active ? "1px solid rgba(13,242,88,0.6)" : "1px solid transparent",
          boxShadow: active ? "0 0 8px rgba(13,242,88,0.4), inset 0 0 8px rgba(13,242,88,0.1)" : "none",
          opacity: active ? 1 : 0,
        }}
      />

      {/* HUD corner brackets */}
      {active && [
        { top: -14, left: -14, borderTop: "1.5px solid #0DF258", borderLeft: "1.5px solid #0DF258" },
        { top: -14, right: -14, borderTop: "1.5px solid #0DF258", borderRight: "1.5px solid #0DF258" },
        { bottom: -14, left: -14, borderBottom: "1.5px solid #0DF258", borderLeft: "1.5px solid #0DF258" },
        { bottom: -14, right: -14, borderBottom: "1.5px solid #0DF258", borderRight: "1.5px solid #0DF258" },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute"
          style={{ width: 8, height: 8, ...style }}
        />
      ))}

      {/* Centre dot */}
      <div
        className="absolute rounded-full transition-all duration-100"
        style={{
          width:  active ? 4 : 3,
          height: active ? 4 : 3,
          top:    active ? -2 : -1.5,
          left:   active ? -2 : -1.5,
          background: active ? "#0DF258" : "rgba(13,242,88,0.4)",
          boxShadow:  active ? "0 0 6px #0DF258" : "none",
        }}
      />

      {/* Crosshair lines */}
      {active && (
        <>
          <div className="absolute" style={{ width: 1, height: 10, top: -18, left: -0.5, background: "rgba(13,242,88,0.7)" }} />
          <div className="absolute" style={{ width: 1, height: 10, bottom: -18, left: -0.5, background: "rgba(13,242,88,0.7)" }} />
          <div className="absolute" style={{ height: 1, width: 10, left: -18, top: -0.5, background: "rgba(13,242,88,0.7)" }} />
          <div className="absolute" style={{ height: 1, width: 10, right: -18, top: -0.5, background: "rgba(13,242,88,0.7)" }} />
        </>
      )}
    </div>
  );
}
