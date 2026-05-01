// CliniGuard product copy — single source of truth.
export const product = {
  name: "CliniGuard",
  tagline: "Proactive system intelligence for clinical reliability.",
};

export const overview = {
  hero: {
    title: "System Health Score",
    suffix: "/ 100",
    nextProcedure: {
      label: "Next Procedure Readiness",
      value: "HIGH",
      note: "System is stable for clinical use.",
    },
    checks: [
      { label: "Memory stable", state: "ok" },
      { label: "Services responsive", state: "ok" },
      { label: "Minor cleanup recommended", state: "warn" },
    ],
  },
  alertStrip: {
    title: "System Insight",
    body: "Series Viewer is consuming elevated memory after last procedure.",
    recommendation: "Close inactive sessions before next scan.",
  },
};

export const insightsCopy = {
  observation: {
    title: "Key Observation",
    body: "System performance degradation correlates with high-intensity imaging procedures performed in sequence.",
  },
};

export const alertCenter = {
  header: "Active System Alerts",
  subhead: "3 insights require attention",
};

export const actionCenter = {
  header: "Recommended Actions",
  steps: [
    "Scanning system state…",
    "Analyzing memory usage…",
    "Releasing unused resources…",
    "Verifying system stability…",
  ],
  resultTitle: "Optimization Complete",
  resultBody: "System restored to optimal clinical readiness.",
};
