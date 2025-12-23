// app/academy/page.tsx
import Link from "next/link";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";

import { ACADEMY_COURSES, type Course } from "@/lib/academy/courses";

function groupByLevel(courses: Course[]) {
  const buckets: Record<Course["level"], Course[]> = { L1: [], L2: [], L3: [], L4: [] };
  for (const c of courses) buckets[c.level].push(c);
  return buckets;
}

function levelLabel(level: Course["level"]) {
  switch (level) {
    case "L1":
      return "FOUNDATIONS";
    case "L2":
      return "EVIDENCE OPS";
    case "L3":
      return "DISCLOSURE";
    case "L4":
      return "ENTERPRISE";
  }
}

function pricingLabel(level: Course["level"]) {
  if (level === "L1") return "Free / Low-cost";
  if (level === "L2") return "Paid";
  if (level === "L3") return "Premium";
  return "Custom";
}

function pickFeatured(courses: Course[]) {
  // Prefer the core revenue / flagship course if present
  const preferredIds = ["evidence-operations", "evidence-not-outcomes", "esg-foundations"];
  for (const id of preferredIds) {
    const hit = courses.find((c) => c.id === id);
    if (hit) return hit;
  }
  return courses[0] ?? null;
}

function pickRecommendedNext(grouped: Record<Course["level"], Course[]>, featured: Course | null) {
  if (!featured) return null;
  if (featured.level === "L1") return grouped.L2[0] ?? grouped.L3[0] ?? null;
  if (featured.level === "L2") return grouped.L3[0] ?? null;
  if (featured.level === "L3") return grouped.L4[0] ?? null;
  return null;
}

function TrackCard({
  title,
  subtitle,
  courses,
  cta,
}: {
  title: string;
  subtitle: string;
  courses: Course[];
  cta: { href: string; label: string };
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={<StatusBadge tone="neutral" mono>TRACK</StatusBadge>}
      />

      <ul className="mt-3 list-disc pl-5 text-sm text-text-300 space-y-1">
        {courses.slice(0, 4).map((c) => (
          <li key={c.id}>
            <Link
              href={`/academy/courses/${c.id}`}
              className="text-text-200 hover:underline underline-offset-4"
            >
              {c.title}
            </Link>
          </li>
        ))}
      </ul>

      {courses.length > 4 ? (
        <div className="mt-2 text-xs text-text-400">+ {courses.length - 4} more</div>
      ) : null}

      <div className="mt-4 grid grid-cols-2 gap-3">
        <MetricTile label="Courses" value={String(courses.length)} note="available" mono />
        <MetricTile label="Pricing" value={courses[0] ? pricingLabel(courses[0].level) : "—"} note="tier" mono />
      </div>

      <div className="mt-4 flex justify-end">
        <LinkButton href={cta.href} variant="secondary">
          {cta.label}
        </LinkButton>
      </div>

      <div className="mt-3 text-xs text-text-400 leading-relaxed">
        Education and playbooks only. No regulatory accreditation, certification, or compliance determination.
      </div>
    </Card>
  );
}

function CourseMiniCard({
  title,
  subtitle,
  badgeLeft,
  badgeRight,
  href,
  bullets,
}: {
  title: string;
  subtitle: string;
  badgeLeft: string;
  badgeRight: string;
  href: string;
  bullets: string[];
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={
          <div className="flex items-center gap-2">
            <StatusBadge tone="neutral" mono>{badgeLeft}</StatusBadge>
            <StatusBadge tone="neutral" mono>{badgeRight}</StatusBadge>
          </div>
        }
      />
      <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
        {bullets.slice(0, 3).map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between gap-3">
        <Link
          href={href}
          className="text-sm text-accent-400 hover:text-accent-500 transition-colors"
        >
          View syllabus →
        </Link>
        <LinkButton href="/contact?topic=academy" variant="secondary">
          Training inquiry
        </LinkButton>
      </div>
      <div className="mt-3 text-xs text-text-400 leading-relaxed">
        Completion confirms learning only. No compliance outcomes are implied.
      </div>
    </Card>
  );
}

export default function AcademyPage() {
  const grouped = groupByLevel(ACADEMY_COURSES);
  const featured = pickFeatured(ACADEMY_COURSES);
  const recommendedNext = pickRecommendedNext(grouped, featured);

  return (
    <>
      {/* Hero */}
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>ACADEMY</StatusBadge>
              <StatusBadge tone="neutral" mono>EDUCATION</StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">EcoVeraZ Academy</h1>

            <p className="mt-3 text-lg text-text-200">
              Evidence-first ESG and sustainability education.
            </p>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              EcoVeraZ Academy helps teams understand how evidence is built, reviewed, and disclosed.
              Courses focus on operational clarity and audit-safe practices — not compliance outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/academy/courses" variant="primary">
                View courses
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                Resources
              </LinkButton>
              <LinkButton href="/contact?topic=academy" variant="secondary">
                Training inquiry
              </LinkButton>
            </div>

            <div className="mt-4 text-xs text-text-400">
              Canonical references:{" "}
              <Link href="/doctrine" className="underline underline-offset-4">
                Doctrine
              </Link>
              {" · "}
              <Link href="/ladder" className="underline underline-offset-4">
                Evidence Ladder
              </Link>
              {" · "}
              <Link href="/rri" className="underline underline-offset-4">
                RRI
              </Link>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Featured + Next step */}
      <Section
        title="Start here"
        subtitle="A guided entry point: one featured course, then the next best step."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            {featured ? (
              <CourseMiniCard
                title={featured.title}
                subtitle={featured.subtitle}
                badgeLeft="FEATURED"
                badgeRight={levelLabel(featured.level)}
                href={`/academy/courses/${featured.id}`}
                bullets={[
                  `Audience: ${featured.audience}`,
                  `Duration: ${featured.durationHours}`,
                  `Certificate: ${featured.certificate}`,
                ]}
              />
            ) : (
              <Card>
                <CardHeader title="Featured course" subtitle="No courses configured yet." right={<StatusBadge tone="neutral" mono>EMPTY</StatusBadge>} />
                <div className="text-sm text-text-300">
                  Add courses in <span className="text-text-200">lib/academy/courses.ts</span>.
                </div>
              </Card>
            )}

            {recommendedNext ? (
              <CourseMiniCard
                title={recommendedNext.title}
                subtitle="Recommended next step"
                badgeLeft="NEXT"
                badgeRight={levelLabel(recommendedNext.level)}
                href={`/academy/courses/${recommendedNext.id}`}
                bullets={[
                  `Why next: progress from ${levelLabel(featured!.level)} → ${levelLabel(recommendedNext.level)}`,
                  `Duration: ${recommendedNext.durationHours}`,
                  `Pricing: ${pricingLabel(recommendedNext.level)}`,
                ]}
              />
            ) : (
              <Card>
                <CardHeader
                  title="Recommended next step"
                  subtitle="Talk to us for enterprise enablement or cohorts."
                  right={<StatusBadge tone="neutral" mono>NEXT</StatusBadge>}
                />
                <div className="text-sm text-text-300 leading-relaxed">
                  If you’re evaluating training for a team, we’ll recommend a path based on your review context,
                  disclosure cycle, and evidence scope.
                </div>
                <div className="mt-4 flex justify-end">
                  <LinkButton href="/contact?topic=academy" variant="primary">
                    Training inquiry
                  </LinkButton>
                </div>
              </Card>
            )}
          </div>

          <div className="md:col-span-12">
            <div className="mt-6 rounded-xl border border-border bg-surface-2 px-4 py-3">
              <div className="text-xs font-medium text-text-400">Certificate boundary</div>
              <div className="mt-1 text-xs text-text-400 leading-relaxed">
                Certificates confirm course completion only. They do not certify regulatory compliance,
                audit approval, or sustainability performance.
              </div>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Tracks */}
      <Section
        title="Learning tracks"
        subtitle="Start with foundations, then progress into evidence operations and disclosure."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-3">
            <TrackCard
              title="Foundations"
              subtitle="Reset ESG and sustainability mental models."
              courses={grouped.L1}
              cta={{ href: "/academy/courses", label: "View Level 1" }}
            />
            <TrackCard
              title="Evidence Operations"
              subtitle="How review-ready evidence is actually built."
              courses={grouped.L2}
              cta={{ href: "/academy/courses", label: "View Level 2" }}
            />
            <TrackCard
              title="Disclosure Workflows"
              subtitle="How evidence supports reporting safely."
              courses={grouped.L3}
              cta={{ href: "/academy/courses", label: "View Level 3" }}
            />
          </div>
        </Grid>
      </Section>

      {/* Suggested path (investor / enterprise friendly) */}
      <Section
        title="Suggested learning path"
        subtitle="A safe default progression for individuals and teams."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader
                title="Individual path"
                subtitle="For leaders and practitioners new to evidence-first ESG."
                right={<StatusBadge tone="neutral" mono>PATH</StatusBadge>}
              />
              <ol className="mt-2 list-decimal pl-5 text-sm text-text-300 space-y-2">
                <li>
                  <Link href="/academy/courses/esg-foundations" className="text-text-200 hover:underline underline-offset-4">
                    Level 1 — Foundations
                  </Link>
                  <div className="text-xs text-text-400 mt-1">Vocabulary and boundary discipline.</div>
                </li>
                <li>
                  <Link href="/academy/courses/evidence-operations" className="text-text-200 hover:underline underline-offset-4">
                    Level 2 — Evidence Operations
                  </Link>
                  <div className="text-xs text-text-400 mt-1">Continuity, integrity, lineage, artifacts.</div>
                </li>
                <li>
                  <Link href="/academy/courses/disclosure-workflows" className="text-text-200 hover:underline underline-offset-4">
                    Level 3 — Disclosure Workflows
                  </Link>
                  <div className="text-xs text-text-400 mt-1">Packaging, boundaries, working with reviewers.</div>
                </li>
              </ol>
            </Card>

            <Card>
              <CardHeader
                title="Team path"
                subtitle="For organizations preparing for audits and disclosures."
                right={<StatusBadge tone="neutral" mono>ENTERPRISE</StatusBadge>}
              />
              <ol className="mt-2 list-decimal pl-5 text-sm text-text-300 space-y-2">
                <li>
                  Foundations for leadership + comms + legal (risk language control).
                </li>
                <li>
                  Evidence Operations for ESG/EHS/compliance/analytics (artifact posture).
                </li>
                <li>
                  Disclosure Workflows for reporting and assurance teams (review efficiency).
                </li>
                <li>
                  Optional:{" "}
                  <Link href="/academy/courses/enterprise-cohorts" className="text-text-200 hover:underline underline-offset-4">
                    Enterprise cohort program
                  </Link>{" "}
                  for guided adoption.
                </li>
              </ol>

              <div className="mt-4 flex justify-end">
                <LinkButton href="/contact?topic=academy" variant="primary">
                  Request enterprise training
                </LinkButton>
              </div>
            </Card>
          </div>
        </Grid>
      </Section>

      {/* Fit */}
      <Section
        title="How Academy fits EcoVeraZ"
        subtitle="Education supports adoption without outcome claims."
      >
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="Academy → Platform"
                subtitle="Train teams, then deploy evidence infrastructure."
                right={<StatusBadge tone="neutral" mono>SAFE</StatusBadge>}
              />
              <div className="text-sm text-text-300 leading-relaxed">
                Academy prepares teams to operate evidence-first sustainability workflows and collaborate with external reviewers.
                EcoVeraZ platform deployment then provides artifacts, posture signals, and verification surfaces used during review.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
