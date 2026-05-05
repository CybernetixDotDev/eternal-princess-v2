"use client";

import { useEffect, useState } from "react";

export type StorySection =
  | "hero"
  | "inner-image"
  | "atelier"
  | "garden"
  | "cosmos"
  | "playground"
  | "invitation";

const fallbackSection: StorySection = "hero";
const storySections = new Set<StorySection>([
  "hero",
  "inner-image",
  "atelier",
  "garden",
  "cosmos",
  "playground",
  "invitation",
]);

function toStorySection(value: string | undefined) {
  if (value && storySections.has(value as StorySection)) {
    return value as StorySection;
  }

  return fallbackSection;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] =
    useState<StorySection>(fallbackSection);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-story-section]"),
    );

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const ratioDifference = b.intersectionRatio - a.intersectionRatio;

            if (Math.abs(ratioDifference) > 0.08) {
              return ratioDifference;
            }

            return (
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
            );
          });

        const nextSection = visibleSections[0]?.target.getAttribute(
          "data-story-section",
        );

        if (nextSection) {
          setActiveSection(toStorySection(nextSection));
        }
      },
      {
        rootMargin: "-22% 0px -42% 0px",
        threshold: [0.16, 0.28, 0.42, 0.58, 0.72],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
