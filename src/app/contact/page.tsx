"use client";

import { useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PLATFORMS, CONTACT } from "@/data/site";

const INQUIRIES = [
  {
    title: "Artist Submissions",
    desc: "Demos, EPKs and project proposals.",
    email: "submissions@whalesailsrecords.com",
  },
  {
    title: "Press & Media",
    desc: "Press kits, interviews and reviews.",
    email: CONTACT.email,
  },
  {
    title: "Bookings & Events",
    desc: "Live bookings and appearances.",
    email: CONTACT.email,
  },
  {
    title: "Business & Partnerships",
    desc: "Brands, investors and alliances.",
    email: CONTACT.email,
  },
];

const inputClass =
  "w-full h-11 px-4 bg-transparent border border-neutral-800 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-xl tracking-[0.2em] font-light mb-6">
            GET IN{" "}
            <span className="text-xs align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            TOUCH
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            MAKE
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">NOISE.</span>
          </h1>
          <p className="text-[11px] text-neutral-400 tracking-wide max-w-md mx-auto pt-6">
            Demos, bookings, partnerships and press — the label office is open
            to the world.
          </p>
        </section>

        {/* BODY */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-800">
          {/* FORM */}
          <div className="md:col-span-7 p-8 lg:p-10 space-y-5">
            {sent ? (
              <div className="border border-neutral-800 p-8 space-y-2">
                <h2 className="text-2xl font-light tracking-tight">
                  MESSAGE <span className="text-neutral-500">RECEIVED.</span>
                </h2>
                <p className="text-[11px] text-neutral-400 tracking-wide">
                  The label office will respond shortly.
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
                    Subject
                  </label>
                  <select
                    defaultValue="Artist Submission"
                    className={`${inputClass} bg-[#060606]`}
                  >
                    {INQUIRIES.map((q) => (
                      <option key={q.title}>{q.title}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us what you're building..."
                    className={`${inputClass} h-auto py-3 resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 border border-neutral-700 px-4 py-2 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  <Send className="w-3 h-3" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* DIRECT LINES */}
          <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-neutral-800 p-8 lg:p-10 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 border border-neutral-800 p-5 hover:bg-neutral-900/40 transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0 text-neutral-500" />
              <div>
                <p className="text-[9px] text-neutral-500 tracking-widest uppercase mb-1">
                  General inquiries
                </p>
                <p className="text-sm font-light">{CONTACT.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 border border-neutral-800 p-5">
              <MapPin className="w-4 h-4 shrink-0 text-neutral-500" />
              <div>
                <p className="text-[9px] text-neutral-500 tracking-widest uppercase mb-1">
                  Headquarters
                </p>
                <p className="text-sm font-light">{CONTACT.location}</p>
              </div>
            </div>

            <div className="divide-y divide-neutral-800 border-y border-neutral-800">
              {INQUIRIES.map((q) => (
                <a
                  key={q.title}
                  href={`mailto:${q.email}`}
                  className="flex items-center justify-between py-4 hover:bg-neutral-900/40 transition-colors px-2 first:pt-4 last:pb-4"
                >
                  <div>
                    <p className="text-[10px] font-light tracking-[0.15em] uppercase">
                      {q.title}
                    </p>
                    <p className="text-[9px] text-neutral-500 mt-1">{q.desc}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-neutral-800 border-b border-neutral-800">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 px-4 py-8 border-b border-neutral-800 lg:border-b-0 lg:border-r lg:last:border-r-0 text-center hover:bg-neutral-900/40 transition-colors"
            >
              <span className="text-sm font-light tracking-[0.15em] uppercase">
                {p.name}
              </span>
              <span className="text-[8px] text-neutral-500 tracking-widest uppercase">
                {p.tag}
              </span>
            </a>
          ))}
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
