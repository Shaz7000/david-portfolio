// All HoloGuide case study text content lives here.
// UI components import from this file — no prose hard-coded in JSX.

export const cover = {
  eyebrow: "Product Case Study",
  title: "HoloGuide",
  subtitle: "AR-powered field assistance platform.",
  pitch: "Reducing downtime in critical healthcare systems.",
  meta: [
    { label: "Role", value: "Product Concept & Lead" },
    { label: "Domain", value: "HealthTech · Field Service" },
    { label: "Year", value: "2025 — 2026" },
  ],
};

export const painFrames = [
  "Field engineers switch between tools, manuals, and calls...",
  "Information lives in PDFs, tribal knowledge, and Slack threads.",
  "Confusion compounds. Decisions get delayed.",
  "Downtime becomes the default mode.",
];

export const insight = {
  eyebrow: "The turning point",
  headline: "The problem isn't lack of information.",
  body: "It's lack of contextual access in critical moments.",
};

export const overview = {
  eyebrow: "Product Overview",
  title: "A mobile AR assistance system for field engineers.",
  pillars: [
    "Device recognition",
    "Contextual guidance",
    "Integrated ordering",
  ],
  flow: ["Camera", "Recognition", "Guidance", "Action"],
};

export const screens = [
  {
    eyebrow: "Home / Scan",
    title: "Scanning is the entry point.",
    body: "A single, unmissable CTA. The engineer points and taps — no menus, no setup, no decisions to make under stress.",
    insight: "Big CTA, minimal cognitive load, clear hierarchy.",
    mock: "ScanMock",
    reverse: false,
  },
  {
    eyebrow: "AR Device Recognition",
    title: "Recognise components in real time.",
    body: "The system identifies the exact unit and surfaces the right context. The bounding box stays anchored — overlays only work if they don't drift.",
    insight: "AR overlays must remain anchored to objects to be usable in the field.",
    mock: "ARRecognitionMock",
    reverse: true,
  },
  {
    eyebrow: "Contextual Guidance",
    title: "Replace manuals with steps that point.",
    body: "Progress, instruction, and demonstration in one frame. The engineer sees what to do — and where to do it — without flipping between artefacts.",
    insight: "Visual + text + progress beats any PDF.",
    mock: "GuidanceMock",
    reverse: false,
  },
  {
    eyebrow: "Module Ordering",
    title: "The fix shouldn't require a second app.",
    body: "Detected issue → pre-filled part ID → live availability → one tap to order. Every removed field is a removed source of error.",
    insight: "Pre-fill everything. Manual entry is where downtime hides.",
    mock: "OrderMock",
    reverse: true,
  },
];

export const tradeoffs = [
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

export const validateNext = [
  "Does AR actually reduce MTTR at scale, or only in pilot conditions?",
  "What does the adoption curve look like beyond the early-believer cohort?",
  "Where does friction remain — content authoring, recognition coverage, or trust?",
  "Which workflows justify guided AR, and which should stay text-only?",
];

export const futureVision = {
  headline: "From assistance",
  highlight: "to intelligent systems.",
  evolution: [
    "Predictive diagnostics",
    "AI-guided repairs",
    "Autonomous service workflows",
  ],
};
