"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "orange" | "blue";
}

const variantClasses = {
  default: "glass",
  elevated: "glass-elevated",
  orange: "glass-orange",
  blue: "glass-blue",
};

export function GlassCard({
  children,
  className = "",
  variant = "default",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${variantClasses[variant]} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
