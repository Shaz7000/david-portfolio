"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../lib/animations";
import TradeoffCard from "./ui/TradeoffCard";

const tradeoffs = [
  {
    a: "AR Glasses",
    b: "Mobile AR",
    decision: "Mobile AR",
    rationale: "Adoption beats novelty. No hardware lock-in, scales day one.",
  },
  {
    a: "Automation",
    b: "Human-in-loop",
    decision: "Guided system",
    rationale: "Engineers stay accountable; automation removes that loop.",
  },
  {
    a: "Deep integration",
    b: "MVP speed",
    decision: "MVP first",
    rationale: "Prove the workflow value before negotiating API access.",
  },
  {
    a: "Cloud only",
    b: "Edge only",
    decision: "Hybrid",
    rationale: "On-device for latency, cloud for the long-tail of components.",
  },
];

export default function Tradeoffs() {
  return (
    <motion.section
      id="tradeoffs"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="px-6 md:px-section py-32 max-w-6xl mx-auto"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs uppercase tracking-[0.3em] text-muted mb-4"
      >
        Tradeoffs
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-h2 md:text-5xl font-semibold mb-12"
      >
        The decisions behind the product.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {tradeoffs.map((t, i) => (
          <motion.div key={i} variants={fadeUp}>
            <TradeoffCard {...t} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
