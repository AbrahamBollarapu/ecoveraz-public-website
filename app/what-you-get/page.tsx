// app/what-you-get/page.tsx
import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

type Output = {
  id: string;
  name: string; // what it produces
  whenUsed: string; // when it’s used
  why: string; // why it exists (one sentence)
};

type Role = {
  id: string;
  name: string;
  primaryOutputs: string[];
};

const OUTPUTS: Output[] = [
  {
    id: "evidence-pack",
    name: "Evidence Pack (review-ready files)",
    whenUsed: "When audits or assurance teams ask: “show me the trail for this period.”",
    why: "So reviews don’t start from scratch — source → window → files stays consistent every time.",
  },
  {
    id: "manifest",
    name: "Manifest + SHA256 checksums",
    whenUsed: "When evidence must be referenced, shared, or verified without ambiguity.",
    why: "So a reviewer can confirm what was included and detect changes without arguing over versions.",
  },
  {
    id: "windowed-exports",
    name: "Windowed exports (month / quarter / program window)",
    whenUsed: "When you must report a bounded period with clean start/end boundaries.",
    why: "So numbers don’t drift across windows and comparisons remain defensible.",
  },
  {
    id: "readiness-gates",
    name: "Readiness gates (pass/fail posture signals)",
    whenUsed: "Before publishing claims, submissions, or external-facing summaries.",
    why: "So teams catch gaps early and avoid last-minute reconstruction under pressure.",
  },
  {
    id: "alert-timeline",
    name: "Alert + action timeline",
    whenUsed: "When incidents require investigation, review, or internal accountability.",
    why: "So the sequence of signals and responses is traceable, not anecdotal.",
  },
  {
    id: "portfolio-oversight",
    name: "Portfolio oversight views (multi-site comparability)",
    whenUsed: "When leadership needs comparable oversight across sites, vendors, or zones.",
    why: "So governance discussions use consistent evidence indicators, not inconsistent local reporting.",
  },
];

const ROLES: Role[] = [
  {
    id: "ops",
    name: "Operations / Facilities",
    primaryOutputs: ["Readiness gates", "Alert + action timeline", "Evidence Pack"],
  },
  {
    id: "ehs",
    name: "EHS / Safety",
    primaryOutputs: ["Alert + action timeline", "Windowed exports", "Evidence Pack"],
  },
  {
    id: "esg",
    name: "Sustainability / ESG",
    primaryOutputs: ["Windowed exports", "Manifest + SHA256", "Evidence Pack"],
  },
  {
    id: "assurance",
    name: "Compliance / Assurance coordination",
    primaryOutputs: ["Evidence Pack", "Manifest + SHA256", "Readiness gates"],
  },
  {
    id: "leadership",
    name: "Leadership / Portfolio owners",
    primaryOutputs: ["Portfolio oversight views", "Readiness gates", "Windowed exports"],
  },
];

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-border bg-surface-2 px-3 py-2">
      <div className="text-xs text-text-300">{label}</div>
      <div className="text-xs text-text-200 text-right">{value}</div>
    </div>
  );
}

export default function WhatYouGetPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* HERO (calm) */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Outputs</StatusBadge>
            <StatusBadge tone="neutral">Review-ready</StatusBadge>
            <StatusBadge tone="neutral">Audit-safe language</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">Commercial clarity — tangible deliverables</div>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              What EcoVeraZ Produces
            </h1>

            <p className="mt-3 text-base leading-relaxed text-text-200">
              EcoVeraZ produces <span className="text-text-100">review-ready evidence outputs</span> from real-world
              operational data. It does not certify, approve, or determine compliance outcomes — external determination
              remains external.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/contact" variant="primary">
                Request a demo
              </LinkButton>
              <LinkButton href="/walkthroughs" variant="secondary">
                Proof walkthroughs
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* OUTPUTS (3-line grammar) */}
      <Section className="bg-surface-2">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">Core outputs</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Each item below follows the same structure: what it is, when it’s used, and why it exists.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {OUTPUTS.map((o) => (
            <Card key={o.id} className="rounded-2xl border border-border bg-card/40">
              <CardHeader
                title={o.name}
                subtitle="A tangible deliverable (not a claim)."
                right={<StatusBadge tone="neutral">OUTPUT</StatusBadge>}
              />
              <div className="px-5 pb-5 space-y-3">
                <MiniRow label="When it’s used" value={o.whenUsed} />
                <MiniRow label="Why it exists" value={o.why} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHO GETS WHAT (compressed) */}
      <Section className="bg-bg-900">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">Who benefits most</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            A simple mapping (no jargon, no repetition).
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ROLES.map((r) => (
            <Card key={r.id} className="rounded-2xl border border-border bg-card/40">
              <CardHeader title={r.name} subtitle="Primary outputs typically used by this function." />
              <div className="px-5 pb-5 space-y-2">
                {r.primaryOutputs.map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm text-text-200"
                  >
                    {x}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href="/platform" variant="secondary">
            Platform overview
          </LinkButton>
          <LinkButton href="/resources" variant="secondary">
            Proof & references
          </LinkButton>
        </div>
      </Section>

      {/* BOUNDARIES (keep) */}
      <Section className="bg-surface-2">
        <Card className="rounded-2xl border border-border bg-card/40">
          <CardHeader
            title="Language boundaries (kept intentionally)"
            subtitle="EcoVeraZ produces evidence and visibility — external determination remains external."
          />
          <div className="px-5 pb-5 text-sm text-text-200 space-y-3">
            <div className="rounded-xl border border-border bg-surface-2 p-3">
              <div className="text-xs text-text-300">We do</div>
              <div className="mt-1 text-sm text-text-200">
                Produce review-ready evidence outputs with clear time windows and traceable structure.
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface-2 p-3">
              <div className="text-xs text-text-300">We do not</div>
              <div className="mt-1 text-sm text-text-200">
                Certify compliance, approve audits, or promise outcomes.
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <LinkButton href="/walkthroughs" variant="primary">
                Proof walkthroughs
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
