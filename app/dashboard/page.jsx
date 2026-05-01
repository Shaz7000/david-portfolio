"use client";
import { useSystemHealth } from "../../features/cliniguard/hooks/useSystemHealth";
import HealthScoreCard from "./_components/HealthScoreCard";
import MetricsGrid from "./_components/MetricsGrid";
import AlertsPanel from "./_components/AlertsPanel";
import ActionPanel from "./_components/ActionPanel";
import { overview } from "../../features/cliniguard/data/copy";

export default function DashboardOverview() {
  const { health, alerts, loading, runAction } = useSystemHealth();

  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-8">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">
            {health?.facility || "—"}
          </p>
          <h1 className="text-2xl font-semibold text-white mt-1">System Overview</h1>
          <p className="text-cg-subtle text-sm mt-1">
            {health?.workstation
              ? `Workstation ${health.workstation} · live telemetry`
              : "Loading telemetry…"}
          </p>
        </div>
        <p className="text-cg-subtle text-xs" suppressHydrationWarning>
          Last collected{" "}
          {health?.collectedAt ? new Date(health.collectedAt).toLocaleTimeString() : "—"}
        </p>
      </header>

      {loading && !health ? (
        <div className="h-72 rounded-3xl bg-cg-surface/40 animate-pulse" />
      ) : (
        <HealthScoreCard health={health} />
      )}

      <section>
        <SectionHeader
          eyebrow="System Insight"
          title={overview.alertStrip.title}
        />
        <div className="mt-3">
          <AlertsPanel alerts={alerts} max={3} />
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Quick Insights" title="Key system metrics" />
        <div className="mt-4">
          <MetricsGrid health={health} />
        </div>
      </section>

      <section>
        <ActionPanel onRun={runAction} />
      </section>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">{eyebrow}</p>
      <h2 className="text-lg font-semibold text-white mt-1">{title}</h2>
    </div>
  );
}
