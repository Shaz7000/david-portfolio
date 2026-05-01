"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "cover", label: "Cover" },
  { id: "problem", label: "Problem" },
  { id: "insight", label: "Insight" },
  { id: "overview", label: "Overview" },
  { id: "flows", label: "Core Flows" },
  { id: "tradeoffs", label: "Tradeoffs" },
  { id: "impact", label: "Impact" },
  { id: "vision", label: "Vision" },
];

export default function SideNav() {
  const [active, setActive] = useState("cover");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    els.forEach((el) => observer.observe(el));

    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      els.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group flex items-center gap-3"
              >
                <span
                  className={`block h-px transition-all ${
                    isActive
                      ? "w-10 bg-white"
                      : "w-5 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
                <span
                  className={`text-xs uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white/40 group-hover:text-white/80"
                  }`}
                >
                  {s.label}
                </span>
              </a>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
