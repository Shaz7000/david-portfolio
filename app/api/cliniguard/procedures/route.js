import { getProcedures } from "@/lib/system-health/health-engine";

export async function GET() {
  return Response.json({ procedures: getProcedures() });
}
