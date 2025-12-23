// app/platform/page.tsx
import Link from "next/link";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { MetricTile } from "@/components/ui/MetricTile";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { KpiRow } from "@/components/ui/KpiRow";

import { ChartCard } from "@/components/charts/ChartCard";
import { OperationalTrendChart } from "@/components/charts/OperationalTrendChart";
import { OPERATIONAL_TREND_24H } from "@/lib/mock-chart";

function ModuleCard({
  title,
  body,
  href,
  badge,
}: {
  title: string;
  body: string;
  href: string;
  badge?: string;
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={body}
        right={
          badge ? (
            <StatusBadge tone="neutral" mono>
              {badge}
            </StatusBadge>
          ) : null
        }
      />

      <div className="mt-3">
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-accent-400 hover:text-accent-500 transition-colors"
        >
          View module <span aria-hidden>→</span>
        </Link>
      </div>
    </Card>
  );
}

export default function PlatformPage() {
  return (
    <>
      {/* Top framing */}
      <Section size="lg">
        <Grid>
          <div className="md:col-span-7">
            <div className="text-3xl font-semibold text-text-100">
              Platform overview
            </div>

            <div className="mt-4 text-lg text-text-200">
              EcoVeraZ is an operational evidence infrastructure that converts
              operational measurements into traceable records and verifiable
              outputs.
            </div>

            <div className="mt-4 text-sm text-text-300">
              Designed for review contexts: oversight, audit readiness, and
              defensible reporting workflows.
            </div>

            <div className="mt-3 text-xs text-text-400">
              Boundary: EcoVeraZ does not certify, approve, rate, or determine
              regulatory compliance. Determinations remain external.
            </div>

            <div className="mt-6 flex items-center gap-2">
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                View resources
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              <MetricTile
                label="Evidence lineage"
                value="Traceable"
                note="controlled transformations"
                mono
              />
              <MetricTile
                label="Verification surfaces"
                value="Available"
                note="review-ready endpoints"
                mono
              />
              <MetricTile
                label="Outputs"
                value="Artifact-based"
                note="structured for oversight"
                mono
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Evidence flow summary */}
      <Section
        title="Evidence flow (high level)"
        subtitle="A disciplined chain from operations to review-ready outputs."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            <Card>
              <CardHeader
                title="Capture"
                subtitle="Operational measurements recorded with context."
              />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    CONTROLLED
                  </StatusBadge>
                }
              />
              <KpiRow label="Signal" value="Timestamped records" mono />
            </Card>

            <Card>
              <CardHeader
                title="Lineage"
                subtitle="Traceability across transformations and aggregation."
              />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    VERIFIABLE
                  </StatusBadge>
                }
              />
              <KpiRow label="Signal" value="Evidence lineage" mono />
            </Card>

            <Card>
              <CardHeader
                title="Verify"
                subtitle="Verification surfaces used in review contexts."
              />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    AVAILABLE
                  </StatusBadge>
                }
              />
              <KpiRow label="Signal" value="Continuity & integrity" mono />
            </Card>

            <Card>
              <CardHeader
                title="Output"
                subtitle="Artifacts suited for reporting and oversight."
              />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    READY
                  </StatusBadge>
                }
              />
              <KpiRow label="Signal" value="Structured outputs" mono />
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Platform snapshot */}
      <Section
        title="Platform snapshot"
        subtitle="Representative operational signal and evidence indicators."
      >
        <Grid>
          <div className="md:col-span-8">
            <ChartCard
              title="Operational trend (example)"
              subtitle="Representative signal for continuity review."
              windowLabel="24H"
              note="Threshold bands indicate acceptable operational range."
            >
              <OperationalTrendChart
                data={OPERATIONAL_TREND_24H}
                thresholdLow={68}
                thresholdHigh={80}
              />
            </ChartCard>
          </div>

          <div className="md:col-span-4">
            <Card>
              <CardHeader
                title="Evidence indicators"
                subtitle="High-signal flags used in governance and review."
              />
              <div className="grid grid-cols-1 gap-3">
                <MetricTile
                  label="Continuity"
                  value="OK"
                  note="window coverage check"
                  mono
                />
                <MetricTile
                  label="Integrity checks"
                  value="Enabled"
                  note="consistency validation"
                  mono
                />
                <MetricTile
                  label="Optional anchoring"
                  value="Configurable"
                  note="cryptographic anchoring when required"
                  mono
                />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Modules */}
      <Section
        title="Modules"
        subtitle="Composable capabilities — presented at the outcome layer."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <ModuleCard
              title="Evidence lineage"
              body="Trace outputs to operational source context."
              href="/modules/evidence-lineage"
              badge="MODULE"
            />
            <ModuleCard
              title="Verification endpoints"
              body="Review surfaces for continuity and integrity."
              href="/modules/verification-endpoints"
              badge="MODULE"
            />
            <ModuleCard
              title="Artifact outputs"
              body="Structured artifacts suited for oversight."
              href="/modules/artifact-outputs"
              badge="MODULE"
            />
            <ModuleCard
              title="Governance signals"
              body="High-signal indicators for accountable teams."
              href="/modules/governance-signals"
              badge="MODULE"
            />
            <ModuleCard
              title="Alignment workflows"
              body="Support ESG-aligned reporting workflows (deployment dependent)."
              href="/modules/alignment-workflows"
              badge="MODULE"
            />
            <ModuleCard
              title="Optional anchoring"
              body="Cryptographic anchoring when required."
              href="/modules/optional-anchoring"
              badge="MODULE"
            />
          </div>
        </Grid>
      </Section>

      {/* Where it fits */}
      <Section
        title="Where EcoVeraZ fits"
        subtitle="Built to support operations-first oversight without exposing internals publicly."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Operations-first"
                subtitle="Evidence generated from operational measurements, then consumed downstream."
              />
              <div className="text-sm text-text-300">
                The platform is designed so that operations remain the source of
                truth, while review functions consume verifiable outputs.
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Downstream alignment"
                subtitle="Supports ESG-aligned reporting workflows after operational context is established."
              />
              <div className="text-sm text-text-300">
                Alignment is expressed through outputs and evidence handling. It
                does not imply certification or regulatory approval.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Conversion band */}
      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text-100">
                    Walk through the platform in a controlled demo.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    We focus on evidence outputs, verification surfaces, and how
                    they behave under scrutiny.
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <LinkButton href="/contact#general" variant="secondary">
                    Email EcoVeraZ
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
