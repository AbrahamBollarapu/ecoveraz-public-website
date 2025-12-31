// app/walkthroughs/page.tsx
import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export default function WalkthroughsPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Proof</StatusBadge>
            <StatusBadge tone="neutral">Reviewer path</StatusBadge>
            <StatusBadge tone="neutral">Audit-safe</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">Walkthroughs</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              Proof walkthroughs for evidence-first review
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              Walkthroughs demonstrate the inspection path a reviewer follows:
              what to look at, how it ties together, and what evidence artifacts
              are produced. EcoVeraZ does not claim certification or audit approval.
              External determination remains external.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/modules" variant="primary">
                View modules
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                Review references
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-2">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What reviewers inspect"
              subtitle="A consistent sequence designed for calm review."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Declared time window + scope</Bullet>
                <Bullet>Signals and summaries with traceable context</Bullet>
                <Bullet>Evidence artifacts (packs / references) for review</Bullet>
                <Bullet>RRI gates (readiness posture), where applicable</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What this is not"
              subtitle="Boundaries are intentional and stable."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>No certification claims</Bullet>
                <Bullet>No promises of compliance outcomes</Bullet>
                <Bullet>No claims of audit approval</Bullet>
                <Bullet>External determination remains external</Bullet>
              </ul>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
