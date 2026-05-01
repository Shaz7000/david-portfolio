"use client";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, body, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className={`p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03] ${className}`}
    >
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-4">
          {icon}
        </div>
      )}
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      {body && <p className="mt-2 text-muted text-sm leading-relaxed">{body}</p>}
    </motion.div>
  );
}
