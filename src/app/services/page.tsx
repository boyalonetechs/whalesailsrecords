import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SERVICES, CONTACT } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-2xl tracking-[0.2em] font-light mb-6">
            WHAT WE{" "}
            <span className="text-6xl align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            OFFER
          </h2>
        </section>

        {/* SERVICES — editorial alternating split */}
        <section className=" border-neutral-800 space-y-10 lg:space-y-16 px-0 lg:px-8">
          {SERVICES.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.num}
                className="grid grid-cols-1 lg:grid-cols-2  border-neutral-800  overflow-hidden"
              >
                <div
                  className={`relative aspect-[3/4] sm:aspect-[4/3] rounded-lg lg:aspect-auto lg:min-h-[70dvh] w-full bg-neutral-900 overflow-hidden ${
                    flip ? "lg:order-2 lg:border-l" : "lg:border-r"
                  } border-neutral-800`}
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center p-8 lg:p-12 gap-5 ${
                    flip ? "lg:order-1" : ""
                  }`}
                >
                  <span className="text-[10px] text-neutral-500 tracking-widest">
                    {s.num}
                  </span>
                  <h3 className="text-3xl md:text-4xl xl:text-5xl font-light tracking-tight leading-[0.95] uppercase">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 leading-relaxed tracking-wide max-w-md">
                    {s.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all w-fit"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800 p-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-[0.9]">
                WORK <span className="text-neutral-500">WITH THE LABEL?</span>
              </h2>
              <p className="text-[10px] text-neutral-500 tracking-widest uppercase pt-3">
                {CONTACT.email}
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-neutral-700 px-3 py-1.5 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all w-fit"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
