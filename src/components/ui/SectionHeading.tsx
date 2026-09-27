import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Id of the heading, referenced by the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}

export function SectionHeading({ id, eyebrow, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-eyebrow text-accent-strong">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-2xl font-medium text-ink lg:text-3xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}
