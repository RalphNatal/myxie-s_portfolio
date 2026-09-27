import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useIsClient } from "@/hooks/useIsClient";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  /** Id of the element that names the dialog, usually its heading. */
  labelledBy: string;
  closeLabel: string;
  className?: string;
  children: ReactNode;
}

/** Modal dialog: traps focus, closes on Escape or backdrop click, and restores focus on close. */
export function Dialog({
  open,
  onClose,
  labelledBy,
  closeLabel,
  className,
  children,
}: DialogProps) {
  const isClient = useIsClient();
  const panelRef = useFocusTrap<HTMLDivElement>(open, onClose);
  useLockBodyScroll(open);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="dialog"
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.base, ease: EASE_OUT }}
        >
          {/* Keyboard users close with Escape or the close button; the backdrop is a pointer convenience. */}
          <div
            aria-hidden="true"
            role="presentation"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            className={cn(
              "relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-card border border-line bg-surface shadow-lift sm:rounded-card",
              className,
            )}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: DURATION.base, ease: EASE_OUT }}
          >
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              aria-label={closeLabel}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-line bg-surface/90 text-muted backdrop-blur transition-colors duration-200 hover:border-accent/60 hover:text-accent-strong"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
