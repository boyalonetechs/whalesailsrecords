"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Send } from "lucide-react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { PageHero, Reveal, SectionTag, EASE } from "@/components/ui";
import { PLATFORMS, CONTACT } from "@/data/site";

const INQUIRIES = [
  { title: "Artist Submissions", desc: "Demos, EPKs and project proposals for label consideration.", email: "submissions@whalesailsrecords.com" },
  { title: "Press & Media", desc: "Press kits, interviews, reviews and media partnerships.", email: CONTACT.email },
  { title: "Bookings & Events", desc: "Live bookings, appearances and event collaborations.", email: CONTACT.email },
  { title: "Business & Partnerships", desc: "Brands, investors, distributors and strategic alliances.", email: CONTACT.email },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      <Nav />

      <PageHero
        kicker="Contact"
        title="Make noise."
        accent="We'll make it last."
        desc="Demos, bookings, partnerships and press — the label office is open to the world."
        image="/whalesails/img/press-11.jpg"
      />

      {/* Contact grid */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <Reveal>
            <SectionTag>Send a message</SectionTag>
            <h2 className="font-display text-4xl md:text-5xl uppercase leading-[0.95] mb-8">
              The office
              <br />
              <span className="text-white/30">is listening.</span>
            </h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="border border-white/15 p-8"
              >
                <p className="font-display text-3xl uppercase mb-3">
                  Message received.
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  The label office will respond shortly. Meanwhile, follow the
                  journey on the platforms below.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-2 block">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full h-12 px-4 bg-transparent border border-white/15 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full h-12 px-4 bg-transparent border border-white/15 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-2 block">
                    Subject
                  </label>
                  <select
                    className="w-full h-12 px-4 bg-black border border-white/15 text-sm text-white outline-none focus:border-white/60 transition-colors"
                    defaultValue="Artist Submission"
                  >
                    {INQUIRIES.map((q) => (
                      <option key={q.title}>{q.title}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase mb-2 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what you're building..."
                    className="w-full px-4 py-3 bg-transparent border border-white/15 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </Reveal>

          {/* Info */}
          <Reveal delay={0.15}>
            <SectionTag>Direct lines</SectionTag>
            <div className="space-y-4 mb-10">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 border border-white/10 p-6 hover:bg-white hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono tracking-[0.3em] text-white/35 group-hover:text-black/50 uppercase mb-1">
                    General inquiries
                  </p>
                  <p className="text-sm font-semibold">{CONTACT.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 border border-white/10 p-6">
                <MapPin className="w-5 h-5 shrink-0" />
                <div>
                  <p className="text-[9px] font-mono tracking-[0.3em] text-white/35 uppercase mb-1">
                    Headquarters
                  </p>
                  <p className="text-sm font-semibold">
                    {CONTACT.location} · Worldwide operations
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {INQUIRIES.map((q, i) => (
                <motion.a
                  key={q.title}
                  href={`mailto:${q.email}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
                  className="group border border-white/10 p-5 hover:bg-[#0c0d0f] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-lg uppercase tracking-wide">
                      {q.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed mb-3">
                    {q.desc}
                  </p>
                  <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 group-hover:text-white/60 uppercase">
                    {q.email}
                  </p>
                </motion.a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social strip */}
      <section className="border-y border-white/10 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
          <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div>
              <SectionTag>Elsewhere</SectionTag>
              <h3 className="font-display text-3xl md:text-5xl uppercase">
                Find us <span className="text-white/30">everywhere.</span>
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

      {/* Logo marquee bottom */}
      <div className="relative py-14 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-slow opacity-60">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-10 mx-10">
                  <Image
                    src="/whalesails/wsr-logo.png"
                    alt="Whalesails Records"
                    width={140}
                    height={80}
                    className="object-contain opacity-40"
                  />
                  <span className="font-display text-4xl text-white/15 uppercase">
                    Whalesails Records
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
