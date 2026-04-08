"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const features = [
  {
    label: "Community",
    title: "Circles, Not Followers",
    description:
      "Every post lives inside a Circle — a focused community built around shared interests. Join a Circle and you're in. No follower counts, no clout chasing. Just people who care about the same things you do.",
    details: [
      "Public and private Circles",
      "Discussion-driven engagement",
      "Earn admin status through contribution",
    ],
    gradient: "from-solar-orange/20 to-burnt-orange/5",
    accentColor: "text-solar-orange",
    borderColor: "border-solar-orange/20",
    iconBg: "bg-solar-orange/10",
  },
  {
    label: "Transparency",
    title: "Metrics That Actually Matter",
    description:
      "See the real engagement rate on every post — the percentage of viewers who actually interacted. No more guessing if content is valuable or just popular.",
    details: [
      "True engagement ratios",
      "Average view duration for video",
      "Content value over popularity",
    ],
    gradient: "from-eclipse-blue/20 to-navy-blue/5",
    accentColor: "text-eclipse-blue",
    borderColor: "border-eclipse-blue/20",
    iconBg: "bg-eclipse-blue/10",
  },
  {
    label: "Intelligence",
    title: "Your AI-Powered Profile",
    description:
      "Tell Mirror what you're looking for in your own words. It updates your profile and preferences to connect you with the right people — without endless form-filling.",
    details: [
      "Natural language profile editing",
      "AI-driven matchmaking",
      "Learns your preferences over time",
    ],
    gradient: "from-solar-orange/20 to-eclipse-blue/10",
    accentColor: "text-solar-orange",
    borderColor: "border-solar-orange/20",
    iconBg: "bg-solar-orange/10",
  },
  {
    label: "Discipline",
    title: "Built-In Accountability",
    description:
      "Track habits, build streaks, and stay accountable. Your commitments surface right in your feed — a reminder to stay on track while you scroll.",
    details: [
      "Custom habit tracking",
      "Streak milestones",
      "Feed-integrated reminders",
    ],
    gradient: "from-eclipse-blue/20 to-solar-orange/5",
    accentColor: "text-eclipse-blue",
    borderColor: "border-eclipse-blue/20",
    iconBg: "bg-eclipse-blue/10",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      {/* Background orb */}
      <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] top-1/4 -right-40 absolute" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="Features"
          title="Built Different. On Purpose."
          description="Every feature is designed to help you grow — not just scroll."
        />

        <div className="space-y-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Text */}
              <div className="flex-1">
                <span
                  className={`inline-block text-xs font-semibold tracking-widest uppercase ${feature.accentColor} mb-3`}
                >
                  {feature.label}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-foreground-secondary"
                    >
                      <div
                        className={`w-6 h-6 rounded-full ${feature.iconBg} flex items-center justify-center flex-shrink-0`}
                      >
                        <svg
                          className={`w-3.5 h-3.5 ${feature.accentColor}`}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l4 4 6-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div className="flex-1 w-full max-w-md">
                <div
                  className={`glass rounded-3xl p-8 border ${feature.borderColor} relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
                  />
                  <div className="relative z-10">
                    {/* Feature illustration placeholder */}
                    <div className="aspect-[4/3] rounded-2xl bg-surface-secondary/50 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center mx-auto mb-4`}
                        >
                          <FeatureIcon index={i} className={feature.accentColor} />
                        </div>
                        <p className="text-sm text-foreground-muted">
                          {feature.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ index, className }: { index: number; className: string }) {
  const icons = [
    // Circles
    <svg key={0} className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="2" fill="currentColor" />
    </svg>,
    // Metrics
    <svg key={1} className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="18" width="6" height="10" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="13" y="12" width="6" height="16" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="22" y="4" width="6" height="24" rx="1" fill="currentColor" />
    </svg>,
    // Mirror AI
    <svg key={2} className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12c2.2 0 4.3-.6 6.1-1.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 12l4-4m0 0l4 4m-4-4v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    // Habits
    <svg key={3} className={`w-8 h-8 ${className}`} viewBox="0 0 32 32" fill="none">
      <path
        d="M8 16l5 5 11-11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 16c0 6.6-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>,
  ];
  return icons[index] || null;
}
