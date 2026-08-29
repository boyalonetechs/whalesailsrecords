import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
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
    <section className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-800 h-[90dvh] 2xl:h-[70dvh] @max-3xl:h-[70dvh] p-8 lg:p-12 items-center gap-6">
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
  );
}
