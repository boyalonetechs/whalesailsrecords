"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { POSTS, CATEGORIES } from "@/data/blog";

export default function BlogPage() {
  const [active, setActive] = useState("All");

  const categories = ["All", ...CATEGORIES.filter((c) => c !== "All")];
  const filtered =
    active === "All" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HERO */}
        <section className="border-b border-neutral-800 p-8 lg:p-12 text-center space-y-1">
          <h2 className="text-xl tracking-[0.2em] font-light mb-6">
            THE{" "}
            <span className="text-xs align-middle mx-1 text-neutral-500">
              ✶
            </span>{" "}
            JOURNAL
          </h2>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            FIELD NOTES
          </h1>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-light tracking-tight leading-[0.85]">
            <span className="text-neutral-500">INSIDE</span> THE SOUND.
          </h1>
          <p className="text-[11px] text-neutral-400 tracking-wide max-w-md mx-auto pt-6">
            Session stories, release notes and label strategy — written by the
            people inside the machine.
          </p>
        </section>

        {/* FILTER */}
        <section className="flex flex-wrap items-center justify-between border-b border-neutral-800 py-2.5 px-4 text-[10px] tracking-widest text-neutral-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`transition-colors uppercase ${
                  active === cat
                    ? "bg-neutral-800 text-white px-2 py-0.5"
                    : "hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1 border border-neutral-800 px-2 py-1 text-[9px] hover:border-neutral-600 transition-colors">
            <Filter className="w-2.5 h-2.5" />
            <span>FILTER</span>
          </button>
        </section>

        {/* POSTS */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className={`group space-y-2 text-center ${post.spanCol ? "col-span-2" : ""}`}
            >
              <div
                className={`relative bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-colors ${
                  post.spanCol ? "aspect-[16/10]" : "aspect-square"
                }`}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-xs font-light tracking-[0.1em] uppercase pt-2">
                  {post.title}
                </h3>
                <p className="text-[9px] text-neutral-500">
                  {post.category} · {post.author} · {post.date}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 border border-neutral-700 px-3 py-1 text-[8px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                <span>Read More</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </span>
            </Link>
          ))}
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
