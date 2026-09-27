import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const ABSOLUTE_URL = /^(?:[a-z][a-z\d+\-.]*:|\/\/)/i;

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * Resolves a root-relative path from portfolio.ts (e.g. "/resume.pdf") against the
 * deploy base path, so files in /public work on GitHub Pages' /myxie-s_portfolio/ subpath.
 */
export function assetUrl(path: string): string {
  if (!path || ABSOLUTE_URL.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
