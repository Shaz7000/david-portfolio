"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

const STATS = [
  { value: "63%", label: "MTTR improvement", system: "HoloGuide", arrow: "↓" },
  { value: "80%", label: "Procedure-related failures", system: "CliniGuard", arrow: "↓" },
  { value: "Faster", label: "Clinical readiness cycles", system: "Ecosystem", arrow: "↑" },
];

export default function ImpactStrip() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="mt-32 px-6 max-w-6xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.4em] text-gray-500 text-center"
      >
        Impact Goals
      </motion.p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center"
          >
            <p className="text-4xl md:text-5xl font-semibold tabular-nums">
              <span className="text-gray-500 mr-1 text-3xl">{s.arrow}</span>
              {s.value}
            </p>
            <p className="mt-2 text-gray-400">{s.label}</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
              {s.system}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
