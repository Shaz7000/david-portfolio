"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

const questions = [
  "Does AR actually reduce MTTR at scale, or only in pilot conditions?",
  "What does the adoption curve look like beyond the early-believer cohort?",
  "Where does friction remain — content authoring, recognition coverage, or trust?",
  "Which workflows justify guided AR, and which should stay text-only?",
];

export default function ValidateNext() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-40 px-6 text-center max-w-3xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
      >
        Open questions
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-semibold"
      >
        What I&rsquo;d validate next.
      </motion.h2>

      <div className="mt-12 space-y-4 text-left">
        {questions.map((q, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="p-5 border border-white/10 rounded-xl backdrop-blur-lg bg-white/[0.03] text-gray-300"
          >
            {q}
          </motion.p>
        ))}
      </div>
    </motion.section>
  );
}
