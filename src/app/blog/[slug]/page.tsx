import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-[#060606] text-white font-sans selection:bg-neutral-800 pt-14">
      <div className="max-w-[1600px] mx-auto border border-neutral-800 bg-[#060606]">
        <SiteHeader />

        <article className="w-full py-24 md:py-32 px-6 sm:px-8 md:px-16 font-sans">
          <div className="max-w-[700px] mx-auto flex flex-col gap-8">
            {/* Back Link */}
            <Link
              href="/blog"
              className="text-[9px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors"
            >
              &larr; Back to Blog
            </Link>

            {/* Tag */}
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] font-medium tracking-[0.2em] uppercase py-1 px-3.5 w-fit">
              {post.category}
            </span>

            {/* Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-[40px] font-light tracking-tight text-white leading-tight"
              style={{ fontFamily: "var(--font-serif), serif" }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-medium tracking-wider">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 rounded-full border border-neutral-800 bg-black/40 overflow-hidden">
                  <Image
                    src="/whalesails/whalesails-logo.png"
                    alt={post.author}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
                <span>{post.author}</span>
              </div>
              <span className="text-neutral-700">|</span>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-neutral-500 stroke-[2]" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Cover Image */}
            <div className="relative w-full overflow-hidden border border-neutral-800">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={700}
                className="w-full h-auto filter brightness-[0.85] contrast-[1.05]"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              {post.body.slice(0, -1).map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm leading-[1.8] text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}

              <blockquote className="border-l-2 border-neutral-600 pl-4 italic text-neutral-400 my-6">
                {post.pull}
              </blockquote>

              {post.body.slice(-1).map((paragraph, i) => (
                <p key={i} className="text-sm leading-[1.8] text-neutral-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Footer divider */}
            <div className="flex items-center gap-3 pt-8 border-t border-neutral-800/40 mt-8">
              <span className="text-sm text-neutral-400">
                — Whalesails Records Journal
              </span>
            </div>
          </div>
        </article>

        <SiteFooter />
      </div>
    </div>
  );
}
