import { MapPin } from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import { useCurrentMinute } from "@/hooks/useClock";
import { getFullName, getInitials } from "@/lib/text";
import { formatUtcOffset } from "@/lib/time";
import { assetUrl, cn } from "@/lib/utils";

const { profile } = portfolio;

/** Portrait in an arch frame, or initials art when no photo is set or the file can't load. */
export function HeroPortrait({ className }: { className?: string }) {
  const now = useCurrentMinute();
  const [photoFailed, setPhotoFailed] = useState(false);
  const alt = profile.portraitAlt ?? `${getFullName(profile)}, ${profile.role}`;
  const utcOffset = now ? formatUtcOffset(profile.timezone, now) : "";
  const showPhoto = Boolean(profile.portrait) && !photoFailed;

  // The prerendered <img> can fail before React attaches onError, so also check it on mount.
  function detectEarlyFailure(img: HTMLImageElement | null) {
    if (img?.complete && img.naturalWidth === 0) setPhotoFailed(true);
  }

  return (
    <div className={cn("relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-md", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.16),transparent)]"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-full border border-line bg-subtle shadow-lift">
        <InitialsArt label={showPhoto ? undefined : alt} />
        {showPhoto && (
          <img
            ref={detectEarlyFailure}
            src={assetUrl(profile.portrait)}
            alt={alt}
            width={640}
            height={800}
            decoding="async"
            onError={() => setPhotoFailed(true)}
            className="absolute inset-0 size-full object-cover text-transparent"
          />
        )}
      </div>

      <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-line bg-surface py-3 pl-3 pr-5 shadow-lift sm:-left-6">
        <span className="grid size-10 place-items-center rounded-full bg-sage/15 text-sage-strong">
          <MapPin aria-hidden="true" className="size-5" />
        </span>
        <div className="text-sm">
          <p className="font-semibold text-ink">{profile.location}</p>
          <p className="min-h-6 text-muted">{utcOffset}</p>
        </div>
      </div>
    </div>
  );
}

/** Decorative initials; announced as the portrait only when no photo is shown (`label` set). */
function InitialsArt({ label }: { label?: string }) {
  return (
    <div
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className="relative size-full bg-gradient-to-b from-accent/25 via-accent/10 to-sage/20"
    >
      <div aria-hidden="true">
        <span className="absolute inset-5 rounded-b-[1.5rem] rounded-t-full border border-accent/30" />
        <span className="absolute inset-10 rounded-b-2xl rounded-t-full border border-accent/15" />
        <span className="absolute -bottom-10 -right-10 size-44 rounded-full bg-sage/25" />
        <span className="absolute left-8 top-[18%] size-14 rounded-full bg-accent/25" />
        <span className="absolute inset-0 grid place-items-center pt-6 font-display text-[7rem] font-normal italic leading-none tracking-heading text-accent-strong/90 sm:text-[8rem]">
          {getInitials(profile)}
        </span>
      </div>
    </div>
  );
}
