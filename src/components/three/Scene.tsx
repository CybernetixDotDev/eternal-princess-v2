"use client";

import { FloatingCrystal } from "@/components/three/FloatingCrystal";

export function Scene() {
  return (
    <>
      <ambientLight intensity={1.35} />
      <directionalLight color="#fffaf4" intensity={1.65} position={[2.5, 3, 4]} />
      <pointLight color="#ffc6dd" intensity={1.9} position={[-2.2, 1.4, 2.4]} />
      <pointLight color="#b9ddff" intensity={1.1} position={[2.2, -1.3, 2.2]} />
      <FloatingCrystal />
    </>
  );
}
