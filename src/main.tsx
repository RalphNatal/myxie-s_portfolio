import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/globals.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root element #root is missing from index.html");

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML is prerendered at build time, so hydrate it; the dev server starts empty.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
