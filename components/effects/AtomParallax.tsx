"use client";

import { useEffect, useRef } from "react";

export default function AtomParallax() {
  const atomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const atom = atomRef.current;
    if (!atom) return;

    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      atom.style.setProperty("--mx", `${x * 14}px`);
      atom.style.setProperty("--my", `${y * 14}px`);
      atom.style.setProperty("--rx", `${-y * 7}deg`);
      atom.style.setProperty("--ry", `${x * 7}deg`);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div ref={atomRef} className="atom-final">
      <div className="atom-final-core" />

      <div className="atom-final-logo">
        <span>HK</span>
      </div>

      <div className="atom-final-orbit orbit-final-a" />
      <div className="atom-final-orbit orbit-final-b" />
      <div className="atom-final-orbit orbit-final-c" />

      <div className="atom-front-line front-line-a" />
      <div className="atom-front-line front-line-b" />
    </div>
  );
}
