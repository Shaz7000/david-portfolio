import { ordersDB, nextOrderId } from "../db/orders";

export async function listOrders(orgId) {
  return ordersDB.filter((o) => !orgId || o.orgId === orgId);
}

export async function createOrder({ deviceId, moduleId, orgId, userId }) {
  const order = {
    id: nextOrderId(),
    deviceId,
    moduleId,
    status: "processing",
    eta: "24h",
    orgId,
    createdBy: userId,
  };
  ordersDB.push(order);
  return order;
}
