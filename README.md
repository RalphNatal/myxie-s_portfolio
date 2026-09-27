# Myxie — E-Commerce & Operations Virtual Assistant

The portfolio site for Myxie, a Philippines-based virtual assistant who helps e-commerce brands in the US, Australia and UK with order processing, e-commerce support, customer support, inventory, admin and data entry.

**Live site:** https://ralphnatal.github.io/myxie-s_portfolio/

It's a single-page site built to get a busy store owner to book a discovery call or send an inquiry. It has light and dark themes, works on any screen size, and is prerendered to static HTML for fast loads and good search results.

**Built with:** Vite, React 18, TypeScript (strict), Tailwind CSS 3, Framer Motion and lucide-react icons, with fonts Fraunces and Inter.

---

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.12 or newer (24 recommended).

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/myxie-s_portfolio/**. The page reloads automatically when you save a file.

| Command             | What it does                                                      |
| ------------------- | ----------------------------------------------------------------- |
| `npm run dev`       | Starts the local preview while you edit                           |
| `npm run build`     | Checks types and builds the finished site into `dist/`            |
| `npm run preview`   | Serves the finished build locally, exactly as it will be deployed |
| `npm run typecheck` | Checks `portfolio.ts` (and all code) for mistakes                 |
| `npm run lint`      | Checks code quality and accessibility rules                       |
| `npm run format`    | Tidies up formatting in every file                                |

---

## How to edit your content

**All words, links and numbers on the site live in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** You never need to touch the components.

A few things to know before you start:

- Keep the quotes and commas. Each value is text in `"double quotes"`, followed by a comma.
- If you make a typo in a field name, or use a value that isn't allowed, run `npm run typecheck` (or just `npm run build`). It points to the exact line. Your editor (for example VS Code) also underlines mistakes in red as you type.
- Lines ending in `// TODO` are placeholders to replace with real details.
- Some text uses **placeholders in curly braces**, like `"Currently {time} in {city}"`. Keep the `{…}` parts exactly as they are; the site fills them in.

Here's what each block controls, from top to bottom.

### `meta`: search engines and link previews

What Google shows, and what appears when someone shares your link on LinkedIn, Facebook or Slack.

- `siteTitle`: the browser tab title and the headline of link previews.
- `description`: the one-sentence summary shown in search results.
- `siteUrl`: the full address of the live site. Only change this if you move to a custom domain.
- `ogImage`: the picture shown in link previews (see [Images](#replace-the-images-and-résumé)).
- `areaServed`: the countries you serve, which tells search engines where you work.

### `profile`: you

Your name, role, headline, location, contact details and links.

- `headline` / `subheadline`: the big statement at the top of the page and the sentence under it.
- `timezone`: used for the live "Currently 2:14 PM in Manila" clock. It must be an [IANA time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) such as `"Asia/Manila"`.
- `location`: written as `"City, Country"`. The city is used in the live clock.
- `availability`: set `isAvailable: false` when you're fully booked. The green pulsing dot turns grey.
- `portrait`: path to your photo, such as `"/images/myxie.jpg"`. Leave it `""` to show your initials instead.
- `email`, `bookingUrl` (your Calendly or similar link) and `formspreeId` (see [Contact form](#set-up-the-contact-form-formspree)).
- `socials`: each entry has a `platform` and a `url`. Available platforms: `LinkedIn`, `Upwork`, `OnlineJobs`, `Facebook`, `Instagram`, `WhatsApp`, `Website`.

### `stats`: the three numbers under the hero

Each has a `value` (`"12,000+"`) and a `label` (`"Orders processed"`). Three fit best.

### `services`: the six service cards

Each service has an `id`, an `icon`, a `title`, a one-line `summary`, a list of `deliverables` and the `tools` you use for it.

- **Icons** you can use: `PackageCheck`, `ShoppingCart`, `Headset`, `Boxes`, `CalendarCheck`, `Table`, `ClipboardList`, `FileSpreadsheet`, `Inbox`, `Mail`, `MessagesSquare`, `Receipt`, `Store`, `Truck`, `ChartColumn`.
- The `id` connects a service to case studies. The six ids are listed at the top of [`src/data/types.ts`](src/data/types.ts) under `ServiceId`. To **add a new service**, add its id there too, for example `| "bookkeeping"`.
- Services also populate the "Service needed" dropdown in the contact form and the filter buttons above the case studies.

### `process`: How I Work

The four steps, each with a `step` number, `title` and `description`.

### `caseStudies`: your work

Each case study shows as a card, and opens a full write-up when clicked.

- `serviceIds`: which services it belongs to, used by the filter buttons. They must match the service ids above.
- `problem`, `solution` and `result`. The `result.metric` is shown in large type, so keep it short (`"0 oversells"`), with `result.label` underneath.
- `image`: optional photo or screenshot, such as `"/images/skincare.jpg"`. Leave it `""` for a generated illustration. Add `imageAlt: "…"` to describe the image for screen readers.
- `tools`: optional list of tools used on that project, shown in the full write-up.
- `isSample: true` shows a **Sample** badge. **Set it to `false` only for real client work.**

### `toolkit`: your tools

Tools grouped by `category`, each with a `level` of `"Advanced"`, `"Proficient"` or `"Familiar"`. The "Tools I work in every day" strip near the top of the page is built automatically from every tool marked Advanced or Proficient, so you only update the list here.

### `experience`: the timeline

Each role has a `role`, `company`, `start`, `end` and two or three `achievements`. The most recent role goes first.

### `testimonials`: what clients say

Each has a `quote`, `name`, `role` and `company`. `isSample: true` shows a **Sample** badge. Replace these with real reviews (with the client's permission) and set `isSample: false`.

### `packages`: pricing

Three plans, each with `name`, `hours`, `price`, `description` and `features`. Set `highlighted: true` on the plan to mark as **Most Popular** (only one). Write prices like `"$8/hr"`; the part after the `/` is shown smaller.

### `faqs`: frequently asked questions

Each has a `question` and an `answer`.

### Section headings & interface text

Everything below the `faqs` block is the wording _around_ your content, which you rarely need to change:

- `navigation`: the menu links and the "Book a Call" button label. Each link points to a section by its `sectionId`.
- `sections`: the small label (`eyebrow`), heading (`title`) and intro paragraph for each section, plus button labels such as "Download Résumé" and "Most Popular".
- `contactForm`: form labels, placeholders, error messages and the thank-you messages.
- `footer`: the tagline, column headings and copyright line (`{year}` updates automatically).
- `labels`: screen-reader text and the "Sample" badge wording.

---

## Replace the images and résumé

Everything in the `public/` folder is published as-is. Replace a file by saving your own with **the same name** into that folder.

| File                  | What it is                                   | Recommended                                             |
| --------------------- | -------------------------------------------- | ------------------------------------------------------- |
| `public/images/…`     | Your portrait and case study images          | JPG or WebP, under 300 KB each                          |
| `public/og-image.png` | The picture shown when your link is shared   | Exactly 1200 × 630 px                                   |
| `public/resume.pdf`   | The file behind the "Download Résumé" button | Your résumé as a PDF (the current one is a placeholder) |
| `public/favicon.svg`  | The small icon in the browser tab            | A square SVG                                            |

**Portrait:** save it as `public/images/myxie.jpg` (a 4:5 portrait, around 800 × 1000 px, works best), then set `portrait: "/images/myxie.jpg"` in `portfolio.ts`. Add `portraitAlt: "…"` to describe the photo; otherwise it defaults to your name and role.

**Case study images:** save them in `public/images/` and set each case study's `image` (for example `"/images/apparel-catalog.jpg"`) plus an `imageAlt` description. A 16:9 landscape image works best.

Always start paths with `/` as shown. The site adds the `/myxie-s_portfolio/` prefix automatically.

---

## Set up the contact form (Formspree)

Until a Formspree form is connected, the contact form opens the visitor's email app with their message pre-filled. To receive messages directly in your inbox instead:

1. Create a free account at [formspree.io](https://formspree.io) and click **New form**.
2. Copy the form's ID, the part after `formspree.io/f/` in its endpoint (for example `xyzabcde`).
3. In `portfolio.ts`, replace `formspreeId: "YOUR_FORM_ID"` with `formspreeId: "xyzabcde"`.
4. Commit and push. Send yourself a test message from the live site; Formspree asks you to confirm the first one.

The form checks every field before sending, shows a loading state, and offers an "Email me instead" link if sending ever fails. It also has a hidden trap field that catches most spam bots.

---

## Deploy

The site deploys to GitHub Pages automatically every time you push to the `main` branch, using [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:** in the GitHub repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

After that:

1. Edit `src/data/portfolio.ts` (and any files in `public/`).
2. Commit and push to `main`.
3. Watch the progress in the repository's **Actions** tab. When it's green (usually about a minute), the changes are live at https://ralphnatal.github.io/myxie-s_portfolio/.

If the Actions run fails, click into it: the log shows the exact file and line to fix, which is usually a typo in `portfolio.ts`.

**Moving to a custom domain later?** Change `base` in [`vite.config.ts`](vite.config.ts) to `"/"`, update `meta.siteUrl` in `portfolio.ts`, and add the domain under Settings → Pages.

---

## Project structure

```
src/
  data/
    portfolio.ts        ← all site content (the only file you need to edit)
    types.ts            ← the shape of that content, so mistakes are caught early
  components/
    layout/             Navbar, mobile menu, Footer, Section, Container
    sections/           Hero, TrustBar, Services, Process, CaseStudies, Toolkit,
                        Experience, Testimonials, Packages, FAQ, Contact
    ui/                 Button, Badge, Card, Tag, Accordion, Dialog, SectionHeading…
  hooks/                Theme, reduced motion, active section, focus trap…
  lib/                  Helpers: class names, SEO tags, contact form, time zones
  styles/globals.css    Color tokens (light and dark) and base styles
public/                 Images, social preview, résumé, favicon
scripts/prerender.mjs   Renders the page to static HTML at build time
```

## Under the hood

- **Content-driven:** components read everything from `portfolio.ts`. Search tags, Open Graph and Twitter previews, and `Person` + `ProfessionalService` structured data are generated from it at build time.
- **Prerendered:** the build renders the full page to HTML, so it appears before JavaScript loads and search engines see all the content.
- **Accessible:** it meets WCAG 2.1 AA contrast in both themes, uses semantic landmarks, has a skip link and visible focus rings, and is fully keyboard-operable (including the case study dialog and mobile menu). Animations are reduced for visitors who ask their device for less motion.
- **Themes:** light and dark mode follow the visitor's system setting, and remember their choice if they toggle it.
- **Checked:** zero type or lint errors. Lighthouse on a local production build scored Performance 99, Accessibility 100, Best Practices 100 and SEO 100 on mobile.

---

## Placeholders to replace before launch

- [ ] `profile.lastName`: real last name
- [ ] `profile.email`, `profile.bookingUrl`, `profile.formspreeId`
- [ ] `profile.socials`: real LinkedIn, Upwork and OnlineJobs profile links
- [ ] `profile.portrait`: add a photo (optional; initials show until then)
- [ ] `caseStudies`: real client stories and images, with `isSample: false`
- [ ] `experience`: real company descriptions
- [ ] `testimonials`: real reviews, with `isSample: false`
- [ ] `packages`: your actual rates
- [ ] `public/resume.pdf`: your real résumé
- [ ] `public/og-image.png`: regenerate if your name, headline or photo changes
