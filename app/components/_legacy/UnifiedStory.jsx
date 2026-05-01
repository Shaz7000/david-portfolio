"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function UnifiedStory() {
  return (
    <motion.section
      id="case-studies"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
      className="mt-32 mb-32 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.4em] text-gray-500"
      >
        The Unified Story
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight"
      >
        A complete reliability system for healthcare environments.
      </motion.h2>
      <motion.p
        variants={fadeUp}
        className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto"
      >
        HoloGuide ensures engineers can recover faster.
        <br />
        CliniGuard ensures systems fail less often.
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-8 text-white text-lg tracking-wide"
      >
        Prevent → Assist → Recover → Optimize
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        <Link
          href="/systems"
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] transition"
        >
          Explore System Architecture
        </Link>
        <Link
          href="/cliniguard"
          className="px-6 py-3 border border-gray-600 rounded-full hover:border-gray-300 transition"
        >
          See CliniGuard
        </Link>
        <Link
          href="/hologuide"
          className="px-6 py-3 border border-gray-600 rounded-full hover:border-gray-300 transition"
        >
          See HoloGuide
        </Link>
      </motion.div>
    </motion.section>
  );
}
