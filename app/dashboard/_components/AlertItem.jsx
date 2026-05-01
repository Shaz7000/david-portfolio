"use client";
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function AlertItem({ alert, onApply, onDismiss }) {
  const severity = alert.severity || "medium";
  const stripe =
    severity === "high"
      ? "bg-cg-critical"
      : severity === "medium"
      ? "bg-cg-warning"
      : "bg-cg-blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative pl-4 p-5 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md overflow-hidden"
    >
      <span className={`absolute left-0 top-0 bottom-0 w-1 ${stripe}`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <StatusBadge status={severity} />
            <p className="text-white font-semibold">{alert.title}</p>
          </div>
          <p className="text-cg-subtle text-sm mt-2">{alert.body}</p>
          {alert.recommendation && (
            <p className="text-white/80 text-sm mt-2">
              <span className="text-cg-subtle text-xs uppercase tracking-widest mr-2">Recommendation</span>
              {alert.recommendation}
            </p>
          )}
        </div>
      </div>
      {(onApply || onDismiss) && (
        <div className="mt-4 flex gap-2">
          {onApply && (
            <button
              onClick={() => onApply(alert)}
              className="px-4 py-2 rounded-full bg-cg-blue text-white text-xs font-semibold hover:bg-cg-blue/80 transition"
            >
              Apply Fix
            </button>
          )}
          {onDismiss && (
            <button
              onClick={() => onDismiss(alert)}
              className="px-4 py-2 rounded-full border border-white/10 text-cg-subtle text-xs hover:text-white transition"
            >
              Dismiss
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
}
