import { ArrowRight, Store } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { serviceIcons } from "@/lib/icons";
import { CaseStudyVisual } from "./CaseStudyVisual";

const { services, sections } = portfolio;
const copy = sections.caseStudies;

const labelClasses = "font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted";

/** A single case study shown in full: the story on one side, the result on the other. */
export function CaseStudyFeature({ caseStudy }: { caseStudy: CaseStudy }) {
  const relatedServices = services.filter((service) => caseStudy.serviceIds.includes(service.id));
  const firstService = relatedServices[0];
  const Icon = firstService ? serviceIcons[firstService.icon] : Store;

  return (
    <Card className="grid overflow-hidden md:grid-cols-[1.45fr_1fr]">
      <div className="p-6 sm:p-10">
        <p className="text-sm text-muted">{caseStudy.clientType}</p>
        <h3 className="mt-3 text-xl font-medium text-ink sm:text-2xl">{caseStudy.title}</h3>

        <dl className="mt-8 space-y-6">
          <div>
            <dt className={labelClasses}>{copy.problemLabel}</dt>
            <dd className="mt-2 text-ink">{caseStudy.problem}</dd>
          </div>
          <div>
            <dt className={labelClasses}>{copy.solutionLabel}</dt>
            <dd className="mt-2 text-ink">{caseStudy.solution}</dd>
          </div>
        </dl>

        {(relatedServices.length > 0 || (caseStudy.tools?.length ?? 0) > 0) && (
          <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
            {relatedServices.map((service) => (
              <Badge key={service.id} tone="sage">
                {service.title}
              </Badge>
            ))}
            {caseStudy.tools?.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 border-t border-line bg-accent/5 p-6 sm:p-10 md:border-l md:border-t-0">
        {caseStudy.image ? (
          <CaseStudyVisual
            caseStudy={caseStudy}
            variant={0}
            className="aspect-[16/10] rounded-xl border border-line"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid size-14 place-items-center rounded-2xl border border-line bg-surface text-accent-strong shadow-soft"
          >
            <Icon className="size-6" />
          </span>
        )}

        <div className="mt-auto">
          <p className={labelClasses}>{copy.resultLabel}</p>
          <p className="mt-3 font-display text-2xl font-medium leading-tight tracking-heading text-accent-strong lg:text-3xl">
            {caseStudy.result.metric}
          </p>
          <p className="mt-3 text-muted">{caseStudy.result.label}</p>
        </div>

        <Button href="#contact" variant="secondary" className="self-start">
          {copy.ctaLabel}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Button>
      </div>
    </Card>
  );
}
