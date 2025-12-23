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
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={<StatusBadge tone="neutral" mono>ARTIFACT</StatusBadge>}
      />
      <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
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
              <StatusBadge tone="neutral" mono>ARTIFACTS</StatusBadge>
              <StatusBadge tone="neutral" mono>REVIEW-READY</StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">Evidence Artifacts</h1>
            <p className="mt-3 text-lg text-text-200">
              What reviewers receive: structured outputs, references, and integrity surfaces.
            </p>
            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              Artifacts support inspection. They are not compliance results and do not imply approval.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/resources" variant="secondary">Back to Resources</LinkButton>
              <LinkButton href="/walkthroughs" variant="primary">Walkthroughs</LinkButton>
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Primary artifacts" subtitle="Core building blocks used across review workflows.">
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Artifact
              title="Evidence Pack (ZIP)"
              subtitle="A portable bundle suitable for review."
              items={[
                "Raw extracts (where permitted)",
                "Derived summaries",
                "bundle-manifest.json",
                "SHA256SUM / checksums",
                "References to scope and period",
              ]}
            />
            <Artifact
              title="Manifest"
              subtitle="A map of what is inside and how it was produced."
              items={[
                "Inputs and windows",
                "Transform references",
                "Artifact fingerprints",
                "File list and metadata",
              ]}
            />
            <Artifact
              title="Checksums"
              subtitle="Integrity surfaces for files and bundles."
              items={[
                "SHA256SUM file",
                "Per-file fingerprints",
                "Bundle fingerprint (if used)",
              ]}
            />
            <Artifact
              title="Receipt / Verify view"
              subtitle="Public-safe linkage and integrity reference."
              items={[
                "Identifiers (certificateId / packId)",
                "Fingerprint references",
                "Optional anchoring metadata (txHash/block) if configured",
              ]}
            />
          </div>
        </Grid>
      </Section>
    </>
  );
}
