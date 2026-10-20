import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { Placeholder } from "@/components/placeholder";

export function WorkCard({ item, index }: { item: CaseStudy; index?: number }) {
  const inner = (
    <>
      <Placeholder
        label={item.cover.label}
        tone={item.cover.tone}
        ratio="wide"
        className="transition-transform duration-500 group-hover:-translate-y-1"
      />
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm">
            <span className="font-medium">{item.client}</span>
            {item.comingSoon ? (
              <span className="rounded-full border border-line px-2 py-0.5 text-[0.65rem] uppercase tracking-eyebrow text-faint">
                Coming soon
              </span>
            ) : null}
          </div>
          <h3 className="max-w-md text-lg font-medium leading-snug transition-colors group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-faint">{item.category}</p>
        </div>
        {typeof index === "number" ? (
          <span className="font-mono text-sm text-faint">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
    </>
  );

  if (item.comingSoon) {
    return <div className="group cursor-default opacity-80">{inner}</div>;
  }

  return (
    <Link href={`/work/${item.slug}`} className="group block">
      {inner}
    </Link>
  );
}
