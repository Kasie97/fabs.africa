import Container from "../ui/Container";
import Button from "../ui/Button";

export default function MembershipBand() {
  return (
    <section className="bg-brand text-white">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm text-white/80 leading-relaxed">
              Lagos, Nigeria · February 18th – 19th, 2025 · Lagos Continental Hotel
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-4">
              Amplifying Growth in Africa: From Momentum to Scale
            </h2>
          </div>
          <Button to="/register" variant="inverse" className="shrink-0">
            Register for FABS 2025
          </Button>
        </div>
      </Container>
    </section>
  );
}