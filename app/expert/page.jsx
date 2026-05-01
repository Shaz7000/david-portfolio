import Link from "next/link";
import { getSession } from "@/lib/auth";
import { listAssistSessions } from "@/lib/server/session.service";

export default async function ExpertPage() {
  const session = await getSession();
  const sessions = await listAssistSessions(session.user.orgId);

  return (
    <main className="min-h-screen px-6 md:px-section py-20 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Expert console</p>
      <h1 className="text-4xl font-semibold mt-2">Live assistance queue</h1>
      <p className="text-muted mt-2">
        Signed in as <span className="text-white">{session.user.name}</span>
      </p>

      <div className="mt-10 space-y-3">
        {sessions.length === 0 && (
          <p className="text-muted text-sm">
            No active sessions. A field engineer must start one from{" "}
            <Link href="/live-assist" className="text-accent underline">
              /live-assist
            </Link>
            .
          </p>
        )}
        {sessions.map((s) => (
          <Link
            key={s.id}
            href={`/live-assist/${s.id}?role=expert`}
            className="block p-5 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03] hover:bg-white/[0.06] transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">{s.id}</p>
                <p className="text-white font-semibold mt-1">Device {s.deviceId}</p>
                <p className="text-muted text-sm mt-1">
                  Field: {s.fieldEngineerId} · Expert: {s.expertEngineerId ?? "unassigned"}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  s.status === "active"
                    ? "border-emerald-400/40 text-emerald-300 bg-emerald-500/10"
                    : "border-white/10 text-muted"
                }`}
              >
                {s.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
