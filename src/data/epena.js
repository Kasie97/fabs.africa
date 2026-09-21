// All Epena Law page copy and media paths live here.
// Rename the image paths to match the real files in public/media/.

export const epenaIntro = {
  heading: "About Epena Law",
  tagline: "Like the city of Epena, we are at the center of the legal scene in Africa.",
  body: "Through our deep understanding of both civil and common laws system, we are able to seamlessly navigate through the various legal systems in Africa. We serve the needs of corporates, investment funds, growth companies and financial institutions by providing advisory services on a wide range of corporate and commercial transactions. Our core focus is Africa, where we have uniquely deep roots and knowledge of markets, regulations and key players.",
  callout:
    "We are passionate about innovation and are committed to working with our clients to deliver commercially driven legal solutions tailored to their businesses, disrupting traditional law firm models. We believe that innovation drives diversity and inclusion.",
  // TODO: point this at Epena Law's own site or a longer page.
  readMore: { label: "Read more", href: "#" },
  badge: { value: "39+", line1: "Years of", line2: "Cumulative Experiences" },
  imageTop: { src: "/media/epena-buildings.jpg", alt: "Glass skyscrapers seen from below" },
  imageBottom: { src: "/media/epena-chess.jpg", alt: "Chess pieces stepping up a set of blocks" },
};

// icon: "award" | "dollar" | "building" | "badge"
export const epenaStats = [
  {
    icon: "award",
    value: "39",
    suffix: "+",
    label: "combined experience in London, Paris, New York, Luxembourg and Africa",
  },
  {
    icon: "dollar",
    value: "2",
    suffix: "B USD",
    label: "Completed transactions in Africa in 2024",
  },
  {
    icon: "building",
    value: "4",
    label: "Representations around the world",
  },
  {
    icon: "badge",
    value: "2",
    label: "Bar qualifications in Francophone African countries",
  },
];

export const gateway = {
  heading: "Your gateway to Francophone Africa",
  points: [
    "With a bilingual team of attorneys dually qualified in both Civil and Common Law, holding 5 bar admissions across Cameroon, Benin and beyond. Epena Law combines deep first-hand experience and a nuanced cultural affinity in facilitating major transactions throughout Francophone and Anglophone Africa.",
    "This unique expertise at the intersection of Africa's legal systems and business environments allows us to adeptly guide clients towards new frontiers of sustainable growth and seamlessly smooth complexity inherent to cross-border expansion.",
    "Through representations and a presence embedded in key African markets like Cameroon, Côte d'Ivoire, Benin and Nigeria plus affiliations with premier law firms across Senegal, DRC and more, we serve as the gateway connecting international investors to the yet untapped opportunities across the Francophone sphere.",
  ],
  map: {
    src: "/media/epena-map.png",
    alt: "Map of Africa showing Epena Law's offices, representations and transactions",
    // Set to false if your map image already includes its own legend.
    showLegend: true,
  },
  legend: [
    { color: "#8A8A8A", label: "Epena office in Francophone Africa" },
    { color: "#4A1010", label: "Epena representation in Francophone African Countries" },
    { color: "#E8963A", label: "Significant transactions of Advisory experience in francophone Africa" },
    { color: "#F2B978", label: "Rest of Francophone Africa" },
  ],
};