"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { STATS, CONTACT } from "@/data/site";

const PILLARS = [
  {
    title: "Sovereign Ownership",
    desc: "Artists keep the masters. We build IP structures that let creators own their work and control their future — no hostage clauses, no indentured deals.",
  },
  {
    title: "Cinematic Presentation",
    desc: "Restrained aesthetics, careful composition and premium execution. Every asset communicates timeless quality — contemporary, yet resistant to trends.",
  },
  {
    title: "Long-Term Value",
    desc: "Patience, structure and strategic thinking guide every project. We build for generations, not for the algorithm cycle.",
  },
];

export default function LabelPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="The Label"
        title="Whalesails"
        accent="Records LTD"
        desc="A premium record label built on discipline, authenticity and long-term creative value — developing artists, building enduring intellectual property and presenting cinematic work engineered for global relevance."
        image="/whalesails/img/press-8.jpg"
      />

      {/* Story */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/whalesails/img/press-5.jpg"
                alt="Whalesails Records session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 w-full h-full border border-white/5" />
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <SectionTag>Our Story</SectionTag>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mb-8">
              Built to
              <br />
              <span className="text-white/30">outlast everything.</span>
            </h2>
            <div className="space-y-5 text-white/55 leading-relaxed text-[15px]">
              <p>
                Whalesails Records LTD was founded on a conviction: that
                meaningful success in music requires patience, structure and
                strategic thinking — and that artistry deserves an institution
                built to protect it.
              </p>
              <p>
                Operating within the broader framework of {CONTACT.parent}, the
                label functions as an integrated platform that supports
                artists, develops valuable creative assets and promotes
                sustainable independence throughout the creative process.
              </p>
              <p>
                From photography and branding to songwriting, company
                development and long-term strategic planning, every element is
                treated as part of a single ecosystem — where storytelling,
                visual identity, business structure and artistic excellence
                reinforce one another.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <SectionTag>What we stand on</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mb-16">
              Three <span className="text-white/30">pillars</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: EASE }}
                className="group relative bg-[#0a0b0d] p-8 md:p-10 hover:bg-black transition-colors duration-500"
              >
                <span className="font-display text-5xl text-white/10 group-hover:text-white/25 transition-colors block mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
                className="border-l border-white/10 pl-4"
              >
                <div className="font-display text-5xl text-white">{s.value}</div>
                <div className="text-[9px] font-mono tracking-[0.25em] text-white/35 uppercase mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal className="border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-4xl md:text-5xl uppercase leading-[0.95]">
                Hear the <span className="text-white/30">sound.</span>
              </h3>
              <p className="text-sm text-white/45 mt-4 max-w-md leading-relaxed">
                Meet the artist behind the label — Ario PaPa.
              </p>
            </div>
            <Link
              href="/artist"
              className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
            >
              Meet the Artist →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
