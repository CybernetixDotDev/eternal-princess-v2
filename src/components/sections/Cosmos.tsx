import { GlowOrb } from "@/components/effects/GlowOrb";
import { SparkleField } from "@/components/effects/SparkleField";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow } from "@/components/ui/Typography";

export function Cosmos() {
  return (
    <PageSection id="cosmos" className="bg-gradient-to-b from-transparent via-plum-900/10 to-transparent">
      <RevealOnScroll>
        <GlowCard className="relative overflow-hidden bg-plum-950/85 px-5 py-12 text-pearl-50 sm:px-8 lg:p-12">
          <FloatingElement className="sparkle-field absolute inset-0 opacity-70" distance={-20}>
            <span />
          </FloatingElement>
          <SparkleField className="opacity-65" density="soft" />
          <GlowOrb className="-right-10 top-10 h-44 w-44" tone="lavender" />
          <GlowOrb className="bottom-4 left-1/2 h-36 w-36" tone="blue" />
          <FloatingElement
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lavender-300/25 blur-3xl"
            distance={22}
            horizontal
          >
            <span />
          </FloatingElement>
          <FloatingElement
            className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl"
            distance={-16}
          >
            <span />
          </FloatingElement>
          <div className="relative max-w-3xl">
            <SectionEyebrow>Cosmos</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl text-balance font-serif text-3xl font-semibold leading-tight text-pearl-50 sm:text-5xl">
              A night-sky chamber where tenderness can still feel vast.
            </h2>
            <p className="mt-6 text-base leading-8 text-pearl-50/78 sm:text-lg">
              The cosmos is the quiet scale of the site. Later it can hold depth,
              particles, and a real canvas; today it holds contrast, soft stars,
              and the promise of an inner universe.
            </p>
          </div>
        </GlowCard>
      </RevealOnScroll>
    </PageSection>
  );
}
