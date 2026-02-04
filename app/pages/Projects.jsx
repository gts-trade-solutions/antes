"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Calendar, Warehouse, Snowflake, Ruler, Layers } from "lucide-react";

// ✅ Replace with your actual link (kept as a placeholder)
const INDIA_FIRST_ASRS_LINK = "https://example.com/india-first-asrs";

export default function Projects() {
  // ✅ Updated to YOUR “Project Highlights” content (AS/RS + Semi-automatic)
  const highlights = [
    {
      id: "01",
      title: "7300 Pallet Capacity ASRS Cold Storage – Ahmedabad",
      badge: "AS/RS",
      location: "Ahmedabad, India",
      year: "—",
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
          facility. Designed and executed by Antes Global as a Cold Chain System Integrator, the project integrates
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
      metrics: [
        { icon: Warehouse, label: "Pallet Positions", value: "5,128" },
        { icon: Layers, label: "Per Pallet", value: "250 kg" },
        { icon: Layers, label: "Total Capacity", value: "6,410 MT" },
      ],
      description:
        "A high-capacity cold storage project for Chaddar cheese, engineered for precise temperature control to ensure efficient, reliable, and quality-preserving storage for cheese products.",
    },
  ];

  const semiAutomatic = [
    {
      id: "04",
      title: "Frosta Cold Storage Project – Ernakulam (Eramallur)",
      badge: "Semi-Automatic",
      location: "Ernakulam (Eramallur), Kerala",
      year: "—",
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "760 pallets" },
        { icon: Snowflake, label: "Operating Temp", value: "–18°C to –20°C" },
        { icon: Ruler, label: "Structure Height", value: "12 meters" },
      ],
      description:
        "Antes Global delivered a fully integrated cold chain solution including refrigeration systems, insulated panels, MHE, and cold storage doors—ensuring efficient and reliable frozen storage operations.",
    },
    {
      id: "05",
      title: "AOT (Automatic Ocean Treasure) Cold Storage Project",
      badge: "Semi-Automatic",
      location: "India",
      year: "—",
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
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "880 pallets" },
        { icon: Ruler, label: "Structure Height", value: "12 meters" },
      ],
      description:
        "A reliable and scalable cold storage solution engineered for consistent temperature control, efficient space utilization, smooth material movement, and long-term operational efficiency.",
    },
  ];

  const Pill = ({ text }) => (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
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

  const ProjectCard = (p) => (
    <Card key={p.id} className="overflow-hidden border-black/10 bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative">
        <div className="h-24 bg-gradient-to-br from-slate-900 to-slate-700" />
        <div className="absolute left-5 top-5 flex items-center gap-2">
          <div className="text-2xl font-bold text-white/90">{p.id}</div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {p.badge}
          </span>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Pill text={p.location} />
          {p.year && p.year !== "—" ? <Pill text={p.year} /> : null}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {p.metrics?.map((m, idx) => (
            <Metric key={idx} icon={m.icon} label={m.label} value={m.value} />
          ))}
        </div>

        <div className="mt-5 text-sm leading-relaxed text-slate-600">{p.description}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
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
            Showcasing some of our prestigious projects in AS/RS and semi-automatic cold storage—executed with
            precision and smart engineering.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Pill text="AS/RS Cold Storage" />
            <Pill text="Semi-Automatic Cold Storage" />
            <Pill text="System Integration" />
          </div>
        </div>
      </section>

      {/* AS/RS */}
      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">AS/RS Cold Storage</h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                High-performance automated cold storage projects designed for maximum space utilization, speed, and
                temperature reliability.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {highlights.map(ProjectCard)}
          </div>
        </div>
      </section>

      {/* Semi-automatic */}
      <section className="py-12 sm:py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Semi-Automatic Cold Storage</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Scalable cold storage facilities with optimized pallet handling and engineered temperature control for
              dependable daily operations.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {semiAutomatic.map(ProjectCard)}
          </div>
        </div>
      </section>

      {/* No CTA / No Contact button */}
      <Footer />
    </div>
  );
}
