"use client";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

export default function GuidanceMock() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#1a1530,#000)]" />

      {/* Top: step indicator */}
      <div className="absolute top-12 left-4 right-4 z-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] uppercase tracking-widest text-gray-400">Step 2 of 5</p>
          <p className="text-[9px] text-gray-400">~3 min</p>
        </div>
        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
          />
        </div>
      </div>

      {/* AR overlay area */}
      <div className="absolute top-[22%] left-4 right-4 h-[38%] rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-transparent backdrop-blur-sm overflow-hidden">
        {/* Component outline */}
        <svg viewBox="0 0 160 120" className="absolute inset-0 w-full h-full">
          <rect x="30" y="30" width="100" height="60" rx="6" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeDasharray="4 3" />
          <circle cx="50" cy="50" r="4" fill="#a78bfa" />
          <circle cx="110" cy="50" r="4" fill="#a78bfa" />
          <circle cx="50" cy="70" r="4" fill="#a78bfa" />
          <circle cx="110" cy="70" r="4" fill="#a78bfa" />
        </svg>
        {/* Pointer arrow */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] left-[30%] text-fuchsia-300 text-xs"
        >
          ◉ panel screws
        </motion.div>
      </div>

      {/* Instruction card */}
      <div className="absolute bottom-[26%] left-4 right-4 p-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
        <p className="text-white text-[11px] font-semibold leading-snug">
          Remove panel using <span className="text-indigo-300">Tool X</span>
        </p>
        <div className="mt-2 flex items-center gap-2">
          <div className="w-12 h-8 rounded-md bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 border border-white/10 flex items-center justify-center text-[8px] text-white/70">
            ▶ video
          </div>
          <p className="text-[9px] text-gray-400">Watch 18s walkthrough</p>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-4 right-4 z-10 grid grid-cols-2 gap-2">
        <button className="py-2.5 rounded-xl border border-white/15 text-white text-[10px] backdrop-blur-md bg-white/5">
          Voice Assist
        </button>
        <button className="py-2.5 rounded-xl bg-white text-black text-[10px] font-semibold">
          Next Step →
        </button>
      </div>
    </PhoneFrame>
  );
}
