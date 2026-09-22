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
    <section className="pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Left: Carousel - 40% */}
          <div className="relative h-[160px] w-full overflow-hidden rounded-2xl md:w-[40%]">
            {statsContent.map((stat, i) => (
              <div
                key={stat.label}
                className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ease-in-out ${
                  i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{ backgroundColor: stat.bg }}
              >
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm font-semibold text-white">
                  {stat.label}
                </span>
                <p className="mt-1.5 max-w-xs text-[10px] leading-snug text-white/90 line-clamp-2">
                  {stat.description}
                </p>
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-1.5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {statsContent.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === activeIndex ? "w-4 bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: tap/hover-expand headlines - 60%. Uses a real button and
              React state (not CSS :hover) so it also works on touch/mobile. */}
          <div className="relative h-[160px] w-full md:w-[60%]">
            <div className="flex h-full flex-col gap-1.5">
              {convenesContent.map((item, i) => {
                const isOpen = openConvene === i;
                return (
                  <div
                    key={item.headline}
                    className="relative flex-1"
                    style={{ zIndex: isOpen ? 50 : convenesContent.length - i }}
                    onMouseEnter={() => setOpenConvene(i)}
                    onMouseLeave={() =>
                      setOpenConvene((cur) => (cur === i ? null : cur))
                    }
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenConvene((cur) => (cur === i ? null : i))
                      }
                      className={`absolute inset-x-0 top-0 w-full text-left overflow-hidden rounded-xl border border-line bg-white px-4 py-2 shadow-sm transition-shadow duration-300 ease-in-out ${
                        isOpen ? "shadow-xl" : ""
                      }`}
                      style={{ minHeight: "100%" }}
                    >
                      <h3
                        className={`text-xs sm:text-sm font-bold leading-snug text-ink ${
                          isOpen ? "" : "line-clamp-2"
                        }`}
                      >
                        {item.headline}
                      </h3>
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <p
                          className={`overflow-hidden text-[11px] leading-relaxed text-ink-soft transition-opacity duration-300 ${
                            isOpen ? "opacity-100 pt-2" : "opacity-0"
                          }`}
                        >
                          {item.body}
                        </p>
                      </div>
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