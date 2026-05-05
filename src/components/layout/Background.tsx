import { FloatingElement } from "@/components/motion/FloatingElement";

export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="story-background-gradient absolute inset-0" />
      <FloatingElement
        className="story-background-lights absolute inset-0"
        distance={-18}
      >
        <span />
      </FloatingElement>
      <FloatingElement className="sparkle-field absolute inset-0 opacity-65" distance={12} horizontal>
        <span />
      </FloatingElement>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-pearl-50/90 to-transparent" />
    </div>
  );
}
