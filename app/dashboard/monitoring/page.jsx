"use client";
import { useSystemHealth } from "../../../features/cliniguard/hooks/useSystemHealth";
import Sparkline from "../_components/Sparkline";
import StatusBadge from "../_components/StatusBadge";

export default function MonitoringPage() {
  const { health, loading } = useSystemHealth({ pollMs: 5000 });

  if (loading && !health) {
    return <div className="px-6 py-10 text-cg-subtle">Loading live telemetry…</div>;
  }

  const charts = [
    { key: "memory", title: "Memory Usage", colour: "#2563EB", suffix: "%" },
    { key: "cpu", title: "CPU Load", colour: "#22C55E", suffix: "%" },
    { key: "disk", title: "Disk Usage", colour: "#F59E0B", suffix: "%" },
  ];

  return (
    <div className="px-6 lg:px-10 py-8 max-w-7xl mx-auto space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-cg-subtle">Live Monitoring</p>
        <h1 className="text-2xl font-semibold text-white mt-1">System Trends</h1>
        <p className="text-cg-subtle text-sm mt-1">Last 2 hours · 5-minute samples · auto-refresh</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-5">
        {charts.map((c) => {
          const data = health?.trends?.[c.key] || [];
          const last = data[data.length - 1];
          return (
            <div
              key={c.key}
              className="p-5 rounded-2xl border border-white/5 bg-cg-surface/60 backdrop-blur-md"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-xs uppercase tracking-widest text-cg-subtle">{c.title}</p>
                <p className="text-2xl font-semibold text-white tabular-nums">
                  {last}
                  <span className="text-cg-subtle text-sm ml-0.5">{c.suffix}</span>
                </p>
              </div>
              <div className="mt-4">
                <Sparkline data={data} colour={c.colour} height={140} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-5 rounded-2xl border border-white/5 bg-cg-surface/60">
        <p className="text-xs uppercase tracking-widest text-cg-subtle">Service Status</p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {(health?.services || []).map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5"
            >
              <div>
                <p className="text-white text-sm font-medium">{s.name}</p>
                <p className="text-cg-subtle text-xs">{s.memoryMb} MB</p>
              </div>
              <StatusBadge status={s.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
