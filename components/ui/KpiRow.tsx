import * as React from "react";

export function KpiRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="text-sm text-text-300">{label}</div>
      <div className={(mono ? "evz-mono " : "") + "text-sm text-text-200"}>{value}</div>
    </div>
  );
}
