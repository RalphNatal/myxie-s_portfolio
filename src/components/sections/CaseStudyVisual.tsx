import { Store } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import type { CaseStudy } from "@/data/types";
import { serviceIcons } from "@/lib/icons";
import { assetUrl, cn } from "@/lib/utils";

interface CaseStudyVisualProps {
  caseStudy: CaseStudy;
  /** Picks one of the placeholder compositions so neighbouring cards don't look identical. */
  variant: number;
  className?: string;
}

const compositions = [
  {
    disc: "-left-10 -top-14 size-48",
    ring: "right-10 top-6 size-24",
    arch: "bottom-0 right-1/4 h-20 w-28",
  },
  {
    disc: "-bottom-20 -right-12 size-56",
    ring: "left-8 top-8 size-20",
    arch: "bottom-0 left-12 h-24 w-20",
  },
  {
    disc: "-top-24 left-1/3 size-52",
    ring: "-left-6 bottom-6 size-28",
    arch: "bottom-0 right-8 h-16 w-32",
  },
] as const;

export function CaseStudyVisual({ caseStudy, variant, className }: CaseStudyVisualProps) {
  if (caseStudy.image) {
    return (
      <div className={cn("relative overflow-hidden bg-subtle", className)}>
        <img
          src={assetUrl(caseStudy.image)}
          alt={caseStudy.imageAlt ?? ""}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    );
  }

  const primaryService = portfolio.services.find(
    (service) => service.id === caseStudy.serviceIds[0],
  );
  const Icon = primaryService ? serviceIcons[primaryService.icon] : Store;
  const shapes = compositions[variant % compositions.length] ?? compositions[0];

  return (
    <div aria-hidden="true" className={cn("relative overflow-hidden bg-subtle", className)}>
      <span className="absolute inset-0 opacity-70 [background-image:radial-gradient(rgb(var(--line))_1px,transparent_1px)] [background-size:16px_16px]" />
      <span className={cn("absolute rounded-full bg-accent/15", shapes.disc)} />
      <span className={cn("absolute rounded-full border border-accent/30", shapes.ring)} />
      <span className={cn("absolute rounded-t-full bg-sage/25", shapes.arch)} />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-2xl border border-line bg-surface text-accent-strong shadow-lift transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none">
          <Icon className="size-7" />
        </span>
      </span>
    </div>
  );
}
