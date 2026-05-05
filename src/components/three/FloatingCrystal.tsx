"use client";

import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import { useReducedMotion } from "@/components/motion/useReducedMotion";

export function FloatingCrystal() {
  const groupRef = useRef<Group>(null);
  const crystalRef = useRef<Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame(({ clock }) => {
    if (prefersReducedMotion) {
      return;
    }

    const elapsed = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(elapsed * 0.75) * 0.12;
      groupRef.current.rotation.y = elapsed * 0.22;
    }

    if (crystalRef.current) {
      crystalRef.current.rotation.x = 0.45 + Math.sin(elapsed * 0.5) * 0.08;
      crystalRef.current.rotation.z = Math.sin(elapsed * 0.35) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles
        count={26}
        scale={[3.4, 2.8, 1.8]}
        size={2.4}
        speed={prefersReducedMotion ? 0 : 0.18}
        opacity={0.55}
        color="#fffaf4"
      />
      <mesh ref={crystalRef} rotation={[0.45, 0.25, -0.18]}>
        <octahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#dfc5ff"
          emissive="#ffc6dd"
          emissiveIntensity={0.38}
          metalness={0.18}
          opacity={0.78}
          roughness={0.28}
          transparent
        />
      </mesh>
      <mesh scale={0.62} rotation={[0.9, -0.45, 0.25]}>
        <octahedronGeometry args={[1.05, 0]} />
        <meshStandardMaterial
          color="#fffaf4"
          emissive="#f8d982"
          emissiveIntensity={0.28}
          metalness={0.1}
          opacity={0.42}
          roughness={0.4}
          transparent
        />
      </mesh>
    </group>
  );
}
