// app/investor/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Item({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent-400" />
      <div>
        <div className="text-sm font-medium text-text-200">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-text-300">{body}</div>
      </div>
    </div>
  );
}

function JourneyStep({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary-400/70" />
      <div>
        <div className="text-sm font-medium text-text-200">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-text-300">{body}</div>
      </div>
    </div>
  );
}

export default function InvestorPage() {
  return (
    <>
      {/* HERO */}
      <Section>
        <Grid>
          {/* Main */}
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge tone="neutral" mono>
                INVESTOR ACCESS
              </StatusBadge>
              <StatusBadge tone="good" mono>
                CONFIDENTIAL
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-text-100">
              EcoVeraZ — Investor Access
            </h1>

            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-text-300">
              EcoVeraZ is evidence infrastructure for external review. We convert
              operational measurements into verifiable, review-ready artifacts
              suitable for oversight, audit, and governance workflows.
            </p>

            <p className="mt-2 max-w-2xl text-sm md:text-base leading-relaxed text-text-300">
              This page provides controlled access for institutional investors
              seeking diligence-grade materials.
            </p>

            <p className="mt-3 max-w-2xl text-xs md:text-sm leading-relaxed text-text-400">
              EcoVeraZ does not certify, approve, score, or determine compliance.
              Conclusions remain external (audit, risk, regulators).
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <LinkButton href="/contact#evaluation" variant="secondary">
                Request a demo
              </LinkButton>
              <LinkButton href="/contact" variant="primary">
                Request secure access
              </LinkButton>
            </div>
          </div>

          {/* Sidebar / moves below on mobile */}
          <div className="md:col-span-4 mt-6 md:mt-0">
            <Card>
              <CardHeader
                title="Request Secure Investor Access"
                subtitle="Institutional investors may request confidential materials and live demonstrations."
              />
              <div className="p-4 pt-0 space-y-3">
                <div className="rounded-md border border-border-600/60 p-3">
                  <div className="text-xs font-medium text-text-300">
                    Primary email
                  </div>
                  <div className="mt-1 font-mono text-sm text-text-100">
                    ceo@ecoveraz.com
                  </div>
                </div>

                <div className="rounded-md border border-border-600/60 p-3">
                  <div className="text-xs font-medium text-text-300">
                    Alternate email
                  </div>
                  <div className="mt-1 font-mono text-sm text-text-100">
                    ab@ecoveraz.com
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-text-400">
                  Materials are shared selectively under NDA / confidentiality
                  terms where applicable.
                </p>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* JOURNEY */}
      <Section
        title="Measurement → Evidence → Certificate"
        subtitle="How EcoVeraZ removes evidentiary risk before capital or compliance exposure."
      >
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="From reality to proof"
                subtitle="Consistent with platform and compliance narratives."
              />
              <div className="p-4 pt-0 grid grid-cols-1 gap-4 md:grid-cols-5">
                <JourneyStep
                  title="Sensors & devices"
                  body="Operational signals captured with time and context."
                />
                <JourneyStep
                  title="Raw measurements"
                  body="Preserved and bounded to declared windows."
                />
                <JourneyStep
                  title="Evidence artifacts"
                  body="Deterministic audit packs with references."
                />
                <JourneyStep
                  title="Governance posture"
                  body="Continuity, integrity, and lineage signals."
                />
                <JourneyStep
                  title="Certificates"
                  body="Outcomes backed by verifiable evidence."
                />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* MATERIALS */}
      <Section>
        <Grid>
          <div className="md:col-span-7">
            <Card>
              <CardHeader
                title="What verified investors can access"
                subtitle="Structured, diligence-grade materials."
              />
              <div className="p-4 pt-0 space-y-4">
                <Item title="Investor pitch deck" body="Narrative, market, and category framing." />
                <Item title="Platform & evidence architecture" body="End-to-end evidence chain overview." />
                <Item title="Regulatory alignment notes" body="CSRD, SEC Climate, ISSB, BRSR mappings." />
                <Item title="Pilot deployments" body="Sanitized validation outcomes." />
                <Item title="IP & patent posture" body="Defensibility and filing roadmap." />
              </div>
            </Card>
          </div>

          <div className="md:col-span-5 mt-6 md:mt-0">
            <Card>
              <CardHeader title="Confidentiality" subtitle="How sensitive information is handled." />
              <div className="p-4 pt-0 text-sm text-text-300 leading-relaxed space-y-2">
                <p>
                  Financial models, customer telemetry, and deep technical
                  internals are never published publicly.
                </p>
                <p>
                  Access is granted selectively to qualified investors and
                  partners.
                </p>
                <div className="mt-2 rounded-lg border border-border-600 bg-surface-900/40 p-3 text-xs text-text-400">
                  Confidential &amp; proprietary. © EcoVeraZ, Inc.
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
