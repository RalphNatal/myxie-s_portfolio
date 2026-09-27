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
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
          <ContactDetails className="mt-10" />
        </Reveal>
        <Reveal>
          <Card className="relative p-6 sm:p-10">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
