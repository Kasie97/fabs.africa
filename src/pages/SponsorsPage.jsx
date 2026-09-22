// Inside src/pages/SponsorsPage.jsx
// Reused for both "Past Events > FABS 2024 > Sponsorship" and
// "Past Events > FABS 2025 > FABS 2025 > Sponsors".
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function SponsorsPage({ year = "2024" }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold text-brand mb-3">FABS {year}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
            Sponsors
          </h1>
          <p className="text-ink-soft leading-relaxed mb-8">
            Thank you to the partners and sponsors who made FABS {year} possible. Full sponsor
            logos and profiles will be added here.
          </p>
          <Button to="/contact-us" variant="outline">
            Become a sponsor
          </Button>
        </div>
      </Container>
    </section>
  );
}