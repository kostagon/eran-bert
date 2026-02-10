"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal, useScrollProgress } from "@/hooks/use-scroll-reveal"
import { useEffect, useState } from "react"

export function Footer() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.1)
  const { ref: parallaxRef, progress } = useScrollProgress()
  const [lineDrawn, setLineDrawn] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setLineDrawn(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const yShift = (progress - 0.5) * -20

  return (
    <footer
      id="contact"
      ref={parallaxRef}
      className="relative py-28 md:py-40 lg:py-52 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
      style={{ background: "hsl(var(--ink))" }}
    >
      {/* Giant watermark */}
      <span
        className="absolute font-sans pointer-events-none select-none"
        style={{
          insetInlineStart: "-10%",
          bottom: "-15%",
          fontSize: "clamp(20rem, 50vw, 60rem)",
          color: "hsl(var(--stone) / 0.012)",
          lineHeight: 0.8,
          transform: `translateY(${yShift * 2}px)`,
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      >
        {"\u4E0D\u52D5\u5FC3"}
      </span>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Label */}
        <span
          className="font-sans text-[10px] tracking-[0.4em] uppercase block mb-16 md:mb-20"
          style={{
            color: "hsl(var(--stone) / 0.2)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.4s 0.1s",
          }}
        >
          {t("Contact", "\u05E7\u05E9\u05E8")}
        </span>

        {/* Heading */}
        <h2
          className="font-serif text-[clamp(2rem,6vw,5rem)] font-light tracking-[-0.03em] text-balance"
          style={{
            color: "hsl(var(--stone))",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 2s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 2s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          {t("Begin the conversation", "\u05D4\u05EA\u05D7\u05D9\u05DC\u05D5 \u05E9\u05D9\u05D7\u05D4")}
        </h2>

        {/* Drawn line */}
        <div
          className="mt-10 md:mt-14 h-px w-48 md:w-80"
          style={{
            background: "hsl(var(--warm-accent) / 0.2)",
            transformOrigin: "var(--line-origin, 0% 50%)",
            transform: lineDrawn ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        {/* Content */}
        <div
          className="flex flex-col md:flex-row gap-12 md:gap-24 mt-14 md:mt-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(25px)",
            transition: "opacity 1.6s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1.6s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          <div>
            <p
              className="font-sans text-sm font-extralight leading-[1.9] max-w-sm"
              style={{ color: "hsl(var(--stone) / 0.4)" }}
            >
              {t(
                "Whether you are seeking personal training, group facilitation, or a deeper understanding of somatic practices, the first step is reaching out.",
                "\u05D1\u05D9\u05DF \u05D0\u05DD \u05D0\u05EA\u05DD \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05D0\u05D9\u05DE\u05D5\u05DF \u05D0\u05D9\u05E9\u05D9, \u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05E7\u05D1\u05D5\u05E6\u05D4, \u05D0\u05D5 \u05D4\u05D1\u05E0\u05D4 \u05E2\u05DE\u05D5\u05E7\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DC\u05D9\u05DD \u05E1\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD, \u05D4\u05E6\u05E2\u05D3 \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D4\u05D5\u05D0 \u05DC\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <a
              href="mailto:hello@example.com"
              className="font-sans text-sm tracking-[0.1em] transition-all duration-700 hover:tracking-[0.2em]"
              style={{ color: "hsl(var(--warm-accent) / 0.8)" }}
            >
              hello@example.com
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm tracking-[0.1em] transition-opacity duration-700 hover:opacity-60"
              style={{ color: "hsl(var(--stone) / 0.35)" }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-28 md:mt-36 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{
            borderBlockStart: "1px solid hsl(var(--stone) / 0.04)",
          }}
        >
          <span
            className="font-sans text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "hsl(var(--stone) / 0.15)" }}
          >
            {"\u00A9"} {new Date().getFullYear()}
          </span>
          <span
            className="font-sans text-[10px] tracking-[0.5em] jp-char"
            style={{ color: "hsl(var(--stone) / 0.08)" }}
            aria-hidden="true"
          >
            {"\u4E0D \u52D5 \u5FC3"}
          </span>
        </div>
      </div>
    </footer>
  )
}
