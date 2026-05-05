import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/65 bg-white/38 p-5 shadow-[0_22px_70px_rgba(96,45,104,0.13)] ring-1 ring-pearl-50/35 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/48 hover:shadow-[0_28px_90px_rgba(149,79,137,0.22)] sm:rounded-[2rem] sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
