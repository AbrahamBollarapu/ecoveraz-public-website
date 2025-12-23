import * as React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary";

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 py-2 text-sm " +
  "transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-400/40";

const variants: Record<Variant, string> = {
  primary: "bg-accent-500 text-bg-900 hover:bg-accent-400 active:bg-accent-600",
  secondary: "border border-border-650 bg-transparent text-text-200 hover:bg-bg-750",
};

export function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
  className,
}: {
  variant?: Variant;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <button type={type} onClick={onClick} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(base, variants[variant], "no-underline", className)}>
      {children}
    </Link>
  );
}
