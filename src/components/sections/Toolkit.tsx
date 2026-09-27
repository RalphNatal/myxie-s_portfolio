import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import type { ProficiencyLevel } from "@/data/types";
import { staggerDelay } from "@/lib/motion";
import { cn } from "@/lib/utils";

const { toolkit, sections } = portfolio;
const copy = sections.toolkit;

const levels: Record<ProficiencyLevel, { filledDots: number; className: string }> = {
  Advanced: { filledDots: 3, className: "bg-sage/15 text-sage-strong" },
  Proficient: { filledDots: 2, className: "border border-sage/50 text-sage-strong" },
  Familiar: { filledDots: 1, className: "border border-line text-muted" },
};

const levelOrder = Object.keys(levels) as ProficiencyLevel[];

export function Toolkit() {
  return (
    <Section id="toolkit" labelledBy="toolkit-heading" tone="muted">
      <Reveal>
        <SectionHeading
          id="toolkit-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
      </Reveal>

      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group, index) => (
          <Reveal as="li" key={group.category} delay={staggerDelay(index)} className="flex">
            <Card className="w-full p-6 sm:p-8">
              <h3 className="text-xl font-medium text-ink">{group.category}</h3>
              <ul className="mt-4 divide-y divide-line">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center justify-between gap-4 py-3">
                    <span className="font-medium text-ink">{tool.name}</span>
                    <LevelLabel level={tool.level} />
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}

        <Reveal as="li" delay={staggerDelay(toolkit.length)} className="flex">
          <div className="w-full rounded-card border border-dashed border-muted/30 p-6 sm:p-8">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted">
              {copy.legendTitle}
            </h3>
            <dl className="mt-6 space-y-5">
              {levelOrder.map((level) => (
                <div key={level}>
                  <dt>
                    <LevelLabel level={level} />
                  </dt>
                  <dd className="mt-2 text-sm text-muted">{copy.levelDescriptions[level]}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
}

/** A text label with a small dot scale; deliberately not a percentage bar. */
function LevelLabel({ level }: { level: ProficiencyLevel }) {
  const { filledDots, className } = levels[level];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold",
        className,
      )}
    >
      <span aria-hidden="true" className="flex gap-0.5">
        {levelOrder.map((_, dot) => (
          <span
            key={dot}
            className={cn("size-1.5 rounded-full bg-current", dot >= filledDots && "opacity-25")}
          />
        ))}
      </span>
      {level}
    </span>
  );
}
