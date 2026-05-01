"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureScene({ eyebrow, title, body, mock, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const mockX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [reverse ? -120 : 120, 0]
  );
  const mockOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div
          style={{ opacity }}
          className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div style={{ y }}>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              {eyebrow}
            </p>
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              {title}
            </h3>
            <p className="text-gray-400 mt-6 text-lg max-w-md">{body}</p>
          </motion.div>

          <motion.div
            style={{ x: mockX, opacity: mockOpacity }}
            className="aspect-[4/3] rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 overflow-hidden flex items-center justify-center"
          >
            <span className="text-gray-500 text-sm">{mock}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
