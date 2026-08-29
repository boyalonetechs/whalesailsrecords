import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { RELEASES } from "@/data/site";

export default function ReleasePage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* RELEASED */}
        <section className="p-8 space-y-6">
          <div className="text-center opacity-0">
            <h2 className="text-xl tracking-[0.2em] font-light">
              OUT IN{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              THE WILD.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-4">
            {RELEASES.map((item, i) => {
              const body = (
                <div className="group space-y-2 text-center">
                  <div className="relative aspect-square bg-neutral-900 overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xs font-light lg:font-bold lg:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-[9px] text-neutral-500">{item.artist}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={item.title} delay={i * 0.06} y={20}>
                  {item.link === "#" ? (
                    body
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {body}
                    </a>
                  )}
                </Reveal>
              );
            })}
          </div>

          {RELEASES.length > 6 && (
            <div className="flex justify-center gap-3">
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-neutral-500 transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
