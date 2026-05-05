import { ShimmerButton } from "@/components/effects/ShimmerButton";
import { ShimmerText } from "@/components/effects/ShimmerText";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

export function Invitation() {
  return (
    <PageSection id="invitation" className="bg-gradient-to-b from-transparent via-pearl-50/50 to-pearl-50/70 pb-28 text-center sm:pb-36">
      <FloatingElement className="section-aura opacity-60" distance={-14}>
        <span />
      </FloatingElement>
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl">
          <SectionEyebrow>Invitation</SectionEyebrow>
          <SectionTitle>
            <ShimmerText>A small door of light, left open on purpose.</ShimmerText>
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-plum-900/72 sm:text-lg">
            This is the calm foundation: clear sections, a symbolic guide, and a
            visual language ready for motion. The princess waits here without
            rushing the next spell.
          </p>
          <div className="mt-9">
            <ShimmerButton href="#">Return to the crown</ShimmerButton>
          </div>
        </div>
      </RevealOnScroll>
    </PageSection>
  );
}
