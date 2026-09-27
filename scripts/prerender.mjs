// Injects the server-rendered app into dist/index.html so content is visible before JavaScript loads.
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const serverBundle = `${root}.prerender/entry-server.js`;
const indexHtml = `${root}dist/index.html`;

const { render } = await import(pathToFileURL(serverBundle).href);
const template = await readFile(indexHtml, "utf8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Prerender placeholder <!--app-html--> not found in dist/index.html");
}

await writeFile(indexHtml, template.replace("<!--app-html-->", render()));
await rm(`${root}.prerender`, { recursive: true, force: true });

console.log("Prerendered dist/index.html");
