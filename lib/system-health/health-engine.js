// Health Engine — stateful façade in front of the scoring + prediction layer.
// In a real system this would subscribe to a telemetry stream (Kafka / WebSocket / etc.).
import { sampleTelemetry, sampleProcedures } from "../../features/cliniguard/data/sample";
import { scoreSystem, readinessFromScore } from "./scoring";
import { predictRisks } from "./predictions";

let state = {
  telemetry: structuredClone(sampleTelemetry),
  procedures: structuredClone(sampleProcedures),
  lastAction: null,
};

export function getTelemetry() {
  return state.telemetry;
}

export function getProcedures() {
  return state.procedures;
}

export function getHealth() {
  const score = scoreSystem(state.telemetry.metrics);
  const readiness = readinessFromScore(score.overall);
  return {
    ...score,
    readiness,
    services: state.telemetry.services,
    metrics: state.telemetry.metrics,
    trends: state.telemetry.trends,
    facility: state.telemetry.facility,
    workstation: state.telemetry.workstation,
    collectedAt: state.telemetry.collectedAt,
  };
}

export function getAlerts() {
  const risks = predictRisks(state.telemetry);
  return risks.map((r) => ({ ...r, status: "active" }));
}

// Mutating actions — model what real cleanup would do.
export function runAction(actionId) {
  const m = state.telemetry.metrics;
  const before = scoreSystem(m).overall;

  switch (actionId) {
    case "optimize":
      m.memoryUsagePct = Math.max(45, m.memoryUsagePct - 18);
      m.cpuLoadPct = Math.max(20, m.cpuLoadPct - 8);
      m.serviceLatencyMs = Math.max(60, m.serviceLatencyMs - 60);
      // Series Viewer drops back to ok
      state.telemetry.services = state.telemetry.services.map((s) =>
        s.name === "Series Viewer" ? { ...s, status: "ok", memoryMb: 320 } : s
      );
      break;
    case "clear-cache":
      m.memoryUsagePct = Math.max(50, m.memoryUsagePct - 10);
      m.diskUsagePct = Math.max(60, m.diskUsagePct - 6);
      break;
    case "restart-services":
      state.telemetry.services = state.telemetry.services.map((s) =>
        s.status === "elevated" ? { ...s, status: "ok", memoryMb: Math.floor(s.memoryMb * 0.2) } : s
      );
      m.memoryUsagePct = Math.max(50, m.memoryUsagePct - 14);
      m.serviceLatencyMs = Math.max(60, m.serviceLatencyMs - 40);
      break;
    case "deep-scan":
      m.memoryUsagePct = Math.max(40, m.memoryUsagePct - 22);
      m.cpuLoadPct = Math.max(20, m.cpuLoadPct - 10);
      m.diskUsagePct = Math.max(55, m.diskUsagePct - 12);
      m.serviceLatencyMs = Math.max(50, m.serviceLatencyMs - 70);
      state.telemetry.services = state.telemetry.services.map((s) => ({
        ...s,
        status: "ok",
        memoryMb: Math.min(s.memoryMb, 320),
      }));
      break;
    default:
      throw new Error(`Unknown action: ${actionId}`);
  }

  state.telemetry.collectedAt = new Date().toISOString();
  const after = scoreSystem(m).overall;
  state.lastAction = { actionId, before, after, ranAt: Date.now() };
  return state.lastAction;
}

// For demo: reset to baseline so other viewers see a fresh dashboard.
export function resetTelemetry() {
  state.telemetry = structuredClone(sampleTelemetry);
  state.lastAction = null;
  return getHealth();
}
