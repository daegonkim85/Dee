type PlaceholderProps = {
  label: string;
  caption?: string;
  tone?: "light" | "dark" | "accent";
  ratio?: "wide" | "square" | "tall";
  className?: string;
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

const toneClass: Record<NonNullable<PlaceholderProps["tone"]>, string> = {
  light: "bg-surface-raised text-muted",
  dark: "bg-fg text-bg",
  accent: "bg-accent-muted text-accent",
};

/**
 * Placeholder for imagery we don't yet have real assets for.
 */
export function Placeholder({
  label,
  caption,
  tone = "light",
  ratio = "wide",
  className = "",
}: PlaceholderProps) {
  return (
    <figure className={className}>
      <div
        className={`relative flex ${ratioClass[ratio]} w-full items-center justify-center overflow-hidden rounded-2xl border border-line shadow-card ${toneClass[tone]}`}
      >
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <span className="relative z-10 max-w-[80%] px-6 text-center text-sm font-medium">
          {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs text-faint">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
