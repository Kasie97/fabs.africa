// Inside src/pages/Accommodation.jsx
import Container from "../components/ui/Container";
import Photo from "../components/ui/Photo";
import { accommodation } from "../data/accommodation";

export default function Accommodation() {
  const { official, alternatives } = accommodation;

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                {official.heading}
              </h1>
              <p className="text-sm text-ink-soft leading-relaxed">{official.intro}</p>
              <p className="text-sm text-ink-soft leading-relaxed mt-3">{official.note}</p>
              <a
                href={official.cta.href}
                className="inline-block mt-6 bg-accent text-ink font-semibold text-sm px-5 py-2.5 underline hover:brightness-95"
              >
                {official.cta.label}
              </a>
            </div>
            <div className="shadow-lg">
              <Photo src={official.image} alt="Lagos Continental Hotel" className="w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
              {alternatives.heading}
            </h2>
            <p className="text-sm text-ink-soft mt-2">{alternatives.subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            <Photo src={alternatives.image} alt="" className="w-full h-full object-cover shadow-md" />
            <div className="bg-white p-6 shadow-md">
              <ul className="space-y-3">
                {alternatives.hotels.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <span className="text-brand font-bold">✓</span> {h}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-soft leading-relaxed mt-5">
                Get in touch at{" "}
                <a href="mailto:info@fabs.africa" className="text-brand underline">
                  info@fabs.africa
                </a>{" "}
                with any questions on booking accommodation for your time at the Francophone
                Africa Business Summit!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}