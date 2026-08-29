import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

function ReadMore({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
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

export default function LabelPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-xl tracking-[0.2em] font-light mb-6">
            THE{" "}
            <span className="text-xs align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            LABEL
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            WHALESAILS
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">RECORDS</span> LTD.
          </h1>
        </section>

        {/* STATEMENT */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-800 p-8 lg:p-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-[260px] bg-neutral-900 overflow-hidden">
              <Image
                src="/whalesails/img/press-5.jpg"
                alt="Whalesails Records session"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="absolute right-0 bottom-0 text-neutral-800/40 text-[90px] leading-none pointer-events-none select-none font-thin">
              ✶
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
              Whalesails Records LTD is a record label that treats music as a
              long game. We develop artists, build enduring creative assets and
              release work with the restraint and care of a permanent catalogue
              — across recording, visuals, branding and strategy, every element
              belongs to one ecosystem.
            </p>
            <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
              Substance over hype, always.
            </p>
            <ReadMore href="/artist">Meet the Artist</ReadMore>
          </div>
        </section>

        {/* PILLARS */}
        <section className="grid md:grid-cols-3 border-b border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="p-8 space-y-3">
              <span className="text-[10px] text-neutral-500 tracking-widest block">
                0{i + 1}
              </span>
              <h3 className="text-lg font-light tracking-[0.15em] uppercase">
                {p.title}
              </h3>
              <p className="text-[10px] text-neutral-400 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 p-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[0.9] text-center md:text-left">
              HEAR THE <span className="text-neutral-500">SOUND.</span>
            </h2>
            <ReadMore href="/artist">Meet the Artist</ReadMore>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
