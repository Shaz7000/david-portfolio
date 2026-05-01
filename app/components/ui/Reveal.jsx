"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { APPLE_EASE, DURATION } from "@/lib/easing";

// Apple-curve scroll reveal. Cheap, reusable, no layout thrash.
export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: DURATION.base, delay, ease: APPLE_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
