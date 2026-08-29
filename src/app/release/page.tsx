import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PLATFORMS } from "@/data/site";

const RELEASED = [
  {
    title: "High Frequency",
    artist: "Ario PaPa · Single · 2026",
    tag: "Out Now",
    img: "/whalesails/artwork-song.png",
    url: "https://ariopapa.com/high-frequency",
  },
  {
    title: "Untitled 02",
    artist: "Ario PaPa · Single · 2026",
    tag: "Coming Soon",
    img: "/whalesails/img/press-5.jpg",
    url: "#",
  },
  {
    title: "Untitled 03",
    artist: "Ario PaPa · Single · 2026",
    tag: "Coming Soon",
    img: "/whalesails/img/artist-5.jpg",
    url: "#",
  },
];

export default function ReleasePage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-xl tracking-[0.2em] font-light mb-6">
            NEWEST{" "}
            <span className="text-xs align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            RELEASE
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            HIGH
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">FREQUENCY.</span>
          </h1>
        </section>

        {/* MAIN */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-800 p-8 lg:p-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-[300px] bg-neutral-900 overflow-hidden mx-auto md:mx-0">
              <a
                href="https://ariopapa.com/high-frequency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen to High Frequency"
              >
                <Image
                  src="/whalesails/artwork-song.png"
                  alt="Ario PaPa — High Frequency artwork"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[0.9]">
              ARIO <span className="text-neutral-500">PAPA</span>
              <br />
              THE DEBUT SINGLE.
            </h2>
            <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
              The first release from Ario PaPa — a cinematic introduction to the
              sound, engineered for the first listen.
            </p>
            <div className="pt-2 space-y-2">
              {PLATFORMS.slice(0, 3).map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between max-w-md border border-neutral-800 px-4 py-3 text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  <span>Stream on {p.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RELEASED */}
        <section className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              OUT IN{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              THE WILD.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {RELEASED.map((item) => {
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
                <div key={item.title}>{body}</div>
              ) : (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-neutral-800 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 p-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[0.9]">
              REQUEST <span className="text-neutral-500">PRESS ACCESS</span>
            </h2>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all w-fit"
            >
              <span>Contact the Label</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
