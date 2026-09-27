import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { portfolio } from "@/data/portfolio";
import type { Service } from "@/data/types";
import { serviceIcons } from "@/lib/icons";
import { staggerDelay } from "@/lib/motion";

const { services, sections } = portfolio;
const copy = sections.services;

export function Services() {
  return (
    <Section id="services" labelledBy="services-heading">
      <Reveal>
        <SectionHeading
          id="services-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
      </Reveal>

      <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.id} delay={staggerDelay(index)} className="flex">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Card interactive className="group flex w-full flex-col p-6 sm:p-8">
      <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent-strong transition-colors duration-300 ease-out group-hover:bg-accent-strong group-hover:text-on-accent">
        <Icon aria-hidden="true" className="size-6" />
      </span>

      <h3 className="mt-6 text-xl font-medium text-ink">{service.title}</h3>
      <p className="mt-2 text-muted">{service.summary}</p>

      <div className="mt-6 border-t border-line pt-6">
        <h4 className="sr-only">{copy.deliverablesLabel}</h4>
        <ul className="space-y-3 text-sm text-ink">
          {service.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex gap-3">
              <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-sage" />
              {deliverable}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6">
        <h4 className="sr-only">{copy.toolsLabel}</h4>
        <ul className="flex flex-wrap gap-2">
          {service.tools.map((tool) => (
            <li key={tool}>
              <Tag>{tool}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
