import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-plum-900 text-pearl-50 shadow-[0_16px_45px_rgba(96,45,104,0.3)] hover:bg-plum-800"
      : "border border-pearl-100/80 bg-white/35 text-plum-900 hover:bg-white/55";

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </Link>
  );
}
