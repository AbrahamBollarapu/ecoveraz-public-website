// app/modules/page.tsx
import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

type ModuleCard = {
  title: string;
  whatItDoes: string;
  evidenceProduced: string[];
  whoUsesIt: string[];
  cta: { label: string; href: string; variant: "primary" | "secondary" };
};

const MODULES: ModuleCard[] = [
  {
    title: "Device ingest",
    whatItDoes:
      "Brings site and asset signals into EcoVeraZ in a consistent, reviewable way.",
    evidenceProduced: [
      "Source-linked ingest records",
      "Timestamped data lineage",
      "Basic integrity checks",
    ],
    whoUsesIt: ["Operations", "Site admins", "Implementation partners"],
    cta: { label: "Platform overview", href: "/platform", variant: "secondary" },
  },
  {
    title: "Sensor telemetry",
    whatItDoes:
      "Maintains continuous visibility for critical operational and safety signals.",
    evidenceProduced: [
      "Time-window summaries",
      "Traceable raw-to-derived paths",
      "Change history and drift indicators",
    ],
    whoUsesIt: ["Operators", "EHS", "Facility teams"],
    cta: { label: "Proof walkthroughs", href: "/walkthroughs", variant: "secondary" },
  },
  {
    title: "Evidence artifacts",
    whatItDoes:
      "Turns operations into review-ready artifacts that can be shared without ambiguity.",
    evidenceProduced: [
      "Exportable evidence bundles",
      "Manifests + checksums (where applicable)",
      "Consistent labeling and references",
    ],
    whoUsesIt: ["Compliance teams", "Assurance coordinators", "Auditors (as reviewers)"],
    cta: { label: "Review references", href: "/resources", variant: "secondary" },
  },
  {
    title: "RRI gates",
    whatItDoes:
      "Adds readiness gates that prevent weak claims from moving forward without evidence.",
    evidenceProduced: [
      "Gate decisions + rationale",
      "Evidence links per gate",
      "Accountability trail",
    ],
    whoUsesIt: ["Program owners", "Compliance", "Portfolio leaders"],
    cta: { label: "Trust Core", href: "/trust", variant: "secondary" },
  },
  {
    title: "Audit packs",
    whatItDoes:
      "Packages defined time windows into audit-friendly packs for structured review.",
    evidenceProduced: [
      "Windowed datasets + summaries",
      "Manifests and integrity references",
      "Repeatable pack structure",
    ],
    whoUsesIt: ["Compliance", "Assurance", "External reviewers"],
    cta: { label: "Audit-ready reporting", href: "/solutions/operations", variant: "secondary" },
  },
  {
    title: "ESG analytics",
    whatItDoes:
      "Helps teams interpret signals for ESG and sustainability narratives — while keeping claims bounded.",
    evidenceProduced: [
      "Trend and variance summaries",
      "Evidence-linked charts/tables",
      "Documentation for review",
    ],
    whoUsesIt: ["Sustainability teams", "Portfolio owners", "Leadership"],
    cta: { label: "What you get", href: "/what-you-get", variant: "secondary" },
  },
  {
    title: "Alerts & safety signals",
    whatItDoes:
      "Delivers early signals for abnormal conditions with context and traceability.",
    evidenceProduced: [
      "Alert timeline with context",
      "Response notes and follow-ups",
      "Evidence of action taken",
    ],
    whoUsesIt: ["EHS", "Operations", "On-call teams"],
    cta: { label: "Operations solution", href: "/solutions/operations", variant: "secondary" },
  },
];

function PillRow({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((x) => (
        <span
          key={x}
          className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-text-200"
        >
          {x}
        </span>
      ))}
    </div>
  );
}

export default function ModulesPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* Hero */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Composable</StatusBadge>
            <StatusBadge tone="neutral">Evidence-first</StatusBadge>
            <StatusBadge tone="neutral">Review-ready</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">Delivery model</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              Composable modules for evidence-first operations
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              EcoVeraZ is delivered as modular capabilities — each one produces a
              clear type of evidence and supports a specific operational outcome.
              This page avoids architecture and jargon on purpose: it’s about{" "}
              <span className="text-text-100">what teams get</span> and{" "}
              <span className="text-text-100">what evidence is produced</span>.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/what-you-get" variant="primary">
                Start with value
              </LinkButton>
              <LinkButton href="/platform" variant="secondary">
                Platform overview
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Modules grid */}
      <Section className="bg-surface-2">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">Modules</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Every module below is framed as{" "}
            <span className="text-text-200">visibility + evidence</span>. Any
            external determination (audit, certification, regulatory acceptance)
            remains outside the system.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {MODULES.map((m) => (
            <Card
              key={m.title}
              className="rounded-2xl border border-border bg-card/40"
            >
              <CardHeader title={m.title} subtitle={m.whatItDoes} />
              <div className="px-5 pb-5">
                <div className="mt-2 text-xs font-semibold tracking-wide text-text-300">
                  Evidence produced
                </div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  {m.evidenceProduced.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                      <span className="leading-relaxed">{e}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-xs font-semibold tracking-wide text-text-300">
                  Who uses it
                </div>
                <PillRow items={m.whoUsesIt} />

                <div className="mt-5">
                  <LinkButton href={m.cta.href} variant={m.cta.variant}>
                    {m.cta.label}
                  </LinkButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section className="bg-bg-900">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="A simple path through the site"
              subtitle="A clean journey without page hunting."
            />
            <div className="px-5 pb-5 text-sm text-text-200 leading-relaxed">
              <ol className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>
                    Start with <span className="text-text-100">What You Get</span>{" "}
                    (value framing).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>
                    Then <span className="text-text-100">Modules</span>{" "}
                    (capabilities + evidence produced).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>
                    Then <span className="text-text-100">Walkthroughs</span>{" "}
                    (proof journey).
                  </span>
                </li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton href="/what-you-get" variant="secondary">
                  What you get
                </LinkButton>
                <LinkButton href="/walkthroughs" variant="secondary">
                  Walkthroughs
                </LinkButton>
                <LinkButton href="/trust" variant="secondary">
                  Trust Core
                </LinkButton>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Boundaries (kept intentionally)"
              subtitle="EcoVeraZ is evidence infrastructure — not a certifier."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>No claims of certification or audit approval.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>We say “review-ready”, “visibility”, “evidence”.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
                  <span>External determination remains external.</span>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton href="/contact" variant="primary">
                  Request a demo
                </LinkButton>
                <LinkButton href="/resources" variant="secondary">
                  Review references
                </LinkButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
