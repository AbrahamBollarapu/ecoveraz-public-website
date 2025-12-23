// app/resources/page.tsx
import Link from "next/link";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";

function ResourceLink({
  href,
  title,
  subtitle,
  badge,
}: {
  href: string;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={
          <StatusBadge tone="neutral" mono>
            {badge}
          </StatusBadge>
        }
      />
      <div className="mt-3">
        <Link
          href={href}
          className="text-sm text-accent-400 hover:text-accent-500 transition-colors"
        >
          Open →
        </Link>
      </div>
    </Card>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                RESOURCES
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                PUBLIC VIEW
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">
              Definitions, doctrine, and review-ready references.
            </h1>

            <p className="mt-3 text-lg text-text-200">
              This hub contains EcoVeraZ’s operating doctrine, evidence ladder,
              RRI specification, and review walkthroughs.
            </p>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              EcoVeraZ provides evidence infrastructure. It does not certify,
              approve, score, or determine compliance outcomes. These resources
              explain how evidence artifacts are structured for external review.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Contact / Request Evaluation
              </LinkButton>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid gap-3">
              <MetricTile label="Primary use" value="Review enablement" note="artifact-first" mono />
              <MetricTile label="Audience" value="Audit / risk / investors" note="public-safe" mono />
              <MetricTile label="Boundary" value="Evidence only" note="no outcomes" mono />
            </div>
          </div>
        </Grid>
      </Section>

      <Section
        title="Core references"
        subtitle="The canonical pages that define EcoVeraZ’s review-layer posture."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <ResourceLink
              href="/doctrine"
              title="Operating Doctrine"
              subtitle="Scope, boundaries, definitions, responsibilities."
              badge="DOCTRINE"
            />
            <ResourceLink
              href="/ladder"
              title="Evidence Ladder"
              subtitle="Capture → Normalize → Lineage → Governance → Outputs → Verify."
              badge="LADDER"
            />
            <ResourceLink
              href="/rri"
              title="RRI Specification"
              subtitle="Review Readiness Index: posture gates, not scoring."
              badge="RRI"
            />
          </div>
        </Grid>
      </Section>

      <Section
        title="Evidence references"
        subtitle="What artifacts exist and how reviewers consume them."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <ResourceLink
              href="/evidence-artifacts"
              title="Evidence Artifacts"
              subtitle="Packs, manifests, checksums, receipts, references."
              badge="ARTIFACTS"
            />
            <ResourceLink
              href="/walkthroughs"
              title="Walkthroughs"
              subtitle="Step-by-step: what reviewers inspect and conclude externally."
              badge="GUIDE"
            />
            <ResourceLink
              href="/academy"
              title="EcoVeraZ Academy"
              subtitle="Evidence-first ESG & sustainability learning paths."
              badge="EDU"
            />
          </div>
        </Grid>

        <div className="mt-5 rounded-xl border border-border bg-surface-2 px-4 py-3">
          <div className="text-xs font-medium text-text-400">Note</div>
          <p className="mt-1 text-xs text-text-400 leading-relaxed">
            Academy courses provide education and operational playbooks. They do not grant regulatory approval,
            certification, or compliance determination.
          </p>
        </div>
      </Section>
    </>
  );
}
