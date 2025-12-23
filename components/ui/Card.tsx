import * as React from "react";

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function Card({
  children,
  dense,
  className,
}: {
  children: React.ReactNode;
  dense?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-md border border-border-700 bg-bg-800", dense ? "p-3" : "p-4", className)}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-start justify-between gap-4">
      <div>
        <div className="text-base font-semibold text-text-100">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-text-300">{subtitle}</div> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
