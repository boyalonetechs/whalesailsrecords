"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HERO_VIDEO_URL = "https://www.ariopapa.com/ario/video.mp4";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setActive(1), 3000);
    return () => clearTimeout(t);
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    setTouchStart(e.touches[0].clientX);
  }

  function onTouchEnd(e: React.TouchEvent) {
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 60) {
      if (diff < 0) setActive(1);
      else setActive(0);
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    setTouchStart(e.clientX);
  }

  function onPointerUp(e: React.PointerEvent) {
    const diff = e.clientX - touchStart;
    if (Math.abs(diff) > 60) {
      if (diff < 0) setActive(1);
      else setActive(0);
    }
  }

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

  return (
    <section
      className="relative border-b border-neutral-800 h-[90dvh] 2xl:h-[70dvh] @max-3xl:h-[70dvh] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      {/* STATIC HERO (first) */}
      <div
        className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-12 p-8 lg:p-12 items-center gap-6 transition-all duration-1000 ease-in-out ${
          active === 1
            ? "opacity-0 -translate-x-full pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      >
        <div className="lg:col-span-5 space-y-1">
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85] flex items-center gap-3">
            WHALE <span className="text-3xl text-neutral-500 font-normal">✶</span>
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
              className="object-cover contrast-125"
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
      </div>

      {/* VIDEO HERO (after 3s) */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          active === 1
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-[#060606]/30" />
        </div>

        <div className="relative z-10 min-h-[90dvh] 2xl:min-h-[70dvh] p-8 lg:p-12 flex items-end">
          <div className="w-full max-w-[1600px] mx-auto">
            <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-300 mb-4">
              The <span className="text-neutral-500">✶</span> Label
            </p>
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
              WHALESAILS
              <br />
              <span className="text-neutral-400 hidden">RECORDS LTD.</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <p className="text-[11px] text-neutral-300 leading-relaxed tracking-wide max-w-sm">
                A record label that treats music as a long game.
              </p>
              <ReadMore href="#services">Our Services</ReadMore>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 text-neutral-500/40 text-[120px] leading-none pointer-events-none select-none font-thin z-0">
          ✶
        </div>
      </div>
    </section>
  );
}
