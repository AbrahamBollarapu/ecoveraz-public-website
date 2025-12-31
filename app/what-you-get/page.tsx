// app/what-you-get/page.tsx
import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

type Sector = {
  id: string;
  name: string;
  oneLine: string;
  outcomes: string[];
  functions: string[]; // commercial names, not modules
  bestFor: string[];
};

type FunctionRole = {
  id: string;
  name: string;
  whatTheyGet: string[];
  commonSectors: string[];
};

const SECTORS: Sector[] = [
  {
    id: "pharma",
    name: "Pharma & clean manufacturing",
    oneLine: "Operational control + evidence trails for quality-sensitive environments.",
    outcomes: [
      "Faster investigations with traceable time windows",
      "Lower rework during internal QA reviews",
      "Cleaner handoffs to external reviewers (where applicable)",
    ],
    functions: [
      "Continuous monitoring visibility",
      "Alerts + safety signals (before-time)",
      "Evidence artifacts (review-ready exports)",
      "Audit packs for defined windows",
    ],
    bestFor: ["Clean rooms", "Critical utilities", "High sensitivity processes"],
  },
  {
    id: "industrial",
    name: "Industrial facilities & utilities",
    oneLine: "Safety visibility + operational efficiency with evidence-backed oversight.",
    outcomes: [
      "Early detection of abnormal conditions",
      "Reduced downtime through faster root-cause investigation",
      "Evidence-backed operational improvements (not guesswork)",
    ],
    functions: [
      "Continuous monitoring visibility",
      "Alerts + safety signals (before-time)",
      "Evidence artifacts (review-ready exports)",
      "Portfolio oversight across sites",
    ],
    bestFor: ["Plants", "Boilers", "Hazardous assets", "Utility rooms"],
  },
  {
    id: "buildings",
    name: "Commercial buildings & campuses",
    oneLine: "Operator-ready visibility that supports safer, more efficient spaces.",
    outcomes: [
      "Fewer blind spots in IAQ / energy / critical assets",
      "Reduced operational waste via monitoring patterns",
      "Cleaner reporting to stakeholders with evidence links",
    ],
    functions: [
      "Continuous monitoring visibility",
      "Alerts + safety signals (before-time)",
      "ESG & sustainability evidence (bounded claims)",
      "Evidence artifacts (review-ready exports)",
    ],
    bestFor: ["Office parks", "Malls", "Campuses", "Hospitals (monitoring context)"],
  },
  {
    id: "municipal",
    name: "Municipal monitoring programs",
    oneLine: "Evidence-first measurement programs that scale across zones and vendors.",
    outcomes: [
      "Comparable oversight across zones / contractors",
      "Less friction in review and reporting cycles",
      "Improved trust through consistent evidence formats",
    ],
    functions: [
      "Portfolio oversight across zones",
      "Evidence artifacts (review-ready exports)",
      "Audit packs for defined windows",
      "ESG & sustainability evidence (bounded claims)",
    ],
    bestFor: ["Cities", "Authorities", "Multi-vendor programs", "Public dashboards (as outputs)"],
  },
];

const FUNCTIONS: FunctionRole[] = [
  {
    id: "ops",
    name: "Operations / Facilities",
    whatTheyGet: [
      "Continuous visibility with clear context (site, asset, time window)",
      "Faster incident triage and investigation",
      "Operational improvements supported by evidence",
    ],
    commonSectors: ["Industrial", "Buildings", "Pharma"],
  },
  {
    id: "ehs",
    name: "EHS / Safety",
    whatTheyGet: [
      "Early signals for abnormal conditions (before-time alerts)",
      "A traceable timeline of alerts and actions taken",
      "Cleaner internal review readiness (without outcome claims)",
    ],
    commonSectors: ["Industrial", "Pharma", "Municipal (program safety)"],
  },
  {
    id: "sustainability",
    name: "Sustainability / ESG",
    whatTheyGet: [
      "Evidence-backed ESG reporting inputs (bounded language)",
      "Reduced ambiguity through consistent formats",
      "Review-ready artifacts for external determination workflows",
    ],
    commonSectors: ["Buildings", "Municipal", "Industrial"],
  },
  {
    id: "compliance",
    name: "Compliance / Assurance coordination",
    whatTheyGet: [
      "Structured packs for defined windows (review-ready exports)",
      "Less rework in audits and assurance cycles",
      "Clear boundaries: evidence and visibility, not certification",
    ],
    commonSectors: ["Pharma", "Industrial", "Municipal"],
  },
  {
    id: "leadership",
    name: "Leadership / Portfolio owners",
    whatTheyGet: [
      "Comparable oversight across sites and vendors",
      "Faster decision cycles with less rework",
      "Defensible posture: claims tied to evidence references",
    ],
    commonSectors: ["Municipal", "Industrial", "Buildings"],
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function AnchorPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-full border border-border bg-card/40 px-3 py-1.5 text-xs text-text-200 hover:bg-card/70"
    >
      {label}
    </a>
  );
}

export default function WhatYouGetPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* HERO */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Commercial outcomes</StatusBadge>
            <StatusBadge tone="neutral">Sector-specific</StatusBadge>
            <StatusBadge tone="neutral">Audit-safe language</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">Commercial clarity — who gets what</div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              What You Get with EcoVeraZ
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              This page is written commercially:{" "}
              <span className="text-text-100">which sector</span> gets{" "}
              <span className="text-text-100">which outcomes</span>, and{" "}
              <span className="text-text-100">which internal functions</span> use EcoVeraZ to achieve them.
              EcoVeraZ produces visibility and review-ready evidence — external determination remains external.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/contact" variant="primary">
                Request a sector demo
              </LinkButton>
              <LinkButton href="/walkthroughs" variant="secondary">
                Proof walkthroughs
              </LinkButton>
              <LinkButton href="/platform" variant="secondary">
                Platform overview
              </LinkButton>
            </div>

            {/* In-page commercial nav */}
            <div className="mt-6 flex flex-wrap gap-2">
              <AnchorPill href="#sectors" label="By sector" />
              <AnchorPill href="#functions" label="By function" />
              {SECTORS.map((s) => (
                <AnchorPill key={s.id} href={`#${s.id}`} label={s.name} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* BY SECTOR */}
      <Section className="bg-surface-2" id="sectors">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">By sector</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Pick your sector to see outcomes and the EcoVeraZ functions that deliver them — without technical jargon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SECTORS.map((s) => (
            <Card
              key={s.id}
              className="rounded-2xl border border-border bg-card/40"
              // anchor target
            >
              <div id={s.id} className="scroll-mt-24" />
              <CardHeader title={s.name} subtitle={s.oneLine} />
              <div className="px-5 pb-5">
                <div className="text-xs font-semibold tracking-wide text-text-300">
                  Outcomes
                </div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  {s.outcomes.map((o) => (
                    <Bullet key={o}>{o}</Bullet>
                  ))}
                </ul>

                <div className="mt-4 text-xs font-semibold tracking-wide text-text-300">
                  EcoVeraZ functions used
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.functions.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-xs font-semibold tracking-wide text-text-300">
                  Best fit for
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {s.bestFor.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-text-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <LinkButton href="/contact" variant="primary">
                    Request demo for {s.name}
                  </LinkButton>
                  <LinkButton href="/walkthroughs" variant="secondary">
                    See proof path
                  </LinkButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* BY FUNCTION */}
      <Section className="bg-bg-900" id="functions">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">By function</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            If you’re buying or operating EcoVeraZ internally, pick your role to see what you get and where it applies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FUNCTIONS.map((r) => (
            <Card key={r.id} className="rounded-2xl border border-border bg-card/40">
              <div id={r.id} className="scroll-mt-24" />
              <CardHeader title={r.name} subtitle="Commercial outcomes for your day-to-day responsibilities." />
              <div className="px-5 pb-5">
                <div className="text-xs font-semibold tracking-wide text-text-300">
                  What you get
                </div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  {r.whatTheyGet.map((x) => (
                    <Bullet key={x}>{x}</Bullet>
                  ))}
                </ul>

                <div className="mt-4 text-xs font-semibold tracking-wide text-text-300">
                  Common sectors
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.commonSectors.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <LinkButton href="/contact" variant="primary">
                    Request a role-based demo
                  </LinkButton>
                  <LinkButton href="/resources" variant="secondary">
                    Review references
                  </LinkButton>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* BOUNDARIES */}
      <Section className="bg-surface-2">
        <Card className="rounded-2xl border border-border bg-card/40">
          <CardHeader
            title="Language boundaries (kept intentionally)"
            subtitle="EcoVeraZ produces evidence and visibility — external determination remains external."
          />
          <div className="px-5 pb-5 text-sm text-text-200">
            <ul className="space-y-2">
              <Bullet>No certification claims.</Bullet>
              <Bullet>No promises of compliance outcomes or audit approvals.</Bullet>
              <Bullet>We use “review-ready”, “evidence”, “visibility”, “external determination”.</Bullet>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/walkthroughs" variant="primary">
                Proof walkthroughs
              </LinkButton>
              <LinkButton href="/platform" variant="secondary">
                Platform overview
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Request a demo
              </LinkButton>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
