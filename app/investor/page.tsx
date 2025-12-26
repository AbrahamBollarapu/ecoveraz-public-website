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
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                INVESTOR ACCESS
              </StatusBadge>
              <StatusBadge tone="good" mono>
                CONFIDENTIAL
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text-100">
              EcoVeraZ — Investor Access
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-300">
              EcoVeraZ is evidence infrastructure for external review. We convert
              operational measurements into verifiable, review-ready artifacts
              suitable for oversight, audit, and governance workflows.
            </p>

            <p className="mt-2 max-w-2xl text-base leading-relaxed text-text-300">
              This page provides controlled access for institutional investors
              seeking diligence-grade materials.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-300">
              EcoVeraZ does not certify, approve, score, or determine compliance.
              Conclusions remain external (audit, risk, regulators).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton href="/contact#evaluation" variant="secondary">
                Request a demo
              </LinkButton>
              <LinkButton href="/contact" variant="primary">
                Request secure access
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-4">
            <Card>
              <CardHeader
                title="Request Secure Investor Access"
                subtitle="Institutional investors may request confidential materials and live demonstrations."
              />
              <div className="p-4 pt-0">
                <div className="rounded-md border border-border-600/60 bg-transparent p-3">
                  <div className="text-xs font-medium text-text-300">
                    Primary email
                  </div>
                  <div className="mt-1 font-mono text-sm text-text-100">
                    ceo@ecoveraz.com
                  </div>
                </div>

                <div className="mt-3 rounded-md border border-border-600/60 bg-transparent p-3">
                  <div className="text-xs font-medium text-text-300">
                    Alternate email
                  </div>
                  <div className="mt-1 font-mono text-sm text-text-100">
                    ab@ecoveraz.com
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-text-400">
                  Additional materials are shared under NDA / confidentiality
                  terms where applicable.
                </p>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      <Section
        title="Measurement → Evidence → Certificate"
        subtitle="An architecture designed to eliminate evidentiary risk before capital or compliance exposure."
      >
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="How EcoVeraZ turns reality into proof"
                subtitle="Short form, consistent with the rest of the site."
              />
              <div className="p-4 pt-0 grid grid-cols-1 gap-4 md:grid-cols-5">
                <JourneyStep
                  title="Sensors & devices"
                  body="Operational signals are captured continuously with time + context."
                />
                <JourneyStep
                  title="Raw measurements"
                  body="Original measurements are preserved and bounded to defined windows."
                />
                <JourneyStep
                  title="Evidence & audit packs"
                  body="Deterministic artifacts (manifests, checksums, references) are generated for review."
                />
                <JourneyStep
                  title="Governance posture"
                  body="Continuity, integrity, and lineage signals support oversight without overclaiming."
                />
                <JourneyStep
                  title="Certificates & verification"
                  body="Certificates become outcomes, backed by evidence and verifiable surfaces."
                />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <div className="md:col-span-7">
            <Card>
              <CardHeader
                title="What’s available to verified investors"
                subtitle="A structured set of materials aligned to review and oversight requirements."
              />
              <div className="p-4 pt-0 space-y-4">
                <Item
                  title="Investor pitch deck (current version)"
                  body="Problem, market inflection, category framing, and narrative logic."
                />
                <Item
                  title="Platform architecture & evidence chain overview"
                  body="Sensors → ingestion → analytics → audit pack → verification, with governance controls."
                />
                <Item
                  title="Regulatory alignment summary"
                  body="EU CSRD, US SEC climate, ISSB, India BRSR — mapping notes and boundary statements."
                />
                <Item
                  title="Pilot deployments & validation notes (sanitized)"
                  body="Deployment learnings and outcomes suitable for investor review."
                />
                <Item
                  title="IP & patent landscape summary"
                  body="Differentiation, defensibility posture, and roadmap for filings."
                />
              </div>
            </Card>
          </div>

          <div className="md:col-span-5">
            <Card>
              <CardHeader
                title="Confidentiality"
                subtitle="How we share sensitive information."
              />
              <div className="p-4 pt-0 space-y-3 text-sm text-text-300 leading-relaxed">
                <p>
                  We do not publish financial models, customer-sensitive
                  telemetry, or detailed technical specifications publicly.
                </p>
                <p>
                  Access is provided selectively to qualified investors and
                  partners, with NDA / data handling terms as needed.
                </p>
                <div className="mt-2 rounded-lg border border-border-600 bg-surface-900/40 p-3 text-xs text-text-400">
                  Confidential &amp; proprietary. © EcoVeraZ, Inc. All rights
                  reserved.
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
