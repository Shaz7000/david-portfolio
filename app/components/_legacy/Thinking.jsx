"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function Thinking() {
  const items = [
    "Design for real-world constraints",
    "Reduce cognitive load",
    "Prioritise outcomes over output",
    "Turn ambiguity into decisions",
  ];

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="mt-32 px-6 max-w-5xl mx-auto"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-10">
        How I Think
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 border border-gray-800 rounded-xl cursor-pointer bg-white/[0.02] backdrop-blur-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
