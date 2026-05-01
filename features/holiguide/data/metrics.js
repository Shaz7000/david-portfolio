// KPI definitions for the Impact section.
// Edit values here — UI re-renders without touching components.

export const metrics = [
  { id: "defect", value: 30, suffix: "%", label: "Defect Leakage", direction: "down" },
  { id: "mttr", value: 42, suffix: "%", label: "MTTR", direction: "down" },
  { id: "ftf", value: 27, suffix: "%", label: "First-time Fix", direction: "up" },
  { id: "repeat", value: 35, suffix: "%", label: "Repeat Visits", direction: "down" },
];
