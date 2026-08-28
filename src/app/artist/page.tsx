"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag } from "@/components/ui";
import { PLATFORMS, RELEASED } from "@/data/site";

export default function ArtistPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="The Artist"
        title="Ario"
        accent="PaPa"
        desc="Recording artist at Whalesails Records — cinematic sound built to last."
        image="/whalesails/img/artist-2.jpg"
      />

      {/* Bio */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/whalesails/img/artist-5.jpg"
                alt="Ario PaPa"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[9px] font-mono tracking-[0.35em] text-white/60 uppercase">
                  Ario PaPa — {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7 flex flex-col justify-center">
            <SectionTag>About</SectionTag>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mb-8">
              The
              <br />
              <span className="text-white/30">sound</span>
            </h2>
            <p className="text-white/55 leading-relaxed text-[15px]">
              Ario PaPa is a recording artist whose sound carries the energy of
              Lagos outward — cinematic, melodic and built to last. His work
              prioritises authenticity over trends, and long-term value over
              quick attention. Every release is developed with restraint and
              care, released only when it is ready to be heard.
            </p>
            <p className="text-white/55 leading-relaxed text-[15px] mt-6">
              He records and releases under Whalesails Records.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Releases */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-14">
            <SectionTag>Releases</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              The <span className="text-white/30">catalogue</span>
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
                    <h3 className="font-display text-2xl uppercase tracking-wide pt-4">
                      {s.title}
                    </h3>
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
                    <h3 className="font-display text-2xl uppercase tracking-wide pt-4">
                      {s.title}
                    </h3>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Listen */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
            <div>
              <SectionTag>Listen</SectionTag>
              <h3 className="font-display text-3xl md:text-5xl uppercase">
                Every <span className="text-white/30">platform.</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 py-8 px-4 bg-[#0a0b0d] hover:bg-white hover:text-black transition-colors duration-300"
              >
                <span className="font-display text-2xl tracking-[0.1em] uppercase">
                  {p.name}
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] text-white/35 group-hover:text-black/50 uppercase">
                  {p.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
              The debut
              <br />
              <span className="text-white/30">is coming.</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] leading-relaxed mb-10">
              The first release from Ario PaPa — engineered for the first
              listen.
            </p>
            <Link
              href="/release"
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
            >
              The Release →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}