"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal, useScrollProgress } from "@/hooks/use-scroll-reveal"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollReveal(0.08)
  const { ref: parallaxRef, progress } = useScrollProgress()
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.15)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineDrawn, setLineDrawn] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setLineDrawn(true), 600)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const yShift = (progress - 0.5) * -40

  return (
    <section
      id="about"
      ref={parallaxRef}
      className="relative py-32 md:py-48 lg:py-64 px-6 md:px-12 lg:px-20 xl:px-28 overflow-hidden"
      style={{ background: "hsl(var(--ink))" }}
    >
      {/* Large watermark kanji */}
      <span
        className="absolute font-sans pointer-events-none select-none"
        style={{
          insetInlineEnd: "-5%",
          top: "10%",
          fontSize: "clamp(18rem, 40vw, 45rem)",
          color: "hsl(var(--stone) / 0.015)",
          lineHeight: 0.8,
          transform: `translateY(${yShift * 1.5}px)`,
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      >
        {"\u9053"}
      </span>

      <div className="max-w-5xl mx-auto relative z-10" ref={sectionRef}>
        {/* Label */}
        <span
          className="slide-inline font-sans text-[10px] tracking-[0.4em] uppercase block mb-16 md:mb-20"
          style={{
            color: "hsl(var(--stone) / 0.25)",
            transitionDelay: "0s",
          }}
          ref={(el) => {
            if (el && isVisible) el.classList.add("visible")
          }}
        >
          {t("About", "\u05D0\u05D5\u05D3\u05D5\u05EA")}
        </span>

        {/* Main bio text - large, serene, with staggered word reveal */}
        <div className="overflow-hidden">
          <p
            className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] font-light leading-[1.35] tracking-[-0.015em]"
            style={{
              color: "hsl(var(--stone))",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 2s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 2s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            {t(
              "A martial arts teacher specializing in the integration of somatic learning processes, a meditation and conscious movement guide, and a facilitator of resilience and self-regulation skills.",
              "\u05DE\u05D5\u05E8\u05D4 \u05DC\u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4 \u05D4\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05E9\u05D9\u05DC\u05D5\u05D1 \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA, \u05DE\u05D3\u05E8\u05D9\u05DA \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4 \u05D5\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DE\u05D5\u05D3\u05E2\u05EA, \u05D5\u05DE\u05E0\u05D7\u05D4 \u05DC\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D7\u05D5\u05E1\u05DF \u05D5\u05D5\u05D9\u05E1\u05D5\u05EA \u05E2\u05E6\u05DE\u05D9."
            )}
          </p>
        </div>

        {/* Ink line divider, drawn from inline-start */}
        <div
          ref={lineRef}
          className="my-20 md:my-28 h-px w-full"
          style={{
            background: "hsl(var(--stone) / 0.06)",
            transformOrigin: "var(--line-origin, 0% 50%)",
            transform: lineDrawn ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 2s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        {/* Philosophy quote */}
        <div
          ref={quoteRef}
          className="flex flex-col md:flex-row gap-10 md:gap-20"
        >
          {/* Large kanji accent */}
          <div
            className="shrink-0"
            style={{
              opacity: quoteVisible ? 1 : 0,
              transform: quoteVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.85)",
              filter: quoteVisible ? "blur(0)" : "blur(6px)",
              transition: "all 2s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span
              className="font-sans text-7xl md:text-9xl font-extralight jp-char"
              style={{ color: "hsl(var(--warm-accent) / 0.25)" }}
              aria-hidden="true"
            >
              {"\u9053"}
            </span>
          </div>

          <div
            style={{
              opacity: quoteVisible ? 1 : 0,
              transform: quoteVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            <p
              className="font-sans text-sm md:text-base font-extralight leading-[1.8] md:leading-[2]"
              style={{ color: "hsl(var(--stone) / 0.5)" }}
            >
              {t(
                "The path is not about arriving. It is about the quality of each step, the depth of each breath, the integrity of each moment. True mastery is found in the space between effort and surrender.",
                "\u05D4\u05D3\u05E8\u05DA \u05D0\u05D9\u05E0\u05D4 \u05E2\u05DC \u05D4\u05D4\u05D2\u05E2\u05D4. \u05D4\u05D9\u05D0 \u05E2\u05DC \u05D0\u05D9\u05DB\u05D5\u05EA \u05DB\u05DC \u05E6\u05E2\u05D3, \u05E2\u05D5\u05DE\u05E7 \u05DB\u05DC \u05E0\u05E9\u05D9\u05DE\u05D4, \u05D9\u05D5\u05E9\u05E8\u05D4 \u05E9\u05DC \u05DB\u05DC \u05E8\u05D2\u05E2. \u05E9\u05DC\u05D9\u05D8\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05DE\u05E8\u05D7\u05D1 \u05E9\u05D1\u05D9\u05DF \u05DE\u05D0\u05DE\u05E5 \u05DC\u05DB\u05E0\u05D9\u05E2\u05D4."
              )}
            </p>
            <p
              className="font-sans text-[10px] tracking-[0.3em] uppercase mt-8"
              style={{ color: "hsl(var(--stone) / 0.2)" }}
            >
              {t("The Way", "\u05D4\u05D3\u05E8\u05DA")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
