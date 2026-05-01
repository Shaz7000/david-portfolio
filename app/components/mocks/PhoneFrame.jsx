"use client";
import { motion } from "framer-motion";

// Reusable iPhone-style frame with floating perspective + glow
export default function PhoneFrame({ children, float = true }) {
  return (
    <motion.div
      whileHover={float ? { rotateX: 0, rotateY: 0, y: -4 } : undefined}
      style={{
        transform: float
          ? "perspective(1200px) rotateX(6deg) rotateY(-8deg)"
          : "perspective(1200px)",
        transformStyle: "preserve-3d",
      }}
      className="relative mx-auto w-[280px] md:w-[320px]"
    >
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[60px] bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-transparent blur-3xl" />

      {/* Phone body */}
      <div
        className="relative aspect-[9/19.5] rounded-[44px] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-2 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
        style={{ boxShadow: "0 0 80px rgba(120,80,200,0.25), inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-black">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-black z-20" />
          {children}
        </div>
      </div>
    </motion.div>
  );
}
