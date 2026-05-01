"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function Work() {
  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="mt-32 px-6 pb-32 max-w-5xl mx-auto"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-10">
        Selected Product Work
      </motion.h2>

      <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-5">
        <Link href="/holiguide">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-full p-8 border border-gray-800 rounded-xl cursor-pointer bg-white/[0.02] backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Field service · AR
            </p>
            <h3 className="text-2xl font-semibold mt-2">HoloGuide</h3>
            <p className="text-gray-400 mt-2">
              AR-powered assistance platform for field engineers.
            </p>
          </motion.div>
        </Link>

        <Link href="/dashboard">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-full p-8 border border-gray-800 rounded-xl cursor-pointer bg-white/[0.02] backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              Clinical · System health
            </p>
            <h3 className="text-2xl font-semibold mt-2">CliniGuard</h3>
            <p className="text-gray-400 mt-2">
              System health intelligence for clinical reliability.
            </p>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}
