"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "about", label: "About" },
  { id: "waitlist", label: "Waitlist" },
];

export function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const container = document.getElementById("snap-container");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActive(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label={`Go to ${label}`}
        >
          <span
            className={`text-xs font-medium transition-all duration-300 ${
              active === id
                ? "opacity-100 text-solar-orange translate-x-0"
                : "opacity-0 text-foreground-secondary translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-3 h-3 bg-solar-orange shadow-[0_0_8px_rgba(245,124,0,0.5)]"
                : "w-2 h-2 bg-foreground-muted/40 group-hover:bg-foreground-secondary"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
