import * as React from "react";

export function MetricTile({
  label,
  value,
  note,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  note?: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-md border border-border-700 bg-bg-850 p-3">
      <div className="text-sm text-text-300">{label}</div>
      <div className={(mono ? "evz-mono " : "") + "mt-1 text-2xl font-semibold"}>{value}</div>
      {note ? <div className="mt-1 text-sm text-text-400">{note}</div> : null}
    </div>
  );
}
