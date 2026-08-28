"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, SectionTag } from "@/components/ui";
import { PLATFORMS, CONTACT, RELEASED } from "@/data/site";

export default function WhalesailsRecords() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/whalesails/img/hero-press.jpg"
            alt="Whalesails Records — session"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative z-10 text-center px-5 pt-24">
          <p className="text-[10px] font-mono tracking-[0.5em] text-white/50 uppercase mb-8">
            Premier record label
          </p>
          <h1 className="font-display text-[clamp(3.5rem,12vw,11rem)] uppercase leading-[0.85] tracking-tight">
            Whalesails
            <br />
            Records
          </h1>
          <p className="mt-8 text-sm md:text-base text-white/50 tracking-[0.2em] uppercase">
            Cinematic sound. Timeless vision.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/artist"
              className="bg-white text-black px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/80 transition-all"
            >
              The Artist
            </Link>
            <Link
              href="/release"
              className="border border-white/30 text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/10 transition-all"
            >
              Latest Release
            </Link>
          </div>
        </div>

        <a
          href="#label"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-[9px] font-mono tracking-[0.45em] text-white/50 uppercase">
            Scroll
          </span>
          <span className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </a>
      </section>

      {/* THE ARTIST */}
      <section className="relative py-24 md:py-36 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <SectionTag>The Artist</SectionTag>
            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] uppercase leading-none">
              Ario
              <br />
              <span className="text-stroke">PaPa</span>
            </h2>
            <p className="mt-8 text-white/55 leading-relaxed max-w-md text-[15px]">
              The recording artist at the heart of Whalesails Records — a
              cinematic sound carrying the energy of Lagos outward, built to
              last.
            </p>
            <Link
              href="/artist"
              className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase border-b border-white/30 pb-2 hover:border-white transition-colors"
            >
              Meet the artist
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/whalesails/img/artist-2.jpg"
                alt="Ario PaPa"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 w-full h-full border border-white/5" />
          </Reveal>
        </div>
      </section>

      {/* RELEASES */}
      <section className="relative py-24 md:py-36 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionTag>Releases</SectionTag>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                Out in
                <br />
                <span className="text-white/30">the wild.</span>
              </h2>
            </div>
            <Link
              href="/release"
              className="group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase border-b border-white/30 pb-2 hover:border-white transition-colors shrink-0"
            >
              All releases
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
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
                          {s.artist} · {s.year}
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
                          {s.artist} · {s.year}
                        </p>
                      </div>
                    </div>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE LABEL */}
      <section id="label" className="relative py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <SectionTag center>The Label</SectionTag>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
              A premium record label built on discipline, authenticity and
              long-term{" "}
              <span className="text-white/30">creative value.</span>
            </h2>
            <p className="mt-8 text-white/50 leading-relaxed max-w-lg mx-auto text-[15px]">
              Developing artists, building enduring intellectual property and
              presenting work engineered for global relevance — substance over
              hype, always.
            </p>
            <Link
              href="/label"
              className="group mt-10 inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase border-b border-white/30 pb-2 hover:border-white transition-colors"
            >
              About the label
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-24 md:py-32 bg-[#0a0b0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <SectionTag center>Get in touch</SectionTag>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
              Make noise.
              <br />
              <span className="text-white/30">We&apos;ll make it last.</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] leading-relaxed mb-12">
              Demos, bookings, partnerships and press — the label office is
              open to the world.
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/80 transition-all"
            >
              {CONTACT.email}
            </a>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase hover:text-white transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}