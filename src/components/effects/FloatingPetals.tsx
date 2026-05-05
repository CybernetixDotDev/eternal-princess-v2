type FloatingPetalsProps = {
  className?: string;
  count?: 3 | 5 | 7;
};

const petals = [
  { left: "12%", top: "24%", color: "bg-pink-300/55", delay: "0ms" },
  { left: "28%", top: "68%", color: "bg-pearl-50/70", delay: "760ms" },
  { left: "46%", top: "36%", color: "bg-gold-200/60", delay: "1380ms" },
  { left: "68%", top: "20%", color: "bg-sky-200/62", delay: "420ms" },
  { left: "82%", top: "62%", color: "bg-lavender-200/62", delay: "1120ms" },
  { left: "58%", top: "78%", color: "bg-pink-200/62", delay: "1780ms" },
  { left: "7%", top: "76%", color: "bg-gold-100/70", delay: "2060ms" },
];

export function FloatingPetals({
  className = "",
  count = 5,
}: FloatingPetalsProps) {
  return (
    <div aria-hidden="true" className={`effect-petals ${className}`}>
      {petals.slice(0, count).map((petal) => (
        <span
          key={`${petal.left}-${petal.top}`}
          className={`effect-petal ${petal.color}`}
          style={{
            animationDelay: petal.delay,
            left: petal.left,
            top: petal.top,
          }}
        />
      ))}
    </div>
  );
}
