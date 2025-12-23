// app/ladder/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Step({
  label,
  title,
  subtitle,
  gate,
}: {
  label: string;
  title: string;
  subtitle: string;
  gate: string;
}) {
  return (
    <Card>
      <CardHeader
        title={`${label} — ${title}`}
        subtitle={subtitle}
        right={
          <StatusBadge tone="neutral" mono>
            {gate}
          </StatusBadge>
        }
      />
      <div className="text-xs text-text-400 leading-relaxed">
        Ladder steps describe artifact maturity — not regulatory acceptance.
      </div>
    </Card>
  );
}

export default function LadderPage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                LADDER
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                EVIDENCE MATURITY
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Evidence Ladder</h1>
            <p className="mt-3 text-lg text-text-200">
              A lifecycle for producing review-ready evidence artifacts.
            </p>
            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              The ladder defines maturity. Reviewers apply standards externally and determine conclusions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">
                Back to Resources
              </LinkButton>
              <LinkButton href="/rri" variant="primary">
                RRI Spec
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Steps" subtitle="Capture → Normalize → Lineage → Governance → Outputs → Verify">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Step label="L1" title="Capture" subtitle="Ingest measurements with identity, timestamps, and basic validation." gate="CONTINUITY" />
            <Step label="L2" title="Normalize" subtitle="Stabilize fields/units and define review windows for reproducibility." gate="INTEGRITY" />
            <Step label="L3" title="Lineage" subtitle="Fingerprint artifacts and make transformations inspectable." gate="LINEAGE" />
            <Step label="L4" title="Governance" subtitle="Record readiness posture, exceptions, and disclosure boundaries." gate="DISCLOSURE" />
            <Step label="L5" title="Outputs" subtitle="Produce packs and reports suitable for audit and disclosure workflows." gate="ARTIFACTS" />
            <Step label="L6" title="Verify" subtitle="Expose receipts and integrity references (optional anchoring)." gate="VERIFICATION" />
          </div>
        </Grid>
      </Section>
    </>
  );
}
