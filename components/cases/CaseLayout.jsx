import Link from "next/link";
import Reveal from "@/app/components/ui/Reveal";
import Navbar from "@/app/components/Navbar";
import { getNextCase } from "@/lib/cases";

// Renders a complete case-study page from a single case data object.
// All four cases share this exact structure per spec.
export default function CaseLayout({ data }) {
  if (!data) return null;
  const next = getNextCase(data.slug);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back nav */}
      <div className="px-6 max-w-5xl mx-auto pt-20 md:pt-28">
        <Reveal>
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500 hover:text-white transition"
          >
            All Work
          </Link>
        </Reveal>
      </div>

      {/* Hero */}
      <section className="px-6 max-w-5xl mx-auto mt-6">
        <Reveal>
          <p className={`text-xs uppercase tracking-[0.4em] ${data.layer.text}`}>
            {data.layer.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            {data.title}
          </h1>
        </Reveal>
        {data.subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-3 text-xl text-gray-300">{data.subtitle}</p>
          </Reveal>
        )}
        <Reveal delay={0.15}>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
            {data.tagline}
          </p>
        </Reveal>
        {data.liveDemo && (
          <Reveal delay={0.2}>
            <Link
              href={data.liveDemo.href}
              className={`mt-8 inline-flex px-5 py-2.5 rounded-full border ${data.layer.border} ${data.layer.bg} ${data.layer.text} text-sm hover:scale-[1.03] transition`}
            >
              {data.liveDemo.label}
            </Link>
          </Reveal>
        )}
      </section>

      {/* Overview */}
      <section className="px-6 max-w-5xl mx-auto mt-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Overview</p>
        </Reveal>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {data.overview.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.05}>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{k}</p>
                <p className="mt-2 text-white">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Context */}
      <section className="px-6 max-w-3xl mx-auto mt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Context</p>
        </Reveal>
        {data.context.map((p, i) => (
          <Reveal key={i} delay={0.05 + i * 0.05}>
            <p
              className={
                i === 0
                  ? "mt-4 text-gray-300 text-lg leading-relaxed"
                  : "mt-3 text-gray-400 leading-relaxed"
              }
            >
              {p}
            </p>
          </Reveal>
        ))}
      </section>

      {/* Problem */}
      <section className="px-6 max-w-3xl mx-auto mt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-red-300">Problem</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            {data.problem.heading}
          </h2>
        </Reveal>
        <ul className="mt-6 space-y-3 text-gray-300">
          {data.problem.items.map((b, i) => (
            <Reveal key={b} delay={0.05 + i * 0.04}>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1.5">·</span>
                <span>{b}</span>
              </li>
            </Reveal>
          ))}
        </ul>
        {data.problem.result && (
          <Reveal delay={0.3}>
            <p className="mt-6 text-white">
              Result: <span className="text-gray-400">{data.problem.result}</span>
            </p>
          </Reveal>
        )}
      </section>

      {/* Insight */}
      {data.insight && (
        <section className="px-6 max-w-4xl mx-auto mt-24">
          <Reveal>
            <div
              className={`p-8 rounded-2xl border ${data.layer.border} ${data.layer.bg}`}
            >
              <p
                className={`text-xs uppercase tracking-[0.3em] ${data.layer.text}`}
              >
                Insight
              </p>
              <p className="mt-3 text-xl text-white leading-relaxed">
                {data.insight}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* Solution */}
      {data.solution && (
        <section className="px-6 max-w-3xl mx-auto mt-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Solution
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
              {data.solution}
            </h2>
          </Reveal>
        </section>
      )}

      {/* Stages */}
      {data.stages?.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mt-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              How it works
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {data.stages.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <div className="text-2xl">{s.icon}</div>
                  <p className="mt-3 text-white font-semibold">{s.title}</p>
                  <ul className="mt-3 space-y-1.5 text-gray-300 text-sm">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-gray-500 mt-1">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className="mt-4 text-xs text-gray-500 leading-relaxed">
                      {s.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Product Thinking */}
      {data.productThinking && (
        <section className="px-6 max-w-3xl mx-auto mt-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Product Thinking
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-xl text-white leading-relaxed">
              {data.productThinking.lead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className={`mt-3 text-2xl font-semibold tracking-tight ${data.layer.text}`}
            >
              {data.productThinking.slogan}
            </p>
          </Reveal>
        </section>
      )}

      {/* Impact */}
      {data.impact?.length > 0 && (
        <section className="px-6 max-w-5xl mx-auto mt-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              Impact
            </p>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {data.impact.map(([v, l], i) => (
              <Reveal key={l} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <p className="text-2xl font-semibold tabular-nums">{v}</p>
                  <p className="mt-2 text-gray-400 text-sm">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* System Role */}
      {data.systemRole && (
        <section className="px-6 max-w-3xl mx-auto mt-24">
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                System Role
              </p>
              <p className="mt-3 text-white text-lg">
                <span className={data.layer.text}>{data.layer.action}</span> layer
                in the reliability system.
              </p>
              <p className="mt-2 text-gray-400">{data.systemRole}</p>
            </div>
          </Reveal>
        </section>
      )}

      {/* NDA */}
      <section className="px-6 max-w-3xl mx-auto mt-12">
        <p className="text-xs text-gray-500 leading-relaxed text-center">
          🛡️ This case study is a conceptualized and anonymized representation
          based on real-world problem spaces. No proprietary information is
          disclosed.
        </p>
      </section>

      {/* Exit nav */}
      <section className="px-6 max-w-3xl mx-auto mt-20 mb-32">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cases"
            className="px-5 py-2.5 rounded-full border border-white/15 text-gray-300 text-sm hover:text-white transition"
          >
            All work
          </Link>
          {next && (
            <Link
              href={`/cases/${next.slug}`}
              className={`px-5 py-2.5 rounded-full border ${next.layer.border} ${next.layer.bg} ${next.layer.text} text-sm hover:scale-[1.03] transition`}
            >
              Next · {next.layer.action} · {next.title} →
            </Link>
          )}
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
