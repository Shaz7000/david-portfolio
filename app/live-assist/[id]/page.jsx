"use client";
import { use, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useARSession } from "../../../features/holiguide/hooks/useARSession";

export default function LiveAssistRoom({ params }) {
  // Next 14 supports either sync params or unwrapped via `use()`. We accept both.
  const resolved = typeof params?.then === "function" ? use(params) : params;
  const sessionId = resolved.id;
  const search = useSearchParams();
  const role = search.get("role") === "expert" ? "expert_engineer" : "field_engineer";

  const {
    connected,
    annotations,
    messages,
    step,
    presence,
    sendAnnotation,
    sendMessage,
    completeStep,
  } = useARSession(sessionId, role);

  const [draft, setDraft] = useState("");

  function handleStageClick(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    sendAnnotation({ x, y, label: role === "expert_engineer" ? "Look here" : "?" });
  }

  function handleSend(e) {
    e.preventDefault();
    if (!draft.trim()) return;
    sendMessage(draft);
    setDraft("");
  }

  return (
    <main className="min-h-screen px-6 md:px-section py-12 max-w-6xl mx-auto">
      <header className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Session</p>
          <h1 className="text-2xl font-semibold mt-1">{sessionId}</h1>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span
            className={`px-3 py-1 rounded-full border ${
              connected
                ? "border-emerald-400/40 text-emerald-300 bg-emerald-500/10"
                : "border-yellow-400/40 text-yellow-300 bg-yellow-500/10"
            }`}
          >
            {connected ? "● Connected" : "○ Connecting…"}
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 text-muted">
            Role: {role}
          </span>
          <span className="px-3 py-1 rounded-full border border-white/10 text-muted">
            In room: {presence.length}
          </span>
        </div>
      </header>

      <div className="grid lg:grid-cols-[1fr,320px] gap-6 mt-8">
        {/* AR stage */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-muted">
              Step <span className="text-white font-semibold">{step}</span> · click stage to drop annotation
            </p>
            {role === "field_engineer" && (
              <button
                onClick={completeStep}
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold"
              >
                Mark step complete →
              </button>
            )}
          </div>

          <div
            onClick={handleStageClick}
            className="relative aspect-video rounded-2xl border border-white/10 backdrop-blur-lg bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-transparent overflow-hidden"
          >
            {/* Faux device wireframe */}
            <svg viewBox="0 0 400 225" className="absolute inset-0 w-full h-full opacity-30">
              <rect x="80" y="50" width="240" height="120" rx="10" stroke="#7280a8" strokeWidth="1.5" fill="none" />
              <circle cx="200" cy="110" r="32" stroke="#7280a8" strokeWidth="1" fill="none" />
              <line x1="100" y1="180" x2="300" y2="180" stroke="#7280a8" strokeWidth="1" />
            </svg>

            {/* Annotations */}
            {annotations.map((a, i) => (
              <div
                key={i}
                style={{ left: `${a.x}%`, top: `${a.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 animate-ping absolute inset-0 ${
                    a.role === "expert_engineer" ? "border-fuchsia-400" : "border-emerald-400"
                  }`}
                />
                <div
                  className={`relative w-6 h-6 rounded-full border-2 ${
                    a.role === "expert_engineer"
                      ? "border-fuchsia-400 bg-fuchsia-500/30"
                      : "border-emerald-400 bg-emerald-500/30"
                  }`}
                />
                {a.label && (
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] px-2 py-0.5 rounded backdrop-blur-md bg-black/60 border border-white/10 text-white">
                    {a.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Side panel */}
        <aside className="space-y-4">
          <div className="p-4 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Presence</p>
            {presence.length === 0 ? (
              <p className="text-muted text-sm">Waiting for participants…</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {presence.map((p) => (
                  <li key={p.id} className="flex justify-between text-white">
                    <span>{p.role.replace("_", " ")}</span>
                    <span className="text-muted text-xs">{p.id.slice(0, 6)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="p-4 rounded-2xl border border-white/10 backdrop-blur-lg bg-white/[0.03]">
            <p className="text-xs uppercase tracking-widest text-muted mb-2">Messages</p>
            <div className="h-48 overflow-y-auto space-y-2 text-sm pr-1">
              {messages.length === 0 && (
                <p className="text-muted text-xs">No messages yet.</p>
              )}
              {messages.map((m, i) => (
                <div key={i} className="text-white">
                  <span className="text-muted text-xs mr-2">[{m.author}]</span>
                  {m.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="mt-3 flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Send guidance…"
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-white text-black text-sm font-semibold"
              >
                Send
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}
