import type { HTMLAttributes, ReactNode } from "react";
import type { SectionId } from "@/data/types";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "id"> {
  id: SectionId;
  /** Id of the section's heading. */
  labelledBy: string;
  /** "muted" adds a subtle band to separate neighbouring sections. */
  tone?: "default" | "muted";
  children: ReactNode;
}

export function Section({
  id,
  labelledBy,
  tone = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-20 md:py-28",
        tone === "muted" && "border-y border-line/70 bg-subtle/40",
        className,
      )}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}
