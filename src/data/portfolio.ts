import type { Portfolio } from "./types.ts";

export const portfolio: Portfolio = {
  meta: {
    siteTitle: "Myxie | E-Commerce & Operations Virtual Assistant",
    description:
      "Philippines-based virtual assistant helping e-commerce brands run smoother: order processing, customer support, inventory, admin and data entry.",
    siteUrl: "https://ralphnatal.github.io/myxie-s_portfolio/",
    ogImage: "/og-image.png",
    areaServed: ["United States", "Australia", "United Kingdom"],
  },

  profile: {
    firstName: "Myxie",
    lastName: "Dela Cruz", // TODO: real last name
    role: "E-Commerce & Operations Virtual Assistant",
    headline: "I keep your store running so you can focus on growing it.",
    subheadline:
      "From order processing to customer support, I handle the daily operations that eat up your time: accurately, on schedule, and with clear weekly reporting.",
    location: "Manila, Philippines",
    timezone: "Asia/Manila",
    workingHours: "Flexible, with 4–6 hours of overlap with US/AU business hours",
    availability: { isAvailable: true, label: "Available for 2 new clients" },
    portrait: "", // TODO: e.g. "/images/myxie.jpg" (empty = initials placeholder)
    resumeUrl: "/resume.pdf", // TODO: replace file in /public
    email: "hello@myxie.com", // TODO
    bookingUrl: "https://calendly.com/your-link", // TODO
    formspreeId: "YOUR_FORM_ID", // TODO
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/your-profile" }, // TODO
      { platform: "Upwork", url: "https://upwork.com/freelancers/your-profile" }, // TODO
      { platform: "OnlineJobs", url: "https://onlinejobs.ph/your-profile" }, // TODO
    ],
  },

  stats: [
    { value: "3+", label: "Years supporting online stores" },
    { value: "12,000+", label: "Orders processed" },
    { value: "< 2 hrs", label: "Average response time" },
  ],

  services: [
    {
      id: "order-processing",
      icon: "PackageCheck",
      title: "Order Processing",
      summary: "Every order confirmed, fulfilled and tracked without delays.",
      deliverables: [
        "Daily order verification and fulfillment",
        "Returns, refunds and exchanges handling",
        "Shipping label creation and tracking updates",
        "Fraud-flag review and escalation",
      ],
      tools: ["Shopify", "Amazon Seller Central", "ShipStation"],
    },
    {
      id: "ecommerce",
      icon: "ShoppingCart",
      title: "E-Commerce Support",
      summary: "Product listings that are accurate, optimized and on-brand.",
      deliverables: [
        "Product uploads with descriptions, SKUs and variants",
        "Collection and category organization",
        "Price and promo updates",
        "Basic keyword optimization for listings",
      ],
      tools: ["Shopify", "WooCommerce", "Etsy", "Canva"],
    },
    {
      id: "customer-support",
      icon: "Headset",
      title: "Customer Support",
      summary: "Friendly, fast replies that turn questions into repeat buyers.",
      deliverables: [
        "Email and live chat support",
        "Order status, returns and FAQ handling",
        "Ticket tagging and escalation",
        "Saved replies and help-doc upkeep",
      ],
      tools: ["Gorgias", "Zendesk", "Intercom", "Gmail"],
    },
    {
      id: "inventory",
      icon: "Boxes",
      title: "Inventory Management",
      summary: "Stock levels you can trust, with no surprise sellouts.",
      deliverables: [
        "Stock level monitoring and low-stock alerts",
        "Inventory reconciliation across channels",
        "Supplier and restock tracking sheets",
        "Weekly inventory reports",
      ],
      tools: ["Shopify", "Google Sheets", "Airtable"],
    },
    {
      id: "administrative",
      icon: "CalendarCheck",
      title: "Administrative Support",
      summary: "An organized inbox, calendar and workspace every single week.",
      deliverables: [
        "Inbox management and triage",
        "Calendar and meeting scheduling",
        "Document prep and file organization",
        "SOP writing and upkeep",
      ],
      tools: ["Google Workspace", "Microsoft Office", "Notion"],
    },
    {
      id: "data-entry",
      icon: "Table",
      title: "Data Entry",
      summary: "Clean, accurate records, entered right the first time.",
      deliverables: [
        "Spreadsheet data entry and cleanup",
        "CRM and database updates",
        "Data migration between tools",
        "Record deduplication and formatting",
      ],
      tools: ["Excel", "Google Sheets", "Airtable"],
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery Call",
      description: "We map your current workflow, pain points and priorities.",
    },
    {
      step: 2,
      title: "Onboarding & SOPs",
      description: "I document every task so nothing depends on memory.",
    },
    {
      step: 3,
      title: "Daily Execution",
      description: "Tasks handled on schedule, with updates in your preferred channel.",
    },
    {
      step: 4,
      title: "Weekly Reporting",
      description: "A clear summary of what was done, key numbers and next steps.",
    },
  ],

  caseStudies: [
    {
      id: "skincare-orders",
      serviceIds: ["order-processing", "customer-support"],
      title: "Cutting order backlog for a skincare brand",
      clientType: "Shopify skincare brand (US)", // TODO
      problem: "A 3-day order backlog during a product launch led to rising refund requests.",
      solution:
        "Set up a daily fulfillment checklist, triaged the support inbox in Gorgias with tags and macros, and flagged address issues before shipping.",
      result: { metric: "3 days → same day", label: "Order turnaround" },
      image: "", // TODO
      isSample: true,
    },
    {
      id: "home-goods-inventory",
      serviceIds: ["inventory", "data-entry"],
      title: "Syncing inventory across two sales channels",
      clientType: "Home goods seller on Shopify + Amazon", // TODO
      problem: "Stock counts didn't match between channels, causing oversells.",
      solution:
        "Built a Google Sheets reconciliation tracker, audited 400+ SKUs, and ran weekly low-stock reports.",
      result: { metric: "0 oversells", label: "In the following quarter" },
      image: "",
      isSample: true,
    },
    {
      id: "apparel-listings",
      serviceIds: ["ecommerce"],
      title: "Launching a 250-product apparel catalog",
      clientType: "Apparel startup (AU)", // TODO
      problem: "The catalog launch was stalled with only 40 products listed.",
      solution:
        "Uploaded and organized listings with variants, sizing charts and SEO-friendly titles using a standard template.",
      result: { metric: "250 products", label: "Live in 2 weeks" },
      image: "",
      isSample: true,
    },
    {
      id: "founder-admin",
      serviceIds: ["administrative"],
      title: "Giving a founder back 10 hours a week",
      clientType: "E-commerce founder (UK)", // TODO
      problem: "The founder spent most mornings in email and scheduling.",
      solution:
        "Introduced inbox labels and filters, handled scheduling, and moved recurring tasks into Notion SOPs.",
      result: { metric: "10 hrs/week", label: "Time saved" },
      image: "",
      isSample: true,
    },
  ],

  toolkit: [
    {
      category: "E-Commerce Platforms",
      tools: [
        { name: "Shopify", level: "Advanced" },
        { name: "Amazon Seller Central", level: "Proficient" },
        { name: "WooCommerce", level: "Proficient" },
        { name: "Etsy", level: "Familiar" },
      ],
    },
    {
      category: "Customer Support",
      tools: [
        { name: "Gorgias", level: "Advanced" },
        { name: "Zendesk", level: "Proficient" },
        { name: "Intercom", level: "Familiar" },
        { name: "LiveChat", level: "Familiar" },
      ],
    },
    {
      category: "Productivity & Admin",
      tools: [
        { name: "Google Workspace", level: "Advanced" },
        { name: "Microsoft Office", level: "Advanced" },
        { name: "Notion", level: "Proficient" },
      ],
    },
    {
      category: "Data & Spreadsheets",
      tools: [
        { name: "Google Sheets", level: "Advanced" },
        { name: "Excel", level: "Advanced" },
        { name: "Airtable", level: "Proficient" },
      ],
    },
    {
      category: "Communication",
      tools: [
        { name: "Slack", level: "Advanced" },
        { name: "Zoom", level: "Advanced" },
        { name: "Loom", level: "Proficient" },
      ],
    },
  ],

  experience: [
    {
      role: "E-Commerce Virtual Assistant",
      company: "Freelance, multiple Shopify brands", // TODO
      start: "2024",
      end: "Present",
      achievements: [
        "Manage daily orders and support for 3 active stores",
        "Built SOP libraries that cut new-task onboarding time in half",
        "Maintain a < 2-hour first-response time across channels",
      ],
    },
    {
      role: "Customer Support Representative",
      company: "BPO, e-commerce account", // TODO
      start: "2022",
      end: "2024",
      achievements: [
        "Handled 60+ email and chat tickets per shift",
        "Consistently scored 95%+ on quality audits",
      ],
    },
    {
      role: "Administrative & Data Entry Assistant",
      company: "Local distribution company", // TODO
      start: "2021",
      end: "2022",
      achievements: [
        "Encoded and reconciled 1,000+ inventory records monthly",
        "Organized digital filing for a 20-person team",
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "Myxie took our order chaos and turned it into a system. I finally stopped checking Shopify at midnight.",
      name: "Sarah K.", // TODO: replace with real client
      role: "Founder",
      company: "Skincare brand, US",
      isSample: true,
    },
    {
      quote:
        "Reliable, detail-oriented, and always a step ahead. Our customers love her replies.",
      name: "James T.",
      role: "Operations Manager",
      company: "Home goods store, AU",
      isSample: true,
    },
    {
      quote:
        "The weekly reports alone are worth it. I always know exactly where things stand.",
      name: "Priya M.",
      role: "Owner",
      company: "Apparel startup, UK",
      isSample: true,
    },
  ],

  packages: [
    {
      name: "Starter",
      hours: "10 hrs / week",
      price: "$8/hr", // TODO: set your rates
      description: "For stores that need a reliable extra pair of hands.",
      features: ["1–2 core services", "Daily updates via email or Slack", "Weekly summary report"],
      highlighted: false,
    },
    {
      name: "Growth",
      hours: "20 hrs / week",
      price: "$7.50/hr",
      description: "For growing brands ready to hand off daily operations.",
      features: [
        "Up to 4 core services",
        "SOP documentation included",
        "Weekly report + monthly review call",
      ],
      highlighted: true,
    },
    {
      name: "Dedicated",
      hours: "40 hrs / week",
      price: "$7/hr",
      description: "A full-time operations partner embedded in your team.",
      features: [
        "All 6 services",
        "Custom workflows and reporting",
        "Priority response during overlap hours",
      ],
      highlighted: false,
    },
  ],

  faqs: [
    {
      question: "What time zone do you work in?",
      answer:
        "I'm based in Manila (GMT+8) and keep 4–6 hours of overlap with US or AU business hours.",
    },
    {
      question: "How do we communicate?",
      answer: "Whatever works for your team: Slack, email, WhatsApp or scheduled Zoom calls.",
    },
    {
      question: "Can I start with a trial?",
      answer: "Yes. I offer a 1-week paid trial so you can see how I work before committing.",
    },
    {
      question: "How do you handle access to my accounts?",
      answer:
        "I prefer staff or collaborator accounts with limited permissions, and I follow your security policies.",
    },
    {
      question: "How do you get paid?",
      answer: "Weekly or bi-weekly via Wise, PayPal or Upwork.",
    },
  ],

  // ───────────────────────────────────────────────────────────────────────────
  // Section headings & interface text
  // Everything below is the wording around your content: headings, button
  // labels, form messages. Change any of it freely.
  // ───────────────────────────────────────────────────────────────────────────

  navigation: {
    links: [
      { label: "Services", sectionId: "services" },
      { label: "Process", sectionId: "process" },
      { label: "Work", sectionId: "work" },
      { label: "Toolkit", sectionId: "toolkit" },
      { label: "Experience", sectionId: "experience" },
      { label: "Pricing", sectionId: "packages" },
      { label: "Contact", sectionId: "contact" },
    ],
    bookCallLabel: "Book a Call",
    primaryNavLabel: "Main",
    menuLabel: "Menu",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
  },

  sections: {
    hero: {
      primaryCtaLabel: "Book a Discovery Call",
      secondaryCtaLabel: "View My Work",
      statsLabel: "At a glance",
    },
    trustBar: {
      label: "Tools I work in every day",
    },
    services: {
      eyebrow: "Services",
      title: "Daily operations, handled end to end",
      intro:
        "Hand off one area or several. Each one comes with documented processes, so the work stays consistent as your store grows.",
      deliverablesLabel: "What's included",
      toolsLabel: "Tools",
    },
    process: {
      eyebrow: "How I Work",
      title: "A clear routine from the very first call",
      intro: "You always know what's being handled, what's done and what's coming next.",
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Real problems, measurable results",
      intro: "A few examples of the operational fixes I bring to online stores.",
      filterLabel: "Filter case studies by service",
      filterAllLabel: "All work",
      problemLabel: "The problem",
      solutionLabel: "What I did",
      resultLabel: "The result",
      servicesLabel: "Services",
      toolsLabel: "Tools used",
      closeLabel: "Close case study",
      ctaLabel: "Discuss a similar project",
    },
    toolkit: {
      eyebrow: "Toolkit",
      title: "Already fluent in the tools you use",
      intro:
        "Less onboarding for you. Here's where I work every day, with an honest read on my experience in each.",
      levelDescriptions: {
        Advanced: "Daily use; can set up workflows and train others",
        Proficient: "Regular hands-on use; fully independent",
        Familiar: "Working knowledge; quick to ramp up",
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "A track record built on consistency",
      intro:
        "From a busy BPO support floor to running daily operations for Shopify brands, every role has sharpened the same habits: accuracy, follow-through and clear communication.",
      resumeLabel: "Download Résumé",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What store owners say",
      carouselLabel: "Client testimonials",
      previousLabel: "Previous testimonial",
      nextLabel: "Next testimonial",
      goToLabel: "Show testimonial {number}",
      slideLabel: "{number} of {total}",
    },
    packages: {
      eyebrow: "Packages",
      title: "Simple, flexible support plans",
      intro:
        "Billed weekly at an hourly rate. Start with the hours you need now and scale up as your store grows.",
      popularLabel: "Most Popular",
      ctaLabel: "Get started",
      includedLabel: "What's included",
      note: "Custom arrangements available.",
      noteLinkLabel: "Tell me what you need",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions store owners usually ask",
      intro: "Can't find what you're looking for? Send me a message and I'll get back to you.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's make your store easier to run",
      intro:
        "Tell me a bit about your business and where you need help. I'll reply within one business day with next steps.",
      emailLabel: "Email",
      locationLabel: "Based in",
      timezoneLabel: "Local time",
      hoursLabel: "Working hours",
      currentTimeTemplate: "Currently {time} in {city}",
      visitorTimeTemplate: "{time} where you are",
      bookingTitle: "Prefer to talk it through?",
      bookingDescription:
        "Pick a time for a short discovery call and we'll map out where I can help first.",
      bookingLabel: "Book a Discovery Call",
      socialsLabel: "Also on",
    },
  },

  contactForm: {
    title: "Send an inquiry",
    fields: {
      name: { label: "Your name", placeholder: "Jane Smith" },
      email: { label: "Email address", placeholder: "jane@yourstore.com" },
      businessType: { label: "Business type", placeholder: "e.g. Shopify skincare brand" },
      service: {
        label: "Service needed",
        placeholder: "Choose a service",
        otherOption: "Not sure yet",
      },
      message: {
        label: "How can I help?",
        placeholder:
          "Tell me about your store, your current workload and what you'd like to hand off.",
      },
    },
    optionalLabel: "Optional",
    requiredHint: "All fields are required unless marked optional.",
    honeypotLabel: "Leave this field empty",
    errors: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address, like name@example.com.",
      serviceRequired: "Please choose the service you need.",
      messageRequired: "Please tell me a little about what you need.",
      messageTooShort: "Please add a bit more detail (at least {min} characters).",
    },
    submitLabel: "Send inquiry",
    submittingLabel: "Sending…",
    successTitle: "Thank you, your message is on its way.",
    successMessage:
      "I'll reply within one business day. In the meantime, feel free to book a discovery call.",
    mailtoTitle: "Your email app should now be open.",
    mailtoMessage:
      "Your message is drafted and ready to send. If nothing opened, you can email me at {email}.",
    sendAnotherLabel: "Send another message",
    errorTitle: "Your message couldn't be sent.",
    errorMessage:
      "Something went wrong on the way. Please try again, or email me directly and I'll take it from there.",
    errorFallbackLabel: "Email me instead",
    emailSubject: "New inquiry from {name}",
  },

  footer: {
    tagline: "Reliable operations support for growing online stores.",
    quickLinksLabel: "Quick links",
    socialsLabel: "Elsewhere",
    backToTopLabel: "Back to top",
    copyright: "© {year} {name}. All rights reserved.",
  },

  labels: {
    skipToContent: "Skip to main content",
    themeToggle: "Dark mode",
    opensInNewTab: "(opens in a new tab)",
    sampleBadge: "Sample",
  },
};
