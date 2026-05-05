type GlowOrbProps = {
  className?: string;
  tone?: "pink" | "blue" | "gold" | "lavender";
};

const toneClasses = {
  blue: "bg-sky-200/30",
  gold: "bg-gold-200/30",
  lavender: "bg-lavender-300/28",
  pink: "bg-pink-200/32",
};

export function GlowOrb({ className = "", tone = "pink" }: GlowOrbProps) {
  return (
    <span
      aria-hidden="true"
      className={`effect-glow-orb ${toneClasses[tone]} ${className}`}
    />
  );
}
