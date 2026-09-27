import { useSyncExternalStore } from "react";

const subscribeNever = () => () => undefined;

/** False during prerendering and hydration, true once running in the browser. */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}
