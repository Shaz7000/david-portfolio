"use client";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

export default function ARRecognitionMock() {
  return (
    <PhoneFrame>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#0f1f3a,#000)]" />

      {/* Faux machine outline */}
      <svg
        viewBox="0 0 200 400"
        className="absolute inset-0 w-full h-full opacity-40"
      >
        <rect x="40" y="120" width="120" height="180" rx="8" stroke="#5a7fa8" strokeWidth="1.5" fill="none" />
        <rect x="60" y="160" width="80" height="40" rx="4" stroke="#5a7fa8" strokeWidth="1" fill="none" />
        <circle cx="100" cy="240" r="22" stroke="#5a7fa8" strokeWidth="1" fill="none" />
        <line x1="60" y1="280" x2="140" y2="280" stroke="#5a7fa8" strokeWidth="1" />
      </svg>

      {/* Pulsing detection box */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute top-[35%] left-[18%] right-[18%] h-[28%] border-2 border-emerald-400 rounded-md shadow-[0_0_20px_rgba(52,211,153,0.5)]"
      >
        <span className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-300" />
        <span className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-300" />
        <span className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-300" />
        <span className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-300" />
      </motion.div>

      {/* Label tag */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute top-[28%] left-1/2 -translate-x-1/2 z-10"
      >
        <div className="px-3 py-1.5 rounded-lg backdrop-blur-md bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 text-[10px] font-medium whitespace-nowrap">
          X-ray Generator Unit
          <span className="ml-2 text-emerald-300/70">98%</span>
        </div>
      </motion.div>

      {/* Top header */}
      <div className="absolute top-12 left-4 right-4 z-10 flex items-center justify-between">
        <p className="text-white text-xs font-semibold">Recognised</p>
        <span className="text-[9px] text-gray-400">Live</span>
      </div>

      {/* Floating action cards */}
      <div className="absolute bottom-6 left-4 right-4 z-10 grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-xl backdrop-blur-md bg-white/10 border border-white/15">
          <p className="text-[10px] text-white font-semibold">View Details</p>
          <p className="text-[8px] text-gray-400 mt-0.5">Specs &amp; manuals</p>
        </div>
        <div className="p-2.5 rounded-xl backdrop-blur-md bg-white/10 border border-white/15">
          <p className="text-[10px] text-white font-semibold">Troubleshoot</p>
          <p className="text-[8px] text-gray-400 mt-0.5">Guided steps</p>
        </div>
      </div>
    </PhoneFrame>
  );
}
