import { useSyncExternalStore } from "react";

const MINUTE = 60_000;

const subscribeToTicks = (onTick: () => void) => {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
};
const subscribeNever = () => () => undefined;

/** The current time, updated every minute. Null until the page is running in the browser. */
export function useCurrentMinute(): Date | null {
  const minute = useSyncExternalStore(
    subscribeToTicks,
    () => Math.floor(Date.now() / MINUTE),
    () => null,
  );
  return minute === null ? null : new Date(minute * MINUTE);
}

/** The current year. Hydrates with the build year, then switches to the visitor's clock. */
export function useCurrentYear(): number {
  return useSyncExternalStore(
    subscribeNever,
    () => new Date().getFullYear(),
    () => __BUILD_YEAR__,
  );
}
