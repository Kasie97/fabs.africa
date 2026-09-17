import Container from "../ui/Container";
import Button from "../ui/Button";

export default function MembershipBand() {
  return (
    <section className="bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm text-white/70 leading-relaxed">
              Our members include Fund Managers, Direct Investors, Third Party Fund Managers,
              Institutional Investors, Foundations, Financial Institutions, Professional Services
              Firms and Academic Institutions.
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-medium mt-4">
              Join us to collectively build a prosperous Africa
            </h2>
          </div>
          <Button to="/membership" variant="primary" className="shrink-0">
            Why become an AVCA member?
          </Button>
        </div>
      </Container>
    </section>
  );
}
