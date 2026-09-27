import type { MouseEventHandler } from "react";
import { portfolio } from "@/data/portfolio";
import { getInitials } from "@/lib/text";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** Monogram and first name, linking back to the top of the page. */
export function Logo({ className, onClick }: LogoProps) {
  const { profile } = portfolio;

  return (
    <a
      href="#home"
      onClick={onClick}
      className={cn("group inline-flex items-center gap-3 rounded-full", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-full bg-accent-strong font-display text-sm font-semibold tracking-normal text-on-accent transition-transform duration-300 ease-out group-hover:-rotate-6 motion-reduce:transition-none"
      >
        {getInitials(profile)}
      </span>
      <span className="font-display text-lg font-semibold tracking-heading text-ink">
        {profile.firstName}
      </span>
    </a>
  );
}
