import { RRIStatus } from "@/lib/rri/types";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function RRIBadge({ status }: { status: RRIStatus }) {
  if (status === "REVIEW_READY") {
    return <StatusBadge tone="good" mono>REVIEW-READY</StatusBadge>;
  }
  if (status === "CONDITIONALLY_READY") {
    return <StatusBadge tone="warn" mono>CONDITIONAL</StatusBadge>;
  }
  return <StatusBadge tone="bad" mono>NOT REVIEWABLE</StatusBadge>;
}
