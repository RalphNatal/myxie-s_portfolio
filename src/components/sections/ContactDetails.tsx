import { CalendarDays, Clock, Mail, MapPin, Sun, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { portfolio } from "@/data/portfolio";
import { socials } from "@/lib/content";
import { cn } from "@/lib/utils";
import { LocalTime } from "./LocalTime";

const { profile, sections } = portfolio;
const copy = sections.contact;

export function ContactDetails({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ul className="space-y-6">
        <DetailItem icon={Mail} label={copy.emailLabel}>
          <a
            href={`mailto:${profile.email}`}
            className="font-medium underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent-strong hover:decoration-accent"
          >
            {profile.email}
          </a>
        </DetailItem>
        <DetailItem icon={MapPin} label={copy.locationLabel}>
          {profile.location}
        </DetailItem>
        <DetailItem icon={Clock} label={copy.timezoneLabel}>
          <LocalTime />
        </DetailItem>
        <DetailItem icon={Sun} label={copy.hoursLabel}>
          {profile.workingHours}
        </DetailItem>
      </ul>

      {/* Without a booking page this card has nothing to offer; the email above covers it. */}
      {profile.bookingUrl && (
        <div className="mt-10 rounded-card border border-line bg-surface p-6 shadow-soft">
          <h3 className="text-lg font-medium text-ink">{copy.bookingTitle}</h3>
          <p className="mt-2 text-muted">{copy.bookingDescription}</p>
          <Button href={profile.bookingUrl} external variant="secondary" className="mt-6">
            <CalendarDays aria-hidden="true" className="size-4" />
            {copy.bookingLabel}
          </Button>
        </div>
      )}

      {socials.length > 0 && (
        <div className="mt-10">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted">
            {copy.socialsLabel}
          </h3>
          <SocialLinks className="mt-4" />
        </div>
      )}
    </div>
  );
}

interface DetailItemProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  children: ReactNode;
}

function DetailItem({ icon: Icon, label, className, children }: DetailItemProps) {
  return (
    <li className={cn("flex gap-4", className)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent-strong">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted">{label}</p>
        <div className="mt-0.5 break-words text-ink">{children}</div>
      </div>
    </li>
  );
}
