import { portfolio } from "@/data/portfolio";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent-strong focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-on-accent focus:shadow-lift"
    >
      {portfolio.labels.skipToContent}
    </a>
  );
}
