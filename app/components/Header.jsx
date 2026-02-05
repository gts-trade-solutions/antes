"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X, ChevronRight, ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

// ✅ Do not change your logo import
import logo from "../../assets/logo-3.png";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/company" },
  { name: "Solutions & Products", href: "/solutions-products" },
  { name: "Projects", href: "/projects" },
];

// ✅ Languages (English default + Hindi + Arabic)
const LOCALES = [
  { code: "en", label: "India" },   // ✅ default
  { code: "hi", label: "Qatar" },
  { code: "ar", label: "Oman" },
];

function getLocaleFromPath(pathname, localeCodes) {
  const seg = (pathname || "/").split("/").filter(Boolean)[0];
  return seg && localeCodes.includes(seg) ? seg : null;
}

function stripLocaleFromPath(pathname, localeCodes) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  if (parts[0] && localeCodes.includes(parts[0])) {
    return "/" + parts.slice(1).join("/");
  }
  return pathname || "/";
}

function buildPathWithLocale(pathname, nextLocale, localeCodes) {
  const parts = (pathname || "/").split("/").filter(Boolean);
  const first = parts[0];
  const hasLocale = first && localeCodes.includes(first);

  if (hasLocale) parts[0] = nextLocale;
  else parts.unshift(nextLocale);

  return "/" + parts.join("/");
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langRef = useRef(null);

  const activePath = useMemo(() => pathname || "/", [pathname]);
  const localeCodes = useMemo(() => LOCALES.map((l) => l.code), []);
  // ✅ If no locale in URL, show English as default
  const currentLocale = getLocaleFromPath(activePath, localeCodes) || "en";

  // ✅ RTL only for Arabic
  const isRTL = currentLocale === "ar";

  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [activePath]);

  // close language dropdown on outside click
  useEffect(() => {
    function onDown(e) {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (href) => router.push(href);

  const isActive = (href) => {
    const cleaned = stripLocaleFromPath(activePath, localeCodes);
    return (cleaned || "/") === href;
  };

  const changeLanguage = (nextLocale) => {
    const nextPath = buildPathWithLocale(activePath, nextLocale, localeCodes);
    router.push(nextPath);
    setLangOpen(false);
  };

  const currentLabel =
    LOCALES.find((l) => l.code === currentLocale)?.label || "English";

  return (
    <header className="sticky top-0 z-50 m-0 p-0" dir={isRTL ? "rtl" : "ltr"}>
      {/* Wrapper must be overflow-visible for dropdown */}
      <div className="relative overflow-visible">
        {/* Keep overflow hidden ONLY on background layers */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061427] via-[#071a33] to-[#061427]" />

          {/* Subtle dotted texture */}
          <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] [background-size:18px_18px]" />

          {/* Soft top glow */}
          <div className="absolute -top-24 left-1/2 h-48 w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 p-2">
            <div className="flex h-14 items-center justify-between gap-3">
              {/* Logo */}
              <button
                type="button"
                onClick={() => go("/")}
                aria-label="Go to home"
                className="flex items-center gap-3 min-w-0 m-0 p-0"
              >
                <img
                  src={logo.src}
                  alt="antes"
                  className="h-9 w-auto object-contain shrink-0"
                />
              </button>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-10">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => go(item.href)}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "relative py-2 text-[15px] font-medium tracking-tight transition-colors",
                        active ? "text-white" : "text-white/80 hover:text-white",
                      ].join(" ")}
                    >
                      {item.name}
                      <span
                        className={[
                          "pointer-events-none absolute left-0 -bottom-[6px] h-[2px] w-full origin-left transform transition-transform duration-200",
                          active ? "scale-x-100 bg-white" : "scale-x-0 bg-white/70",
                        ].join(" ")}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-2">
                {/* ✅ Language Dropdown (desktop) */}
                <div className="relative hidden lg:block" ref={langRef}>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setLangOpen((v) => !v)}
                    className="rounded-full text-white hover:bg-white/10 hover:text-white px-3"
                    aria-label="Change language"
                    aria-expanded={langOpen}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="text-sm">{currentLabel}</span>
                    <ChevronDown className="h-4 w-4 ml-2 opacity-80" />
                  </Button>

                  {langOpen && (
                    <div className="absolute right-0 mt-2 z-[9999] w-44 overflow-hidden rounded-xl border border-white/10 bg-[#071a33] shadow-xl">
                      {LOCALES.map((l) => (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => changeLanguage(l.code)}
                          className={[
                            "w-full px-3 py-2 text-left text-sm transition-colors",
                            l.code === currentLocale
                              ? "bg-white text-[#061427]"
                              : "text-white/90 hover:bg-white/10 hover:text-white",
                          ].join(" ")}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* CTA (desktop) */}
                <Button
                  className="hidden lg:inline-flex rounded-full px-5 bg-white text-[#061427] hover:bg-white/90"
                  onClick={() => go("/contact")}
                >
                  Contact Us
                </Button>

                {/* Mobile menu */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileOpen((v) => !v)}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                  {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* ✅ thin subtle divider (not black) */}
          <div className="h-px w-full bg-white/10" />
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-white/10 bg-gradient-to-r from-[#061427] via-[#071a33] to-[#061427]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <nav className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => go(item.href)}
                    className={[
                      "w-full rounded-xl px-3 py-3 flex items-center justify-between text-left transition-colors",
                      active
                        ? "bg-white text-[#061427]"
                        : "hover:bg-white/10 text-white/90 hover:text-white",
                    ].join(" ")}
                  >
                    <span className="text-[15px] font-medium">{item.name}</span>
                    <ChevronRight
                      className={[
                        "h-5 w-5",
                        active ? "text-[#061427]" : "text-white/50",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </nav>

            {/* ✅ Language Dropdown (mobile select) */}
            <div className="mt-4 rounded-xl border border-white/10 overflow-hidden">
              <div className="px-3 py-2 text-white/80 text-sm flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Language
              </div>
              <div className="p-2">
                <select
                  value={currentLocale}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="w-full rounded-lg bg-white text-[#061427] px-3 py-3 text-[15px] font-medium outline-none"
                >
                  {LOCALES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <Button
                className="w-full rounded-full bg-white text-[#061427] hover:bg-white/90"
                onClick={() => go("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
