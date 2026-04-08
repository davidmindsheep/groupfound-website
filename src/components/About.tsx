"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const values = [
  {
    title: "Purpose Over Popularity",
    description:
      "We measure success by the value of connections made, not the size of audiences built.",
  },
  {
    title: "Kaizen Philosophy",
    description:
      "Continuous improvement through small daily steps. Growth isn't a sprint — it's a discipline.",
  },
  {
    title: "Transparent by Design",
    description:
      "From engagement metrics to community governance, everything is built to be honest and open.",
  },
  {
    title: "Community First",
    description:
      "Every feature is designed to strengthen communities, not extract attention from individuals.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="Built by Founders, for Founders"
          description="GroupFound was born from the frustration of trying to build meaningful connections on platforms designed for entertainment."
        />

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-foreground-secondary text-center leading-relaxed"
          >
            We're building the social platform we wish existed — one where your
            feed helps you grow, your connections are meaningful, and your time
            is respected. No ads. No algorithmic manipulation. Just a space
            designed for people who are building something.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
