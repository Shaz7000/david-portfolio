"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const panels = [
  {
    title: "Recognise the device",
    body: "AR detects the equipment and surfaces the right manual instantly.",
  },
  {
    title: "Guide the workflow",
    body: "Step-by-step overlays reduce cognitive load in the field.",
  },
  {
    title: "Order parts in-context",
    body: "Engineers stay in flow — no app switching, no downtime.",
  },
];

function Panel({ panel, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [40, -40]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute text-center max-w-3xl"
    >
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        Step {index + 1}
      </p>
      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        {panel.title}
      </h2>
      <p className="mt-6 text-gray-400 text-lg">{panel.body}</p>
    </motion.div>
  );
}

export default function StickyScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        {panels.map((p, i) => (
          <Panel
            key={i}
            panel={p}
            index={i}
            total={panels.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
