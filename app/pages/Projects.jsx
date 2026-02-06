"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { MapPin, Warehouse, Snowflake, Ruler, Layers } from "lucide-react";

const INDIA_FIRST_ASRS_LINK = "https://example.com/india-first-asrs";

// ✅ CHANGE THIS if your sticky header is taller
const MOBILE_SCROLL_OFFSET = 90;

export default function Projects() {
  const highlights = useMemo(
    () => [
      {
        id: "01",
        title: "7300 Pallet Capacity ASRS Cold Storage – Ahmedabad",
        badge: "AS/RS",
        location: "Ahmedabad, India",
        year: "—",
        image: "/projects/asrs-01.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Capacity", value: "7,300 pallets" },
          { icon: Ruler, label: "System Height", value: "32 meters" },
          { icon: Layers, label: "System Type", value: "High-density Pallet ASRS" },
        ],
        description: (
          <>
            Delivered for IndiCold, Ahmedabad, this landmark project marks{" "}
            <a
              href={INDIA_FIRST_ASRS_LINK}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4 hover:opacity-80"
            >
              India’s first ASRS cold storage
            </a>{" "}
            facility. Designed and executed by Antes as a Cold Chain System Integrator, the project integrates
            high-density pallet ASRS, complete automation, and energy-efficient refrigeration to ensure maximum storage
            optimization, operational efficiency, and reliable temperature control.
          </>
        ),
      },
      {
        id: "02",
        title: "Ice Cream Cold Storage Project – Milky Mist",
        badge: "AS/RS",
        location: "India",
        year: "—",
        image: "/projects/asrs-02.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Capacity", value: "4,413 pallets" },
          { icon: Layers, label: "Storage", value: "3,531 MT" },
          { icon: Snowflake, label: "Operating Temp", value: "–25°C" },
          { icon: Ruler, label: "System Height", value: "37 meters" },
        ],
        description:
          "A high-density ASRS cold storage facility designed for –25°C frozen operation, delivering efficient, space-optimized, and reliable cold storage performance across 2,737 sq. meters.",
      },
      {
        id: "03",
        title: "Chaddar Cheese Cold Storage Project – Milky Mist",
        badge: "Cold Storage",
        location: "India",
        year: "—",
        image: "/projects/cold-03.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Positions", value: "5,128" },
          { icon: Layers, label: "Per Pallet", value: "250 kg" },
          { icon: Layers, label: "Total Capacity", value: "6,410 MT" },
        ],
        description:
          "A high-capacity cold storage project for Chaddar cheese, engineered for precise temperature control to ensure efficient, reliable, and quality-preserving storage for cheese products.",
      },
    ],
    []
  );

  const semiAutomatic = useMemo(
    () => [
      {
        id: "04",
        title: "Frosta Cold Storage Project – Ernakulam (Eramallur)",
        badge: "Semi-Automatic",
        location: "Ernakulam (Eramallur), Kerala",
        year: "—",
        image: "/projects/semi-04.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Capacity", value: "760 pallets" },
          { icon: Snowflake, label: "Operating Temp", value: "–18°C to –20°C" },
          { icon: Ruler, label: "Structure Height", value: "12 meters" },
        ],
        description:
          "Antes delivered a fully integrated cold chain solution including refrigeration systems, insulated panels, MHE, and cold storage doors—ensuring efficient and reliable frozen storage operations.",
      },
      {
        id: "05",
        title: "AOT (Automatic Ocean Treasure) Cold Storage Project",
        badge: "Semi-Automatic",
        location: "India",
        year: "—",
        image: "/projects/semi-05.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Capacity", value: "2,020 pallets" },
          { icon: Layers, label: "Per Pallet", value: "1,000 kg" },
          { icon: Layers, label: "Total Capacity", value: "2,020 tons" },
          { icon: Snowflake, label: "Operating Temp", value: "–20°C to –23°C" },
        ],
        description:
          "Designed for reliable temperature control and efficient pallet handling, supporting high-performance frozen storage operations at scale.",
      },
      {
        id: "06",
        title: "Yashaswi Cold Storage Project – 880 Pallet Capacity",
        badge: "Semi-Automatic",
        location: "India",
        year: "—",
        image: "/projects/semi-06.jpg",
        metrics: [
          { icon: Warehouse, label: "Pallet Capacity", value: "880 pallets" },
          { icon: Ruler, label: "Structure Height", value: "12 meters" },
        ],
        description:
          "A reliable and scalable cold storage solution engineered for consistent temperature control, efficient space utilization, smooth material movement, and long-term operational efficiency.",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(null);

  // ✅ IMPORTANT: attach refs to wrapper divs (not Card)
  const cardRefs = useRef({});
  const pendingScrollId = useRef(null);

  const isMobile = () =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;

  // ✅ Scroll with offset (works with sticky headers)
  const scrollToCardWithOffset = (id) => {
    const el = cardRefs.current[id];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const top = rect.top + window.pageYOffset - MOBILE_SCROLL_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const id = pendingScrollId.current;
    if (!id) return;

    if (isMobile()) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToCardWithOffset(id);
          pendingScrollId.current = null;
        });
      });
    } else {
      pendingScrollId.current = null;
    }
  }, [selectedId]);

  const handleSelect = (id) => {
    const next = selectedId === id ? null : id;
    pendingScrollId.current = next;
    setSelectedId(next);
  };

  const Pill = ({ text }) => (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      <MapPin className="h-3.5 w-3.5 text-slate-500" />
      {text}
    </span>
  );

  const Metric = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white">
        <Icon className="h-4 w-4" />
      </div>
      <div className="leading-tight">
        <div className="text-[11px] text-slate-500">{label}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );

  // ✅ Mobile details inline (no gap, attached)
  const MobileDetails = ({ p }) => (
    <div className="lg:hidden border-t border-black/10 bg-white">
      <div className="px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
              {p.badge}
            </div>
            <h3 className="mt-1 text-base font-semibold text-slate-900">{p.title}</h3>
          </div>
          <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            {p.id}
          </div>
        </div>

        <div className="mt-3">
          <Pill text={p.location} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2">
          {p.metrics?.map((m, idx) => (
            <Metric key={idx} icon={m.icon} label={m.label} value={m.value} />
          ))}
        </div>

        <div className="mt-4 text-sm leading-relaxed text-slate-600">{p.description}</div>

        <div className="mt-4">
          <Button
            size="sm"
            variant="outline"
            className="rounded-full border-black/10"
            onClick={() => handleSelect(p.id)}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );

  const renderProjectCard = (p) => {
    const isSelected = selectedId === p.id;

    return (
      // ✅ wrapper div holds the ref
      <div key={p.id} ref={(el) => (cardRefs.current[p.id] = el)}>
        <Card
          className={[
            "overflow-hidden border-black/10 bg-white shadow-sm transition hover:shadow-lg",
            isSelected ? "ring-2 ring-slate-900/20" : "",
          ].join(" ")}
        >
          <div className="relative">
            <div className="relative h-[220px] overflow-hidden sm:h-[240px]">
              <img
                src={p.image || "/projects/placeholder.jpg"}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className="text-lg font-extrabold text-white">{p.id}</div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {p.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-16">
                <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                  {p.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <Pill text={p.location} />

              <Button
                size="sm"
                onClick={() => handleSelect(p.id)}
                className={[
                  "rounded-full bg-white text-slate-900 border border-black/10 hover:bg-slate-50",
                  isSelected ? "opacity-80" : "",
                ].join(" ")}
              >
                {isSelected ? "Selected" : "Select"}
              </Button>
            </div>
          </div>

          {/* ✅ MOBILE inline details (attached) */}
          {isSelected ? <MobileDetails p={p} /> : null}

          {/* ✅ DESKTOP unchanged */}
          <CardContent className="hidden lg:block p-6 pt-2">
            <div className="flex items-start justify-between gap-4">
              <div className="text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
                {p.badge}
              </div>
              <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {p.id}
              </div>
            </div>

            <h3 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h3>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {p.metrics?.map((m, idx) => (
                <Metric key={idx} icon={m.icon} label={m.label} value={m.value} />
              ))}
            </div>

            <div className="mt-5 text-sm leading-relaxed text-slate-600">{p.description}</div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const HeaderBlock = () => (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(56,189,248,0.10),transparent_55%),radial-gradient(900px_500px_at_85%_90%,rgba(15,23,42,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
          Project Portfolio
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Project Highlights
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Showcasing some of our prestigious projects in AS/RS and semi-automatic cold storage—executed with precision
          and smart engineering.
        </p>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeaderBlock />

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">AS/RS Cold Storage</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            High-performance automated cold storage projects designed for maximum space utilization, speed, and
            temperature reliability.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {highlights.map(renderProjectCard)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Semi-Automatic Cold Storage</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Scalable cold storage facilities with optimized pallet handling and engineered temperature control for
            dependable daily operations.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {semiAutomatic.map(renderProjectCard)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
