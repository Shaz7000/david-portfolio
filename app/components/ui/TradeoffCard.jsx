"use client";
import { motion } from "framer-motion";

export default function TradeoffCard({ a, b, decision, rationale }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]"
    >
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{a}</span>
        <span>vs</span>
        <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">{b}</span>
      </div>
      <p className="mt-4 text-white text-base font-semibold">→ {decision}</p>
      <p className="mt-2 text-muted text-sm">{rationale}</p>
    </motion.div>
  );
}
