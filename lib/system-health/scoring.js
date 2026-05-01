// Pure scoring — given metrics, compute a 0–100 health score and per-axis sub-scores.
// Lower utilisation = higher score; latency penalised above 200 ms.

function clamp(n, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n));
}

// Calm-clinical scoring: healthy stays healthy until pressure clearly builds.
function scorePenalty(pct, threshold, slope) {
  return clamp(100 - Math.max(0, (pct - threshold) * slope));
}

function scoreLatency(ms) {
  return clamp(100 - Math.max(0, (ms - 100) / 4));
}

export function scoreSystem(metrics) {
  const memory = Math.round(scorePenalty(metrics.memoryUsagePct, 60, 1.4));
  const cpu = Math.round(scorePenalty(metrics.cpuLoadPct, 50, 1.0));
  const disk = Math.round(scorePenalty(metrics.diskUsagePct, 75, 1.7));
  const services = Math.round(scoreLatency(metrics.serviceLatencyMs));

  const overall = Math.round(
    memory * 0.3 + cpu * 0.2 + disk * 0.25 + services * 0.25
  );

  return {
    overall,
    breakdown: { memory, cpu, disk, services },
    status:
      overall >= 80 ? "healthy" : overall >= 50 ? "warning" : "critical",
  };
}

export function readinessFromScore(overall) {
  if (overall >= 80) return { value: "HIGH", note: "System is stable for clinical use." };
  if (overall >= 60) return { value: "MEDIUM", note: "Recommend cleanup before next procedure." };
  return { value: "LOW", note: "Hold procedure until system stabilises." };
}
