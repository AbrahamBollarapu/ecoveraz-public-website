export type ModuleSlug =
  | "evidence-lineage"
  | "verification-endpoints"
  | "artifact-outputs"
  | "governance-signals"
  | "alignment-workflows"
  | "optional-anchoring";

export type ModulePublic = {
  slug: ModuleSlug;
  title: string;
  tagline: string;
  statusLabel: "MODULE";
  outcomes: string[]; // strictly outcome phrasing
  appearsIn: string[]; // surfaces (Platform / Compliance / Resources)
  signals: { label: string; value: string; tone?: "good" | "neutral" | "warn" }[];
  sampleOutputTitle: string;
  sampleOutputLines: string[]; // illustrative, not technical
};

export const MODULES: Record<ModuleSlug, ModulePublic> = {
  "evidence-lineage": {
    slug: "evidence-lineage",
    title: "Evidence lineage",
    tagline: "Trace outputs to operational source context.",
    statusLabel: "MODULE",
    outcomes: [
      "Maintain traceability from operational measurements to outputs.",
      "Support review by showing consistent evidence lineage across transformations.",
      "Provide defensible context for oversight workflows.",
    ],
    appearsIn: ["Platform overview", "Compliance review", "Resource outputs"],
    signals: [
      { label: "Traceability", value: "Present", tone: "neutral" },
      { label: "Lineage status", value: "Verifiable", tone: "neutral" },
      { label: "Review posture", value: "Controlled", tone: "neutral" },
    ],
    sampleOutputTitle: "Lineage summary (illustrative)",
    sampleOutputLines: [
      "Output: Review-ready artifact",
      "Source context: Operational measurements (timestamped)",
      "Lineage: Controlled transformations applied",
      "Verification: Available for continuity review",
    ],
  },

  "verification-endpoints": {
    slug: "verification-endpoints",
    title: "Verification endpoints",
    tagline: "Review surfaces for continuity and integrity.",
    statusLabel: "MODULE",
    outcomes: [
      "Expose review surfaces for continuity and integrity checks.",
      "Support audit-style questions without exposing internals publicly.",
      "Provide high-signal indicators suitable for oversight.",
    ],
    appearsIn: ["Platform overview", "Compliance review"],
    signals: [
      { label: "Continuity", value: "Checkable", tone: "neutral" },
      { label: "Integrity", value: "Checkable", tone: "neutral" },
      { label: "Surface", value: "Available", tone: "neutral" },
    ],
    sampleOutputTitle: "Verification readout (illustrative)",
    sampleOutputLines: [
      "Continuity: OK (policy window)",
      "Integrity: Available (consistency checks)",
      "Lineage: Verifiable",
      "Notes: Deployment-dependent capabilities",
    ],
  },

  "artifact-outputs": {
    slug: "artifact-outputs",
    title: "Artifact outputs",
    tagline: "Structured artifacts suited for oversight.",
    statusLabel: "MODULE",
    outcomes: [
      "Generate structured outputs for review and reporting workflows.",
      "Separate evidence outputs from internal implementation detail.",
      "Support controlled distribution of outputs (gated where needed).",
    ],
    appearsIn: ["Platform overview", "Resources", "Compliance review"],
    signals: [
      { label: "Output mode", value: "Artifact-based", tone: "neutral" },
      { label: "Review readiness", value: "Ready", tone: "neutral" },
      { label: "Distribution", value: "Controlled", tone: "neutral" },
    ],
    sampleOutputTitle: "Artifact preview (illustrative)",
    sampleOutputLines: [
      "Artifact: Evidence package (summary)",
      "Scope: Site-level operational window",
      "Includes: Review indicators and lineage summary",
      "Disclaimer: Visuals may be illustrative",
    ],
  },

  "governance-signals": {
    slug: "governance-signals",
    title: "Governance signals",
    tagline: "High-signal indicators for accountable teams.",
    statusLabel: "MODULE",
    outcomes: [
      "Provide high-signal indicators for governance and oversight.",
      "Highlight review states without exposing internal calculations publicly.",
      "Support board/investor conversations with restrained signal surfaces.",
    ],
    appearsIn: ["Platform overview", "Compliance review"],
    signals: [
      { label: "Signal quality", value: "High", tone: "neutral" },
      { label: "Posture", value: "Review-ready", tone: "neutral" },
      { label: "Alerting", value: "Deployment-dependent", tone: "neutral" },
    ],
    sampleOutputTitle: "Signal summary (illustrative)",
    sampleOutputLines: [
      "Continuity: OK",
      "Evidence readiness: READY",
      "Alert state: DEGRADED (requires review)",
      "Interpretation: Context-dependent",
    ],
  },

  "alignment-workflows": {
    slug: "alignment-workflows",
    title: "Alignment workflows",
    tagline: "Support ESG-aligned reporting workflows (deployment dependent).",
    statusLabel: "MODULE",
    outcomes: [
      "Support ESG-aligned workflows after operational context is established.",
      "Map outputs to reporting needs without claiming certification.",
      "Enable structured evidence handling for disclosure support.",
    ],
    appearsIn: ["Compliance review", "Resources"],
    signals: [
      { label: "Alignment", value: "Supported", tone: "neutral" },
      { label: "Certification", value: "Not implied", tone: "neutral" },
      { label: "Capability", value: "Deployment-dependent", tone: "neutral" },
    ],
    sampleOutputTitle: "Alignment note (illustrative)",
    sampleOutputLines: [
      "Alignment: Supported for reporting workflows",
      "Disclaimer: Alignment ≠ certification",
      "Verification: Not regulatory approval",
      "Scope: Deployment-dependent",
    ],
  },

  "optional-anchoring": {
    slug: "optional-anchoring",
    title: "Optional anchoring",
    tagline: "Cryptographic anchoring when required.",
    statusLabel: "MODULE",
    outcomes: [
      "Provide cryptographic anchoring when required (optional).",
      "Support tamper-evident verification workflows.",
      "Keep anchoring separate from operational evidence flow unless enabled.",
    ],
    appearsIn: ["Platform overview", "Compliance review"],
    signals: [
      { label: "Mode", value: "Optional", tone: "neutral" },
      { label: "Posture", value: "Configurable", tone: "neutral" },
      { label: "Verification", value: "Cryptographic", tone: "neutral" },
    ],
    sampleOutputTitle: "Anchoring receipt (illustrative)",
    sampleOutputLines: [
      "Anchoring: Optional (enabled by deployment)",
      "Receipt: Identifier + timestamp (illustrative)",
      "Verification: Cryptographic confirmation",
      "Disclaimer: Verification ≠ regulatory approval",
    ],
  },
};

export function getModule(slug: string) {
  // Typed lookup: safe, ESLint-friendly, and keeps public API flexible.
  const key = slug as ModuleSlug;
  return MODULES[key];
}
