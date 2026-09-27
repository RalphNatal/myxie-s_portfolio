import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

const { faqs, sections } = portfolio;
const copy = sections.faq;

const items = faqs.map((faq, index) => ({
  id: `faq-${index}`,
  title: faq.question,
  content: <p>{faq.answer}</p>,
}));

export function FAQ() {
  return (
    <Section id="faq" labelledBy="faq-heading" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-heading"
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
        </Reveal>
        <Reveal>
          <Accordion items={items} defaultOpenId={items[0]?.id} />
        </Reveal>
      </div>
    </Section>
  );
}
