import { z } from "zod";
import { runAction, resetTelemetry } from "@/lib/system-health/health-engine";

const schema = z.object({
  actionId: z.enum(["optimize", "clear-cache", "restart-services", "deep-scan", "reset"]),
});

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues }, { status: 400 });
  }

  if (parsed.data.actionId === "reset") {
    return Response.json({ result: { reset: true, health: resetTelemetry() } });
  }

  const result = runAction(parsed.data.actionId);
  return Response.json({ result });
}
