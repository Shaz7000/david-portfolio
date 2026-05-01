"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LiveAssistIndex() {
  const router = useRouter();
  const [me, setMe] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [deviceId, setDeviceId] = useState("AZ-123");
  const [creating, setCreating] = useState(false);

  async function refresh() {
    const [meRes, sRes] = await Promise.all([
      fetch("/api/auth/me").then((r) => r.json()),
      fetch("/api/session").then((r) => r.json()),
    ]);
    setMe(meRes.session);
    setSessions(sRes.sessions || []);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function createSession() {
    setCreating(true);
    const res = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deviceId }),
    });
    setCreating(false);
    if (!res.ok) {
      const data = await res.json();
      alert(data.error?.[0]?.message || data.error || "Failed");
      return;
    }
    const data = await res.json();
    router.push(`/live-assist/${data.session.id}?role=field`);
  }

  if (!me) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <p className="text-muted">Sign in to start a live AR session.</p>
          <Link
            href="/login?from=/live-assist"
            className="inline-block mt-4 px-6 py-3 rounded-full bg-white text-black font-semibold"
          >
            Sign in
          </Link>
          <p className="mt-6 text-muted text-xs">
            <Link href="/cases/hologuide" className="hover:text-white transition">
              ← Back to HoloGuide case study
            </Link>
            {" · "}
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
          </p>
        </div>
      </main>
    );
  }

  const isField = me.user.role === "field_engineer";
  const isExpert = me.user.role === "expert_engineer";

  return (
    <main className="min-h-screen px-6 md:px-section py-20 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 text-xs text-muted mb-8">
        <Link href="/cases/hologuide" className="hover:text-white transition">HoloGuide</Link>
        <span className="text-white/20">/</span>
        <span className="text-white">Live Assist</span>
        <span className="ml-auto">
          <Link href="/" className="hover:text-white transition">Home</Link>
        </span>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Live assist</p>
      <h1 className="text-4xl font-semibold mt-2">Real-time AR collaboration</h1>
      <p className="text-muted mt-2">
        Signed in as <span className="text-white">{me.user.name}</span> ({me.user.role})
      </p>

      {isField && (
        <section className="mt-10 p-6 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]">
          <h2 className="text-xl font-semibold">Start a new session</h2>
          <p className="text-muted text-sm mt-1">
            Pick a device — an expert can join from /expert.
          </p>
          <div className="mt-4 flex gap-3">
            <select
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              <option value="AZ-123">AZ-123 · Imaging System</option>
              <option value="AZ-204">AZ-204 · EPIQ Ultrasound</option>
            </select>
            <button
              disabled={creating}
              onClick={createSession}
              className="px-6 py-3 rounded-full bg-white text-black font-semibold disabled:opacity-50"
            >
              {creating ? "Starting…" : "Start session"}
            </button>
          </div>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Active sessions</h2>
        {sessions.length === 0 ? (
          <p className="text-muted text-sm">— None yet —</p>
        ) : (
          <div className="space-y-3">
            {sessions.map((s) => (
              <Link
                key={s.id}
                href={`/live-assist/${s.id}?role=${isExpert ? "expert" : "field"}`}
                className="block p-5 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03] hover:bg-white/[0.06] transition"
              >
                <p className="text-xs uppercase tracking-widest text-muted">{s.id}</p>
                <p className="text-white mt-1">Device {s.deviceId}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Exit navigation */}
      <section className="mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted mb-4">Continue exploring</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cases/hologuide"
            className="px-5 py-2.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm hover:scale-[1.03] transition"
          >
            HoloGuide case study →
          </Link>
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
          >
            All work
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
