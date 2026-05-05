import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function PageSection({ children, className = "", id }: PageSectionProps) {
  return (
    <section
      id={id}
      data-story-section={id}
      className={`story-section relative px-4 py-20 sm:px-8 sm:py-24 lg:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
