import type { Portfolio } from "./types.ts";

export const portfolio: Portfolio = {
  meta: {
    siteTitle: "Michaella Pascua | E-Commerce & Operations Virtual Assistant",
    description:
      "Manila-based virtual assistant with 8 years of online selling and customer support experience. Order processing, customer support, inventory, admin and data entry for online stores.",
    siteUrl: "https://ralphnatal.github.io/myxie-s_portfolio/",
    ogImage: "/og-image.png",
  },

  profile: {
    firstName: "Michaella",
    lastName: "Pascua",
    nickname: "Myxie",
    role: "E-Commerce & Operations Virtual Assistant",
    headline: "I keep your store running so you can focus on growing it.",
    subheadline:
      "From order processing to customer support, I handle the daily operations that eat up your time: accurately, on schedule, and with clear weekly reporting.",
    location: "Manila, Philippines",
    timezone: "Asia/Manila",
    workingHours: "Flexible, with 4–6 hours of overlap with US/AU business hours",
    availability: { isAvailable: true, label: "Available for 2 new clients" },
    portrait: "/images/michaella.jpg",
    portraitAlt: "Portrait of Michaella Pascua",
    resumeUrl: "/resume.pdf",
    email: "pascua.michaella@gmail.com",
    bookingUrl: undefined, // No booking link yet: CTAs fall back to email
    formspreeId: "YOUR_FORM_ID", // TODO: create a Formspree form for pascua.michaella@gmail.com
    socials: [
      { platform: "OnlineJobs.ph", url: "https://v2.onlinejobs.ph/jobseekers/info/5237791" },
      { platform: "Facebook", url: "https://www.facebook.com/Skittellas/" }, // CONFIRM: OK to show publicly?
    ],
  },

  stats: [
    { value: "8 yrs", label: "Selling & supporting customers online" }, // Based on 2017–2025 as an independent seller
    { value: "1,000+", label: "Orders handled" },
    { value: "< 10 min", label: "Typical reply time" },
  ],

  services: [
    {
      id: "order-processing",
      icon: "PackageCheck",
      title: "Order Processing",
      summary: "Every order confirmed, tracked and followed through.",
      deliverables: [
        "Order checking and confirmation",
        "Returns, refunds and exchange requests",
        "Order and shipment status updates to customers",
        "Order logs kept up to date in spreadsheets",
      ],
      tools: ["Google Sheets", "Excel", "Gmail"],
    },
    {
      id: "ecommerce",
      icon: "ShoppingCart",
      title: "E-Commerce Support",
      summary: "Day-to-day store tasks handled by someone who has run her own shop.",
      deliverables: [
        "Product details, prices and promo updates",
        "Simple product graphics and promo images",
        "Listing and catalog organization",
        "Handling buyer questions before and after purchase",
      ],
      tools: ["Canva", "Google Sheets"],
    },
    {
      id: "customer-support",
      icon: "Headset",
      title: "Customer Support",
      summary: "Fast, patient replies that turn questions into repeat buyers.",
      deliverables: [
        "Email and live chat support",
        "Billing, payment and account concerns",
        "Calm handling of upset customers",
        "Escalating issues with clear notes",
      ],
      tools: ["Zendesk", "LiveChat", "Gmail", "Zoom"],
    },
    {
      id: "inventory",
      icon: "Boxes",
      title: "Inventory Management",
      summary: "Stock levels you can trust, with no surprise sellouts.",
      deliverables: [
        "Stock tracking sheets",
        "Low-stock alerts and restock lists",
        "Stock count reconciliation",
        "Weekly inventory summaries",
      ],
      tools: ["Google Sheets", "Excel"],
    },
    {
      id: "administrative",
      icon: "CalendarCheck",
      title: "Administrative Support",
      summary: "An organized inbox, calendar and workspace every week.",
      deliverables: [
        "Inbox management and sorting",
        "Calendar and meeting scheduling",
        "Document prep and file organization",
        "Simple process notes and checklists",
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
        "Customer and order record updates",
        "Moving data between spreadsheets and tools",
        "Removing duplicates and fixing formatting",
      ],
      tools: ["Excel", "Google Sheets"],
    },
  ],

  process: [
    {
      step: 1,
      title: "Discovery Call",
      description: "We talk through your store, your tasks and your priorities.",
    },
    {
      step: 2,
      title: "Onboarding",
      description: "I learn your tools and write down each task so nothing is missed.",
    },
    {
      step: 3,
      title: "Daily Execution",
      description: "Tasks handled on schedule, with updates by email or WhatsApp.",
    },
    {
      step: 4,
      title: "Weekly Reporting",
      description: "A clear summary of what was done and what's next.",
    },
  ],

  caseStudies: [
    {
      id: "card-decline-support",
      serviceIds: ["customer-support"],
      title: "Resolving declined-card issues for credit card customers",
      clientType: "US department store credit card account (via BPO)", // CONFIRM: she allowed "Macy's", but BPO accounts usually have NDAs
      problem:
        "Customers were calling because their store credit card was being declined at checkout.",
      solution:
        "Checked each account for restrictions, expiry and available credit limit, explained the cause clearly, and took the right next step on the call.",
      result: {
        metric: "Card issues resolved",
        label: "Restriction lifted, card replaced, or credit increase requested",
      },
      image: "",
    },
  ],

  toolkit: [
    {
      category: "Productivity & Admin",
      tools: [
        { name: "Google Workspace", level: "Advanced" },
        { name: "Microsoft Office", level: "Advanced" },
        { name: "Gmail", level: "Advanced" },
        { name: "Notion", level: "Familiar" },
      ],
    },
    {
      category: "Data & Spreadsheets",
      tools: [
        { name: "Google Sheets", level: "Advanced" },
        { name: "Excel", level: "Advanced" },
      ],
    },
    {
      category: "Customer Support",
      tools: [
        { name: "Zendesk", level: "Familiar" },
        { name: "LiveChat", level: "Familiar" },
      ],
    },
    {
      category: "Design",
      tools: [{ name: "Canva", level: "Proficient" }],
    },
    {
      category: "Communication",
      tools: [
        { name: "Zoom", level: "Advanced" },
        { name: "Loom", level: "Familiar" },
      ],
    },
  ],

  experience: [
    {
      role: "Independent E-Commerce Seller",
      company: "Freelance, own online store",
      start: "2017",
      end: "2025",
      achievements: [
        "Handled 3–5 customer orders and inquiries every day",
        "Built a loyal base of repeat customers",
      ],
    },
    {
      role: "Customer Advisor",
      company: "Concentrix (BPO)",
      period: "1.5 months", // TODO: add the year
      achievements: [
        "Handled a high volume of customer calls daily",
        "Calmly resolved concerns from upset customers",
        "Assisted customers with payments and billing",
      ],
    },
  ],

  testimonials: [
    {
      quote:
        "Michaella is very professional, she handled me very well because I'm a PWD who needs assistance.",
      name: "Pearl",
      role: "Loyal Member",
      company: "US department store (via BPO)", // CONFIRM: she wrote "Macy's Loyal Member"
    },
  ],

  packages: [
    {
      name: "Starter",
      hours: "10 hrs / week",
      price: "$2/hr", // CONFIRM with Michaella: rates rise with hours and are very low for this market
      description: "For stores that need a reliable extra pair of hands.",
      features: [
        "1–2 core services",
        "Daily updates via email or WhatsApp",
        "Weekly summary report",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      hours: "20 hrs / week",
      price: "$4/hr", // CONFIRM
      description: "For growing stores ready to hand off daily tasks.",
      features: [
        "Up to 4 core services",
        "Task checklists written for you",
        "Weekly report + monthly Zoom check-in",
      ],
      highlighted: true,
    },
    {
      name: "Dedicated",
      hours: "40 hrs / week",
      price: "$6/hr", // CONFIRM
      description: "A full-time assistant working as part of your team.",
      features: [
        "All 6 services",
        "Custom workflows and reporting",
        "Priority replies during overlap hours",
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
      answer:
        "By email, WhatsApp or scheduled Zoom calls, whichever suits you best. I usually reply within 10 minutes during working hours.",
    },
    {
      question: "Can I start with a trial?",
      answer: "Yes. I offer a paid 1-week trial so you can see how I work before committing.",
    },
    {
      question: "How do you handle access to my accounts?",
      answer:
        "I prefer staff or collaborator accounts with limited permissions, and I follow your security policies.",
    },
    {
      question: "How do you get paid?",
      answer: "Weekly or bi-weekly via PayPal.",
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
    emailCtaLabel: "Email Me",
    emailCtaSubject: "Inquiry from your website",
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
      eyebrow: "Selected Work",
      title: "Real problems, handled with care",
      intro: "A closer look at how I solve problems for customers.",
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
      legendTitle: "How to read the levels",
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
        "From running my own online store to taking calls on a busy BPO support floor, every role has sharpened the same habits: accuracy, follow-through and clear communication.",
      resumeLabel: "Download Résumé",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What people say",
      intro: "Feedback from customers I've supported.",
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
        "Paid weekly or bi-weekly at an hourly rate. Start with the hours you need now and scale up as your store grows.",
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
        "Tell me a bit about your business and where you need help, and I'll get back to you with next steps.",
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
      businessType: { label: "Business type", placeholder: "e.g. Online clothing shop" },
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
    successMessage: "I'll get back to you at the email address you gave me.",
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
    nicknameLine: "Friends call me {nickname}.",
    copyright: "© {year} {name}. All rights reserved.",
  },

  labels: {
    skipToContent: "Skip to main content",
    themeToggle: "Dark mode",
    opensInNewTab: "(opens in a new tab)",
  },
};
