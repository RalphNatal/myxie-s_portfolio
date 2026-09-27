import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/data/portfolio";

const { toolkit, sections } = portfolio;

// Every Advanced or Proficient tool from the toolkit, so the two lists never disagree.
const everydayTools = [
  ...new Set(
    toolkit
      .flatMap((category) => category.tools)
      .filter((tool) => tool.level !== "Familiar")
      .map((tool) => tool.name),
  ),
];

export function TrustBar() {
  return (
    <section aria-labelledby="trust-heading" className="border-y border-line bg-surface/60">
      <Container className="flex flex-col gap-5 py-10 md:flex-row md:items-center md:gap-10">
        <h2
          id="trust-heading"
          className="shrink-0 font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted md:max-w-[9rem]"
        >
          {sections.trustBar.label}
        </h2>
        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {everydayTools.map((name) => (
              <li key={name}>
                <span className="inline-flex rounded-full border border-line bg-canvas px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:bg-accent/5 hover:text-accent-strong">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
