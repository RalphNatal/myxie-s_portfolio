import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Id of the heading, referenced by the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** "center" is for short headings above a single, centered item. */
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "start",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("max-w-2xl", isCentered && "mx-auto text-center", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-accent-strong",
          isCentered && "justify-center",
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {eyebrow}
        {isCentered && <span aria-hidden="true" className="h-px w-8 bg-accent" />}
      </p>
      <h2 id={id} className="mt-4 text-2xl font-medium text-ink lg:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}
