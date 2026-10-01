# Michaella Pascua — E-Commerce & Operations Virtual Assistant

The portfolio site for Michaella "Myxie" Pascua, a Manila-based virtual assistant who helps online stores with order processing, e-commerce support, customer support, inventory, admin and data entry.

**Live site:** https://ralphnatal.github.io/myxie-s_portfolio/

It's a single-page site built to get a busy store owner to send an inquiry (or book a call, once a booking link is added). It has light and dark themes, works on any screen size, and is prerendered to static HTML for fast loads and good search results.

**Built with:** Vite, React 18, TypeScript (strict), Tailwind CSS 3, Framer Motion and lucide-react icons, with fonts Fraunces and Inter.

---

## Before launch

These are the open `// CONFIRM` and `// TODO` notes in [`src/data/portfolio.ts`](src/data/portfolio.ts), plus two missing files. Tick them off with Michaella, then delete each comment once it's settled.

**In `portfolio.ts`**

- [ ] `profile.formspreeId`: **TODO**, create a Formspree form for pascua.michaella@gmail.com (see [Contact form](#set-up-the-contact-form-formspree)). Until then, the form opens the visitor's email app.
- [ ] `profile.socials` → Facebook: **CONFIRM** it's OK to show `facebook.com/Skittellas` publicly.
- [ ] `caseStudies` → `clientType`: **CONFIRM** before naming the client. She allowed "Macy's", but BPO accounts usually have NDAs, so the site says "US department store credit card account (via BPO)".
- [ ] `experience` → Concentrix `period`: **TODO**, add the year (for example `"1.5 months, 2024"`).
- [ ] `testimonials` → `company`: **CONFIRM**. She wrote "Macy's Loyal Member"; the site says "US department store (via BPO)".
- [ ] `packages` → Starter `$2/hr`, Growth `$4/hr`, Dedicated `$6/hr`: **CONFIRM** with Michaella. The rate rises as hours go up (bigger packages usually cost less per hour), and all three are very low for this market.

**Files**

- [ ] `public/images/michaella.jpg`: **missing**. The site shows "MP" initials until it's added (see [Images](#replace-the-images-and-résumé)).
- [ ] `public/resume.pdf`: still a **placeholder** with her name on it. Replace it with her real résumé.

**Optional**

- [ ] `profile.bookingUrl`: add a Calendly (or similar) link to turn every "Email Me" button back into "Book a Call".

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
- Lines ending in `// TODO` or `// CONFIRM` still need checking (see [Before launch](#before-launch)).
- Some text uses **placeholders in curly braces**, like `"Currently {time} in {city}"`. Keep the `{…}` parts exactly as they are; the site fills them in.
- **Nothing shows up empty.** If a list is empty (case studies, testimonials, experience, packages, FAQs), its whole section and menu link disappear. The site never shows placeholder text instead.

Here's what each block controls, from top to bottom.

### `meta`: search engines and link previews

What Google shows, and what appears when someone shares the link on Facebook or Messenger.

- `siteTitle`: the browser tab title and the headline of link previews.
- `description`: the one-sentence summary shown in search results.
- `siteUrl`: the full address of the live site. Only change this if you move to a custom domain.
- `ogImage`: the picture shown in link previews (see [Images](#replace-the-images-and-résumé)).
- `areaServed` (optional): a list of countries served, for search engines, for example `["United States", "Australia"]`.

### `profile`: about her

Name, role, headline, location, contact details and links.

- `firstName` / `lastName`: shown in the navbar, hero and footer, and used for the "MP" initials.
- `nickname` (optional): shown as "Friends call me Myxie." in the footer, and given to search engines as an alternate name. Remove it to hide that line.
- `headline` / `subheadline`: the big statement at the top of the page and the sentence under it.
- `timezone`: used for the live "Currently 2:14 PM in Manila" clock. It must be an [IANA time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) such as `"Asia/Manila"`.
- `location`: written as `"City, Country"`. The city is used in the live clock.
- `availability`: set `isAvailable: false` when fully booked. The green pulsing dot turns grey.
- `portrait` / `portraitAlt`: the photo's path and a short description for screen readers. If the file is missing, or `portrait` is `""`, the initials show instead.
- `email`: shown in the contact section and footer, and used by every "Email Me" button.
- `bookingUrl` (optional): a Calendly or similar link.
  - **With a link**, the hero and menu show "Book a Discovery Call" / "Book a Call", and the contact section shows a booking card.
  - **Without one** (`undefined` or removed), those buttons read **"Email Me"**: the hero button opens an email with the subject "Inquiry from your website", and the navbar and menu buttons scroll to the contact form. The booking card is hidden.
- `formspreeId`: see [Contact form](#set-up-the-contact-form-formspree). Leave it empty (or as `"YOUR_FORM_ID"`) to send inquiries through the visitor's email app.
- `socials` (optional): only the platforms listed here appear, in the contact section and footer. Each entry has a `platform` and a `url`. Platforms you can use: `OnlineJobs.ph`, `Facebook`, `LinkedIn`, `Upwork`, `Instagram`, `WhatsApp`, `Website`. Remove the list, or leave it empty, to hide social links entirely.

### `stats`: the three numbers under the hero

Each has a `value` (`"1,000+"`) and a `label` (`"Orders handled"`). Three fit best. Keep them true; clients may ask.

### `services`: the six service cards

Each service has an `id`, an `icon`, a `title`, a one-line `summary`, a list of `deliverables` and the `tools` used for it.

- **Icons** you can use: `PackageCheck`, `ShoppingCart`, `Headset`, `Boxes`, `CalendarCheck`, `Table`, `ClipboardList`, `FileSpreadsheet`, `Inbox`, `Mail`, `MessagesSquare`, `Receipt`, `Store`, `Truck`, `ChartColumn`.
- The `id` connects a service to case studies. The six ids are listed at the top of [`src/data/types.ts`](src/data/types.ts) under `ServiceId`. To **add a new service**, add its id there too, for example `| "bookkeeping"`.
- Services also fill the "Service needed" dropdown in the contact form.
- Only list tools she actually uses.

### `process`: How I Work

The four steps, each with a `step` number, `title` and `description`.

### `caseStudies`: her work

- **One case study** shows as a wide featured card: the story on the left, the result on the right.
- **Two or more** show as a grid of cards that open a full write-up. Filter buttons appear once the case studies cover more than one service.

Each case study has:

- `serviceIds`: which services it belongs to. They must match the service ids above.
- `clientType`, `title`, `problem`, `solution` and `result`. The `result.metric` is shown in large type, so keep it short, with `result.label` underneath.
- `image` (leave `""` for a generated illustration) with an optional `imageAlt`.
- `tools` (optional): tools used on that project.

### `toolkit`: her tools

Tools grouped by `category`, each with a `level` of `"Advanced"`, `"Proficient"` or `"Familiar"`.

- A tool set to `"I don't use it"` is kept in the file but never shown, and a category with no shown tools disappears.
- The "Tools I work in every day" strip near the top of the page is built automatically from every Advanced or Proficient tool, so you only update the list here.

### `experience`: the timeline

Each role has a `role`, `company` and two or three `achievements`, plus **either**:

- `start` and `end`, for example `start: "2017", end: "2025"` (shows "2017 – 2025"), **or**
- `period`, free text for roles without exact dates, for example `period: "1.5 months"`.

Use one or the other, not both; `npm run typecheck` will tell you if you mix them. The most recent role goes first.

### `testimonials`: what people say

Each has a `quote`, `name`, `role` and `company`. Only use reviews you have permission to share.

- **One testimonial** shows as a single centered quote.
- **Two or more** become a carousel with arrows, dots and swipe.

### `packages`: pricing

Three plans, each with `name`, `hours`, `price`, `description` and `features`. Set `highlighted: true` on the plan to mark as **Most Popular** (only one). Write prices like `"$4/hr"`; the part after the `/` is shown smaller.

### `faqs`: frequently asked questions

Each has a `question` and an `answer`.

### Section headings & interface text

Everything below the `faqs` block is the wording _around_ the content, which you rarely need to change:

- `navigation`: the menu links, the "Book a Call" label, and the "Email Me" label and email subject (`emailCtaLabel`, `emailCtaSubject`) used when there's no booking link.
- `sections`: the small label (`eyebrow`), heading (`title`) and intro paragraph for each section, plus button labels such as "Download Résumé" and "Most Popular".
- `contactForm`: form labels, placeholders, error messages and the thank-you messages.
- `footer`: the tagline, column headings, the nickname line (`{nickname}`) and copyright line (`{year}` updates automatically).
- `labels`: screen-reader text.

---

## Replace the images and résumé

Everything in the `public/` folder is published as-is. Replace a file by saving a new one with **the same name** into that folder.

| File                          | What it is                                   | Recommended                                    |
| ----------------------------- | -------------------------------------------- | ---------------------------------------------- |
| `public/images/michaella.jpg` | Her portrait (currently missing)             | 4:5 portrait, about 640 × 800 px, under 150 KB |
| `public/images/…`             | Case study images                            | 16:9 JPG or WebP, under 200 KB each            |
| `public/og-image.png`         | The picture shown when the link is shared    | Exactly 1200 × 630 px                          |
| `public/resume.pdf`           | The file behind the "Download Résumé" button | Her résumé as a PDF (currently a placeholder)  |
| `public/favicon.svg`          | The small icon in the browser tab            | A square SVG                                   |

**Portrait:** save it as `public/images/michaella.jpg`. It's already set up in `portfolio.ts`, so it appears on the next deploy. Keep the file small: on desktop it loads as part of the first screen. [Squoosh](https://squoosh.app) is a free way to shrink it.

**Case study images:** save them in `public/images/` and set each case study's `image` (for example `"/images/card-support.jpg"`) plus an `imageAlt` description.

Always start paths with `/` as shown. The site adds the `/myxie-s_portfolio/` prefix automatically.

---

## Set up the contact form (Formspree)

Until a Formspree form is connected, the contact form opens the visitor's email app with their message pre-filled. To receive messages directly in the inbox instead:

1. Create a free account at [formspree.io](https://formspree.io) with pascua.michaella@gmail.com, and click **New form**.
2. Copy the form's ID, the part after `formspree.io/f/` in its endpoint (for example `xyzabcde`).
3. In `portfolio.ts`, replace `formspreeId: "YOUR_FORM_ID"` with `formspreeId: "xyzabcde"`.
4. Commit and push. Send a test message from the live site; Formspree asks you to confirm the first one.

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
  lib/                  Helpers: which content is shown, SEO tags, contact form, time zones
  styles/globals.css    Color tokens (light and dark) and base styles
public/                 Images, social preview, résumé, favicon
scripts/prerender.mjs   Renders the page to static HTML at build time
```

## Under the hood

- **Content-driven:** components read everything from `portfolio.ts`. Search tags, Open Graph and Twitter previews, and `Person` + `ProfessionalService` structured data are generated from it at build time. The portrait is only given to search engines once the file exists.
- **Prerendered:** the build renders the full page to HTML, so it appears before JavaScript loads and search engines see all the content.
- **Accessible:** it meets WCAG 2.1 AA contrast in both themes, uses semantic landmarks, has a skip link and visible focus rings, and is fully keyboard-operable. Animations are reduced for visitors who ask their device for less motion.
- **Themes:** light and dark mode follow the visitor's system setting, and remember their choice if they toggle it.
- **Checked:** zero type or lint errors. Lighthouse on a local production build scores 95+ for Performance and 100 for Accessibility, Best Practices and SEO on mobile.
