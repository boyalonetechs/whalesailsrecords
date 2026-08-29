import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const OPENINGS = [
  {
    title: "Recording & Mix Engineer",
    location: "Lagos",
    type: "Full-time",
    desc: "Push sessions to a cinematic standard — tracking, editing and mixing with patience and precision.",
  },
  {
    title: "A&R / Artist Development",
    location: "Remote",
    type: "Full-time",
    desc: "Scout and develop long-term talent. You protect the vision, the work and the ownership model.",
  },
  {
    title: "Visual Director",
    location: "Lagos",
    type: "Contract",
    desc: "Own artwork, campaigns and the visual identity that keeps the catalogue timeless.",
  },
  {
    title: "Digital Distribution & Strategy",
    location: "Remote",
    type: "Full-time",
    desc: "Route releases across streaming platforms and grow the catalogue with intention, never hype.",
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

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto 2xl:border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="relative  border-neutral-800 min-h-[75dvh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/whalesails/whalesails-logo.png"
              alt="Whalesails Records studio"
              fill
              className="object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-[#060606]/30" />
          </div>

          <div className="relative z-10 min-h-[75dvh] p-8 lg:p-12 flex items-end">
            <div className="w-full max-w-[1600px] mx-auto">
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-300 mb-4">
                Join <span className="text-neutral-500">✶</span> The Label
              </p>
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
                CAREERS
                <br />
                <span className="text-neutral-400 lg:hidden">
                  AT WHALESAILS.
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
                <p className="text-[11px] text-neutral-300 leading-relaxed tracking-wide max-w-sm">
                  We grow slowly and deliberately — people who treat music as a
                  long game.
                </p>
                <ReadMore href="#openings">View Openings</ReadMore>
              </div>
            </div>
          </div>

          <div className="absolute right-8 bottom-8 text-neutral-500/40 text-[120px] leading-none pointer-events-none select-none font-thin z-0">
            ✶
          </div>
        </section>

        {/* Roles */}
        <section id="openings" className="p-8 lg:p-12 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              OPEN{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              ROLES
            </h2>
          </div>

          <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
            {OPENINGS.map((role, i) => (
              <div
                key={role.title}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:items-center py-8 md:py-10 transition-colors hover:bg-neutral-900/30"
              >
                <span className="md:col-span-1 text-[11px] text-neutral-500 tracking-widest">
                  0{i + 1}
                </span>

                <div className="md:col-span-7 space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-light tracking-tight leading-none group-hover:text-neutral-200 transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-[10px] text-neutral-500 tracking-widest uppercase pt-2">
                    {role.type} · {role.location}
                  </p>
                </div>

                <p className="md:col-span-3 text-[10px] text-neutral-400 leading-relaxed max-w-xs">
                  {role.desc}
                </p>

                <div className="md:col-span-1 flex md:justify-end">
                  <ReadMore href="/contact">Apply</ReadMore>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className=" p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 rounded-2xl p-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[0.9]">
              DON'T SEE YOUR <span className="text-neutral-500">ROLE?</span>
            </h2>
            <ReadMore href="/contact">Tell Us About You</ReadMore>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
