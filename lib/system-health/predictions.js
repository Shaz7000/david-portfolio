// Forward-looking pattern detection from telemetry trends.
function trendSlope(series) {
  if (!series || series.length < 2) return 0;
  const first = series.slice(0, Math.min(3, series.length)).reduce((a, b) => a + b, 0) / 3;
  const last = series.slice(-3).reduce((a, b) => a + b, 0) / 3;
  return last - first;
}

export function predictRisks(telemetry) {
  const risks = [];
  const memSlope = trendSlope(telemetry.trends?.memory);
  const cpuSlope = trendSlope(telemetry.trends?.cpu);

  if (memSlope > 8) {
    risks.push({
      id: "risk-memleak",
      severity: "high",
      title: "High risk of memory leak in next procedure",
      body: "Memory has trended up steadily over the last 2 hours without recovery.",
      recommendation: "Pre-clean cached series before next scan.",
    });
  }

  const elevatedSvc = (telemetry.services || []).filter((s) => s.status === "elevated");
  for (const svc of elevatedSvc) {
    risks.push({
      id: `risk-svc-${svc.name.toLowerCase().replace(/\s+/g, "-")}`,
      severity: "medium",
      title: `${svc.name} likely to degrade performance`,
      body: `Service is holding ${svc.memoryMb} MB after last procedure.`,
      recommendation: `Close inactive ${svc.name} sessions before next scan.`,
    });
  }

  if (cpuSlope > 10) {
    risks.push({
      id: "risk-cpu",
      severity: "medium",
      title: "CPU pressure rising",
      body: "Sustained CPU climb suggests background work is competing with imaging.",
      recommendation: "Run optimisation to release pending tasks.",
    });
  }

  if (telemetry.metrics?.diskUsagePct >= 85) {
    risks.push({
      id: "risk-disk",
      severity: "low",
      title: "Disk approaching threshold",
      body: "Free space is tight — large series may fail to write.",
      recommendation: "Trigger archive offload.",
    });
  }

  return risks;
}
