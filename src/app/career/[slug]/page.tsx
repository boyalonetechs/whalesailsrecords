"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { Send, MapPin, Clock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { OPENINGS } from "@/data/career";

const inputClass =
  "w-full h-11 px-4 bg-transparent border border-neutral-800 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors";

export default function CareerDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const role = OPENINGS.find((o) => o.slug === slug);

  const [sent, setSent] = useState(false);

  if (!role) notFound();

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        <article className="max-w-3xl mx-auto w-full px-6 sm:px-8 md:px-12 py-16 md:py-24">
          <Reveal className="space-y-6">
            <Link
              href="/career"
              className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors inline-block"
            >
              &larr; Back to Careers
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-widest text-neutral-400">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/10 py-1 px-3 w-fit">
                {role.type}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3 h-3" /> {role.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> Apply now
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[0.95]">
              {role.title}
            </h1>

            <p className="text-[12px] text-neutral-300 leading-relaxed tracking-wide">
              {role.desc}
            </p>

            <p className="text-[12px] text-neutral-400 leading-[1.8] tracking-wide">
              {role.about}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-12 grid gap-10 md:grid-cols-2">
            <section>
              <h2 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 border-b border-neutral-800 pb-3 mb-5">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {role.responsibilities.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[11px] text-neutral-300 leading-relaxed"
                  >
                    <span className="text-neutral-600 shrink-0">✶</span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 border-b border-neutral-800 pb-3 mb-5">
                What we&apos;re looking for
              </h2>
              <ul className="space-y-3">
                {role.requirements.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[11px] text-neutral-300 leading-relaxed"
                  >
                    <span className="text-neutral-600 shrink-0">✶</span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* APPLICATION FORM */}
          <Reveal delay={0.05} className="mt-16 border-t border-neutral-800 pt-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2">
              APPLY FOR THIS <span className="text-neutral-500">ROLE.</span>
            </h2>
            <p className="text-[10px] text-neutral-500 tracking-widest uppercase mb-8">
              {role.title} · {role.location}
            </p>

            {sent ? (
              <div className="border border-neutral-800 p-8 space-y-2">
                <h3 className="text-xl font-light tracking-tight">
                  APPLICATION{" "}
                  <span className="text-neutral-500">RECEIVED.</span>
                </h3>
                <p className="text-[11px] text-neutral-400 tracking-wide">
                  Our team will review your application for {role.title} and
                  respond shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                    Portfolio / Link
                  </label>
                  <input
                    type="url"
                    placeholder="Link to your work"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                    Why you / Cover note
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us why you're right for this role..."
                    className={`${inputClass} h-auto py-3 resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  <Send className="w-3 h-3" />
                  Submit Application
                </button>
              </form>
            )}
          </Reveal>
        </article>

        <SiteFooter />
      </div>
    </div>
  );
}
