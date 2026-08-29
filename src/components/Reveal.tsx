"use client";

import { motion, useReducedMotion } from "framer-motion";

const OFFSET = 48;

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right";
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  const initial =
    reduce || from === "bottom"
      ? { opacity: 0, y: OFFSET }
      : from === "left"
        ? { opacity: 0, x: -OFFSET }
        : { opacity: 0, x: OFFSET };

  return (
    <motion.div
      className={className}
      initial={reduce ? false : initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
