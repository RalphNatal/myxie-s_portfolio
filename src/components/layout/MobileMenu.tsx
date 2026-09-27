import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/Button";
import { portfolio } from "@/data/portfolio";
import type { SectionId } from "@/data/types";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useIsClient } from "@/hooks/useIsClient";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn, scrollToSection } from "@/lib/utils";
import { Logo } from "./Logo";

interface MobileMenuProps {
  id: string;
  open: boolean;
  activeId: string | null;
  onClose: () => void;
}

const { navigation, profile } = portfolio;

/** Slide-in navigation panel for small screens. Portaled so the header's blur can't clip it. */
export function MobileMenu({ id, open, activeId, onClose }: MobileMenuProps) {
  const isClient = useIsClient();
  const panelRef = useFocusTrap<HTMLDivElement>(open, onClose);
  useLockBodyScroll(open);

  if (!isClient) return null;

  function navigateTo(sectionId: SectionId) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onClose();
      // Wait for the menu to release scroll lock and focus before moving on.
      window.setTimeout(() => scrollToSection(sectionId), 0);
    };
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <div key="mobile-menu" className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            aria-hidden="true"
            role="presentation"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
          />
          <motion.div
            ref={panelRef}
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label={navigation.menuLabel}
            tabIndex={-1}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-canvas shadow-lift"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: DURATION.slow, ease: EASE_OUT }}
          >
            <div className="flex h-nav shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
              <Logo onClick={onClose} />
              <button
                type="button"
                data-autofocus
                onClick={onClose}
                aria-label={navigation.closeMenuLabel}
                className="grid size-10 place-items-center rounded-full text-ink transition-colors duration-200 hover:bg-subtle"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label={navigation.primaryNavLabel} className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <ul className="space-y-1">
                {navigation.links.map((link) => {
                  const isActive = link.sectionId === activeId;
                  return (
                    <li key={link.sectionId}>
                      <a
                        href={`#${link.sectionId}`}
                        onClick={navigateTo(link.sectionId)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl font-medium transition-colors duration-200",
                          isActive ? "bg-subtle text-ink" : "text-ink hover:bg-subtle",
                        )}
                      >
                        {link.label}
                        <ArrowRight
                          aria-hidden="true"
                          className="size-5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="shrink-0 space-y-4 border-t border-line p-4 sm:p-6">
              <Button href={profile.bookingUrl} external className="w-full">
                {navigation.bookCallLabel}
              </Button>
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-full py-1 text-center text-sm font-medium text-muted transition-colors duration-200 hover:text-accent-strong"
              >
                {profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
