// app/solutions/page.tsx
import Link from "next/link";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { MetricTile } from "@/components/ui/MetricTile";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { KpiRow } from "@/components/ui/KpiRow";

function SolutionCard({
  title,
  subtitle,
  evidence,
  href,
}: {
  title: string;
  subtitle: string;
  evidence: string[];
  href: string;
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={
          <StatusBadge tone="neutral" mono>
            EVIDENCE CONTEXT
          </StatusBadge>
        }
      />

      <div className="mt-3 grid gap-2">
        {evidence.map((e) => (
          <div key={e} className="flex items-start gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full bg-accent-400" />
            <div className="text-sm text-text-200">{e}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href={href}
          className="text-sm text-accent-400 hover:text-accent-500 transition-colors"
        >
          Request evaluation →
        </Link>
      </div>
    </Card>
  );
}

function PersonaCard({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} />
      <div className="text-sm text-text-300">{body}</div>
    </Card>
  );
}

export default function SolutionsPage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <Grid>
          <div className="md:col-span-7">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                SOLUTIONS
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                REVIEW LAYER
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">
              Evidence infrastructure across operational contexts.
            </h1>

            <p className="mt-4 text-lg text-text-200">
              EcoVeraZ structures operational measurements into traceable,
              review-ready evidence artifacts for external oversight.
            </p>

            <p className="mt-4 text-sm text-text-300">
              The contexts below show how the same evidence infrastructure is
              deployed across environments. EcoVeraZ does not certify, approve,
              or determine compliance or outcomes.
            </p>

            <div className="mt-6 flex gap-2">
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
              <LinkButton href="/platform" variant="secondary">
                Platform overview
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-3">
              <MetricTile
                label="Evidence posture"
                value="Controlled"
                note="review-ready by design"
                mono
              />
              <MetricTile
                label="Verification surfaces"
                value="Available"
                note="artifact integrity only"
                mono
              />
              <MetricTile
                label="Disclosure boundary"
                value="Enforced"
                note="internals never exposed"
                mono
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* SOLUTION CONTEXTS */}
      <Section
        title="Operational contexts"
        subtitle="Evidence use cases expressed without outcome claims."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <SolutionCard
              title="Facilities & EHS operations"
              subtitle="Operational oversight with review-ready evidence."
              href="/contact"
              evidence={[
                "Operational coverage and continuity artifacts",
                "Traceable evidence suitable for internal review",
                "Structured context for remediation discussions",
              ]}
            />

            <SolutionCard
              title="Governance & oversight"
              subtitle="High-signal evidence for accountable leadership."
              href="/contact"
              evidence={[
                "Restrained review signals for governance forums",
                "Clear separation between data and interpretation",
                "Externally interpretable artifacts",
              ]}
            />

            <SolutionCard
              title="Audit & disclosure workflows"
              subtitle="Evidence packs designed for scrutiny."
              href="/resources"
              evidence={[
                "Review-ready evidence bundles",
                "Explicit lineage and integrity references",
                "Controlled distribution surfaces",
              ]}
            />
          </div>
        </Grid>
      </Section>

      {/* WHO THIS SERVES */}
      <Section
        title="Who this serves"
        subtitle="Role-first framing aligned with accountability."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-4">
            <PersonaCard
              title="Operations / EHS"
              subtitle="Day-to-day accountability"
              body="Evidence artifacts that support internal oversight and review readiness."
            />
            <PersonaCard
              title="ESG / Sustainability"
              subtitle="Reporting support"
              body="Operational evidence that feeds disclosure workflows without implicit claims."
            />
            <PersonaCard
              title="Compliance / Audit"
              subtitle="External review"
              body="Traceable, review-ready artifacts with explicit boundaries."
            />
            <PersonaCard
              title="Investors / Boards"
              subtitle="Governance oversight"
              body="High-signal evidence surfaces suitable for fiduciary review."
            />
          </div>
        </Grid>
      </Section>

      {/* HOW IT IS EVALUATED */}
      <Section
        title="How evidence is evaluated"
        subtitle="Signals used in review contexts, not performance claims."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader title="Coverage & continuity" />
              <KpiRow label="Window" value="Policy-defined" mono />
              <KpiRow label="Continuity" value="Checkable" mono />
              <KpiRow
                label="Posture"
                value={<StatusBadge tone="neutral" mono>CONTROLLED</StatusBadge>}
              />
            </Card>

            <Card>
              <CardHeader title="Traceability" />
              <KpiRow label="Lineage" value="Explicit" mono />
              <KpiRow label="Integrity" value="Checkable" mono />
              <KpiRow
                label="Status"
                value={<StatusBadge tone="neutral" mono>VERIFIABLE</StatusBadge>}
              />
            </Card>

            <Card>
              <CardHeader title="Outputs" />
              <KpiRow label="Format" value="Artifact-based" mono />
              <KpiRow label="Distribution" value="Controlled" mono />
              <KpiRow
                label="Readiness"
                value={<StatusBadge tone="neutral" mono>REVIEW-READY</StatusBadge>}
              />
            </Card>
          </div>
        </Grid>
      </Section>

      {/* CONVERSION */}
      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div>
                  <div className="text-base font-semibold">
                    Walk through a controlled evidence evaluation.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    We demonstrate evidence artifacts, boundaries, and review posture — never outcomes.
                  </div>
                </div>

                <div className="flex gap-2">
                  <LinkButton href="/contact" variant="secondary">
                    Contact EcoVeraZ
                  </LinkButton>
                  <LinkButton href="/trust-core" variant="primary">
                    Trust Core
                  </LinkButton>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
