"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen snap-start snap-always flex items-start lg:items-center justify-center overflow-hidden pt-32 lg:pt-36">
      {/* Background orbs (subtler — WebGL handles main ambience) */}
      <div className="gradient-orb gradient-orb-orange w-[600px] h-[600px] -top-40 -right-40 absolute opacity-40" />
      <div className="gradient-orb gradient-orb-blue w-[500px] h-[500px] -bottom-20 -left-40 absolute opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-solar-orange mb-6">
                Coming Soon
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Your Circle.{" "}
              <br />
              <span className="text-gradient-orange">Your Growth.</span>{" "}
              <br />
              Your Way.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground-secondary max-w-xl mx-auto lg:mx-0 mb-8"
            >
              The social platform built for founders, creators, and people who
              take growth seriously. Connect through shared purpose, not vanity
              metrics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg" href="#waitlist">
                Join the Waitlist
              </Button>
              <Button variant="secondary" size="lg" href="#features">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Phone mockup with logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] md:w-[320px] h-[560px] md:h-[640px] rounded-[48px] glass-elevated p-1.5 glow-orange">
                <div className="w-full h-full rounded-[42px] bg-surface overflow-hidden flex items-center justify-center relative">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-solar-orange/5 via-transparent to-eclipse-blue/5" />
                  {/* Logo center */}
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <Logo className="w-24 h-24 md:w-32 md:h-32" />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-foreground">
                        group
                      </span>
                      <span className="text-2xl font-light text-foreground-secondary">
                        found
                      </span>
                    </div>
                    <p className="text-xs text-foreground-muted tracking-wider uppercase">
                      App Coming Soon
                    </p>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl" />
                </div>
              </div>

              {/* Floating glass elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 glass-orange px-4 py-2 rounded-xl"
              >
                <span className="text-sm font-medium text-solar-orange">Circles</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-12 glass-blue px-4 py-2 rounded-xl"
              >
                <span className="text-sm font-medium text-eclipse-blue">Mirror AI</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -right-10 glass px-4 py-2 rounded-xl"
              >
                <span className="text-sm font-medium text-foreground-secondary">Kaizen</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
