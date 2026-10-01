import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import type { ServiceId } from "@/data/types";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyDialog } from "./CaseStudyDialog";
import { CaseStudyFeature } from "./CaseStudyFeature";

type Filter = ServiceId | "all";

const { caseStudies, services, sections } = portfolio;
const copy = sections.caseStudies;

// Only offer filters that match at least one case study, so a chip never leads to an empty grid.
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: copy.filterAllLabel },
  ...services
    .filter((service) => caseStudies.some((study) => study.serviceIds.includes(service.id)))
    .map((service) => ({ id: service.id, label: service.title })),
];

export function CaseStudies() {
  const [onlyStudy] = caseStudies;
  if (!onlyStudy) return null;

  return (
    <Section id="work" labelledBy="work-heading">
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
        />
      </Reveal>

      {caseStudies.length === 1 ? (
        <Reveal className="mt-12 md:mt-16">
          <CaseStudyFeature caseStudy={onlyStudy} />
        </Reveal>
      ) : (
        <CaseStudyGrid />
      )}
    </Section>
  );
}

function CaseStudyGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  // The id is kept after closing so the dialog can finish its exit animation with content.
  const [dialog, setDialog] = useState<{ id: string | null; open: boolean }>({
    id: null,
    open: false,
  });

  const visibleStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.serviceIds.includes(activeFilter));
  const selectedIndex = caseStudies.findIndex((study) => study.id === dialog.id);
  // Filtering by service is only useful when the studies span more than one service.
  const showFilters = filters.length > 2;

  return (
    <>
      {showFilters && (
        <Reveal className="mt-10">
          {/* A single swipeable row on phones; wraps from sm up. */}
          <div
            role="group"
            aria-label={copy.filterLabel}
            className="-mx-4 -my-2 flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:mx-0 sm:my-0 sm:flex-wrap sm:overflow-visible sm:p-0 [&::-webkit-scrollbar]:hidden"
          >
            {filters.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "border-ink bg-ink text-canvas"
                      : "border-line bg-surface text-muted hover:border-accent/60 hover:text-ink",
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>
      )}

      <Reveal className={showFilters ? "mt-8" : "mt-12 md:mt-16"}>
        <motion.ul layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleStudies.map((study) => (
              <motion.li
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: DURATION.base, ease: EASE_OUT }}
              >
                <CaseStudyCard
                  caseStudy={study}
                  variant={caseStudies.indexOf(study)}
                  onOpen={() => setDialog({ id: study.id, open: true })}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </Reveal>

      <CaseStudyDialog
        caseStudy={caseStudies[selectedIndex] ?? null}
        variant={selectedIndex}
        open={dialog.open}
        onClose={() => setDialog((current) => ({ ...current, open: false }))}
      />
    </>
  );
}
