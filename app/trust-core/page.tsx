// app/trust-core/page.tsx
//
// Trust Core (Public Canonical Bundle)
// - Neutral index page that binds Doctrine + Ladder + RRI into a single public anchor
// - Shows version + last-updated + changelog discipline (no marketing)
//

import Link from "next/link";

import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

import {
  TRUST_CORE_VERSION,
  TRUST_CORE_LAST_UPDATED,
  TRUST_CORE_CHANGELOG,
} from "./changelog";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

function CoreLink(props: {
  href: string;
  title: string;
  desc: string;
  badge?: string;
}) {
  const { href, title, desc, badge } = props;

  return (
    <Link
      href={href}
      className="block rounded-2xl border border-border bg-card/50 p-4 hover:bg-card/70 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-1 text-sm text-muted">{desc}</p>
        </div>
        <StatusBadge tone="neutral">{badge ?? "Canonical"}</StatusBadge>
      </div>
      <div className="mt-3 text-xs text-muted">Open →</div>
    </Link>
  );
}

export default function TrustCorePage() {
  const latest = TRUST_CORE_CHANGELOG?.[0];

  return (
    <>
      {/* ========================================================= */}
      {/* Header */}
      {/* ========================================================= */}
      <Section>
        <Card>
          <CardHeader
            title="Trust Core"
            subtitle="Public canonical doctrine for evidence posture — stable, versioned, and regulator-safe"
          />

          <div className="mt-4 space-y-2 text-sm text-muted">
            <p>
              Trust Core is the immutable public foundation that EcoVeraZ product
              surfaces, demos, and communications must conform to.
            </p>
            <p>
              EcoVeraZ does not certify, approve, rate, or determine regulatory
              compliance. EcoVeraZ provides evidence posture only. All
              determinations remain external.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Trust Core Version: {TRUST_CORE_VERSION}</Pill>
            <Pill>Last updated: {TRUST_CORE_LAST_UPDATED}</Pill>
            <Pill>Public canonical bundle</Pill>
          </div>

          {/* ===================================================== */}
          {/* Orientation paragraph — clarity overlay (ONLY ADDITION) */}
          {/* ===================================================== */}
          <div className="mt-6 rounded-xl border border-border bg-card/40 p-4">
            <div className="text-xs uppercase tracking-wide text-muted mb-2">
              How to read this page
            </div>
            <p className="text-sm text-muted leading-relaxed">
              This page explains how EcoVeraZ treats ESG data as reviewable
              evidence — not just metrics or reports. It describes the
              principles, controls, and boundaries used so ESG information can be
              inspected, traced to its source, and evaluated by independent
              reviewers.
            </p>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Trust Core is not a promise of compliance or certification. It is a
              transparent description of how evidence is collected, prepared,
              and governed so audits and oversight can be calm, repeatable, and
              defensible.
            </p>
          </div>
        </Card>
      </Section>

      {/* ========================================================= */}
      {/* Phase-4 — Context headers (narrative scaffolding) */}
      {/* ========================================================= */}
      <Section
        title="Context for verification"
        subtitle="Short framing used across certificates, trust views, and public verification surfaces."
      >
        <Card>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="text-xs text-muted">What was measured</div>
              <div className="mt-1 text-sm text-muted">
                Time-bound operational measurements captured from deployed devices.
              </div>
            </div>

            <div>
              <div className="text-xs text-muted">What evidence was generated</div>
              <div className="mt-1 text-sm text-muted">
                Preserved evidence artifacts (packs/manifests/checksums) referencing the declared window.
              </div>
            </div>

            <div>
              <div className="text-xs text-muted">What governance rules were applied</div>
              <div className="mt-1 text-sm text-muted">
                Review gates, completeness checks, and disclosure boundaries applied before outputs.
              </div>
            </div>

            <div>
              <div className="text-xs text-muted">What was anchored</div>
              <div className="mt-1 text-sm text-muted">
                Optional cryptographic anchoring when required; receipts still bind integrity references.
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-xs text-muted">How this can be verified</div>
              <div className="mt-1 text-sm text-muted">
                Receipt-based verification surfaces allow independent checking without exposing internals.
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* ========================================================= */}
      {/* Canonical artifacts */}
      {/* ========================================================= */}
      <Section title="Canonical artifacts">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <CoreLink
            href="/compliance"
            title="Operating principles"
            desc="Definitions of evidence, review-ready posture, and explicit non-claims."
            badge="Principles"
          />
          <CoreLink
            href="/ladder"
            title="Evidence → Review → Oversight"
            desc="Three-layer ladder separating measurement, reviewability, and external decisions."
            badge="Ladder"
          />
          <CoreLink
            href="/rri"
            title="RRI Specification"
            desc="Formal binary gating specification for whether evidence is ready to be reviewed."
            badge="Spec"
          />
        </div>
      </Section>

      {/* ========================================================= */}
      {/* Freeze rules (short, enforceable) */}
      {/* ========================================================= */}
      <Section title="Freeze rules">
        <Card>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
            <li>
              Trust Core wording is canonical. Changes require a version bump and
              public disclosure.
            </li>
            <li>
              RRI remains Pass/Fail on public surfaces. No weighting, no scoring,
              no outcome claims.
            </li>
            <li>
              EcoVeraZ terminates at the Review layer. Oversight and determinations
              remain external.
            </li>
            <li>
              If a downstream page conflicts with Trust Core, the downstream page
              is wrong.
            </li>
          </ul>
        </Card>
      </Section>

      {/* ========================================================= */}
      {/* Changelog (minimal, discipline-focused) */}
      {/* ========================================================= */}
      <Section title="Changelog discipline">
        <Card>
          <div className="space-y-3 text-sm text-muted">
            <p>
              Substantive changes to Trust Core are versioned and recorded. This
              prevents silent drift and protects interpretability for auditors,
              regulators, and governance teams.
            </p>

            {latest ? (
              <div className="rounded-2xl border border-border bg-card/50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">
                      Latest entry
                    </span>
                    <span className="text-muted"> · </span>
                    <span>{latest.date}</span>
                    <span className="text-muted"> · </span>
                    <span>v{latest.version}</span>
                  </div>
                  <StatusBadge tone="neutral">Recorded</StatusBadge>
                </div>

                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-xs text-muted mb-1">Pages</p>
                    <p className="text-sm text-foreground">
                      {latest.pages.join(" · ")}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted mb-1">Change</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {latest.changes.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-muted mb-1">Rationale</p>
                    <p className="text-sm">{latest.rationale}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card/50 p-4">
                <p className="text-sm">No changelog entries recorded yet.</p>
              </div>
            )}

            <div className="pt-2 text-xs text-muted">
              Note: Trust Core changes should be rare. Clarifications should be
              versioned (v1.1). Meaning changes require a major version (v2.0).
            </div>
          </div>
        </Card>
      </Section>
    </>
  );
}
