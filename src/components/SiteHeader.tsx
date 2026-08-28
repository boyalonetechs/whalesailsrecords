import Link from "next/link";

const LINKS = {
  left: [
    { href: "/label", label: "About" },
    { href: "/artist", label: "Artist" },
    { href: "/release", label: "Releases" },
  ],
  right: [
    { href: "/blog", label: "Journal" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function SiteHeader() {
  return (
    <header className="grid grid-cols-12 border-b border-neutral-800 text-[11px] tracking-widest uppercase">
      <nav className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-start flex-wrap gap-x-6 gap-y-1 px-6 py-4 md:border-r border-neutral-800 text-neutral-400">
        {LINKS.left.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hover:text-white transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="col-span-12 md:col-span-4 flex items-center justify-center py-4 border-y md:border-y-0 border-neutral-800">
        <Link
          href="/"
          className="text-2xl tracking-[0.2em] font-light italic hover:text-neutral-300 transition-colors"
        >
          Whalesails
        </Link>
      </div>

      <nav className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end flex-wrap gap-x-6 gap-y-1 px-6 py-4 md:border-l border-neutral-800 text-neutral-400">
        {LINKS.right.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="hover:text-white transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}