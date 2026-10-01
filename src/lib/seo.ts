// Runs at build time (imported by vite.config.ts), so it must stay free of browser and Vite-only APIs.
import type { Portfolio } from "../data/types.ts";
import { getFullName, parseLocation } from "./text.ts";

function escapeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toAbsoluteUrl(siteUrl: string, path: string): string {
  return new URL(path.replace(/^\/+/, ""), siteUrl).href;
}

export interface HeadTagOptions {
  /** False when the portrait file isn't in /public yet, so search engines aren't sent to a missing image. */
  hasPortrait?: boolean;
}

export function buildStructuredData(
  { meta, profile, services }: Portfolio,
  { hasPortrait = true }: HeadTagOptions = {},
) {
  const name = getFullName(profile);
  const { city, country } = parseLocation(profile.location);
  const personId = `${meta.siteUrl}#person`;
  const address = {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: country,
  };
  const socialUrls = (profile.socials ?? []).map((social) => social.url);
  const sameAs = socialUrls.length > 0 ? { sameAs: socialUrls } : {};

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name,
        ...(profile.nickname && { alternateName: profile.nickname }),
        givenName: profile.firstName,
        familyName: profile.lastName,
        jobTitle: profile.role,
        description: meta.description,
        url: meta.siteUrl,
        email: `mailto:${profile.email}`,
        ...(profile.portrait &&
          hasPortrait && { image: toAbsoluteUrl(meta.siteUrl, profile.portrait) }),
        address,
        knowsAbout: services.map((service) => service.title),
        ...sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${meta.siteUrl}#business`,
        name: `${name}, ${profile.role}`,
        description: meta.description,
        url: meta.siteUrl,
        email: `mailto:${profile.email}`,
        image: toAbsoluteUrl(meta.siteUrl, meta.ogImage),
        founder: { "@id": personId },
        address,
        ...(meta.areaServed && {
          areaServed: meta.areaServed.map((area) => ({ "@type": "Country", name: area })),
        }),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Virtual assistant services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
            },
          })),
        },
        ...sameAs,
      },
    ],
  };
}

/** Builds the <head> tags (title, description, Open Graph, Twitter, JSON-LD) from portfolio.ts. */
export function renderHeadTags(portfolio: Portfolio, options: HeadTagOptions = {}): string {
  const { meta, profile } = portfolio;
  const image = toAbsoluteUrl(meta.siteUrl, meta.ogImage);
  const imageAlt = meta.ogImageAlt ?? meta.siteTitle;
  const metaTag = (attribute: "name" | "property", key: string, content: string) =>
    `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;

  // Escaping "<" keeps any "</script>" inside the data from closing the JSON-LD block early.
  const structuredData = JSON.stringify(buildStructuredData(portfolio, options)).replace(
    /</g,
    "\\u003c",
  );

  return [
    `<title>${escapeAttribute(meta.siteTitle)}</title>`,
    metaTag("name", "description", meta.description),
    metaTag("name", "author", getFullName(profile)),
    `<link rel="canonical" href="${escapeAttribute(meta.siteUrl)}" />`,
    metaTag("property", "og:type", "website"),
    metaTag("property", "og:locale", "en_US"),
    metaTag("property", "og:site_name", getFullName(profile)),
    metaTag("property", "og:title", meta.siteTitle),
    metaTag("property", "og:description", meta.description),
    metaTag("property", "og:url", meta.siteUrl),
    metaTag("property", "og:image", image),
    metaTag("property", "og:image:alt", imageAlt),
    metaTag("property", "og:image:width", "1200"),
    metaTag("property", "og:image:height", "630"),
    metaTag("name", "twitter:card", "summary_large_image"),
    metaTag("name", "twitter:title", meta.siteTitle),
    metaTag("name", "twitter:description", meta.description),
    metaTag("name", "twitter:image", image),
    metaTag("name", "twitter:image:alt", imageAlt),
    `<script type="application/ld+json">${structuredData}</script>`,
  ].join("\n    ");
}
