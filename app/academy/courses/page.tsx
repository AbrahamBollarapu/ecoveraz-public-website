// app/academy/courses/page.tsx
import Link from "next/link";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";

import { ACADEMY_COURSES, type Course } from "@/lib/academy/courses";

function levelMeta(level: Course["level"]) {
  switch (level) {
    case "L1":
      return { label: "FOUNDATIONS", badge: "LEVEL 1", tone: "neutral" as const, anchor: "level-1" };
    case "L2":
      return { label: "EVIDENCE OPS", badge: "LEVEL 2", tone: "neutral" as const, anchor: "level-2" };
    case "L3":
      return { label: "DISCLOSURE", badge: "LEVEL 3", tone: "neutral" as const, anchor: "level-3" };
    case "L4":
      return { label: "ENTERPRISE", badge: "LEVEL 4", tone: "neutral" as const, anchor: "level-4" };
  }
}

function pricingLabel(level: Course["level"]) {
  if (level === "L1") return "Free / Low-cost";
  if (level === "L2") return "Paid";
  if (level === "L3") return "Premium";
  return "Custom";
}

function groupByLevel(courses: Course[]) {
  const buckets: Record<Course["level"], Course[]> = { L1: [], L2: [], L3: [], L4: [] };
  for (const c of courses) buckets[c.level].push(c);
  return buckets;
}

function CourseCard({ course }: { course: Course }) {
  const meta = levelMeta(course.level);
  const preview = course.lessons.slice(0, 4);

  return (
    <Card>
      <CardHeader
        title={course.title}
        subtitle={course.subtitle}
        right={
          <div className="flex items-center gap-2">
            <StatusBadge tone={meta.tone} mono>
              {meta.badge}
            </StatusBadge>
            <StatusBadge tone="neutral" mono>
              COURSE
            </StatusBadge>
          </div>
        }
      />

      <div className="mt-3 text-sm text-text-300">
        <span className="text-text-200 font-medium">Audience:</span> {course.audience}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <MetricTile label="Duration" value={course.durationHours} note="indicative" mono />
        <MetricTile label="Pricing" value={pricingLabel(course.level)} note="tier" mono />
      </div>

      <div className="mt-4">
        <div className="text-xs font-medium text-text-400">Lesson preview</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
          {preview.map((l) => (
            <li key={l.id}>
              {l.title} <span className="text-text-400">({l.minutes}m)</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 text-xs text-text-400 leading-relaxed">
        Certificate: <span className="text-text-200">{course.certificate}</span> · Completion confirms learning only.
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <Link
          href={`/academy/courses/${course.id}`}
          className="text-sm text-accent-400 hover:text-accent-500 transition-colors"
        >
          View syllabus →
        </Link>
        <LinkButton href="/contact?topic=academy" variant="secondary">
          Training inquiry
        </LinkButton>
      </div>
    </Card>
  );
}

function JumpLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-sm text-text-300 hover:text-text-100 transition-colors">
      <span className="relative">
        {label}
        <span className="absolute -bottom-2 left-0 right-0 h-px bg-border-800" />
      </span>
    </a>
  );
}

function BackToTop() {
  return (
    <div className="mt-6 flex justify-end">
      <a
        href="#top"
        className="text-xs text-text-400 hover:text-text-200 transition-colors"
      >
        Back to top ↑
      </a>
    </div>
  );
}

export default function CoursesPage() {
  const grouped = groupByLevel(ACADEMY_COURSES);

  return (
    <>
      {/* Top anchor */}
      <div id="top" className="scroll-mt-24" />

      {/* Hero */}
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>
                ACADEMY
              </StatusBadge>
              <StatusBadge tone="neutral" mono>
                COURSES
              </StatusBadge>
            </div>

            <h1 className="mt-4 text-3xl font-semibold">
              Evidence-first ESG & sustainability courses.
            </h1>

            <p className="mt-3 text-lg text-text-200">
              Practical education for teams preparing for external review — not compliance promises.
            </p>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              EcoVeraZ Academy provides education and operational playbooks. Courses do not certify, approve,
              or determine compliance outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/academy" variant="secondary">
                Academy overview
              </LinkButton>
              <LinkButton href="/resources" variant="secondary">
                Resources
              </LinkButton>
              <LinkButton href="/contact?topic=academy" variant="primary">
                Training inquiry
              </LinkButton>
            </div>

            <div className="mt-4 text-xs text-text-400">
              Canonical references:{" "}
              <Link href="/doctrine" className="text-text-200 underline underline-offset-4">
                Doctrine
              </Link>
              {" · "}
              <Link href="/rri" className="text-text-200 underline underline-offset-4">
                RRI
              </Link>
              {" · "}
              <Link href="/evidence-artifacts" className="text-text-200 underline underline-offset-4">
                Evidence Artifacts
              </Link>
            </div>

            {/* Jump row */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <JumpLink href="#level-1" label="Level 1" />
              <JumpLink href="#level-2" label="Level 2" />
              <JumpLink href="#level-3" label="Level 3" />
              <JumpLink href="#level-4" label="Level 4" />
            </div>
          </div>
        </Grid>
      </Section>

      {/* Level 1 */}
      <div id="level-1" className="scroll-mt-24" />
      <Section
        title="Level 1 — Foundations"
        subtitle="Reset ESG and sustainability mental models. High-signal, low-hype."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            {grouped.L1.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Grid>
        <BackToTop />
      </Section>

      {/* Level 2 */}
      <div id="level-2" className="scroll-mt-24" />
      <Section
        title="Level 2 — Evidence Operations"
        subtitle="How review-ready evidence is built: continuity, integrity, lineage, artifacts."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            {grouped.L2.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Grid>
        <BackToTop />
      </Section>

      {/* Level 3 */}
      <div id="level-3" className="scroll-mt-24" />
      <Section
        title="Level 3 — Disclosure Workflows"
        subtitle="How evidence supports reporting safely: packaging, boundaries, working with reviewers."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            {grouped.L3.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Grid>
        <BackToTop />
      </Section>

      {/* Level 4 */}
      <div id="level-4" className="scroll-mt-24" />
      <Section
        title="Level 4 — Enterprise & Cohorts"
        subtitle="Guided adoption for organizations. Participation record only."
      >
        <Grid>
          <div className="md:col-span-12 grid gap-6 md:grid-cols-2">
            {grouped.L4.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </Grid>

        <div className="mt-6 rounded-xl border border-border bg-surface-2 px-4 py-3">
          <div className="text-xs font-medium text-text-400">Important</div>
          <div className="mt-1 text-xs text-text-400 leading-relaxed">
            Certificates issued by EcoVeraZ Academy confirm course completion only. They do not certify regulatory
            compliance, audit approval, or sustainability performance.
          </div>
        </div>

        <BackToTop />
      </Section>
    </>
  );
}
