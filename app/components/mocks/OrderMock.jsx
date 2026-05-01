"use client";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

export default function OrderMock() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,#1f1a2e,#000)]" />

      {/* Header */}
      <div className="absolute top-12 left-4 right-4 z-10">
        <p className="text-[9px] uppercase tracking-widest text-gray-400">Detected issue</p>
        <p className="text-white text-base font-semibold mt-1">Damaged Module</p>
      </div>

      {/* Auto-filled card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-[22%] left-4 right-4 p-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10"
      >
        <div className="flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-widest text-gray-500">Part ID</p>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">auto-filled</span>
        </div>
        <p className="text-white text-sm font-mono mt-1">XR-2034</p>
        <p className="text-[10px] text-gray-400 mt-2">Detector module · Rev B</p>
      </motion.div>

      {/* Availability row */}
      <div className="absolute top-[44%] left-4 right-4 grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
          <p className="text-[8px] text-gray-500 uppercase tracking-wider">In stock</p>
          <p className="text-emerald-300 text-sm font-semibold mt-0.5">12 units</p>
        </div>
        <div className="p-2.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
          <p className="text-[8px] text-gray-500 uppercase tracking-wider">ETA</p>
          <p className="text-white text-sm font-semibold mt-0.5">24 h</p>
        </div>
      </div>

      {/* Status timeline */}
      <div className="absolute top-[60%] left-4 right-4 p-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <p className="text-[10px] text-gray-300">Pre-filled from scan</p>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          <p className="text-[10px] text-gray-300">Awaiting confirmation</p>
        </div>
      </div>

      {/* CTAs */}
      <div className="absolute bottom-6 left-4 right-4 z-10 space-y-2">
        <button className="w-full py-3 rounded-2xl bg-white text-black text-xs font-semibold">
          Order Replacement
        </button>
        <button className="w-full py-3 rounded-2xl border border-white/15 text-white text-xs backdrop-blur-md bg-white/5">
          Check Availability
        </button>
      </div>
    </PhoneFrame>
  );
}
