"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function ScreenShowcase({
  eyebrow,
  title,
  body,
  insight,
  mock,
  reverse = false,
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className="px-6 py-32 max-w-6xl mx-auto"
    >
      <div
        className={`grid md:grid-cols-2 gap-16 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            {eyebrow}
          </p>
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-gray-400 mt-6 text-lg max-w-md">{body}</p>
          {insight && (
            <p className="mt-6 pl-4 border-l-2 border-indigo-400/40 text-gray-500 text-sm italic max-w-md">
              {insight}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center py-12"
        >
          {mock}
        </motion.div>
      </div>
    </motion.section>
  );
}
