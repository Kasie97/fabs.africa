// Inside src/pages/Speakers.jsx
import Photo from "../components/ui/Photo";
import Container from "../components/ui/Container";
import { fabs2024Speakers } from "../data/speakers";

export default function Speakers() {
  const { heading, heroImage, panels } = fabs2024Speakers;

  return (
    <>
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-ink sm:min-h-[460px]">
        <Photo src={heroImage} bare className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
        <h1 className="relative px-5 text-center text-2xl font-bold text-white sm:text-4xl">
          {heading}
        </h1>
      </section>

      {panels.map((panel) => (
        <section key={panel.title} className="py-12 sm:py-14">
          <Container>
            <h2 className="text-center text-lg font-bold tracking-wide text-ink uppercase mb-8">
              {panel.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {panel.people.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="aspect-[3/4] bg-paper overflow-hidden">
                    <Photo src={p.photo} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  {p.name && (
                    <>
                      <p className="mt-3 text-sm font-bold text-brand">{p.name}</p>
                      <p className="text-[11px] text-ink-soft leading-snug">{p.role}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}