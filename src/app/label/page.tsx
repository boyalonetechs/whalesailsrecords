"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag } from "@/components/ui";

const PILLARS = [
  {
    title: "Sovereign Ownership",
    desc: "Artists keep the masters. IP structures that let creators own their work.",
  },
  {
    title: "Cinematic Presentation",
    desc: "Restrained aesthetics and premium execution — timeless, never trend-hungry.",
  },
  {
    title: "Long-Term Value",
    desc: "Patience, structure and strategy. We build for generations, not the algorithm.",
  },
];

export default function LabelPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="The Label"
        title="Whalesails"
        accent="Records LTD"
        desc="A premium record label built on discipline, authenticity and long-term creative value."
        image="/whalesails/img/press-8.jpg"
      />

      {/* Statement */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
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
            <SectionTag>What we do</SectionTag>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mb-8">
              Built to
              <br />
              <span className="text-white/30">outlast everything.</span>
            </h2>
            <p className="text-white/55 leading-relaxed text-[15px]">
              Whalesails Records LTD is a record label that treats music as a
              long game. We develop artists, build enduring creative assets and
              release work with the restraint and care of a permanent catalogue —
              across recording, visuals, branding and strategy, every element
              belongs to one ecosystem.
            </p>
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
              <div
                key={p.title}
                className="group relative bg-[#0a0b0d] p-8 md:p-10 hover:bg-black transition-colors duration-500"
              >
                <span className="font-display text-5xl text-white/10 block mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4">
                  {p.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
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