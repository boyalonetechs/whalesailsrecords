"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { PLATFORMS, RELEASED } from "@/data/site";

export default function ReleasePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="New Release"
        title="Debut"
        accent="Single"
        desc="The first release from Whalesails Records — a cinematic introduction to the sound of Ario PaPa. Crafted over months, engineered for the first listen."
        image="/whalesails/artwork-song.png"
      />

      {/* Artwork + pre-save */}
      <section className="relative py-20 md:py-28">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative max-w-md mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
              animate={{ opacity: 1, rotate: -4, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="relative aspect-square overflow-hidden border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
            >
              <a
                href="https://ariopapa.com/high-frequency"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Listen to High Frequency"
              />
              <Image
                src="/whalesails/artwork-song.png"
                alt="Ario PaPa — Debut single artwork"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <span className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </span>
              </motion.div>
            </motion.div>
            <div className="absolute -bottom-5 -right-5 -z-10 w-24 h-24 border border-white/15" />
          </Reveal>

          <Reveal delay={0.15}>
            <SectionTag>Pre-Save Now</SectionTag>
            <p className="text-[10px] font-mono tracking-[0.45em] text-white/40 uppercase mb-5">
              Whalesails Records presents
            </p>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-4">
              Ario PaPa
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-white/40" />
              <span className="text-[10px] font-mono tracking-[0.35em] text-white/40 uppercase">
                Single · 2026 · TBD
              </span>
            </div>
            <p className="text-white/55 leading-relaxed max-w-md text-[15px] mb-10">
              Pre-save the debut single now and it lands in your library the
              second it drops. Join the first wave — before the world catches
              up.
            </p>

            <div className="flex flex-col gap-3 max-w-md">
              {PLATFORMS.slice(0, 3).map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/10 px-6 py-4 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="text-sm font-semibold tracking-[0.15em] uppercase">
                    {p.name}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-white/35 group-hover:text-black/40 transition-colors">
                      {p.tag}
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 mt-10 text-[10px] font-mono tracking-[0.3em] text-white/40 hover:text-white uppercase underline underline-offset-8"
            >
              <Bell className="w-3.5 h-3.5" />
              Request press access
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-16">
            <SectionTag>Release Campaign</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              The <span className="text-white/30">countdown</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              {
                phase: "Phase 01",
                title: "Pre-Save",
                desc: "The signal has gone out. First listeners lock in the single before anyone else has heard it.",
                live: true,
              },
              {
                phase: "Phase 02",
                title: "The Drop",
                desc: "The single lands across every platform simultaneously — supported by the full weight of the label machine.",
                live: false,
              },
              {
                phase: "Phase 03",
                title: "The Story",
                desc: "Visuals, sessions and the narrative behind the sound — released in deliberate, cinematic sequence.",
                live: false,
              },
            ].map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.8, ease: EASE }}
                className="relative p-8 md:p-10 bg-[#0a0b0d] hover:bg-black transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono tracking-[0.35em] text-white/40 uppercase">
                    {p.phase}
                  </span>
                  {p.live ? (
                    <span className="flex items-center gap-2 text-[9px] font-mono tracking-[0.25em] text-white uppercase">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      Live now
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono tracking-[0.25em] text-white/25 uppercase">
                      Locked
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl uppercase tracking-wide mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {p.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Released */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-14">
            <SectionTag>Released</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              Out in <span className="text-white/30">the wild.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELEASED.map((s, i) => {
              const content = (
                <>
                  <div className="relative aspect-square overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                    <Image
                      src={s.artwork}
                      alt={`${s.artist} — ${s.title} artwork`}
                      fill
                      className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-[1.2s] group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] font-mono tracking-[0.3em] text-white uppercase bg-black/50 px-3 py-1.5 border border-white/15">
                        {s.tag}
                      </span>
                    </div>
                    {s.url === "#" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[9px] font-mono tracking-[0.35em] text-white/50 uppercase bg-black/60 px-4 py-2 border border-white/20">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-end justify-between pt-4">
                    <div>
                      <h3 className="font-display text-2xl uppercase tracking-wide">
                        {s.title}
                      </h3>
                      <p className="text-[9px] font-mono tracking-[0.3em] text-white/35 uppercase mt-1.5">
                        {s.artist} · {s.type} · {s.year}
                      </p>
                    </div>
                    {s.url !== "#" && (
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    )}
                  </div>
                </>
              );
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: EASE }}
                  className={s.url === "#" ? "group" : "group cursor-pointer"}
                >
                  {s.url === "#" ? (
                    <div className="h-full">{content}</div>
                  ) : (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {content}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
