"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useRouter } from "next/navigation";
import { RELEASES } from "@/data/site";

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
        <section className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800 h-[90dvh] 2xl:h-[70dvh] @max-3xl:h-[70dvh] p-8 lg:p-12 items-center gap-6">
          <div className="lg:col-span-5 space-y-1">
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85] flex items-center gap-3">
              WHALE{" "}
              <span className="text-3xl text-neutral-500 font-normal">✶</span>
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85] flex items-center gap-3">
              SAILS{" "}
            </h1>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
              RECORDS
            </h1>
          </div>

          <div className="lg:col-span-3 flex justify-center py-4">
            <div className="relative aspect-[3/4] w-full max-w-[220px] bg-neutral-900 overflow-hidden">
              <Image
                src="/whalesails/whalesails-logo.png"
                alt="Ario PaPa portrait"
                fill
                className="object-cover  contrast-125"
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
              OUR{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              ARTIST
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 @max-3xl:grid-cols-5 gap-4">
            {ARTIST_CARDS.map((item) => (
              <div
                key={item.id}
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
            ))}
          </div>

          {ARTIST_CARDS.length > 4 && (
            <div className="flex justify-center gap-3 pt-2">
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>

        {/* NEWEST RELEASE */}
        <section id="releases" className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              NEWEST{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              RELEASE.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-4">
            {RELEASES.map((item) => (
              <a
                key={item.id}
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
            ))}
          </div>

          {RELEASES.length > 4 && (
            <div className="flex justify-center gap-3 pt-2">
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>

        {/* THE LABEL */}
        <section
          id="label"
          className="border-y border-neutral-800 p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-start">
              <div className="relative aspect-[4/5] w-full max-w-[260px] bg-neutral-900 overflow-hidden">
                <Image
                  src="/whalesails/img/press-7.jpg"
                  alt="Ario PaPa session"
                  fill
                  className="object-cover "
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

        {/* STREAMING PLATFORMS */}
        <section
          id="stream"
          className="p-8 border-t border-neutral-800 space-y-8"
        >
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              STREAM{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              EVERYWHERE.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STREAMING_PLATFORMS.map((p) => (
              <a
                key={p.name}
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
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
