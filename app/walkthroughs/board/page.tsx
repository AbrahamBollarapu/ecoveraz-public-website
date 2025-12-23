// app/walkthroughs/board/page.tsx
//
// Phase 7 — Board Oversight Walkthrough
// - Governance-focused inspection flow
// - Clarifies what boards can see and cannot see (by design)
// - No outcomes, no compliance claims
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

export default function BoardWalkthroughPage() {
  return (
    <>
      <Section>
        <Card>
          <CardHeader
            title="Board Oversight Walkthrough"
            subtitle="Governance-focused inspection of evidence posture and boundaries"
          />

          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>
              This walkthrough describes what a board may inspect, what remains intentionally withheld, and where decision
              authority sits.
            </p>
            <p>
              EcoVeraZ does not certify, approve, rate, or determine regulatory compliance. EcoVeraZ provides evidence
              posture only. All determinations remain external.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge tone="neutral">Read-only</StatusBadge>
            <StatusBadge tone="neutral">Governance</StatusBadge>
            <StatusBadge tone="neutral">No outcomes</StatusBadge>
          </div>
        </Card>
      </Section>

      <Section title="Oversight sequence">
        <div className="space-y-4">
          <Step
            step={1}
            title="What the board can see"
            desc="Declared observation windows, continuity visibility, lineage declarations, and explicit disclosure boundaries."
          />
          <Step
            step={2}
            title="What the board cannot see (by design)"
            desc="Internal logic, proprietary thresholds, system architecture details, and non-essential operational metadata."
          />
          <Step
            step={3}
            title="Where accountability sits"
            desc="Evidence posture is inspectable; determinations and accountability remain with human and institutional oversight."
          />
          <Step
            step={4}
            title="Separation of Oversight"
            desc="EcoVeraZ terminates at the Review layer; Oversight decisions remain external and governed."
          />
        </div>
      </Section>

      <Section>
        <Card>
          <div className="space-y-2 text-sm text-muted">
            <p>Oversight complete. Any conclusions, approvals, or enforcement decisions remain external.</p>
            <p>
              Refer to the{" "}
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
