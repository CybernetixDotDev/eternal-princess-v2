"use client";

import { Canvas } from "@react-three/fiber";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

type CanvasWrapperProps = {
  children: ReactNode;
  className?: string;
};

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

function CrystalFallback() {
  return (
    <div
      aria-hidden="true"
      className="h-full w-full rounded-full bg-[radial-gradient(circle_at_42%_32%,rgba(255,250,244,0.9),rgba(255,198,221,0.5)_28%,rgba(196,154,255,0.32)_52%,transparent_72%)] opacity-80 blur-sm"
    />
  );
}

export function CanvasWrapper({ children, className = "" }: CanvasWrapperProps) {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setWebGLAvailable(canUseWebGL());
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {webGLAvailable ? (
        <Canvas
          camera={{ position: [0, 0, 5.2], fov: 42 }}
          dpr={[1, 1.5]}
          frameloop={prefersReducedMotion ? "demand" : "always"}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "low-power",
          }}
        >
          {children}
        </Canvas>
      ) : (
        <CrystalFallback />
      )}
    </div>
  );
}
