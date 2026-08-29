import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES, CONTACT } from "@/data/site";

const PROCESS = [
  {
    step: "01",
    title: "Listen",
    desc: "Send us your work. We listen to everything.",
  },
  {
    step: "02",
    title: "Align",
    desc: "Sound, story, image and structure in one room.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Recordings, visuals, IP and release strategy.",
  },
  {
    step: "04",
    title: "Release",
    desc: "The record goes out with the label behind it.",
  },
  {
    step: "05",
    title: "Endure",
    desc: "Catalog, royalties, growth and the next chapter.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-xl tracking-[0.2em] font-light mb-6">
            WHAT THE{" "}
            <span className="text-xs align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            LABEL BUILDS
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            A FULL
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">SERVICE</span> LABEL.
          </h1>
          <p className="text-[11px] text-neutral-400 tracking-wide max-w-md mx-auto pt-6">
            For artists who intend to last.
          </p>
        </section>

        {/* SERVICES */}
        <section className="border-b border-neutral-800 divide-y divide-neutral-800">
          {SERVICES.map((s) => (
            <div
              key={s.num}
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
            </div>
          ))}
        </section>

        {/* PROCESS */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 space-y-6">
          <div className="text-center">
            <h2 className="text-xl tracking-[0.2em] font-light">
              FROM DEMO TO{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              LEGACY
            </h2>
          </div>
          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {PROCESS.map((p) => (
              <div
                key={p.step}
                className="grid grid-cols-12 gap-4 items-center px-4 md:px-6 py-5 hover:bg-neutral-900/40 transition-colors"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[10px] text-neutral-500 tracking-widest">
                    {p.step}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <h3 className="font-light tracking-[0.15em] uppercase">
                    {p.title}
                  </h3>
                </div>
                <div className="hidden md:block md:col-span-8">
                  <p className="text-[10px] text-neutral-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 p-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[0.9]">
                GOT SOMETHING{" "}
                <span className="text-neutral-500">WORTH BUILDING?</span>
              </h2>
              <p className="text-[10px] text-neutral-500 tracking-widest uppercase pt-3">
                {CONTACT.email}
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all w-fit"
            >
              <span>Submit to the Label</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
