// app/trust-core/hangelog.ts
//
// Trust Core changelog scaffold
// - Keep this small and disciplined.
// - Newest entry should be first (index 0).
//

export const TRUST_CORE_VERSION = "1.0" as const;

// Use an explicit date string (YYYY-MM-DD) for regulator-safe clarity.
export const TRUST_CORE_LAST_UPDATED = "2025-12-23" as const;

export type TrustCoreChange = {
  date: string; // YYYY-MM-DD
  version: string; // "1.0", "1.1", "2.0", etc.
  pages: string[]; // e.g. ["/trust-core", "/ladder", "/rri", "/compliance"]
  changes: string[]; // short bullets, 1–3 items
  rationale: string; // one sentence, boring and precise
};

export const TRUST_CORE_CHANGELOG: TrustCoreChange[] = [
  {
    date: "2025-12-23",
    version: "1.0",
    pages: ["/trust-core", "/compliance", "/ladder", "/rri"],
    changes: [
      "Published Trust Core v1.0 as the canonical public bundle (Principles, Ladder, RRI Specification).",
      "Declared binary gating rules for RRI on public surfaces (Pass/Fail only; no weighting; no aggregation).",
      "Locked boundary that EcoVeraZ terminates at the Review layer; Oversight remains external.",
    ],
    rationale:
      "Establish a stable, regulator-safe foundation that prevents silent drift and constrains downstream claims.",
  },
];

