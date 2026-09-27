import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { portfolio } from "@/data/portfolio";
import type { Availability, Stat } from "@/data/types";
import { getFullName } from "@/lib/text";
import { cn } from "@/lib/utils";
import { HeroPortrait } from "./HeroPortrait";

const { profile, stats, sections } = portfolio;
const copy = sections.hero;

// Hero content animates with CSS so it plays immediately on the prerendered page, before JavaScript loads.
const enter = "motion-safe:animate-fade-up";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16 lg:pt-20"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <AvailabilityPill availability={profile.availability} className={enter} />

          <p className={cn("mt-8 text-sm text-muted [animation-delay:60ms]", enter)}>
            <span className="font-semibold text-ink">{getFullName(profile)}</span>
            <span aria-hidden="true" className="mx-3 inline-block h-3.5 w-px bg-line align-middle" />
            {profile.role}
          </p>

          <h1
            id="hero-heading"
            className={cn(
              "mt-4 text-[2.5rem] font-medium leading-[1.08] text-ink [animation-delay:120ms] sm:text-3xl xl:text-4xl",
              enter,
            )}
          >
            {profile.headline}
          </h1>

          <p className={cn("mt-6 max-w-xl text-lg text-muted [animation-delay:180ms]", enter)}>
            {profile.subheadline}
          </p>

          <div
            className={cn("mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row", enter)}
          >
            <Button href={profile.bookingUrl} external>
              {copy.primaryCtaLabel}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
            <Button href="#work" variant="secondary">
              {copy.secondaryCtaLabel}
            </Button>
          </div>

          <HeroStats stats={stats} label={copy.statsLabel} className={cn("[animation-delay:300ms]", enter)} />
        </div>

        <HeroPortrait className={cn("[animation-delay:200ms]", enter)} />
      </Container>
    </section>
  );
}

function AvailabilityPill({
  availability,
  className,
}: {
  availability: Availability;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-4 text-sm font-medium text-ink shadow-soft",
        className,
      )}
    >
      <span aria-hidden="true" className="relative flex size-2.5">
        {availability.isAvailable && (
          <span className="absolute inset-0 rounded-full bg-sage motion-safe:animate-status-ping" />
        )}
        <span
          className={cn(
            "relative size-2.5 rounded-full",
            availability.isAvailable ? "bg-sage" : "bg-muted/50",
          )}
        />
      </span>
      {availability.label}
    </p>
  );
}

function HeroStats({ stats, label, className }: { stats: Stat[]; label: string; className?: string }) {
  return (
    <dl
      aria-label={label}
      className={cn(
        "mt-12 grid grid-cols-3 divide-x divide-line border-t border-line pt-8",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-1 px-3 first:pl-0 sm:px-6">
          <dt className="text-xs text-muted sm:text-sm">{stat.label}</dt>
          <dd className="font-display text-xl font-medium tracking-heading text-ink sm:text-2xl">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
