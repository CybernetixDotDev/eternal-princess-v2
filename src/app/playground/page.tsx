import Link from "next/link";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ShimmerButton } from "@/components/effects/ShimmerButton";
import { ShimmerText } from "@/components/effects/ShimmerText";
import { SparkleField } from "@/components/effects/SparkleField";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PrincessAvatar } from "@/components/three/PrincessAvatar";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionEyebrow, SectionTitle } from "@/components/ui/Typography";

const experiments = [
  {
    title: "Sparkle Button",
    copy: "A future call-to-action with a soft shimmer trail.",
    className: "from-pink-100/70 via-pearl-50/80 to-gold-100/70",
    effect: "button",
  },
  {
    title: "Floating Card",
    copy: "A glass panel study for gentle lift and depth.",
    className: "from-lavender-100/75 via-white/70 to-pink-100/65",
    effect: "sparkle",
  },
  {
    title: "Gradient Portal",
    copy: "A doorway motif for scene transitions and reveals.",
    className: "from-plum-300/45 via-lavender-200/65 to-sky-100/75",
    effect: "orb",
  },
  {
    title: "Avatar Motion",
    copy: "Gesture timing for bowing, guiding, and hovering.",
    className: "from-gold-100/75 via-pink-100/75 to-pearl-50/80",
    effect: "text",
  },
  {
    title: "Scroll Background",
    copy: "A color system for the page changing with the story.",
    className: "from-sky-100/75 via-pearl-50/75 to-lavender-100/75",
    effect: "petals",
  },
  {
    title: "Glass Panel",
    copy: "Readable glassmorphism for poetic copy and controls.",
    className: "from-white/70 via-pearl-50/75 to-pink-100/60",
    effect: "sparkle",
  },
];

function EffectPreview({
  effect,
  className,
  title,
}: {
  className: string;
  effect: string;
  title: string;
}) {
  return (
    <FloatingElement
      className={`portal-glow relative mb-6 h-24 overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${className} shadow-[inset_0_0_45px_rgba(255,250,244,0.45)]`}
      distance={10}
    >
      {effect === "button" ? (
        <div className="flex h-full items-center justify-center">
          <ShimmerButton href="/playground">Sparkle</ShimmerButton>
        </div>
      ) : null}
      {effect === "orb" ? (
        <>
          <GlowOrb className="left-[34%] top-[18%] h-28 w-28" tone="lavender" />
          <SparkleField className="opacity-55" density="soft" />
        </>
      ) : null}
      {effect === "petals" ? <FloatingPetals count={5} /> : null}
      {effect === "text" ? (
        <div className="flex h-full items-center justify-center px-4 text-center font-serif text-2xl font-semibold">
          <ShimmerText>{title}</ShimmerText>
        </div>
      ) : null}
      {effect === "sparkle" ? <SparkleField className="opacity-65" density="rich" /> : null}
    </FloatingElement>
  );
}

export default function PlaygroundPage() {
  return (
    <main className="relative z-10 overflow-hidden">
      <PageSection className="min-h-screen pt-28 sm:pt-32">
        <FloatingElement className="section-aura" distance={-16}>
          <span />
        </FloatingElement>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
          <RevealOnScroll className="max-w-3xl">
            <SectionEyebrow>Playground</SectionEyebrow>
            <SectionTitle>Small experiments before the magic learns to move.</SectionTitle>
            <p className="mt-6 max-w-2xl text-base leading-8 text-plum-900/75 sm:text-lg">
              This is the testing garden for Eternal Princess: a quiet place to
              shape effects, gestures, panels, and transitions before they join
              the main scroll experience.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full border border-pearl-100/80 bg-pearl-50/60 px-6 py-3 text-sm font-semibold text-plum-900 shadow-[0_18px_45px_rgba(96,45,104,0.14)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-pearl-50"
            >
              Return to the landing page
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={160}>
            <GlowCard className="mx-auto w-full max-w-sm text-center">
              <PrincessAvatar />
              <p className="mt-7 text-sm leading-7 text-plum-900/70">
                The guide remains CSS-only for now, with hover sparkles and a
                curtsy interaction ready for richer motion studies.
              </p>
            </GlowCard>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment, index) => (
            <RevealOnScroll key={experiment.title} delay={index * 90}>
              <article className="group min-h-52 overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/35 p-5 shadow-[0_18px_55px_rgba(96,45,104,0.12)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/48 sm:p-6">
                <EffectPreview
                  className={experiment.className}
                  effect={experiment.effect}
                  title={experiment.title}
                />
                <h2 className="font-serif text-2xl font-semibold text-plum-950">
                  {experiment.title}
                </h2>
                <p className="mt-3 leading-7 text-plum-900/70">{experiment.copy}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
