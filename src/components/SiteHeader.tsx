"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      <header
        style={{ viewTransitionName: "site-header" }}
        className="fixed top-0 inset-x-0 z-50 grid grid-cols-12  border-b border-neutral-800 bg-[#00000083] backdrop-blur text-[11px] tracking-widest uppercase"
      >
        {/* LEFT NAV (desktop) */}
        <nav className="hidden md:flex col-span-4 items-center gap-x-6 px-6 h-14 md:border-r border-neutral-800 text-neutral-400">
          {LEFT.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              transitionTypes={["nav-forward"]}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/whalesails/transparent.png"
              alt="Whalesails Records"
              className="h-9 w-auto object-contain"
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
              transitionTypes={["nav-forward"]}
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
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden bg-[#060606] flex flex-col justify-center items-center px-6 pt-14 pb-8 text-[14px] tracking-widest uppercase"
          >
            <nav className="flex flex-col items-center justify-center w-full max-w-xs text-center overflow-hidden">
              {LINKS.map((l, i) => {
                const dirs = ["left", "right", "bottom", "right", "left", "bottom"];
                const dir = dirs[i % dirs.length];
                const offset =
                  dir === "left" ? -80 : dir === "right" ? 80 : 60;
                return (
                  <motion.div
                    key={l.href}
                    initial={{
                      opacity: 0,
                      x: dir === "bottom" ? 0 : offset,
                      y: dir === "bottom" ? offset : 0,
                    }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05 + i * 0.06,
                    }}
                  >
                    <Link
                      href={l.href}
                      transitionTypes={["nav-forward"]}
                      onClick={() => setOpen(false)}
                      className={`block w-full py-2 transition-colors hover:text-white ${
                        pathname !== "/" && isActive(l.href)
                          ? "text-white font-medium"
                          : "text-neutral-400"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
