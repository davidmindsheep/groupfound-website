"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // TODO: Replace with actual API endpoint (Formspree, Google Sheets, or API route)
    try {
      // Simulated success for now
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="gradient-orb gradient-orb-orange w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />
      <div className="gradient-orb gradient-orb-blue w-[400px] h-[400px] bottom-0 right-1/4 absolute" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-solar-orange mb-6">
            Early Access
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Be Part of Something Different
          </h2>
          <p className="text-lg text-foreground-secondary mb-10">
            We're launching soon. Join the waitlist to get early access and help
            shape the future of purposeful social networking.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-orange p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-solar-orange/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-solar-orange"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12l5 5L20 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                You're on the list!
              </h3>
              <p className="text-foreground-secondary">
                We'll be in touch with early access details soon.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-glass-elevated border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-solar-orange/50 focus:ring-1 focus:ring-solar-orange/50 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-3.5 rounded-full bg-solar-orange hover:bg-solar-orange-light text-white font-medium transition-all shadow-lg shadow-solar-orange/20 hover:shadow-solar-orange/40 disabled:opacity-70 cursor-pointer"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-negative text-sm mt-3">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-xs text-foreground-muted mt-4">
            No spam. Just updates on launch and early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
