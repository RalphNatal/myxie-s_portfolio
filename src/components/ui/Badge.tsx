import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "sage" | "accent" | "neutral";

const tones: Record<Tone, string> = {
  sage: "bg-sage/15 text-sage-strong",
  accent: "bg-accent-strong text-on-accent shadow-soft",
  neutral: "bg-subtle text-muted",
};

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
