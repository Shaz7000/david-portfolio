"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProceduresPage() {
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    fetch("/api/cliniguard/procedures")
      .then((r) => r.json())
      .then((d) => setProcedures(d.procedures || []));
  }, []);

  return (
    <div className="px-6 lg:px-10 py-8 max-w-4xl mx-auto space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Workflow</p>
        <h1 className="text-2xl font-semibold text-white mt-1">Procedure Timeline</h1>
        <p className="text-cg-subtle text-sm mt-1">
          Each procedure’s impact on system health.
        </p>
      </header>

      <ol className="relative border-l border-white/10 ml-3 space-y-8 pl-8">
        {procedures.map((p, i) => (
          <motion.li
            key={p.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-cg-blue ring-4 ring-cg-bg" />
            <div className="p-5 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-white font-semibold">{p.name}</p>
                  <p className="text-cg-subtle text-xs mt-1" suppressHydrationWarning>
                    {new Date(p.startedAt).toLocaleString()} —{" "}
                    {new Date(p.endedAt).toLocaleTimeString()}
                  </p>
                </div>
                <span className="text-xs text-cg-subtle tabular-nums">
                  drift{" "}
                  <span
                    className={
                      p.drift > 10 ? "text-cg-warning" : "text-cg-healthy"
                    }
                  >
                    {p.drift > 0 ? `+${p.drift}` : p.drift}
                  </span>
                </span>
              </div>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                  <p className="text-cg-subtle text-xs uppercase tracking-widest">Impact</p>
                  <p className="text-white mt-1">{p.impact}</p>
                </div>
                <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                  <p className="text-cg-subtle text-xs uppercase tracking-widest">Cleanup</p>
                  <p className="text-white mt-1">{p.cleanup}</p>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
