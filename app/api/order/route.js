import { listOrders, createOrder } from "@/lib/server/order.service";
import { createOrderSchema } from "@/lib/validations/order.schema";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const orders = await listOrders(session.user.orgId);
  return Response.json({ orders });
}

export async function POST(req) {
  const session = await getSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  if (session.user.role === "admin") {
    return Response.json({ error: "Admins cannot create orders" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const parsed = createOrderSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues }, { status: 400 });
  }

  const order = await createOrder({
    deviceId: parsed.data.deviceId,
    moduleId: parsed.data.moduleId,
    orgId: session.user.orgId,
    userId: session.user.id,
  });
  return Response.json({ order }, { status: 201 });
}
