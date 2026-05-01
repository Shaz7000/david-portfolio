import { detectDevice } from "@/lib/server/device.service";
import { detectSchema } from "@/lib/validations/device.schema";
import { getSession } from "@/lib/auth";

export async function POST(req) {
  const session = await getSession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const parsed = detectSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues }, { status: 400 });
  }

  const result = await detectDevice(parsed.data.image);
  return Response.json({ result });
}
