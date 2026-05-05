import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

const tiles = [
  {
    title: "Silk",
    copy: "Pearl textures, lavender veils, and folded light for the sections still to come.",
  },
  {
    title: "Crown",
    copy: "Gold accents that feel ceremonial and kind, like a blessing instead of a weight.",
  },
  {
    title: "Mirror",
    copy: "Glass panels that hold motion studies, secret prototypes, and future reflections.",
  },
];

export function Atelier() {
  return (
    <PageSection id="atelier" className="bg-gradient-to-b from-transparent via-lavender-100/30 to-transparent">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionEyebrow>Atelier</SectionEyebrow>
        <SectionTitle>Where the fantasy learns its fabric, shine, and restraint.</SectionTitle>
        <p className="mt-5 text-base leading-8 text-plum-900/70 sm:text-lg">
          The atelier is the design room: a place for softness with structure,
          beauty with intention, and visual rules that can survive future motion.
        </p>
      </RevealOnScroll>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile, index) => (
          <RevealOnScroll key={tile.title} delay={index * 120}>
            <GlowCard className="relative h-full overflow-hidden">
              <FloatingElement
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-100/55 blur-2xl"
                distance={10 + index * 4}
              >
                <span />
              </FloatingElement>
              <h3 className="relative font-serif text-3xl font-semibold text-plum-950">
                {tile.title}
              </h3>
              <p className="relative mt-4 leading-7 text-plum-900/70">{tile.copy}</p>
            </GlowCard>
          </RevealOnScroll>
        ))}
      </div>
    </PageSection>
  );
}
