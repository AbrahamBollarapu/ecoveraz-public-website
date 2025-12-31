// app/solutions/operations/page.tsx
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

function SolutionBlock({
  title,
  subtitle,
  bullets,
  cta,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
}) {
  return (
    <Card className="rounded-2xl border border-border bg-card/40">
      <CardHeader title={title} subtitle={subtitle} />
      <div className="px-5 pb-5">
        <ul className="mt-2 space-y-2 text-sm text-text-200">
          {bullets.map((b) => (
            <Bullet key={b}>{b}</Bullet>
          ))}
        </ul>
        <div className="mt-5">
          <LinkButton href={cta.href} variant={cta.variant}>
            {cta.label}
          </LinkButton>
        </div>
      </div>
    </Card>
  );
}

export default function OperationsSolutionPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* HERO */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Operations</StatusBadge>
            <StatusBadge tone="neutral">Evidence-first</StatusBadge>
            <StatusBadge tone="neutral">Audit-safe language</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">Solutions — Operations</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              Evidence-first operations across sites and assets
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              EcoVeraZ helps operations teams maintain continuous visibility and
              produce review-ready artifacts with bounded language. It does not
              claim certification, audit approval, or compliance outcomes — it
              provides evidence and traceability so decisions can be made faster
              with less rework.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/walkthroughs" variant="primary">
                See proof walkthroughs
              </LinkButton>
              <LinkButton href="/modules" variant="secondary">
                View modules
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* FOUR-ENTRY STRUCTURE (LOCKED) */}
      <Section className="bg-surface-2">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">
            What operations teams achieve with EcoVeraZ
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Four core outcomes — each framed as{" "}
            <span className="text-text-200">visibility + evidence</span>.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SolutionBlock
            title="Evidence"
            subtitle="Make evidence a system output — not a scramble during reviews."
            bullets={[
              "Consistent capture of what happened, when, and where",
              "Clear time windows and traceable references",
              "Artifacts designed for internal and external review",
            ]}
            cta={{ label: "What you get", href: "/what-you-get", variant: "secondary" }}
          />

          <SolutionBlock
            title="Portfolio oversight"
            subtitle="Enable consistent oversight across sites, vendors, and programs."
            bullets={[
              "Comparable views across locations",
              "Repeatable review workflows",
              "Bounded claims supported by evidence links",
            ]}
            cta={{ label: "Platform overview", href: "/platform", variant: "secondary" }}
          />

          <SolutionBlock
            title="MRV enablement"
            subtitle="Support MRV workflows with evidence-first structure."
            bullets={[
              "Measurement and reporting framed as traceable evidence",
              "Reduced ambiguity in data interpretation",
              "Reviewer-friendly packs for defined time windows",
            ]}
            cta={{ label: "Explore modules", href: "/modules", variant: "primary" }}
          />

          <SolutionBlock
            title="Audit-ready reporting"
            subtitle="Reduce audit friction by standardizing review-ready outputs."
            bullets={[
              "Repeatable export formats for review",
              "Integrity cues and accountability trails",
              "External determination remains external",
            ]}
            cta={{ label: "Trust Core", href: "/trust", variant: "secondary" }}
          />
        </div>
      </Section>

      {/* BOUNDARIES + NEXT ACTION */}
      <Section className="bg-bg-900">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Boundaries (kept intentionally)"
              subtitle="EcoVeraZ is evidence infrastructure — not a certifier."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>No claims of certification or audit approval.</Bullet>
                <Bullet>No promises of compliance outcomes.</Bullet>
                <Bullet>
                  We use “review-ready”, “visibility”, “evidence”, “external determination”.
                </Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Next action"
              subtitle="Pick the shortest path to validate fit."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>
                  Want proof fast? Start with <span className="text-text-100">Walkthroughs</span>.
                </Bullet>
                <Bullet>
                  Want capability map? Go to <span className="text-text-100">Modules</span>.
                </Bullet>
                <Bullet>
                  Want commercial framing? Go to <span className="text-text-100">What You Get</span>.
                </Bullet>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton href="/walkthroughs" variant="primary">
                  Walkthroughs
                </LinkButton>
                <LinkButton href="/modules" variant="secondary">
                  Modules
                </LinkButton>
                <LinkButton href="/what-you-get" variant="secondary">
                  What you get
                </LinkButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
