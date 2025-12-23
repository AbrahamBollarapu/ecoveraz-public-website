import * as React from "react";

import { RRIPillars } from "@/lib/rri/types";
import { KpiRow } from "@/components/ui/KpiRow";
import { StatusBadge } from "@/components/ui/StatusBadge";

function pill(tone: "good" | "warn" | "bad" | "neutral", label: string) {
  return (
    <StatusBadge tone={tone} mono>
      {label}
    </StatusBadge>
  );
}

export function RRIPillarsView({ p }: { p: RRIPillars }) {
  return (
    <div className="grid grid-cols-1 gap-2">
      <KpiRow
        label="Continuity"
        value={pill(
          p.continuity === "OK"
            ? "good"
            : p.continuity === "DEGRADED"
              ? "warn"
              : "bad",
          p.continuity
        )}
      />
      <KpiRow
        label="Integrity"
        value={pill(
          p.integrity === "ENABLED"
            ? "good"
            : p.integrity === "PARTIAL"
              ? "warn"
              : "bad",
          p.integrity
        )}
      />
      <KpiRow
        label="Lineage"
        value={pill(
          p.lineage === "TRACEABLE"
            ? "good"
            : p.lineage === "PARTIAL"
              ? "warn"
              : "bad",
          p.lineage
        )}
      />
      <KpiRow
        label="Disclosure boundary"
        value={pill(
          p.disclosure === "CONTROLLED"
            ? "good"
            : p.disclosure === "UNKNOWN"
              ? "warn"
              : "bad",
          p.disclosure
        )}
      />
    </div>
  );
}
