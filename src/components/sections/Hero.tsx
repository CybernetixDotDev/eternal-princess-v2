import { SparkleField } from "@/components/effects/SparkleField";
import { PageSection } from "@/components/layout/PageSection";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { CanvasWrapper } from "@/components/three/CanvasWrapper";
import { PrincessAvatar } from "@/components/three/PrincessAvatar";
import { Scene } from "@/components/three/Scene";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <PageSection id="hero" className="min-h-screen pt-28 sm:pt-32 lg:pt-36">
      <FloatingElement className="section-aura" distance={-18}>
        <span />
      </FloatingElement>
      <SparkleField className="opacity-70" density="rich" />
      <div className="grid min-h-[72vh] items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <RevealOnScroll className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-800/70 sm:text-sm">
            Cosmic garden self-portrait
          </p>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.96] text-plum-950 sm:text-7xl lg:mx-0 lg:text-8xl">
            Eternal Princess
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-plum-900/75 sm:text-xl lg:mx-0">
            A luminous landing page for the princess within: tender, strange,
            celestial, and alive with soft color. Follow the guide through a
            garden of memory, craft, starlight, and invitation.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 min-[420px]:flex-row lg:justify-start">
            <Button href="#invitation">Enter the invitation</Button>
            <Button href="/playground" variant="secondary">
              Visit playground
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <div className="relative mx-auto flex min-h-[330px] w-full max-w-[26rem] items-center justify-center sm:min-h-[430px] lg:max-w-none">
            <FloatingElement
              className="portal-glow absolute h-64 w-64 rounded-full bg-pink-200/45 blur-3xl sm:h-80 sm:w-80"
              distance={-24}
            >
              <span />
            </FloatingElement>
            <FloatingElement
              className="absolute h-72 w-72 rounded-full border border-white/55 shadow-[inset_0_0_55px_rgba(255,250,244,0.42)] sm:h-96 sm:w-96"
              distance={14}
            >
              <span />
            </FloatingElement>
            <FloatingElement
              className="absolute h-52 w-52 rounded-full border border-gold-200/35 sm:h-72 sm:w-72"
              distance={-10}
              horizontal
            >
              <span />
            </FloatingElement>
            <FloatingElement
              className="hero-crystal-presence pointer-events-none absolute right-0 top-4 z-0 h-56 w-56 sm:right-8 sm:top-6 sm:h-72 sm:w-72 lg:right-14"
              distance={-18}
            >
              <CanvasWrapper className="h-full w-full">
                <Scene />
              </CanvasWrapper>
            </FloatingElement>
            <div className="relative z-10">
              <PrincessAvatar />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </PageSection>
  );
}
