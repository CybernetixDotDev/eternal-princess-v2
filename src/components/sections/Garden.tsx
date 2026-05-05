import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

export function Garden() {
  return (
    <PageSection id="garden" className="bg-gradient-to-b from-transparent via-sky-100/35 to-transparent">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1fr]">
        <RevealOnScroll className="order-2 lg:order-1">
          <div className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 shadow-[inset_0_0_80px_rgba(255,250,244,0.34)] sm:min-h-96">
            <FloatingPetals count={7} />
            <FloatingElement className="absolute left-4 top-10 h-44 w-44 rounded-full bg-pink-200/45 blur-2xl sm:left-8 sm:h-56 sm:w-56" distance={-18}>
              <span />
            </FloatingElement>
            <FloatingElement className="absolute right-0 top-20 h-52 w-52 rounded-full bg-sky-200/45 blur-2xl sm:right-8 sm:h-64 sm:w-64" distance={20}>
              <span />
            </FloatingElement>
            <FloatingElement className="absolute inset-x-8 bottom-8 h-32 rounded-[50%] bg-lavender-200/50 blur-xl sm:inset-x-10 sm:h-40" distance={10} horizontal>
              <span />
            </FloatingElement>
            <div className="absolute bottom-12 left-8 right-8 h-24 rounded-[50%] bg-gradient-to-r from-pink-100/55 via-pearl-50/70 to-sky-100/55" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll className="order-1 lg:order-2" delay={120}>
          <GlowCard>
            <SectionEyebrow>Garden</SectionEyebrow>
            <SectionTitle>Organic light for every version of becoming.</SectionTitle>
            <p className="mt-6 text-base leading-8 text-plum-900/72 sm:text-lg">
              The garden keeps the palette inclusive and warm: pink without
              narrowness, blue without coldness, lavender without distance. It is
              a place to breathe before the sky opens.
            </p>
          </GlowCard>
        </RevealOnScroll>
      </div>
    </PageSection>
  );
}
