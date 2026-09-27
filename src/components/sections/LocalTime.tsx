import { portfolio } from "@/data/portfolio";
import { useCurrentMinute } from "@/hooks/useClock";
import { fillTemplate, parseLocation } from "@/lib/text";
import { formatTime, getVisitorTimeZone, sharesLocalTime } from "@/lib/time";

const { profile, sections } = portfolio;
const copy = sections.contact;
const { city } = parseLocation(profile.location);

// A fixed reference time, rendered invisibly before the clock starts so the line keeps its size.
const placeholderTime = formatTime(new Date(0), profile.timezone);

/** Live local time for the VA, plus the visitor's own time when their zone differs. */
export function LocalTime() {
  const now = useCurrentMinute();

  if (!now) {
    return (
      <span aria-hidden="true" className="invisible block">
        {fillTemplate(copy.currentTimeTemplate, { time: placeholderTime, city })}
      </span>
    );
  }

  const visitorZone = getVisitorTimeZone();
  const showVisitorTime = !sharesLocalTime(visitorZone, profile.timezone, now);

  return (
    <>
      <time dateTime={now.toISOString()} className="block">
        {fillTemplate(copy.currentTimeTemplate, {
          time: formatTime(now, profile.timezone),
          city,
        })}
      </time>
      {showVisitorTime && (
        <span className="mt-0.5 block text-sm text-muted">
          {fillTemplate(copy.visitorTimeTemplate, { time: formatTime(now, visitorZone) })}
        </span>
      )}
    </>
  );
}
