"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-gradient-to-b from-black/80 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 relative transition-transform duration-500 group-hover:rotate-[360deg]">
              <Image
                src="/whalesails/wsr-logo.png"
                alt="Whalesails Records"
                fill
                className="object-contain"
                sizes="36px"
              />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-display text-base tracking-[0.25em] uppercase leading-none">
                Whalesails
              </span>
              <span className="block text-[8px] font-mono tracking-[0.4em] text-white/40 uppercase mt-1">
                Records LTD
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[11px] font-medium tracking-[0.25em] uppercase transition-colors ${
                    active ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white"
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/release"
              className="hidden md:flex items-center gap-2 border border-white/20 px-5 py-2.5 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              <Play className="w-3 h-3 fill-current" />
              Listen
            </Link>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-7 md:hidden"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: EASE }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-4xl tracking-[0.2em] uppercase transition-colors ${
                    pathname === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
                info@whalesailsrecords.com
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
