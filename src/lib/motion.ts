/** Shared motion tokens: ease-out curves only, 150–400ms, no bounce. */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
} as const;

/** Small, capped stagger so items in the same row enter one after another. */
export function staggerDelay(index: number): number {
  return (index % 4) * 0.06;
}
