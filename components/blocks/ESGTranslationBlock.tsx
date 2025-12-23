import { Card } from "@/components/ui/Card";

type Props = {
  title?: string;
  subtitle?: string;
};

export function ESGTranslationBlock({
  title = "Where EcoVeraZ fits in sustainability and ESG workflows",
  subtitle = "Evidence infrastructure supporting SDG, Net Zero, and ESG review contexts.",
}: Props) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <div className="text-base font-semibold text-text-100">
            {title}
          </div>
          <div className="mt-1 text-sm text-text-300">
            {subtitle}
          </div>
        </div>

        <div className="text-sm text-text-300 space-y-3">
          <p>
            Organizations pursuing sustainability initiatives, SDG-aligned
            objectives, Net Zero targets, or ESG disclosure requirements require
            verifiable operational evidence to support external review.
          </p>

          <p>
            EcoVeraZ operates at the evidence layer of these workflows. It
            structures operational measurements into review-ready artifacts
            that may be referenced by auditors, assurance providers,
            regulators, or reporting platforms.
          </p>
        </div>

        <div className="text-xs text-text-400 pt-2 border-t border-border-800">
          Boundary: EcoVeraZ does not define targets, assess performance, certify
          outcomes, or determine regulatory compliance. All determinations
          remain external.
        </div>
      </div>
    </Card>
  );
}
