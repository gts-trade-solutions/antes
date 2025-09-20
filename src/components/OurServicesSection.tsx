"use client";
import React from "react";

/**
 * PURE REACT VERSION (no Next.js Image)
 *
 * ✅ Put logo files under: /public/brands
 *    Then reference them as: "/brands/<file>" (works in CRA, Vite, Next, etc.)
 * ✅ Prefer ASCII filenames only (rename `Güntner.png` -> `guntner.png`).
 */
const BRANDS = [
  { name: "Emerson", logo: "/brands/brand-image-one.png" },
  { name: "Danfoss", logo: "/brands/brand-image-two.png" },
  { name: "Bitzer", logo: "/brands/brand-image-three.png" },
  { name: "Fascol", logo: "/brands/brand-image-four.png" },
  { name: "LU-VE", logo: "/brands/brand-image-five.png" },
  { name: "Hyundai", logo: "/brands/brand-image-six.png" },
  { name: "Linde", logo: "/brands/brand-image-seven.png" },
  { name: "Isoflex", logo: "/brands/brand-image-eight.png" },
  { name: "Metaflex", logo: "/brands/brand-image-nine.png" },
  { name: "Nilkamal", logo: "/brands/brand-image-ten.png" },
  { name: "Kingspan", logo: "/brands/brand-image-eleven.png" },
  { name: "Dorin", logo: "/brands/dorin.jpg" },
  { name: "Bock", logo: "/brands/bock.svg" },
  { name: "Guntner", logo: "/brands/guntner.png" },
  { name: "Alfa Laval", logo: "/brands/alfalaval.svg" },
  { name: "Zanotti", logo: "/brands/zanotti.png" },
  { name: "Daikin", logo: "/brands/daikin.png" },
];

/**
 * Two-line, continuously-scrolling brands carousel (React + Tailwind only):
 * - Images ALWAYS visible (fixed container height with <img className="h-12 w-auto" />)
 * - Two rows scroll in opposite directions with seamless loop
 * - No external carousel libs
 */
export default function BrandsCarouselTwoRow() {
  const rowA = [...BRANDS, ...BRANDS];
  const rowB = [...BRANDS].reverse();
  const rowBLoop = [...rowB, ...rowB];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-nrs-light-blue/5 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <header className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-nrs-navy mb-4">
            Trusted <span className="text-nrs-blue">Brands</span> We Deal With
          </h2>
          <p className="text-nrs-dark-gray max-w-3xl mx-auto leading-relaxed text-lg">
            We work with industry leaders to deliver reliable, innovative cold storage solutions.
          </p>
        </header>

        <MarqueeRow items={rowA} speedMs={26000} direction="left" ariaLabel="Brand logos row 1" />
        <MarqueeRow items={rowBLoop} speedMs={26000} direction="right" ariaLabel="Brand logos row 2" />
      </div>

      {/* Soft edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Keyframes (scoped) */}
      <style>{`
        @keyframes slide-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slide-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
    </section>
  );
}

function MarqueeRow({ items, speedMs = 24000, direction = "left", ariaLabel }) {
  return (
    <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="relative overflow-hidden select-none py-6 group" aria-label={ariaLabel} role="marquee">
        {/* min-w-[200%] ensures the duplicated list spans 2x viewport width for seamless loop */}
        <ul
          className="flex gap-8 items-center will-change-transform min-w-[200%]"
          style={{
            animation: `${direction === "left" ? "slide-left" : "slide-right"} ${speedMs}ms linear infinite`,
          }}
        >
          {items.map((brand, i) => (
            <li
              key={`${brand.name}-${i}`}
              className="group/item flex items-center justify-center px-6 h-24 rounded-xl bg-white/80 backdrop-blur shadow-md border border-gray-100 hover:shadow-2xl transition duration-300"
            >
              <SafeLogo brand={brand} eager={i < 10} />
            </li>
          ))}
        </ul>

        {/* Pause on hover */}
        <style>{`.group:hover ul { animation-play-state: paused; }`}</style>
      </div>
    </div>
  );
}

function SafeLogo({ brand, eager = false }) {
  const ref = React.useRef(null);

  const handleError = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    parent.innerHTML = `<span class='text-xs text-gray-500 px-2 py-1 border border-dashed rounded'>${brand.name}</span>`;
  }, [brand.name]);

  return (
    <div className="relative h-12 w-[180px] flex items-center justify-center">
      <img
        ref={ref}
        src={brand.logo}
        alt={brand.name}
        loading={eager ? "eager" : "lazy"}
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover/item:scale-110"
        onError={handleError}
      />
    </div>
  );
}
