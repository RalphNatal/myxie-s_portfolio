/**
 * Types for everything in portfolio.ts.
 *
 * If you mistype a field name or pick a value that isn't allowed (for example an
 * unknown icon or service id), TypeScript flags it before the site is built.
 */

/** Ids of the six services. Case studies reference these in `serviceIds`. */
export type ServiceId =
  | "order-processing"
  | "ecommerce"
  | "customer-support"
  | "inventory"
  | "administrative"
  | "data-entry";

/** Icons available for service cards (from lucide.dev). */
export type IconName =
  | "PackageCheck"
  | "ShoppingCart"
  | "Headset"
  | "Boxes"
  | "CalendarCheck"
  | "Table"
  | "ClipboardList"
  | "FileSpreadsheet"
  | "Inbox"
  | "Mail"
  | "MessagesSquare"
  | "Receipt"
  | "Store"
  | "Truck"
  | "ChartColumn";

export type SocialPlatform =
  | "LinkedIn"
  | "Upwork"
  | "OnlineJobs"
  | "Facebook"
  | "Instagram"
  | "WhatsApp"
  | "Website";

export type ProficiencyLevel = "Advanced" | "Proficient" | "Familiar";

/** Ids of the page sections, used by the navigation links. */
export type SectionId =
  | "home"
  | "services"
  | "process"
  | "work"
  | "toolkit"
  | "experience"
  | "testimonials"
  | "packages"
  | "faq"
  | "contact";

// ─── Core content ────────────────────────────────────────────────────────────

export interface SiteMeta {
  siteTitle: string;
  description: string;
  /** Full public URL of the site, ending with a slash. */
  siteUrl: string;
  /** Social share image, relative to /public (1200×630 recommended). */
  ogImage: string;
  ogImageAlt?: string;
  /** Countries or regions you serve, used by search engines. */
  areaServed?: string[];
}

export interface Availability {
  isAvailable: boolean;
  label: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  role: string;
  headline: string;
  subheadline: string;
  /** "City, Country". The city is used in the live local-time line. */
  location: string;
  /** IANA time zone, e.g. "Asia/Manila". */
  timezone: string;
  workingHours: string;
  availability: Availability;
  /** Path to your photo in /public, e.g. "/images/myxie.jpg". Empty shows your initials. */
  portrait: string;
  portraitAlt?: string;
  resumeUrl: string;
  email: string;
  bookingUrl: string;
  /** Formspree form id (the part after formspree.io/f/). */
  formspreeId: string;
  socials: SocialLink[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: ServiceId;
  icon: IconName;
  title: string;
  summary: string;
  deliverables: string[];
  tools: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  serviceIds: ServiceId[];
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  result: CaseStudyResult;
  /** Path to an image in /public. Empty shows a generated placeholder. */
  image: string;
  imageAlt?: string;
  /** Shows a "Sample" badge so placeholder work is never mistaken for real work. */
  isSample: boolean;
}

export interface Tool {
  name: string;
  level: ProficiencyLevel;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  achievements: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Shows a "Sample" badge so placeholder reviews are never mistaken for real ones. */
  isSample: boolean;
}

export interface Package {
  name: string;
  hours: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

// ─── Section headings & interface text ───────────────────────────────────────

export interface SectionIntro {
  eyebrow: string;
  title: string;
  intro?: string;
}

export interface NavLink {
  label: string;
  sectionId: SectionId;
}

export interface Navigation {
  links: NavLink[];
  bookCallLabel: string;
  homeLabel: string;
  primaryNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeroCopy {
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  statsLabel: string;
}

export interface TrustBarCopy {
  label: string;
}

export interface ServicesCopy extends SectionIntro {
  deliverablesLabel: string;
  toolsLabel: string;
}

export interface CaseStudiesCopy extends SectionIntro {
  filterLabel: string;
  filterAllLabel: string;
  problemLabel: string;
  solutionLabel: string;
  resultLabel: string;
  servicesLabel: string;
  toolsLabel: string;
  openLabel: string;
  closeLabel: string;
  ctaLabel: string;
}

export interface ToolkitCopy extends SectionIntro {
  levelDescriptions: Record<ProficiencyLevel, string>;
}

export interface ExperienceCopy extends SectionIntro {
  resumeLabel: string;
}

export interface TestimonialsCopy extends SectionIntro {
  carouselLabel: string;
  previousLabel: string;
  nextLabel: string;
  /** Use {number} for the testimonial number. */
  goToLabel: string;
  /** Use {number} and {total}. */
  slideLabel: string;
}

export interface PackagesCopy extends SectionIntro {
  popularLabel: string;
  ctaLabel: string;
  includedLabel: string;
  note: string;
  noteLinkLabel: string;
}

export interface ContactCopy extends SectionIntro {
  emailLabel: string;
  locationLabel: string;
  timezoneLabel: string;
  hoursLabel: string;
  /** Use {time} and {city}. */
  currentTimeTemplate: string;
  /** Use {time}. Shown only when the visitor is in a different time zone. */
  visitorTimeTemplate: string;
  bookingTitle: string;
  bookingDescription: string;
  bookingLabel: string;
  socialsLabel: string;
}

export interface FormField {
  label: string;
  placeholder: string;
}

export interface ContactFormCopy {
  title: string;
  fields: {
    name: FormField;
    email: FormField;
    businessType: FormField;
    service: FormField & { otherOption: string };
    message: FormField;
  };
  optionalLabel: string;
  requiredHint: string;
  honeypotLabel: string;
  errors: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    serviceRequired: string;
    messageRequired: string;
    /** Use {min} for the minimum number of characters. */
    messageTooShort: string;
  };
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  mailtoTitle: string;
  /** Use {email}. Shown when the form falls back to the visitor's email app. */
  mailtoMessage: string;
  sendAnotherLabel: string;
  errorTitle: string;
  errorMessage: string;
  errorFallbackLabel: string;
  /** Use {name}. Subject line for Formspree and mailto messages. */
  emailSubject: string;
}

export interface FooterCopy {
  tagline: string;
  quickLinksLabel: string;
  socialsLabel: string;
  backToTopLabel: string;
  /** Use {year} and {name}. */
  copyright: string;
}

export interface InterfaceLabels {
  skipToContent: string;
  themeToggle: string;
  opensInNewTab: string;
  sampleBadge: string;
}

export interface SectionsCopy {
  hero: HeroCopy;
  trustBar: TrustBarCopy;
  services: ServicesCopy;
  process: SectionIntro;
  caseStudies: CaseStudiesCopy;
  toolkit: ToolkitCopy;
  experience: ExperienceCopy;
  testimonials: TestimonialsCopy;
  packages: PackagesCopy;
  faq: SectionIntro;
  contact: ContactCopy;
}

// ─── Everything together ─────────────────────────────────────────────────────

export interface Portfolio {
  meta: SiteMeta;
  profile: Profile;
  stats: Stat[];
  services: Service[];
  process: ProcessStep[];
  caseStudies: CaseStudy[];
  toolkit: ToolCategory[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  packages: Package[];
  faqs: Faq[];
  navigation: Navigation;
  sections: SectionsCopy;
  contactForm: ContactFormCopy;
  footer: FooterCopy;
  labels: InterfaceLabels;
}
