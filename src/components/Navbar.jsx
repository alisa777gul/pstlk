import React, { useState, useEffect } from "react";
import { NAV } from "../constants/testIds";
import { Menu as MenuIcon, X, Sparkles } from "lucide-react";

const Navbar = ({ t, lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: t.nav.about, testId: NAV.about },
    { id: "gallery", label: t.nav.gallery, testId: NAV.gallery },
    { id: "menu", label: t.nav.menu, testId: NAV.menu },
    { id: "pricing", label: t.nav.pricing, testId: NAV.pricing },
    { id: "birthdays", label: t.nav.birthdays, testId: NAV.birthdays },
    { id: "contact", label: t.nav.contact, testId: NAV.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FFF8F3]/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between gap-2">
        <a
          href="#hero"
          data-testid={NAV.brand}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F4B8C1] text-[#2D3142] animate-spin-slow">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </span>
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#2D3142]">
            Pastelkovo
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-testid={l.testId}
              className="nav-link text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            data-testid={NAV.langToggle}
            onClick={() => setLang(lang === "sk" ? "en" : "sk")}
            className="px-2.5 py-1.5 rounded-full text-xs font-bold border-2 border-[#2D3142] text-[#2D3142] hover:bg-[#2D3142] hover:text-[#FFF8F3] transition-all whitespace-nowrap"
          >
            {lang === "sk" ? "EN" : "SK"}
          </button>
          <a
            href="#reservation"
            data-testid={NAV.reserveBtn}
            className="hidden sm:inline-flex btn-pill btn-primary text-sm"
            style={{ padding: "0.55rem 1.1rem" }}
          >
            {t.nav.reserve}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-1 text-[#2D3142]"
            aria-label="menu"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#FFF8F3] border-t border-[#EBE3DC] px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block font-semibold text-[#2D3142] py-2"
              data-testid={`mobile-${l.testId}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="btn-pill btn-primary text-sm w-full justify-center"
          >
            {t.nav.reserve}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
