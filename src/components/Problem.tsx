"use client";

import { GlassCard } from "./ui/GlassCard";
import { SectionHeading } from "./ui/SectionHeading";

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 16h16M8 10h16M8 22h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line x1="4" y1="4" x2="28" y2="28" stroke="#FF4D6A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Noise Over Signal",
    description:
      "Traditional platforms bury meaningful content under algorithmic noise. You scroll for 30 minutes and walk away with nothing.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 6v12l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Vanity Metrics",
    description:
      "Follower counts and like numbers tell you who's popular — not who's valuable. Real engagement is invisible.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 14h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 3"
        />
        <path
          d="M6 26c0-4 3-6 8-6M18 26c0-4 3-6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "No Real Connection",
    description:
      "You follow thousands of people but connect with none. The 'social' in social media is broken.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="The Problem"
          title="Social Media Wasn't Built for You"
          description="Platforms designed for entertainment can't serve people focused on building, learning, and growing."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <GlassCard key={i} className="text-center">
              <div className="w-14 h-14 rounded-2xl glass-elevated flex items-center justify-center mx-auto mb-5 text-solar-orange">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {point.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {point.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
