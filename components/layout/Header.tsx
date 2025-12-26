"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "./Container";
import { LinkButton } from "../ui/Button";
import { NAV_ITEMS } from "@/lib/mock";

type NavItem = {
  href: string;
  label: string;
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function AcademyIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={active ? "text-text-100" : "text-text-300"}
      aria-hidden="true"
    >
      <path
        d="M12 3L2.5 8l9.5 5 9.5-5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.3V16c0 1 2.8 3 6.5 3s6.5-2 6.5-3v-5.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 8v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-text-300"
    >
      <path
        d="M7 11V8a5 5 0 0110 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();

  const items: NavItem[] = (NAV_ITEMS as unknown as NavItem[]).filter(
    (i) => typeof i?.href === "string" && typeof i?.label === "string",
  );

  const academyActive = isActive(pathname, "/academy");
  const showInvestor = process.env.NEXT_PUBLIC_SHOW_INVESTOR_LINK === "true";

  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-950/85 backdrop-blur supports-[backdrop-filter]:bg-bg-950/65">
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo[1].png"
              alt="EcoVeraZ"
              width={200}
              height={56}
              priority
              className="h-10 w-auto md:h-11"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "text-sm transition-colors",
                    active ? "text-text-100" : "text-text-300 hover:text-text-100",
                  ].join(" ")}
                >
                  <span className="relative">
                    {item.label}
                    {active ? (
                      <span className="absolute -bottom-2 left-0 right-0 h-px bg-primary-400/70" />
                    ) : null}
                  </span>
                </Link>
              );
            })}

            {/* Investor link (desktop only, optional) */}
            {showInvestor && (
              <Link
                href="/investor"
                className="flex items-center gap-1.5 text-sm text-text-300 hover:text-text-100 transition-colors"
              >
                <LockIcon />
                <span>Investor</span>
              </Link>
            )}

            {/* Academy shortcut */}
            <Link
              href="/academy"
              aria-label="Academy"
              title="Academy"
              className={[
                "ml-1 inline-flex items-center justify-center rounded-md p-1.5 transition-colors",
                academyActive
                  ? "bg-surface-2 text-text-100"
                  : "text-text-300 hover:text-text-100 hover:bg-surface-2",
              ].join(" ")}
            >
              <AcademyIcon active={academyActive} />
            </Link>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/academy"
              aria-label="Academy"
              title="Academy"
              className={[
                "inline-flex items-center justify-center rounded-md p-1.5 transition-colors md:hidden",
                academyActive
                  ? "bg-surface-2 text-text-100"
                  : "text-text-300 hover:text-text-100 hover:bg-surface-2",
              ].join(" ")}
            >
              <AcademyIcon active={academyActive} />
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <LinkButton href="/contact#general" variant="secondary">
                Contact
              </LinkButton>
              <LinkButton href="/trust-core" variant="primary">
                Trust Core
              </LinkButton>
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={[
                "inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden",
                mobileOpen
                  ? "bg-surface-2 text-text-100"
                  : "text-text-300 hover:text-text-100 hover:bg-surface-2",
              ].join(" ")}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
