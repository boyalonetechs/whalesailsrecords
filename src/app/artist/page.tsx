"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { PLATFORMS, CONTACT } from "@/data/site";

const GALLERY = [
  { src: "/whalesails/img/artist-1.jpg", tag: "SESSION 01" },
  { src: "/whalesails/img/press-2.jpg", tag: "SESSION 02" },
  { src: "/whalesails/img/artist-4.jpg", tag: "SESSION 03" },
  { src: "/whalesails/img/press-9.jpg", tag: "SESSION 04" },
  { src: "/whalesails/img/artist-7.jpg", tag: "SESSION 05" },
  { src: "/whalesails/img/press-3.jpg", tag: "SESSION 06" },
  { src: "/whalesails/img/artist-6.jpg", tag: "SESSION 07" },
  { src: "/whalesails/img/press-6.jpg", tag: "SESSION 08" },
];

export default function ArtistPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="The Artist"
        title="Ario"
        accent="PaPa"
        desc="Recording artist, creative entrepreneur and founder of Whalesails Records — a multidisciplinary practice where music, visual storytelling and strategy converge."
        image="/whalesails/img/artist-2.jpg"
      />

      {/* Bio */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
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
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-mono tracking-[0.35em] text-white/60 uppercase">
                      Ario PaPa — {new Date().getFullYear()}
                    </p>
                  </div>
                  <div className="flex items-end gap-1 h-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <span
                        key={i}
                        className="eq-bar w-[2px] bg-white"
                        style={{ animationDelay: `${i * 0.12}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-7">
              <SectionTag>The Vision</SectionTag>
              <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.95] mb-8">
                More than a career —
                <br />
                <span className="text-white/30">a creative institution.</span>
              </h2>
              <div className="space-y-5 text-white/55 leading-relaxed text-[15px]">
                <p>
                  Ario PaPa is a multidisciplinary creative, recording artist
                  and entrepreneur committed to building more than a music
                  career — he is building a lasting creative institution.
                  Guided by principles of discipline, authenticity and
                  excellence, his work combines music, visual storytelling,
                  branding and business into a unified vision designed for
                  global relevance.
                </p>
                <p>
                  Rather than following industry trends, Ario PaPa focuses on
                  creating timeless creative assets supported by strong
                  intellectual property structures and premium presentation.
                  Every release, visual and brand decision is approached with
                  long-term value in mind, reflecting a philosophy that
                  prioritizes substance over hype.
                </p>
                <p>
                  His creative direction emphasizes authenticity, emotional
                  realism, cinematic presentation and premium execution. Each
                  visual asset is designed to communicate timeless quality
                  through restrained aesthetics, carefully balanced composition
                  and attention to detail — a distinctive identity that feels
                  contemporary while remaining resistant to short-lived trends.
                </p>
                <p>
                  As the founder behind Whalesails Records LTD, operating
                  within the broader framework of {CONTACT.parent}, his
                  long-term ambition is to establish organizations capable of
                  serving creators while preserving artistic integrity and
                  commercial independence.
                </p>
              </div>

              <blockquote className="border-l-2 border-white/40 pl-6 mt-10">
                <p className="text-lg md:text-xl text-white/75 leading-relaxed italic">
                  &ldquo;Meaningful success requires patience, structure and
                  strategic thinking — every project developed with excellence,
                  consistency and long-term relevance rather than immediate
                  recognition.&rdquo;
                </p>
                <footer className="mt-4 text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                  — Ario PaPa
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Follow strip */}
      <section className="border-y border-white/10 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <SectionTag>Follow the journey</SectionTag>
              <h3 className="font-display text-3xl md:text-5xl uppercase">
                One artist. <span className="text-white/30">Every platform.</span>
              </h3>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
            {PLATFORMS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
                className="group flex flex-col items-center gap-3 py-8 px-4 bg-[#0a0b0d] hover:bg-white hover:text-black transition-colors duration-300"
              >
                <span className="font-display text-2xl tracking-[0.1em] uppercase">
                  {p.name}
                </span>
                <span className="text-[8px] font-mono tracking-[0.3em] text-white/35 group-hover:text-black/50 uppercase">
                  {p.tag}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-12">
            <SectionTag>Visual Archive</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              The <span className="text-white/30">frames</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.8, ease: EASE }}
                className="relative aspect-[3/4] group overflow-hidden border border-white/5"
              >
                <Image
                  src={g.src}
                  alt={g.tag}
                  fill
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.2s] group-hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[9px] font-mono tracking-[0.3em] text-white uppercase">
                    {g.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
              The debut
              <br />
              <span className="text-white/30">is coming.</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] leading-relaxed mb-10">
              The first release from Whalesails Records — engineered for the
              first listen.
            </p>
            <Link
              href="/release"
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
            >
              Enter the Release →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
