"use client";
import { useSystemHealth } from "../../../features/cliniguard/hooks/useSystemHealth";
import AlertsPanel from "../_components/AlertsPanel";
import { alertCenter } from "../../../features/cliniguard/data/copy";

export default function AlertsPage() {
  const { alerts, loading, runAction, refresh } = useSystemHealth();

  async function handleApply(alert) {
    // Heuristic: map alert type to an action
    const actionId =
      alert.id.includes("svc") || alert.id.includes("memleak")
        ? "restart-services"
        : alert.id.includes("disk")
        ? "clear-cache"
        : "optimize";
    await runAction(actionId);
  }

  return (
    <div className="px-6 lg:px-10 py-8 max-w-4xl mx-auto space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Alert Center</p>
          <h1 className="text-2xl font-semibold text-white mt-1">{alertCenter.header}</h1>
          <p className="text-cg-subtle text-sm mt-1">
            {alerts.length} {alerts.length === 1 ? "insight requires" : "insights require"} attention
          </p>
        </div>
        <button
          onClick={refresh}
          className="text-cg-subtle text-xs hover:text-white transition"
        >
          Refresh
        </button>
      </header>

      {loading && alerts.length === 0 ? (
        <p className="text-cg-subtle">Loading…</p>
      ) : (
        <AlertsPanel alerts={alerts} onApply={handleApply} />
      )}
    </div>
  );
}
