import { ArrowUpRight } from "lucide-react";
import { SampleBadge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { CaseStudyVisual } from "./CaseStudyVisual";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant: number;
  onOpen: () => void;
}

const copy = portfolio.sections.caseStudies;

export function CaseStudyCard({ caseStudy, variant, onOpen }: CaseStudyCardProps) {
  return (
    <Card interactive className="group relative flex h-full flex-col overflow-hidden">
      <CaseStudyVisual caseStudy={caseStudy} variant={variant} className="aspect-[16/9]" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <span>{caseStudy.clientType}</span>
          {caseStudy.isSample && <SampleBadge />}
        </div>

        <h3 className="mt-3 text-xl font-medium text-ink">
          {/* The ::after overlay stretches this button across the card so the whole card is clickable. */}
          <button
            type="button"
            onClick={onOpen}
            aria-haspopup="dialog"
            className="text-left transition-colors duration-200 after:absolute after:inset-0 after:rounded-card after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent group-hover:text-accent-strong"
          >
            {caseStudy.title}
          </button>
        </h3>

        <dl className="mt-5 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-ink">{copy.problemLabel}</dt>
            <dd className="mt-1 line-clamp-2 text-muted">{caseStudy.problem}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">{copy.solutionLabel}</dt>
            <dd className="mt-1 line-clamp-2 text-muted">{caseStudy.solution}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between gap-4 border-t border-line pt-6">
            <div>
              <p className="sr-only">{copy.resultLabel}</p>
              <p className="font-display text-2xl font-medium leading-tight tracking-heading text-accent-strong">
                {caseStudy.result.metric}
              </p>
              <p className="mt-1 text-sm text-muted">{caseStudy.result.label}</p>
            </div>
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent-strong group-hover:bg-accent-strong group-hover:text-on-accent"
            >
              <ArrowUpRight className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
