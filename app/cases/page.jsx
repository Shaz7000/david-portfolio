import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Reveal from "@/app/components/ui/Reveal";
import { CASES, getCaseSummary } from "@/lib/cases";

export const metadata = {
  title: "Work — David Mathew Thomas",
  description:
    "Four MVP product systems born from hospital floor observations. Predict · Prevent · Assist · Recover. Real gaps, real teams, real outcomes.",
};

export default function CasesIndex() {
  const summaries = CASES.map((c) => getCaseSummary(c.slug));

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 max-w-6xl mx-auto pt-20 md:pt-28">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Four systems. One loop.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
            Each case study started from a real problem observed during
            customer site visits &mdash; understanding how clinicians and
            engineers work, what slows them down, and where reliability
            breaks. Then shaped and built as an MVP with a cross-functional team.
          </p>
        </Reveal>
      </section>

      <section className="px-6 max-w-6xl mx-auto mt-16 mb-32">
        <div className="grid md:grid-cols-2 gap-5">
          {summaries.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                href={`/cases/${s.slug}`}
                className={`group block h-full p-7 rounded-2xl border ${s.layer.border} bg-white/[0.02] card-depth hover:bg-white/[0.04] hover:scale-[1.01] transition`}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-xs uppercase tracking-[0.3em] ${s.layer.text}`}
                  >
                    {s.layer.action} · {s.layer.system}
                  </p>
                  <span
                    className={`w-2 h-2 rounded-full ${s.layer.dot}`}
                    style={{ boxShadow: `0 0 12px ${s.layer.hex}` }}
                  />
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                  {s.title}
                </h2>

                {/* Impact — promoted to second visual element */}
                <div className="mt-5 flex items-baseline gap-3">
                  <span
                    className={`text-3xl font-semibold tabular-nums ${s.layer.text}`}
                  >
                    {s.impactValue}
                  </span>
                  <span className="text-sm text-gray-400">{s.impact}</span>
                </div>

                {/* Problem — demoted excerpt, max 2 lines */}
                <p className="mt-5 text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {s.problem}
                </p>

                {/* Footer row: role + CTA */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between gap-4">
                  <p className="text-xs text-gray-500 max-w-[60%] truncate">
                    {s.role}
                  </p>
                  <p
                    className={`text-sm ${s.layer.text} opacity-70 group-hover:opacity-100 transition whitespace-nowrap`}
                  >
                    Read case →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
