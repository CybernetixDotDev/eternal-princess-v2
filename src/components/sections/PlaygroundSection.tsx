import { GlowOrb } from "@/components/effects/GlowOrb";
import { SparkleField } from "@/components/effects/SparkleField";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

export function PlaygroundSection() {
  return (
    <PageSection id="playground" className="bg-gradient-to-b from-transparent via-pink-100/30 to-transparent">
      <RevealOnScroll>
        <GlowCard className="relative overflow-hidden">
          <SparkleField className="opacity-45" density="soft" />
          <FloatingElement
            className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-lavender-200/55 blur-3xl"
            distance={18}
            horizontal
          >
            <span />
          </FloatingElement>
          <GlowOrb className="-left-16 bottom-0 h-40 w-40" tone="pink" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <SectionEyebrow>Playground</SectionEyebrow>
              <SectionTitle>Prototype the magic where it has room to misbehave.</SectionTitle>
              <p className="mt-5 max-w-2xl leading-8 text-plum-900/70">
                Experiments belong in their own garden bed first: buttons, panels,
                portals, motion sketches, and future avatar studies.
              </p>
            </div>
            <Button href="/playground" variant="secondary">
              Open playground
            </Button>
          </div>
        </GlowCard>
      </RevealOnScroll>
    </PageSection>
  );
}
