// app/platform/page.tsx
import * as React from "react";

import { Section } from "@/components/layout/Section";
import { Card, CardHeader } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { LinkButton } from "@/components/ui/Button";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-text-300" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function MiniTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
      <div className="text-xs text-text-400">{label}</div>
      <div className="mt-1 text-sm font-semibold text-text-100">{value}</div>
    </div>
  );
}

export default function PlatformPage() {
  return (
    <>
      {/* HERO */}
      <Section className="bg-bg-900">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-sm text-text-300">EcoVeraZ platform</div>
            <h1 className="mt-3 text-3xl font-semibold leading-tight text-text-100 md:text-4xl">
              Evidence infrastructure for ESG and climate claims.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-200">
              EcoVeraZ turns operational and environmental data into audit-ready evidence packs with traceable lineage.
              It is designed for inspection, governance, and repeatability — not scoring or certification.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <StatusBadge tone="neutral">Evidence-first</StatusBadge>
              <StatusBadge tone="neutral">Audit-ready outputs</StatusBadge>
              <StatusBadge tone="neutral">Bounded claims</StatusBadge>
              <StatusBadge tone="neutral">Optional verification</StatusBadge>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
              <LinkButton href="/modules" variant="primary">
                Explore modules
              </LinkButton>

              {/* FIX: route consistency */}
              <LinkButton href="/trust" variant="secondary">
                Trust Core
              </LinkButton>

              <LinkButton href="/contact#evaluation" variant="secondary">
                Request evaluation
              </LinkButton>
            </div>

            {/* Jump strip (anchors) */}
            <div className="mt-4 rounded-2xl border border-border bg-card/30 p-4">
              <div className="text-xs text-text-300 evz-mono">JUMP TO</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <LinkButton href="#how" variant="secondary">
                  How it works
                </LinkButton>
                <LinkButton href="#outputs" variant="secondary">
                  What you get
                </LinkButton>
                <LinkButton href="#capabilities" variant="secondary">
                  Capabilities
                </LinkButton>
                <LinkButton href="#outcomes" variant="secondary">
                  Outcomes
                </LinkButton>
                <LinkButton href="#next" variant="secondary">
                  Evaluator pack
                </LinkButton>
              </div>
            </div>

            {/* Tiny tangible Before/After strip (hero-level) */}
            <div className="mt-4 rounded-2xl border border-border bg-card/30 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge tone="neutral" mono>
                  BEFORE
                </StatusBadge>
                <StatusBadge tone="good" mono>
                  WITH ECOVERAZ
                </StatusBadge>
                <StatusBadge tone="neutral" mono>
                  IMPACT
                </StatusBadge>
              </div>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
                  <div className="text-xs text-text-400">Audit prep</div>
                  <div className="mt-1 text-sm font-semibold text-text-100">From “compile” → “generate”</div>
                  <div className="mt-1 text-xs text-text-300">Packs are produced with windows + manifests.</div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
                  <div className="text-xs text-text-400">Review loops</div>
                  <div className="mt-1 text-sm font-semibold text-text-100">From “clarify” → “inspect”</div>
                  <div className="mt-1 text-xs text-text-300">Traceability reduces back-and-forth.</div>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 px-4 py-3">
                  <div className="text-xs text-text-400">Trust</div>
                  <div className="mt-1 text-sm font-semibold text-text-100">From assertions → evidence cues</div>
                  <div className="mt-1 text-xs text-text-300">Manifests + hashes support drift detection.</div>
                </div>
              </div>

              <div className="mt-2 text-xs text-text-400">
                Illustrative workflow change only. EcoVeraZ does not certify, score, or determine external outcomes.
              </div>

              {/* Cross-link to Resources tangible benefits */}
              <div className="mt-3 text-sm text-text-200">
                Want the detailed before/after?{" "}
                <a
                  href="/resources#before-after"
                  className="font-medium text-text-100 underline underline-offset-4 hover:opacity-90"
                >
                  Resources (Tangible benefits)
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <MiniTile label="Output" value="Evidence packs" />
              <MiniTile label="Reviewer question" value="Show the trail" />
              <MiniTile label="Governance" value="Windows + gates" />
              <MiniTile label="Boundary" value="No certification" />
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT IT IS / IS NOT */}
      <Section className="bg-surface-2">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is"
              subtitle="A system that produces review-ready evidence from real-world data."
              right={<StatusBadge tone="good">YES</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>Evidence packs with manifests and bounded windows</Bullet>
                <Bullet>Traceable lineage from source → record → file</Bullet>
                <Bullet>Readiness gates for review posture (not scoring)</Bullet>
                <Bullet>Optional verification artifacts (tamper-detection)</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="What EcoVeraZ is not"
              subtitle="No compliance promises, no certification outcomes, no rating claims."
              right={<StatusBadge tone="neutral">NO</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>A certification body or approval authority</Bullet>
                <Bullet>A consulting deliverable or manual reporting service</Bullet>
                <Bullet>A guarantee of compliance, credits, or regulatory outcomes</Bullet>
                <Bullet>A substitute for independent verification</Bullet>
              </ul>
              <div className="mt-3 text-xs text-text-400">
                EcoVeraZ provides evidence infrastructure. Determination remains external.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="bg-bg-900">
        <div id="how" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">How it works (plain English)</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            EcoVeraZ turns raw measurements into evidence that can be inspected. The point is not “better dashboards” —
            the point is a repeatable review path.
          </p>
        </div>

        {/* 1-minute diagram block (text-only) */}
        <div className="mb-4">
          <Card className="rounded-2xl border border-border bg-card/30">
            <CardHeader
              title="1-minute diagram"
              subtitle="The shortest way to understand the system."
              right={
                <StatusBadge tone="neutral" mono>
                  DIAGRAM
                </StatusBadge>
              }
            />
            <div className="px-5 pb-5">
              <div className="rounded-2xl border border-border bg-bg-900/30 p-4">
                <div className="text-xs text-text-400 evz-mono">FLOW</div>
                <div className="mt-2 text-sm text-text-100">
                  Measure <span className="text-text-300">→</span> Store{" "}
                  <span className="text-text-300">→</span> Pack{" "}
                  <span className="text-text-300">→</span> Gate{" "}
                  <span className="text-text-300">→</span>{" "}
                  <span className="text-text-200">(Optional)</span> Verify
                </div>
                <div className="mt-2 text-sm text-text-300 leading-relaxed">
                  <span className="text-text-100">Measure</span> creates raw records.{" "}
                  <span className="text-text-100">Store</span> keeps them time-stamped.{" "}
                  <span className="text-text-100">Pack</span> produces review-ready files with a manifest and defined windows.{" "}
                  <span className="text-text-100">Gate</span> expresses readiness posture and disclosures.{" "}
                  <span className="text-text-100">Verify</span> (optional) adds tamper-detection cues (e.g., checksums).
                </div>
                <div className="mt-3 text-xs text-text-400">
                  This is evidence infrastructure. It does not certify, score, or determine outcomes.
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* NEW: Proof links strip (stitches pages at decision point) */}
        <div className="mb-6 rounded-2xl border border-border bg-card/30 p-4">
          <div className="text-xs text-text-300 evz-mono">PROOF LINKS</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <LinkButton href="/walkthroughs" variant="secondary">
              See the proof trail
            </LinkButton>
            <LinkButton href="/resources#before-after" variant="secondary">
              Tangible benefits
            </LinkButton>
            <LinkButton href="/trust" variant="secondary">
              Boundaries (Trust Core)
            </LinkButton>
          </div>
          <div className="mt-2 text-xs text-text-400">
            These links help non-technical reviewers validate “what it is” and “what it isn’t” without assumptions.
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card className="rounded-2xl border border-border bg-card/40">
              <CardHeader
                title="The review path"
                subtitle="A predictable sequence reviewers can follow every time."
                right={<StatusBadge tone="neutral">PATH</StatusBadge>}
              />
              <div className="mt-3 text-sm text-text-300">
                <ul className="space-y-2">
                  <Bullet>Measure (sensors / systems)</Bullet>
                  <Bullet>Store (time-stamped raw records)</Bullet>
                  <Bullet>Package (audit-ready files)</Bullet>
                  <Bullet>Gate (readiness + disclosure posture)</Bullet>
                  <Bullet>Verify (optional proof artifacts)</Bullet>
                </ul>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-3">
              <MiniTile label="Primary question" value="Where did this come from?" />
              <MiniTile label="Primary answer" value="Follow the trail" />
              <MiniTile label="Primary artifact" value="Manifest + hashes" />
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT YOU GET */}
      <Section className="bg-surface-2">
        <div id="outputs" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">What you get</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            EcoVeraZ produces structured outputs designed for inspection. These outputs are built to reduce ambiguity in
            review — not to imply compliance.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Evidence packs"
              subtitle="Structured folders of raw + derived data, plus a manifest and checks."
              right={<StatusBadge tone="neutral">OUTPUT</StatusBadge>}
            />

            <div className="mt-3 text-sm text-text-300">
              <div className="rounded-xl border border-border bg-surface-1 p-4">
                <div className="text-xs text-text-300 evz-mono">EVIDENCE PACK GLOSSARY</div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  <Bullet>
                    <span className="text-text-100 font-medium">Manifest</span> — a simple file list that states what’s included
                    (and what isn’t).
                  </Bullet>
                  <Bullet>
                    <span className="text-text-100 font-medium">Window</span> — the explicit start/end time boundaries for the
                    evidence.
                  </Bullet>
                  <Bullet>
                    <span className="text-text-100 font-medium">SHA256</span> — a fingerprint of a file used to detect changes
                    (tamper-detection).
                  </Bullet>
                </ul>

                <div className="mt-3 rounded-lg border border-border bg-card/40 p-3">
                  <div className="text-xs text-text-300 evz-mono">EVIDENCE PACK ≠ CERTIFICATION</div>
                  <div className="mt-1 text-sm text-text-300">
                    Proof artifacts improve reviewability and drift detection — they do not certify compliance or outcomes.
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <ul className="space-y-2">
                  <Bullet>Manifest (what’s included)</Bullet>
                  <Bullet>Window (start/end boundaries)</Bullet>
                  <Bullet>Raw data files (source-aligned)</Bullet>
                  <Bullet>Derived summaries (transparent)</Bullet>
                  <Bullet>Checksums (tamper-detection)</Bullet>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Readiness gates (RRI)"
              subtitle="A posture check: continuity, integrity, lineage, disclosures."
              right={<StatusBadge tone="neutral">GATE</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>Continuity: is coverage stable?</Bullet>
                <Bullet>Integrity: are checks applied?</Bullet>
                <Bullet>Lineage: can the trail be followed?</Bullet>
                <Bullet>Disclosure: what must be stated?</Bullet>
              </ul>
              <div className="mt-3 text-xs text-text-400">RRI is not scoring and does not imply compliance.</div>
            </div>
          </Card>
        </div>
      </Section>

      {/* CORE CAPABILITIES */}
      <Section className="bg-bg-900">
        <div id="capabilities" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">Core capabilities</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            These are expressed as modules on the next page. Here we keep it outcome-oriented and non-technical.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Evidence automation"
              subtitle="Evidence is generated continuously, not assembled at the last minute."
              right={<StatusBadge tone="neutral">CORE</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>Monthly / windowed evidence packs</Bullet>
                <Bullet>Standardized artifacts and manifests</Bullet>
                <Bullet>Repeatable outputs across sites</Bullet>
              </ul>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Review defensibility"
              subtitle="Clarity for auditors, regulators, and boards."
              right={<StatusBadge tone="neutral">CORE</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>Traceable lineage</Bullet>
                <Bullet>Integrity checks and tamper-detection</Bullet>
                <Bullet>Repeatable review workflows</Bullet>
                <Bullet>Bounded claims with evidence links</Bullet>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* STAKEHOLDER OUTCOMES (ILLUSTRATIVE) */}
      <Section className="bg-bg-900">
        <div id="outcomes" className="mb-6 max-w-3xl scroll-mt-28">
          <h2 className="text-xl font-semibold text-text-100">What changes for stakeholders (illustrative)</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-300">
            Tangible, process-level effects when evidence becomes a system output. Examples are illustrative and not
            performance guarantees.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Time: less manual compilation"
              subtitle="Teams spend less time assembling spreadsheets and screenshots before reviews."
              right={<StatusBadge tone="neutral" mono>ILLUSTRATIVE</StatusBadge>}
            />
            <div className="mt-3 text-sm leading-relaxed text-text-300">
              <div className="text-xs text-text-400 evz-mono">MECHANISM</div>
              <div className="mt-1">
                Evidence packs are produced with defined windows and manifests, so reviewers can orient quickly.
              </div>

              <div className="mt-4 rounded-xl border border-border bg-card/40 p-3">
                <div className="text-xs text-text-400 evz-mono">ILLUSTRATION</div>
                <div className="mt-1">
                  Instead of multiple teams spending days assembling files, a reviewer receives one structured pack with a
                  manifest and clear window boundaries.
                </div>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Money: lower rework and fewer loops"
              subtitle="Reduced internal effort hours and fewer external clarification cycles."
              right={<StatusBadge tone="neutral" mono>ILLUSTRATIVE</StatusBadge>}
            />
            <div className="mt-3 text-sm leading-relaxed text-text-300">
              <div className="text-xs text-text-400 evz-mono">MECHANISM</div>
              <div className="mt-1">
                A traceable path (source → record → file) reduces back-and-forth caused by missing context.
              </div>

              <div className="mt-4 rounded-xl border border-border bg-card/40 p-3">
                <div className="text-xs text-text-400 evz-mono">ILLUSTRATION</div>
                <div className="mt-1">
                  Avoid repeat consultant or internal rework cycles that happen when evidence cannot be reconstructed cleanly
                  from emails and spreadsheets.
                </div>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Trust: faster confidence checks"
              subtitle="Reviewers can detect scope and changes without deep investigation."
              right={<StatusBadge tone="neutral" mono>ILLUSTRATIVE</StatusBadge>}
            />
            <div className="mt-3 text-sm leading-relaxed text-text-300">
              <div className="text-xs text-text-400 evz-mono">MECHANISM</div>
              <div className="mt-1">
                Manifests describe what is included; hashes help detect file drift; gates clarify readiness posture.
              </div>

              <div className="mt-4 rounded-xl border border-border bg-card/40 p-3">
                <div className="text-xs text-text-400 evz-mono">ILLUSTRATION</div>
                <div className="mt-1">
                  If a CSV changes, its fingerprint changes — so a reviewer can spot drift immediately, without debating
                  which version is “correct.”
                </div>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Governance: predictable oversight"
              subtitle="Consistent windows and formats make cross-site review more comparable."
              right={<StatusBadge tone="neutral" mono>ILLUSTRATIVE</StatusBadge>}
            />
            <div className="mt-3 text-sm leading-relaxed text-text-300">
              <div className="text-xs text-text-400 evz-mono">MECHANISM</div>
              <div className="mt-1">
                Fixed time windows and repeatable evidence structure prevent mixing periods and reduce ambiguity.
              </div>

              <div className="mt-4 rounded-xl border border-border bg-card/40 p-3">
                <div className="text-xs text-text-400 evz-mono">ILLUSTRATION</div>
                <div className="mt-1">
                  Monthly windows prevent mixing months, so oversight discussions focus on governance signals instead of
                  reconstructing what was included.
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-4 text-xs text-text-400">
          Illustrations describe process effects only. Actual effort, cost, and outcomes depend on context and remain
          externally determined.
        </div>
      </Section>

      {/* NEXT STEPS */}
      <Section className="bg-surface-2">
        <div id="next" className="scroll-mt-28" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Explore modules"
              subtitle="Understand capabilities by what they do and what evidence they produce."
              right={<StatusBadge tone="neutral">NEXT</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>MRV and operational evidence generation</Bullet>
                <Bullet>Audit packs and manifests</Bullet>
                <Bullet>Verification and proof artifacts</Bullet>
              </ul>
              <div className="mt-4">
                <LinkButton href="/modules" variant="primary">
                  Go to modules
                </LinkButton>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border border-border bg-card/40">
            <CardHeader
              title="Request an evaluation"
              subtitle="Ask for a redacted evidence pack and follow the review path."
              right={<StatusBadge tone="neutral">NEXT</StatusBadge>}
            />
            <div className="mt-3 text-sm text-text-300">
              <ul className="space-y-2">
                <Bullet>Evidence pack structure</Bullet>
                <Bullet>Manifest + window boundaries</Bullet>
                <Bullet>Readiness gates walkthrough</Bullet>
              </ul>

              <div className="mt-4 rounded-2xl border border-border bg-surface-1 p-4">
                <div className="text-xs text-text-300 evz-mono">EVALUATOR PACK (WHAT YOU’LL RECEIVE)</div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  <Bullet>
                    A <span className="text-text-100 font-medium">redacted evidence pack example</span> (structure + contents)
                  </Bullet>
                  <Bullet>
                    A sample <span className="text-text-100 font-medium">manifest</span> showing window boundaries + artifact list
                  </Bullet>
                  <Bullet>
                    A short <span className="text-text-100 font-medium">review path walkthrough</span>: source → record → file → gate
                  </Bullet>
                  <Bullet>
                    A clear <span className="text-text-100 font-medium">boundaries statement</span> (what EcoVeraZ does not claim)
                  </Bullet>
                </ul>
                <div className="mt-2 text-xs text-text-400">
                  Provided for evaluation and reviewability. Not certification, not scoring, and not an external determination.
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-card/30 p-4">
                <div className="text-xs text-text-300 evz-mono">WHAT TO ASK US FOR</div>
                <ul className="mt-2 space-y-2 text-sm text-text-200">
                  <Bullet>Your target reporting window (monthly / quarterly) and what “period” means for your teams</Bullet>
                  <Bullet>A sample pack for one site: what’s inside, what’s outside, and how it maps to claims</Bullet>
                  <Bullet>How lineage is demonstrated in your environment (source → record → file)</Bullet>
                  <Bullet>Which disclosures you should include alongside evidence (bounded language)</Bullet>
                  <Bullet>How you want reviewers to navigate: auditor path vs board path</Bullet>
                </ul>
              </div>

              <div className="mt-4">
                <LinkButton href="/contact#evaluation" variant="secondary">
                  Request evaluation
                </LinkButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
