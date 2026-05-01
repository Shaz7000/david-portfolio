"use client";
import { motion } from "framer-motion";
import MetricCard from "./ui/MetricCard";

const stats = [
  { value: 30, suffix: "%", label: "Defect Leakage", direction: "down" },
  { value: 42, suffix: "%", label: "MTTR", direction: "down" },
  { value: 27, suffix: "%", label: "First-time Fix", direction: "up" },
  { value: 35, suffix: "%", label: "Repeat Visits", direction: "down" },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="px-6 md:px-section py-32 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-[0.3em] text-muted mb-4"
      >
        Impact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-h2 md:text-5xl font-semibold mb-16"
      >
        Outcomes that moved the needle.
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <MetricCard {...s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
