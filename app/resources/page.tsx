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
      {/* HERO — calm */}
      <Section className="bg-bg-900">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge tone="good">Evaluator hub</StatusBadge>
            <StatusBadge tone="neutral">Proof-first</StatusBadge>
            <StatusBadge tone="neutral">Bounded claims</StatusBadge>
          </div>

          <div className="mt-4">
            <div className="text-sm text-text-300">
              Resources for evaluation and review
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-100">
              Review EcoVeraZ without assumptions
            </h1>

            <p className="mt-3 text-base leading-relaxed text-text-200">
              This page is designed for reviewers, operators, and decision-makers
              who want to understand EcoVeraZ through{" "}
              <span className="text-text-100">evidence, structure, and boundaries</span>.
              External determination (audit, certification, regulatory acceptance)
              remains outside the system.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/walkthroughs" variant="primary">
                Proof walkthroughs
              </LinkButton>
              <LinkButton href="/what-you-get" variant="secondary">
                What EcoVeraZ produces
              </LinkButton>
              <LinkButton href="/trust-core" variant="secondary">
                Trust Core
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* EVALUATOR PATHS — keep */}
      <Section className="bg-surface-2">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-xl font-semibold text-text-100">
            Choose your evaluation path
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Short routes depending on your role.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ResourceRow
            title="Auditors & assurance reviewers"
            desc="Start with walkthroughs to inspect the evidence trail, then use Trust Core to understand boundaries and posture."
            href="/walkthroughs"
            cta="Start walkthroughs"
          />
          <ResourceRow
            title="Operators & site teams"
            desc="Use Platform for system scope, then What You Get to see tangible outputs."
            href="/platform"
            cta="View platform"
          />
          <ResourceRow
            title="Leadership & portfolio owners"
            desc="Start with What EcoVeraZ Produces, then Platform for boundaries and scale."
            href="/what-you-get"
            cta="View outputs"
          />
        </div>
      </Section>

      {/* EVALUATOR PACK — keep (high value) */}
      <Section className="bg-bg-900">
        <Card className="rounded-2xl border border-border bg-card/40 max-w-4xl mx-auto">
          <CardHeader
            title="Evaluator pack (available on request)"
            subtitle="Concrete materials used during review."
          />
          <div className="px-5 pb-5">
            <ul className="space-y-2 text-sm text-text-200">
              <Bullet>
                A <span className="text-text-100 font-medium">redacted evidence pack example</span>
              </Bullet>
              <Bullet>
                A sample <span className="text-text-100 font-medium">manifest</span> showing windows and artifacts
              </Bullet>
              <Bullet>
                A guided <span className="text-text-100 font-medium">review path walkthrough</span>
              </Bullet>
              <Bullet>
                A written <span className="text-text-100 font-medium">boundaries statement</span>
              </Bullet>
            </ul>

            <div className="mt-3 text-xs text-text-400">
              Provided for evaluation and reviewability. Not certification, not scoring,
              and not an external determination.
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <LinkButton href="/contact" variant="primary">
                Request evaluator pack
              </LinkButton>
              <LinkButton href="/trust-core" variant="secondary">
                Trust Core
              </LinkButton>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
