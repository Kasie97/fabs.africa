// Inside src/pages/MainProgramPage.jsx
import Container from "../components/ui/Container";

export default function MainProgramPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold text-brand mb-3">FABS 2024</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5">
            Main Program
          </h1>
          <p className="text-ink-soft leading-relaxed">
            The full agenda from the main summit days will be published here — keynotes,
            panels and networking sessions.
          </p>
        </div>
      </Container>
    </section>
  );
}