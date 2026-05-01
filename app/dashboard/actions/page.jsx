"use client";
import { useSystemHealth } from "../../../features/cliniguard/hooks/useSystemHealth";
import ActionPanel from "../_components/ActionPanel";

export default function ActionsPage() {
  const { runAction, health } = useSystemHealth();

  return (
    <div className="px-6 lg:px-10 py-8 max-w-4xl mx-auto space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Action Center</p>
        <h1 className="text-2xl font-semibold text-white mt-1">Recommended actions</h1>
        <p className="text-cg-subtle text-sm mt-1">
          One-tap fixes that improve clinical readiness.
        </p>
      </header>

      {health && (
        <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-sm flex justify-between">
          <span className="text-cg-subtle">Current Health Score</span>
          <span className="text-white tabular-nums">{health.overall} / 100</span>
        </div>
      )}

      <ActionPanel onRun={runAction} />
    </div>
  );
}
