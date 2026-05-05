import type { ReactNode } from "react";

type ShimmerTextProps = {
  children: ReactNode;
  className?: string;
};

export function ShimmerText({ children, className = "" }: ShimmerTextProps) {
  return <span className={`effect-shimmer-text ${className}`}>{children}</span>;
}
