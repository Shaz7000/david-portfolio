"use client";
import Reveal from "./ui/Reveal";

// Bridge between Hero and StickyStory.
// Frames the 4-layer model before the immersive sticky section starts.
export default function SystemEmerges() {
  return (
    <section id="system" className="relative px-6 py-32 max-w-3xl mx-auto text-center">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          The model
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
          A complete reliability system needs more than fixing failures.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          It needs to <span className="text-indigo-300">predict</span>,{" "}
          <span className="text-emerald-300">prevent</span>,{" "}
          <span className="text-blue-300">assist</span>, and{" "}
          <span className="text-violet-300">recover</span> — across the full
          operational lifecycle.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-12 text-xs uppercase tracking-[0.4em] text-gray-500 animate-pulse">
          ↓ scroll to enter the loop
        </p>
      </Reveal>
    </section>
  );
}
