import { getDeviceById, listDevices } from "@/lib/server/device.service";
import { deviceQuerySchema } from "@/lib/validations/device.schema";
import { getSession } from "@/lib/auth";

export async function GET(req) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const parsed = deviceQuerySchema.safeParse({ id });
    if (!parsed.success) {
      return Response.json({ error: parsed.error.issues }, { status: 400 });
    }
    const device = await getDeviceById(parsed.data.id);
    if (!device) {
      return Response.json({ error: "Not found" }, { status: 404 });
    }
    if (device.orgId !== session.user.orgId) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }
    return Response.json({ device });
  }

  const devices = await listDevices(session.user.orgId);
  return Response.json({ devices });
}
