"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useDemo } from "./DemoContext";
import { STORY_BEATS } from "../../lib/systems";

export function DemoNarration() {
  const { step, playing } = useDemo();
  const beat = STORY_BEATS[step];

  return (
    <AnimatePresence mode="wait">
      {playing && beat && (
        <motion.div
          key={beat.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] max-w-2xl px-6"
        >
          <div className="px-6 py-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              {String(step + 1).padStart(2, "0")} / {String(STORY_BEATS.length).padStart(2, "0")} ·{" "}
              <span className="text-white">{beat.id}</span>
            </p>
            <p className="mt-2 text-base md:text-lg text-white leading-relaxed">{beat.text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DemoControls() {
  const { playing, step, totalSteps, pause, resume, skip, exit } = useDemo();

  return (
    <AnimatePresence>
      {playing && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 px-2 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10"
        >
          <button onClick={pause} className="px-4 py-2 text-xs text-gray-300 hover:text-white transition">
            Pause
          </button>
          <button onClick={resume} className="px-4 py-2 text-xs text-gray-300 hover:text-white transition">
            Resume
          </button>
          <button
            onClick={skip}
            disabled={step >= totalSteps - 1}
            className="px-4 py-2 text-xs text-gray-300 hover:text-white transition disabled:opacity-40"
          >
            Skip
          </button>
          <span className="w-px h-5 bg-white/10" />
          <button
            onClick={exit}
            className="px-4 py-2 text-xs text-white hover:text-red-300 transition"
          >
            Exit
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DemoProgressBar() {
  const { playing, step, totalSteps } = useDemo();
  const pct = Math.min(100, ((step + 1) / totalSteps) * 100);

  return (
    <AnimatePresence>
      {playing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 h-0.5 z-[70] bg-white/5"
        >
          <motion.div
            className="h-full bg-white"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function WatchDemoButton({ className = "" }) {
  const { start, playing } = useDemo();
  if (playing) return null;
  return (
    <button
      onClick={start}
      className={`inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] glow-hover transition ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-black" />
      Watch Guided Demo
    </button>
  );
}
