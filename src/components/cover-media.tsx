import Image from "next/image";
import type { CaseStudy } from "@/content/work";
import { Placeholder } from "@/components/placeholder";

type CoverMediaProps = {
  cover: CaseStudy["cover"];
  /** Caption shown beneath the placeholder fallback. */
  caption?: string;
  ratio?: "wide" | "square" | "tall";
  className?: string;
  /** Prioritize loading (e.g. above-the-fold hero covers). */
  priority?: boolean;
  /** Responsive `sizes` hint for the underlying next/image. */
  sizes?: string;
};

const ratioClass: Record<NonNullable<CoverMediaProps["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

/**
 * Renders a real cover image (next/image) when `cover.image` is set,
 * otherwise falls back to the clearly-marked Placeholder.
 */
export function CoverMedia({
  cover,
  caption,
  ratio = "wide",
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 60vw, 100vw",
}: CoverMediaProps) {
  if (!cover.image) {
    return (
      <Placeholder
        label={cover.label}
        caption={caption}
        tone={cover.tone}
        ratio={ratio}
        className={className}
      />
    );
  }

  return (
    <div
      className={`relative ${ratioClass[ratio]} w-full overflow-hidden rounded-xl border border-line ${className}`}
    >
      <Image
        src={cover.image}
        alt={cover.alt ?? cover.label}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
