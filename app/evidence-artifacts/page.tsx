// app/evidence-artifacts/page.tsx
import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Artifact({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} />
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </Card>
  );
}

export default function EvidenceArtifactsPage() {
  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                ARTIFACTS
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                REVIEW-READY
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Evidence Artifacts</h1>
            <p className="mt-3 text-sm text-muted">
              Primary artifacts used across review workflows. EcoVeraZ structures
              operational measurements into inspectable outputs suitable for
              oversight, audit readiness, and governance contexts.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">
                Back to Resources
              </LinkButton>
              <LinkButton href="/walkthroughs" variant="primary">
                Walkthroughs
              </LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Context headers (Phase-4 narrative scaffolding) */}
      <Section
        title="Context for reviewers"
        subtitle="Use these headers across certificates, trust views, and verification surfaces."
      >
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <div className="text-xs font-medium text-text-400">
                    What was measured
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Time-bound operational measurements captured from deployed
                    devices.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">
                    What evidence was generated
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Evidence packs, manifests, and checksums that preserve what
                    was reviewed.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">
                    What governance rules were applied
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Review gates, completeness checks, and disclosure boundaries
                    applied before outputs.
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-text-400">
                    What was anchored
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Optional cryptographic anchoring when required; otherwise
                    receipts still bind integrity references.
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="text-xs font-medium text-text-400">
                    How this can be verified
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    Receipt-based verification surfaces that allow independent
                    checking without exposing internals.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      <Section
        title="Primary artifacts"
        subtitle="Core building blocks used across review workflows."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Artifact
              title="Evidence Pack (ZIP)"
              subtitle="A portable bundle suitable for review."
              items={[
                "Raw and derived datasets scoped to a declared window",
                "A manifest describing contents and generation context",
                "Checksums to support integrity checks",
                "Optional receipts/anchors depending on deployment policy",
              ]}
            />

            <Artifact
              title="Manifest"
              subtitle="A map of what is inside and how it was produced."
              items={[
                "Declared observation window (start/end)",
                "Included datasets and filenames",
                "Generation parameters (controlled, deterministic)",
                "References to integrity surfaces and receipts",
              ]}
            />

            <Artifact
              title="Checksums"
              subtitle="Integrity surfaces for files and bundles."
              items={[
                "SHA sums for artifact verification",
                "Supports tamper detection and replayable review",
                "Used for independent integrity checking in audit workflows",
              ]}
            />

            <Artifact
              title="Receipt / Verify view"
              subtitle="Public-safe linkage and integrity reference."
              items={[
                "Receipt identifiers bind a certificate/output to evidence references",
                "Enables independent checking without exposing internals",
                "Anchoring is optional; receipts still provide verification linkage",
              ]}
            />
          </div>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="Boundary"
                subtitle="EcoVeraZ does not certify, approve, rate, or determine compliance outcomes. Outputs are evidence artifacts designed for external review."
              />
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
