import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { portfolio } from "./src/data/portfolio.ts";
import { renderHeadTags } from "./src/lib/seo.ts";

/** Injects the title, meta, Open Graph and JSON-LD tags generated from portfolio.ts into index.html. */
function portfolioSeo(): Plugin {
  return {
    name: "portfolio-seo",
    transformIndexHtml(html) {
      return html.replace("<!--app-head-->", renderHeadTags(portfolio));
    },
  };
}

export default defineConfig({
  base: "/myxie-s_portfolio/",
  plugins: [react(), portfolioSeo()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    // Shared by the prerender and browser bundles so the footer year hydrates without a mismatch.
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
});
