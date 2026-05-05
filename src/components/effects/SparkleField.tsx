type SparkleFieldProps = {
  className?: string;
  density?: "soft" | "rich";
};

const sparkles = [
  { left: "8%", top: "18%", size: "0.28rem", delay: "0ms" },
  { left: "18%", top: "64%", size: "0.18rem", delay: "620ms" },
  { left: "31%", top: "28%", size: "0.22rem", delay: "1040ms" },
  { left: "47%", top: "76%", size: "0.24rem", delay: "360ms" },
  { left: "58%", top: "16%", size: "0.16rem", delay: "1480ms" },
  { left: "71%", top: "46%", size: "0.3rem", delay: "820ms" },
  { left: "84%", top: "24%", size: "0.2rem", delay: "1260ms" },
  { left: "91%", top: "70%", size: "0.24rem", delay: "220ms" },
  { left: "39%", top: "52%", size: "0.16rem", delay: "1740ms" },
  { left: "64%", top: "82%", size: "0.18rem", delay: "1940ms" },
];

export function SparkleField({
  className = "",
  density = "soft",
}: SparkleFieldProps) {
  const visibleSparkles = density === "rich" ? sparkles : sparkles.slice(0, 6);

  return (
    <div aria-hidden="true" className={`effect-sparkle-field ${className}`}>
      {visibleSparkles.map((sparkle) => (
        <span
          key={`${sparkle.left}-${sparkle.top}`}
          className="effect-sparkle"
          style={{
            animationDelay: sparkle.delay,
            height: sparkle.size,
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
          }}
        />
      ))}
    </div>
  );
}
