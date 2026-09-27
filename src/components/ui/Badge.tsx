import type { ReactNode } from "react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Tone = "sage" | "accent" | "neutral" | "sample";

const tones: Record<Tone, string> = {
  sage: "bg-sage/15 text-sage-strong",
  accent: "bg-accent-strong text-on-accent shadow-soft",
  neutral: "bg-subtle text-muted",
  sample: "border border-dashed border-muted/60 uppercase tracking-eyebrow text-muted",
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

/** Marks placeholder content so it's never mistaken for a real client story or review. */
export function SampleBadge({ className }: { className?: string }) {
  return (
    <Badge tone="sample" className={cn("px-2 py-0.5", className)}>
      {portfolio.labels.sampleBadge}
    </Badge>
  );
}
