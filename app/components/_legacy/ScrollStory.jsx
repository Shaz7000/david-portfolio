"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollStory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={ref}
      className="h-[200vh] flex items-center justify-center px-6"
    >
      <motion.div style={{ y, opacity }} className="text-center sticky top-1/2">
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
          Systems don&rsquo;t fail in ideal conditions
        </h2>
        <p className="mt-4 text-gray-400 text-lg">
          They fail in real environments.
        </p>
      </motion.div>
    </section>
  );
}
