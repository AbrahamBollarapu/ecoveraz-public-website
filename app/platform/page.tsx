// app/platform/page.tsx
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

export default function PlatformPage() {
  return (
    <>
      {/* HERO — calm, single focus */}
      <Section className="bg-bg-900">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-sm text-text-300">EcoVeraZ platform</div>

            <h1 className="mt-3 text-3xl font-semibold leading-tight text-text-100 md:text-4xl">
              Evidence infrastructure for ESG and climate claims
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-200">
              EcoVeraZ turns operational and environmental data into{" "}
              <span className="text-text-100">review-ready evidence</span> with traceable lineage.
              It is built for inspection and governance — not scoring, certification, or outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <StatusBadge tone="neutral">Evidence-first</StatusBadge>
              <StatusBadge tone="neutral">Audit-ready outputs</StatusBadge>
              <StatusBadge tone="neutral">Bounded claims</StatusBadge>
              <StatusBadge tone="neutral">Optional verification</StatusBadge>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              <LinkButton href="/what-you-get" variant="primary">
                What EcoVeraZ produces
              </LinkButton>

              <LinkButton href="/trust" variant="secondary">
                Trust Core
              </LinkButton>

              <LinkButton href="/contact#evaluation" variant="secondary">
                Request evaluation
              </LinkButton>
            </div>

            <p className="mt-4 text-xs text-text-400">
              EcoVeraZ provides evidence infrastructure. Independent reviewers and authorities
              make all determinations.
            </p>
          </div>

          <div className="lg:col-span-5" />
        </div>
      </Section>

      {/* WHAT IT IS / IS NOT — compressed */}
      <Section className="bg-surface-2">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is"
              subtitle="A system that produces review-ready evidence from real-world data."
              right={<StatusBadge tone="good">YES</StatusBadge>}
            />
            <ul className="mt-3 space-y-2 text-sm text-text-300">
              <Bullet>Evidence packs with clear time windows</Bullet>
              <Bullet>Traceable lineage from source → record → file</Bullet>
              <Bullet>Readiness gates that express review posture</Bullet>
              <Bullet>Optional proof artifacts for tamper detection</Bullet>
            </ul>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is not"
              subtitle="No compliance promises or certification claims."
              right={<StatusBadge tone="neutral">NO</StatusBadge>}
            />
            <ul className="mt-3 space-y-2 text-sm text-text-300">
              <Bullet>A certification or approval authority</Bullet>
              <Bullet>A consulting report or manual service</Bullet>
              <Bullet>A guarantee of compliance or credits</Bullet>
            </ul>
            <div className="mt-3 text-xs text-text-400">
              Determination remains external by design.
            </div>
          </Card>
        </div>
      </Section>

      {/* HOW IT WORKS — tightened */}
      <Section className="bg-bg-900">
        <div id="how" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">How it works</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            The system creates a repeatable review path — not dashboards.
          </p>
        </div>

        <Card className="rounded-2xl border border-border bg-card/30">
          <CardHeader
            title="The review path"
            subtitle="A predictable sequence reviewers can follow every time."
            right={<StatusBadge tone="neutral" mono>PATH</StatusBadge>}
          />
          <ul className="mt-3 space-y-2 text-sm text-text-300">
            <Bullet>Measure — capture real operational signals</Bullet>
            <Bullet>Store — keep time-stamped raw records</Bullet>
            <Bullet>Pack — produce audit-ready files with manifests</Bullet>
            <Bullet>Gate — express readiness and disclosure posture</Bullet>
            <Bullet>Verify (optional) — add tamper-detection cues</Bullet>
          </ul>

          <div className="mt-3 text-xs text-text-400">
            Evidence infrastructure only. No scoring, no certification.
          </div>
        </Card>
      </Section>

      {/* WHAT YOU GET — redirect to dedicated page */}
      <Section className="bg-surface-2">
        <div id="outputs" className="max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">What you get</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Tangible outputs designed for inspection — described in detail on the outputs page.
          </p>

          <div className="mt-4">
            <LinkButton href="/what-you-get" variant="primary">
              View outputs
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* CAPABILITIES — outcome-oriented */}
      <Section className="bg-bg-900">
        <div id="capabilities" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">Core capabilities</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Expressed through outputs, not feature lists.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader title="Evidence automation" />
            <ul className="mt-3 space-y-2 text-sm text-text-300">
              <Bullet>Continuous generation of evidence packs</Bullet>
              <Bullet>Consistent structure across sites</Bullet>
              <Bullet>No last-minute compilation</Bullet>
            </ul>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader title="Review defensibility" />
            <ul className="mt-3 space-y-2 text-sm text-text-300">
              <Bullet>Traceable lineage</Bullet>
              <Bullet>Integrity and drift detection</Bullet>
              <Bullet>Clear boundaries for claims</Bullet>
            </ul>
          </Card>
        </div>
      </Section>

      {/* OUTCOMES — compressed */}
      <Section className="bg-bg-900">
        <div id="outcomes" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">What changes in practice</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Illustrative process effects — not performance guarantees.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader title="Less rework" />
            <p className="mt-2 text-sm text-text-300">
              Reviewers receive structured packs instead of reconstructed evidence.
            </p>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader title="Faster confidence checks" />
            <p className="mt-2 text-sm text-text-300">
              Manifests and windows reduce clarification loops.
            </p>
          </Card>
        </div>
      </Section>

      {/* NEXT */}
      <Section className="bg-surface-2">
        <div id="next" className="max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">Next steps</h2>
          <p className="mt-2 text-sm text-text-300">
            For evaluation, ask for a redacted evidence pack and follow the trail.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <LinkButton href="/what-you-get" variant="secondary">
              Outputs
            </LinkButton>
            <LinkButton href="/walkthroughs" variant="secondary">
              Walkthroughs
            </LinkButton>
            <LinkButton href="/contact#evaluation" variant="primary">
              Request evaluation
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
