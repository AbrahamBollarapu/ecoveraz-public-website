// app/platform/page.tsx
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

function MiniTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
      <div className="text-xs text-text-300">{label}</div>
      <div className="mt-1 text-sm font-semibold text-text-100">{value}</div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* HERO */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Audit-safe</StatusBadge>
            <StatusBadge tone="neutral">Evidence-first</StatusBadge>
            <StatusBadge tone="neutral">Instrumentation-led</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">
              Platform — ESG evidence infrastructure
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              An evidence layer for operations, safety, and sustainability
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              EcoVeraZ turns real-world operational signals into{" "}
              <span className="text-text-100">review-ready evidence</span>. It is
              not a certifier and does not promise outcomes — it produces
              visibility, traceability, and consistent artifacts so teams can
              move faster with less rework.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/what-you-get" variant="primary">
                What you get
              </LinkButton>
              <LinkButton href="/modules" variant="secondary">
                Modules
              </LinkButton>
              <LinkButton href="/walkthroughs" variant="secondary">
                Proof walkthroughs
              </LinkButton>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MiniTile label="Visibility" value="Continuous operational signals" />
            <MiniTile label="Evidence" value="Review-ready artifacts" />
            <MiniTile label="Trust" value="Bounded, defensible claims" />
          </div>
        </div>
      </Section>

      {/* WHAT IT IS */}
      <Section className="bg-surface-2">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is"
              subtitle="An infrastructure layer that makes evidence a system output."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Instrumentation-led visibility across sites and assets</Bullet>
                <Bullet>Traceable data paths (what, when, where)</Bullet>
                <Bullet>Evidence artifacts designed for review and oversight</Bullet>
                <Bullet>Operational framing: safety, productivity, sustainability</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is not"
              subtitle="Clear boundaries keep language audit-safe."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Not a certification body</Bullet>
                <Bullet>No promises of compliance outcomes</Bullet>
                <Bullet>No claims of audit approval</Bullet>
                <Bullet>External determination remains external</Bullet>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* CORE CAPABILITIES */}
      <Section className="bg-bg-900">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">Core capabilities</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            These are expressed as modules on the next page. Here we keep it
            outcome-oriented and non-technical.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Signals → visibility"
              subtitle="Turn site signals into consistent operational views."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Continuous monitoring across time windows</Bullet>
                <Bullet>Early signal detection for abnormal conditions</Bullet>
                <Bullet>Clear context: site, asset, and timestamp</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Visibility → evidence"
              subtitle="Make review-ready artifacts a standard output."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Consistent labeling and references</Bullet>
                <Bullet>Exportable packs for defined windows</Bullet>
                <Bullet>Integrity cues and traceability</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Evidence → oversight"
              subtitle="Support portfolio and program oversight without hype."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Comparability across sites and vendors</Bullet>
                <Bullet>Repeatable review workflows</Bullet>
                <Bullet>Bounded claims with evidence links</Bullet>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* NEXT STEPS */}
      <Section className="bg-surface-2">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Explore modules"
              subtitle="Understand capabilities by what they do and what evidence they produce."
            />
            <div className="px-5 pb-5">
              <div className="text-sm text-text-200 leading-relaxed">
                Modules are the clean, composable building blocks of EcoVeraZ —
                presented without architecture or API detail.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton href="/modules" variant="primary">
                  View Modules
                </LinkButton>
                <LinkButton href="/what-you-get" variant="secondary">
                  Value framing
                </LinkButton>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="See the proof journey"
              subtitle="Walkthroughs show the evidence trail end-to-end."
            />
            <div className="px-5 pb-5">
              <div className="text-sm text-text-200 leading-relaxed">
                If you want the simplest demonstration path, start with
                walkthroughs and then return to modules for the capability map.
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton href="/walkthroughs" variant="primary">
                  Proof walkthroughs
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
