"use client";
import { motion } from "framer-motion";

export default function InsightReveal() {
  return (
    <section id="insight" className="text-center py-40 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
          The turning point
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight">
          The problem isn&rsquo;t lack of information.
        </h2>
        <p className="mt-6 text-gray-400 text-xl max-w-2xl mx-auto">
          It&rsquo;s lack of contextual access in critical moments.
        </p>
      </motion.div>
    </section>
  );
}
