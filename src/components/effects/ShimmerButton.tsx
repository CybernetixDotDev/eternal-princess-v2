import Link from "next/link";
import type { ReactNode } from "react";

type ShimmerButtonProps = {
  children: ReactNode;
  href: string;
};

export function ShimmerButton({ children, href }: ShimmerButtonProps) {
  return (
    <Link
      href={href}
      className="effect-shimmer-button inline-flex rounded-full bg-plum-900 px-6 py-3 text-sm font-semibold text-pearl-50 shadow-[0_16px_45px_rgba(96,45,104,0.3)] transition hover:-translate-y-0.5 hover:bg-plum-800"
    >
      {children}
    </Link>
  );
}
