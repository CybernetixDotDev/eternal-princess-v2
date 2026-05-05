"use client";

import { useMemo } from "react";
import { useScrollProgress } from "@/components/motion/useScrollProgress";

export function useParallax(distance = 24) {
  const progress = useScrollProgress();

  return useMemo(() => (progress - 0.5) * distance, [distance, progress]);
}
