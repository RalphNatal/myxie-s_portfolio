import { Download } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { staggerDelay } from "@/lib/motion";
import { assetUrl, cn } from "@/lib/utils";

const { experience, profile, sections } = portfolio;
const copy = sections.experience;

export function Experience() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="experience-heading"
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
          <Button href={assetUrl(profile.resumeUrl)} download variant="secondary" className="mt-8">
            <Download
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
            />
            {copy.resumeLabel}
          </Button>
        </Reveal>

        <ol>
          {experience.map((item, index) => {
            const isLast = index === experience.length - 1;
            return (
              <Reveal
                as="li"
                key={`${item.role}-${item.company}`}
                delay={staggerDelay(index)}
                className={cn("relative pl-10", !isLast && "pb-12")}
              >
                {/* Timeline rail and marker; the most recent role gets the accent marker. */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[5px] top-5 w-px bg-line"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute left-0 top-1.5 size-[11px] rounded-full ring-4 ring-canvas",
                    index === 0 ? "bg-accent" : "border border-muted/50 bg-surface",
                  )}
                />

                <p className="text-sm font-medium text-muted">
                  {item.period ?? `${item.start} – ${item.end}`}
                </p>
                <h3 className="mt-2 text-xl font-medium text-ink">{item.role}</h3>
                <p className="mt-1 text-muted">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-ink">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
