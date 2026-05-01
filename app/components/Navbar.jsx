"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useDemo } from "../../features/demo/DemoContext";

const LINKS = [
  { href: "/cases", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/connect", label: "Connect" },
];

// Context-aware navbar:
// - Home (/) in demo mode → ultra-minimal (just logo + Skip Demo)
// - Home idle             → minimal (logo + Work / About / Connect)
// - Other routes          → full nav with active highlight + mobile menu
export default function Navbar() {
  const pathname = usePathname();
  const { playing, exit } = useDemo();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isHome && playing) {
    return (
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 text-sm bg-black/40 backdrop-blur-md border-b border-white/5"
      >
        <Link href="/" className="font-semibold tracking-tight text-gray-300 hover:text-white transition">
          Home
        </Link>
        <button
          onClick={exit}
          className="text-xs uppercase tracking-[0.3em] text-gray-300 hover:text-white transition"
        >
          Skip Demo
        </button>
      </motion.nav>
    );
  }

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 flex justify-between items-center px-6 py-5 text-sm backdrop-blur-md bg-black/30 border-b border-white/5"
      >
        <Link href="/" className="font-semibold tracking-tight text-gray-300 hover:text-white transition">
          Home
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition ${
                  active ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white origin-center"
          />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[57px] z-40 md:hidden border-b border-white/5 bg-black/90 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {LINKS.map((l) => {
                const active =
                  pathname === l.href || pathname.startsWith(l.href + "/");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-base transition ${
                      active ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
