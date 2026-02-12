"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const logo = "/logo-3.png";

const SERVICES = [
  " Fast food chains",
  "Retail",
  "Super markets",
  "Restaurants",
  "Pharmacy",
  "Research",
  "Hospitality",
  "Agriculture",
  "Special projects",
];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Solutions & Products", href: "/solutions-products" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function OmanFooter() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />
        <div className="absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute -bottom-44 right-[-160px] h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ✅ Reduced vertical padding + tighter grid + equal columns */}
        <div className="py-10 sm:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Brand + Address */}
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Antes Logo"
                  className="h-9 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* ✅ Proper line breaks + less empty space */}
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-white/75">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="whitespace-pre-line">
                    {"Block No.293, was Number 9307, Building No. 1/1012, West Misfat Bawshar, Muscut, Oman"}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Contact
              </h3>

              <div className="mt-4 space-y-3">
                <a
                  href="tel:+918714281444"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="font-medium group-hover:text-white">
                   +968 9173 7705
                  </span>
                </a>

                <a
                  href="mailto:info@antesglobal.com"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 backdrop-blur transition hover:bg-white/10"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="font-medium group-hover:text-white">
                    sales.in@antesglobal.com
                  </span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Our Services
              </h3>

              {/* ✅ More compact list */}
              <ul className="mt-4 space-y-1.5 text-sm">
                {SERVICES.map((item) => (
                  <li key={item}>
                    <a
                      href="/solutions-products"
                      className="group inline-flex w-full items-center justify-between rounded-xl px-2 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      <span className="pr-3">{item}</span>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold tracking-tight text-white">
                Quick Links
              </h3>

              <ul className="mt-4 space-y-1.5 text-sm">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex w-full items-center justify-between rounded-xl px-2 py-2 text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/25 opacity-0 transition group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Less gap before divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Bottom bar (tighter) */}
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/55">© 2022 Antes. All rights reserved.</p>

            <div className="flex items-center gap-3 text-xs text-white/55">
              <a href="#" className="transition hover:text-white/80">
                Privacy
              </a>
              <span className="text-white/25">•</span>
              <a href="#" className="transition hover:text-white/80">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
