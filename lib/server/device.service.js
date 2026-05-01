import { devicesDB } from "../db/devices";

export async function getDeviceById(id) {
  return devicesDB.find((d) => d.id === id) ?? null;
}

export async function listDevices(orgId) {
  return devicesDB.filter((d) => !orgId || d.orgId === orgId);
}

// Mocked AR recognition — in reality would hit a vision model.
export async function detectDevice(_image) {
  return {
    id: "AZ-123",
    name: "X-Ray Imaging System",
    confidence: 0.94,
    suggestedModule: "XR-2034",
  };
}
