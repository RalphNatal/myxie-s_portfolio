import { portfolio } from "@/data/portfolio";

/** Screen-reader-only note for links that open in a new tab. */
export function NewTabHint() {
  return <span className="sr-only"> {portfolio.labels.opensInNewTab}</span>;
}
