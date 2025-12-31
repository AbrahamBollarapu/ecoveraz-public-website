﻿// app/page.tsx
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

/**
 * Inline SVG icons (no new deps, avoids cyclical install issues).
 * Keep icons muted + small for scannability.
 */
function Icon({ kind }: { kind: "sensor" | "db" | "file" | "shield" | "badge" }) {
  const common = "h-4 w-4 text-text-300";
  switch (kind) {
    case "sensor":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 20a8 8 0 1 0-8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 16a4 4 0 1 0-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 12h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    case "db":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "file":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3 20 7v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V7l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "badge":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l2.1 4.3L19 8l-3.5 3.4.8 4.8L12 14.7 7.7 16.2l.8-4.8L5 8l4.9-.7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8 17l-1 4 5-3 5 3-1-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function PipelineDiagram() {
  // Simple, fast, and readable. Works on mobile & desktop.
  return (
    <div className="mb-4 rounded-2xl border border-border bg-surface-2 p-4">
      <div className="text-xs text-text-300 evz-mono">PIPELINE (AT A GLANCE)</div>
      <div className="mt-2">
        <svg viewBox="0 0 900 90" className="h-[72px] w-full" role="img" aria-label="EcoVeraZ pipeline diagram">
          <line x1="60" y1="45" x2="840" y2="45" stroke="currentColor" strokeWidth="2" opacity="0.25" />
          {[
            { x: 90, label: "Measure" },
            { x: 270, label: "Store" },
            { x: 450, label: "Prepare files" },
            { x: 630, label: "Review gates" },
            { x: 810, label: "Verify" },
          ].map((n) => (
            <g key={n.x}>
              <circle cx={n.x} cy="45" r="10" fill="currentColor" opacity="0.22" />
              <circle cx={n.x} cy="45" r="5" fill="currentColor" opacity="0.65" />
              <text x={n.x} y="78" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.75">
                {n.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-2 text-sm text-text-300">
        Why it matters: reviewers can follow the same path every time — no last-minute reconstruction.
      </div>
    </div>
  );
}

function QuoteBox() {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-text-300" aria-hidden="true">
          “
        </div>
        <div>
          <div className="text-sm font-semibold text-text-100">Customer outcome (typical use case)</div>
          <div className="mt-2 text-sm text-text-300">
            “Before EcoVeraZ, we assembled ESG proof from spreadsheets at the last minute. Now we generate
            audit-ready files with a clear data trail — so reviews are faster and less stressful.”
          </div>
          <div className="mt-2 text-xs text-text-400">
            Example phrasing (no customer name). Replace later with a real quote when available.
          </div>
        </div>
      </div>
    </Card>
  );
}

function MobileSparkline() {
  // Lightweight, no chart dependency. Keeps mobile from feeling “stripped down”.
  return (
    <svg viewBox="0 0 120 32" className="h-8 w-full" aria-label="Trend sparkline" role="img">
      <path
        d="M2 24 L14 20 L26 22 L38 16 L50 18 L62 10 L74 14 L86 8 L98 12 L118 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlowStep({
  n,
  title,
  body,
  icon,
}: {
  n: string;
  title: string;
  body: string;
  icon: "sensor" | "db" | "file" | "shield" | "badge";
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="text-sm text-text-300 evz-mono">{n}</div>
          <Icon kind={icon} />
        </div>
        <StatusBadge tone="neutral" mono>
          CONTROLLED
        </StatusBadge>
      </div>
      <div className="mt-3 text-base font-semibold text-text-100">{title}</div>
      <div className="mt-2 text-sm text-text-300">{body}</div>
    </Card>
  );
}

function StartHereCard({
  title,
  subtitle,
  bullets,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} right={<StatusBadge tone="neutral" mono>START</StatusBadge>} />
      <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-4">
        <LinkButton href={ctaHref} variant="secondary">
          {ctaLabel}
        </LinkButton>
      </div>
    </Card>
  );
}

function ProofSnippet({ title, body }: { title: string; body: string }) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle="Illustrative format (redacted). Used to explain what reviewers can inspect."
        right={<StatusBadge tone="neutral" mono>PROOF</StatusBadge>}
      />
      <pre className="mt-3 overflow-x-auto rounded-xl border border-border bg-surface-2 p-3 text-xs text-text-300 evz-mono leading-relaxed">
        {body}
      </pre>
      <div className="mt-2 text-xs text-text-400">
        Note: examples show structure, not customer data. EcoVeraZ does not certify or determine outcomes.
      </div>
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
            {/* Plain-language tagline (above headline) */}
            <div className="text-sm text-text-300 md:text-base">
              We turn your operational data into trusted ESG proof — so you can pass audits with confidence.
            </div>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-text-100 md:text-5xl">
              Turning real-world data into
              <br />
              audit-ready ESG evidence.
            </h1>

            <p className="mt-4 text-base text-text-200 md:text-lg">
              EcoVeraZ helps organizations turn everyday environmental and operational data into evidence that can be
              reviewed by auditors, regulators, and boards — not just shown on a dashboard.
            </p>

            <div className="mt-3 text-sm text-text-300">Sensors → Analytics → Audit-ready files → Trust</div>

            {/* Innovation note (1 sentence only) */}
            <div className="mt-2 text-sm text-text-300">
              Built on modern data integrity principles — scalable, traceable, and reviewer-friendly.
            </div>

            {/* NEW: fast-track summary for Netlify audiences */}
            <div className="mt-4 rounded-xl border border-border bg-surface-2 p-4">
              <div className="text-xs text-text-300 evz-mono">30-SECOND SUMMARY</div>
              <div className="mt-2 text-sm text-text-300 leading-relaxed">
                <span className="text-text-200 font-medium">You measure.</span> EcoVeraZ preserves the data,
                packages review-ready files, and applies readiness gates — so reviewers can trace numbers back to
                sources without last-minute reconstruction.
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <MetricTile label="What you get" value="Audit-ready files" note="structured for inspection" mono />
                <MetricTile label="What it avoids" value="Spreadsheet scrambles" note="less manual compilation" mono />
                <MetricTile label="How it stays safe" value="Clear boundaries" note="no certification / no outcomes" mono />
              </div>
            </div>

            {/* Real-world anchor (1 sentence) */}
            <p className="mt-4 text-sm text-text-300">
              Example: a building’s energy use, office air quality, or equipment activity — captured over time,
              organized month-by-month, and ready when a reviewer asks “show me the proof.”
            </p>

            {/* Disclaimer (kept, simplified) */}
            <p className="mt-4 text-xs text-text-400 md:text-sm md:text-text-300">
              EcoVeraZ does not certify, approve, or decide regulatory compliance. Independent reviewers and authorities
              make all final determinations.
            </p>

            {/* CTA labels updated, routes unchanged */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              <LinkButton href="/platform" variant="primary">
                Platform overview
              </LinkButton>

              {/* NEW: Dedicated value page (commercial, inviting) */}
              <LinkButton href="/what-you-get" variant="secondary">
                What you get
              </LinkButton>

              <LinkButton href="/resources" variant="secondary">
                Review references
              </LinkButton>
              <LinkButton href="/contact#evaluation" variant="secondary">
                Request evaluation
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-2">
            <div className="grid grid-cols-1 gap-3">
              <MetricTile label="Operational coverage" value="98.7%" note="example site-level availability" />
              <MetricTile label="Measurement continuity" value="OK" note="example 24h continuity check" mono />
              <MetricTile label="Evidence readiness" value="READY" note="example outputs available for review" mono />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Section 1.25 — Trust strip (proof cues, no risky claims) */}
      <Section size="sm" compact>
        <Grid>
          <div className="md:col-span-12">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
              <MetricTile label="Audit-ready files" value="ON" note="structured files for inspection" mono />
              <MetricTile label="Data trail" value="PRESENT" note="source → output traceability" mono />
              <MetricTile label="Time windows" value="CONTROLLED" note="clear month / period boundaries" mono />
              <MetricTile label="Optional proof" value="AVAILABLE" note="tamper-proof mode when needed" mono />
            </div>
          </div>
        </Grid>
      </Section>

      {/* NEW — Start here (Netlify-style guided onboarding) */}
      <Section
        title="Start here"
        subtitle="Pick the path that matches your role. Each path is short, specific, and review-safe."
        size="sm"
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <StartHereCard
              title="Operations / EHS"
              subtitle="Turn day-to-day conditions into evidence you can defend."
              bullets={[
                "Measure operational reality continuously",
                "Avoid last-minute manual compilation",
                "Surface high-signal readiness indicators",
              ]}
              ctaHref="/platform"
              ctaLabel="See Platform flow"
            />
            <StartHereCard
              title="ESG / Sustainability / Finance"
              subtitle="Move from reporting to evidence that stands up to review."
              bullets={[
                "Use clear month / window boundaries",
                "Package files for inspection and follow-ups",
                "Reduce review friction and back-and-forth",
              ]}
              ctaHref="/resources"
              ctaLabel="See review references"
            />
            <StartHereCard
              title="Compliance / Audit"
              subtitle="Understand Trust Core and the gates that prevent ambiguous evidence."
              bullets={[
                "Trust Core defines the boundaries (no certification)",
                "RRI gates keep evidence review-ready",
                "Verification surfaces support independent checks",
              ]}
              ctaHref="/trust-core"
              ctaLabel="Open Trust Core"
            />
            <StartHereCard
              title="Investors / Boards"
              subtitle="See the defensibility posture and why restraint is a feature."
              bullets={[
                "Evidence posture, not outcome claims",
                "Repeatable review flows across sites",
                "Versioned doctrine to prevent drift",
              ]}
              ctaHref="/platform"
              ctaLabel="Platform + governance view"
            />
          </div>
        </Grid>
      </Section>

      {/* Section 1.5 — Authority (premium + dark) */}
      <Section size="sm" compact>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="rounded-2xl bg-gray-900 p-6 text-white border-l-4 border-emerald-400">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs text-white/70 evz-mono">OUR ESG EVIDENCE PRINCIPLE</div>
                  <StatusBadge tone="neutral" mono>
                    AUTHORITY
                  </StatusBadge>
                </div>

                <div className="mt-3 text-xl font-semibold md:text-2xl">
                  ESG data is not enough. Evidence must stand up to review.
                </div>

                <div className="mt-3 text-sm text-white/80 md:text-base">
                  EcoVeraZ treats ESG evidence like accounting records: it must come from real sources, be time-stamped
                  and traceable, and be packaged so an external reviewer can trust it.
                </div>

                <div className="mt-3 text-sm text-white/80">
                  Dashboards inform. Reports communicate.{" "}
                  <span className="font-medium text-white">Evidence defends claims.</span>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* NEW — Proof strip (Netlify people want “show me something real”) */}
      <Section
        title="What reviewers can actually inspect"
        subtitle="Examples of evidence structure (redacted). These formats make reviews faster and calmer."
        size="sm"
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ProofSnippet
              title="Evidence pack structure"
              body={`EVIDENCE_PACK/
  manifest.json
  SHA256SUMS.txt
  window.json
  raw/
    iaq_samples_2025-12.csv
    energy_samples_2025-12.csv
  derived/
    summaries_2025-12.json
  notes/
    disclosures.md`}
            />
            <ProofSnippet
              title="Manifest (excerpt)"
              body={`{
  "site_id": "SITE-001",
  "window": { "start": "2025-12-01T00:00:00Z", "end": "2025-12-31T23:59:59Z" },
  "sources": ["iaq_sensor_node_A", "energy_node_B"],
  "artifacts": [
    { "path": "raw/iaq_samples_2025-12.csv", "sha256": "…redacted…" },
    { "path": "derived/summaries_2025-12.json", "sha256": "…redacted…" }
  ]
}`}
            />
            <ProofSnippet
              title="RRI gate result (illustrative)"
              body={`RRI (PASS/FAIL) — posture only

Continuity: PASS
Integrity:  PASS
Lineage:    PASS
Disclosure: PASS

Note: RRI is not scoring and does not imply compliance.`}
            />
          </div>
        </Grid>
      </Section>

      {/* Section 1.75 — ESG translation */}
      <Section
        title="Where EcoVeraZ fits in sustainability and ESG workflows"
        subtitle="Why it matters: this is how day-to-day measurements become ESG outcomes you can defend."
        size="sm"
        compact
      >
        <Grid>
          <div className="md:col-span-12">
            <ESGTranslationBlock />
          </div>
        </Grid>
      </Section>

      {/* Section 2 — System Journey (Phase-1 LOCK) */}
      <Section
        title="How EcoVeraZ turns reality into proof"
        subtitle="Why it matters: audits should be repeatable and calm — not last-minute panic."
      >
        <Grid className="md:gap-6">
          <div className="md:col-span-12">
            <PipelineDiagram />
          </div>

          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
            <FlowStep
              n="01"
              icon="sensor"
              title="Sensors & systems"
              body="Capture real conditions and operational signals from devices and sources you trust."
            />
            <FlowStep
              n="02"
              icon="db"
              title="Raw measurements"
              body="Store time-stamped records so you can answer: what happened, when, and where."
            />
            <FlowStep
              n="03"
              icon="file"
              title="Audit-ready files"
              body="Package raw + derived data into audit-ready files — so reviews aren’t rebuilt from scratch."
            />
            <FlowStep
              n="04"
              icon="shield"
              title="Review readiness"
              body="Apply completeness checks and governance gates before any external claims are made."
            />
            <FlowStep
              n="05"
              icon="badge"
              title="Certificates & verification"
              body="Issue verifiable outputs and support receipt-based public checks when needed."
            />
          </div>
        </Grid>
      </Section>

      {/* Section 3 — Snapshot */}
      <Section
        title="Platform snapshot"
        subtitle="Why it matters: reviewers look for stability, freshness, and clear evidence indicators."
      >
        <Grid>
          {/* Desktop/Tablet chart */}
          <div className="hidden md:block md:col-span-8">
            <ChartCard
              title="Operational trend (example)"
              subtitle="A simple trend used to check continuity over time."
              windowLabel="24H"
              note="Threshold bands show an acceptable operating range."
            >
              <OperationalTrendChart data={OPERATIONAL_TREND_24H} thresholdLow={68} thresholdHigh={80} />
            </ChartCard>
          </div>

          {/* Mobile summary card + sparkline */}
          <div className="md:hidden">
            <Card>
              <CardHeader title="Operational trend (summary)" subtitle="Mobile view — simplified trend + key indicators." />
              <div className="mt-3">
                <MobileSparkline />
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <MetricTile label="Window" value="24H" note="example trend window" mono />
                <MetricTile label="Continuity" value="OK" note="example continuity indicator" mono />
                <MetricTile label="Policy bands" value="ACTIVE" note="example thresholds applied" mono />
              </div>
            </Card>
          </div>

          <div className="md:col-span-4">
            <Card>
              <CardHeader title="Evidence signals" subtitle="Simple indicators used during review." />
              <div className="grid grid-cols-1 gap-3">
                <MetricTile label="Samples (24h)" value="124,892" note="illustrative count" mono />
                <MetricTile label="Freshness" value="ACTIVE" note="within a defined window" mono />
                <MetricTile label="Alert state" value="DEGRADED" note="needs attention" mono />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Quote box — breaks monotony + adds human proof (safe) */}
      <Section size="sm" compact>
        <Grid>
          <div className="md:col-span-12">
            <QuoteBox />
          </div>
        </Grid>
      </Section>

      {/* Section 3.5 — Outcomes (safe, no numbers, real-world framing) */}
      <Section
        title="What changes in the real world"
        subtitle="Practical outcomes — without last-minute spreadsheet scrambles."
        size="sm"
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader title="Faster audit preparation" subtitle="Less manual work." />
              <div className="text-sm text-text-300">
                Audit-ready files are prepared from governed data — not rebuilt from emails and spreadsheets.
              </div>
            </Card>

            <Card>
              <CardHeader title="Fewer review questions" subtitle="Less back-and-forth." />
              <div className="text-sm text-text-300">
                A clear data trail helps reviewers see where numbers came from and what’s included.
              </div>
            </Card>

            <Card>
              <CardHeader title="Cross-site consistency" subtitle="Same rules everywhere." />
              <div className="text-sm text-text-300">
                Sites can be compared fairly because measurements and time windows follow consistent boundaries.
              </div>
            </Card>

            <Card>
              <CardHeader title="Board-ready oversight" subtitle="Signal, not noise." />
              <div className="text-sm text-text-300">
                Leaders get high-signal indicators for governance discussions — without drowning in raw detail.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 4 — Verification (kept, but compact) */}
      <Section
        title="Verification signals"
        subtitle="Why it matters: trust is built through disciplined handling — not promises."
        size="sm"
      >
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader title="Continuity" subtitle="Is coverage stable?" />
              <KpiRow label="Window" value="24h" mono />
              <KpiRow label="Status" value={<StatusBadge tone="good" mono>OK</StatusBadge>} />
            </Card>

            <Card>
              <CardHeader title="Integrity" subtitle="Are checks applied?" />
              <KpiRow label="Checks" value="Enabled" mono />
              <KpiRow label="Status" value={<StatusBadge tone="neutral" mono>AVAILABLE</StatusBadge>} />
            </Card>

            <Card>
              <CardHeader title="Data trail" subtitle="Can we trace sources?" />
              <KpiRow label="Traceability" value="Present" mono />
              <KpiRow label="Status" value={<StatusBadge tone="neutral" mono>VERIFIABLE</StatusBadge>} />
            </Card>

            <Card>
              <CardHeader title="Optional proof" subtitle="Proof when required." />
              <KpiRow label="Mode" value="Optional" mono />
              <KpiRow label="Status" value={<StatusBadge tone="neutral" mono>CONFIGURABLE</StatusBadge>} />
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 5 — Audience (de-busy: single card) */}
      <Section title="Who this serves" subtitle="Clear value for accountable teams." size="sm">
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <div className="text-sm font-semibold text-text-100">Operations / EHS</div>
                  <div className="mt-1 text-sm text-text-300">Run sites with confidence and fewer surprises.</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-text-100">ESG / Sustainability</div>
                  <div className="mt-1 text-sm text-text-300">
                    Tell a defensible story backed by audit-ready files.
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-text-100">Compliance / Audit</div>
                  <div className="mt-1 text-sm text-text-300">
                    Inspect without reconstruction — follow the data trail.
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-text-100">Investors / Boards</div>
                  <div className="mt-1 text-sm text-text-300">
                    Oversight without noise — signal for governance decisions.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Section 6 — Conversion (tightened, calmer end) */}
      <Section size="sm">
        <Grid>
          <div className="md:col-span-12">
            <Card className="bg-surface-2 border-border">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text-100">Move from ESG reporting to ESG evidence.</div>
                  <div className="mt-1 text-sm text-text-300">Ask for an example audit-ready file during evaluation.</div>
                  <div className="mt-1 text-xs text-text-400">Designed for calm audits, not last-minute explanations.</div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
                  <LinkButton href="/contact#evaluation" variant="secondary">
                    Request evaluation
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
