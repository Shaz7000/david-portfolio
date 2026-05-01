// Server-side session helper for Route Handlers and Server Components.
import { cookies } from "next/headers";
import { verifySession, SESSION_COOKIE } from "./server/auth.service";

export async function getSession() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return await verifySession(token);
}

export function unauthorized() {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}

export function forbidden() {
  return Response.json({ error: "Forbidden" }, { status: 403 });
}

export async function requireRole(roles) {
  const session = await getSession();
  if (!session) return { error: unauthorized() };
  const allowed = Array.isArray(roles) ? roles : [roles];
  if (!allowed.includes(session.user.role)) {
    return { error: forbidden() };
  }
  return { session };
}
