import { ArrowUp } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { portfolio } from "@/data/portfolio";
import { useCurrentYear } from "@/hooks/useClock";
import { socials, visibleNavLinks } from "@/lib/content";
import { fillTemplate, getFullName } from "@/lib/text";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";

const { footer, profile } = portfolio;

const columnHeadingClasses =
  "font-sans text-xs font-semibold uppercase tracking-eyebrow text-muted";

export function Footer() {
  const year = useCurrentYear();

  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-16">
        <div
          className={cn(
            "grid gap-12",
            socials.length > 0 ? "md:grid-cols-[1.4fr_1fr_1fr]" : "md:grid-cols-[1.4fr_1fr]",
          )}
        >
          <div>
            <Logo />
            {profile.nickname && (
              <p className="mt-3 text-sm text-muted">
                {fillTemplate(footer.nicknameLine, { nickname: profile.nickname })}
              </p>
            )}
            <p className="mt-4 max-w-xs text-muted">{footer.tagline}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block break-all font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent-strong hover:decoration-accent"
            >
              {profile.email}
            </a>
          </div>

          <nav aria-labelledby="footer-links-heading">
            <h2 id="footer-links-heading" className={columnHeadingClasses}>
              {footer.quickLinksLabel}
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1">
              {visibleNavLinks.map((link) => (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    className="inline-block py-1 text-ink transition-colors duration-200 hover:text-accent-strong"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socials.length > 0 && (
            <div>
              <h2 className={columnHeadingClasses}>{footer.socialsLabel}</h2>
              <SocialLinks className="mt-4" />
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{fillTemplate(footer.copyright, { year, name: getFullName(profile) })}</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 self-start font-medium transition-colors duration-200 hover:text-accent-strong sm:self-auto"
          >
            {footer.backToTopLabel}
            <ArrowUp
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
