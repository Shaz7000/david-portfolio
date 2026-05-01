"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../../lib/animations";

const STEPS = [
  { label: "Detect", system: "CliniGuard", colour: "bg-emerald-400" },
  { label: "Prevent", system: "CliniGuard", colour: "bg-emerald-400" },
  { label: "Assist", system: "HoloGuide", colour: "bg-indigo-400" },
  { label: "Recover", system: "HoloGuide", colour: "bg-indigo-400" },
  { label: "Optimize", system: "Loop", colour: "bg-white/60" },
];

export default function FlowDiagram({ compact = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
      className={`flex flex-wrap justify-center items-center ${
        compact ? "gap-2 md:gap-3" : "gap-3 md:gap-4"
      }`}
    >
      {STEPS.map((step, i) => (
        <motion.div key={step.label} variants={fadeUp} className="flex items-center">
          <div className="px-4 md:px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${step.colour}`} />
            <span className="text-sm font-medium text-white">{step.label}</span>
            {!compact && (
              <span className="hidden md:inline text-[10px] uppercase tracking-widest text-gray-500 ml-1">
                {step.system}
              </span>
            )}
          </div>
          {i < STEPS.length - 1 && (
            <span className="mx-1 md:mx-2 text-gray-600 select-none">→</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
