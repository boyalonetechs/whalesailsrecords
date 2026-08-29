"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRouter } from "next/navigation";
import { RELEASES } from "@/data/site";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

const ARTIST_CARDS = [
  {
    id: 1,
    name: "Ario PaPa",
    link: "https://ariopapa.com",
    img: "/whalesails/img/artist-1.jpg",
  },
  {
    id: 2,
    name: "Ario PaPa",
    link: "https://ariopapa.com",
    img: "/whalesails/img/artist-2.jpg",
  },
  {
    id: 3,
    name: "Ario PaPa",
    link: "https://ariopapa.com",
    img: "/whalesails/img/artist-3.jpg",
  },
  {
    id: 4,
    name: "Ario PaPa",
    link: "https://ariopapa.com",
    img: "/whalesails/img/artist-4.jpg",
  },
];

const STREAMING_PLATFORMS = [
  {
    name: "Spotify",
    img: "/whalesails/platforms/spotify.png",
    url: "https://open.spotify.com/artist/4jUd2ZZE9NoLBiDIsXdQIK",
  },
  {
    name: "YouTube Music",
    img: "/whalesails/platforms/youtube-music.png",
    url: "https://www.youtube.com/@ario_papa",
  },
  {
    name: "Amazon Music",
    img: "/whalesails/platforms/amazon-music.png",
    url: "https://music.amazon.com/",
  },
  {
    name: "Audiomack",
    img: "/whalesails/platforms/audiomack.png",
    url: "https://audiomack.com/ariopapa",
  },
  {
    name: "Boomplay",
    img: "/whalesails/platforms/boomplay.png",
    url: "https://www.boomplay.com/",
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

export default function WhalesailsRecords() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="border border-neutral-800 bg-[#060606] max-w-[1600px] mx-auto">
        <SiteHeader />

        {/* HERO */}
        <Hero />

        {/* THE ARTIST */}
        <section id="artist" className="p-8 space-y-6">
          <Reveal className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              OUR{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              ARTIST
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 @max-3xl:grid-cols-5 gap-4">
            {ARTIST_CARDS.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} y={20}>
                <div
                  onClick={() => router.push(item.link)}
                  className="group cursor-pointer space-y-2 text-center"
                >
                  <div className="relative aspect-square bg-neutral-900 overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-light lg:text-md lg:font-bold">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {ARTIST_CARDS.length > 4 && (
            <Reveal className="flex justify-center gap-3 pt-2">
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>
          )}
        </section>

        {/* NEWEST RELEASE */}
        <section id="releases" className="p-8 space-y-6">
          <Reveal className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              NEWEST{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              RELEASE.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-4">
            {RELEASES.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} y={20}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group space-y-2 text-center"
                >
                  <div className="relative aspect-square bg-neutral-900 overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xs font-light lg:text-md  lg:font-bold">
                      {item.title}
                    </h3>
                    <p className="text-[9px] text-neutral-400">{item.artist}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {RELEASES.length > 4 && (
            <Reveal className="flex justify-center gap-3 pt-2">
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Reveal>
          )}
        </section>

        {/* THE LABEL */}
        <section
          id="label"
          className="border-y border-neutral-800 p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <Reveal className="md:col-span-5 flex justify-start">
              <Parallax className="relative aspect-[4/5] w-full max-w-[260px] bg-neutral-900">
                <Image
                  src="/whalesails/img/press-7.jpg"
                  alt="Ario PaPa session"
                  fill
                  className="object-cover"
                />
              </Parallax>
            </Reveal>
            <Reveal className="md:col-span-7 space-y-4" delay={0.1}>
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
            </Reveal>
          </div>
        </section>

        {/* STREAMING PLATFORMS */}
        <section
          id="stream"
          className="p-8 border-t border-neutral-800 space-y-8"
        >
          <Reveal className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              STREAM{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              EVERYWHERE.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STREAMING_PLATFORMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06} y={16}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-3 border border-neutral-800 p-6 hover:bg-neutral-900/40 hover:border-neutral-600 transition-colors rounded-lg text-center"
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={48}
                    height={48}
                    className="object-contain h-12 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="text-[10px] tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
                    {p.name}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
