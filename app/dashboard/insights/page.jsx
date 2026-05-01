"use client";
import { motion } from "framer-motion";
import { useSystemHealth } from "../../../features/cliniguard/hooks/useSystemHealth";
import StatusBadge from "../_components/StatusBadge";
import { insightsCopy } from "../../../features/cliniguard/data/copy";

export default function InsightsPage() {
  const { alerts, loading } = useSystemHealth();

  return (
    <div className="px-6 lg:px-10 py-8 max-w-5xl mx-auto space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Predictive</p>
        <h1 className="text-2xl font-semibold text-white mt-1">Forward-looking Insights</h1>
      </header>

      <div className="p-6 rounded-2xl border border-cg-blue/30 bg-cg-blue/5">
        <p className="text-xs uppercase tracking-widest text-cg-blue">{insightsCopy.observation.title}</p>
        <p className="text-white text-lg mt-2 leading-relaxed">{insightsCopy.observation.body}</p>
      </div>

      {loading ? (
        <p className="text-cg-subtle">Generating insights…</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {alerts.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="p-5 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <StatusBadge status={a.severity} />
                <span className="text-cg-subtle text-xs">predicted</span>
              </div>
              <p className="text-white font-semibold mt-3">{a.title}</p>
              <p className="text-cg-subtle text-sm mt-2">{a.body}</p>
              <p className="text-white/80 text-sm mt-3">
                <span className="text-cg-subtle text-xs uppercase tracking-widest mr-2">
                  Recommendation
                </span>
                {a.recommendation}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
