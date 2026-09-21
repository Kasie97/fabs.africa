import { Award, CircleDollarSign, Building2, BadgeCheck, Check, ArrowRight } from "lucide-react";
import Photo from "../components/ui/Photo";
import { epenaIntro, epenaStats, gateway } from "../data/epena";

const statIcons = {
  award: Award,
  dollar: CircleDollarSign,
  building: Building2,
  badge: BadgeCheck,
};

export default function EpenaLaw() {
  return (
    <>
      {/* Intro: photo collage + copy */}
      <section className="relative overflow-hidden pt-12 sm:pt-16">
        {/* Decorative dotted texture, fades out toward the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block"
          style={{
            backgroundImage: "radial-gradient(circle, #d4d4d4 1.6px, transparent 1.7px)",
            backgroundSize: "16px 16px",
            WebkitMaskImage: "radial-gradient(ellipse at 20% 30%, black 0%, transparent 70%)",
            maskImage: "radial-gradient(ellipse at 20% 30%, black 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid max-w-5xl items-start gap-10 px-5 sm:px-8 md:grid-cols-[1.05fr_1fr]">
          {/* Collage */}
          <div className="relative mx-auto aspect-[9/8] w-full max-w-[460px]">
            <div className="absolute left-0 top-0 h-[80%] w-[63%] bg-white p-1.5 shadow-lg ring-1 ring-black/5">
              <Photo
                src={epenaIntro.imageTop.src}
                alt={epenaIntro.imageTop.alt}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Red badge */}
            <div
              className="absolute left-[62%] top-[9%] flex w-[38%] flex-col bg-brand py-3 pl-3 pr-5 text-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0 100%)" }}
            >
              <span className="text-2xl font-bold leading-none sm:text-3xl">
                {epenaIntro.badge.value}
              </span>
              <span className="mt-1 text-[9px] leading-tight">{epenaIntro.badge.line1}</span>
              <span className="text-[9px] font-bold leading-tight">{epenaIntro.badge.line2}</span>
            </div>

            <div className="absolute left-[47%] top-[41%] z-10 h-[59%] w-[49%] bg-white p-1.5 shadow-lg ring-1 ring-black/5">
              <Photo
                src={epenaIntro.imageBottom.src}
                alt={epenaIntro.imageBottom.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <h1 className="text-2xl font-semibold leading-tight text-ink sm:text-[28px]">
              {epenaIntro.heading}
            </h1>
            <p className="mt-2 text-sm font-medium leading-snug text-accent-dark">
              {epenaIntro.tagline}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft sm:text-[13px]">
              {epenaIntro.body}
            </p>

            <div className="mt-6 border-l-4 border-accent bg-white p-5 shadow-md ring-1 ring-black/5">
              <p className="text-xs font-medium leading-relaxed text-ink">{epenaIntro.callout}</p>
            </div>

            <a
              href={epenaIntro.readMore.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white transition hover:brightness-95"
            >
              {epenaIntro.readMore.label}
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white">
                <ArrowRight size={10} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="px-5 pt-12 sm:px-8 sm:pt-16">
        <div className="mx-auto max-w-5xl border border-line bg-neutral-50 p-5 shadow-sm sm:p-6">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {epenaStats.map((s) => {
              const Icon = statIcons[s.icon];
              return (
                <li key={s.label} className="flex items-start gap-3">
                  <Icon size={38} strokeWidth={1.5} className="shrink-0 text-brand" />
                  <div>
                    <p className="flex items-baseline gap-1.5 font-bold leading-none text-ink">
                      <span className="text-3xl">{s.value}</span>
                      {s.suffix && (
                        // Short suffixes ("+") render large; longer ones ("B USD") render small.
                        <span className={s.suffix.length > 1 ? "text-sm" : "text-2xl"}>
                          {s.suffix}
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-snug text-ink-soft">{s.label}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Gateway: timeline + map */}
      <section className="mt-14 bg-neutral-100 py-12 sm:mt-16 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-ink">{gateway.heading}</h2>

          <div className="mt-6 grid items-start gap-8 md:grid-cols-[1.45fr_1fr]">
            <ol className="space-y-5">
              {gateway.points.map((text, i) => (
                <li key={i} className="relative flex items-start gap-4">
                  {/* Connector line down to the next check */}
                  {i < gateway.points.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-3 top-9 h-[calc(100%+20px)] w-px bg-neutral-300"
                    />
                  )}
                  <span className="relative z-10 mt-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-brand shadow-sm">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <p className="flex-1 bg-white p-4 text-xs leading-relaxed text-ink-soft shadow-md">
                    {text}
                  </p>
                </li>
              ))}
            </ol>

            <div>
              <div className="bg-white p-4 shadow-sm">
                <Photo
                  src={gateway.map.src}
                  alt={gateway.map.alt}
                  className="aspect-square w-full object-contain"
                />
              </div>
              {gateway.map.showLegend && (
                <ul className="mt-3 space-y-2 bg-white p-4 text-[10px] leading-snug text-ink-soft">
                  {gateway.legend.map((l) => (
                    <li key={l.label} className="flex items-start gap-2">
                      <span
                        className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: l.color }}
                      />
                      {l.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}