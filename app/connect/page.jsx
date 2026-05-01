"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Reveal from "@/app/components/ui/Reveal";
import { SITE } from "@/config/site";

const LINKS = [
  { label: "email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    label: "linkedin",
    value: "linkedin.com/in/davidmathewthomas",
    href: SITE.linkedin,
  },
  { label: "github", value: "github.com/Shaz7000", href: SITE.github },
];

const HISTORY = [
  { cmd: "whoami", out: "David Mathew Thomas \u2014 Software Engineer, Philips Healthcare" },
  { cmd: "cat mission.txt", out: "Find the gap on the hospital floor. Build the team. Ship the MVP." },
  {
    cmd: "ls ./systems",
    out: "PRISM/  CliniGuard/  HoloGuide/  ARIS/",
  },
  {
    cmd: "echo $STATUS",
    out: "Open to Product Owner / APM roles \u2014 Healthcare, Aviation, Banking",
  },
];

function TerminalView() {
  const [lines, setLines] = useState(HISTORY);
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;
    let out = `command not found: ${cmd}`;
    if (cmd === "help")
      out = "Available: whoami, ls ./systems, cat mission.txt, contact, clear";
    if (cmd === "contact")
      out = LINKS.map((l) => `${l.label}: ${l.value}`).join("\n");
    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    setLines((prev) => [...prev, { cmd, out }]);
    setInput("");
  }

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 text-xs text-gray-500 font-mono">
          dmt@portfolio ~ connect
        </span>
      </div>

      {/* Lines */}
      <div className="p-5 font-mono text-sm space-y-3 max-h-[420px] overflow-y-auto">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
          >
            <p className="text-primary">
              <span className="text-success select-none">❯ </span>
              {l.cmd}
            </p>
            <p className="text-gray-400 whitespace-pre-wrap pl-4 mt-0.5">
              {l.out}
            </p>
          </motion.div>
        ))}

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-success select-none">❯</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help' or 'contact'"
            className="flex-1 bg-transparent text-primary outline-none placeholder:text-gray-600 caret-primary"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}

function SimpleView() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-2xl mx-auto">
      {LINKS.map((l, i) => (
        <Reveal key={l.label} delay={0.1 + i * 0.05}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group block p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_30px_rgba(96,165,250,0.06)] transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              {l.label}
            </p>
            <p className="mt-2 text-white group-hover:text-primary transition-colors">
              {l.value}
            </p>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export default function ConnectPage() {
  const [terminal, setTerminal] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="px-6 max-w-2xl mx-auto pt-32 md:pt-44 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
            Connect
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Let&apos;s build something that
            doesn&apos;t fail silently.
          </h1>
        </Reveal>

        {/* Mode toggle */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setTerminal((t) => !t)}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs text-gray-400 hover:text-white hover:border-white/20 transition font-mono"
            >
              {terminal ? "simple mode" : "$ terminal mode"}
            </button>
          </div>
        </Reveal>

        {/* Content */}
        <div className="mt-10 mb-32">
          <AnimatePresence mode="wait">
            {terminal ? (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <TerminalView />
              </motion.div>
            ) : (
              <motion.div
                key="simple"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <SimpleView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
