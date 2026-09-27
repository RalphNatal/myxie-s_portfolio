import { portfolio } from "@/data/portfolio";
import type { SocialLink } from "@/data/types";
import { socialIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { NewTabHint } from "./NewTabHint";

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export function SocialLinks({ links = portfolio.profile.socials, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((link) => {
        const Icon = socialIcons[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent-strong"
            >
              <Icon aria-hidden="true" className="size-4" />
              {link.platform}
              <NewTabHint />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
