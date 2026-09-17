import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { label: "Benefits of AVCA Membership", to: "/membership" },
  { label: "Meet the leadership team", to: "/about/team" },
  { label: "Discover our Data & Intelligence", to: "/data-intelligence" },
  { label: "Explore Events & Training", to: "/events" },
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

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, #10233F 40%, rgba(16,35,63,0.82) 65%, rgba(16,35,63,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.1]">
            Enabling private capital investment in Africa
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
            We champion and enable private capital investment in Africa — educating, equipping and
            connecting members and stakeholders with independent research, advocacy, professional
            development and unparalleled networking opportunities.
          </p>
          <div className="mt-9">
            <Button to="/membership" variant="primary">
              Become a member
            </Button>
          </div>
        </div>

        <ul className="relative mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 max-w-5xl">
          {links.map((l) => (
            <li key={l.label} className="bg-ink">
              <Button to={l.to} variant="ghost" className="w-full !justify-start !px-5 !py-5 text-white hover:text-gold h-full text-left">
                <span className="text-sm font-medium leading-snug">{l.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
