import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Section } from "@/components/layout/Section";
import { SampleBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import type { Testimonial } from "@/data/types";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { fillTemplate, getNameInitials } from "@/lib/text";
import { cn } from "@/lib/utils";

const { testimonials, sections } = portfolio;
const copy = sections.testimonials;

const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -48 }),
};

export function Testimonials() {
  // Direction (1 = forward, -1 = back) decides which way slides move.
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const count = testimonials.length;
  const active = testimonials[index];

  if (!active) return null;

  const paginate = (step: number) =>
    setSlide(([current]) => [(current + step + count) % count, step]);
  const goTo = (target: number) => setSlide(([current]) => [target, target > current ? 1 : -1]);

  function handleDragEnd(_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    const swipe = info.offset.x + info.velocity.x * 0.2;
    if (swipe < -SWIPE_THRESHOLD) paginate(1);
    else if (swipe > SWIPE_THRESHOLD) paginate(-1);
  }

  return (
    <Section id="testimonials" labelledBy="testimonials-heading" tone="muted">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow={copy.eyebrow}
            title={copy.title}
            intro={copy.intro}
          />
        </Reveal>

        <Reveal>
          <div role="region" aria-roledescription="carousel" aria-label={copy.carouselLabel}>
            {/* Every slide is rendered invisibly in the same grid cell so the height never jumps. */}
            <div className="grid" aria-live="polite">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  aria-hidden="true"
                  className="invisible [grid-area:1/1]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={fillTemplate(copy.slideLabel, { number: index + 1, total: count })}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: DURATION.slow, ease: EASE_OUT }}
                  drag={count > 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className="touch-pan-y [grid-area:1/1] active:cursor-grabbing"
                >
                  <TestimonialCard testimonial={active} />
                </motion.div>
              </AnimatePresence>
            </div>

            {count > 1 && (
              <div className="mt-6 flex items-center justify-between gap-6">
                <div className="flex items-center">
                  {testimonials.map((testimonial, dot) => {
                    const isCurrent = dot === index;
                    return (
                      <button
                        key={testimonial.name}
                        type="button"
                        onClick={() => goTo(dot)}
                        aria-label={fillTemplate(copy.goToLabel, { number: dot + 1 })}
                        aria-current={isCurrent ? "true" : undefined}
                        className="group grid size-6 place-items-center rounded-full"
                      >
                        <span
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300 ease-out",
                            isCurrent
                              ? "w-6 bg-accent-strong"
                              : "w-1.5 bg-muted/40 group-hover:bg-muted",
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  <ArrowButton label={copy.previousLabel} onClick={() => paginate(-1)}>
                    <ChevronLeft aria-hidden="true" className="size-5" />
                  </ArrowButton>
                  <ArrowButton label={copy.nextLabel} onClick={() => paginate(1)}>
                    <ChevronRight aria-hidden="true" className="size-5" />
                  </ArrowButton>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full select-none flex-col rounded-card border border-line bg-surface p-6 shadow-soft sm:p-10">
      <Quote aria-hidden="true" className="size-8 fill-accent/15 text-accent" />
      <blockquote className="mt-6 flex-1 font-display text-xl font-normal italic leading-snug tracking-heading text-ink sm:text-2xl sm:leading-snug">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/10 font-display text-base font-semibold text-accent-strong"
        >
          {getNameInitials(testimonial.name)}
        </span>
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-2 font-semibold text-ink">
            {testimonial.name}
            {testimonial.isSample && <SampleBadge />}
          </p>
          <p className="text-sm text-muted">
            {testimonial.role}
            <span
              aria-hidden="true"
              className="mx-2 inline-block size-1 rounded-full bg-muted/60 align-middle"
            />
            {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

function ArrowButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink shadow-soft transition-colors duration-200 hover:border-accent/60 hover:text-accent-strong"
    >
      {children}
    </button>
  );
}
