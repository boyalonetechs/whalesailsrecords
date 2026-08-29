"use client";

import Link from "next/link";
import Image from "next/image";
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
    <>
      <header className="fixed top-0 inset-x-0 z-50 grid grid-cols-12 border-b border-neutral-800  backdrop-blur text-[11px] tracking-widest uppercase">
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

        {/* LOGO & HAMBURGER (full width on mobile, centered on desktop) */}
        <div className="col-span-12 md:col-span-4 flex items-center justify-between md:justify-center px-6 md:px-0 h-14">
          <Link href="/" className="relative z-50 flex items-center">
            <Image
              src="/whalesails/transparent.png"
              alt="Whalesails Records"
              width={180}
              height={40}
              className="w-auto h-9 object-contain"
            />
          </Link>

          {/* HAMBURGER (mobile) - Pushed to right */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center text-neutral-300 hover:text-white transition-colors z-50"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
      </header>

      {/* FULL-SCREEN MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#060606] flex flex-col justify-center items-center px-6 pt-14 pb-8 text-[14px] tracking-widest uppercase">
          <nav className="flex flex-col items-center justify-center space-y-6 w-full max-w-xs text-center">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`w-full py-2 transition-colors hover:text-white ${
                  pathname !== "/" && isActive(l.href)
                    ? "text-white font-medium"
                    : "text-neutral-400"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
