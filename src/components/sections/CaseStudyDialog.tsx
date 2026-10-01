import { ArrowRight } from "lucide-react";
import { useId, type MouseEvent } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { Tag } from "@/components/ui/Tag";
import { portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { scrollToSection } from "@/lib/utils";
import { CaseStudyVisual } from "./CaseStudyVisual";

interface CaseStudyDialogProps {
  caseStudy: CaseStudy | null;
  variant: number;
  open: boolean;
  onClose: () => void;
}

const { services, sections } = portfolio;
const copy = sections.caseStudies;

const labelClasses = "font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted";

export function CaseStudyDialog({ caseStudy, variant, open, onClose }: CaseStudyDialogProps) {
  const titleId = useId();

  function handleContactClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onClose();
    // Let the dialog release scroll lock and focus before moving to the form.
    window.setTimeout(() => scrollToSection("contact"), 0);
  }

  return (
    <Dialog
      open={open && caseStudy !== null}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel={copy.closeLabel}
    >
      {caseStudy && (
        <article>
          <CaseStudyVisual
            caseStudy={caseStudy}
            variant={variant}
            className="aspect-[2/1] sm:aspect-[21/9]"
          />

          <div className="p-6 sm:p-10">
            <p className="text-sm text-muted">{caseStudy.clientType}</p>
            <h2 id={titleId} className="mt-3 text-2xl font-medium text-ink">
              {caseStudy.title}
            </h2>

            <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <p className={labelClasses}>{copy.resultLabel}</p>
              <p className="mt-2 font-display text-2xl font-medium tracking-heading text-accent-strong sm:text-3xl">
                {caseStudy.result.metric}
              </p>
              <p className="mt-1 text-muted">{caseStudy.result.label}</p>
            </div>

            <dl className="mt-8 space-y-8">
              <div>
                <dt className={labelClasses}>{copy.problemLabel}</dt>
                <dd className="mt-2 text-lg text-ink">{caseStudy.problem}</dd>
              </div>
              <div>
                <dt className={labelClasses}>{copy.solutionLabel}</dt>
                <dd className="mt-2 text-lg text-ink">{caseStudy.solution}</dd>
              </div>
            </dl>

            <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <h3 className={labelClasses}>{copy.servicesLabel}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {services
                    .filter((service) => caseStudy.serviceIds.includes(service.id))
                    .map((service) => (
                      <li key={service.id}>
                        <Badge tone="sage">{service.title}</Badge>
                      </li>
                    ))}
                </ul>
              </div>
              {caseStudy.tools && caseStudy.tools.length > 0 && (
                <div>
                  <h3 className={labelClasses}>{copy.toolsLabel}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {caseStudy.tools.map((tool) => (
                      <li key={tool}>
                        <Tag>{tool}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Button href="#contact" onClick={handleContactClick} className="mt-10">
              {copy.ctaLabel}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </article>
      )}
    </Dialog>
  );
}
