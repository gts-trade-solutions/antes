"use client";

import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, CardContent } from "../components/ui/card";
import {
  MapPin,
  Calendar,
  Warehouse,
  Snowflake,
  Ruler,
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
  Info,
  Building2,
  Cog,
  ThermometerSnowflake,
  Filter,
} from "lucide-react";

const INDIA_FIRST_ASRS_LINK = "https://example.com/india-first-asrs";

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "asrs", label: "AS/RS" },
  { key: "semi", label: "Semi-Automatic" },
];

export default function Projects() {
  const highlights = [
    {
      id: "01",
      title: "7300 Pallet Capacity ASRS Cold Storage – Ahmedabad",
      badge: "AS/RS",
      category: "asrs",
      location: "Ahmedabad, India",
      year: "—",
      cover: "/projects/01/cover.jpg",
      images: ["/projects/01/1.jpg", "/projects/01/2.jpg", "/projects/01/3.jpg", "/projects/01/4.jpg"],
      details: [
        { icon: Building2, label: "Client", value: "IndiCold" },
        { icon: Cog, label: "Automation", value: "High-density pallet ASRS" },
        { icon: ThermometerSnowflake, label: "Temperature", value: "Frozen / multi-zone (as per design)" },
        { icon: Info, label: "Scope", value: "System integration • ASRS • Refrigeration • Controls" },
      ],
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
          facility, featuring a 7,300-pallet capacity and an impressive 32-meter-high automated storage system. Designed
          and executed by Antes Global as a Cold Chain System Integrator, the project integrates high-density pallet
          ASRS, complete automation, and energy-efficient refrigeration to ensure maximum storage optimization,
          operational efficiency, and reliable temperature control.
        </>
      ),
    },
    {
      id: "02",
      title: "Ice cream Cold Storage Project – Milky Mist",
      badge: "AS/RS",
      category: "asrs",
      location: "India",
      year: "—",
      cover: "/projects/02/cover.jpg",
      images: ["/projects/02/1.jpg", "/projects/02/2.jpg", "/projects/02/3.jpg"],
      details: [
        { icon: Building2, label: "Client", value: "Milky Mist" },
        { icon: ThermometerSnowflake, label: "Operating Temp", value: "–25°C" },
        { icon: Cog, label: "Automation", value: "ASRS high density" },
        { icon: Info, label: "Footprint", value: "2,737 sq. meters" },
      ],
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "4,413 pallets" },
        { icon: Layers, label: "Storage", value: "3,531 MT" },
        { icon: Snowflake, label: "Operating Temp", value: "–25°C" },
        { icon: Ruler, label: "System Height", value: "37 meters" },
      ],
      description:
        "A high-density ASRS cold storage facility featuring 4,413 pallet capacity, 3,531 MT storage, and –25°C frozen operation. Designed with a 37-meter-high automated system across 2,737 sq. meters, this project delivers efficient, space-optimized, and reliable cold storage performance.",
    },
    {
      id: "03",
      title: "Chaddar Cheese Cold Storage Project – Milky Mist",
      badge: "Cold Storage",
      category: "asrs",
      location: "India",
      year: "—",
      cover: "/projects/03/cover.jpg",
      images: ["/projects/03/1.jpg", "/projects/03/2.jpg", "/projects/03/3.jpg"],
      details: [
        { icon: Building2, label: "Client", value: "Milky Mist" },
        { icon: ThermometerSnowflake, label: "Product", value: "Chaddar cheese" },
        { icon: Info, label: "Focus", value: "Precise temperature control" },
        { icon: Cog, label: "System", value: "Cold storage + temperature control" },
      ],
      metrics: [
        { icon: Warehouse, label: "Pallet Positions", value: "5,128" },
        { icon: Layers, label: "Per Pallet", value: "250 kg" },
        { icon: Layers, label: "Total Capacity", value: "6,410 MT" },
      ],
      description:
        "A high-capacity cold storage project delivered for Chaddar cheese at Milky Mist, featuring 5,128 pallet positions with 250 kg per pallet and a total storage capacity of 6,410 metric tons. Engineered for precise temperature control, this facility ensures efficient, reliable, and quality-preserving cold storage for cheese products.",
    },
  ];

  const semiAutomatic = [
    {
      id: "04",
      title: "Frosta Cold Storage Project – Ernakulam (Eramallur)",
      badge: "Semi-Automatic",
      category: "semi",
      location: "Ernakulam (Eramallur), Kerala",
      year: "—",
      cover: "/projects/04/cover.jpg",
      images: ["/projects/04/1.jpg", "/projects/04/2.jpg", "/projects/04/3.jpg"],
      details: [
        { icon: Info, label: "Scope", value: "Refrigeration • Panels • MHE • Doors" },
        { icon: ThermometerSnowflake, label: "Operating Temp", value: "–18°C to –20°C" },
        { icon: Cog, label: "Handling", value: "Integrated cold chain solution" },
        { icon: Building2, label: "Location", value: "Ernakulam (Eramallur)" },
      ],
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "760 pallets" },
        { icon: Snowflake, label: "Operating Temp", value: "–18°C to –20°C" },
        { icon: Ruler, label: "Structure Height", value: "12 meters" },
      ],
      description:
        "Delivered for Frosta, Ernakulam (Eramallur), this frozen cold storage facility operates at –18°C to –20°C with a 760-pallet capacity in a 12-meter-high structure. Antes Global provided a fully integrated cold chain solution, including refrigeration systems, insulated panels, MHE, and cold storage doors, ensuring efficient and reliable operations.",
    },
    {
      id: "05",
      title: "AOT (Automatic Ocean Treasure) Cold Storage Project",
      badge: "Semi-Automatic",
      category: "semi",
      location: "India",
      year: "—",
      cover: "/projects/05/cover.jpg",
      images: ["/projects/05/1.jpg", "/projects/05/2.jpg", "/projects/05/3.jpg"],
      details: [
        { icon: ThermometerSnowflake, label: "Operating Temp", value: "–20°C to –23°C" },
        { icon: Layers, label: "Total Capacity", value: "2,020 tons" },
        { icon: Layers, label: "Per Pallet", value: "1,000 kg" },
        { icon: Info, label: "Focus", value: "Reliable temperature control + pallet handling" },
      ],
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "2,020 pallets" },
        { icon: Layers, label: "Per Pallet", value: "1,000 kg" },
        { icon: Layers, label: "Total Capacity", value: "2,020 tons" },
        { icon: Snowflake, label: "Operating Temp", value: "–20°C to –23°C" },
      ],
      description:
        "Delivered for AOT (Automatic Ocean Treasure), this frozen cold storage facility operates at –20°C to –23°C and offers a 2,020-pallet capacity with 1,000 kg per pallet, totaling 2,020 tons. Designed for reliable temperature control and efficient pallet handling, the project supports high-performance frozen storage operations.",
    },
    {
      id: "06",
      title: "Yashaswi Cold Storage Project – 880 Pallet Capacity",
      badge: "Semi-Automatic",
      category: "semi",
      location: "India",
      year: "—",
      cover: "/projects/06/cover.jpg",
      images: ["/projects/06/1.jpg", "/projects/06/2.jpg", "/projects/06/3.jpg"],
      details: [
        { icon: Warehouse, label: "Pallet Capacity", value: "880 pallets" },
        { icon: Ruler, label: "Structure Height", value: "12 meters" },
        { icon: Info, label: "Outcome", value: "Efficient space utilization + smooth operations" },
        { icon: Cog, label: "Design", value: "Scalable + long-term operational efficiency" },
      ],
      metrics: [
        { icon: Warehouse, label: "Pallet Capacity", value: "880 pallets" },
        { icon: Ruler, label: "Structure Height", value: "12 meters" },
      ],
      description:
        "Delivered for Yashaswi, this cold storage facility is designed with an 880-pallet storage capacity and a 12-meter-high structure, enabling efficient space utilization and streamlined warehouse operations. Antes Global provided a reliable and scalable cold storage solution, engineered to support consistent temperature control, smooth material movement, and long-term operational efficiency.",
    },
  ];

  const allProjects = useMemo(() => [...highlights, ...semiAutomatic], [highlights, semiAutomatic]);

  const [activeCat, setActiveCat] = useState("all");
  const filtered = useMemo(() => {
    if (activeCat === "all") return allProjects;
    return allProjects.filter((p) => p.category === activeCat);
  }, [activeCat, allProjects]);

  const [selectedId, setSelectedId] = useState(filtered?.[0]?.id || allProjects?.[0]?.id || "01");

  useEffect(() => {
    const exists = filtered.some((p) => p.id === selectedId);
    if (!exists) setSelectedId(filtered?.[0]?.id || "");
  }, [activeCat, filtered, selectedId]);

  const selected = useMemo(() => filtered.find((p) => p.id === selectedId) || filtered[0], [filtered, selectedId]);

  // Lightbox state
  const [lightbox, setLightbox] = useState({ open: false, title: "", images: [], index: 0 });
  const openLightbox = (title, images, index = 0) => setLightbox({ open: true, title, images, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));
  const prevImage = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  const nextImage = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.open]);

  return (
    // ✅ white background even in dark mode
    <div className="min-h-screen bg-white text-slate-900 dark:bg-white dark:text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16 dark:bg-white">
        <div className="absolute inset-0 bg-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* ✅ use your content */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 dark:border-black/10 dark:bg-white dark:text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-900/70" />
              PROJECT PORTFOLIO
            </div>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Projects Highlights
            </h1>

            <div className="mt-3 text-base font-semibold text-slate-900">Successful implementations</div>

            <p className="mx-auto mt-4 max-w-3xl text-justify text-base leading-relaxed text-slate-600 sm:text-lg">
              Featuring high-performance cold storage and ASRS projects executed with precision and smart engineering.
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-justify text-sm leading-relaxed text-slate-600 sm:text-base">
              Showcasing some of our prestigious projects in AS/RS and semi-automatic cold storage.
            </p>

            {/* Tabs */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-black/10 dark:bg-white dark:text-slate-700">
                <Filter className="h-3.5 w-3.5" />
                Filter:
              </span>

              {CATEGORIES.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveCat(c.key)}
                  className={[
                    "rounded-full border px-4 py-2 text-xs font-semibold transition",
                    activeCat === c.key
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-black/10 dark:bg-white dark:text-slate-700 dark:hover:bg-slate-50",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMN PAGE */}
      <section className="bg-white pb-16 sm:pb-20 dark:bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* LEFT */}
            <div className="space-y-6 lg:col-span-7">
              {filtered.map((p) => (
                <ProjectAlbumRow
                  key={p.id}
                  project={p}
                  active={p.id === selectedId}
                  onSelect={() => setSelectedId(p.id)}
                  onOpenLightbox={() => {
                    const imgs = [p.cover, ...(p.images || [])].filter(Boolean);
                    openLightbox(p.title, imgs, 0);
                  }}
                />
              ))}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">{selected ? <ProjectStickyDetails project={selected} /> : null}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Lightbox
        open={lightbox.open}
        title={lightbox.title}
        images={lightbox.images}
        index={lightbox.index}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        onPick={(i) => setLightbox((s) => ({ ...s, index: i }))}
      />
    </div>
  );
}

/* ------------------------- */
/* LEFT: Album Row           */
/* ------------------------- */

function ProjectAlbumRow({ project, active, onSelect, onOpenLightbox }) {
  const album = useMemo(() => [project.cover, ...(project.images || [])].filter(Boolean), [project.cover, project.images]);

  return (
    <Card
      className={[
        "overflow-hidden border-slate-200 bg-white shadow-sm transition",
        active ? "ring-2 ring-slate-900" : "hover:-translate-y-0.5 hover:shadow-lg",
        "dark:border-black/10 dark:bg-white dark:shadow-sm",
      ].join(" ")}
    >
      <div className="relative">
        <AnimatedAlbum
          title={project.title}
          badge={project.badge}
          id={project.id}
          images={album}
          onClick={() => {
            onSelect?.();
            onOpenLightbox?.();
          }}
        />
      </div>

      <CardContent className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <MetaPill icon={MapPin} text={project.location} />
          {project.year && project.year !== "—" ? <MetaPill icon={Calendar} text={project.year} /> : null}

          {active ? (
            <span className="ml-auto rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Selected
            </span>
          ) : (
            <button
              type="button"
              onClick={onSelect}
              className="ml-auto rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-black/10 dark:bg-white dark:text-slate-700 dark:hover:bg-slate-50"
            >
              Select
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function AnimatedAlbum({ images = [], title, id, badge, onClick }) {
  const [idx, setIdx] = useState(0);
  const safe = images.length ? images : [""];

  useEffect(() => {
    if (safe.length <= 1) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % safe.length), 2600);
    return () => clearInterval(t);
  }, [safe.length]);

  const current = safe[idx];

  return (
    <div className="relative h-72 overflow-hidden bg-slate-100">
      <button type="button" onClick={onClick} className="absolute inset-0" aria-label={`Open album for ${title}`}>
        <SafeImg src={current} alt={title} />
      </button>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

      <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2">
        <span className="text-xl font-bold text-white/95">{id}</span>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {badge}
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-5 right-5">
        <div className="line-clamp-2 text-base font-semibold leading-snug text-white">{title}</div>
      </div>

      {safe.length > 1 ? (
        <div className="pointer-events-none absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
          {safe.slice(0, 6).map((_, i) => (
            <span key={i} className={["h-1.5 w-1.5 rounded-full", i === idx ? "bg-white" : "bg-white/35"].join(" ")} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------- */
/* RIGHT: Sticky Details     */
/* ------------------------- */

function ProjectStickyDetails({ project }) {
  const [openDetails, setOpenDetails] = useState(true);

  return (
    <Card className="border-slate-200 bg-white shadow-sm dark:border-black/10 dark:bg-white dark:shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{project.badge}</div>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
          </div>

          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{project.id}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <MetaPill icon={MapPin} text={project.location} />
          {project.year && project.year !== "—" ? <MetaPill icon={Calendar} text={project.year} /> : null}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {project.metrics?.slice(0, 6).map((m, idx) => (
            <QuickStat key={idx} icon={m.icon} label={m.label} value={m.value} />
          ))}
        </div>

        {/* ✅ use your content + justify */}
        <div className="mt-5 text-justify text-sm leading-relaxed text-slate-600">{project.description}</div>

        {project.details?.length ? (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setOpenDetails((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-black/10 dark:bg-white dark:text-slate-700 dark:hover:bg-slate-50"
            >
              <Info className="h-4 w-4" />
              {openDetails ? "Hide Project Details" : "Show Project Details"}
            </button>

            {openDetails ? (
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.details.map((d, i) => (
                  <DetailCard key={i} icon={d.icon} label={d.label} value={d.value} />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

/* ------------------------- */
/* UI Helpers                */
/* ------------------------- */

function MetaPill({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-black/10 dark:bg-white dark:text-slate-700">
      <Icon className="h-3.5 w-3.5 text-slate-500" />
      {text}
    </span>
  );
}

function QuickStat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 dark:border-black/10 dark:bg-white">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 leading-tight">
        <div className="text-[11px] font-semibold text-slate-500">{label}</div>
        <div className="text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function DetailCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 dark:border-black/10 dark:bg-white">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold text-slate-500">{label}</div>
        <div className="mt-0.5 break-words text-sm font-semibold text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function SafeImg({ src, alt }) {
  const [hide, setHide] = useState(false);

  if (!src || hide) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white text-slate-500">
        <div className="text-center">
          <div className="text-xs font-semibold">Add Image</div>
          <div className="mt-1 text-[11px] opacity-70">/public/projects/..</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      className="h-full w-full object-cover"
      onError={() => setHide(true)}
    />
  );
}

function Lightbox({ open, title, images = [], index = 0, onClose, onPrev, onNext, onPick }) {
  if (!open) return null;
  const src = images[index];

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3 text-white backdrop-blur">
          <div className="min-w-0">
            <div className="line-clamp-1 text-sm font-semibold">{title}</div>
            <div className="text-xs text-white/70">
              {index + 1} / {images.length}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/15"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {src ? <img src={src} alt="" className="max-h-[72vh] w-auto max-w-full object-contain" /> : <div className="text-white/70">No image</div>}

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white hover:bg-white/15"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto rounded-2xl bg-white/5 p-3 backdrop-blur">
          {images.map((t, i) => (
            <button
              key={`${t}-${i}`}
              type="button"
              onClick={() => onPick?.(i)}
              className={[
                "relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border transition",
                i === index ? "border-white" : "border-white/20 hover:border-white/40",
              ].join(" ")}
              aria-label={`Pick image ${i + 1}`}
            >
              <img src={t} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
