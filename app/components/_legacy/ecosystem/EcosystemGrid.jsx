"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../lib/animations";

const products = [
  {
    title: "HoloGuide",
    eyebrow: "Reactive · AR Field Repair",
    desc: "Real-time AR assistance for field engineers. Reduces downtime during critical system failures by enabling spatial, contextual repair guidance.",
    href: "/hologuide",
    accent: "from-indigo-500/20 to-blue-500/0",
    dot: "bg-indigo-400",
  },
  {
    title: "CliniGuard",
    eyebrow: "Preventive · System Health",
    desc: "Proactive system health intelligence layer. Prevents failures by continuously evaluating readiness between clinical procedures.",
    href: "/cliniguard",
    accent: "from-emerald-500/20 to-teal-500/0",
    dot: "bg-emerald-400",
  },
];

export default function EcosystemGrid() {
  return (
    <motion.section
      id="ecosystem"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="mt-32 px-6 max-w-6xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.4em] text-gray-500"
      >
        Product Ecosystem
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl"
      >
        Two systems. One closed-loop reliability model.
      </motion.h2>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {products.map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <Link href={p.href} className="block group">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="relative h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden"
              >
                <div
                  className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      {p.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed max-w-md">
                    {p.desc}
                  </p>
                  <p className="mt-8 text-sm text-white/80 group-hover:text-white transition">
                    Explore Case Study →
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        className="mt-10 p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      >
        <p className="text-gray-400 text-sm">
          Together, these systems form a closed-loop reliability model.
        </p>
        <p className="text-white font-medium tracking-wide">
          Detect → Prevent → Assist → Recover
        </p>
      </motion.div>
    </motion.section>
  );
}
