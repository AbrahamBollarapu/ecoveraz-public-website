// app/rri/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Gate({
  title,
  subtitle,
  examples,
}: {
  title: string;
  subtitle: string;
  examples: string[];
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={
          <StatusBadge tone="neutral" mono>
            GATE
          </StatusBadge>
        }
      />
      <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
        {examples.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <div className="mt-3 text-xs text-text-400 leading-relaxed">
        RRI is posture gating. It is not a score and does not imply compliance.
      </div>
    </Card>
  );
}

export default function RriPage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                RRI
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                SPECIFICATION
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Review Readiness Index</h1>
            <p className="mt-3 text-lg text-text-200">
              A gated posture indicator for review-ready evidence.
            </p>

            {/* Orientation paragraph — clarity overlay (single addition) */}
            <div className="mt-4 rounded-xl border border-border bg-surface-2 p-4">
              <div className="text-xs uppercase tracking-wide text-text-300 mb-2">
                How to read this page
              </div>
              <p className="text-sm text-text-300 leading-relaxed">
                RRI is a simple, binary readiness check: it shows whether a declared evidence window is
                inspectable, bounded, and governed enough for review. It helps teams avoid presenting
                incomplete or ambiguous evidence to auditors, regulators, or boards.
              </p>
              <p className="mt-2 text-sm text-text-300 leading-relaxed">
                RRI is not a score and does not determine outcomes or compliance. It indicates posture only:
                whether minimum gates are met before any external evaluation happens.
              </p>
            </div>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              RRI indicates whether evidence is inspectable and bounded. It does not determine outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">
                Back to Resources
              </LinkButton>
              <LinkButton href="/ladder" variant="primary">
                Evidence Ladder
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Gates" subtitle="Minimum posture across four areas (no weights, no scoring).">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Gate
              title="Continuity"
              subtitle="Is the declared window sufficiently covered?"
              examples={["Window coverage checks", "Gap detection", "Freshness indicators"]}
            />
            <Gate
              title="Integrity"
              subtitle="Are integrity checks enabled where meaningful?"
              examples={["Consistency validation", "Sanity checks", "Checksum presence (where applicable)"]}
            />
            <Gate
              title="Lineage"
              subtitle="Can artifacts be traced to sources and transformations?"
              examples={["Fingerprints", "Manifests", "Transform references"]}
            />
            <Gate
              title="Disclosure boundary"
              subtitle="Is disclosure controlled for the review context?"
              examples={["Public-safe artifacts", "No internals exposed", "Role-based access patterns"]}
            />
          </div>
        </Grid>
      </Section>
    </>
  );
}
