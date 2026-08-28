import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SectionTag } from "@/components/ui";
import { POSTS } from "@/data/blog";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) return { title: "Post Not Found — Whalesails Records" };
  return {
    title: `${post.title} — Whalesails Records Journal`,
    description: post.lead,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.id === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Nav />

      <article className="max-w-7xl mx-auto px-5 md:px-10 pt-36 pb-20 md:pt-44 md:pb-28">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase hover:text-white transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          The Journal
        </Link>

        {/* Hero */}
        <header className="max-w-4xl mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <SectionTag>{post.category}</SectionTag>
            <span className="text-[9px] font-mono tracking-[0.35em] text-white/40 uppercase">
              {post.author} — {post.date}
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] uppercase tracking-tight leading-[1.02]">
            {post.title}
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mt-6">
            {post.lead}
          </p>
        </header>

        {/* Feature image */}
        <section className="relative mb-16">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </section>

        {/* Body */}
        <section className="max-w-3xl mx-auto">
          {post.body.slice(0, -1).map((paragraph, i) => (
            <p
              key={i}
              className="text-white/55 leading-relaxed text-[15px] md:text-base mb-8"
            >
              {paragraph}
            </p>
          ))}

          {/* Pull quote */}
          <blockquote className="my-14 md:my-16 py-10 border-y border-white/10 text-center">
            <span className="block font-display text-3xl md:text-5xl uppercase leading-tight text-white/90">
              &ldquo;{post.pull}&rdquo;
            </span>
            <span className="block mt-6 text-[10px] font-mono tracking-[0.45em] text-white/35 uppercase">
              {post.author} — Whalesails Records
            </span>
          </blockquote>

          {post.body.slice(-1).map((paragraph, i) => (
            <p
              key={i}
              className="text-white/55 leading-relaxed text-[15px] md:text-base mb-8"
            >
              {paragraph}
            </p>
          ))}

          {/* Post footer */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-12 mt-16 border-t border-white/10">
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase">
              Filed under — {post.category}
            </span>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-white/60 uppercase hover:text-white transition-colors"
            >
              More from the Journal
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </section>
      </article>

      {/* Related posts */}
      <section className="border-t border-white/5 bg-[#0a0b0d]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-20">
          <div className="flex items-center justify-between mb-10">
            <SectionTag>Keep Reading</SectionTag>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <span className="absolute top-4 left-4 text-[9px] font-mono tracking-[0.35em] text-white/70 uppercase px-3 py-1.5 border border-white/15 bg-black/40">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide leading-snug mt-5">
                  {p.title}
                </h3>
                <p className="text-xs text-white/50 mt-2">
                  {p.author} — {p.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}