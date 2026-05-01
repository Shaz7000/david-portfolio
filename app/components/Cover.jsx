"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";

export default function Cover() {
  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-section overflow-hidden"
    >
      {/* Blur shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/15 blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="max-w-5xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.4em] text-muted"
        >
          Product Case Study
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-muted bg-clip-text text-transparent"
        >
          HoloGuide
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl">
          AR-powered field assistance platform.
        </motion.p>

        <motion.p variants={fadeUp} className="mt-6 text-muted max-w-xl text-lg leading-relaxed">
          &ldquo;Reducing downtime in critical healthcare systems.&rdquo;
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm">
          <div>
            <p className="text-muted text-xs uppercase tracking-widest">Role</p>
            <p className="text-white mt-1">Product Concept &amp; Lead</p>
          </div>
          <div>
            <p className="text-muted text-xs uppercase tracking-widest">Domain</p>
            <p className="text-white mt-1">HealthTech · Field Service</p>
          </div>
          <div>
            <p className="text-muted text-xs uppercase tracking-widest">Year</p>
            <p className="text-white mt-1">2025 — 2026</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
