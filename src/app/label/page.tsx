import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { SERVICES } from "@/data/site";

const HERO_VIDEO_URL = "https://www.ariopapa.com/ario/video.mp4";

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
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="relative border-b border-neutral-800 min-h-[75dvh] overflow-hidden">
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

          <div className="relative z-10 min-h-[75dvh] p-8 lg:p-12 flex items-end">
            <Reveal className="w-full max-w-[1600px] mx-auto">
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
            </Reveal>
          </div>

          <div className="absolute right-8 bottom-8 text-neutral-500/40 text-[120px] leading-none pointer-events-none select-none font-thin z-0">
            ✶
          </div>
        </section>

        {/* STATEMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800 gap-6">
          <div className="lg:col-span-6 lg:border-r border-neutral-800">
            <Parallax className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full min-h-[50dvh] bg-neutral-900">
              <Image
                src="/whalesails/img/press-5.jpg"
                alt="Whalesails Records session"
                fill
                className="object-cover"
              />
            </Parallax>
          </div>

          <Reveal className="lg:col-span-6 flex flex-col justify-center p-8 lg:p-12 gap-6" delay={0.1}>
            <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
              The <span className="text-neutral-400">✶</span> Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-light tracking-tight leading-[0.95]">
              A LABEL THAT
              <br />
              <span className="text-neutral-500">BUILDS FOR</span>
              <br />
              GENERATIONS.
            </h2>
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
            <ReadMore href="/career">View Openings</ReadMore>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-b border-neutral-800 divide-y divide-neutral-800"
        >
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 0.06}
              className="grid grid-cols-12 gap-4 items-center px-6 md:px-10 py-6 hover:bg-neutral-900/40 transition-colors"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="text-[10px] text-neutral-500 tracking-widest">
                  {s.num}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-base md:text-lg font-light tracking-[0.15em] uppercase">
                  {s.title}
                </h3>
              </div>
              <div className="hidden md:block md:col-span-7">
                <p className="text-[10px] text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* CTA */}
        <section className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 p-8">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[0.9] text-center md:text-left">
              HEAR THE <span className="text-neutral-500">SOUND.</span>
            </h2>
            <ReadMore href="/career">View Openings</ReadMore>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
