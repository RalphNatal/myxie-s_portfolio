import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  className?: string;
  children: ReactNode;
}

/** Compact label for tool names and categories. */
export function Tag({ className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-subtle/60 px-2.5 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
