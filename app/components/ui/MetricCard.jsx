"use client";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MetricCard({ value, suffix = "", label, direction = "down" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const c = animate(count, value, { duration: 1.6, ease: "easeOut" });
      return () => c.stop();
    }
  }, [inView, value, count]);

  const arrow = direction === "down" ? "↓" : "↑";

  return (
    <div
      ref={ref}
      className="p-8 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]"
    >
      <h3 className="text-4xl md:text-5xl font-bold tabular-nums bg-gradient-to-b from-white to-muted bg-clip-text text-transparent">
        <motion.span>{rounded}</motion.span>
        {suffix} {arrow}
      </h3>
      <p className="mt-3 text-muted text-sm">{label}</p>
    </div>
  );
}
