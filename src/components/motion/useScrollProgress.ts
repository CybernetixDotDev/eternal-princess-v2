"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

const subscribers = new Set<(progress: number) => void>();
let currentProgress = 0;
let frame = 0;
let isListening = false;

function getScrollProgress() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  return Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1);
}

function publishProgress() {
  frame = 0;
  currentProgress = getScrollProgress();

  subscribers.forEach((subscriber) => {
    subscriber(currentProgress);
  });
}

function requestUpdate() {
  if (frame === 0) {
    frame = window.requestAnimationFrame(publishProgress);
  }
}

function startListening() {
  if (isListening) {
    return;
  }

  isListening = true;
  publishProgress();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function stopListening() {
  if (!isListening || subscribers.size > 0) {
    return;
  }

  isListening = false;

  if (frame !== 0) {
    window.cancelAnimationFrame(frame);
    frame = 0;
  }

  window.removeEventListener("scroll", requestUpdate);
  window.removeEventListener("resize", requestUpdate);
}

export function useScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    subscribers.add(setProgress);
    startListening();
    requestUpdate();

    return () => {
      subscribers.delete(setProgress);
      stopListening();
    };
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? 0 : progress;
}
