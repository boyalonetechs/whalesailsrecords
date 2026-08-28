"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, Filter } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const ARTIST_CARDS = [
  { id: 1, title: "Ario PaPa", sub: "Session 01", tag: "Listen", img: "/whalesails/img/artist-1.jpg" },
  { id: 2, title: "Ario PaPa", sub: "Session 02", tag: "Listen", img: "/whalesails/img/artist-2.jpg" },
  { id: 3, title: "Ario PaPa", sub: "Session 03", tag: "Listen", img: "/whalesails/img/artist-3.jpg" },
  { id: 4, title: "Ario PaPa", sub: "Session 04", tag: "Listen", img: "/whalesails/img/artist-4.jpg" },
  { id: 5, title: "Ario PaPa", sub: "Session 05", tag: "Listen", img: "/whalesails/img/artist-5.jpg" },
];

const RELEASES = [
  {
    id: 1,
    title: "High Frequency",
    artist: "Ario PaPa · Single · 2026",
    tag: "Out Now",
    img: "/whalesails/artwork-song.png",
    url: "https://ariopapa.com/high-frequency",
  },
  {
    id: 2,
    title: "Untitled 02",
    artist: "Ario PaPa · Single · 2026",
    tag: "Coming Soon",
    img: "/whalesails/img/press-5.jpg",
    url: "#",
  },
  {
    id: 3,
    title: "Untitled 03",
    artist: "Ario PaPa · Single · 2026",
    tag: "Coming Soon",
    img: "/whalesails/img/artist-5.jpg",
    url: "#",
  },
];

const JOURNAL_ITEMS = [
  {
    category: "Studio",
    title: "Inside the Studio",
    desc: "A session log from the making of High Frequency — the gear, the take, and the instinct that became the hook.",
    img: "/whalesails/img/press-5.jpg",
    href: "/blog/inside-the-studio",
  },
  {
    category: "Label",
    title: "Why Ownership Matters",
    desc: "Masters, publishing and the quiet power of keeping what you make.",
    img: "/whalesails/img/press-1.jpg",
    href: "/blog/why-ownership-matters",
  },
  {
    category: "News",
    title: "Signal Check",
    desc: "Releases in the pipeline and the roadmap for the label.",
    img: "/whalesails/img/press-8.jpg",
    href: "/blog/signal-check",
  },
];

const ROSTER_FILTERS = ["ALL", "ARTISTS", "PRODUCERS", "SINGLES", "EPS", "ALBUMS"];
const RELEASE_FILTERS = ["ALL", "SINGLES", "EPS", "ALBUMS"];

function ReadMore({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all w-fit"
    >
      <span>{children}</span>
      <ArrowUpRight className="w-3 h-3" />
    </Link>
  );
}

export default function WhalesailsRecords() {
  const [activeRosterFilter, setActiveRosterFilter] = useState("ALL");
  const [activeReleaseFilter, setActiveReleaseFilter] = useState("ALL");

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800 p-8 lg:p-12 items-center gap-6">
          <div className="lg:col-span-5 space-y-1">
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85] flex items-center gap-3">
              CINEMATIC <span className="text-3xl text-neutral-500 font-normal">✳</span>
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
              SOUND
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
              VISION.
            </h1>
          </div>

          <div className="lg:col-span-3 flex justify-center py-4">
            <div className="relative aspect-[3/4] w-full max-w-[220px] bg-neutral-900 overflow-hidden">
              <Image
                src="/whalesails/img/artist-2.jpg"
                alt="Ario PaPa portrait"
                fill
                className="object-cover grayscale contrast-125"
              />
            </div>
          </div>

          <div className="lg:col-span-4 relative flex flex-col justify-end h-full pt-8 lg:pt-0 pl-0 lg:pl-6">
            <div className="space-y-4 max-w-xs z-10">
              <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide">
                A premium record label made of discipline, authenticity and
                long-term creative value. Home of Ario PaPa.
              </p>
              <ReadMore href="/label">Read More</ReadMore>
            </div>
            <div className="absolute right-0 top-0 text-neutral-800/40 text-[120px] leading-none pointer-events-none select-none font-thin">
              ✶
            </div>
          </div>
        </section>

        {/* THE ARTIST */}
        <section id="artist" className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              OUR <span className="text-xs align-middle mx-1 text-neutral-500">✳</span> ARTIST
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between border-y border-neutral-800 py-2.5 px-4 text-[10px] tracking-widest text-neutral-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {ROSTER_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveRosterFilter(cat)}
                  className={`transition-colors uppercase ${
                    activeRosterFilter === cat
                      ? "bg-neutral-800 text-white px-2 py-0.5"
                      : "hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1 border border-neutral-800 px-2 py-1 text-[9px] hover:border-neutral-600 transition-colors">
              <Filter className="w-2.5 h-2.5" />
              <span>FILTER</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ARTIST_CARDS.map((item) => (
              <div key={item.id} className="group cursor-pointer space-y-2 text-center">
                <div className="relative aspect-square bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xs font-light">{item.title}</h3>
                  <p className="text-[9px] text-neutral-500">{item.sub}</p>
                  <p className="text-[9px] text-neutral-400">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* THE LABEL */}
        <section id="label" className="border-y border-neutral-800 p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-start">
              <div className="relative aspect-[4/5] w-full max-w-[260px] bg-neutral-900 overflow-hidden">
                <Image
                  src="/whalesails/img/press-7.jpg"
                  alt="Ario PaPa session"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-5xl sm:text-6xl font-light tracking-tight leading-none">
                OWN YOUR
                <br />
                SOUND.
              </h2>
              <p className="text-[11px] text-neutral-400 max-w-xs leading-relaxed tracking-wide">
                Artists keep the masters. Sound that outlasts trends, released
                with restraint and care.
              </p>
              <ReadMore href="/label">Read More</ReadMore>
            </div>
          </div>
        </section>

        {/* NEWEST RELEASE */}
        <section id="releases" className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              NEWEST <span className="text-xs align-middle mx-1 text-neutral-500">✳</span> RELEASE.
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between border-y border-neutral-800 py-2.5 px-4 text-[10px] tracking-widest text-neutral-400">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {RELEASE_FILTERS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveReleaseFilter(cat)}
                  className={`transition-colors uppercase ${
                    activeReleaseFilter === cat
                      ? "bg-neutral-800 text-white px-2 py-0.5"
                      : "hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1 border border-neutral-800 px-2 py-1 text-[9px] hover:border-neutral-600 transition-colors">
              <Filter className="w-2.5 h-2.5" />
              <span>FILTER</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {RELEASES.map((item) => {
              const body = (
                <div className="group space-y-2 text-center">
                  <div className="relative aspect-square bg-neutral-900 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-light">{item.title}</h3>
                    <p className="text-[9px] text-neutral-500">{item.artist}</p>
                    <p className="text-[9px] text-neutral-400">{item.tag}</p>
                  </div>
                </div>
              );
              return item.url === "#" ? (
                <div key={item.id}>{body}</div>
              ) : (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* JOURNAL */}
        <section id="journal" className="p-8 border-t border-neutral-800 space-y-8">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              NEWS <span className="text-xs align-middle mx-1 text-neutral-500">✳</span> JOURNAL.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOURNAL_ITEMS.map((item) => (
              <div key={item.title} className="group cursor-pointer text-center flex flex-col items-center">
                <div className="relative aspect-[4/5] w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2 max-w-xs">
                  <h3 className="text-xs tracking-widest uppercase font-medium">
                    {item.category}
                  </h3>
                  <p className="text-sm font-light tracking-tight">{item.title}</p>
                  <p className="text-[10px] text-neutral-400 leading-normal">
                    {item.desc}
                  </p>
                  <ReadMore href={item.href}>Read More</ReadMore>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}