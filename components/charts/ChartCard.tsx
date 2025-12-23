import * as React from "react";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ChartCard({
  title,
  subtitle,
  windowLabel = "24H",
  children,
  note,
}: {
  title: string;
  subtitle?: string;
  windowLabel?: string;
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <Card dense>
      <CardHeader
        title={title}
        subtitle={subtitle}
        right={
          <div className="flex items-center gap-2">
            <StatusBadge tone="neutral" mono>
              {windowLabel}
            </StatusBadge>
          </div>
        }
      />

      <div className="h-56 w-full rounded-md border border-border-700 bg-bg-850 p-2">
        {children}
      </div>

      {note ? (
        <div className="mt-3 text-xs text-text-400">{note}</div>
      ) : null}
    </Card>
  );
}
