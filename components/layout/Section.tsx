import * as React from "react";
import { Container } from "./Container";

type SectionSize = "sm" | "md" | "lg";

function padY(size: SectionSize, compact?: boolean) {
  // Tablet-tuned Datadog rhythm
  if (compact) {
    if (size === "lg") return "py-10 md:py-14";
    if (size === "sm") return "py-6 md:py-10";
    return "py-8 md:py-12";
  }
  if (size === "lg") return "py-14 md:py-20";
  if (size === "sm") return "py-8 md:py-12";
  return "py-12 md:py-18";
}

export function Section({
  id,
  title,
  subtitle,
  right,
  size = "md",
  compact = false,
  className = "",
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  right?: React.ReactNode;
  size?: SectionSize;
  compact?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${padY(size, compact)} ${className}`.trim()}>
      <Container>
        {title ? (
          <div className="mb-6 md:mb-8 flex items-start justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-text-100">{title}</div>
              {subtitle ? (
                <div className="mt-1 text-sm text-text-300">{subtitle}</div>
              ) : null}
            </div>
            {right ? <div className="shrink-0">{right}</div> : null}
          </div>
        ) : null}

        {children}
      </Container>
    </section>
  );
}

export function Grid({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
