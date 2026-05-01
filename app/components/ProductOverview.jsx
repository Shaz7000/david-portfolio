"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function ProductOverview() {
  const pillars = [
    "Device recognition",
    "Contextual guidance",
    "Integrated ordering",
  ];

  const flow = ["Camera", "Recognition", "Guidance", "Action"];

  return (
    <motion.section
      id="overview"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="px-6 md:px-section py-32 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-muted mb-4"
          >
            Product Overview
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-h2 md:text-5xl font-semibold leading-tight">
            A mobile AR assistance system for field engineers.
          </motion.h2>

          <motion.ul variants={fadeUp} className="mt-8 space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={fadeUp}
          className="p-8 rounded-3xl border border-white/10 backdrop-blur-lg bg-white/[0.03]"
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-6">System flow</p>
          <div className="flex flex-wrap items-center gap-3">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-4 py-3 rounded-xl border border-accent/30 bg-accent/10 text-white text-sm font-medium">
                  {step}
                </div>
                {i < flow.length - 1 && <span className="text-muted">→</span>}
              </div>
            ))}
          </div>
          <p className="mt-6 text-muted text-sm">
            One unbroken chain — no app switching, no copy-paste, no manual lookup.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
