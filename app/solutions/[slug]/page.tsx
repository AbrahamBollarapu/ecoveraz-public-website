import { notFound } from "next/navigation";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

import { getSolution } from "@/lib/solutions";

const EMAIL = "contact@ecoveraz.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("EcoVeraZ — Inquiry")}`;

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const sol = getSolution(params.slug);
  if (!sol) return notFound();

  return (
    <>
      {/* Hero */}
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                SOLUTION
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                PUBLIC VIEW
              </StatusBadge>
            </div>

            <div className="mt-4 text-3xl font-semibold text-text-100">
              {sol.title}
            </div>
            <div className="mt-3 text-lg text-text-200">{sol.tagline}</div>

            <div className="mt-6 flex items-center gap-2">
              <LinkButton href="/trust-core" variant="primary">Trust Core</LinkButton>
              <LinkButton href="/solutions" variant="secondary">
                Back to Solutions
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Outcomes */}
      <Section title="What this solution delivers">
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="grid grid-cols-1 gap-3">
                {sol.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent-400" />
                    <div className="text-sm text-text-200">{o}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Modules used */}
      <Section title="Modules involved">
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sol.modulesUsed.map((m) => (
              <Card key={m}>
                <CardHeader title={m} subtitle="Outcome-level capability" />
                <div className="text-sm text-text-300">
                  Integrated at the output layer. Internals not exposed publicly.
                </div>
              </Card>
            ))}
          </div>
        </Grid>
      </Section>

      {/* Review signals */}
      <Section title="Review signals">
        <Grid>
          <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sol.reviewSignals.map((s) => (
              <Card key={s.label}>
                <CardHeader title={s.label} subtitle="Review posture" />
                <div className="mt-2">
                  <StatusBadge tone="neutral" mono>
                    {s.value}
                  </StatusBadge>
                </div>
              </Card>
            ))}
          </div>
        </Grid>
      </Section>

      {/* Conversion */}
      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text-100">
                    Review this solution in a controlled demo.
                  </div>
                  <div className="mt-1 text-sm text-text-300">
                    We focus on evidence outputs and review posture — not internals.
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <LinkButton href={MAILTO} variant="secondary">Email EcoVeraZ</LinkButton>
                  <LinkButton href="/trust-core" variant="primary">Trust Core</LinkButton>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
