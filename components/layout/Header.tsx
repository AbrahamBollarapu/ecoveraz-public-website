"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "./Container";
import { LinkButton } from "../ui/Button";
import { StatusBadge } from "../ui/StatusBadge";

type MegaLink = {
  href: string;
  title: string;
  desc: string;
  badge?: string;
};

type StartHereLink = {
  href: string;
  title: string;
  desc: string;
  badge?: string;
};

function isActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(base + "/");
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className="text-text-300"
      aria-hidden="true"
    >
      <path d="M7 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform ${open ? "rotate-180 text-text-100" : "text-text-300"}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

/** ---------------- Logo (fixed to real /public filenames) ---------------- */
function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="EcoVeraZ"
        width={140}
        height={28}
        priority
      />
      <span className="sr-only">EcoVeraZ</span>
    </div>
  );
}

/** ---------------- Solid pill-style nav (Datadog-like) ---------------- */
function navPillClasses(active: boolean) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap";
  if (active) {
    return [
      base,
      "bg-surface-2 text-text-100 border border-border",
      "ring-1 ring-primary-400/35",
      "shadow-sm",
    ].join(" ");
  }
  return [
    base,
    "bg-surface-2 text-text-200 border border-transparent",
    "hover:text-text-100 hover:bg-card/70",
    "shadow-sm shadow-black/20",
    "ring-1 ring-white/5",
  ].join(" ");
}

/** ---------------- Start Here ---------------- */
const START_HERE_LINKS: StartHereLink[] = [
  {
    href: "/platform",
    title: "Platform overview",
    desc: "Understand the end-to-end flow: measure → evidence → gates → verify.",
    badge: "FLOW",
  },
  {
    href: "/what-you-get",
    title: "What you get",
    desc: "Time, cost, trust, and risk outcomes — grounded in instrumentation.",
    badge: "VALUE",
  },
  {
    href: "/resources",
    title: "Review references",
    desc: "Canonical docs, walkthroughs, and evaluation paths.",
    badge: "READ",
  },
  {
    href: "/walkthroughs",
    title: "Proof walkthroughs",
    desc: "See the reviewer flow with redacted evidence pack examples.",
    badge: "PROOF",
  },
  {
    href: "/trust-core",
    title: "Trust Core",
    desc: "Boundaries + doctrine. Stable, versioned, regulator-safe.",
    badge: "CANON",
  },
  {
    href: "/rri",
    title: "RRI (gates)",
    desc: "Binary review-readiness posture (not scoring).",
    badge: "SPEC",
  },
  {
    href: "/contact#evaluation",
    title: "Request evaluation",
    desc: "Ask for a walkthrough + an example audit-ready file format.",
    badge: "NEXT",
  },
];

function StartHereDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const anyStartActive =
    isActive(pathname, "/platform") ||
    isActive(pathname, "/what-you-get") ||
    isActive(pathname, "/resources") ||
    isActive(pathname, "/walkthroughs") ||
    isActive(pathname, "/trust-core") ||
    isActive(pathname, "/rri");

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={navPillClasses(anyStartActive || open)}
      >
        <span>Start here</span>
        <ChevronDownIcon open={open} />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Start here"
          className="absolute left-0 top-[calc(100%+10px)] z-50 w-[420px] rounded-2xl border border-border bg-bg-900 shadow-lg"
        >
          <div className="p-3">
            <div className="px-2 pb-2 pt-1">
              <div className="text-xs text-text-400 evz-mono">GUIDED PATHS</div>
              <div className="mt-1 text-sm text-text-200">
                Quick routes for evaluators, reviewers, and first-time visitors.
              </div>
            </div>

            <div className="mt-2 grid gap-2">
              {START_HERE_LINKS.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-xl border border-border bg-card/40 px-3 py-3 transition-colors",
                      active ? "bg-surface-2" : "hover:bg-card/70",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-text-100">{l.title}</div>
                        <div className="mt-1 text-sm text-text-300">{l.desc}</div>
                      </div>
                      <StatusBadge tone="neutral" mono>
                        {l.badge ?? "OPEN"}
                      </StatusBadge>
                    </div>
                    <div className="mt-2 text-xs text-text-400">Open →</div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl border border-border bg-surface-2 px-3 py-2">
              <div className="text-xs text-text-400">
                Boundary: EcoVeraZ provides evidence posture only — no certification or compliance determinations.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/** Mobile accordion */
function MobileAccordion({
  title,
  links,
  pathname,
}: {
  title: string;
  links: MegaLink[];
  pathname: string;
}) {
  const anyActive = links.some((l) => isActive(pathname, l.href));
  return (
    <details
      className={[
        "rounded-xl border border-border bg-surface-2",
        anyActive ? "ring-1 ring-primary-400/30" : "",
      ].join(" ")}
    >
      <summary
        className={[
          "cursor-pointer list-none px-3 py-2 text-sm transition-colors flex items-center justify-between",
          anyActive ? "text-text-100" : "text-text-200 hover:text-text-100",
        ].join(" ")}
      >
        <span>{title}</span>
        <ChevronDownIcon open={false} />
      </summary>

      <div className="px-3 pb-3 pt-1 grid gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={[
              "rounded-lg border border-border bg-card/40 px-3 py-2 text-sm transition-colors",
              isActive(pathname, l.href)
                ? "bg-surface-2 text-text-100"
                : "text-text-200 hover:text-text-100 hover:bg-card/70",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-text-100 text-sm font-medium">{l.title}</div>
                <div className="text-xs text-text-400">{l.desc}</div>
              </div>
              <StatusBadge tone="neutral" mono>
                {l.badge ?? "OPEN"}
              </StatusBadge>
            </div>
          </Link>
        ))}
      </div>
    </details>
  );
}

/** Link sets */
const HOW_IT_WORKS_LINKS: MegaLink[] = [
  { href: "/platform", title: "Platform overview", desc: "End-to-end evidence pipeline: operations → evidence → verify.", badge: "FLOW" },
  { href: "/modules", title: "Modules", desc: "Composable capabilities (used as a reference index).", badge: "MOD" },
  { href: "/ladder", title: "Evidence ladder", desc: "Capture → normalize → lineage → governance → outputs → verify.", badge: "LADDER" },
  { href: "/evidence-artifacts", title: "Evidence artifacts", desc: "Packs, manifests, checksums, receipts, references.", badge: "ART" },
  { href: "/walkthroughs", title: "Proof walkthroughs", desc: "What reviewers inspect — step by step.", badge: "PROOF" },
  { href: "/rri", title: "RRI (gates)", desc: "Binary review-readiness posture (not scoring).", badge: "SPEC" },
];

const OUTCOMES_LINKS: MegaLink[] = [
  { href: "/solutions/operations", title: "Operations → evidence", desc: "Instrument operations and generate review-ready evidence artifacts.", badge: "OPS" },
  { href: "/solutions/operations#portfolio", title: "Portfolio oversight", desc: "Compare sites and windows using consistent posture and artifacts.", badge: "PORT" },
  { href: "/solutions/operations#mrv", title: "MRV enablement", desc: "Stable evidence formats designed for external inspection.", badge: "MRV" },
  { href: "/solutions/operations#audit", title: "Review-ready reporting", desc: "Structured packs, manifests, and gates for calmer reviews.", badge: "AUDIT" },
];

const SECTORS_LINKS: MegaLink[] = [
  { href: "/what-you-get#pharma", title: "Pharma & clean manufacturing", desc: "Quality-sensitive environments: evidence trails + visibility.", badge: "PHARMA" },
  { href: "/what-you-get#industrial", title: "Industrial facilities & utilities", desc: "Safety visibility + operational efficiency with evidence.", badge: "IND" },
  { href: "/what-you-get#buildings", title: "Buildings & campuses", desc: "Healthier spaces + efficiency + bounded ESG evidence.", badge: "BLDG" },
  { href: "/what-you-get#municipal", title: "Municipal programs", desc: "Portfolio oversight across zones and vendors.", badge: "CITY" },
];

const PROOF_AND_REFERENCES_LINKS: MegaLink[] = [
  { href: "/resources", title: "Resources hub", desc: "Definitions, doctrine, and review-ready references.", badge: "HUB" },
  { href: "/trust-core", title: "Trust Core", desc: "Boundaries + doctrine. Stable, versioned, regulator-safe.", badge: "CANON" },
  { href: "/doctrine", title: "Operating doctrine", desc: "Scope, definitions, responsibilities, and guardrails.", badge: "DOC" },
  { href: "/compliance", title: "Compliance", desc: "Boundaries, disclaimers, and review-safe positioning.", badge: "SAFE" },
  { href: "/rri", title: "RRI specification", desc: "Readiness gates: continuity, integrity, lineage, disclosure.", badge: "RRI" },
  { href: "/walkthroughs", title: "Walkthroughs", desc: "Reviewer flow with inspectable evidence pack formats.", badge: "GUIDE" },
  { href: "/academy", title: "Academy", desc: "Evidence-first ESG learning paths (education only).", badge: "EDU" },
];

function MegaDropdown({
  label,
  links,
  pathname,
}: {
  label: string;
  links: MegaLink[];
  pathname: string;
}) {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const anyActive = links.some((l) => isActive(pathname, l.href));

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={navPillClasses(anyActive || open)}
      >
        <span>{label}</span>
        <ChevronDownIcon open={open} />
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={label}
          className="absolute left-0 top-[calc(100%+10px)] z-50 w-[520px] rounded-2xl border border-border bg-bg-900 shadow-lg"
        >
          <div className="p-3">
            <div className="mt-2 grid gap-2">
              {links.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={[
                      "block rounded-xl border border-border bg-card/40 px-3 py-3 transition-colors",
                      active ? "bg-surface-2" : "hover:bg-card/70",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-text-100">{l.title}</div>
                        <div className="mt-1 text-sm text-text-300">{l.desc}</div>
                      </div>
                      <StatusBadge tone="neutral" mono>
                        {l.badge ?? "OPEN"}
                      </StatusBadge>
                    </div>
                    <div className="mt-2 text-xs text-text-400">Open →</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const showInvestor = process.env.NEXT_PUBLIC_SHOW_INVESTOR_LINK === "true";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-900/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <StartHereDropdown pathname={pathname} />
            <MegaDropdown label="How it works" links={HOW_IT_WORKS_LINKS} pathname={pathname} />
            <MegaDropdown label="Outcomes" links={OUTCOMES_LINKS} pathname={pathname} />
            <MegaDropdown label="Sectors" links={SECTORS_LINKS} pathname={pathname} />

            <Link href="/what-you-get" className={navPillClasses(isActive(pathname, "/what-you-get"))}>
              What you get
            </Link>

            <MegaDropdown label="Proof & references" links={PROOF_AND_REFERENCES_LINKS} pathname={pathname} />

            {showInvestor ? (
              <Link href="/investor" className={navPillClasses(isActive(pathname, "/investor"))}>
                <span className="inline-flex items-center gap-2">
                  <LockIcon />
                  Investors
                </span>
              </Link>
            ) : null}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LinkButton href="/contact" variant="secondary">
              Contact
            </LinkButton>
            <LinkButton href="/trust-core" variant="primary">
              Trust Core
            </LinkButton>
          </div>

          <button
            type="button"
            className="lg:hidden rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-text-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Open navigation"
          >
            Menu
          </button>
        </div>

        {mobileOpen ? (
          <div className="lg:hidden pb-4">
            <div className="mt-3 grid gap-3">
              <div className="rounded-xl border border-border bg-surface-2 p-3">
                <div className="text-xs text-text-400 evz-mono">START HERE</div>
                <div className="mt-1 grid gap-2">
                  {START_HERE_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        "rounded-lg border border-border bg-card/40 px-3 py-2 text-sm transition-colors",
                        isActive(pathname, l.href)
                          ? "bg-surface-2 text-text-100"
                          : "text-text-200 hover:text-text-100 hover:bg-card/70",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-text-100 text-sm font-medium">{l.title}</div>
                          <div className="text-xs text-text-400">{l.desc}</div>
                        </div>
                        <StatusBadge tone="neutral" mono>
                          {l.badge ?? "OPEN"}
                        </StatusBadge>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <MobileAccordion title="How it works" links={HOW_IT_WORKS_LINKS} pathname={pathname} />
              <MobileAccordion title="Outcomes" links={OUTCOMES_LINKS} pathname={pathname} />
              <MobileAccordion title="Sectors" links={SECTORS_LINKS} pathname={pathname} />
              <MobileAccordion title="Proof & references" links={PROOF_AND_REFERENCES_LINKS} pathname={pathname} />

              {showInvestor ? (
                <Link
                  href="/investor"
                  onClick={() => setMobileOpen(false)}
                  className={navPillClasses(isActive(pathname, "/investor"))}
                >
                  <span className="inline-flex items-center gap-2">
                    <LockIcon />
                    Investors
                  </span>
                </Link>
              ) : null}

              <div className="grid grid-cols-2 gap-2">
                <span onClick={() => setMobileOpen(false)} className="contents">
                  <LinkButton href="/contact" variant="secondary">
                    Contact
                  </LinkButton>
                </span>

                <span onClick={() => setMobileOpen(false)} className="contents">
                  <LinkButton href="/trust-core" variant="primary">
                    Trust Core
                  </LinkButton>
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
