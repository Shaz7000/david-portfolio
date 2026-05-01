"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FlowDiagram from "../components/system/FlowDiagram";
import { fadeUp, stagger } from "../../lib/animations";

const LOOP = [
  {
    step: "System degradation",
    by: "Invisible — no alert fires.",
    owner: null,
  },
  {
    step: "CliniGuard detects risk",
    by: "Predictive model spots the slope before threshold breach.",
    owner: "CliniGuard",
  },
  {
    step: "Preventive action",
    by: "Cleanup runs between procedures. The failure never happens.",
    owner: "CliniGuard",
  },
  {
    step: "If failure occurs → HoloGuide",
    by: "AR session opens. Engineer sees spatial context in real time.",
    owner: "HoloGuide",
  },
  {
    step: "System recovery",
    by: "Verified fix. Health score returns to clinical readiness.",
    owner: "HoloGuide → CliniGuard",
  },
];

export default function SystemsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 max-w-4xl mx-auto pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Systems
        </p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          How HoloGuide and CliniGuard work together.
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
          One detects what’s coming. The other resolves what arrives.
          Together they form the closed-loop reliability model behind every
          screen in the portfolio.
        </p>
      </section>

      {/* Flow */}
      <section className="px-6 max-w-5xl mx-auto mt-20">
        <FlowDiagram />
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
              CliniGuard
            </p>
            <p className="mt-3 text-white">Detect → Prevent</p>
            <p className="mt-2 text-gray-400 text-sm">
              Continuous health intelligence that surfaces invisible
              degradation before it reaches a procedure.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-indigo-400/20 bg-indigo-400/5">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
              HoloGuide
            </p>
            <p className="mt-3 text-white">Assist → Recover</p>
            <p className="mt-2 text-gray-400 text-sm">
              Real-time AR guidance that compresses time-to-repair when a
              failure does break through.
            </p>
          </div>
        </div>
      </section>

      {/* Loop visual */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="px-6 max-w-3xl mx-auto mt-28"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.4em] text-gray-500"
        >
          The Loop
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight"
        >
          From invisible drift to verified recovery.
        </motion.h2>

        <ol className="mt-12 relative border-l border-white/10 ml-3 space-y-6 pl-8">
          {LOOP.map((node, i) => (
            <motion.li
              key={node.step}
              variants={fadeUp}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-white/80 ring-4 ring-black" />
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                Step {String(i + 1).padStart(2, "0")}
                {node.owner && <span className="ml-2 text-gray-400">· {node.owner}</span>}
              </p>
              <p className="mt-1 text-white font-semibold">{node.step}</p>
              <p className="mt-1 text-gray-400 text-sm">{node.by}</p>
            </motion.li>
          ))}
        </ol>
      </motion.section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto mt-28 mb-32 text-center">
        <p className="text-gray-400 max-w-xl mx-auto">
          The whole portfolio is a single product system. Pick a layer to dive
          into.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/cliniguard"
            className="px-6 py-3 border border-emerald-400/40 text-emerald-300 rounded-full hover:bg-emerald-400/10 transition"
          >
            CliniGuard — Preventive layer →
          </Link>
          <Link
            href="/hologuide"
            className="px-6 py-3 border border-indigo-400/40 text-indigo-300 rounded-full hover:bg-indigo-400/10 transition"
          >
            HoloGuide — Reactive layer →
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] transition"
          >
            Live Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
