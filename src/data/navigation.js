// Central nav model — drives desktop dropdowns, mobile accordion, and route stubs.
export const nav = [
  {
    label: "About",
    path: "/about",
    children: [
      { label: "About", path: "/about" },
      { label: "AVCA Team", path: "/about/team" },
      { label: "AVCA Board", path: "/about/board" },
      { label: "Advisory Council", path: "/about/advisory-council" },
      { label: "AVCA Committees", path: "/about/committees" },
    ],
  },
  {
    label: "Membership",
    path: "/membership",
    children: [
      { label: "Membership", path: "/membership" },
      { label: "AVCA Members", path: "/membership/members" },
      { label: "Code of Conduct", path: "/membership/code-of-conduct" },
    ],
  },
  {
    label: "Data & Intelligence",
    path: "/data-intelligence",
    children: [
      { label: "Data & Intelligence", path: "/data-intelligence" },
      { label: "Research & Publications", path: "/data-intelligence/research-publications" },
      { label: "African PC Library", path: "/data-intelligence/library" },
    ],
  },
  {
    label: "Policy",
    path: "/policy",
    children: [
      { label: "Policy", path: "/policy" },
      { label: "Industry Guides", path: "/policy/industry-guides" },
      { label: "Policy Publications", path: "/policy/publications" },
    ],
  },
  {
    label: "Events",
    path: "/events",
    children: [
      { label: "Events", path: "/events" },
      { label: "Conferences & Summits", path: "/events/conferences-summits" },
      { label: "Events Calendar", path: "/events/calendar" },
      { label: "Event Sponsorship", path: "/events/sponsorship" },
    ],
  },
  {
    label: "AVCA Academy",
    path: "/academy",
    children: [
      { label: "AVCA Academy", path: "/academy" },
      { label: "On Demand", path: "/academy/on-demand" },
      { label: "Upcoming Training", path: "/academy/upcoming-training" },
    ],
  },
  {
    label: "Strategic Initiatives",
    path: "/strategic-initiatives",
    children: null,
  },
  {
    label: "News & Insights",
    path: "/news/member-news",
    children: [
      { label: "Member News", path: "/news/member-news" },
      { label: "Industry News", path: "/news/industry-news" },
      { label: "Member Interviews", path: "/news/member-interviews" },
      { label: "Podcasts", path: "/news/podcasts" },
      { label: "Afri-Spective Blog", path: "/news/afri-spective-blog" },
      { label: "Job Board", path: "/news/job-board" },
    ],
  },
];

export const utilityLinks = [
  { label: "Contact AVCA", path: "/contact" },
  { label: "AVCA Media Toolkit", path: "/media-toolkit" },
  { label: "AVCA Platform Login", path: "/login", external: true },
];

export const footerAbout = [
  { label: "About", path: "/about" },
  { label: "Privacy", path: "/policies/privacy" },
  { label: "Cookies", path: "/policies/cookies" },
  { label: "Terms", path: "/policies/terms" },
];

export const footerResources = [
  { label: "Member News", path: "/news/member-news" },
  { label: "Industry News", path: "/news/industry-news" },
  { label: "Afri-Spective Blog", path: "/news/afri-spective-blog" },
  { label: "Podcasts", path: "/news/podcasts" },
];

// Placeholder page copy for generic stub pages, keyed by path.
export const pageContent = {
  "/about": {
    eyebrow: "About",
    title: "Championing private capital investment in Africa",
    intro:
      "We act as the trusted independent source of information, insight and intelligence for Africa's private capital community — building investor confidence and making the case for both commercial return and impact.",
  },
  "/about/team": {
    eyebrow: "About",
    title: "The team behind the association",
    intro:
      "A small, senior team drawn from investment, research and policy backgrounds leads our work across the continent and with our international partners.",
  },
  "/about/board": {
    eyebrow: "About",
    title: "AVCA Board",
    intro:
      "Our Board is made up of senior leaders from member firms who set the strategic direction of the association.",
  },
  "/about/advisory-council": {
    eyebrow: "About",
    title: "Advisory Council",
    intro:
      "Senior industry figures advise on emerging themes shaping private capital across African markets.",
  },
  "/about/committees": {
    eyebrow: "About",
    title: "AVCA Committees",
    intro:
      "Specialist committees bring together member expertise on regulation, sustainability, and market development.",
  },
  "/membership": {
    eyebrow: "Membership",
    title: "Join a community building a prosperous Africa",
    intro:
      "Members include fund managers, direct investors, institutional investors, foundations, financial institutions, professional services firms and academic institutions.",
  },
  "/membership/members": {
    eyebrow: "Membership",
    title: "Our members",
    intro:
      "Explore the firms and institutions that make up the association's membership across the continent and beyond.",
  },
  "/membership/code-of-conduct": {
    eyebrow: "Membership",
    title: "Code of Conduct",
    intro:
      "Our members commit to a shared standard of professional and ethical conduct across their investment activity.",
  },
  "/data-intelligence": {
    eyebrow: "Data & Intelligence",
    title: "Independent research on African private capital",
    intro:
      "A proprietary, pan-African database of funds, deals and exits underpins our independent industry research and market intelligence.",
  },
  "/data-intelligence/research-publications": {
    eyebrow: "Data & Intelligence",
    title: "Research & Publications",
    intro:
      "Quarterly and annual reports tracking fundraising, deal activity and exits across African private capital markets.",
  },
  "/data-intelligence/library": {
    eyebrow: "Data & Intelligence",
    title: "African PC Library",
    intro:
      "A searchable archive of research, reports and reference material on African private capital.",
  },
  "/policy": {
    eyebrow: "Policy",
    title: "Advocating for an enabling investment environment",
    intro:
      "Through our advisory committees and Board, we inform the industry of policy and regulatory change affecting private capital in Africa.",
  },
  "/policy/industry-guides": {
    eyebrow: "Policy",
    title: "Industry Guides",
    intro:
      "Practical guidance to help investors and managers navigate the regulatory landscape across African markets.",
  },
  "/policy/publications": {
    eyebrow: "Policy",
    title: "Policy Publications",
    intro:
      "Position papers and submissions setting out the industry's view on regulatory developments.",
  },
  "/events": {
    eyebrow: "Events",
    title: "Where Africa's private capital community meets",
    intro:
      "From our flagship conference to regional roadshows, our events connect the industry through curated, research-driven programming.",
  },
  "/events/conferences-summits": {
    eyebrow: "Events",
    title: "Conferences & Summits",
    intro:
      "Our flagship gatherings bring together investors, managers and policymakers from across the continent.",
  },
  "/events/calendar": {
    eyebrow: "Events",
    title: "Events Calendar",
    intro: "A full calendar of upcoming conferences, roadshows and training sessions.",
  },
  "/events/sponsorship": {
    eyebrow: "Events",
    title: "Event Sponsorship",
    intro: "Partner with us to reach Africa's private capital community at our flagship events.",
  },
  "/academy": {
    eyebrow: "AVCA Academy",
    title: "Building capacity across the ecosystem",
    intro:
      "In-person, virtual and on-demand training for emerging fund managers, institutional investors and professional services practitioners.",
  },
  "/academy/on-demand": {
    eyebrow: "AVCA Academy",
    title: "On Demand",
    intro: "Access recorded training sessions and courses at your own pace.",
  },
  "/academy/upcoming-training": {
    eyebrow: "AVCA Academy",
    title: "Upcoming Training",
    intro: "Browse and register for upcoming live and virtual training programmes.",
  },
  "/strategic-initiatives": {
    eyebrow: "Strategic Initiatives",
    title: "Programmes driving long-term impact",
    intro:
      "Targeted initiatives that build the capacity of emerging fund managers and deepen local institutional investment.",
  },
  "/news/member-news": {
    eyebrow: "News & Insights",
    title: "Member News",
    intro: "The latest announcements and updates from across our membership.",
  },
  "/news/industry-news": {
    eyebrow: "News & Insights",
    title: "Industry News",
    intro: "Coverage of the stories shaping African private capital markets.",
  },
  "/news/member-interviews": {
    eyebrow: "News & Insights",
    title: "Member Interviews",
    intro: "Conversations with the investors and managers building Africa's private capital industry.",
  },
  "/news/podcasts": {
    eyebrow: "News & Insights",
    title: "Podcasts",
    intro: "Long-form conversations on the trends and themes shaping the industry.",
  },
  "/news/afri-spective-blog": {
    eyebrow: "News & Insights",
    title: "Afri-Spective Blog",
    intro: "Perspectives and analysis from members and industry practitioners.",
  },
  "/news/job-board": {
    eyebrow: "News & Insights",
    title: "Job Board",
    intro: "Open roles from across our membership and the wider industry.",
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Get in touch",
    intro: "Reach the team with membership, media or partnership enquiries.",
  },
  "/media-toolkit": {
    eyebrow: "Resources",
    title: "Media Toolkit",
    intro: "Brand assets and guidance for members and press.",
  },
  "/newsletter": {
    eyebrow: "Newsletter",
    title: "Subscribe to our newsletter",
    intro: "The latest news, events and updates from AVCA, straight to your inbox.",
  },
};
