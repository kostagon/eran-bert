"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const { lang, toggleLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const navItems = [
    { label: t("About", "\u05D0\u05D5\u05D3\u05D5\u05EA"), href: "#about" },
    { label: t("Practice", "\u05EA\u05E8\u05D2\u05D5\u05DC"), href: "#practice" },
    { label: t("Work", "\u05E2\u05D1\u05D5\u05D3\u05D4"), href: "#work" },
    { label: t("Contact", "\u05E7\u05E9\u05E8"), href: "#contact" },
  ]

  const workItems = [
    { label: "SBRT", href: "#sbrt" },
    { label: "Team Bert", href: "#team-bert" },
    { label: "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7", href: "#eitan" },
  ]

  return (
    <nav
      className="fixed top-0 inset-inline-start-0 inset-inline-end-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "hsl(var(--ink) / 0.5)" : "transparent",
        transition: "background 0.8s, backdrop-filter 0.8s",
      }}
      role="navigation"
      aria-label={t("Main navigation", "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E8\u05D0\u05E9\u05D9")}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 md:py-6">
        {/* Wordmark */}
        <a
          href="#"
          className="font-serif text-base md:text-lg tracking-[0.08em] transition-opacity duration-700 hover:opacity-60"
          style={{ color: "hsl(var(--stone))" }}
        >
          {t("Mastery", "\u05E9\u05DC\u05D9\u05D8\u05D4")}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-[11px] tracking-[0.18em] uppercase font-light transition-opacity duration-700 hover:opacity-50"
              style={{ color: "hsl(var(--stone) / 0.65)" }}
            >
              {item.label}
            </a>
          ))}

          {/* Separator */}
          <div className="w-px h-4" style={{ background: "hsl(var(--stone) / 0.1)" }} />

          <button
            onClick={toggleLanguage}
            className="font-sans text-[11px] tracking-[0.18em] uppercase font-light transition-all duration-700 hover:opacity-60 px-3 py-1.5"
            style={{
              color: "hsl(var(--stone) / 0.65)",
              border: "1px solid hsl(var(--stone) / 0.12)",
            }}
            aria-label={t("Switch to Hebrew", "Switch to English")}
          >
            {lang === "en" ? "\u05E2\u05D1" : "EN"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
          aria-label={t("Toggle menu", "\u05EA\u05E4\u05E8\u05D9\u05D8")}
          aria-expanded={isOpen}
        >
          <span
            className="block w-5 h-px transition-all duration-700"
            style={{
              background: "hsl(var(--stone))",
              transform: isOpen ? "rotate(45deg) translate(0, 0)" : "translate(0, -3px)",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-700"
            style={{
              background: "hsl(var(--stone))",
              transform: isOpen ? "rotate(-45deg) translate(0, 0)" : "translate(0, 3px)",
            }}
          />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className="md:hidden fixed inset-0 flex flex-col justify-center items-center"
        style={{
          background: "hsl(var(--ink))",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl md:text-4xl font-light tracking-[0.05em]"
              style={{
                color: "hsl(var(--stone))",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.8s ${0.15 + i * 0.1}s, transform 0.8s ${0.15 + i * 0.1}s`,
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Work sub-items */}
          <div
            className="flex flex-col items-center gap-4 mt-2"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.8s 0.6s",
            }}
          >
            {workItems.map((w) => (
              <a
                key={w.label}
                href={w.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm tracking-[0.15em] font-light"
                style={{ color: "hsl(var(--stone) / 0.4)" }}
              >
                {w.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => { toggleLanguage(); setIsOpen(false) }}
            className="font-sans text-sm tracking-[0.15em] uppercase font-light px-5 py-2.5 mt-4"
            style={{
              color: "hsl(var(--stone) / 0.65)",
              border: "1px solid hsl(var(--stone) / 0.12)",
              opacity: isOpen ? 1 : 0,
              transition: "opacity 0.8s 0.7s",
            }}
            aria-label={t("Switch to Hebrew", "Switch to English")}
          >
            {lang === "en" ? "\u05E2\u05D1\u05E8\u05D9\u05EA" : "English"}
          </button>
        </div>
      </div>
    </nav>
  )
}
