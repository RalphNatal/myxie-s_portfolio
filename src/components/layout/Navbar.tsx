import { motion } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { portfolio } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { getNavbarCta, visibleNavLinks } from "@/lib/content";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const { navigation } = portfolio;
const navSectionIds = visibleNavLinks.map((link) => link.sectionId);
const cta = getNavbarCta();
const MOBILE_MENU_ID = "mobile-menu";

export function Navbar() {
  const isScrolled = useScrolled();
  const activeId = useActiveSection(navSectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        isScrolled
          ? "border-line/80 bg-canvas/75 shadow-soft backdrop-blur-md"
          : "border-transparent bg-canvas",
      )}
    >
      <Container className="flex h-nav items-center justify-between gap-6">
        <Logo />

        <nav aria-label={navigation.primaryNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {visibleNavLinks.map((link) => {
              const isActive = link.sectionId === activeId;
              return (
                <li key={link.sectionId}>
                  <a
                    href={`#${link.sectionId}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                        transition={{ duration: DURATION.base, ease: EASE_OUT }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={cta.href}
            external={cta.external}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {cta.label}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={navigation.openMenuLabel}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            className="grid size-10 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-subtle lg:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </Container>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={isMenuOpen}
        activeId={activeId}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
