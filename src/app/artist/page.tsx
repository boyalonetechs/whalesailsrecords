import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PLATFORMS } from "@/data/site";

const RELEASES = [
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

export default function ArtistPage() {
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
            ARTIST
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            ARIO
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">PAPA.</span>
          </h1>
        </section>

        {/* BIO */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-800 p-8 lg:p-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-[260px] bg-neutral-900 overflow-hidden">
              <Image
                src="/whalesails/img/artist-5.jpg"
                alt="Ario PaPa"
                fill
                className="object-cover grayscale contrast-125"
              />
            </div>
            <div className="absolute right-0 top-0 text-neutral-800/40 text-[90px] leading-none pointer-events-none select-none font-thin">
              ✶
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
              Ario PaPa is a recording artist whose sound carries the energy of
              Lagos outward — cinematic, melodic and built to last. His work
              prioritises authenticity over trends and long-term value over
              quick attention.
            </p>
            <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
              He records and releases under Whalesails Records.
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
                  <span>Listen — {p.name}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RELEASES */}
        <section className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              THE{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              CATALOGUE
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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

        <SiteFooter />
      </div>
    </div>
  );
}
