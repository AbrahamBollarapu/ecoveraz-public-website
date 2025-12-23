// app/walkthroughs/auditor/page.tsx
//
// Phase 7 — Auditor Walkthrough
// - Checklist-style inspection flow
// - No narratives, no scoring, no outcomes
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

export default function AuditorWalkthroughPage() {
  return (
    <>
      <Section>
        <Card>
          <CardHeader
            title="Auditor Walkthrough"
            subtitle="A neutral inspection sequence for reviewing evidence posture"
          />

          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>This walkthrough outlines how an auditor may inspect evidence posture within EcoVeraZ.</p>
            <p>
              It does not prescribe conclusions and does not replace professional judgment, audit standards, or regulatory
              authority.
            </p>
            <p>EcoVeraZ provides evidence posture only. All determinations remain external.</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge tone="neutral">Read-only</StatusBadge>
            <StatusBadge tone="neutral">Checklist-based</StatusBadge>
            <StatusBadge tone="neutral">No outcomes</StatusBadge>
          </div>
        </Card>
      </Section>

      <Section title="Inspection sequence">
        <div className="space-y-4">
          <Step
            step={1}
            title="Declared observation window"
            desc="Confirm the temporal scope of evidence under review, including start, end, and any stated exclusions."
          />
          <Step
            step={2}
            title="Continuity manifest"
            desc="Inspect whether evidence exists across the declared window and whether any gaps are explicitly visible."
          />
          <Step
            step={3}
            title="Lineage manifest"
            desc="Trace evidence from origin to review surface, ensuring transformations and handling stages are declared."
          />
          <Step
            step={4}
            title="Disclosure boundary"
            desc="Confirm what is included for review and what is intentionally withheld, with reasons stated."
          />
          <Step
            step={5}
            title="Review Readiness Index (RRI)"
            desc="Observe Pass / Fail posture for each review dimension without interpretation of adequacy or outcome."
          />
        </div>
      </Section>

      <Section title="What this walkthrough does not provide">
        <Card>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
            <li>No compliance determinations</li>
            <li>No assurance opinions</li>
            <li>No performance or quality judgments</li>
            <li>No regulatory interpretations</li>
            <li>No access to proprietary internal logic</li>
          </ul>
        </Card>
      </Section>

      <Section>
        <Card>
          <div className="space-y-2 text-sm text-muted">
            <p>Inspection complete. Any conclusions, opinions, or determinations must be made externally by the auditor.</p>
            <p>
              Refer back to the{" "}
              <Link href="/trust-core" className="text-foreground underline underline-offset-4">
                Trust Core
              </Link>{" "}
              for canonical definitions and boundaries.
            </p>
          </div>
        </Card>
      </Section>
    </>
  );
}
