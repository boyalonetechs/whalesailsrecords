"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionTag, EASE } from "@/components/ui";

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  spanCol?: string;
};

const CATEGORIES = ["All", "News", "Studio", "Releases", "Culture"];

const POSTS: Post[] = [
  {
    id: "inside-the-studio",
    title: "Inside the Studio: High Frequency",
    category: "Studio",
    author: "Ario PaPa",
    date: "JUL 2026",
    image: "/whalesails/img/press-5.jpg",
    spanCol: "md:col-span-2",
  },
  {
    id: "why-ownership-matters",
    title: "The Long Game: Why Ownership Matters",
    category: "Culture",
    author: "Editorial",
    date: "JUN 2026",
    image: "/whalesails/img/press-1.jpg",
  },
  {
    id: "session-notes-first-take",
    title: "Session Notes: First Take",
    category: "Studio",
    author: "Whalesails Records",
    date: "JUN 2026",
    image: "/whalesails/img/artist-2.jpg",
  },
  {
    id: "signal-check",
    title: "Signal Check: What's Next for the Label",
    category: "News",
    author: "Editorial",
    date: "MAY 2026",
    image: "/whalesails/img/press-8.jpg",
  },
  {
    id: "from-lagos-to-the-world",
    title: "From Lagos to the World: The Ario PaPa Story",
    category: "News",
    author: "Editorial",
    date: "MAY 2026",
    image: "/whalesails/img/artist-5.jpg",
  },
  {
    id: "playlist-intelligence",
    title: "Playlist Intelligence: Engineering the Stream",
    category: "Releases",
    author: "Editorial",
    date: "APR 2026",
    image: "/whalesails/img/press-2.jpg",
    spanCol: "md:col-span-2",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-36 pb-20 md:pt-44 md:pb-28 space-y-12">
        {/* Hero Content Section */}
        <section className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
          {/* Background Arc Effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100,280 C 400,40 700,40 900,280"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1.5"
              />
              <path
                d="M 150,320 C 450,80 650,80 850,320"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              />
            </svg>
          </div>

          {/* Left Column: Big Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="md:col-span-7 space-y-4"
          >
            <SectionTag>The Journal</SectionTag>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[1.05]">
              From Thought
              <br />
              <span className="text-white/30">to Masterpiece</span>
            </h1>
          </motion.div>

          {/* Right Column: Body Text & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="md:col-span-5 space-y-6 md:pl-6 flex flex-col items-start justify-between h-full"
          >
            <p className="text-white/55 text-sm md:text-base leading-relaxed">
              Field notes, session stories and label strategy — written by the
              people inside the machine. From first take to global signal, this
              is how we build sound that outlasts the trend cycle.
            </p>
            <a
              href="#archive"
              className="bg-white text-black px-7 py-3.5 rounded-full font-medium text-sm hover:bg-white/85 transition-all shadow-sm"
            >
              Read the Journal
            </a>
          </motion.div>
        </section>

        {/* Filter Pills & Secondary Actions */}
        <section
          id="archive"
          className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/5 scroll-mt-28"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-5 py-2 rounded-full text-xs font-medium border transition-all ${
                  active === tag
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Right Secondary Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:info@whalesailsrecords.com"
              className="px-5 py-2 rounded-full text-xs font-medium border border-white/10 text-white/50 hover:border-white/30 hover:text-white transition-all"
            >
              Newsletter
            </a>
            <a
              href="#archive"
              className="px-5 py-2 rounded-full text-xs font-medium border border-white/10 text-white/50 hover:border-white/30 hover:text-white transition-all"
            >
              Archive
            </a>
          </div>
        </section>

        {/* Dynamic Post Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl h-[420px] bg-[#111111] ${
                  post.spanCol || ""
                }`}
              >
                {/* Image Background */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="text-[9px] font-mono tracking-[0.35em] text-white/70 uppercase px-3 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>

                {/* Card Metadata (Bottom Overlay) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-white/50 mt-2">
                      {post.author} — {post.date}
                    </p>
                  </div>
                  <button
                    aria-label="View Post"
                    className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all shrink-0 ml-4"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </div>

      <Footer />
    </div>
  );
}
