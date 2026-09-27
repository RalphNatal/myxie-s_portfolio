import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/myxie-s_portfolio/",
  plugins: [react()],
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
