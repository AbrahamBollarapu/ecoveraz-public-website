// app/walkthroughs/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Step({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent-400" />
      <div>
        <div className="text-sm font-medium text-text-200">{title}</div>
        <div className="mt-1 text-sm text-text-300 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

export default function WalkthroughsPage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                WALKTHROUGHS
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                REVIEW FLOW
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Review walkthroughs</h1>
            <p className="mt-3 text-lg text-text-200">
              How auditors, regulators, and oversight teams inspect EcoVeraZ outputs.
            </p>
            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              EcoVeraZ provides evidence artifacts and posture signals. Reviewers apply standards
              externally and determine conclusions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">
                Back to Resources
              </LinkButton>
              <LinkButton href="/evidence-artifacts" variant="primary">
                Evidence Artifacts
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Phase-4 — Context headers (scaffolding, no redesign) */}
      <Section
        title="Context headers for walkthroughs"
        subtitle="Use these headers consistently in review flows, trust views, and verification surfaces."
      >
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="text-xs font-medium text-text-400">What was measured</div>
                  <div className="mt-1 text-sm text-text-300">
                    Time-bound operational measurements captured from deployed devices.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">What evidence was generated</div>
                  <div className="mt-1 text-sm text-text-300">
                    Preserved evidence artifacts (packs/manifests/checksums) referencing the declared window.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">What governance rules were applied</div>
                  <div className="mt-1 text-sm text-text-300">
                    Review gates, completeness checks, and disclosure boundaries applied before outputs.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">What was anchored</div>
                  <div className="mt-1 text-sm text-text-300">
                    Optional cryptographic anchoring when required; receipts still bind integrity references.
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="text-xs font-medium text-text-400">How this can be verified</div>
                  <div className="mt-1 text-sm text-text-300">
                    Receipt-based verification surfaces allow independent checking without exposing internals.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      <Section title="Audit-style workflow" subtitle="A flow that matches regulated review behavior.">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader
                title="1) Check posture"
                subtitle="Is evidence inspectable?"
                right={<StatusBadge tone="neutral" mono>RRI</StatusBadge>}
              />
              <div className="space-y-3">
                <Step title="Continuity" body="Inspect window coverage and gaps." />
                <Step title="Integrity" body="Confirm checks enabled and consistent." />
                <Step title="Boundary" body="Confirm disclosure is controlled for the context." />
              </div>
            </Card>

            <Card>
              <CardHeader
                title="2) Open artifacts"
                subtitle="Inspect what is packaged."
                right={<StatusBadge tone="neutral" mono>PACK</StatusBadge>}
              />
              <div className="space-y-3">
                <Step title="Manifest" body="Read scope, inputs, transforms, and fingerprints." />
                <Step title="Data extracts" body="Inspect raw/derived files (as permitted)." />
                <Step title="Checksums" body="Verify integrity surfaces where required." />
              </div>
            </Card>

            <Card>
              <CardHeader
                title="3) Conclude externally"
                subtitle="Apply the rulebook outside EcoVeraZ."
                right={<StatusBadge tone="warn" mono>EXTERNAL</StatusBadge>}
              />
              <div className="space-y-3">
                <Step title="Standards" body="Reviewer applies applicable frameworks and thresholds." />
                <Step title="Judgement" body="Reviewer determines compliance/outcomes." />
                <Step title="Record" body="EcoVeraZ preserves what was referenced and reviewed." />
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
