// Injects the server-rendered app into dist/index.html so content is visible before JavaScript loads,
// and inlines the (small) stylesheet so first paint doesn't wait on an extra request.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = `${root}dist/`;
const serverBundle = `${root}.prerender/entry-server.js`;
const indexHtml = `${dist}index.html`;

const { render } = await import(pathToFileURL(serverBundle).href);
let html = await readFile(indexHtml, "utf8");

if (!html.includes("<!--app-html-->")) {
  throw new Error("Prerender placeholder <!--app-html--> not found in dist/index.html");
}
html = html.replace("<!--app-html-->", render());

const stylesheet = /<link rel="stylesheet"[^>]*href="[^"]*\/(assets\/[^"]+\.css)"[^>]*>/;
const match = html.match(stylesheet);
if (match?.[1]) {
  const css = await readFile(`${dist}${match[1]}`, "utf8");
  html = html.replace(match[0], () => `<style>${css}</style>`);
}

await writeFile(indexHtml, html);
await rm(`${root}.prerender`, { recursive: true, force: true });

console.log("Prerendered dist/index.html");
