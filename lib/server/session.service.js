import { sessionsDB, nextSessionId } from "../db/sessions";

export async function createAssistSession({ deviceId, fieldEngineerId, orgId }) {
  const id = nextSessionId();
  const session = {
    id,
    deviceId,
    fieldEngineerId,
    expertEngineerId: null,
    orgId,
    status: "active",
    createdAt: Date.now(),
  };
  sessionsDB.set(id, session);
  return session;
}

export async function listAssistSessions(orgId) {
  return Array.from(sessionsDB.values()).filter(
    (s) => !orgId || s.orgId === orgId
  );
}

export async function joinAssistSession(id, expertEngineerId) {
  const s = sessionsDB.get(id);
  if (!s) return null;
  s.expertEngineerId = expertEngineerId;
  sessionsDB.set(id, s);
  return s;
}
