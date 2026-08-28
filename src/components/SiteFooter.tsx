import Link from "next/link";

const NAV = [
  { href: "/label", label: "About" },
  { href: "/artist", label: "Artist" },
  { href: "/release", label: "Releases" },
  { href: "/blog", label: "Journal" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  { label: "f", name: "Facebook", href: "https://www.facebook.com/share/1BGsUgtHeg/?mibextid=wwXIfr" },
  { label: "in", name: "Instagram", href: "https://www.instagram.com/iam_ariopapa" },
  { label: "t", name: "TikTok", href: "https://www.tiktok.com/@ariopapa" },
];

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-neutral-800 p-8 text-[10px] text-neutral-500"
    >
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="text-3xl tracking-[0.2em] font-light italic text-white">
            Whalesails
          </div>
          <div className="space-y-0.5 text-neutral-400">
            <p>Record Label</p>
            <p>Lagos, Nigeria</p>
            <p>info@whalesailsrecords.com</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 tracking-widest text-[9px] uppercase">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-white transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-white">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="hover:text-neutral-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}