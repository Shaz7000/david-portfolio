import Link from "next/link";
import Navbar from "../components/Navbar";
import FlowDiagram from "../components/system/FlowDiagram";

export const metadata = {
  title: "CliniGuard — Preventive system health intelligence",
  description:
    "Proactive system health intelligence layer that ensures clinical systems remain stable between procedures.",
};

export default function CliniGuardLanding() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto pt-20 md:pt-28">
        <p className="text-xs uppercase tracking-[0.4em] text-emerald-400/80">
          CliniGuard · Preventive System Health
        </p>
        <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          Prevent failures before they impact patient care.
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
          A proactive system health intelligence layer that ensures clinical
          systems remain stable between procedures.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] transition"
          >
            View Live Dashboard →
          </Link>
          <Link
            href="/systems"
            className="px-6 py-3 border border-gray-600 rounded-full hover:border-gray-300 transition"
          >
            View Ecosystem Architecture
          </Link>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="px-6 max-w-5xl mx-auto mt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Impact Goals
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { v: "↓ 80%", l: "Procedure-related failures" },
            { v: "↑ 100%", l: "Predictive system readiness" },
            { v: "↓", l: "Unexpected downtime" },
          ].map((s) => (
            <div
              key={s.l}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <p className="text-3xl font-semibold tabular-nums">{s.v}</p>
              <p className="mt-2 text-gray-400 text-sm">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 max-w-4xl mx-auto mt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Problem
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
          Hidden system degradation.
        </h2>
        <p className="mt-4 text-gray-400 leading-relaxed">
          High-intensity imaging procedures leave residue — cached series,
          elevated services, fragmented memory. None of it triggers an alarm.
          By the time the next procedure starts, the system is already
          compromised.
        </p>
      </section>

      {/* Insight */}
      <section className="px-6 max-w-4xl mx-auto mt-16">
        <div className="p-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/5">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Product Insight
          </p>
          <p className="mt-3 text-xl text-white leading-relaxed">
            Most system failures are not sudden — they are accumulated states
            that go unmonitored between procedures.
          </p>
        </div>
      </section>

      {/* Health Engine preview */}
      <section className="px-6 max-w-5xl mx-auto mt-24">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Health Scoring System
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
          A single score that reflects clinical readiness.
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
          The health engine fuses memory, CPU, disk, and service latency into
          one trustable signal — paired with a forward-looking risk model that
          surfaces issues before the next scan.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {[
            { t: "Detect", d: "Continuous telemetry from each workstation." },
            { t: "Score", d: "Calm-clinical scoring weights memory, CPU, disk, service latency." },
            { t: "Predict", d: "Slope-based risk model surfaces likely degradations." },
            { t: "Act", d: "One-tap optimize, clear-cache, restart-services, or deep scan." },
          ].map((c) => (
            <div
              key={c.t}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <p className="text-sm font-semibold">{c.t}</p>
              <p className="mt-2 text-sm text-gray-400">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem position */}
      <section className="px-6 max-w-5xl mx-auto mt-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Position in the ecosystem
        </p>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
          CliniGuard owns Detect → Prevent.
        </h2>
        <div className="mt-8">
          <FlowDiagram />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-4xl mx-auto mt-24 text-center">
        <Link
          href="/dashboard"
          className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-[1.03] transition"
        >
          Explore the live Health Dashboard →
        </Link>
      </section>

      {/* Exit navigation */}
      <section className="px-6 max-w-3xl mx-auto mt-16 mb-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
          Continue exploring
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cases/cliniguard"
            className="px-5 py-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm hover:scale-[1.03] transition"
          >
            Read the CliniGuard case study →
          </Link>
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
          >
            All work
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
          >
            Home
          </Link>
        </div>
        <p className="mt-6 text-gray-500 text-sm">
          Next system in loop:{" "}
          <Link href="/holiguide" className="text-white hover:underline">
            HoloGuide →
          </Link>
        </p>
      </section>
    </main>
  );
}
