"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/label", label: "About" },
  { href: "/career", label: "Careers" },
  { href: "/release", label: "Releases" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const LEFT = LINKS.slice(0, 3);
const RIGHT = LINKS.slice(3);

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 inset-x-0 z-50 grid grid-cols-12 border-b border-neutral-800 bg-[#060606]/90 backdrop-blur text-[11px] tracking-widest uppercase">
      {/* LEFT NAV (desktop) */}
      <nav className="hidden md:flex col-span-4 items-center gap-x-6 px-6 h-14 md:border-r border-neutral-800 text-neutral-400">
        {LEFT.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`relative py-2 transition-colors hover:text-white ${
              pathname !== "/" && isActive(l.href)
                ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-white"
                : ""
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* LOGO CENTER */}
      <div className="col-span-8 md:col-span-4 flex items-center justify-between md:justify-center px-4 md:px-0 h-14">
        <Link
          href="/"
          className="text-2xl tracking-[0.2em] font-light italic hover:text-neutral-300 transition-colors"
        >
          Whalesails
        </Link>

        {/* HAMBURGER (mobile) */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* RIGHT NAV (desktop) */}
      <nav className="hidden md:flex col-span-4 items-center justify-end gap-x-6 px-6 h-14 md:border-l border-neutral-800 text-neutral-400">
        {RIGHT.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`relative py-2 transition-colors hover:text-white ${
              pathname !== "/" && isActive(l.href)
                ? "text-white after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-white"
                : ""
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden col-span-12 border-t border-neutral-800 bg-[#060606] flex flex-col divide-y divide-neutral-800">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-4 text-[12px] tracking-widest uppercase transition-colors hover:bg-neutral-900 hover:text-white ${
                pathname !== "/" && isActive(l.href)
                  ? "text-white"
                  : "text-neutral-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
