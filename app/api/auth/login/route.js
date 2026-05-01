import { cookies } from "next/headers";
import { authenticate, signSession, SESSION_COOKIE } from "@/lib/server/auth.service";
import { loginSchema } from "@/lib/validations/auth.schema";

export async function POST(req) {
  const body = await req.json().catch(() => ({}));
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.issues }, { status: 400 });
  }

  const user = await authenticate(parsed.data.email, parsed.data.password);
  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await signSession(user);
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return Response.json({ user });
}
