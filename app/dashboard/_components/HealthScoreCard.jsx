"use client";
import { motion } from "framer-motion";
import ProgressRing from "./ProgressRing";
import StatusBadge from "./StatusBadge";

export default function HealthScoreCard({ health }) {
  if (!health) return null;
  const { overall, status, breakdown, readiness } = health;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 lg:p-8 rounded-3xl border border-white/5 bg-cg-surface/70 backdrop-blur-md"
      style={{ boxShadow: "0px 8px 24px rgba(0,0,0,0.35)" }}
    >
      <div className="grid md:grid-cols-[260px,1fr] gap-8 items-center">
        <div className="flex flex-col items-center">
          <ProgressRing value={overall} status={status} suffix="" label="System Health" />
        </div>

        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">System Health Score</p>
            <StatusBadge status={status} />
          </div>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            {overall} / 100 — {status[0].toUpperCase() + status.slice(1)}
          </h2>

          <ul className="mt-5 space-y-2 text-sm">
            <Check ok={breakdown.memory >= 70} label="Memory stable" />
            <Check ok={breakdown.services >= 70} label="Services responsive" />
            <Check ok={breakdown.disk >= 80} label="Disk healthy" warnLabel="Minor cleanup recommended" />
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-black/20 border border-white/5">
            <p className="text-xs uppercase tracking-widest text-cg-subtle">
              Next Procedure Readiness
            </p>
            <p className="mt-1 text-white font-semibold">
              {readiness.value}{" "}
              <span className="text-cg-subtle font-normal text-sm">— {readiness.note}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Check({ ok, label, warnLabel }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className={`text-base ${ok ? "text-cg-healthy" : "text-cg-warning"}`}
        aria-hidden
      >
        {ok ? "✓" : "⚠"}
      </span>
      <span className={ok ? "text-white" : "text-cg-warning"}>
        {ok ? label : warnLabel || label}
      </span>
    </li>
  );
}
