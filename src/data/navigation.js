// Inside src/data/navigation.js
// Central nav model — drives desktop dropdowns, mobile accordion, and route stubs.

export const NEWSLETTER_PATH = "/insights/newsletter";
export const BLOG_PATH = "/insights/blog";

export const nav = [
  { label: "About", path: "/about", children: null },
  { label: "Epena Law", path: "/epena-law", children: null },
  {
    label: "Insights",
    path: "/insights",
    children: [
      { label: "Newsletter", path: NEWSLETTER_PATH },
      { label: "Blog", path: BLOG_PATH },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Photo Gallery", path: "/resources/photo-gallery" },
      { label: "Video Gallery", path: "/resources/video-gallery" },
      { label: "Epena Company Profile", path: "/resources/epena-company-profile" },
      { label: "Travel", path: "/resources/travel" },
      { label: "Accommodation", path: "/resources/accommodation" },
      // Moved here from Past Events > FABS 2024.
      { label: "Sponsorship", path: "/resources/sponsorship" },
    ],
  },
  {
    label: "Past Events",
    path: "/past-events",
    children: [
      {
        label: "FABS 2024",
        path: "/past-events/fabs-2024",
        children: [
          { label: "Speakers", path: "/past-events/fabs-2024/speakers" },
          { label: "Main Program", path: "/past-events/fabs-2024/main-program" },
          { label: "Side Events Program", path: "/past-events/fabs-2024/side-events-program" },
        ],
      },
      { label: "Road To FABS 2025", path: "/past-events/fabs-2025/road-to-fabs-2025" },
      {
        label: "FABS 2025",
        path: "/past-events/fabs-2025/fabs-2025",
        children: [
          { label: "Why Lagos?", path: "/past-events/fabs-2025/fabs-2025/why-lagos" },
          { label: "Sponsors", path: "/past-events/fabs-2025/fabs-2025/sponsors" },
        ],
      },
    ],
  },
];

export const contactLink = { label: "Contact Us", path: "/contact-us" };
export const registerLink = { label: "Register", path: "/register" };

export const contactInfo = {
  phone: "+237 676 66 14 54",
  phoneHref: "tel:+237676661454",
  email: "info@fabs.africa",
};

// TODO: replace "#" with the real profile URLs.
export const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: "#" },
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "twitter", label: "X (formerly Twitter)", href: "#" },
];

export const footerAbout = [
  { label: "About FABS", path: "/about" },
  { label: "Contact Us", path: "/contact-us" },
  { label: "Epena Law", path: "/epena-law" },
  { label: "Register", path: "/register" },
];

export const footerExplore = [
  { label: "FABS 2025", path: "/past-events/fabs-2025/fabs-2025" },
  { label: "Road To FABS 2025", path: "/past-events/fabs-2025/road-to-fabs-2025" },
  { label: "Past Events", path: "/past-events" },
  { label: "Newsletter", path: NEWSLETTER_PATH },
  { label: "Blog", path: BLOG_PATH },
];

// Placeholder page copy for generic stub pages, keyed by path.
export const pageContent = {
  "/about": {
    eyebrow: "About",
    title: "About the Francophone Africa Business Summit",
    intro: "Amplifying Growth in Africa: From Momentum to Scale.",
  },
  "/epena-law": {
    eyebrow: "Epena Law",
    title: "Epena Law",
    intro: "Learn more about Epena Law and its connection to the summit.",
  },
  "/resources": {
    eyebrow: "Resources",
    title: "Resources",
    intro: "Galleries and reference material from the summit.",
  },
  "/resources/photo-gallery": {
    eyebrow: "Resources",
    title: "Photo Gallery",
    intro: "Moments from the summit.",
  },
  "/resources/video-gallery": {
    eyebrow: "Resources",
    title: "Video Gallery",
    intro: "Watch highlights and sessions from the summit.",
  },
  "/resources/epena-company-profile": {
    eyebrow: "Resources",
    title: "Epena Company Profile",
    intro: "Download or read the Epena company profile.",
  },
  "/past-events": {
    eyebrow: "Past Events",
    title: "Past events",
    intro: "Look back at previous editions of the Francophone Africa Business Summit — from FABS 2024 through FABS 2025.",
  },
  "/past-events/fabs-2024": {
    eyebrow: "Past Events",
    title: "FABS 2024",
    intro: "Highlights and resources from the 2024 edition.",
  },
  "/past-events/fabs-2025": {
    eyebrow: "Past Events",
    title: "FABS 2025",
    intro: "Explore the Road to FABS 2025 build-up events and the FABS 2025 summit itself, both now part of our past events archive.",
  },
  "/past-events/fabs-2025/road-to-fabs-2025": {
    eyebrow: "Past Events · FABS 2025",
    title: "The road to FABS 2025",
    intro: "Events and conversations that led up to the summit in Lagos.",
  },
  "/past-events/fabs-2025/road-to-fabs-2025/drc-sip-and-learn": {
    eyebrow: "Past Events · FABS 2025",
    title: "DRC – Sip & Learn",
    intro: "Details of the DRC Sip & Learn session on the road to FABS 2025.",
  },
  "/past-events/fabs-2025/fabs-2025": {
    eyebrow: "Past Events · FABS 2025",
    title: "Francophone Africa Business Summit 2025",
    intro: "Lagos, Nigeria — February 18th – 19th, 2025. Venue: Lagos Continental Hotel.",
  },
  "/contact-us": {
    eyebrow: "Contact",
    title: "Contact us",
    intro: "Reach the FABS team at info@fabs.africa or +237 676 66 14 54.",
  },
  "/register": {
    eyebrow: "Register",
    title: "Register for FABS 2025",
    intro: "Secure your place at the Francophone Africa Business Summit.",
  },
};