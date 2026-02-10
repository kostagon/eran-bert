"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Footer() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <footer
      id="contact"
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
      style={{ background: "hsl(30 10% 6%)" }}
    >
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-[1500ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Contact heading */}
        <span
          className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-12"
          style={{ color: "hsl(40 15% 92% / 0.35)" }}
        >
          {t("Contact", "\u05E7\u05E9\u05E8")}
        </span>

        <h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] mb-12 md:mb-16"
          style={{ color: "hsl(40 15% 92%)" }}
        >
          {t("Begin the conversation", "\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05E9\u05D9\u05D7\u05D4")}
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div>
            <p
              className="font-sans text-sm font-light leading-relaxed max-w-sm"
              style={{ color: "hsl(40 15% 92% / 0.5)" }}
            >
              {t(
                "Whether you are seeking personal training, group facilitation, or a deeper understanding of somatic practices, the first step is reaching out.",
                "\u05D1\u05D9\u05DF \u05D0\u05DD \u05D0\u05EA\u05DD \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05D0\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9, \u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05E7\u05D1\u05D5\u05E6\u05D4, \u05D0\u05D5 \u05D4\u05D1\u05E0\u05D4 \u05E2\u05DE\u05D5\u05E7\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DC\u05D9\u05DD \u05E1\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD, \u05D4\u05E6\u05E2\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D4\u05D5\u05D0 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:hello@example.com"
              className="font-sans text-sm tracking-[0.1em] transition-opacity duration-500 hover:opacity-60"
              style={{ color: "hsl(18 60% 42%)" }}
            >
              hello@example.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm tracking-[0.1em] transition-opacity duration-500 hover:opacity-60"
              style={{ color: "hsl(40 15% 92% / 0.4)" }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-24 md:mt-32 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderTop: "1px solid hsl(40 15% 92% / 0.06)" }}
        >
          <span
            className="font-sans text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "hsl(40 15% 92% / 0.2)" }}
          >
            {"\u00A9"} {new Date().getFullYear()}
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.4em] jp-char"
            style={{ color: "hsl(40 15% 92% / 0.15)" }}
            aria-hidden="true"
          >
            {"\u4E0D \u52D5 \u5FC3"}
          </span>
        </div>
      </div>
    </footer>
  )
}
