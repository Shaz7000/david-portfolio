"use client";
import { motion } from "framer-motion";

export default function FutureVision() {
  return (
    <section id="vision" className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-fuchsia-500/15 via-indigo-500/10 to-transparent blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-muted mb-6">
          What&rsquo;s next
        </p>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          From assistance
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
            to intelligent systems.
          </span>
        </h2>

        <ul className="mt-12 grid sm:grid-cols-3 gap-4 text-left">
          {[
            "Predictive diagnostics",
            "AI-guided repairs",
            "Autonomous service workflows",
          ].map((t) => (
            <li
              key={t}
              className="p-5 rounded-xl border border-white/10 backdrop-blur-lg bg-white/[0.03] text-gray-200 text-sm"
            >
              → {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
