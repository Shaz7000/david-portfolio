"use client";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

export default function ScanMock() {
  return (
    <PhoneFrame>
      {/* Camera viewfinder bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a2e,#000)]">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Top status */}
      <div className="absolute top-12 left-0 right-0 px-5 z-10 flex items-start justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-widest text-gray-400">Device</p>
          <p className="text-white text-sm font-semibold">Imaging System</p>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-300">Active</span>
        </div>
      </div>

      {/* Animated scan box */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40"
        >
          {/* Corner brackets */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white rounded-tl-lg" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white rounded-tr-lg" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white rounded-bl-lg" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white rounded-br-lg" />
          {/* Scan line */}
          <motion.div
            animate={{ y: [0, 150, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          />
        </motion.div>
      </div>

      <p className="absolute top-1/2 mt-28 left-0 right-0 text-center text-[11px] text-gray-300">
        Point camera at device
      </p>

      {/* Bottom CTAs */}
      <div className="absolute bottom-6 left-4 right-4 z-10 space-y-2">
        <button className="w-full py-3 rounded-2xl bg-white text-black text-xs font-semibold">
          Scan Device
        </button>
        <button className="w-full py-3 rounded-2xl border border-white/15 text-white text-xs backdrop-blur-md bg-white/5">
          View Manuals
        </button>
      </div>
    </PhoneFrame>
  );
}
