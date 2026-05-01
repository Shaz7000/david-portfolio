// Mock devices DB — shape mirrors what a real catalogue would store.
export const devicesDB = [
  {
    id: "AZ-123",
    name: "Imaging System",
    status: "active",
    orgId: "org-stmary",
    modules: ["X-ray Generator", "C-arm", "Detector XR-2034"],
  },
  {
    id: "AZ-204",
    name: "EPIQ Ultrasound",
    status: "active",
    orgId: "org-stmary",
    modules: ["Probe L12-3", "Console Unit"],
  },
  {
    id: "AZ-311",
    name: "IntelliVue MX800",
    status: "maintenance",
    orgId: "org-meridian",
    modules: ["Display Module", "ECG Cable"],
  },
];
