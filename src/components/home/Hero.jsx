import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { label: "Why Lagos?", to: "/fabs-2025/why-lagos" },
  { label: "Meet the speakers", to: "/fabs-2025/speakers" },
  { label: "Plan your travel", to: "/fabs-2025/travel" },
  { label: "Road To FABS 2025", to: "/road-to-fabs-2025" },
];

export default function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* Desktop/tablet: autoplaying background video. Hidden below lg to avoid
          shipping video weight to mobile connections. */}
      <video
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        src="/media/hero-bg.mp4"
        poster="/media/placeholder.png"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Mobile: static poster image only -- no video payload. */}
      <img
        src="/media/placeholder.png"
        alt=""
        aria-hidden="true"
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
      />

      {/* Brand-colored tint over the video/image for legibility */}
      <div
        className="absolute inset-0 bg-deep/55"
        aria-hidden="true"
      />

      <div className="relative py-11 sm:py-14 lg:py-20">
        <Container>
          {/* Diagonal banner box, brand accent color, left border accent */}
          <div className="max-w-3xl mx-auto lg:mx-0 animate-fade-up">
            <div
              className="relative bg-accent/90 border-l-4 border-white px-6 py-7 sm:px-9 sm:py-10"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 78%, 88% 100%, 0 100%)",
              }}
            >
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-white">
                Francophone Africa Business Summit 2025
              </h1>
              <p className="mt-3 text-base sm:text-lg lg:text-xl font-medium text-white">
                Amplifying Growth in Africa: From Momentum to Scale
              </p>
              <p className="mt-2 text-xs sm:text-sm lg:text-base text-white/90">
                Lagos, Nigeria – February 18th – 19th, 2025
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/90">
                Venue: Lagos Continental Hotel
              </p>
              <div className="mt-4">
                <Button
                  to="/register"
                  variant="ghost"
                  className="!border !border-white !text-white hover:!bg-white hover:!text-accent"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ul className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 max-w-5xl mx-auto text-left">
        {links.map((l) => (
          <li key={l.label} className="bg-ink">
            <Button
              to={l.to}
              variant="ghost"
              className="w-full !justify-start !px-5 !py-2.5 !text-white hover:!text-accent h-full text-left"
            >
              <span className="text-sm font-medium leading-snug">{l.label}</span>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}