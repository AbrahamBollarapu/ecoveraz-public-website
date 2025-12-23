// lib/academy/courses.ts
export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  bullets: string[];
  exercise?: string;
};

export type Course = {
  id: string;
  level: "L1" | "L2" | "L3" | "L4";
  title: string;
  subtitle: string;
  audience: string;
  durationHours: string;
  certificate: string;
  doctrineNote: string;
  lessons: Lesson[];
};

export const ACADEMY_COURSES: Course[] = [
  {
    id: "esg-foundations",
    level: "L1",
    title: "ESG, Sustainability & Impact: Clearing the Confusion",
    subtitle: "Reset mental models and vocabulary without hype.",
    audience: "CXOs, ESG leads, investors, consultants",
    durationHours: "0.75h",
    certificate: "Certificate of Completion (Foundations)",
    doctrineNote:
      "Education only. No regulatory accreditation. No compliance determination.",
    lessons: [
      {
        id: "l1-why-esg-fails",
        title: "Why ESG fails in the real world",
        minutes: 10,
        bullets: ["ESG as a reporting construct", "Why metrics collapse under audit"],
      },
      {
        id: "l1-esg-vs-sustainability",
        title: "ESG vs Sustainability vs Impact",
        minutes: 12,
        bullets: ["Definitions and category errors", "Where companies mislabel outcomes"],
      },
      {
        id: "l1-frameworks-not-truth",
        title: "Frameworks ≠ truth",
        minutes: 12,
        bullets: ["What frameworks do", "What they do not do"],
      },
      {
        id: "l1-narrative-risk",
        title: "The danger of narrative ESG",
        minutes: 11,
        bullets: ["Why story-first creates risk", "Evidence-first posture"],
      },
    ],
  },
  {
    id: "evidence-not-outcomes",
    level: "L1",
    title: "Evidence ≠ Outcomes (Core Principle)",
    subtitle: "The doctrine behind review-ready infrastructure.",
    audience: "All roles",
    durationHours: "0.65h",
    certificate: "Certificate of Completion (Foundations)",
    doctrineNote:
      "EcoVeraZ provides evidence infrastructure; conclusions remain external.",
    lessons: [
      {
        id: "l1-what-counts-as-evidence",
        title: "What counts as evidence",
        minutes: 12,
        bullets: ["Measurement + context + time window + boundary"],
      },
      {
        id: "l1-why-outcomes-external",
        title: "Why outcomes are external",
        minutes: 10,
        bullets: ["Authority stays with auditors/regulators", "Avoid implied approvals"],
      },
      {
        id: "l1-audit-vs-startup",
        title: "Audit mindset vs startup mindset",
        minutes: 10,
        bullets: ["Why claims fail", "Why artifacts win"],
      },
      {
        id: "l1-case-evidence-vs-assertion",
        title: "Case study: Evidence vs assertion",
        minutes: 8,
        bullets: ["Same data, different conclusions", "How reviewers decide"],
      },
    ],
  },
  {
    id: "disclosure-vs-performance",
    level: "L1",
    title: "Disclosure vs Performance",
    subtitle: "Understand reporting cycles and avoid over-claims.",
    audience: "Reporting teams, ESG teams, leadership",
    durationHours: "0.6h",
    certificate: "Certificate of Completion (Foundations)",
    doctrineNote:
      "Disclosure is a process; EcoVeraZ supports evidence handling only.",
    lessons: [
      { id: "l1-disclosure-not-performance", title: "Disclosure is not performance", minutes: 10, bullets: ["Why this distinction matters"] },
      { id: "l1-reporting-cycles", title: "How reporting cycles work", minutes: 10, bullets: ["Internal review, external review"] },
      { id: "l1-dashboards-not-truth", title: "Dashboards ≠ external truth", minutes: 10, bullets: ["Why internal metrics must be bounded"] },
      { id: "l1-common-mistakes", title: "Common disclosure mistakes", minutes: 6, bullets: ["Language drift", "Missing lineage"] },
    ],
  },
  {
    id: "greenwashing-risk",
    level: "L1",
    title: "Greenwashing Risk Patterns",
    subtitle: "Learn what reviewers flag and how language creates risk.",
    audience: "Marketing, ESG, leadership, legal",
    durationHours: "0.75h",
    certificate: "Certificate of Completion (Foundations)",
    doctrineNote:
      "Avoid implied outcomes; speak in evidence terms.",
    lessons: [
      { id: "l1-what-regulators-flag", title: "What reviewers flag", minutes: 12, bullets: ["Common enforcement patterns"] },
      { id: "l1-language-traps", title: "Language traps", minutes: 10, bullets: ["Implicit claims", "Guarantee language"] },
      { id: "l1-metrics-without-lineage", title: "Metrics without lineage", minutes: 12, bullets: ["Why it fails audits"] },
      { id: "l1-public-vs-review", title: "Public claims vs review reality", minutes: 11, bullets: ["How to remain audit-safe"] },
    ],
  },

  // Level 2 — Evidence Operations (core revenue)
  {
    id: "evidence-operations",
    level: "L2",
    title: "Evidence Operations",
    subtitle: "How review-ready evidence is actually built.",
    audience: "ESG, EHS, compliance, analytics, ops",
    durationHours: "6–8h",
    certificate: "Certificate of Completion (Evidence Operations)",
    doctrineNote:
      "Completion confirms learning only. It does not certify compliance.",
    lessons: [
      {
        id: "l2-definitions-boundaries",
        title: "Evidence definitions & boundaries",
        minutes: 60,
        bullets: ["Operational measurement vs evidence", "Scope and time windows", "Public vs internal evidence"],
        exercise: "Classify examples into evidence vs non-evidence.",
      },
      {
        id: "l2-continuity-integrity",
        title: "Continuity & integrity in operations",
        minutes: 75,
        bullets: ["Coverage windows", "Gap patterns", "Integrity vs correctness", "Meaningful checks"],
        exercise: "Identify continuity failures in sample datasets.",
      },
      {
        id: "l2-lineage-traceability",
        title: "Lineage & traceability",
        minutes: 75,
        bullets: ["Transformations as review points", "Fingerprints & manifests", "What auditors inspect"],
        exercise: "Map lineage for a simple evidence flow.",
      },
      {
        id: "l2-artifacts",
        title: "Evidence artifacts",
        minutes: 60,
        bullets: ["Packs, manifests, checksums", "What to include / exclude", "Distribution boundaries"],
        exercise: "Walk through a mock evidence pack.",
      },
      {
        id: "l2-review-walkthrough",
        title: "Audit-style review walkthrough",
        minutes: 60,
        bullets: ["RRI posture check", "Artifact inspection", "External conclusion boundary"],
      },
    ],
  },

  // Level 3 — Disclosure Workflows (premium)
  {
    id: "disclosure-workflows",
    level: "L3",
    title: "Disclosure & Review Workflows",
    subtitle: "How evidence supports reporting safely.",
    audience: "Reporting teams, consultants, assurance firms",
    durationHours: "6–8h",
    certificate: "Certificate of Completion (Disclosure Workflows)",
    doctrineNote:
      "Evidence supports review. Outcomes remain external.",
    lessons: [
      { id: "l3-internal-review-cycles", title: "Internal review cycles", minutes: 60, bullets: ["Pre-disclosure checks", "Sign-offs", "Evidence vs narrative"] },
      { id: "l3-packaging-for-audits", title: "Artifact packaging for audits", minutes: 75, bullets: ["What to package", "Versioning & periods", "Responding to queries"] },
      { id: "l3-disclosure-boundaries", title: "Disclosure boundaries & risk", minutes: 75, bullets: ["Public vs auditor vs regulator", "Access patterns", "Legal risk patterns"] },
      { id: "l3-working-with-reviewers", title: "Working with auditors & regulators", minutes: 75, bullets: ["How reviewers think", "Common delays", "Handling findings"] },
      { id: "l3-what-not-to-claim", title: "What not to claim", minutes: 45, bullets: ["Implicit claims", "Guarantee language", "Board-level exposure"] },
    ],
  },

  // Level 4 — Enterprise
  {
    id: "enterprise-cohorts",
    level: "L4",
    title: "Enterprise & Cohort Programs",
    subtitle: "Guided adoption for organizations.",
    audience: "Enterprises, partners, large teams",
    durationHours: "Custom",
    certificate: "Participation record only",
    doctrineNote:
      "No certification, no accreditation, no compliance determination.",
    lessons: [
      { id: "l4-assessment", title: "Evidence posture assessment", minutes: 60, bullets: ["Readiness gaps", "Boundaries", "Reviewer expectations"] },
      { id: "l4-playbooks", title: "Playbooks & operating model", minutes: 90, bullets: ["Internal workflows", "Ownership", "Review cadence"] },
      { id: "l4-simulations", title: "Review simulations", minutes: 120, bullets: ["Audit-style walkthroughs", "Findings handling"] },
      { id: "l4-deployment-alignment", title: "Deployment alignment", minutes: 90, bullets: ["Evidence artifacts", "Disclosure boundaries", "Verification surfaces"] },
    ],
  },
];

export function findCourse(courseId: string) {
  return ACADEMY_COURSES.find((c) => c.id === courseId) ?? null;
}
