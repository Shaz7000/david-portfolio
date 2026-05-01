"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SYSTEM_LAYERS } from "../../../lib/systems";

// Diamond-positioned 4-layer system diagram. activeId highlights one layer;
// passing null = idle / all visible state.
//
//        Predict (PRISM)
//             ↓
//   Recover         Prevent
//   (ARIS)         (CliniGuard)
//             ↑
//        Assist (HoloGuide)
//
// Positions in a 0-100 grid so absolute layout stays responsive.
const POSITIONS = {
  predict: { x: 50, y: 8 },
  prevent: { x: 88, y: 50 },
  assist: { x: 50, y: 92 },
  recover: { x: 12, y: 50 },
};

const FLOW = ["predict", "prevent", "assist", "recover"]; // clockwise

export default function SystemLoop({ activeId = null, size = 460 }) {
  const activeIndex = activeId ? FLOW.indexOf(activeId) : -1;

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size, maxWidth: "100%" }}
    >
      {/* connector ring */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#ringGlow)" />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.3"
          strokeDasharray="0.6 0.8"
        />
        {/* arrows that highlight as flow advances */}
        {FLOW.map((id, i) => {
          const next = FLOW[(i + 1) % FLOW.length];
          const a = POSITIONS[id];
          const b = POSITIONS[next];
          // shrink endpoints to leave space around node
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / len;
          const uy = dy / len;
          const pad = 10;
          const x1 = a.x + ux * pad;
          const y1 = a.y + uy * pad;
          const x2 = b.x - ux * pad;
          const y2 = b.y - uy * pad;
          const lit = activeIndex >= 0 && i === activeIndex;
          return (
            <line
              key={`arc-${id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={lit ? SYSTEM_LAYERS[i].hex : "rgba(255,255,255,0.12)"}
              strokeWidth={lit ? 0.6 : 0.3}
              strokeLinecap="round"
              style={{ transition: "stroke 400ms ease, stroke-width 400ms ease" }}
            />
          );
        })}
      </svg>

      {/* center label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId || "idle"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              {activeId ? "Active layer" : "Reliability loop"}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {activeId
                ? SYSTEM_LAYERS.find((l) => l.id === activeId)?.action
                : "Closed-loop"}
            </p>
            <p className="mt-1 text-sm text-gray-400">
              {activeId
                ? SYSTEM_LAYERS.find((l) => l.id === activeId)?.system
                : "Predict → Prevent → Assist → Recover"}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nodes */}
      {SYSTEM_LAYERS.map((layer) => {
        const pos = POSITIONS[layer.id];
        const isActive = activeId === layer.id;
        const dim = activeId && !isActive;
        return (
          <motion.div
            key={layer.id}
            initial={false}
            animate={{
              scale: isActive ? 1.08 : dim ? 0.94 : 1,
              opacity: dim ? 0.45 : 1,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Link href={layer.href} className="block group">
              <div
                className={`relative px-5 py-4 rounded-2xl border backdrop-blur-md transition-colors ${
                  isActive
                    ? `${layer.border} ${layer.bg}`
                    : "border-white/10 bg-white/[0.03]"
                }`}
                style={{
                  boxShadow: isActive
                    ? `0 0 40px ${layer.hex}33, 0 0 0 1px ${layer.hex}40`
                    : "none",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${layer.dot} ${
                      isActive ? "" : "opacity-70"
                    }`}
                    style={{
                      boxShadow: isActive ? `0 0 12px ${layer.hex}` : "none",
                    }}
                  />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
                    {layer.action}
                  </p>
                </div>
                <p className="mt-1 text-base font-semibold text-white whitespace-nowrap">
                  {layer.system}
                </p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
