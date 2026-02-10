"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)

  const navItems = [
    { label: t("About", "\u05D0\u05D5\u05D3\u05D5\u05EA"), href: "#about" },
    { label: t("Practice", "\u05EA\u05E8\u05D2\u05D5\u05DC"), href: "#practice" },
    {
      label: t("Work", "\u05E2\u05D1\u05D5\u05D3\u05D4"),
      href: "#work",
      children: [
        { label: "SBRT", href: "#sbrt" },
        { label: "Team Bert", href: "#team-bert" },
        { label: "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7", href: "#eitan" },
      ],
    },
    { label: t("Contact", "\u05E7\u05E9\u05E8"), href: "#contact" },
  ]

  return (
    <nav
      className="fixed top-0 inset-inline-start-0 inset-inline-end-0 z-50 mix-blend-difference"
      role="navigation"
      aria-label={t("Main navigation", "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E8\u05D0\u05E9\u05D9")}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        {/* Logo */}
        <a
          href="#"
          className="text-[hsl(40,20%,97%)] text-sm tracking-[0.2em] uppercase font-sans font-light"
        >
          {t("Mastery", "\u05E9\u05DC\u05D9\u05D8\u05D4")}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-[hsl(40,20%,97%)] text-xs tracking-[0.15em] uppercase font-sans font-light transition-opacity duration-500 hover:opacity-60"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="absolute top-full pt-3 inset-inline-start-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
                  <div className="flex flex-col gap-2 min-w-[140px]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="text-[hsl(40,20%,97%)]/70 text-xs tracking-[0.1em] font-sans font-light transition-opacity duration-300 hover:opacity-100"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Language switcher */}
          <button
            onClick={toggleLanguage}
            className="text-[hsl(40,20%,97%)] text-xs tracking-[0.15em] uppercase font-sans font-light border border-[hsl(40,20%,97%)]/20 px-3 py-1.5 transition-all duration-500 hover:border-[hsl(40,20%,97%)]/50"
            aria-label={t("Switch to Hebrew", "Switch to English")}
          >
            {lang === "en" ? "\u05E2\u05D1" : "EN"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[hsl(40,20%,97%)] w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={t("Toggle menu", "\u05EA\u05E4\u05E8\u05D9\u05D8")}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-500 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-[hsl(30,10%,6%)] transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        {navItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3">
            <a
              href={item.href}
              onClick={() => {
                setIsOpen(false)
                if (item.children) setWorkOpen(!workOpen)
              }}
              className="text-[hsl(40,15%,92%)] text-2xl tracking-[0.15em] uppercase font-sans font-light"
            >
              {item.label}
            </a>
            {item.children && workOpen && (
              <div className="flex flex-col items-center gap-2">
                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[hsl(40,15%,92%)]/60 text-base tracking-[0.1em] font-sans font-light"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          onClick={() => {
            toggleLanguage()
            setIsOpen(false)
          }}
          className="text-[hsl(40,15%,92%)] text-sm tracking-[0.15em] uppercase font-sans font-light border border-[hsl(40,15%,92%)]/20 px-4 py-2 mt-4"
          aria-label={t("Switch to Hebrew", "Switch to English")}
        >
          {lang === "en" ? "\u05E2\u05D1\u05E8\u05D9\u05EA" : "English"}
        </button>
      </div>
    </nav>
  )
}
