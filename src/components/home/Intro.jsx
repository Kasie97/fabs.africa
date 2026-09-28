// src/components/home/Intro.jsx
import { useState, useEffect } from "react";
import { statsContent, convenesContent } from "../../data/home";

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openConvene, setOpenConvene] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statsContent.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    // No negative margin any more: this section sits fully below the hero.
    <section className="pb-4 pt-10 sm:pt-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left: stats carousel */}
          <div className="relative h-[200px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 md:w-[40%]">
            {statsContent.map((stat, i) => (
              <div
                key={stat.label}
                className={`absolute inset-0 flex flex-col items-center justify-center px-8 text-center transition-opacity duration-700 ease-in-out ${
                  i === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                style={{ backgroundColor: stat.bg }}
                aria-hidden={i !== activeIndex}
              >
                <span className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-white">
                  {stat.label}
                </span>
                <p className="mt-2 line-clamp-2 max-w-xs text-xs leading-snug text-white/90">
                  {stat.description}
                </p>
              </div>
            ))}

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {statsContent.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: tap/hover-expand headlines (state-driven, so it works on touch) */}
          <div className="relative min-h-[200px] w-full md:h-[200px] md:w-[60%]">
            <div className="flex h-full flex-col gap-2.5">
              {convenesContent.map((item, i) => {
                const isOpen = openConvene === i;
                return (
                  <div
                    key={item.headline}
                    className="relative min-h-[56px] flex-1"
                    style={{ zIndex: isOpen ? 50 : convenesContent.length - i }}
                    onMouseEnter={() => setOpenConvene(i)}
                    onMouseLeave={() => setOpenConvene((cur) => (cur === i ? null : cur))}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenConvene((cur) => (cur === i ? null : i))}
                      className={`absolute inset-x-0 top-0 flex w-full items-start gap-3 overflow-hidden rounded-2xl border bg-white px-4 py-3 text-left transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "border-brand/30 shadow-2xl"
                          : "border-line shadow-md hover:shadow-lg"
                      }`}
                      style={{ minHeight: "100%" }}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                          isOpen ? "bg-brand text-white" : "bg-brand/10 text-brand"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <h3
                          className={`text-sm font-bold leading-snug text-ink ${
                            isOpen ? "" : "line-clamp-2"
                          }`}
                        >
                          {item.headline}
                        </h3>
                        <span
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <span
                            className={`overflow-hidden text-xs leading-relaxed text-ink-soft transition-opacity duration-300 ${
                              isOpen ? "pt-2 opacity-100" : "opacity-0"
                            }`}
                          >
                            {item.body}
                          </span>
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`mt-1 h-4 w-4 shrink-0 text-brand transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}