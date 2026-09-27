import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { staggerDelay } from "@/lib/motion";

const { process, sections } = portfolio;
const copy = sections.process;

export function Process() {
  return (
    <Section id="process" labelledBy="process-heading" tone="muted">
      <Reveal>
        <SectionHeading
          id="process-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
      </Reveal>

      <ol className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-4 lg:gap-8">
        {process.map((step, index) => {
          const isLast = index === process.length - 1;
          return (
            <Reveal
              as="li"
              key={step.step}
              delay={staggerDelay(index)}
              className="relative flex gap-5 lg:flex-col lg:gap-6"
            >
              {/* Connector to the next step: vertical on mobile, horizontal from lg up. */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 left-6 top-14 w-px bg-gradient-to-b from-accent/50 to-line lg:-right-4 lg:bottom-auto lg:left-16 lg:top-6 lg:h-px lg:w-auto lg:bg-gradient-to-r"
                />
              )}
              <span
                aria-hidden="true"
                className="relative grid size-12 shrink-0 place-items-center rounded-full border border-accent/40 bg-surface font-display text-lg font-medium text-accent-strong shadow-soft"
              >
                {String(step.step).padStart(2, "0")}
              </span>
              <div className="pt-2 lg:pt-0">
                <h3 className="text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.description}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
