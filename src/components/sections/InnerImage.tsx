import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

export function InnerImage() {
  return (
    <PageSection id="inner-image" className="bg-gradient-to-b from-transparent via-pearl-50/35 to-transparent">
      <FloatingElement className="section-aura opacity-70" distance={16}>
        <span />
      </FloatingElement>
      <RevealOnScroll>
        <GlowCard className="mx-auto max-w-4xl text-center">
          <SectionEyebrow>Inner image</SectionEyebrow>
          <SectionTitle>
            A mirror made of pearl light, patient softness, and chosen wonder.
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-plum-900/72 sm:text-lg">
            The page begins as a private portrait rather than a product pitch. It
            holds a softer kind of grandeur: reflection, recovery, dress-up,
            devotion, and the decision to be seen in color.
          </p>
          <FloatingElement
            className="mx-auto mt-8 h-px max-w-xl bg-gradient-to-r from-transparent via-gold-200/80 to-transparent"
            distance={8}
            horizontal
          >
            <span />
          </FloatingElement>
        </GlowCard>
      </RevealOnScroll>
    </PageSection>
  );
}
