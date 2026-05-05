"use client";

import { useEffect } from "react";
import { useActiveSection } from "@/components/motion/useActiveSection";

export function StoryAtmosphere() {
  const activeSection = useActiveSection();

  useEffect(() => {
    document.documentElement.dataset.storySection = activeSection;

    return () => {
      delete document.documentElement.dataset.storySection;
    };
  }, [activeSection]);

  return null;
}
