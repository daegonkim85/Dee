import Image from "next/image";
import { Placeholder } from "@/components/placeholder";

type CoverLike = {
  label: string;
  tone: "light" | "dark" | "accent";
  image?: string;
  alt?: string;
};

type CoverMediaProps = {
  cover: CoverLike;
  caption?: string;
  ratio?: "wide" | "square" | "tall";
  className?: string;
  priority?: boolean;
};

const ratioClass: Record<NonNullable<CoverMediaProps["ratio"]>, string> = {
  wide: "aspect-[16/9]",
  square: "aspect-[4/3]",
  tall: "aspect-[3/4]",
};

export function CoverMedia({
  cover,
  caption,
  ratio = "wide",
  className = "",
  priority = false,
}: CoverMediaProps) {
  if (cover.image) {
    return (
      <figure className={className}>
        <div
          className={`relative ${ratioClass[ratio]} w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-card`}
        >
          <Image
            src={cover.image}
            alt={cover.alt ?? cover.label}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={priority}
          />
        </div>
        {caption ? (
          <figcaption className="mt-3 text-xs text-faint">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

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
