"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { SERVICES, CONTACT } from "@/data/site";

const PROCESS = [
  { step: "01", title: "Listen", desc: "Send us your work. We listen to everything — no algorithms, no autoplay." },
  { step: "02", title: "Align", desc: "We meet the vision: sound, story, image and business structure in one room." },
  { step: "03", title: "Build", desc: "Development begins — recordings, visuals, IP structure and release strategy." },
  { step: "04", title: "Release", desc: "The record goes out with the full weight of the label behind it." },
  { step: "05", title: "Endure", desc: "We stay in it — catalog management, royalties, growth and the next chapter." },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="Services"
        title="What the"
        accent="label builds"
        desc="A full-service ecosystem for artists who intend to last — every function of a global label under one sovereign roof."
        image="/whalesails/img/press-10.jpg"
      />

      {/* Services grid */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.8, ease: EASE }}
                className="group relative bg-black p-8 md:p-10 hover:bg-[#0c0d0f] transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-2xl text-white/20 group-hover:text-white/60 transition-colors">
                    {s.num}
                  </span>
                  <span className="w-6 h-6 border border-white/15 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {s.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 md:py-28 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="mb-16">
            <SectionTag>How it works</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
              From demo to <span className="text-white/30">legacy</span>
            </h2>
          </Reveal>

          <div className="space-y-px bg-white/5 border border-white/5">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
                className="group grid md:grid-cols-12 gap-4 items-center bg-[#0a0b0d] px-6 md:px-10 py-7 hover:bg-black transition-colors duration-500"
              >
                <div className="md:col-span-1">
                  <span className="font-display text-3xl text-white/15 group-hover:text-white/50 transition-colors">
                    {p.step}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-white/45 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <SectionTag center>
              <span>Your move</span>
            </SectionTag>
            <h2 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-8">
              Got something
              <br />
              <span className="text-white/30">worth building?</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto text-[15px] leading-relaxed mb-10">
              Demos and partnerships land directly in the label office.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
            >
              Submit to the Label →
            </Link>
            <p className="mt-6 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
              {CONTACT.email}
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
