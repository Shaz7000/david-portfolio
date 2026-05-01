export const ordersDB = [
  {
    id: "ORD-1",
    deviceId: "AZ-123",
    moduleId: "XR-2034",
    status: "processing",
    eta: "24h",
    orgId: "org-stmary",
    createdBy: "u-field-1",
  },
];

export function nextOrderId() {
  return `ORD-${ordersDB.length + 1}`;
}
