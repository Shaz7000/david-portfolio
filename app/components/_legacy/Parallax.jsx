"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blobOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]);

  return (
    <section
      ref={ref}
      className="relative mt-32 px-6 max-w-5xl mx-auto h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY, opacity: blobOpacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />
      </motion.div>

      <motion.div style={{ y: textY }} className="relative text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Designed for the gap between
          <br />
          <span className="text-gray-400">intent and outcome.</span>
        </h2>
      </motion.div>
    </section>
  );
}
