// app/walkthroughs/regulator/page.tsx
//
// Phase 7 — Regulator Walkthrough
// - Jurisdiction-agnostic inspection flow
// - Emphasizes scope, disclosure boundaries, and separation of decision authority
// - No scoring, no outcomes, no compliance claims
//

import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

function Step(props: { step: number; title: string; desc: string }) {
  const { step, title, desc } = props;
  return (
    <div className="rounded-2xl border border-border bg-card/50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-muted">Step {step}</div>
          <div className="mt-1 font-medium">{title}</div>
        </div>
        <StatusBadge tone="neutral">Inspect</StatusBadge>
      </div>
      <div className="mt-2 text-sm text-muted">{desc}</div>
    </div>
  );
}

export default function RegulatorWalkthroughPage() {
  return (
    <>
      <Section>
        <Card>
          <CardHeader
            title="Regulator Walkthrough"
            subtitle="A jurisdiction-agnostic inspection sequence for evidence posture"
          />

          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>
              This walkthrough describes how a regulator may inspect evidence posture presented by EcoVeraZ. It is
              intentionally jurisdiction-agnostic and does not map to any single regulatory regime.
            </p>
            <p>
              EcoVeraZ does not certify, approve, rate, or determine regulatory compliance. EcoVeraZ provides evidence
              posture only. All determinations remain external.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge tone="neutral">Read-only</StatusBadge>
            <StatusBadge tone="neutral">Jurisdiction-agnostic</StatusBadge>
            <StatusBadge tone="neutral">No outcomes</StatusBadge>
          </div>
        </Card>
      </Section>

      <Section title="Inspection sequence">
        <div className="space-y-4">
          <Step
            step={1}
            title="Scope declaration"
            desc="Confirm what evidence is presented for review, what is excluded, and what disclosure boundary applies."
          />
          <Step
            step={2}
            title="Declared observation window"
            desc="Confirm that the evidence is time-bounded with explicit start/end and defined scope for review."
          />
          <Step
            step={3}
            title="Evidence structure (review surfaces)"
            desc="Inspect the structure of evidence as presented for review: bounded context, traceable identifiers, and reviewable artifacts."
          />
          <Step
            step={4}
            title="Continuity visibility"
            desc="Confirm that continuity across the declared window can be inspected and that gaps (if any) are visible without interpretation."
          />
          <Step
            step={5}
            title="Lineage visibility"
            desc="Confirm that evidence lineage from origin to review surface is declared, including transformations and handling stages."
          />
          <Step
            step={6}
            title="Separation of oversight"
            desc="Confirm that EcoVeraZ presents evidence posture only and does not imply regulatory acceptance, approvals, or outcomes."
          />
        </div>
      </Section>

      <Section title="Interpretation guardrails">
        <Card>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
            <li>No mapping to jurisdiction-specific thresholds</li>
            <li>No claims of equivalence to regulatory reporting requirements</li>
            <li>No prediction of determinations or enforcement outcomes</li>
            <li>No substitution for statutory or supervisory processes</li>
          </ul>
        </Card>
      </Section>

      <Section>
        <Card>
          <div className="space-y-2 text-sm text-muted">
            <p>
              Inspection complete. Any determinations, interpretations, or enforcement decisions remain external to EcoVeraZ.
            </p>
            <p>
              For canonical definitions and boundaries, refer to the{" "}
              <Link href="/trust-core" className="text-foreground underline underline-offset-4">
                Trust Core
              </Link>
              .
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}
