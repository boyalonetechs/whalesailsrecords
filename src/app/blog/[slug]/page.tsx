import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        {/* HEADER */}
        <header className="border-b border-neutral-800 p-8 lg:p-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[9px] tracking-widest uppercase text-neutral-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-3 h-3" />
            The Journal
          </Link>

          <p className="text-[9px] text-neutral-500 tracking-widest uppercase mb-4">
            {post.category} · {post.author} · {post.date}
          </p>
          <h1 className="max-w-4xl text-5xl sm:text-6xl xl:text-7xl font-light tracking-tight leading-[0.95]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[11px] text-neutral-400 leading-relaxed tracking-wide">
            {post.lead}
          </p>
        </header>

        {/* FEATURE IMAGE */}
        <section className="border-b border-neutral-800 p-8 lg:p-12">
          <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border border-neutral-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* BODY */}
        <article className="max-w-3xl mx-auto px-8 lg:px-12 py-12 space-y-6">
          {post.body.slice(0, -1).map((paragraph, i) => (
            <p
              key={i}
              className="text-[13px] text-neutral-300 leading-[1.9] tracking-wide"
            >
              {paragraph}
            </p>
          ))}

          <blockquote className="my-12 py-10 border-y border-neutral-800 text-center space-y-4">
            <span className="block text-2xl md:text-3xl font-light tracking-tight leading-tight text-white">
              &ldquo;{post.pull}&rdquo;
            </span>
            <span className="block text-[9px] text-neutral-500 tracking-widest uppercase">
              {post.author} — Whalesails Records
            </span>
          </blockquote>

          {post.body.slice(-1).map((paragraph, i) => (
            <p
              key={i}
              className="text-[13px] text-neutral-300 leading-[1.9] tracking-wide"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {/* RELATED */}
        <section className="p-8 lg:p-12 border-t border-neutral-800">
          <div className="text-center mb-8">
            <h2 className="text-xl tracking-[0.2em] font-light">
              KEEP{" "}
              <span className="text-xs align-middle mx-1 text-neutral-500">
                ✶
              </span>{" "}
              READING
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/blog/${p.id}`}
                className="group space-y-2 text-center"
              >
                <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.1em] uppercase pt-2">
                    {p.title}
                  </h3>
                  <p className="text-[9px] text-neutral-500">
                    {p.category} · {p.author} · {p.date}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 border border-neutral-700 px-3 py-1 text-[8px] tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  <span>Read More</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <SiteFooter />
      </div>
    </div>
  );
}
