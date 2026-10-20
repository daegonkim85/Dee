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
  light: "bg-surface text-faint",
  dark: "bg-fg text-bg",
  accent: "bg-accent text-accent-fg",
};

/**
 * Clearly-marked placeholder for imagery we don't yet have real assets for.
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
        className={`relative flex ${ratioClass[ratio]} w-full items-center justify-center overflow-hidden rounded-xl border border-line ${toneClass[tone]}`}
      >
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          }}
          aria-hidden="true"
        />
        <span className="relative z-10 px-6 text-center text-xs font-medium uppercase tracking-eyebrow">
          {label}
        </span>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs text-faint">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
