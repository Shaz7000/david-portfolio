import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || "holiguide-dev-secret-change-me"
);
const SESSION_COOKIE = "holiguide_session";

const PUBLIC_PATHS = [
  "/",
  "/holiguide",
  "/hologuide",
  "/cliniguard",
  "/systems",
  "/about",
  "/connect",
  "/login",
  "/unauthorized",
];

const PUBLIC_PREFIXES = ["/dashboard", "/cases", "/api/cliniguard"];

function isPublic(path) {
  if (PUBLIC_PATHS.includes(path)) return true;
  if (PUBLIC_PREFIXES.some((p) => path === p || path.startsWith(p + "/"))) return true;
  // Allow Next internals + auth API + static assets
  if (path.startsWith("/_next")) return true;
  if (path.startsWith("/api/auth")) return true;
  if (path.startsWith("/favicon")) return true;
  return false;
}

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  if (isPublic(path)) return NextResponse.next();

  const token = req.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    if (path.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const url = new URL("/login", req.url);
    url.searchParams.set("from", path);
    return NextResponse.redirect(url);
  }

  let payload;
  try {
    ({ payload } = await jwtVerify(token, SECRET));
  } catch {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  const role = payload.role;

  if (path.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (path.startsWith("/expert") && role !== "expert_engineer") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
