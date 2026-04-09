"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Sign up and tell Mirror AI about your goals, interests, and what kind of people you want to connect with. No forms — just talk naturally.",
    color: "text-solar-orange",
    borderColor: "border-solar-orange/30",
    bgColor: "bg-solar-orange/10",
  },
  {
    number: "02",
    title: "Join Circles",
    description:
      "Browse public Circles or get AI-recommended ones. Join communities that match your ambitions and start engaging in discussions.",
    color: "text-eclipse-blue",
    borderColor: "border-eclipse-blue/30",
    bgColor: "bg-eclipse-blue/10",
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "Post, discuss, track habits, and build real relationships with people who push you forward. This is social media that works for you.",
    color: "text-solar-orange",
    borderColor: "border-solar-orange/30",
    bgColor: "bg-solar-orange/10",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative h-screen snap-start snap-always flex items-center overflow-hidden">
      <div className="gradient-orb gradient-orb-orange w-[350px] h-[350px] top-0 left-1/4 absolute" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="How It Works"
          title="Get Started in 3 Steps"
          description="Simple onboarding. Powerful connections."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-px bg-gradient-to-r from-border to-transparent" />
              )}

              <div className="glass p-8 h-full text-center">
                <div
                  className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mx-auto mb-6`}
                >
                  <span className={`text-2xl font-bold ${step.color}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
