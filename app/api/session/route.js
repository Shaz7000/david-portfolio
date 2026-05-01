import {
  createAssistSession,
  listAssistSessions,
  joinAssistSession,
} from "@/lib/server/session.service";
import { createSessionSchema } from "@/lib/validations/auth.schema";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const sessions = await listAssistSessions(session.user.orgId);
  return Response.json({ sessions });
}

export async function POST(req) {
  const session = await getSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  // Field engineer creates, expert joins.
  const body = await req.json().catch(() => ({}));

  if (body.action === "join") {
    if (session.user.role !== "expert_engineer") {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }
    const joined = await joinAssistSession(body.sessionId, session.user.id);
    if (!joined) return Response.json({ error: "Not found" }, { status: 404 });
    return Response.json({ session: joined });
  }

  if (session.user.role !== "field_engineer") {
    return Response.json({ error: "Only field engineers can start sessions" }, { status: 403 });
  }

  const parsed = createSessionSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues }, { status: 400 });
  }

  const created = await createAssistSession({
    deviceId: parsed.data.deviceId,
    fieldEngineerId: session.user.id,
    orgId: session.user.orgId,
  });
  return Response.json({ session: created }, { status: 201 });
}
