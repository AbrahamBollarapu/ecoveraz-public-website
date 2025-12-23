"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import { TrendPoint } from "@/lib/mock-chart";

export function OperationalTrendChart({
  data,
  thresholdLow,
  thresholdHigh,
}: {
  data: TrendPoint[];
  thresholdLow?: number;
  thresholdHigh?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
        <CartesianGrid
          stroke="var(--evz-chart-grid)"
          strokeDasharray="3 3"
        />

        <XAxis
          dataKey="t"
          tick={{ fill: "var(--evz-chart-label)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tick={{ fill: "var(--evz-chart-label)", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={40}
        />

        {thresholdLow !== undefined && (
          <ReferenceLine
            y={thresholdLow}
            stroke="var(--evz-status-amber)"
            strokeDasharray="4 4"
          />
        )}

        {thresholdHigh !== undefined && (
          <ReferenceLine
            y={thresholdHigh}
            stroke="var(--evz-status-green)"
            strokeDasharray="4 4"
          />
        )}

        <Area
          type="monotone"
          dataKey="value"
          stroke="var(--evz-accent-400)"
          fill="var(--evz-accent-400)"
          fillOpacity={0.15}
          strokeWidth={2}
          dot={false}
          activeDot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
