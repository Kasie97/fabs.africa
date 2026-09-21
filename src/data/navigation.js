// Central nav model — drives desktop dropdowns, mobile accordion, and route stubs.
// Mirrors the structure of fabs.africa.

export const NEWSLETTER_PATH = "/insights/newsletter";

export const nav = [
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About FABS", path: "/about" },
      { label: "Contact Us", path: "/about/contact-us" },
    ],
  },
  { label: "Epena Law", path: "/epena-law", children: null },
  {
    label: "Road To FABS 2025",
    path: "/road-to-fabs-2025",
    children: [
      { label: "DRC – Sip & Learn", path: "/road-to-fabs-2025/drc-sip-and-learn" },
    ],
  },
  {
    label: "FABS 2025",
    path: "/fabs-2025",
    children: [
      { label: "Why Lagos?", path: "/fabs-2025/why-lagos" },
      { label: "Speakers", path: "/fabs-2025/speakers" },
      { label: "Travel", path: "/fabs-2025/travel" },
    ],
  },
  {
    label: "Insights",
    path: "/insights",
    children: [{ label: "Newsletter", path: NEWSLETTER_PATH }],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Photo Gallery", path: "/resources/photo-gallery" },
      { label: "Video Gallery", path: "/resources/video-gallery" },
      { label: "Epena Company Profile", path: "/resources/epena-company-profile" },
    ],
  },
  {
    label: "Past Events",
    path: "/past-events",
    children: [{ label: "FABS 2024", path: "/past-events/fabs-2024" }],
  },
];

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
  { label: "Contact Us", path: "/about/contact-us" },
  { label: "Epena Law", path: "/epena-law" },
  { label: "Register", path: "/register" },
];

export const footerExplore = [
  { label: "Why Lagos?", path: "/fabs-2025/why-lagos" },
  { label: "Speakers", path: "/fabs-2025/speakers" },
  { label: "Travel", path: "/fabs-2025/travel" },
  { label: "Newsletter", path: NEWSLETTER_PATH },
];

// Placeholder page copy for generic stub pages, keyed by path.
export const pageContent = {
  "/about": {
    eyebrow: "About",
    title: "About the Francophone Africa Business Summit",
    intro: "Amplifying Growth in Africa: From Momentum to Scale.",
  },
  "/about/contact-us": {
    eyebrow: "About",
    title: "Contact us",
    intro: "Reach the FABS team at info@fabs.africa or +237 676 66 14 54.",
  },
  "/epena-law": {
    eyebrow: "Epena Law",
    title: "Epena Law",
    intro: "Learn more about Epena Law and its connection to the summit.",
  },
  "/road-to-fabs-2025": {
    eyebrow: "Road To FABS 2025",
    title: "The road to FABS 2025",
    intro: "Events and conversations leading up to the summit in Lagos.",
  },
  "/road-to-fabs-2025/drc-sip-and-learn": {
    eyebrow: "Road To FABS 2025",
    title: "DRC – Sip & Learn",
    intro: "Details of the DRC Sip & Learn session on the road to FABS 2025.",
  },
  "/fabs-2025": {
    eyebrow: "FABS 2025",
    title: "Francophone Africa Business Summit 2025",
    intro: "Lagos, Nigeria — February 18th – 19th, 2025. Venue: Lagos Continental Hotel.",
  },
  "/fabs-2025/why-lagos": {
    eyebrow: "FABS 2025",
    title: "Why Lagos?",
    intro: "Why Lagos is the right host city for this edition of the summit.",
  },
  "/fabs-2025/speakers": {
    eyebrow: "FABS 2025",
    title: "Speakers",
    intro: "Meet the voices joining us on stage.",
  },
  "/fabs-2025/travel": {
    eyebrow: "FABS 2025",
    title: "Travel",
    intro: "Everything you need to plan your trip to Lagos.",
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
    intro: "Look back at previous editions of the summit.",
  },
  "/past-events/fabs-2024": {
    eyebrow: "Past Events",
    title: "FABS 2024",
    intro: "Highlights and resources from the 2024 edition.",
  },
  "/register": {
    eyebrow: "Register",
    title: "Register for FABS 2025",
    intro: "Secure your place at the Francophone Africa Business Summit.",
  },
};