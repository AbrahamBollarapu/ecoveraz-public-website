// app/doctrine/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Bullet({ title, body }: { title: string; body: string }) {
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

export default function DoctrinePage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                DOCTRINE
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                CANONICAL
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Operating Doctrine</h1>

            <p className="mt-3 text-lg text-text-200">
              EcoVeraZ is evidence infrastructure for external review.
            </p>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              Evidence ≠ outcomes. EcoVeraZ does not certify, approve, score, or determine compliance.
              Conclusions remain with external reviewers (audit, risk, regulators).
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">
                Back to Resources
              </LinkButton>
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Scope" subtitle="What EcoVeraZ does (and does not do) in regulated contexts.">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="In scope"
                subtitle="Evidence and review-layer operations."
                right={
                  <StatusBadge tone="good" mono>
                    IN SCOPE
                  </StatusBadge>
                }
              />
              <div className="space-y-3">
                <Bullet title="Capture & normalize" body="Operational measurements become stable, reviewable datasets." />
                <Bullet title="Lineage & integrity" body="Artifacts remain traceable to sources and transformations." />
                <Bullet title="Review posture signals" body="Continuity / integrity / lineage / disclosure indicators for oversight." />
                <Bullet title="Evidence outputs" body="Packs, manifests, checksums, receipts, and references." />
              </div>
            </Card>

            <Card>
              <CardHeader
                title="Out of scope"
                subtitle="Where authority stays external."
                right={
                  <StatusBadge tone="bad" mono>
                    OUT OF SCOPE
                  </StatusBadge>
                }
              />
              <div className="space-y-3">
                <Bullet title="No compliance determination" body="EcoVeraZ does not decide pass/fail or regulatory acceptance." />
                <Bullet title="No certification / approval" body="EcoVeraZ does not certify or approve outcomes." />
                <Bullet title="No scoring-as-truth" body="Indicators are posture signals, not authoritative ratings." />
                <Bullet title="No internal disclosure" body="Algorithms, internal schemas, and proprietary logic are not publicly exposed." />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      <Section title="Definitions" subtitle="Terms used consistently across pages and demos.">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader title="Evidence" subtitle="Operational measurements turned into traceable artifacts." />
              <div className="text-sm text-text-300 leading-relaxed">
                Evidence is measurement + context + time window + governed transformations, represented as
                traceable artifacts. Evidence is not a conclusion.
              </div>
            </Card>

            <Card>
              <CardHeader title="Review-ready" subtitle="A posture where artifacts are inspectable and bounded." />
              <div className="text-sm text-text-300 leading-relaxed">
                Review-ready means artifacts can be inspected with continuity, integrity, lineage, and
                disclosure boundaries. It does not mean compliant.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
