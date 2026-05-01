import MetricTile from "./MetricTile";

export default function MetricsGrid({ health }) {
  if (!health) return null;
  const { metrics } = health;
  // Trends would come from /api/cliniguard/health later — using placeholder shapes for the sparkline demo.
  const trends = health.trends || {
    memory: [],
    cpu: [],
    disk: [],
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricTile
        label="Memory Usage"
        value={metrics.memoryUsagePct}
        note={metrics.memoryUsagePct < 80 ? "Within safe range" : "Approaching ceiling"}
        trend={trends.memory}
        tone="blue"
      />
      <MetricTile
        label="CPU Load"
        value={metrics.cpuLoadPct}
        note={metrics.cpuLoadPct < 60 ? "Stable" : "Elevated"}
        trend={trends.cpu}
        tone={metrics.cpuLoadPct < 60 ? "healthy" : "warning"}
      />
      <MetricTile
        label="Disk Usage"
        value={metrics.diskUsagePct}
        note={metrics.diskUsagePct < 85 ? "Healthy" : "Minor optimization"}
        trend={trends.disk}
        tone={metrics.diskUsagePct < 85 ? "healthy" : "warning"}
      />
      <MetricTile
        label="Service Latency"
        value={metrics.serviceLatencyMs}
        suffix="ms"
        note={metrics.serviceLatencyMs < 200 ? "Responsive" : "Investigate"}
        trend={[]}
        tone={metrics.serviceLatencyMs < 200 ? "healthy" : "warning"}
      />
    </div>
  );
}
