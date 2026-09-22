// Inside src/pages/WhyLagos.jsx
import Photo from "../components/ui/Photo";
import Container from "../components/ui/Container";
import { whyLagos } from "../data/whyLagos";

export default function WhyLagos() {
  return (
    <>
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-ink sm:min-h-[460px]">
        <Photo src={whyLagos.heroImage} bare className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        <h1 className="relative px-5 text-center text-2xl font-bold text-accent sm:text-4xl">
          {whyLagos.heading}
        </h1>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ul className="space-y-6">
              {whyLagos.points.map((text, i) => (
                <li key={i} className="flex items-start gap-3 border border-line bg-white p-5 shadow-sm">
                  <span className="mt-0.5 text-brand font-bold">✓</span>
                  <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {whyLagos.pointsRight.map((text, i) => (
                <li key={i} className="flex items-start gap-3 border border-line bg-white p-5 shadow-sm">
                  <span className="mt-0.5 text-brand font-bold">✓</span>
                  <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}