"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActionButton from "./ActionButton";
import { actionCenter } from "../../../features/cliniguard/data/copy";

const ACTIONS = [
  { id: "optimize", label: "Optimize System Now", variant: "primary" },
  { id: "clear-cache", label: "Clear Temporary Files" },
  { id: "restart-services", label: "Restart Services" },
  { id: "deep-scan", label: "Run Deep Health Scan" },
];

export default function ActionPanel({ onRun, lastResult }) {
  const [running, setRunning] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [done, setDone] = useState(null);

  async function handleRun(action) {
    setRunning(action);
    setDone(null);
    setStepIndex(0);
    // Animate through scan steps while server-side action runs
    const stepTimer = setInterval(() => {
      setStepIndex((s) => Math.min(s + 1, actionCenter.steps.length - 1));
    }, 500);

    const result = await onRun(action.id);

    clearInterval(stepTimer);
    setStepIndex(actionCenter.steps.length);
    setDone({ action, result });
    setRunning(null);
  }

  return (
    <div className="p-6 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md">
      <p className="text-xs uppercase tracking-widest text-cg-subtle">{actionCenter.header}</p>
      <h3 className="text-xl font-semibold text-white mt-1">Quick actions</h3>

      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        {ACTIONS.map((a) => (
          <ActionButton
            key={a.id}
            onClick={() => handleRun(a)}
            variant={a.variant || "ghost"}
            disabled={!!running}
          >
            {running?.id === a.id ? "Running…" : a.label}
          </ActionButton>
        ))}
      </div>

      <AnimatePresence>
        {(running || done) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-5 p-4 rounded-xl bg-black/30 border border-white/5"
          >
            <div className="space-y-1.5">
              {actionCenter.steps.map((s, i) => {
                const active = i === stepIndex && running;
                const passed = i < stepIndex || done;
                return (
                  <div key={s} className="flex items-center gap-2 text-sm">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        passed ? "bg-cg-healthy" : active ? "bg-cg-blue animate-pulse" : "bg-white/20"
                      }`}
                    />
                    <span className={passed || active ? "text-white" : "text-cg-subtle"}>{s}</span>
                  </div>
                );
              })}
            </div>

            {done && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 pt-4 border-t border-white/5"
              >
                <p className="text-cg-healthy text-sm font-semibold">{actionCenter.resultTitle}</p>
                <p className="text-cg-subtle text-xs mt-1">{actionCenter.resultBody}</p>
                {done.result && (
                  <p className="text-white text-xs mt-2 tabular-nums">
                    Score: <span className="text-cg-subtle">{done.result.before}</span> →{" "}
                    <span className="text-cg-healthy font-semibold">{done.result.after}</span>
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
