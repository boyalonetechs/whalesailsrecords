"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { X, Play, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Reveal, SectionTag, EASE } from "@/components/ui";
import { PLATFORMS, SERVICES, STATS, GALLERY, CONTACT, RELEASED } from "@/data/site";

// ─── Cinematic Intro ──────────────────────────────────────────────
function Intro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "wipe">("logo");

  useEffect(() => {
    const t = setTimeout(() => setPhase("wipe"), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "wipe") return;
    const t = setTimeout(onComplete, 1400);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      {phase === "logo" ? (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: EASE }}
            className="w-40 h-40 md:w-56 md:h-56 relative"
          >
            <Image
              src="/whalesails/wsr-logo.png"
              alt="Whalesails Records"
              fill
              className="object-contain"
              sizes="224px"
              priority
            />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="font-display text-3xl md:text-5xl tracking-[0.35em] text-white uppercase"
            >
              Whalesails Records
            </motion.h1>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
            className="w-40 h-px bg-white/40"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-[10px] font-mono tracking-[0.5em] text-white/40 uppercase"
          >
            Est. Sound Forward
          </motion.span>
        </div>
      ) : (
        <div className="flex h-full w-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 1,
                delay: i * 0.05,
                ease: EASE,
              }}
              className="w-1/6 h-full bg-[#1c1f24] border-r border-black"
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Newsletter Popup ─────────────────────────────────────────────
function NewsletterPopup({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-6"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ y: 60, scale: 0.94, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative w-full max-w-md border border-white/10 bg-[#0c0d0f] p-8 md:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
          aria-label="Close newsletter popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 relative mb-6">
          <Image
            src="/whalesails/wsr-logo.png"
            alt="Whalesails Records"
            fill
            className="object-contain"
            sizes="64px"
          />
        </div>
        <p className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase mb-3">
          The Inner Circle
        </p>
        <h3 className="font-display text-3xl text-white uppercase leading-none mb-4">
          First access.
          <br />
          <span className="text-white/30">First sound.</span>
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-6">
          Join the newsletter for exclusive previews, private listening
          sessions and the moment new music drops — before it hits the
          platforms.
        </p>

        {done ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/15 px-5 py-4 text-sm text-white/70"
          >
            You&apos;re in. Welcome to the inner circle.
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full h-12 px-4 bg-transparent border border-white/15 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/60 transition-colors"
            />
            <button
              type="submit"
              className="w-full h-12 bg-white text-black text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/80 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
        <button
          onClick={onClose}
          className="mt-4 text-[10px] font-mono tracking-[0.3em] text-white/30 hover:text-white/60 uppercase"
        >
          No thanks, later
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function WhalesailsRecords() {
  const [introDone, setIntroDone] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 9000);
    return () => clearTimeout(t);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans grain overflow-x-hidden">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[80] origin-left"
      />

      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/whalesails/img/hero-press.jpg"
            alt="Whalesails Records — session"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            poster="/whalesails/img/hero-press.jpg"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black" />
          <div className="absolute inset-0 bg-grid opacity-40" />

          {/* Arc line */}
          <svg
            className="absolute inset-x-0 bottom-16 w-full h-64 pointer-events-none opacity-70"
            viewBox="0 0 1000 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M -50,280 C 300,20 700,20 1050,280"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Split layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-5 md:px-10 pt-36 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end">
            {/* Left: headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
              className="md:col-span-7 space-y-6"
            >
              <SectionTag>Whalesails Records LTD</SectionTag>
              <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] uppercase tracking-tight leading-[0.95]">
                Whalesails
                <br />
                <span className="text-white/30">Records</span>
              </h1>
            </motion.div>

            {/* Right: intro + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="md:col-span-5 md:pl-6 space-y-8"
            >
              <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md">
                A premium record label built on discipline, authenticity and
                long-term creative value — cinematic work engineered for global
                relevance.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button
                  onClick={() => go("artist")}
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-5 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Enter the Sound
                </button>
                <button
                  onClick={() => go("release")}
                  className="border border-white/20 text-white px-8 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  New Music Soon
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-20 flex items-center justify-between border-t border-white/10 pt-6"
          >
            <a
              href="#label"
              className="flex items-center gap-3 text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase hover:text-white transition-colors"
            >
              <span className="w-px h-6 bg-white/30" />
              Scroll to Explore
            </a>
            <div className="hidden md:flex items-center gap-2 text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase">
              <span className="flex items-end gap-1 h-4 mr-2">
                {[3, 6, 4, 8, 5, 7, 4].map((h, i) => (
                  <span
                    key={i}
                    className="w-[2px] bg-white/70"
                    style={{ height: `${h}px`, animation: `eq ${0.9 + i * 0.15}s ease-in-out infinite` }}
                  />
                ))}
              </span>
              Sound Forward
            </div>
            <span className="text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase">
              {CONTACT.parent}
            </span>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y border-white/10 bg-[#0a0a0a] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="font-display text-2xl md:text-3xl tracking-[0.15em] text-white/25 uppercase mx-8 flex items-center gap-8"
                >
                  Whalesails Records <span className="text-white/60">✦</span>{" "}
                  Ario PaPa <span className="text-white/60">✦</span> Whales
                  Sovereign <span className="text-white/60">✦</span> Est. For
                  Generations <span className="text-white/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* THE LABEL */}
      <section id="label" className="relative py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <SectionTag>01 — The Label</SectionTag>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] mb-8">
              An institution,
              <br />
              <span className="text-white/30">not a trend.</span>
            </h2>
            <p className="text-white/55 leading-relaxed max-w-xl text-[15px]">
              Whalesails Records LTD is a premium record label built on
              discipline, authenticity and long-term creative value. Operating
              under the broader vision of {CONTACT.parent}, we develop artists,
              build enduring intellectual property and present cinematic work
              engineered for global relevance — substance over hype, always.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
                  className="border-l border-white/10 pl-4"
                >
                  <div className="font-display text-4xl text-white">
                    {s.value}
                  </div>
                  <div className="text-[9px] font-mono tracking-[0.25em] text-white/35 uppercase mt-2">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src="/whalesails/img/press-7.jpg"
                alt="Whalesails Records studio session"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-mono tracking-[0.35em] text-white/60 uppercase">
                    Session 07 — Direction
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
            <div className="absolute -top-4 -right-4 -z-10 w-40 h-40 border border-white/15" />
            <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full border border-white/5" />
          </Reveal>
        </div>
      </section>

      {/* ARTIST */}
      <section
        id="artist"
        className="relative py-24 md:py-36 bg-[#0a0b0d] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <SectionTag>02 — The Artist</SectionTag>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">
                Ario
                <br />
                <span className="text-stroke">PaPa</span>
              </h2>
              <p className="max-w-sm text-sm text-white/45 leading-relaxed">
                Recording artist, creative entrepreneur and the founder whose
                vision built Whalesails Records — a multidisciplinary practice
                where music, storytelling and strategy converge.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[3/4] overflow-hidden border border-white/10 group">
                <Image
                  src="/whalesails/img/artist-2.jpg"
                  alt="Ario PaPa portrait"
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <p className="text-[9px] font-mono tracking-[0.35em] text-white/60 uppercase">
                    The Founder
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 flex flex-col justify-between gap-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] relative overflow-hidden border border-white/10 group">
                  <Image
                    src="/whalesails/img/press-4.jpg"
                    alt="Ario PaPa session"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
                <div className="aspect-[3/4] relative overflow-hidden border border-white/10 group">
                  <Image
                    src="/whalesails/img/artist-6.jpg"
                    alt="Ario PaPa session"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                </div>
              </div>

              <div className="border border-white/10 bg-black/40 p-6 md:p-8">
                <p className="text-sm md:text-base text-white/65 leading-relaxed">
                  &ldquo;Every release, visual and brand decision is approached
                  with long-term value in mind — substance over hype, and
                  intellectual property built to create value across
                  generations.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <span className="w-8 h-px bg-white/40" />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase">
                    Ario PaPa — Founder, Whalesails Records
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELEASE */}
      <section id="release" className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-10">
          <Reveal>
            <SectionTag>03 — New Release</SectionTag>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
                  whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: EASE }}
                  className="relative aspect-square overflow-hidden border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
                >
                  <Image
                    src="/whalesails/artwork-song.png"
                    alt="Ario PaPa — New single artwork"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                </motion.div>
                <div className="absolute -top-5 -left-5 -z-10 w-40 h-40 border border-white/10" />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 border border-white/15 flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <span className="absolute inset-0 rounded-full border border-white/20 animate-ping-slow" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white text-white" />
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono tracking-[0.45em] text-white/40 uppercase mb-5">
                  Coming soon — Whalesails Records presents
                </p>
                <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-6">
                  Debut
                  <br />
                  <span className="text-white/30">Single</span>
                </h2>
                <p className="text-white/55 leading-relaxed max-w-md text-[15px] mb-10">
                  The first release from the label — a cinematic introduction
                  to the sound of Ario PaPa. Crafted over months, engineered
                  for the first listen. When it drops, you&apos;ll know it.
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

                <button
                  onClick={() => setShowPopup(true)}
                  className="mt-8 text-[10px] font-mono tracking-[0.3em] text-white/40 hover:text-white uppercase underline underline-offset-8"
                >
                  Get notified when it drops
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELEASED */}
      <section className="relative py-24 md:py-36 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionTag>03 — Released</SectionTag>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                Out in
                <br />
                <span className="text-white/30">the wild.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/45 leading-relaxed">
              The catalogue so far — pressed, packaged and out there. More
              entries join as the label grows.
            </p>
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
                      className="object-cover -[30%] group-hover:-0 transition-all duration-[1.2s] group-hover:scale-105"
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

      {/* PLATFORMS */}
      <section className="border-y border-white/10 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5">
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
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionTag>04 — Services</SectionTag>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                What the
                <br />
                <span className="text-white/30">label builds</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/45 leading-relaxed">
              A full-service ecosystem for artists who intend to last — every
              function of a global label under one sovereign roof.
            </p>
          </Reveal>

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

      {/* GALLERY */}
      <section className="relative py-24 md:py-36 bg-[#0a0b0d] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <Reveal className="flex items-end justify-between mb-12">
            <div>
              <SectionTag>05 — Archive</SectionTag>
              <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
                The <span className="text-white/30">Archive</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.8, ease: EASE }}
                className={`relative group overflow-hidden border border-white/5 ${
                  i % 5 === 0 || i % 5 === 3 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={g.src}
                  alt={g.tag}
                  fill
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.2s] group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 50vw"
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

      {/* CONTACT */}
      <section id="contact" className="relative py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <SectionTag center>
              <span>06 — Contact</span>
            </SectionTag>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9] mb-8">
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
              className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:gap-6 transition-all"
            >
              <Mail className="w-4 h-4" />
              {CONTACT.email}
            </a>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
              <span>{CONTACT.location}</span>
              <span className="hidden md:block w-1 h-1 bg-white/30 rounded-full" />
              <span>Worldwide</span>
              <span className="hidden md:block w-1 h-1 bg-white/30 rounded-full" />
              <span>A {CONTACT.parent} Company</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* Intro + Popup */}
      {!introDone && <Intro onComplete={() => setIntroDone(true)} />}
      <AnimatePresence>
        {showPopup && introDone && (
          <NewsletterPopup onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
