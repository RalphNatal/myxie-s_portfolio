import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Id of the item that starts expanded. */
  defaultOpenId?: string;
  className?: string;
}

/** Disclosure list following the WAI-ARIA accordion pattern; one panel open at a time. */
export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          item={item}
          baseId={baseId}
          isOpen={openId === item.id}
          onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
        />
      ))}
    </div>
  );
}

interface AccordionRowProps {
  item: AccordionItem;
  baseId: string;
  isOpen: boolean;
  onToggle: () => void;
}

const panelVariants = {
  open: { height: "auto", opacity: 1, visibility: "visible" },
  closed: { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } },
} as const;

function AccordionRow({ item, baseId, isOpen, onToggle }: AccordionRowProps) {
  const reduceMotion = useReducedMotion();
  const triggerId = `${baseId}-${item.id}-trigger`;
  const panelId = `${baseId}-${item.id}-panel`;

  return (
    <div>
      <h3 className="text-lg font-medium">
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-6 rounded-lg py-6 text-left text-ink transition-colors duration-200 hover:text-accent-strong"
        >
          <span>{item.title}</span>
          <span
            aria-hidden="true"
            className={cn(
              "grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted transition duration-300 ease-out group-hover:border-accent/60 group-hover:text-accent-strong",
              isOpen && "border-accent/60 bg-accent/10 text-accent-strong",
            )}
          >
            <Plus
              className={cn(
                "size-4 transition-transform duration-300 ease-out motion-reduce:transition-none",
                isOpen && "rotate-45",
              )}
            />
          </span>
        </button>
      </h3>
      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={panelVariants}
        transition={{ duration: reduceMotion ? 0 : DURATION.base, ease: EASE_OUT }}
        className="overflow-hidden"
      >
        <div className="pb-6 pr-12 text-muted">{item.content}</div>
      </motion.div>
    </div>
  );
}
