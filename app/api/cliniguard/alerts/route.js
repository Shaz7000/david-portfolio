import { getAlerts } from "@/lib/system-health/health-engine";

export async function GET() {
  return Response.json({ alerts: getAlerts() });
}
