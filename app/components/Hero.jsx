"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import { WatchDemoButton } from "../../features/demo/DemoUI";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={stagger}
      initial="hidden"
      animate="show"
      className="text-center pt-28 md:pt-36 pb-20 px-6 max-w-4xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500"
      >
        David Mathew Thomas &middot; Software Engineer &middot; Product Thinker
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
      >
        Healthcare systems don&apos;t just break.
        <br />
        <span className="text-gray-400">They drift.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
      >
        Slow degradation. Missed signals. The gap between what a system
        knows and what anyone acts on.
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Working on Philips Healthcare&apos;s medical imaging systems, I
        observed these gaps first-hand &mdash; during site visits and days
        spent on the hospital floor with field engineers. I led small teams
        to build four MVP product systems that close the loop.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        <WatchDemoButton />
        <Link
          href="#story"
          className="px-6 py-3 border border-white/20 rounded-full hover:border-white/40 hover:bg-white/[0.03] transition"
        >
          Explore Manually
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500"
      >
        <span><span className="text-indigo-300">Predict</span> · PRISM</span>
        <span className="hidden md:inline">·</span>
        <span><span className="text-emerald-300">Prevent</span> · CliniGuard</span>
        <span className="hidden md:inline">·</span>
        <span><span className="text-blue-300">Assist</span> · HoloGuide</span>
        <span className="hidden md:inline">·</span>
        <span><span className="text-violet-300">Recover</span> · ARIS</span>
      </motion.div>
    </motion.section>
  );
}
