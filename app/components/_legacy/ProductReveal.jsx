"use client";
import { motion } from "framer-motion";

export default function ProductReveal() {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          Introducing
        </p>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          HoloGuide
        </h2>
        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          Contextual AR assistance for the moments that matter.
        </p>
      </motion.div>
    </section>
  );
}
