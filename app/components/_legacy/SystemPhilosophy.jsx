"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import FlowDiagram from "./system/FlowDiagram";

export default function SystemPhilosophy() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="mt-32 px-6 max-w-5xl mx-auto text-center"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.4em] text-gray-500"
      >
        System Philosophy
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight"
      >
        A closed-loop reliability system.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="mt-4 text-gray-400 max-w-xl mx-auto"
      >
        Each product owns one phase of the lifecycle — together they cover the
        full path from invisible degradation to verified recovery.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-12">
        <FlowDiagram />
      </motion.div>
    </motion.section>
  );
}
