"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const frames = [
  "Field engineers switch between tools, manuals, and calls...",
  "Information lives in PDFs, tribal knowledge, and Slack threads.",
  "Confusion compounds. Decisions get delayed.",
  "Downtime becomes the default mode.",
];

function Frame({ text, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [30, -30]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute text-2xl md:text-4xl text-gray-300 text-center max-w-3xl font-medium leading-snug"
    >
      {text}
    </motion.p>
  );
}

export default function PainNarrative() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="problem" ref={ref} className="relative h-[400vh] bg-black/40">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        {frames.map((text, i) => (
          <Frame
            key={i}
            text={text}
            index={i}
            total={frames.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
