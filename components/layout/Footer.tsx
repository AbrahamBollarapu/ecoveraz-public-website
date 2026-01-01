// components/layout/Footer.tsx
import Link from "next/link";

import { Container } from "./Container";
import { Divider } from "../ui/Divider";

const DISCLAIMERS = [
  "Evidence ≠ outcomes",
  "Alignment ≠ certification",
  "Verification ≠ regulatory approval",
];

const TRUST_CORE_LINKS = [
  { href: "/trust-core", label: "Trust Core" },
  { href: "/rri", label: "RRI Specification" },
  { href: "/evidence-artifacts", label: "Evidence Artifacts" },
  { href: "/walkthroughs", label: "Walkthroughs" },
];

const EXPLORE_LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/what-you-get", label: "What EcoVeraZ Produces" },
  { href: "/compliance", label: "Compliance posture" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border-700 bg-bg-900">
      <Container>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Disclosures */}
            <div>
              <div className="text-sm font-semibold text-text-200">Disclosures</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {DISCLAIMERS.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-300"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-text-400 leading-relaxed">
                EcoVeraZ provides evidence infrastructure for external review. It does not certify, approve, score, or
                determine compliance outcomes.
              </div>

              <div className="mt-3 text-xs text-text-400 leading-relaxed">
                If examples or visuals are shown, they are illustrative unless explicitly stated otherwise.
              </div>
            </div>

            {/* Trust Core */}
            <div>
              <div className="text-sm font-semibold text-text-200">Trust Core</div>
              <div className="mt-3 grid grid-cols-1 gap-2">
                {TRUST_CORE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-text-300 hover:text-text-200 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 text-xs text-text-400">
                Canonical definitions and boundaries for evidence posture.
              </div>
            </div>

            {/* Explore */}
            <div>
              <div className="text-sm font-semibold text-text-200">Explore</div>
              <div className="mt-3 grid grid-cols-1 gap-2">
                {EXPLORE_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-text-300 hover:text-text-200 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 text-xs text-text-400">
                For learning content, use Academy (education only). For evaluation, start with Platform → Outputs →
                Walkthroughs.
              </div>
            </div>
          </div>

          <div className="my-8">
            <Divider />
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-text-400">© {new Date().getFullYear()} EcoVeraZ. All rights reserved.</div>
            <div className="text-sm text-text-400">Operational evidence infrastructure.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
