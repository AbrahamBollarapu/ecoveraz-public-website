// app/resources/page.tsx
import * as React from "react";

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

function ResourceRow({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card/40 p-5">
      <div>
        <div className="text-sm font-semibold text-text-100">{title}</div>
        <div className="mt-1 text-sm leading-relaxed text-text-200">{desc}</div>
      </div>
      <div>
        <LinkButton href={href} variant="secondary">
          {cta}
        </LinkButton>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main className="bg-bg-900 text-text-100">
      {/* HERO */}
      <Section className="bg-bg-900">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Evaluator-friendly</StatusBadge>
            <StatusBadge tone="neutral">Proof paths</StatusBadge>
            <StatusBadge tone="neutral">Bounded claims</StatusBadge>
          </div>

          <div className="max-w-3xl">
            <div className="text-sm text-text-300">
              Resources — proof, explainers, and evaluator paths
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              Resources for reviewers, operators, and decision-makers
            </h1>
            <p className="mt-3 text-base leading-relaxed text-text-200">
              This page helps different audiences review EcoVeraZ without wading
              through technical detail. Everything is framed as{" "}
              <span className="text-text-100">visibility + evidence</span>. Any
              external determination (audit, certification, regulatory acceptance)
              remains outside the system.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/walkthroughs" variant="primary">
                Proof walkthroughs
              </LinkButton>
              <LinkButton href="/modules" variant="secondary">
                Modules
              </LinkButton>
              <LinkButton href="/trust" variant="secondary">
                Trust Core
              </LinkButton>
            </div>

            {/* Jump strip (anchors) */}
            <div className="mt-4 rounded-2xl border border-border bg-card/30 p-4">
              <div className="text-xs text-text-300 evz-mono">JUMP TO</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <LinkButton href="#paths" variant="secondary">
                  Review paths
                </LinkButton>
                <LinkButton href="#before-after" variant="secondary">
                  Tangible benefits
                </LinkButton>
                <LinkButton href="#artifacts" variant="secondary">
                  What we produce
                </LinkButton>
                <LinkButton href="#next" variant="secondary">
                  Next steps
                </LinkButton>
                <LinkButton href="#contact" variant="secondary">
                  Evaluator pack
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* EVALUATOR PATHS */}
      <Section className="bg-surface-2">
        <div id="paths" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">
            Choose your review path
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Pick the shortest route to validate fit, without assumptions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ResourceRow
            title="For auditors & assurance reviewers"
            desc="Start with walkthroughs to see the evidence trail, then use Trust Core to understand bounded language and integrity cues."
            href="/walkthroughs"
            cta="Start walkthroughs"
          />
          <ResourceRow
            title="For operators & site teams"
            desc="Start with Modules to see what the platform does day-to-day, then review the Operations solution page for outcomes."
            href="/modules"
            cta="View modules"
          />
          <ResourceRow
            title="For leadership & portfolio owners"
            desc="Start with What You Get (commercial framing), then Platform for scope and boundaries."
            href="/what-you-get"
            cta="See value framing"
          />
        </div>
      </Section>

      {/* BEFORE / AFTER (TANGIBLE BENEFITS) */}
      <Section className="bg-bg-900">
        <div id="before-after" className="mb-6 scroll-mt-28">
          <div className="mb-3 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge tone="neutral">Before</StatusBadge>
              <StatusBadge tone="good">After</StatusBadge>
              <StatusBadge tone="neutral">Tangible outcomes</StatusBadge>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-text-100">
                What changes in practice (before vs after)
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-300">
                A plain-language view of why teams save time, avoid rework, and gain
                trust during reviews. (Illustrative — depends on scope and governance.)
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Before EcoVeraZ"
              subtitle="What reviews often look like without a traceable evidence system."
              right={<StatusBadge tone="neutral">BEFORE</StatusBadge>}
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Evidence lives across spreadsheets, emails, screenshots, and vendors</Bullet>
                <Bullet>“Where did this come from?” triggers manual reconstruction</Bullet>
                <Bullet>Time windows drift (different teams use different cutoffs)</Bullet>
                <Bullet>Follow-up questions multiply because context is missing</Bullet>
                <Bullet>Trust depends on individuals, not repeatable structure</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="With EcoVeraZ"
              subtitle="What reviewers and operators get when evidence is packaged for inspection."
              right={<StatusBadge tone="good">AFTER</StatusBadge>}
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Evidence is delivered as a consistent pack (window + manifest + artifacts)</Bullet>
                <Bullet>Review starts with: what’s included, from where, and for which period</Bullet>
                <Bullet>Traceability reduces back-and-forth and subjective debates</Bullet>
                <Bullet>Teams spend less time preparing “audit season” documents</Bullet>
                <Bullet>Trust improves because the structure is repeatable across sites</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="So what does this save?"
              subtitle="Tangible benefits stakeholders can feel."
              right={<StatusBadge tone="neutral">IMPACT</StatusBadge>}
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>
                  <span className="text-text-100">Time:</span> fewer cycles assembling proofs; faster reviewer orientation
                </Bullet>
                <Bullet>
                  <span className="text-text-100">Money:</span> less paid rework, fewer “emergency” audit/consulting add-ons
                </Bullet>
                <Bullet>
                  <span className="text-text-100">Trust:</span> clearer trail from source → file → claim reduces credibility risk
                </Bullet>
                <Bullet>
                  <span className="text-text-100">Governance:</span> consistent windows + disclosures reduce ambiguity
                </Bullet>
              </ul>

              <div className="mt-4 rounded-xl border border-border bg-surface-2 p-3 text-xs text-text-300 leading-relaxed">
                Note: EcoVeraZ improves reviewability and integrity cues. It does{" "}
                <span className="text-text-100">not</span> certify, score, or make external determinations.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* REFERENCE / EXPLAINERS */}
      <Section className="bg-bg-900">
        <div id="artifacts" className="grid gap-6 lg:grid-cols-2 scroll-mt-28">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ produces"
              subtitle="Evidence artifacts designed for review and oversight."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>Clear time windows and traceable context</Bullet>
                <Bullet>Repeatable formats for internal and external review</Bullet>
                <Bullet>Integrity cues where appropriate (e.g., manifests)</Bullet>
                <Bullet>Bounded language: evidence, visibility, review-ready</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <div id="next" className="scroll-mt-28" />
            <CardHeader
              title="Where to go next"
              subtitle="Keep the journey simple and consistent."
            />
            <div className="px-5 pb-5 text-sm text-text-200">
              <ul className="space-y-2">
                <Bullet>
                  If you want proof: go to <span className="text-text-100">Walkthroughs</span>
                </Bullet>
                <Bullet>
                  If you want capability map: go to <span className="text-text-100">Modules</span>
                </Bullet>
                <Bullet>
                  If you want framing: go to <span className="text-text-100">What You Get</span>
                </Bullet>
                <Bullet>
                  If you want boundaries: go to <span className="text-text-100">Trust Core</span>
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

      {/* CONTACT */}
      <Section className="bg-surface-2">
        <div id="contact" className="scroll-mt-28" />
        <Card className="rounded-2xl border border-border bg-card/40">
          <CardHeader
            title="Need an evaluator pack?"
            subtitle="We can provide a guided review sequence aligned to your context."
          />
          <div className="px-5 pb-5">
            <div className="text-sm text-text-200 leading-relaxed">
              If you’re reviewing EcoVeraZ for a program, a portfolio, or a site rollout,
              request a short evaluator walkthrough and the recommended proof path.
            </div>

            {/* NEW: Tangible “what you’ll receive” checklist */}
            <div className="mt-4 rounded-2xl border border-border bg-surface-1 p-4">
              <div className="text-xs text-text-300 evz-mono">EVALUATOR PACK (WHAT YOU’LL RECEIVE)</div>
              <ul className="mt-2 space-y-2 text-sm text-text-200">
                <Bullet>
                  A <span className="text-text-100 font-medium">redacted evidence pack example</span> (structure + contents)
                </Bullet>
                <Bullet>
                  A sample <span className="text-text-100 font-medium">manifest</span> showing window boundaries + artifact list
                </Bullet>
                <Bullet>
                  A short <span className="text-text-100 font-medium">review path walkthrough</span>: source → record → file → gate
                </Bullet>
                <Bullet>
                  A clear <span className="text-text-100 font-medium">boundaries statement</span> (what EcoVeraZ does not claim)
                </Bullet>
              </ul>
              <div className="mt-2 text-xs text-text-400">
                Provided for evaluation and reviewability. Not certification, not scoring, and not an external determination.
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <LinkButton href="/contact" variant="primary">
                Request a demo
              </LinkButton>
              <LinkButton href="/trust" variant="secondary">
                Trust Core
              </LinkButton>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
