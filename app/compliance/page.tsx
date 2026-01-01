// app/compliance/page.tsx
import * as React from "react";
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

function Pill({
  tone = "neutral",
  children,
}: {
  tone?: "good" | "warn" | "bad" | "neutral";
  children: React.ReactNode;
}) {
  return (
    <StatusBadge tone={tone} mono>
      {children}
    </StatusBadge>
  );
}

function ChecklistItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent-400" />
      <div>
        <div className="text-sm font-medium text-text-200">{title}</div>
        <div className="mt-1 text-sm text-text-300 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

function RriRow({
  label,
  badge,
  tone = "good",
}: {
  label: string;
  badge: string;
  tone?: "good" | "warn" | "bad" | "neutral";
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-sm text-text-200">{label}</div>
      <Pill tone={tone}>{badge}</Pill>
    </div>
  );
}

function DefinitionRow({
  term,
  def,
  note,
}: {
  term: string;
  def: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-2 px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-medium text-text-400">{term}</div>
        <Pill>DEFINITION</Pill>
      </div>
      <div className="mt-2 text-sm text-text-200 leading-relaxed">{def}</div>
      {note ? (
        <div className="mt-2 text-xs text-text-400 leading-relaxed">{note}</div>
      ) : null}
    </div>
  );
}

function LadderStep({
  step,
  title,
  body,
  gate,
}: {
  step: string;
  title: string;
  body: string;
  gate: { label: string; badge: string; tone?: "good" | "warn" | "bad" | "neutral" };
}) {
  return (
    <Card>
      <CardHeader
        title={`${step} — ${title}`}
        subtitle={body}
        right={<Pill tone={gate.tone ?? "neutral"}>{gate.badge}</Pill>}
      />
      <div className="text-xs text-text-400 leading-relaxed">
        Gate mapping: <span className="text-text-200">{gate.label}</span>
      </div>
    </Card>
  );
}

export default function CompliancePage() {
  return (
    <>
      {/* Section 1 — Hero / Orientation */}
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <Pill>COMPLIANCE</Pill>
              <Pill>REVIEW LAYER</Pill>
            </div>

            <div className="mt-4 text-3xl font-semibold text-text-100">
              Compliance-aligned workflows built on operational evidence.
            </div>

            <div className="mt-3 text-lg text-text-200">
              EcoVeraZ supports compliance-aligned reporting workflows by structuring operational
              measurements into traceable records and review-ready outputs.
            </div>

            {/* Mobile executive rule: demote disclaimer on mobile only */}
            <div className="mt-3 text-xs text-text-400 md:text-sm md:text-text-300 leading-relaxed">
              Alignment is expressed through evidence handling and outputs — not claims. EcoVeraZ does
              not certify, approve, score, or determine compliance outcomes. Interpretation and
              conclusions remain with external reviewers (audit, risk, regulators).
            </div>

            {/* Mobile executive rule: more breathing room + stack on mobile */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                View resources
              </LinkButton>
            </div>

            {/* Trust Core references (quiet, doctrine-bound) */}
            <div className="mt-4 text-xs text-text-400">
              Trust Core references:{" "}
              <Link href="/trust-core" className="text-text-200 underline underline-offset-4">
                Trust Core
              </Link>
              {" · "}
              <Link href="/ladder" className="text-text-200 underline underline-offset-4">
                Evidence Ladder
              </Link>
              {" · "}
              <Link href="/rri" className="text-text-200 underline underline-offset-4">
                RRI Spec
              </Link>
              {" · "}
              <Link href="/evidence-artifacts" className="text-text-200 underline underline-offset-4">
                Evidence Artifacts
              </Link>
              {" · "}
              <Link href="/walkthroughs" className="text-text-200 underline underline-offset-4">
                Walkthroughs
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid grid-cols-1 gap-3">
              <MetricTile
                label="Evidence posture"
                value="REVIEW-READY"
                note="outputs designed for oversight"
                mono
              />
              <MetricTile
                label="Verification surfaces"
                value="AVAILABLE"
                note="continuity & integrity checks"
                mono
              />
              <MetricTile
                label="Disclosure boundary"
                value="CONTROLLED"
                note="no internals exposed publicly"
                mono
              />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Phase-3 — Regulator Trust Block (MANDATORY) */}
      <Section
        title="Why regulators can trust EcoVeraZ"
        subtitle="Compliance posture is not a claim. It is a verifiable chain: preserved evidence, time-bounded measurements, reproducible artifacts, and receipt-based verification."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Evidence is preserved (not regenerated)"
                subtitle="EcoVeraZ treats operational measurements as records that must remain inspectable."
                right={<Pill>NON-REGENERATIVE</Pill>}
              />
              {/* Mobile executive rule: hide dense checklist on mobile */}
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem
                  title="Preservation posture"
                  body="Evidence artifacts are preserved as review objects; results are not re-created ad hoc for different audiences."
                />
                <ChecklistItem
                  title="Time-bounded measurement"
                  body="Measurements are evaluated within defined windows; gaps and coverage are visible to reviewers."
                />
                <ChecklistItem
                  title="Deterministic artifacts"
                  body="Evidence packs are produced using controlled, repeatable generation to support reproducibility in review contexts."
                />
              </div>

              {/* Mobile summary */}
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Posture" value="PRESERVED" note="non-regenerative handling" mono />
                  <MetricTile label="Windows" value="DEFINED" note="time-bounded measurement" mono />
                  <MetricTile label="Artifacts" value="DETERMINISTIC" note="repeatable generation" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Verification is external and receipt-based"
                subtitle="Reviewers can verify linkage without relying on internal trust assumptions."
                right={<Pill>RECEIPTS</Pill>}
              />
              {/* Mobile executive rule: hide dense checklist on mobile */}
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem
                  title="Reproducible certificates"
                  body="Certificates are tied to preserved evidence references and can be validated against those references."
                />
                <ChecklistItem
                  title="Receipt-based verification"
                  body="Verification uses receipts/identifiers that support independent checking of integrity and lineage."
                />
                <ChecklistItem
                  title="Boundary discipline"
                  body="Public and shared views expose artifacts and posture signals, not proprietary internals or algorithms."
                />
              </div>

              {/* Mobile summary */}
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Certificates" value="REPRODUCIBLE" note="tied to evidence references" mono />
                  <MetricTile label="Verification" value="RECEIPT-BASED" note="independent checking" mono />
                  <MetricTile label="Boundary" value="CONTROLLED" note="no proprietary internals" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>

        <div className="mt-4 rounded-xl border border-border bg-surface-2 px-4 py-3">
          <div className="text-xs font-medium text-text-400">Regulator note</div>
          <div className="mt-1 text-xs text-text-400 leading-relaxed">
            EcoVeraZ is intentionally designed as evidence infrastructure. It preserves what was measured and what was reviewed.
            Compliance conclusions remain with accountable external reviewers.
          </div>
        </div>
      </Section>

      {/* Section — Operating Doctrine (Regulator Anchor) */}
      <Section
        title="Operating principles"
        subtitle="Regulator-safe definitions, boundaries, and responsibilities."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Definitions"
                subtitle="What EcoVeraZ means by evidence and review-ready."
                right={<Pill>CANONICAL</Pill>}
              />

              <div className="mt-2 space-y-3">
                <DefinitionRow
                  term="Evidence"
                  def="Operational measurements and derived artifacts that are traceable to source context, time windows, and governed transformations."
                  note="Evidence is record-structure + lineage. Evidence is not a conclusion."
                />
                <DefinitionRow
                  term="Review-ready"
                  def="A posture where artifacts are complete enough to be reviewed by accountable parties (audit/risk/regulators) with inspectable continuity, integrity signals, and explicit disclosure boundaries."
                  note="Review-ready does not mean compliant. It means inspectable."
                />
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Boundaries & responsibilities"
                subtitle="Who owns interpretation and decisions."
                right={<Pill tone="warn">GUARDRAILS</Pill>}
              />
              {/* Mobile executive rule: hide dense checklist on mobile */}
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem
                  title="EcoVeraZ scope"
                  body="Capture, normalize, trace, package, and expose evidence artifacts and review posture signals."
                />
                <ChecklistItem
                  title="External reviewer scope"
                  body="Interpret evidence, apply applicable rules/standards, and determine compliance or outcomes."
                />
                <ChecklistItem
                  title="Liability boundary"
                  body="EcoVeraZ does not make regulatory determinations and does not represent outcomes as facts."
                />
                <ChecklistItem
                  title="Disclosure boundary"
                  body="Public views expose artifacts and posture, not algorithms, internals, or proprietary schemas."
                />
              </div>

              {/* Mobile summary */}
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="EcoVeraZ scope" value="EVIDENCE" note="capture → package → expose" mono />
                  <MetricTile label="Reviewer scope" value="EXTERNAL" note="interpret + decide" mono />
                  <MetricTile label="Disclosure" value="CONTROLLED" note="no internals exposed" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 2 — Review Readiness Index (RRI) */}
      <Section title="Review readiness" subtitle="A posture indicator for evidence review contexts.">
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="Review Readiness Index"
                subtitle="Review readiness indicates evidence posture, not regulatory approval or compliance determination."
                right={<Pill tone="good">REVIEW-READY</Pill>}
              />
              <div className="mt-4 space-y-3">
                <RriRow label="Continuity" badge="OK" tone="good" />
                <RriRow label="Integrity" badge="ENABLED" tone="good" />
                <RriRow label="Lineage" badge="TRACEABLE" tone="good" />
                <RriRow label="Disclosure boundary" badge="CONTROLLED" tone="good" />
              </div>
              <div className="mt-4 text-xs text-text-400 leading-relaxed">
                RRI is gated by minimum posture across continuity, integrity, lineage, and disclosure boundary.
                No scores. No weighting. No pass/fail compliance outcome.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section — RRI Gates → Evidence Ladder mapping */}
      <Section
        title="RRI gates mapped to the Evidence Ladder"
        subtitle="How review readiness gates align to the evidence lifecycle (investor + regulator backbone)."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <LadderStep
              step="L1"
              title="Capture"
              body="Measurements are ingested with identity + timestamps and basic integrity checks."
              gate={{ label: "Continuity", badge: "CAPTURED", tone: "neutral" }}
            />
            <LadderStep
              step="L2"
              title="Normalize"
              body="Units and fields are stabilized into reviewable datasets with defined windows."
              gate={{ label: "Integrity", badge: "NORMALIZED", tone: "neutral" }}
            />
            <LadderStep
              step="L3"
              title="Lineage"
              body="Artifacts are fingerprinted and transformations are made inspectable."
              gate={{ label: "Lineage", badge: "TRACEABLE", tone: "good" }}
            />
            <LadderStep
              step="L4"
              title="Governance"
              body="Evidence readiness signals and exceptions are recorded for accountable review."
              gate={{ label: "Disclosure boundary", badge: "CONTROLLED", tone: "good" }}
            />
            <LadderStep
              step="L5"
              title="Outputs"
              body="Evidence packs and reports are produced in review-ready formats."
              gate={{ label: "Continuity + Lineage", badge: "ARTIFACTS", tone: "good" }}
            />
            <LadderStep
              step="L6"
              title="Verify"
              body="Receipts and integrity references enable defensible verification surfaces (optional anchoring)."
              gate={{ label: "Integrity + Lineage", badge: "VERIFIABLE", tone: "good" }}
            />
          </div>
        </Grid>

        <div className="mt-4 text-xs text-text-400 leading-relaxed">
          The Evidence Ladder describes artifact maturity. It does not represent regulatory acceptance.
          External reviewers apply jurisdictional requirements and determine conclusions.
        </div>
      </Section>

      {/* Section 3 — What compliance teams need */}
      <Section
        title="What compliance workflows require"
        subtitle="A restrained set of outputs and verification signals suitable for scrutiny."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader
                title="Traceable records"
                subtitle="Operational context preserved across transformations."
                right={<Pill>TRACEABLE</Pill>}
              />
              {/* Mobile executive rule: hide dense checklist on mobile */}
              <div className="space-y-3 hidden md:block">
                <ChecklistItem
                  title="Evidence lineage"
                  body="Outputs can be traced to operational source context and time windows."
                />
                <ChecklistItem
                  title="Controlled transformations"
                  body="Aggregation is handled as a governed step, not an opaque calculation."
                />
              </div>

              {/* Mobile summary */}
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Lineage" value="TRACEABLE" note="source + window + transforms" mono />
                  <MetricTile label="Transforms" value="GOVERNED" note="not opaque calculations" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Verification signals"
                subtitle="Review surfaces that indicate continuity and integrity."
                right={<Pill>VERIFIABLE</Pill>}
              />
              <div className="space-y-3 hidden md:block">
                <ChecklistItem
                  title="Continuity posture"
                  body="Coverage and continuity windows can be inspected for gaps."
                />
                <ChecklistItem
                  title="Integrity posture"
                  body="Consistency checks are available where operationally meaningful."
                />
              </div>

              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Continuity" value="INSPECTABLE" note="gaps visible in window" mono />
                  <MetricTile label="Integrity" value="AVAILABLE" note="checks where meaningful" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Review-ready outputs"
                subtitle="Artifacts structured for oversight, audit, and reporting."
                right={<Pill>ARTIFACT-BASED</Pill>}
              />
              <div className="space-y-3 hidden md:block">
                <ChecklistItem
                  title="Structured outputs"
                  body="Artifacts are produced in formats suited for review contexts."
                />
                <ChecklistItem
                  title="Controlled distribution"
                  body="Outputs are shareable without exposing internal schemas or logic."
                />
              </div>

              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Outputs" value="STRUCTURED" note="review-friendly formats" mono />
                  <MetricTile label="Distribution" value="CONTROLLED" note="no internals exposed" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section — Reviewer workflow */}
      <Section
        title="How reviewers use EcoVeraZ outputs"
        subtitle="A regulator-style flow: what is inspected, what is concluded, and by whom."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader title="1) Inspect posture" subtitle="Is evidence review-ready?" right={<Pill>RRI</Pill>} />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem title="Continuity" body="Are there gaps in the declared window?" />
                <ChecklistItem title="Integrity" body="Are checks enabled and consistent?" />
                <ChecklistItem title="Boundary" body="Is disclosure controlled for the context?" />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Continuity" value="CHECK" note="gaps visible" mono />
                  <MetricTile label="Integrity" value="CHECK" note="checks enabled" mono />
                  <MetricTile label="Boundary" value="CHECK" note="disclosure controlled" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="2) Review artifacts" subtitle="Open evidence packs and reports." right={<Pill>PACKS</Pill>} />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem title="Artifacts" body="Use structured outputs (CSV/JSON/report) with references." />
                <ChecklistItem title="Lineage" body="Trace artifacts to sources, windows, and transforms." />
                <ChecklistItem title="Exceptions" body="Read exceptions and operator notes where present." />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Artifacts" value="OPEN" note="CSV/JSON/report" mono />
                  <MetricTile label="Lineage" value="TRACE" note="sources + windows" mono />
                  <MetricTile label="Exceptions" value="READ" note="notes preserved" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="3) Conclude externally" subtitle="Apply the rulebook outside EcoVeraZ." right={<Pill tone="warn">EXTERNAL</Pill>} />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem title="Standards" body="Reviewer applies jurisdictional standards and thresholds." />
                <ChecklistItem title="Judgement" body="Reviewer determines compliance, not the platform." />
                <ChecklistItem title="Record" body="EcoVeraZ preserves what was reviewed and referenced." />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Standards" value="APPLIED" note="jurisdictional rules" mono />
                  <MetricTile label="Decision" value="EXTERNAL" note="reviewer owns outcome" mono />
                  <MetricTile label="Record" value="PRESERVED" note="what was reviewed" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>

        <div className="mt-4 rounded-xl border border-border bg-surface-2 px-4 py-3">
          <div className="text-xs font-medium text-text-400">Regulator note</div>
          <div className="mt-1 text-xs text-text-400 leading-relaxed">
            EcoVeraZ is intentionally designed as evidence infrastructure. Conclusions remain external so that
            governance, audit, and regulation retain authority.
          </div>
        </div>
      </Section>

      {/* Section 4 — Platform snapshot (compliance lens) */}
      <Section
        title="Compliance snapshot"
        subtitle="Representative operational signal and the verification posture used in review contexts."
      >
        <Grid>
          {/* Desktop/Tablet chart: hide on mobile (executive summary rule) */}
          <div className="hidden md:block md:col-span-8">
            <ChartCard
              title="Operational continuity signal (example)"
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
                title="Operational continuity (summary)"
                subtitle="Executive view — full trend available on tablet/desktop."
                right={<Pill>24H</Pill>}
              />
              <div className="grid grid-cols-1 gap-3">
                <MetricTile label="Continuity" value="OK" note="window coverage check" mono />
                <MetricTile label="Integrity checks" value="ENABLED" note="consistency validation" mono />
                <MetricTile label="Output readiness" value="READY" note="artifacts available" mono />
              </div>
            </Card>
          </div>

          <div className="md:col-span-4">
            <Card>
              <CardHeader
                title="Review posture"
                subtitle="High-signal indicators used in governance and audit review."
              />
              <div className="mt-2 grid grid-cols-1 gap-3">
                <MetricTile label="Continuity" value="OK" note="window coverage check" mono />
                <MetricTile label="Integrity checks" value="ENABLED" note="consistency validation" mono />
                <MetricTile label="Output readiness" value="READY" note="artifacts available for review" mono />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 5 — Alignment workflows (careful framing) */}
      <Section
        title="Alignment workflows"
        subtitle="Deployment-dependent alignment profiles for reporting workflows."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader
                title="Disclosure workflows"
                subtitle="Structure outputs for internal review and reporting cycles."
                right={<Pill>SUPPORTED</Pill>}
              />
              <KpiRow label="Posture" value="Review-layer only" mono />
              <KpiRow label="Internals" value={<Pill>NOT EXPOSED</Pill>} />
              <div className="mt-3 text-sm text-text-300 leading-relaxed">
                EcoVeraZ focuses on evidence handling and review-ready outputs. It does not imply
                certification, regulatory approval, or compliance determination.
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Audit readiness"
                subtitle="Review artifacts and verification signals for oversight."
                right={<Pill>REVIEW-READY</Pill>}
              />
              <KpiRow label="Artifacts" value="Structured" mono />
              <KpiRow label="Verification" value="Available" mono />
              <div className="mt-3 text-sm text-text-300 leading-relaxed">
                Audit-friendly posture depends on deployment scope and configured outputs.
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Optional anchoring"
                subtitle="Cryptographic anchoring when required."
                right={<Pill>OPTIONAL</Pill>}
              />
              <KpiRow label="Mode" value="Configurable" mono />
              <KpiRow label="Use" value="When required" mono />
              <div className="mt-3 text-sm text-text-300 leading-relaxed">
                Anchoring is optional and applied only in workflows that require tamper-evident verification.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section — Claims firewall */}
      <Section
        title="Claims firewall"
        subtitle="Hard language boundaries to prevent outcome drift in regulated contexts."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Permitted statements"
                subtitle="Evidence and posture statements only."
                right={<Pill tone="good">ALLOWED</Pill>}
              />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem title="We provide evidence artifacts" body="Structured outputs designed for review contexts." />
                <ChecklistItem title="We expose review posture" body="Continuity/integrity/lineage signals for oversight." />
                <ChecklistItem title="We preserve lineage" body="Traceability to source context and time windows." />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Artifacts" value="PROVIDED" note="review contexts" mono />
                  <MetricTile label="Posture" value="EXPOSED" note="signals for oversight" mono />
                  <MetricTile label="Lineage" value="PRESERVED" note="traceability retained" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Prohibited statements"
                subtitle="Outcomes, approvals, and compliance claims."
                right={<Pill tone="bad">FORBIDDEN</Pill>}
              />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem title="No compliance determination" body="We do not decide pass/fail or regulatory acceptance." />
                <ChecklistItem title="No certification or approval" body="We do not certify, approve, or validate outcomes." />
                <ChecklistItem title="No guarantee language" body="We do not promise results, safety, or regulatory outcomes." />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Compliance" value="NO DETERMINATION" note="external only" mono />
                  <MetricTile label="Approval" value="NO CERTIFY" note="no approvals" mono />
                  <MetricTile label="Guarantees" value="NONE" note="no outcome guarantees" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 6 — Guardrails */}
      <Section
        title="Public-safe by design"
        subtitle="Clear boundaries to protect sensitive implementation details."
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Outputs and evidence posture"
                subtitle="What we can show publicly."
                right={<Pill tone="good">ALLOWED</Pill>}
              />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem
                  title="Review-ready artifacts"
                  body="Structured outputs that can be assessed by accountable teams."
                />
                <ChecklistItem
                  title="Verification posture"
                  body="Continuity, integrity, and lineage signals at the review layer."
                />
                <ChecklistItem
                  title="Receipts and references"
                  body="Identifiers that allow verification of artifact linkage and integrity."
                />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Artifacts" value="REVIEW-READY" note="assessable outputs" mono />
                  <MetricTile label="Signals" value="AVAILABLE" note="continuity/integrity/lineage" mono />
                  <MetricTile label="Receipts" value="REFERENCES" note="linkage + integrity" mono />
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Internals and schemas"
                subtitle="What we do not expose publicly."
                right={<Pill tone="bad">NEVER PUBLIC</Pill>}
              />
              <div className="mt-2 space-y-3 hidden md:block">
                <ChecklistItem
                  title="Algorithms and implementation logic"
                  body="No pipeline logic, scoring logic, or internal computation is disclosed publicly."
                />
                <ChecklistItem
                  title="Data schemas and system internals"
                  body="No private schemas, internal models, or system architecture details are published."
                />
                <ChecklistItem
                  title="Sensitive operational data"
                  body="No raw operational data is exposed publicly unless explicitly authorized in the deployment."
                />
              </div>
              <div className="mt-2 md:hidden">
                <div className="grid grid-cols-1 gap-3">
                  <MetricTile label="Algorithms" value="NOT PUBLIC" note="no internal logic" mono />
                  <MetricTile label="Schemas" value="NOT PUBLIC" note="no internals" mono />
                  <MetricTile label="Raw data" value="CONTROLLED" note="authorized only" mono />
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 7 — Conversion */}
      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text-100">
                    Walk through compliance posture in a controlled demo.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    We focus on evidence outputs, verification surfaces, and review readiness — not internals.
                  </div>
                </div>

                {/* Mobile: stack buttons */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
                  <LinkButton href="/contact" variant="secondary">
                    Contact EcoVeraZ
                  </LinkButton>
                  <LinkButton href="/trust-core" variant="primary">
                    Trust Core
                  </LinkButton>
                </div>
              </div>

              <div className="mt-4 text-xs text-text-400 leading-relaxed">
                Reminder: Evidence ≠ outcomes. EcoVeraZ provides evidence infrastructure. External reviewers determine conclusions.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
