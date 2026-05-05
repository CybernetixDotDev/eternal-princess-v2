"use client";

import type { CSSProperties, ReactNode } from "react";
import { useParallax } from "@/components/motion/useParallax";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type FloatingElementProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
  horizontal?: boolean;
};

export function FloatingElement({
  children,
  className = "",
  distance = 24,
  horizontal = false,
}: FloatingElementProps) {
  const offset = useParallax(distance);
  const prefersReducedMotion = useReducedMotion();
  const style: CSSProperties = prefersReducedMotion
    ? {}
    : {
        transform: horizontal
          ? `translate3d(${offset}px, 0, 0)`
          : `translate3d(0, ${offset}px, 0)`,
      };

  return (
    <div className={`motion-float ${className}`} style={style}>
      {children}
    </div>
  );
}
