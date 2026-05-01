// Sample telemetry — represents what a real probe would emit.
export const sampleTelemetry = {
  facility: "St Mary's Imaging — Suite 3",
  workstation: "WS-AZ-12",
  collectedAt: "2026-04-30T08:14:00Z",
  metrics: {
    memoryUsagePct: 72,
    cpuLoadPct: 41,
    diskUsagePct: 88,
    serviceLatencyMs: 142,
  },
  services: [
    { name: "Series Viewer", status: "elevated", memoryMb: 1820 },
    { name: "DICOM Router", status: "ok", memoryMb: 240 },
    { name: "Worklist Sync", status: "ok", memoryMb: 96 },
    { name: "Telemetry Agent", status: "ok", memoryMb: 32 },
  ],
  // 24 samples — last 2 hours, 5-minute interval
  trends: {
    memory: [62, 64, 63, 66, 68, 67, 69, 70, 72, 74, 73, 75, 72, 70, 71, 69, 70, 72, 73, 75, 74, 76, 74, 72],
    cpu:    [22, 28, 35, 42, 38, 33, 40, 55, 60, 47, 41, 38, 36, 42, 50, 58, 49, 44, 41, 40, 39, 42, 41, 41],
    disk:   [85, 85, 86, 86, 86, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88],
  },
};

export const sampleProcedures = [
  {
    id: "proc-103",
    name: "CT Thorax — high resolution",
    startedAt: "2026-04-30T07:10:00Z",
    endedAt: "2026-04-30T07:48:00Z",
    impact: "Memory rose from 58% → 74%",
    cleanup: "Auto-clean of cached series saved 1.2 GB",
    drift: 12,
  },
  {
    id: "proc-102",
    name: "Angio fluoroscopy",
    startedAt: "2026-04-30T05:30:00Z",
    endedAt: "2026-04-30T06:25:00Z",
    impact: "CPU peaked at 78%",
    cleanup: "Restarted Series Viewer post-procedure",
    drift: 7,
  },
  {
    id: "proc-101",
    name: "Cardiac MRI",
    startedAt: "2026-04-29T16:00:00Z",
    endedAt: "2026-04-29T17:15:00Z",
    impact: "Disk grew by 4.6 GB",
    cleanup: "Archive offload scheduled overnight",
    drift: 15,
  },
];
