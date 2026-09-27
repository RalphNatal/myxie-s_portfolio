import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating, for staggering items in a grid. */
  delay?: number;
  as?: "div" | "li";
}

const hidden = { opacity: 0, y: 16 };
const shown = { opacity: 1, y: 0 };
const viewport = { once: true, margin: "0px 0px -10% 0px" };

/**
 * Fades content up by 16px the first time it scrolls into view.
 * Movement is dropped for reduced-motion users via the app-level MotionConfig.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const transition = { duration: DURATION.slow, ease: EASE_OUT, delay };

  // data-reveal lets the <noscript> styles in index.html show content if JavaScript is off.
  if (as === "li") {
    return (
      <motion.li
        data-reveal
        className={className}
        initial={hidden}
        whileInView={shown}
        viewport={viewport}
        transition={transition}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
