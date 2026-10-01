import { portfolio } from "@/data/portfolio";
import type { ProficiencyLevel, SectionId, Tool } from "@/data/types";

const { profile, navigation } = portfolio;

export function isShownTool(tool: Tool): tool is Tool & { level: ProficiencyLevel } {
  return tool.level !== "I don't use it";
}

/** Toolkit categories with hidden tools removed, and empty categories dropped. */
export const visibleToolkit = portfolio.toolkit
  .map((category) => ({ ...category, tools: category.tools.filter(isShownTool) }))
  .filter((category) => category.tools.length > 0);

export const socials = profile.socials ?? [];

// Sections that disappear, nav link included, when there is nothing to put in them.
const emptySections: Partial<Record<SectionId, boolean>> = {
  work: portfolio.caseStudies.length === 0,
  toolkit: visibleToolkit.length === 0,
  experience: portfolio.experience.length === 0,
  testimonials: portfolio.testimonials.length === 0,
  packages: portfolio.packages.length === 0,
  faq: portfolio.faqs.length === 0,
};

export function isSectionShown(id: SectionId): boolean {
  return !emptySections[id];
}

export const visibleNavLinks = navigation.links.filter((link) => isSectionShown(link.sectionId));

export interface CtaLink {
  href: string;
  label: string;
  external: boolean;
}

const emailHref = `mailto:${profile.email}?subject=${encodeURIComponent(navigation.emailCtaSubject)}`;

/** A "Book a Call" button: the booking page when there is one, otherwise an email. */
export function getBookingCta(bookingLabel: string): CtaLink {
  return profile.bookingUrl
    ? { href: profile.bookingUrl, label: bookingLabel, external: true }
    : { href: emailHref, label: navigation.emailCtaLabel, external: false };
}

/** The navbar's call to action: the booking page, or the contact section when there isn't one. */
export function getNavbarCta(): CtaLink {
  return profile.bookingUrl
    ? { href: profile.bookingUrl, label: navigation.bookCallLabel, external: true }
    : { href: "#contact", label: navigation.emailCtaLabel, external: false };
}
