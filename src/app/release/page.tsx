"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { PLATFORMS, RELEASED } from "@/data/site";

export default function ReleasePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="New Release"
        title="Debut"
        accent="Single"
        desc="The first release from Whalesails Records — a cinematic introduction to the sound of Ario PaPa."
        image="/whalesails/artwork-song.png"
      />

      {/* Artwork + streams */}
      <section className="relative py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="relative max-w-md mx-auto lg:mx-0 w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, ease: EASE }}
              className="relative aspect-square overflow-hidden border border-white/15"
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
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </span>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <SectionTag>Stream Now</SectionTag>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-4">
              Ario PaPa
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-white/40" />
              <span className="text-[10px] font-mono tracking-[0.35em] text-white/40 uppercase">
                Single · 2026
              </span>
            </div>
            <p className="text-white/55 leading-relaxed max-w-md text-[15px] mb-10">
              Stream the debut single across every platform — and watch for the
              next signal from the label.
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
          </Reveal>
        </div>
      </section>

      {/* Released */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-14">
            <SectionTag>Released</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              Out in <span className="text-white/30">the wild.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELEASED.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                {s.url === "#" ? (
                  <div className="group">
                    <div className="relative aspect-square overflow-hidden border border-white/10">
                      <Image
                        src={s.artwork}
                        alt={`${s.artist} — ${s.title} artwork`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] text-white uppercase bg-black/50 px-3 py-1.5 border border-white/15">
                        {s.tag}
                      </span>
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
                    </div>
                  </div>
                ) : (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-square overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                      <Image
                        src={s.artwork}
                        alt={`${s.artist} — ${s.title} artwork`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.3em] text-white uppercase bg-black/50 px-3 py-1.5 border border-white/15">
                        {s.tag}
                      </span>
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
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
              Request <span className="text-white/30">press access</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/80 transition-all"
            >
              Contact the Label →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}