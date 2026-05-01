"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

const ARC = [
  {
    n: "01",
    title: "System degradation",
    body: "Memory creeps, services drift, caches accumulate — invisible to the operator.",
    state: "invisible",
  },
  {
    n: "02",
    title: "System failure",
    body: "A procedure stalls, a workstation freezes — the failure is now visible and costly.",
    state: "visible",
  },
  {
    n: "03",
    title: "Recovery intervention",
    body: "An engineer is dispatched. The clock starts on time-to-repair.",
    state: "reactive",
  },
  {
    n: "04",
    title: "Preventive correction",
    body: "The missing layer in most systems — closing the loop so failures don’t repeat.",
    state: "missing",
  },
];

export default function ProductThinkingArc() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
      className="mt-32 px-6 max-w-5xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.4em] text-gray-500"
      >
        How I think
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl"
      >
        Failures aren’t isolated events — they’re a system lifecycle problem.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="mt-4 text-gray-400 max-w-2xl"
      >
        In high-stakes environments, reliability work has to span all four
        layers — not just the last one.
      </motion.p>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {ARC.map((step) => (
          <motion.div
            key={step.n}
            variants={fadeUp}
            className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.3em] text-gray-500">
                {step.n}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 px-2 py-0.5 rounded-full border border-white/10">
                {step.state}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
