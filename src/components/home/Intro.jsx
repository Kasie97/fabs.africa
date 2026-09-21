import { useState, useEffect } from "react";
import { statsContent, convenesContent } from "../../data/home";

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);

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

          {/* Right: Hover-expand headlines - 60% */}
          <div className="relative h-[160px] w-full md:w-[60%]">
            <div className="flex h-full flex-col gap-1.5">
              {convenesContent.map((item, i) => (
                <div
                  key={item.headline}
                  className="group relative flex-1"
                  style={{ zIndex: convenesContent.length - i }}
                >
                  <div
                    className="absolute inset-x-0 top-0 overflow-hidden rounded-xl border border-line bg-white px-4 py-2 shadow-sm transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:z-50"
                    style={{ minHeight: "100%" }}
                  >
                    <h3 className="text-xs sm:text-sm font-bold leading-snug text-forest line-clamp-2 group-hover:line-clamp-none">
                      {item.headline}
                    </h3>
                    <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr]">
                      <p className="overflow-hidden text-[11px] leading-relaxed text-ink-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:pt-2">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// import { Link } from "react-router-dom";
// import { Play } from "lucide-react";
// import { introContent } from "../../data/home";

// export default function Intro() {
//   return (
//     <section className="pt-12 sm:pt-16">
//       <div className="mx-auto max-w-4xl px-5 sm:px-8">
//         <h2 className="max-w-md text-2xl sm:text-[26px] font-bold leading-snug text-deep">
//           {introContent.heading}
//         </h2>

//         <div className="mt-6 grid gap-8 md:grid-cols-2">
//           <p className="text-sm leading-relaxed text-ink-soft">{introContent.body}</p>

//           <ul className="self-start">
//             {introContent.links.map((l) => (
//               <li key={l.label} className="border-b border-line first:pt-0">
//                 <Link
//                   to={l.to}
//                   className="flex items-center justify-between gap-4 py-3 text-[13px] font-bold text-ink hover:text-forest transition-colors"
//                 >
//                   {l.label}
//                   <Play size={12} className="shrink-0 text-forest" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }