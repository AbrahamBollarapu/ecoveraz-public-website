export type SolutionSlug =
  | "operations"
  | "ehs"
  | "audit-packs"
  | "governance"
  | "compliance"
  | "anchoring";

export type SolutionPublic = {
  slug: SolutionSlug;
  title: string;
  tagline: string;
  outcomes: string[];
  modulesUsed: string[];
  reviewSignals: { label: string; value: string }[];
};

export const SOLUTIONS: Record<SolutionSlug, SolutionPublic> = {
  operations: {
    slug: "operations",
    title: "Facilities & Operations evidence readiness",
    tagline: "Operational oversight with review-ready evidence outputs.",
    outcomes: [
      "Track operational coverage and continuity windows.",
      "Surface review-ready evidence without exposing internals.",
      "Support accountable remediation workflows.",
    ],
    modulesUsed: [
      "Evidence lineage",
      "Verification endpoints",
      "Artifact outputs",
      "Governance signals",
    ],
    reviewSignals: [
      { label: "Coverage", value: "Checkable" },
      { label: "Continuity", value: "OK" },
      { label: "Evidence readiness", value: "READY" },
    ],
  },

  ehs: {
    slug: "ehs",
    title: "EHS defensibility",
    tagline: "Evidence handling designed for scrutiny and escalation contexts.",
    outcomes: [
      "Maintain traceability from operational context to outputs.",
      "Expose verification signals for continuity and integrity.",
      "Provide audit-friendly review posture.",
    ],
    modulesUsed: ["Evidence lineage", "Verification endpoints", "Governance signals"],
    reviewSignals: [
      { label: "Integrity", value: "Checkable" },
      { label: "Lineage", value: "Verifiable" },
      { label: "Review posture", value: "Controlled" },
    ],
  },

  "audit-packs": {
    slug: "audit-packs",
    title: "Operational audit packs",
    tagline: "Structured outputs designed for oversight.",
    outcomes: [
      "Generate review-ready artifact packages.",
      "Support controlled distribution of outputs.",
      "Separate evidence from implementation details.",
    ],
    modulesUsed: ["Artifact outputs", "Evidence lineage"],
    reviewSignals: [
      { label: "Artifacts", value: "Structured" },
      { label: "Distribution", value: "Controlled" },
      { label: "Readiness", value: "READY" },
    ],
  },

  governance: {
    slug: "governance",
    title: "Governance & oversight signals",
    tagline: "High-signal indicators for accountable teams.",
    outcomes: [
      "Provide restrained indicators for leadership review.",
      "Highlight review state without analytics sprawl.",
      "Keep interpretation context-dependent.",
    ],
    modulesUsed: ["Governance signals"],
    reviewSignals: [
      { label: "Signal quality", value: "High" },
      { label: "Noise", value: "Restricted" },
      { label: "Posture", value: "Review-ready" },
    ],
  },

  compliance: {
    slug: "compliance",
    title: "Compliance-aligned workflows",
    tagline: "Support disclosure workflows after operations context is established.",
    outcomes: [
      "Structure outputs to support reporting workflows.",
      "Maintain disciplined evidence lineage.",
      "Avoid implied certification or approval.",
    ],
    modulesUsed: ["Evidence lineage", "Artifact outputs", "Alignment workflows"],
    reviewSignals: [
      { label: "Alignment", value: "Supported" },
      { label: "Certification", value: "Not implied" },
      { label: "Approval", value: "Not implied" },
    ],
  },

  anchoring: {
    slug: "anchoring",
    title: "Optional cryptographic anchoring",
    tagline: "Tamper-evident verification when required.",
    outcomes: [
      "Enable cryptographic anchoring optionally.",
      "Support tamper-evident verification workflows.",
      "Keep anchoring separate unless explicitly enabled.",
    ],
    modulesUsed: ["Optional anchoring"],
    reviewSignals: [
      { label: "Mode", value: "Optional" },
      { label: "Verification", value: "Cryptographic" },
      { label: "Posture", value: "Configurable" },
    ],
  },
};

export function getSolution(slug: string) {
  // Typed lookup: safe, ESLint-friendly, and keeps public API flexible.
  const key = slug as SolutionSlug;
  return SOLUTIONS[key];
}
