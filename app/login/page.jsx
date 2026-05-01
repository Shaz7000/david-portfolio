"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const demoAccounts = [
  { email: "alex@stmary.health", role: "Field Engineer" },
  { email: "sam@hq.health", role: "Expert Engineer" },
  { email: "morgan@stmary.health", role: "Admin" },
];

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const from = params.get("from") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("demo");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error?.[0]?.message || data.error || "Login failed");
      return;
    }
    router.push(from);
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/[0.03]">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">HoloGuide</p>
        <h1 className="mt-2 text-3xl font-semibold">Sign in</h1>
        <p className="text-muted text-sm mt-1">Use any demo account below.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs text-muted block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="text-xs text-muted block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-accent"
            />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-white text-black font-semibold disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Demo accounts (pw: demo)</p>
          <ul className="space-y-2">
            {demoAccounts.map((a) => (
              <li key={a.email}>
                <button
                  onClick={() => setEmail(a.email)}
                  className="w-full text-left px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm flex justify-between"
                >
                  <span className="text-white">{a.email}</span>
                  <span className="text-muted text-xs">{a.role}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
