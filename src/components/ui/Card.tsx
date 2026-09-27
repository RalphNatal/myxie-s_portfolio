import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Lifts slightly and gains an accent border on hover or keyboard focus. */
  interactive?: boolean;
}

export function Card({ interactive = false, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface shadow-soft",
        interactive &&
          "transition duration-300 ease-out focus-within:border-accent/50 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
      {...rest}
    />
  );
}
