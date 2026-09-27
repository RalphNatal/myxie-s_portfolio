import { Moon, Sun } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

/** Dark mode switch. The icon is driven by the `dark` class so it's correct before hydration. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={portfolio.labels.themeToggle}
      aria-pressed={theme === null ? undefined : theme === "dark"}
      className={cn(
        "relative grid size-10 place-items-center rounded-full text-muted transition-colors duration-200 hover:bg-subtle hover:text-ink",
        className,
      )}
    >
      <Moon
        aria-hidden="true"
        className="size-5 transition duration-300 ease-out motion-reduce:transition-none dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Sun
        aria-hidden="true"
        className="absolute size-5 -rotate-90 scale-0 opacity-0 transition duration-300 ease-out motion-reduce:transition-none dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
