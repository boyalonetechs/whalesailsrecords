"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, Mail } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { CONTACT } from "@/data/site";

const SUBJECTS = [
  "Artist Submissions",
  "Press & Media",
  "Bookings & Events",
  "Business & Partnerships",
  "Other",
];

const inputClass =
  "w-full h-11 px-4 bg-transparent border border-neutral-800 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* TOP ICON BAR */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 md:px-10 h-16">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <Mail className="w-4 h-4" />
            <span className="text-[10px] tracking-widest uppercase">
              {CONTACT.email}
            </span>
          </a>
        </div>

        {/* SPLIT — logo left, form right */}
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70dvh]">
          <div className="flex items-center justify-center border-b lg:border-b-0 lg:border-r border-neutral-800 p-8 lg:p-12 bg-neutral-900/20">
            <Image
              src="/whalesails/wsr-logo.png"
              alt="Whalesails Records"
              width={520}
              height={520}
              className="object-cover scale-130 lg:scale-200 w-full max-w-[420px]"
            />
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight leading-none mb-8">
              CONTACT <span className="text-neutral-500">THE LABEL.</span>
            </h1>

            {sent ? (
              <div className="border border-neutral-800 p-8 space-y-2">
                <h2 className="text-xl font-light tracking-tight">
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
                <div>
                  <label className="block text-[9px] text-neutral-500 tracking-widest uppercase mb-2">
                    Subject
                  </label>
                  <select
                    defaultValue="Artist Submissions"
                    className="w-full h-11 px-4 border border-neutral-800 text-sm text-white bg-[#060606] outline-none focus:border-neutral-500 transition-colors"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
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
                  className="flex items-center w-full justify-center rounded-xl gap-2 border border-neutral-700 px-4 py-4 text-[9px] tracking-widest uppercase hover:bg-white hover:text-black transition-all"
                >
                  <Send className="w-3 h-3" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
