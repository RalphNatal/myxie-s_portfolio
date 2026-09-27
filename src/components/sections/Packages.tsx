import { Check, Clock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import type { Package } from "@/data/types";
import { staggerDelay } from "@/lib/motion";
import { splitPrice } from "@/lib/text";
import { cn } from "@/lib/utils";

const { packages, sections } = portfolio;
const copy = sections.packages;

export function Packages() {
  return (
    <Section id="packages" labelledBy="packages-heading">
      <Reveal>
        <SectionHeading
          id="packages-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
      </Reveal>

      <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
        {packages.map((plan, index) => (
          <Reveal as="li" key={plan.name} delay={staggerDelay(index)} className="flex">
            <PackageCard plan={plan} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <p className="text-center text-muted">
          {copy.note}{" "}
          <a
            href="#contact"
            className="font-semibold text-accent-strong underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent-strong"
          >
            {copy.noteLinkLabel}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}

function PackageCard({ plan }: { plan: Package }) {
  const { amount, unit } = splitPrice(plan.price);

  return (
    <Card
      interactive
      className={cn(
        "relative flex w-full flex-col p-6 sm:p-8",
        plan.highlighted && "border-accent/60 shadow-lift ring-1 ring-accent/25",
      )}
    >
      {plan.highlighted && (
        <Badge tone="accent" className="absolute -top-3.5 left-6 sm:left-8">
          {copy.popularLabel}
        </Badge>
      )}

      <h3 className="text-xl font-medium text-ink">{plan.name}</h3>
      <p className="mt-2 text-muted">{plan.description}</p>

      <p className="mt-8 flex items-baseline gap-1">
        <span className="font-display text-3xl font-medium tracking-heading text-ink">
          {amount}
        </span>
        {unit && <span className="text-lg text-muted">{unit}</span>}
      </p>
      <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink">
        <Clock aria-hidden="true" className="size-4 text-accent" />
        {plan.hours}
      </p>

      <h4 className="mt-8 font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted">
        {copy.includedLabel}
      </h4>
      <ul className="mt-4 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-ink">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-sage" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href="#contact"
          variant={plan.highlighted ? "primary" : "secondary"}
          className="w-full"
        >
          {copy.ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
