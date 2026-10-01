import type { Profile } from "../data/types.ts";

/** Replaces {placeholders} in copy from portfolio.ts, e.g. "Currently {time}" → "Currently 2:14 PM". */
export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export function getFullName(profile: Pick<Profile, "firstName" | "lastName">): string {
  return [profile.firstName, profile.lastName].filter(Boolean).join(" ");
}

export function getInitials(profile: Pick<Profile, "firstName" | "lastName">): string {
  return [profile.firstName, profile.lastName]
    .map((part) => part.trim().charAt(0).toUpperCase())
    .join("");
}

/** Initials from a display name like "Ana R." → "AR". */
export function getNameInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/[^\p{L}]/gu, "").charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Splits "Manila, Philippines" into its city and country parts. */
export function parseLocation(location: string): { city: string; country: string } {
  const [city = "", ...rest] = location.split(",").map((part) => part.trim());
  return { city, country: rest.join(", ") };
}

/** Splits a price like "$7.50/hr" into its amount and unit so the unit can be styled smaller. */
export function splitPrice(price: string): { amount: string; unit: string } {
  const slash = price.indexOf("/");
  if (slash === -1) return { amount: price, unit: "" };
  return { amount: price.slice(0, slash).trim(), unit: price.slice(slash).trim() };
}
