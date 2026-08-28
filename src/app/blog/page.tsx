"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionTag, EASE } from "@/components/ui";
import { POSTS, CATEGORIES } from "@/data/blog";

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-36 pb-20 md:pt-44 md:pb-28">
        {/* Hero */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-4 border-b border-white/5 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="max-w-2xl"
          >
            <SectionTag>The Journal</SectionTag>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[1.02]">
              Field notes from
              <br />
              <span className="text-white/30">inside the machine</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="text-white/55 text-sm md:text-base leading-relaxed max-w-sm"
          >
            Session stories, release notes and label strategy — written by the
            people inside the sound.
          </motion.p>
        </section>

        {/* Filter */}
        <section className="flex flex-wrap items-center justify-between gap-4 pt-10 pb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-5 py-2 text-[10px] font-mono tracking-[0.25em] uppercase border transition-all ${
                  active === tag
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* Posts */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                className={`group ${post.spanCol || ""}`}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <span className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.35em] text-white/70 uppercase px-3 py-1.5 border border-white/15 bg-black/40">
                      {post.category}
                    </span>
                  </div>
                  <div className="pt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-white/50 mt-2">
                        {post.author} — {post.date}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </div>

      <Footer />
    </div>
  );
}