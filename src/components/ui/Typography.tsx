import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum-800/70 sm:text-sm">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight text-plum-950 sm:text-5xl">
      {children}
    </h2>
  );
}
