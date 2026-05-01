import { SignJWT, jwtVerify } from "jose";
import { findUserByEmail } from "../db/users";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "holiguide-dev-secret-change-me"
);
const ALG = "HS256";

export async function authenticate(email, password) {
  const user = findUserByEmail(email);
  if (!user || user.password !== password) return null;
  // Strip password before returning
  const { password: _pw, ...safe } = user;
  return safe;
}

export async function signSession(user) {
  return await new SignJWT({
    sub: user.id,
    name: user.name,
    role: user.role,
    orgId: user.orgId,
  })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(SECRET);
}

export async function verifySession(token) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return {
      user: {
        id: payload.sub,
        name: payload.name,
        role: payload.role,
        orgId: payload.orgId,
      },
    };
  } catch {
    return null;
  }
}

export const SESSION_COOKIE = "holiguide_session";
