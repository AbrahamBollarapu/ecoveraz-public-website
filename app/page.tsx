// app/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { MetricTile } from "@/components/ui/MetricTile";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { KpiRow } from "@/components/ui/KpiRow";

import { ChartCard } from "@/components/charts/ChartCard";
import { OperationalTrendChart } from "@/components/charts/OperationalTrendChart";
import { OPERATIONAL_TREND_24H } from "@/lib/mock-chart";
import { ESGTranslationBlock } from "@/components/blocks/ESGTranslationBlock";

function FlowStep({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm text-text-300 evz-mono">{n}</div>
        <StatusBadge tone="neutral" mono>
          CONTROLLED
        </StatusBadge>
      </div>
      <div className="mt-3 text-base font-semibold text-text-100">{title}</div>
      <div className="mt-2 text-sm text-text-300">{body}</div>
    </Card>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Section size="lg">
        <Grid>
          <div className="md:col-span-7">
            <h1 className="text-4xl font-semibold leading-tight text-text-100 md:text-5xl">
              Operational evidence infrastructure
              <br />
              for external review.
            </h1>

            <p className="mt-4 text-base text-text-200 md:text-lg">
              EcoVeraZ structures operational measurements into review-ready
              evidence artifacts suitable for audit, oversight, and governance
              workflows.
            </p>

            <p className="mt-4 text-sm text-text-300">
              EcoVeraZ does not certify, approve, rate, or determine regulatory
              compliance. All determinations remain external.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
              <LinkButton href="/contact#general" variant="secondary">
                Contact
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-2">
            <div className="grid grid-cols-1 gap-3">
              <MetricTile
                label="Operational coverage"
                value="98.7%"
                note="site-level sample availability"
              />
              <MetricTile
                label="Measurement continuity"
                value="OK"
                note="24h continuity window"
                mono
              />
              <MetricTile
                label="Evidence readiness"
                value="READY"
                note="outputs available for review"
                mono
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Section 1.5 — ESG translation (tight) */}
      <Section
        title="Where EcoVeraZ fits in sustainability and ESG workflows"
        subtitle="Evidence infrastructure for organizations pursuing SDG, Net Zero, and ESG objectives."
        size="sm"
        compact
      >
        <Grid>
          <div className="md:col-span-12">
            <ESGTranslationBlock />
          </div>
        </Grid>
      </Section>

      {/* Section 2 — Flow */}
      <Section
        title="From operations to verifiable outputs"
        subtitle="A controlled evidence flow designed for review, audit, and oversight."
      >
        <Grid className="md:gap-6">
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-5">
            <FlowStep
              n="01"
              title="Capture"
              body="Record operational measurements with timestamps and context."
            />
            <FlowStep
              n="02"
              title="Normalize"
              body="Standardize signals into consistent evidence-ready records."
            />
            <FlowStep
              n="03"
              title="Lineage"
              body="Maintain traceability across transformations and aggregation."
            />
            <FlowStep
              n="04"
              title="Verify"
              body="Expose verification surfaces to validate integrity and continuity."
            />
            <FlowStep
              n="05"
              title="Output"
              body="Generate artifacts suited for reporting, review, and oversight."
            />
          </div>
        </Grid>
      </Section>

      {/* Section 3 — Snapshot */}
      <Section
        title="Platform snapshot"
        subtitle="Representative operational signals and evidence indicators."
      >
        <Grid>
          <div className="md:col-span-8">
            <ChartCard
              title="Operational trend (example)"
              subtitle="Representative signal for evidence continuity."
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
                title="Evidence signals"
                subtitle="High-signal indicators used in review contexts."
              />
              <div className="grid grid-cols-1 gap-3">
                <MetricTile
                  label="Samples (24h)"
                  value="124,892"
                  note="illustrative count"
                  mono
                />
                <MetricTile
                  label="Freshness"
                  value="ACTIVE"
                  note="within policy window"
                  mono
                />
                <MetricTile
                  label="Alert state"
                  value="DEGRADED"
                  note="requires review"
                  mono
                />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 4 — Verification */}
      <Section
        title="Verification signals"
        subtitle="Trust is established through disciplined evidence handling."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            <Card>
              <CardHeader title="Continuity" subtitle="Coverage stability." />
              <KpiRow label="Window" value="24h" mono />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="good" mono>
                    OK
                  </StatusBadge>
                }
              />
            </Card>

            <Card>
              <CardHeader title="Integrity" subtitle="Consistency checks." />
              <KpiRow label="Checks" value="Enabled" mono />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    AVAILABLE
                  </StatusBadge>
                }
              />
            </Card>

            <Card>
              <CardHeader title="Lineage" subtitle="Source traceability." />
              <KpiRow label="Traceability" value="Present" mono />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    VERIFIABLE
                  </StatusBadge>
                }
              />
            </Card>

            <Card>
              <CardHeader
                title="Optional anchoring"
                subtitle="Cryptographic proof when required."
              />
              <KpiRow label="Mode" value="Optional" mono />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    CONFIGURABLE
                  </StatusBadge>
                }
              />
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 5 — Audience */}
      <Section title="Who this serves" subtitle="Role-first framing for accountable teams.">
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            <Card>
              <CardHeader title="Operations / EHS" subtitle="Operational control." />
              <div className="text-sm text-text-300">
                Evidence outputs that withstand internal and external scrutiny.
              </div>
            </Card>

            <Card>
              <CardHeader
                title="ESG / Sustainability"
                subtitle="Governance-grade evidence."
              />
              <div className="text-sm text-text-300">
                Review-ready artifacts suitable for ESG and sustainability workflows.
              </div>
            </Card>

            <Card>
              <CardHeader title="Compliance / Audit" subtitle="Audit-ready signals." />
              <div className="text-sm text-text-300">
                Clear boundaries and defensible evidence outputs.
              </div>
            </Card>

            <Card>
              <CardHeader title="Investors / Boards" subtitle="Oversight without noise." />
              <div className="text-sm text-text-300">
                High-signal evidence for governance conversations.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 6 — Conversion */}
      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text-100">
                    See how EcoVeraZ structures operational evidence for external review.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    Controlled, verifiable, and boundary-driven by design.
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <LinkButton href="/contact#evaluation" variant="secondary">
                    Request Evaluation
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
