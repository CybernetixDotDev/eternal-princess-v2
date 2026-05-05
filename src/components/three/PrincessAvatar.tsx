"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  type StorySection,
  useActiveSection,
} from "@/components/motion/useActiveSection";
import { useReducedMotion } from "@/components/motion/useReducedMotion";
import { useScrollProgress } from "@/components/motion/useScrollProgress";

function blend(start: number, end: number, amount: number) {
  return Math.round(start + (end - start) * amount);
}

const sectionTone: Record<
  StorySection,
  {
    core: [number, number, number];
    edge: [number, number, number];
    jewel: [number, number, number];
    shift: number;
  }
> = {
  hero: {
    core: [255, 198, 221],
    edge: [248, 217, 130],
    jewel: [248, 217, 130],
    shift: -4,
  },
  "inner-image": {
    core: [255, 240, 223],
    edge: [255, 198, 221],
    jewel: [255, 250, 244],
    shift: 2,
  },
  atelier: {
    core: [223, 197, 255],
    edge: [248, 217, 130],
    jewel: [248, 217, 130],
    shift: 6,
  },
  garden: {
    core: [185, 221, 255],
    edge: [255, 198, 221],
    jewel: [185, 221, 255],
    shift: -6,
  },
  cosmos: {
    core: [196, 154, 255],
    edge: [185, 221, 255],
    jewel: [223, 197, 255],
    shift: -10,
  },
  playground: {
    core: [255, 198, 221],
    edge: [196, 154, 255],
    jewel: [248, 217, 130],
    shift: 4,
  },
  invitation: {
    core: [255, 250, 244],
    edge: [248, 217, 130],
    jewel: [255, 240, 223],
    shift: 0,
  },
};

function colorTone(activeSection: StorySection, progress: number) {
  const current = sectionTone[activeSection];
  const hero = sectionTone.hero;
  const sectionInfluence = Math.min(Math.max(progress * 1.35, 0.12), 0.72);

  return {
    core: `rgba(${blend(hero.core[0], current.core[0], sectionInfluence)}, ${blend(hero.core[1], current.core[1], sectionInfluence)}, ${blend(hero.core[2], current.core[2], sectionInfluence)}, 0.7)`,
    edge: `rgba(${blend(hero.edge[0], current.edge[0], sectionInfluence)}, ${blend(hero.edge[1], current.edge[1], sectionInfluence)}, ${blend(hero.edge[2], current.edge[2], sectionInfluence)}, 0.5)`,
    jewel: `rgb(${blend(hero.jewel[0], current.jewel[0], sectionInfluence)}, ${blend(hero.jewel[1], current.jewel[1], sectionInfluence)}, ${blend(hero.jewel[2], current.jewel[2], sectionInfluence)})`,
    shift: current.shift,
  };
}

export function PrincessAvatar() {
  const [isCurtsying, setIsCurtsying] = useState(false);
  const curtsyTimeout = useRef<number | null>(null);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection();
  const prefersReducedMotion = useReducedMotion();
  const scrollShift = (scrollProgress - 0.5) * 22;
  const tone = colorTone(
    prefersReducedMotion ? "hero" : activeSection,
    prefersReducedMotion ? 0 : scrollProgress,
  );
  const sectionShift = prefersReducedMotion ? 0 : tone.shift;
  const avatarStyle = {
    "--avatar-aura-core": tone.core,
    "--avatar-aura-edge": tone.edge,
    "--avatar-jewel": tone.jewel,
    transform: prefersReducedMotion
      ? undefined
      : `translate3d(0, ${scrollShift + sectionShift}px, 0)`,
  } as CSSProperties;

  useEffect(() => {
    return () => {
      if (curtsyTimeout.current !== null) {
        window.clearTimeout(curtsyTimeout.current);
      }
    };
  }, []);

  function handleCurtsy() {
    setIsCurtsying(true);

    if (curtsyTimeout.current !== null) {
      window.clearTimeout(curtsyTimeout.current);
    }

    curtsyTimeout.current = window.setTimeout(() => {
      setIsCurtsying(false);
      curtsyTimeout.current = null;
    }, 760);
  }

  return (
    <div
      className="motion-float princess-guide-frame relative"
      data-avatar-section={activeSection}
      style={avatarStyle}
    >
      <button
        type="button"
        aria-label="Symbolic princess guide"
        onClick={handleCurtsy}
        className={`princess-avatar group relative isolate flex h-64 w-52 items-center justify-center rounded-[48%_48%_38%_38%] border border-white/65 bg-gradient-to-b from-pearl-50/92 via-pink-100/82 to-lavender-200/86 outline-none ring-1 ring-pearl-50/50 transition duration-300 hover:scale-[1.015] focus-visible:ring-4 focus-visible:ring-gold-200/85 sm:h-80 sm:w-64 ${
          isCurtsying ? "curtsy" : ""
        }`}
      >
        <span className="absolute inset-3 rounded-[46%_46%_36%_36%] border border-white/45 shadow-[inset_0_0_38px_rgba(255,250,244,0.45)] sm:inset-4" />
        <span className="avatar-orbit absolute top-10 h-2 w-2 rounded-full opacity-85 shadow-[0_0_18px_var(--avatar-jewel)]" />
        <span className="avatar-orbit absolute bottom-24 h-2.5 w-2.5 rounded-full bg-sky-100 opacity-75 shadow-[0_0_18px_rgba(185,221,255,0.9)] [animation-delay:-3s]" />

        <span className="absolute -top-7 h-16 w-[9.5rem] rounded-[50%] border-t-4 border-gold-300/90 shadow-[0_-12px_24px_rgba(248,217,130,0.3)] sm:-top-8 sm:h-20 sm:w-44" />
        <span className="absolute top-3 flex h-14 w-32 items-end justify-center gap-1 sm:top-5 sm:w-36">
          <span className="h-8 w-6 rounded-t-full bg-gradient-to-b from-gold-200 to-gold-300 shadow-[0_0_14px_rgba(248,217,130,0.35)]" />
          <span className="h-12 w-7 rounded-t-full bg-gradient-to-b from-pearl-50 via-gold-100 to-gold-300 shadow-[0_0_18px_rgba(255,250,244,0.55)]" />
          <span className="h-9 w-6 rounded-t-full bg-gradient-to-b from-gold-100 to-gold-300" />
          <span className="h-12 w-7 rounded-t-full bg-gradient-to-b from-pearl-50 via-gold-100 to-gold-300 shadow-[0_0_18px_rgba(255,250,244,0.55)]" />
          <span className="h-8 w-6 rounded-t-full bg-gradient-to-b from-gold-200 to-gold-300 shadow-[0_0_14px_rgba(248,217,130,0.35)]" />
        </span>
        <span className="absolute top-[3.55rem] h-[4.5rem] w-[4.5rem] rounded-full bg-gradient-to-b from-gold-100 via-pink-100 to-pearl-50 shadow-[0_0_35px_rgba(255,221,166,0.72)] sm:top-[4.25rem] sm:h-[5.5rem] sm:w-[5.5rem]" />
        <span className="absolute top-[5.55rem] h-3 w-10 rounded-full bg-plum-950/14 sm:top-[6.75rem]" />
        <span className="absolute top-[6.25rem] h-2 w-6 rounded-full bg-pink-300/18 sm:top-[7.5rem]" />

        <span className="absolute bottom-[6.25rem] h-16 w-32 rounded-t-[4rem] bg-gradient-to-b from-pearl-50/72 via-pink-100/72 to-plum-300/55 shadow-[inset_0_14px_32px_rgba(255,250,244,0.32)] sm:bottom-[7.4rem] sm:h-20 sm:w-40" />
        <span className="absolute bottom-9 h-[9.8rem] w-[10.5rem] rounded-t-[5rem] rounded-b-[2.2rem] bg-gradient-to-b from-plum-300/82 via-pink-200/88 to-pearl-50/90 shadow-[inset_0_24px_44px_rgba(255,250,244,0.32)] sm:bottom-11 sm:h-[11.5rem] sm:w-52" />
        <span className="absolute bottom-12 h-32 w-[6.5rem] -rotate-12 rounded-[4rem_4rem_2rem_2rem] bg-gradient-to-b from-lavender-200/45 to-pearl-50/20 sm:bottom-[3.75rem] sm:h-[9.5rem] sm:w-32" />
        <span className="absolute bottom-12 h-32 w-[6.5rem] rotate-12 rounded-[4rem_4rem_2rem_2rem] bg-gradient-to-b from-sky-100/42 to-pearl-50/18 sm:bottom-[3.75rem] sm:h-[9.5rem] sm:w-32" />
        <span className="absolute bottom-7 h-20 w-[12.5rem] rounded-[50%] bg-gradient-to-r from-lavender-200/42 via-pearl-50/75 to-sky-100/55 blur-sm sm:bottom-9 sm:h-[6.25rem] sm:w-60" />
        <span className="absolute bottom-20 h-28 w-1 rounded-full bg-pearl-50/76 shadow-[0_0_16px_rgba(255,250,244,0.75)] sm:bottom-24 sm:h-[8.5rem]" />
        <span className="absolute bottom-24 h-[4.5rem] w-px rotate-12 rounded-full bg-gold-200/50 sm:bottom-[7.5rem] sm:h-24" />
        <span className="absolute bottom-24 h-[4.5rem] w-px -rotate-12 rounded-full bg-gold-200/50 sm:bottom-[7.5rem] sm:h-24" />

        <span className="avatar-sparkle absolute left-7 top-[5.5rem] h-3 w-3 rounded-full bg-pearl-50 opacity-0 transition group-hover:opacity-100 sm:left-8 sm:top-24" />
        <span className="avatar-sparkle absolute right-8 top-[7.5rem] h-2 w-2 rounded-full bg-gold-200 opacity-0 transition group-hover:opacity-100 [animation-delay:160ms] sm:right-10 sm:top-36" />
        <span className="avatar-sparkle absolute bottom-[4.5rem] left-[3.25rem] h-2.5 w-2.5 rounded-full bg-sky-100 opacity-0 transition group-hover:opacity-100 [animation-delay:320ms] sm:bottom-20 sm:left-16" />
        <span className="avatar-sparkle absolute bottom-28 right-12 h-2 w-2 rounded-full bg-pink-200 opacity-0 transition group-hover:opacity-100 [animation-delay:480ms]" />
        <span className="avatar-sparkle absolute left-1/2 top-8 h-2 w-2 rounded-full opacity-0 transition group-hover:opacity-100 [animation-delay:620ms]" />
      </button>
    </div>
  );
}
