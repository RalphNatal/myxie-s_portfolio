/** Formats a time like "2:14 PM" in the given IANA time zone, falling back to the visitor's zone. */
export function formatTime(date: Date, timeZone?: string): string {
  const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "2-digit" };
  try {
    return new Intl.DateTimeFormat("en-US", { ...options, timeZone }).format(date);
  } catch {
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }
}

/** Returns a label like "GMT+8" for the given time zone, or an empty string if it's invalid. */
export function formatUtcOffset(timeZone: string, date = new Date()): string {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "shortOffset",
    }).formatToParts(date);
    return parts.find((part) => part.type === "timeZoneName")?.value ?? "";
  } catch {
    return "";
  }
}

export function getVisitorTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/** Whether two time zones currently show the same wall-clock time. */
export function sharesLocalTime(a: string, b: string, date: Date): boolean {
  return formatTime(date, a) === formatTime(date, b);
}
