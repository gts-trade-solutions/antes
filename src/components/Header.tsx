import React, { useMemo, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ✅ Do not change your logo import
import logo from "@/assets/logo (1).png";

type NavItem = { name: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/company" },
  { name: "Solutions & Products", href: "/solutions-products" },
  { name: "Projects", href: "/projects" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const activePath = useMemo(
    () => (typeof window !== "undefined" ? window.location.pathname : "/"),
    []
  );

  const isActive = (href: string) => activePath === href;

  return (
    <header className="bg-white sticky top-0 z-50 nav-shadow shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Logo + Tagline + Product Links */}
          <div className="flex items-center gap-4 min-w-0">
            <img
              src={logo} // ✅ unchanged
              alt="NRS Logo"
              className="h-10 w-auto object-contain shrink-0"
            />

            {/* Tagline + product family (desktop) */}
            <div className="hidden md:flex items-center gap-3 truncate">
              <span className="text-sm text-gray-500 uppercase tracking-wide whitespace-nowrap">
                COOL IDEAS • COOL SOLUTIONS
              </span>

              <div className="flex items-center gap-2 text-sm font-semibold">
                <a
                  href="/varicold"
                  className="text-sky-500 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500/30 rounded"
                >
                  variCOLD®
                </a>
                <span className="text-gray-400">•</span>
                <a
                  href="/gonatural"
                  className="text-sky-500 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500/30 rounded"
                >
                  goNATURAL®
                </a>
              </div>
            </div>
          </div>

          {/* Center: Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "font-medium transition-colors",
                    active
                      ? "text-accent border-b-2 border-accent pb-1"
                      : "text-nrs-text-dark hover:text-accent",
                  ].join(" ")}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Search + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <Input
                    type="search"
                    placeholder="Search…"
                    className="w-64"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                  className="text-nrs-text-dark hover:text-accent"
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>

            <Button
              className="bg-nrs-blue hover:bg-nrs-navy text-white px-6 rounded-lg"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
            {/* Tagline + product links (mobile) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-4">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                COOL IDEAS • COOL SOLUTIONS
              </span>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <a href="/varicold" className="text-sky-500 hover:underline">
                  variCOLD®
                </a>
                <span className="text-gray-400">•</span>
                <a href="/gonatural" className="text-sky-500 hover:underline">
                  goNATURAL®
                </a>
              </div>
            </div>

            <nav className="flex flex-col gap-1 mt-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={[
                      "font-medium py-2 rounded-md px-1 transition-colors",
                      active
                        ? "text-accent"
                        : "text-nrs-text-dark hover:text-accent",
                    ].join(" ")}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <Input type="search" placeholder="Search…" className="flex-1" />
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Submit search"
                  className="text-nrs-text-dark"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
              <Button
                className="w-full bg-nrs-blue hover:bg-nrs-navy text-white rounded-lg"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
