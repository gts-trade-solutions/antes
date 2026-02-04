"use client";

import React, { useCallback, useRef } from "react";

/** Put logo files under /public/brands */
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
  { name: "Alfa Laval", logo: "/brands/alfalaval.svg" },
  { name: "Zanotti", logo: "/brands/zanotti.png" },
  { name: "Daikin", logo: "/brands/daikin.png" },
  { name: "Guntner", logo: "/brands/apple-touch-icon.png" },
  { name: "Craftsman", logo: "/brands/craftsman.png" },
  { name: "Gandhi", logo: "/brands/gandhi.png" },
];

// ✅ Your 6 icons (place files in /public)
const WHY_ICONS = {
  delivery: "/iteration.png",
  experience: "/reputation.png",
  temperature: "/temperature.png",
  aftersales: "/support_6358289.png",
  repeat: "/team_7773673.png",
  energy: "/cpu_8202384.png",
};

export default function CompanyIntroSection() {
  const points = [
    "Highly skilled & competent team, involving consultancy, design, planning, supply, execution & after sales service.",
    "Professionals with Industry experience of more than three decades.",
    "Catering to the wide segments of Industrial refrigeration requirements for temperature range of +25 Deg C to -40 Deg C.",
    "Excellent after sales service support.",
    "Good Industry references & repeat customers.",
    "Innovative & energy-efficient refrigeration technologies for sustainable operations.",
  ];

  // ✅ Antes palette (navy + light blue + ash)
  const pointsUI = [
    {
      title: "End-to-End Delivery",
      desc: points[0],
      icon: WHY_ICONS.delivery,
      tint: "from-[#30B0E0]/12 via-[#30B0E0]/6 to-slate-200/14",
      ring: "from-[#30B0E0] via-[#30B0E0]/70 to-slate-300",
      chip: "bg-[#30B0E0]/12 text-[#002858] ring-[#30B0E0]/25",
    },
    {
      title: "30+ Years Experience",
      desc: points[1],
      icon: WHY_ICONS.experience,
      tint: "from-slate-200/18 via-[#30B0E0]/6 to-white",
      ring: "from-slate-300 via-[#30B0E0]/55 to-slate-200",
      chip: "bg-slate-200/60 text-slate-800 ring-slate-300/60",
    },
    {
      title: "Wide Temperature Range",
      desc: points[2],
      icon: WHY_ICONS.temperature,
      tint: "from-[#30B0E0]/10 via-white to-slate-200/16",
      ring: "from-[#30B0E0] via-slate-300 to-slate-200",
      chip: "bg-[#30B0E0]/12 text-[#002858] ring-[#30B0E0]/25",
    },
    {
      title: "After-Sales Support",
      desc: points[3],
      icon: WHY_ICONS.aftersales,
      tint: "from-slate-200/18 via-white to-[#30B0E0]/8",
      ring: "from-slate-300 via-slate-200 to-[#30B0E0]/60",
      chip: "bg-slate-200/60 text-slate-800 ring-slate-300/60",
    },
    {
      title: "Repeat Customers",
      desc: points[4],
      icon: WHY_ICONS.repeat,
      tint: "from-[#30B0E0]/10 via-slate-200/10 to-white",
      ring: "from-[#30B0E0] via-slate-300 to-slate-200",
      chip: "bg-[#30B0E0]/12 text-[#002858] ring-[#30B0E0]/25",
    },
    {
      title: "Energy-Efficient Tech",
      desc: points[5],
      icon: WHY_ICONS.energy,
      tint: "from-slate-200/18 via-[#30B0E0]/6 to-white",
      ring: "from-slate-300 via-[#30B0E0]/55 to-slate-200",
      chip: "bg-slate-200/60 text-slate-800 ring-slate-300/60",
    },
  ];

  const rowA = [...BRANDS, ...BRANDS];
  const rowB = [...[...BRANDS].reverse(), ...[...BRANDS].reverse()];

  return (
    <section className="relative w-full bg-white py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xxl font-semibold uppercase tracking-widest text-[#002858]">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#002858] sm:text-4xl lg:text-5xl">
            Your Trusted Cold Storage Supplier
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Quality, reliability, and customer satisfaction are values we hold
            as a company, making us your preferred cold storage solution
            provider.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pointsUI.map((item, index) => (
            <div
              key={index}
              className={[
                "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6",
                "shadow-[0_14px_40px_rgba(2,6,23,0.06)] transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(2,6,23,0.10)]",
              ].join(" ")}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.tint}`}
              />
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${item.ring}`}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-200/70" />

              <div className="relative flex items-start gap-4">
                {/* ✅ Bigger Icon tile */}
                <div
                  className={[
                    "mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1",
                    item.chip,
                    "transition group-hover:scale-[1.03]",
                  ].join(" ")}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    loading="lazy"
                    className="h-9 w-9 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div>
                  <div className="text-base font-semibold text-[#002858]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-5 h-px max-w-6xl bg-slate-200" />

        {/* Brands (2-row marquee) */}
        <section className="relative isolate py-5 md:py-10">
          <header className="mb-8 text-center md:mb-10">
            <h3 className="mb-3 text-2xl font-extrabold text-[#002858] sm:text-3xl lg:text-4xl">
              Trusted <span className="text-[#30B0E0]">Brands</span> We Deal With
            </h3>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              We work with industry leaders to deliver reliable, innovative cold
              storage solutions.
            </p>
          </header>

          <div className="relative z-10">
            <MarqueeRow
              items={rowA}
              speedMs={24000}
              direction="left"
              ariaLabel="Brand logos row 1"
            />
            <MarqueeRow
              items={rowB}
              speedMs={24000}
              direction="right"
              ariaLabel="Brand logos row 2"
            />
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-10 bg-gradient-to-r from-slate-50 to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-10 bg-gradient-to-l from-slate-50 to-transparent md:w-16" />

          <style jsx global>{`
            @keyframes slide-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            @keyframes slide-right {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }

            .marquee-mask {
              -webkit-mask-image: linear-gradient(
                to right,
                transparent,
                black 10%,
                black 90%,
                transparent
              );
              mask-image: linear-gradient(
                to right,
                transparent,
                black 10%,
                black 90%,
                transparent
              );
            }

            @media (min-width: 768px) {
              .marquee-mask {
                -webkit-mask-image: linear-gradient(
                  to right,
                  transparent,
                  black 8%,
                  black 92%,
                  transparent
                );
                mask-image: linear-gradient(
                  to right,
                  transparent,
                  black 8%,
                  black 92%,
                  transparent
                );
              }
            }

            @media (prefers-reduced-motion: reduce) {
              ul[data-marquee] {
                animation-duration: 52000ms !important;
              }
            }
          `}</style>
        </section>
      </div>
    </section>
  );
}

function MarqueeRow({ items, speedMs, direction, ariaLabel }) {
  return (
    <div className="marquee-mask">
      <div
        className="group relative select-none overflow-hidden py-4 md:py-5"
        aria-label={ariaLabel}
      >
        <ul
          data-marquee
          className="flex min-w-[200%] items-center gap-4 md:gap-6 will-change-transform [transform:translateZ(0)]"
          style={{
            animation: `${
              direction === "left" ? "slide-left" : "slide-right"
            } ${speedMs}ms linear infinite`,
          }}
        >
          {items.map((brand, i) => (
            <li key={`${brand.name}-${i}`} className="shrink-0">
              <LogoTile brand={brand} eager={i < 10} />
            </li>
          ))}
        </ul>

        <style jsx>{`
          .group:hover ul {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}

function LogoTile({ brand, eager }) {
  const ref = useRef(null);

  const handleError = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    parent.innerHTML = `<span class='text-[10px] md:text-xs text-slate-500 px-2 py-1 border border-dashed rounded border-slate-300'>${brand.name}</span>`;
  }, [brand.name]);

  return (
    <div
      className={[
        "group/item flex items-center justify-center",
        "h-16 md:h-20",
        "w-[200px] md:w-[260px]",
        "rounded-3xl",
        "border border-slate-200",
        "bg-white",
        "shadow-[0_12px_30px_rgba(2,6,23,0.06)]",
        "transition-transform duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(2,6,23,0.10)]",
      ].join(" ")}
    >
      <img
        ref={ref}
        src={brand.logo}
        alt={brand.name}
        loading={eager ? "eager" : "lazy"}
        onError={handleError}
        className={[
          "object-contain transition-transform duration-300 group-hover/item:scale-[1.03]",
          "max-h-[42px] md:max-h-[54px]",
          "max-w-[150px] md:max-w-[190px]",
          "[filter:contrast(1.10)_saturate(1.06)]",
        ].join(" ")}
      />
    </div>
  );
}
