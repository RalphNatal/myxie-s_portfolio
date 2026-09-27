import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing a thin band just above the middle
 * of the viewport, or null when none of the watched sections is there.
 */
export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const visibility = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visibility.set(entry.target.id, entry.isIntersecting);
        setActiveId(sectionIds.find((id) => visibility.get(id)) ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
