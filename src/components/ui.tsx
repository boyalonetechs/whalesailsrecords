"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}
    >
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      <span className="text-[10px] font-mono tracking-[0.45em] text-white/40 uppercase">
        {children}
      </span>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  accent,
  desc,
  image,
}: {
  kicker: string;
  title: string;
  accent: string;
  desc?: string;
  image?: string;
}) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[120px]" />
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
      )}
      <div className="relative max-w-7xl mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <SectionTag>{kicker}</SectionTag>
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] uppercase leading-[0.9]">
            {title}
            <br />
            <span className="text-white/30">{accent}</span>
          </h1>
          {desc && (
            <p className="mt-8 max-w-xl text-white/55 leading-relaxed text-[15px]">
              {desc}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
