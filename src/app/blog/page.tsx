import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { POSTS } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* POSTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 px-16">
          {POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative aspect-[4/3] rounded-xl bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-colors"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 rounded-xl transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 space-y-2">
                <p className="text-[9px] tracking-widest uppercase text-neutral-400">
                  {post.category} · {post.author} · {post.date}
                </p>
                <h3 className="text-lg sm:text-xl font-light tracking-tight leading-tight">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-[8px] tracking-widest uppercase text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read More</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
