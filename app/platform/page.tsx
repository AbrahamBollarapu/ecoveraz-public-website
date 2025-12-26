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

function LayerCard({
  label,
  title,
  trustGap,
  bullets,
}: {
  label: string;
  title: string;
  trustGap: string;
  bullets: string[];
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="text-sm text-text-300 evz-mono">{label}</div>
        <StatusBadge tone="neutral" mono>
          LAYER
        </StatusBadge>
      </div>

      <div className="mt-3 text-base font-semibold text-text-100">{title}</div>

      <div className="mt-2 text-sm text-text-300">
        <span className="text-text-200">Eliminates trust gap:</span> {trustGap}
      </div>

      {/* Mobile executive rule: hide dense bullet lists; show from tablet up */}
      <ul className="mt-3 hidden list-disc gap-1 pl-5 text-sm text-text-300 sm:grid">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}

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
      {/* Hero */}
      <Section size="lg">
        <Grid>
          <div className="md:col-span-7">
            <div className="text-3xl font-semibold text-text-100">
              Platform overview
            </div>

            <div className="mt-4 text-lg text-text-200">
              EcoVeraZ is an operational evidence infrastructure that turns
              measurements into preserved evidence, governance-ready signals, and
              externally verifiable outputs.
            </div>

            <div className="mt-4 text-sm text-text-300">
              Built for review contexts: oversight, audit readiness, and
              defensible reporting workflows.
            </div>

            {/* Mobile executive rule: demote boundary note on mobile only */}
            <div className="mt-3 text-xs text-text-400 md:text-sm md:text-text-300">
              Boundary: EcoVeraZ does not certify, approve, rate, or determine
              regulatory compliance. Determinations remain external.
            </div>

            {/* Mobile executive rule: more breathing room + stack CTAs on mobile */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
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
                label="Evidence posture"
                value="Preserved"
                note="no re-generation by design"
                mono
              />
              <MetricTile
                label="Review readiness"
                value="GATED"
                note="rules before outputs"
                mono
              />
              <MetricTile
                label="Verification"
                value="Receipt-based"
                note="external verification surfaces"
                mono
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Phase-2 — Layer reframing */}
      <Section
        title="Platform layers"
        subtitle="From measurement to certificate — without trust gaps."
      >
        <Grid>
          {/* Mobile: 1 col; Tablet: 2 cols; Desktop: 4 cols */}
          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <LayerCard
              label="01"
              title="Instrumentation"
              trustGap="Unverifiable reality capture"
              bullets={[
                "Deployed sensors & devices capture physical conditions",
                "Time-bound measurement windows",
                "Context + identity for each measurement stream",
              ]}
            />
            <LayerCard
              label="02"
              title="Evidence"
              trustGap="Evidence that cannot be reproduced or traced"
              bullets={[
                "Raw + derived data handled as evidence artifacts",
                "Deterministic generation for repeatability",
                "Cryptographic fingerprints for integrity checks",
              ]}
            />
            <LayerCard
              label="03"
              title="Governance"
              trustGap="Outputs produced before review rules are satisfied"
              bullets={[
                "Completeness rules and review gates",
                "Continuity + integrity signals surfaced for oversight",
                "Optional anchoring when required (receipt issuance)",
              ]}
            />
            <LayerCard
              label="04"
              title="Verification"
              trustGap="Claims that cannot be independently verified"
              bullets={[
                "Certificates tied to preserved evidence (outcome, not input)",
                "Receipts enable external verification",
                "Public verification surfaces for trust transfer",
              ]}
            />
          </div>
        </Grid>
      </Section>

      {/* Evidence layer — snapshot */}
      <Section
        title="Evidence snapshot"
        subtitle="Representative operational signal and evidence indicators."
      >
        <Grid>
          {/* Desktop/Tablet chart: hide on mobile (executive summary rule) */}
          <div className="hidden md:block md:col-span-8">
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

          {/* Mobile summary card instead of chart */}
          <div className="md:hidden">
            <Card>
              <CardHeader
                title="Operational trend (summary)"
                subtitle="Executive view — full trend available on tablet/desktop."
              />
              <div className="grid grid-cols-1 gap-3">
                <MetricTile
                  label="Window"
                  value="24H"
                  note="representative trend window"
                  mono
                />
                <MetricTile
                  label="Continuity"
                  value="OK"
                  note="coverage stability indicator"
                  mono
                />
                <MetricTile
                  label="Policy bands"
                  value="ACTIVE"
                  note="threshold bands applied"
                  mono
                />
              </div>
            </Card>
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
                  note="receipt mode when required"
                  mono
                />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Governance layer — enforcement posture */}
      <Section
        title="Governance"
        subtitle="Rules before outputs. Oversight before claims."
      >
        <Grid>
          {/* Mobile: 1 col; Tablet: 2 cols; Desktop: 4 cols */}
          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader
                title="Review readiness"
                subtitle="Completeness gates applied before outputs."
              />
              <KpiRow label="Mode" value="Gated" mono />
              <KpiRow
                label="Posture"
                value={
                  <StatusBadge tone="neutral" mono>
                    CONTROLLED
                  </StatusBadge>
                }
              />
            </Card>

            <Card>
              <CardHeader
                title="Continuity"
                subtitle="Coverage stability within defined windows."
              />
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
              <CardHeader
                title="Integrity"
                subtitle="Consistency checks across evidence handling."
              />
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
              <CardHeader
                title="Receipts"
                subtitle="Receipt surfaces enable independent verification."
              />
              <KpiRow label="Posture" value="Receipt-based" mono />
              <KpiRow
                label="Status"
                value={
                  <StatusBadge tone="neutral" mono>
                    VERIFIABLE
                  </StatusBadge>
                }
              />
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Modules */}
      <Section title="Modules" subtitle="Composable capabilities grouped by layer.">
        <Grid>
          {/* Mobile: 1 col; Tablet: 2 cols; Desktop: 3 cols */}
          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <ModuleCard
              title="Evidence lineage"
              body="Traceability across transformations and aggregation."
              href="/modules/evidence-lineage"
              badge="EVIDENCE"
            />
            <ModuleCard
              title="Verification endpoints"
              body="Receipt surfaces used in review and external verification contexts."
              href="/modules/verification-endpoints"
              badge="VERIFICATION"
            />
            <ModuleCard
              title="Artifact outputs"
              body="Deterministic evidence artifacts suitable for review."
              href="/modules/artifact-outputs"
              badge="EVIDENCE"
            />
            <ModuleCard
              title="Governance signals"
              body="Readiness gates and oversight indicators."
              href="/modules/governance-signals"
              badge="GOVERNANCE"
            />
            <ModuleCard
              title="Alignment workflows"
              body="Downstream ESG-aligned workflows expressed through outputs and evidence handling."
              href="/modules/alignment-workflows"
              badge="VERIFICATION"
            />
            <ModuleCard
              title="Optional anchoring"
              body="Cryptographic proof when required by policy or counterparties."
              href="/modules/optional-anchoring"
              badge="GOVERNANCE"
            />
          </div>
        </Grid>
      </Section>

      {/* Where EcoVeraZ fits */}
      <Section
        title="Where EcoVeraZ fits"
        subtitle="Operations first, then evidence, then governance, then verification."
      >
        <Grid>
          {/* Mobile: 1 col; Tablet+: 2 cols */}
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Operations-first"
                subtitle="Measurement is the source of truth."
              />
              <div className="text-sm text-text-300">
                EcoVeraZ starts with time-bound operational measurements and
                preserves them as evidence, instead of beginning with claims or
                reporting outputs.
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Downstream alignment"
                subtitle="Supports ESG-aligned workflows after operational context is established."
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
                    Explore the measurement → evidence → verification chain.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    Layered trust by design. External determinations remain
                    external.
                  </div>
                </div>

                {/* Mobile: stack buttons for ergonomics */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
                  <LinkButton href="mailto:contact@ecoveraz.com" variant="secondary">
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
