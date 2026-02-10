"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useEffect, useRef, useState } from "react"

const JP_SYMBOLS = ["\u6B66", "\u4F53", "\u9759", "\u52D5", "\u5FC3"]

interface DomainCardProps {
  title: string
  description: string
  index: number
  jpSymbol: string
}

function DomainCard({ title, description, index, jpSymbol }: DomainCardProps) {
  const { ref, isVisible } = useScrollReveal(0.12)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineDrawn, setLineDrawn] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setLineDrawn(true), 400 + index * 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, index])

  return (
    <div ref={ref} className="group relative">
      {/* Top line drawn from inline-start */}
      <div
        ref={lineRef}
        className="h-px w-full"
        style={{
          background: "hsl(var(--foreground) / 0.06)",
          transformOrigin: "var(--line-origin, 0% 50%)",
          transform: lineDrawn ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 1.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      <div
        className="py-10 md:py-14 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: `opacity 1.4s cubic-bezier(0.16,1,0.3,1) ${0.2 + index * 0.12}s, transform 1.4s cubic-bezier(0.16,1,0.3,1) ${0.2 + index * 0.12}s`,
        }}
      >
        {/* Number + Japanese character */}
        <div className="flex items-baseline gap-4 shrink-0 md:w-24">
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase font-light text-muted-foreground"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-sans text-2xl md:text-3xl font-extralight jp-char transition-colors duration-700"
            style={{ color: "hsl(var(--foreground) / 0.08)" }}
          >
            {jpSymbol}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-[-0.01em] text-foreground">
            {title}
          </h3>
          <p className="font-sans text-sm font-extralight leading-[1.8] mt-4 max-w-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Hover accent dot on desktop */}
        <div
          className="hidden md:block shrink-0 w-2 h-2 rounded-full mt-3 transition-all duration-1000"
          style={{
            background: "hsl(var(--warm-accent) / 0.2)",
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export function PracticeSection() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.12)
  const [headerLineDrawn, setHeaderLineDrawn] = useState(false)

  useEffect(() => {
    if (headerVisible) {
      const timer = setTimeout(() => setHeaderLineDrawn(true), 400)
      return () => clearTimeout(timer)
    }
  }, [headerVisible])

  const domains = [
    {
      title: t("Martial Arts Teaching", "\u05D4\u05D5\u05E8\u05D0\u05EA \u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4"),
      description: t(
        "A practice rooted in discipline, awareness, and the continuous refinement of body and mind. Training that builds not just technique, but character.",
        "\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D5\u05E9\u05EA\u05EA \u05E2\u05DC \u05DE\u05E9\u05DE\u05E2\u05EA, \u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05D5\u05D7\u05D9\u05D3\u05D5\u05D3 \u05DE\u05EA\u05DE\u05D9\u05D3 \u05E9\u05DC \u05D2\u05D5\u05E3 \u05D5\u05E0\u05E4\u05E9."
      ),
    },
    {
      title: t("Somatic Learning", "\u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA"),
      description: t(
        "Bridging the gap between knowing and embodying. Somatic practices that bring intelligence from the mind into the tissues, the breath, the movement.",
        "\u05D2\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E2\u05E8 \u05D1\u05D9\u05DF \u05D9\u05D3\u05D9\u05E2\u05D4 \u05DC\u05D4\u05EA\u05D2\u05DC\u05DE\u05D5\u05EA. \u05EA\u05E8\u05D2\u05D5\u05DC\u05D9\u05DD \u05E1\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05E9\u05DE\u05E2\u05D1\u05D9\u05E8\u05D9\u05DD \u05D0\u05D9\u05E0\u05D8\u05DC\u05D9\u05D2\u05E0\u05E6\u05D9\u05D4 \u05DE\u05D4\u05DE\u05D5\u05D7 \u05D0\u05DC \u05D4\u05E8\u05E7\u05DE\u05D5\u05EA."
      ),
    },
    {
      title: t("Meditation Guidance", "\u05D4\u05D3\u05E8\u05DB\u05EA \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4"),
      description: t(
        "Cultivating stillness as a practice of power. Guided meditation that sharpens attention, deepens presence, and dissolves unnecessary tension.",
        "\u05D8\u05D9\u05E4\u05D5\u05D7 \u05E9\u05E7\u05D8 \u05DB\u05EA\u05E8\u05D2\u05D5\u05DC \u05E9\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4. \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E0\u05D7\u05D9\u05EA \u05E9\u05DE\u05D7\u05D3\u05D3\u05EA \u05E7\u05E9\u05D1."
      ),
    },
    {
      title: t("Conscious Movement", "\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DE\u05D5\u05D3\u05E2\u05EA"),
      description: t(
        "Movement as language. Every gesture carries intention, every step a statement. Learning to inhabit the body with full awareness and purpose.",
        "\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DB\u05E9\u05E4\u05D4. \u05DB\u05DC \u05DE\u05D7\u05D5\u05D5\u05D4 \u05E0\u05D5\u05E9\u05D0\u05EA \u05DB\u05D5\u05D5\u05E0\u05D4, \u05DB\u05DC \u05E6\u05E2\u05D3 \u05D4\u05D5\u05D0 \u05D4\u05E6\u05D4\u05E8\u05D4."
      ),
    },
    {
      title: t("Resilience & Regulation", "\u05D7\u05D5\u05E1\u05DF \u05D5\u05D5\u05D9\u05E1\u05D5\u05EA"),
      description: t(
        "Building the inner architecture of stability. Tools for self-regulation, emotional resilience, and grounded responsiveness.",
        "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA \u05E9\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA. \u05DB\u05DC\u05D9\u05DD \u05DC\u05D5\u05D5\u05D9\u05E1\u05D5\u05EA \u05E2\u05E6\u05DE\u05D9 \u05D5\u05D7\u05D5\u05E1\u05DF \u05E8\u05D2\u05E9\u05D9."
      ),
    },
  ]

  return (
    <section
      id="practice"
      className="relative py-28 md:py-40 lg:py-52 px-6 md:px-12 lg:px-20 xl:px-28"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-20 md:mb-28 max-w-5xl mx-auto">
        <span
          className="font-sans text-[10px] tracking-[0.4em] uppercase block mb-8"
          style={{
            color: "hsl(var(--foreground) / 0.3)",
            opacity: headerVisible ? 1 : 0,
            transition: "opacity 1.4s 0.1s",
          }}
        >
          {t("The Practice", "\u05D4\u05EA\u05E8\u05D2\u05D5\u05DC")}
        </span>

        <h2
          className="font-serif text-[clamp(2rem,5vw,4.5rem)] font-light tracking-[-0.03em] text-foreground text-balance max-w-3xl"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          {t("Five domains of mastery", "\u05D7\u05DE\u05D9\u05E9\u05D4 \u05EA\u05D7\u05D5\u05DE\u05D9 \u05E9\u05DC\u05D9\u05D8\u05D4")}
        </h2>

        {/* Drawn line */}
        <div
          className="mt-10 h-px w-32 md:w-48"
          style={{
            background: "hsl(var(--warm-accent) / 0.25)",
            transformOrigin: "var(--line-origin, 0% 50%)",
            transform: headerLineDrawn ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1.6s cubic-bezier(0.16,1,0.3,1) 0.6s",
          }}
        />
      </div>

      {/* Domain cards */}
      <div className="max-w-5xl mx-auto">
        {domains.map((domain, i) => (
          <DomainCard
            key={domain.title}
            title={domain.title}
            description={domain.description}
            index={i}
            jpSymbol={JP_SYMBOLS[i]}
          />
        ))}
        {/* Final closing line */}
        <div
          className="h-px w-full"
          style={{ background: "hsl(var(--foreground) / 0.06)" }}
        />
      </div>
    </section>
  )
}
