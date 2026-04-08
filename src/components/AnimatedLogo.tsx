"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Animation sequence matching the original GIF:
// Orange flat → Orange glow 1 → Orange vortex → Orange glow 2 →
// Blue flat → Blue glow 1 → Blue vortex → Blue glow 2 → loop
const frames = [
  "/logos/orange-flat.png",
  "/logos/orange-glow-1.png",
  "/logos/orange-vortex.png",
  "/logos/orange-glow-2.png",
  "/logos/blue-flat.png",
  "/logos/blue-glow-1.png",
  "/logos/blue-vortex.png",
  "/logos/blue-glow-2.png",
];

const FRAME_DURATION = 400; // ms per frame
const FADE_DURATION = 200; // ms crossfade

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, FRAME_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {frames.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? "GroupFound" : ""}
          fill
          sizes="80px"
          className="absolute inset-0 object-contain transition-opacity"
          style={{
            opacity: i === activeFrame ? 1 : 0,
            transitionDuration: `${FADE_DURATION}ms`,
            transitionTimingFunction: "ease-in-out",
          }}
          priority={i < 2}
          unoptimized
        />
      ))}
    </div>
  );
}
