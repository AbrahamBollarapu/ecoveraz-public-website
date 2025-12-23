export type PillarState =
  | "OK"
  | "DEGRADED"
  | "NOT_REVIEWABLE"
  | "ENABLED"
  | "PARTIAL"
  | "UNAVAILABLE"
  | "TRACEABLE"
  | "OPAQUE"
  | "CONTROLLED"
  | "LEAKING"
  | "UNKNOWN";

export type RRIPillars = {
  continuity: "OK" | "DEGRADED" | "NOT_REVIEWABLE";
  integrity: "ENABLED" | "PARTIAL" | "UNAVAILABLE";
  lineage: "TRACEABLE" | "PARTIAL" | "OPAQUE";
  disclosure: "CONTROLLED" | "LEAKING" | "UNKNOWN";
};

export type RRIStatus =
  | "REVIEW_READY"
  | "CONDITIONALLY_READY"
  | "NOT_REVIEWABLE";
