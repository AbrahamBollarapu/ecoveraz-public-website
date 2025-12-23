import * as React from "react";

type Tone = "good" | "warn" | "bad" | "neutral";

const toneToClasses: Record<Tone, string> = {
  good: "border-status-green text-status-green",
  warn: "border-status-amber text-status-amber",
  bad: "border-status-red text-status-red",
  neutral: "border-status-neutral text-status-neutral",
};

export function StatusBadge({
  tone = "neutral",
  children,
  mono,
}: {
  tone?: Tone;
  children: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <span className={["inline-flex items-center rounded-sm border px-2 py-1 text-xs", toneToClasses[tone], mono ? "evz-mono" : ""].join(" ")}>
      {children}
    </span>
  );
}
