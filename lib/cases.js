// Single source of truth for all four case studies.
// Each entry is fully data-driven so CaseLayout renders any of them identically.
import { SYSTEM_LAYERS } from "./systems";

const layerById = Object.fromEntries(SYSTEM_LAYERS.map((l) => [l.id, l]));

export const CASES = [
  {
    slug: "prism",
    layer: layerById.predict,
    title: "PRISM",
    subtitle: "Predictive Remote Intelligent Service Manager",
    tagline:
      "Transforming field service from reactive troubleshooting to predictive, AI-driven decision systems.",
    overview: [
      ["Role", "Product Lead · Team of 5"],
      ["Focus", "Predictive Intelligence, Field Service Optimization"],
      ["Scope", "AI-driven decision platform (MVP)"],
    ],
    context: [
      "Observed during customer site visits: field engineers arriving at hospital sites without enough system context, leading to misdiagnosis and repeat visits.",
      "On-site observations confirmed the pattern \u2014 the data existed, but no one had turned it into actionable intelligence before or during service.",
      "Led a team of 5 to scope, design, and build an MVP that addresses this gap across the full service lifecycle.",
    ],
    problem: {
      heading: "Field service today is constrained by:",
      items: [
        "Limited pre-visit system visibility",
        "High dependency on individual expertise",
        "Inefficient troubleshooting workflows",
        "Repeat visits due to incorrect preparation",
      ],
      result: "Extended downtime and inconsistent service quality.",
    },
    insight:
      "Service inefficiency is not a repair problem — it is a decision-making problem distributed across time: Before visit → During visit → After visit",
    solution:
      "PRISM is an AI-powered service intelligence platform that prepares, guides, and learns across the entire service lifecycle.",
    stages: [
      {
        icon: "📊",
        title: "1. Pre-Visit Intelligence",
        bullets: [
          "Analyzes system logs before visit",
          "Predicts root causes with confidence scoring",
          "Recommends preparation strategy",
        ],
        note:
          "Aligns with predictive maintenance systems that use data + ML to anticipate failures before they occur.",
      },
      {
        icon: "🧰",
        title: "2. Optimized Preparation",
        bullets: [
          "Suggests required parts",
          "Matches engineer skill to case complexity",
          "Generates context-specific procedures",
        ],
        note:
          "Similar to AI-driven service optimization where inventory + planning improve first-time fix rates.",
      },
      {
        icon: "🧠",
        title: "3. On-Site Decision Support",
        bullets: [
          "Real-time diagnostics",
          "Step-by-step guided troubleshooting",
          "Auto-generated documentation",
        ],
        note:
          "Reflects emerging prescriptive maintenance systems that don’t just predict but guide actions.",
      },
      {
        icon: "🔁",
        title: "4. Continuous Learning Loop",
        bullets: [
          "Captures field outcomes",
          "Improves model accuracy over time",
          "Builds scalable knowledge system",
        ],
      },
    ],
    productThinking: {
      lead:
        "Instead of optimizing individual service events, PRISM treats service as a continuous intelligence loop.",
      slogan: "Predict → Prepare → Guide → Learn",
    },
    impact: [
      ["↓ ~60%", "Faster time-to-resolution"],
      ["↑ ~85%", "First-visit fix rate"],
      ["↓", "Reduced dependency on expert engineers"],
      ["↑", "Consistent service quality across teams"],
    ],
    systemRole:
      "PRISM ensures problems are understood before engineers even arrive.",
    next: "cliniguard",
  },

  {
    slug: "cliniguard",
    layer: layerById.prevent,
    title: "CliniGuard",
    subtitle: "Continuous Clinical Reliability Intelligence",
    tagline:
      "Surfacing invisible risk in clinical systems before it ever reaches a patient.",
    overview: [
      ["Role", "Product Lead · Team of 4"],
      ["Focus", "Patient Safety, Operational Reliability"],
      ["Scope", "Live monitoring + intervention dashboard (working build)"],
    ],
    context: [
      "During hospital visits I watched clinicians and technicians operate without any continuous view of system health \u2014 risk accumulated silently between procedures.",
      "Feedback from field engineers and technicians confirmed: they only learned about drift when it surfaced as a failure during a procedure.",
      "Led a team of 4 to build a working dashboard that fuses clinical, operational, and supply telemetry into a single live picture.",
    ],
    problem: {
      heading: "Clinical reliability today is constrained by:",
      items: [
        "Reactive alerting tied to single thresholds",
        "Siloed data across systems and shifts",
        "No continuous view of operational health",
        "Risk only becomes visible when it surfaces as harm",
      ],
      result: "Reliability is treated as an exception, not a system property.",
    },
    insight:
      "Patient safety is a continuous signal — not a series of incidents. The job is to make that signal legible to the team.",
    solution:
      "CliniGuard is a real-time reliability intelligence platform that fuses clinical, operational, and supply telemetry into a single live picture — with explainable interventions when risk drifts.",
    stages: [
      {
        icon: "📡",
        title: "1. Continuous Telemetry",
        bullets: [
          "Live signal fusion across systems",
          "Procedure-aware context windows",
          "Baseline learning per environment",
        ],
      },
      {
        icon: "🩺",
        title: "2. Risk Detection",
        bullets: [
          "Multi-signal anomaly scoring",
          "Severity + confidence weighted",
          "Explainable contributing factors",
        ],
      },
      {
        icon: "⚠️",
        title: "3. Actionable Alerts",
        bullets: [
          "Action-first alert framing",
          "Routes to the right responder",
          "Preserves audit trail",
        ],
      },
      {
        icon: "🔁",
        title: "4. Outcome Learning",
        bullets: [
          "Captures intervention outcomes",
          "Tunes thresholds per site",
          "Builds institutional reliability memory",
        ],
      },
    ],
    productThinking: {
      lead:
        "CliniGuard reframes reliability from incident management into continuous health.",
      slogan: "Sense → Score → Act → Learn",
    },
    impact: [
      ["↓", "Time from anomaly to intervention"],
      ["↑", "Cross-team situational awareness"],
      ["↓", "Repeat incidents from same root cause"],
      ["↑", "Confidence in operational decisions"],
    ],
    systemRole:
      "CliniGuard ensures risk is seen before it becomes harm.",
    liveDemo: {
      href: "/cliniguard",
      label: "Open the live CliniGuard build →",
    },
    next: "hologuide",
  },

  {
    slug: "hologuide",
    layer: layerById.assist,
    title: "HoloGuide",
    subtitle: "Spatial AR Field Assistance",
    tagline:
      "Giving field engineers the right step, in the right place, at the right moment.",
    overview: [
      ["Role", "Product Lead · Team of 6"],
      ["Focus", "AR Assistance, Operational Confidence"],
      ["Scope", "Spatial assistance system (concept + cinematic prototype)"],
    ],
    context: [
      "Shadowed field engineers on-site repairing medical imaging systems \u2014 watched them flip between 2D PDF manuals and the physical machine, losing time on every context switch.",
      "Technicians confirmed: the knowledge gap between senior and junior engineers was the single biggest driver of repeat visits.",
      "Led a team of 6 to concept, prototype, and demonstrate an AR-based spatial assistance system that puts the right step in the engineer's field of view.",
    ],
    problem: {
      heading: "On-site assistance today is constrained by:",
      items: [
        "2D documentation for 3D problems",
        "Context-switching between manual and machine",
        "No live verification of completed steps",
        "Knowledge locked in senior engineers",
      ],
      result:
        "Slower repairs, higher cognitive load, and inconsistent execution.",
    },
    insight:
      "Assistance is not about more information — it’s about putting the right information in the engineer’s field of view, exactly when needed.",
    solution:
      "HoloGuide overlays guided procedures, live diagnostics, and verification onto the physical machine — turning every engineer into a senior engineer for that moment.",
    stages: [
      {
        icon: "👁️",
        title: "1. Spatial Anchoring",
        bullets: [
          "Recognizes machine + part",
          "Anchors content to physical features",
          "Persists across viewpoint changes",
        ],
      },
      {
        icon: "🪜",
        title: "2. Guided Procedure",
        bullets: [
          "Step-by-step overlays",
          "Highlights the active component",
          "Adapts to engineer skill level",
        ],
      },
      {
        icon: "✅",
        title: "3. Live Verification",
        bullets: [
          "Confirms each step before advancing",
          "Surfaces drift from expected state",
          "Captures evidence for audit",
        ],
      },
      {
        icon: "🔁",
        title: "4. Knowledge Capture",
        bullets: [
          "Records expert sessions as templates",
          "Crowdsources better procedures",
          "Closes the loop with PRISM + CliniGuard",
        ],
      },
    ],
    productThinking: {
      lead:
        "HoloGuide treats assistance as a spatial product, not a content product.",
      slogan: "See → Guide → Verify → Capture",
    },
    impact: [
      ["↓", "Cognitive load on the engineer"],
      ["↑", "First-time-right execution"],
      ["↓", "Time-to-competence for new engineers"],
      ["↑", "Auditability of in-field work"],
    ],
    systemRole:
      "HoloGuide ensures execution is precise, even under pressure.",
    liveDemo: {
      href: "/holiguide",
      label: "Open the cinematic HoloGuide story →",
    },
    next: "aris",
  },

  {
    slug: "aris",
    layer: layerById.recover,
    title: "ARIS",
    subtitle: "Automated Rollback Intelligence System",
    tagline:
      "Enabling safe, intelligent rollback decisions in critical medical systems.",
    overview: [
      ["Role", "Product Lead · Team of 5"],
      ["Focus", "Risk Management, System Reliability"],
      ["Scope", "AI-assisted rollback automation (MVP)"],
    ],
    context: [
      "Observed during site visits: software updates on clinical systems sometimes caused unexpected behavior in the field, even after passing internal validation.",
      "Field engineers described rollback decisions as manual, stressful, and inconsistent — with no structured framework for when or how to recover safely.",
      "Led a team of 5 to design and build an MVP that automates the detect-evaluate-decide-recover loop for critical system updates.",
    ],
    problem: {
      heading: "Rollback decisions today are:",
      items: [
        "Manual and inconsistent",
        "Dependent on individual expertise",
        "Delayed due to uncertainty",
        "Poorly documented for future learning",
      ],
      result: "Extended downtime and increased operational risk.",
    },
    insight:
      "The real challenge is not detecting failure — it is deciding when and how to safely recover.",
    solution:
      "ARIS is an AI-powered rollback intelligence system that detects, evaluates, and executes recovery decisions safely.",
    stages: [
      {
        icon: "🧪",
        title: "1. Post-Update Diagnostics",
        bullets: [
          "Monitors system performance metrics",
          "Validates workflows and system integrity",
          "Detects subtle anomalies early",
        ],
        note:
          "Aligns with AI systems that detect small deviations before failure escalation.",
      },
      {
        icon: "🧠",
        title: "2. AI-Based Analysis",
        bullets: [
          "Compares behavior with known-good baselines",
          "Identifies anomaly patterns",
          "Provides explainable reasoning",
        ],
        note: "Explainability is critical for trust in safety-critical systems.",
      },
      {
        icon: "⚖️",
        title: "3. Decision Engine",
        bullets: [
          "Scores severity of issues",
          "Recommends rollback vs stabilization",
          "Considers operational context",
        ],
      },
      {
        icon: "🔄",
        title: "4. Safe Rollback Execution",
        bullets: [
          "Executes rollback without data loss",
          "Preserves system state",
          "Captures before/after diagnostics",
        ],
      },
      {
        icon: "🔁",
        title: "5. Learning Loop",
        bullets: [
          "Learns from rollback outcomes",
          "Improves decision accuracy",
          "Builds institutional knowledge",
        ],
      },
    ],
    productThinking: {
      lead:
        "ARIS transforms rollback from a reactive action into a structured decision system.",
      slogan: "Detect → Evaluate → Decide → Recover → Learn",
    },
    impact: [
      ["↓", "Faster recovery from failed updates"],
      ["↓", "Reduced downtime"],
      ["↑", "Consistent service quality"],
      ["↓", "Reduced dependency on expert intervention"],
    ],
    systemRole: "ARIS ensures failures are handled safely and consistently.",
    next: "prism",
  },
];

export const CASES_BY_SLUG = Object.fromEntries(
  CASES.map((c) => [c.slug, c])
);

export function getCase(slug) {
  return CASES_BY_SLUG[slug] || null;
}

export function getNextCase(slug) {
  const c = getCase(slug);
  if (!c?.next) return null;
  return getCase(c.next);
}

// One-liner index card content (used by /cases grid).
export function getCaseSummary(slug) {
  const c = getCase(slug);
  if (!c) return null;
  return {
    slug: c.slug,
    title: c.title,
    layer: c.layer,
    problem: c.problem.result,
    impact: c.impact[0]?.[1] || "",
    impactValue: c.impact[0]?.[0] || "",
    role: c.overview[0]?.[1] || "",
  };
}
