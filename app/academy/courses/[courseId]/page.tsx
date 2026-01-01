// app/academy/courses/[courseId]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section, Grid } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";
import { MetricTile } from "@/components/ui/MetricTile";

import { findCourse } from "@/lib/academy/courses";

function LevelBadge(level: string) {
  if (level === "L1") return <StatusBadge tone="neutral" mono>FOUNDATIONS</StatusBadge>;
  if (level === "L2") return <StatusBadge tone="neutral" mono>EVIDENCE OPS</StatusBadge>;
  if (level === "L3") return <StatusBadge tone="neutral" mono>DISCLOSURE</StatusBadge>;
  return <StatusBadge tone="neutral" mono>ENTERPRISE</StatusBadge>;
}

export default function CourseDetailPage({
  params,
}: {
  params: { courseId: string };
}) {
  const course = findCourse(params.courseId);
  if (!course) return notFound();

  return (
    <>
      <Section>
        <Grid>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2">
              <StatusBadge tone="neutral" mono>ACADEMY</StatusBadge>
              <StatusBadge tone="neutral" mono>COURSE</StatusBadge>
              {LevelBadge(course.level)}
            </div>

            <h1 className="mt-4 text-3xl font-semibold">{course.title}</h1>
            <p className="mt-3 text-lg text-text-200">{course.subtitle}</p>

            <p className="mt-3 text-sm text-text-300 leading-relaxed">
              {course.doctrineNote} EcoVeraZ Academy confirms learning only and does not certify, approve,
              or determine compliance outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <LinkButton href="/academy/courses" variant="secondary">
                Back to courses
              </LinkButton>
              <LinkButton href="/contact?topic=academy" variant="primary">
                Training inquiry
              </LinkButton>
            </div>

            <div className="mt-4 text-xs text-text-400">
              Reference:{" "}
              <Link href="/compliance" className="underline underline-offset-4">
                Operating principles
              </Link>{" "}
              ·{" "}
              <Link href="/rri" className="underline underline-offset-4">
                RRI
              </Link>{" "}
              ·{" "}
              <Link href="/evidence-artifacts" className="underline underline-offset-4">
                Evidence Artifacts
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="grid gap-3">
              <MetricTile label="Audience" value="Teams" note={course.audience} mono />
              <MetricTile label="Duration" value={course.durationHours} note="indicative" mono />
              <MetricTile label="Certificate" value={course.certificate} note="completion only" mono />
            </div>
          </div>
        </Grid>
      </Section>

      <Section title="Lessons" subtitle="Lesson-by-lesson syllabus (expandable into video + exercises later).">
        <Grid>
          <div className="md:col-span-12 grid gap-6">
            {course.lessons.map((lesson, idx) => (
              <Card key={lesson.id}>
                <CardHeader
                  title={`${idx + 1}. ${lesson.title}`}
                  subtitle={`${lesson.minutes} minutes`}
                  right={<StatusBadge tone="neutral" mono>LESSON</StatusBadge>}
                />

                <ul className="mt-2 list-disc pl-5 text-sm text-text-300 space-y-1">
                  {lesson.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                {lesson.exercise ? (
                  <div className="mt-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
                    <div className="text-xs font-medium text-text-400">Exercise</div>
                    <div className="mt-1 text-sm text-text-300 leading-relaxed">
                      {lesson.exercise}
                    </div>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <div className="md:col-span-12">
            <Card>
              <CardHeader
                title="Certificate language (doctrine-safe)"
                subtitle="Completion confirms learning only."
                right={<StatusBadge tone="neutral" mono>LOCKED</StatusBadge>}
              />
              <div className="text-sm text-text-300 leading-relaxed">
                This certificate confirms successful completion of the EcoVeraZ Academy course{" "}
                <span className="text-text-200">{course.title}</span>. It reflects participation and
                learning only. It does not certify regulatory compliance, audit approval, or performance
                outcomes.
              </div>
            </Card>
          </div>
        </Grid>
      </Section>
    </>
  );
}
