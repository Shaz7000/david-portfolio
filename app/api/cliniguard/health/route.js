import { getHealth } from "@/lib/system-health/health-engine";

export async function GET() {
  return Response.json({ health: getHealth() });
}
