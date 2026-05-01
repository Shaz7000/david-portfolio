"use client";
import Link from "next/link";
import Reveal from "./ui/Reveal";
import { SYSTEM_LAYERS } from "../../lib/systems";

export default function ClosingCTA() {
  return (
    <section id="loop" className="px-6 py-32 max-w-4xl mx-auto text-center">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          The complete system
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          Four products. One loop.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-gray-400">
          Zero tolerance for silent failure.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {SYSTEM_LAYERS.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={`px-5 py-2.5 rounded-full border ${l.border} ${l.bg} ${l.text} text-sm hover:scale-[1.03] transition`}
            >
              {l.action} · {l.system} →
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/cases"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] glow-hover transition"
          >
            View All Case Studies
          </Link>
          <Link
            href="/connect"
            className="px-6 py-3 border border-gray-600 rounded-full hover:border-gray-300 transition"
          >
            Let&apos;s talk
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
