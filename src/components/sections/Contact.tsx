import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

const copy = portfolio.sections.contact;

export function Contact() {
  return (
    // tabIndex lets "Discuss a similar project" move keyboard focus here after scrolling.
    <Section id="contact" labelledBy="contact-heading" tabIndex={-1} className="focus:outline-none">
      {/* On phones the form comes straight after the heading; on desktop it sits in its own column. */}
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
        <Reveal className="lg:col-start-1">
          <SectionHeading
            id="contact-heading"
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
        </Reveal>
        <Reveal className="lg:sticky lg:top-28 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start">
          <Card className="relative p-6 sm:p-10">
            <ContactForm />
          </Card>
        </Reveal>
        <Reveal className="lg:col-start-1">
          <ContactDetails />
        </Reveal>
      </div>
    </Section>
  );
}
