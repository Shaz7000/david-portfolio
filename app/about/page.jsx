import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Reveal from "@/app/components/ui/Reveal";

export const metadata = {
  title: "About — David Mathew Thomas",
  description:
    "Software engineer at Philips Healthcare who identified reliability gaps during hospital site visits, built MVP product concepts with cross-functional teams, and is ready to own the product.",
};

const WHAT_I_BRING = [
  "Identified reliability gaps first-hand during customer site visits and on-site observations at hospital environments",
  "Collected structured feedback from field engineers, technicians, and clinicians to surface systemic pain points",
  "Led cross-functional teams of 4\u20136 to shape, scope, and build MVP product concepts from raw observations",
  "Worked on validation systems in my line of work, cutting defect leakage by 20\u201330% across healthcare imaging product lines",
  "Drove AR-based serviceability initiatives that bridged R&D and field operations",
];

const PRODUCT_THINKING = [
  {
    label: "Systems, not screens",
    desc: "I design feedback loops where each layer strengthens the ones around it \u2014 not isolated features in a backlog.",
  },
  {
    label: "Field-observed problems",
    desc: "Every concept started on the hospital floor \u2014 watching procedures, talking to engineers, seeing what actually breaks.",
  },
  {
    label: "Scoped tradeoffs",
    desc: "I document what I chose not to build and why. Every MVP had constraints I defended, not compromised on.",
  },
  {
    label: "Measurable outcomes",
    desc: "Time-to-resolution. First-visit fix rate. Cognitive load. I frame work around metrics that matter to users.",
  },
];

const DOMAINS = ["Healthcare", "Aviation", "Banking"];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Intro — narrative hook */}
      <section className="px-6 max-w-3xl mx-auto pt-20 md:pt-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">About</p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-8 text-lg text-gray-400 leading-relaxed">
            Most systems don&apos;t fail loudly.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-gray-500 leading-relaxed">
            They fail silently &mdash; until they break something that matters.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="mt-10 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            I don&apos;t just ship code.<br />
            <span className="text-primary">I design for failure.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-lg text-gray-300 leading-relaxed">
            At Philips Healthcare, I work on medical imaging systems used
            in live procedures &mdash; where downtime isn&apos;t technical
            debt, it&apos;s clinical risk.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="mt-8 text-xl text-white font-medium">
            But the biggest problems weren&apos;t in the code.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-2 text-lg text-gray-400">
            They lived in the system:
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <ul className="mt-6 space-y-3">
            {[
              "Invisible workflow breakdowns",
              "Decisions driven by tribal knowledge",
              "Failures that could have been prevented",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-gray-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.55}>
          <p className="mt-10 text-gray-400 leading-relaxed">
            I saw them in real environments &mdash; on hospital floors,
            working alongside field engineers and clinicians.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-6 text-xl text-white font-medium">
            So I stopped operating only as an engineer.
          </p>
        </Reveal>
        <Reveal delay={0.65}>
          <p className="text-xl text-primary font-medium">
            I started operating at the system level.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <p className="mt-8 text-gray-400 leading-relaxed">
            I mapped these failures, reframed them as product problems,
            and led cross-functional teams to build MVPs addressing them.
          </p>
        </Reveal>

        <Reveal delay={0.75}>
          <p className="mt-8 text-lg text-gray-300 leading-relaxed font-medium">
            Those efforts evolved into four products which improves people&apos;s lives.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">
            Not features. Not tools. Products.
          </p>
        </Reveal>

        <Reveal delay={0.85}>
          <p className="mt-8 text-gray-400">Together, they form a loop:</p>
        </Reveal>
        <Reveal delay={0.9}>
          <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
            <span className="text-indigo-300">Predict</span>
            <span className="text-gray-600 mx-2">&rarr;</span>
            <span className="text-emerald-300">Prevent</span>
            <span className="text-gray-600 mx-2">&rarr;</span>
            <span className="text-blue-300">Assist</span>
            <span className="text-gray-600 mx-2">&rarr;</span>
            <span className="text-violet-300">Recover</span>
          </p>
        </Reveal>
      </section>

      {/* What I bring */}
      <section className="px-6 max-w-3xl mx-auto mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            What I bring
          </p>
        </Reveal>
        <ul className="mt-4 space-y-2">
          {WHAT_I_BRING.map((line, i) => (
            <Reveal key={line} delay={0.05 + i * 0.05}>
              <li className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <svg className="w-4 h-4 mt-1 shrink-0 text-emerald-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-gray-300">{line}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* How I think about product */}
      <section className="px-6 max-w-3xl mx-auto mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            How I think about product
          </p>
        </Reveal>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {PRODUCT_THINKING.map((item, i) => (
            <Reveal key={item.label} delay={0.05 + i * 0.05}>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] h-full">
                <p className="text-white font-semibold">{item.label}</p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What I'm looking for */}
      <section className="px-6 max-w-3xl mx-auto mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            What&apos;s next
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 text-gray-300 leading-relaxed">
            I&apos;ve already done the work &mdash; identified real problems
            in the field, built teams around them, and shipped MVP concepts
            that prove the thinking. Now I&apos;m looking for a Product
            Owner or Associate Product Manager role where I can do this
            at scale: own the roadmap, define the outcomes, and bridge
            engineering depth with product strategy.
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap gap-2">
          {DOMAINS.map((tag, i) => (
            <Reveal key={tag} delay={0.1 + i * 0.05}>
              <span className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.02] text-sm text-gray-300">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-3xl mx-auto mt-24 mb-32 text-center">
        <Reveal>
          <p className="text-gray-500 text-sm mb-4">
            If this resonates, I&apos;d like to hear from you.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/connect"
              className="inline-block px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-[1.03] glow-hover transition"
            >
              Get in touch
            </Link>
            <Link
              href="/cases"
              className="inline-block px-6 py-3 border border-white/15 text-gray-300 rounded-full hover:text-white hover:border-white/30 transition"
            >
              See the work
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
