import { RRIPillars, RRIStatus } from "./types";

export function evaluateRRI(p: RRIPillars): RRIStatus {
  // Hard fails
  if (p.disclosure === "LEAKING") return "NOT_REVIEWABLE";
  if (p.continuity === "NOT_REVIEWABLE") return "NOT_REVIEWABLE";
  if (p.lineage === "OPAQUE") return "NOT_REVIEWABLE";

  // Conditional readiness
  if (
    p.continuity === "DEGRADED" ||
    p.integrity === "PARTIAL" ||
    p.integrity === "UNAVAILABLE" ||
    p.lineage === "PARTIAL" ||
    p.disclosure === "UNKNOWN"
  ) {
    return "CONDITIONALLY_READY";
  }

  // All minimums satisfied
  return "REVIEW_READY";
}
