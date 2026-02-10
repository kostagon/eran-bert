"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal, useScrollProgress } from "@/hooks/use-scroll-reveal"
import { useEffect, useState, useRef } from "react"

const WORK_JP = ["\u4F53", "\u7D44", "\u5FC3"]

interface WorkCardProps {
  id: string
  title: string
  subtitle: string
  description: string
  index: number
  dark: boolean
  jpChar: string
}

function WorkCard({ id, title, subtitle, description, index, dark, jpChar }: WorkCardProps) {
  const { ref: cardRef, isVisible } = useScrollReveal(0.08)
  const { ref: parallaxRef, progress } = useScrollProgress()
  const [wipeRevealed, setWipeRevealed] = useState(false)
  const [lineDrawn, setLineDrawn] = useState(false)

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => setWipeRevealed(true))
      const timer = setTimeout(() => setLineDrawn(true), 600)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  const bgColor = dark ? "hsl(var(--ink))" : "hsl(var(--background))"
  const textColor = dark ? "hsl(var(--stone))" : "hsl(var(--foreground))"
  const mutedColor = dark ? "hsl(var(--stone) / 0.35)" : "hsl(var(--foreground) / 0.35)"
  const accentColor = "hsl(var(--warm-accent) / 0.5)"
  const watermarkColor = dark ? "hsl(var(--stone) / 0.02)" : "hsl(var(--foreground) / 0.015)"

  const yShift = (progress - 0.5) * -25

  return (
    <article
      id={id}
      ref={parallaxRef}
      className="relative overflow-hidden"
      style={{
        background: bgColor,
        clipPath: wipeRevealed ? "inset(0 0 0 0)" : "inset(6% 0 6% 0)",
        transition: "clip-path 1.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Giant watermark character */}
      <span
        className="absolute font-sans pointer-events-none select-none"
        style={{
          insetInlineEnd: "-8%",
          bottom: "-10%",
          fontSize: "clamp(16rem, 40vw, 50rem)",
          color: watermarkColor,
          lineHeight: 0.8,
          transform: `translateY(${yShift * 2}px)`,
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      >
        {jpChar}
      </span>

      <div
        ref={cardRef}
        className="relative z-10 py-24 md:py-36 lg:py-48 px-6 md:px-12 lg:px-20 xl:px-28"
      >
        <div className="max-w-5xl mx-auto">
          {/* Number + label row */}
          <div
            className="flex items-center gap-5 mb-12 md:mb-20"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1.4s 0.2s",
            }}
          >
            <span
              className="font-sans text-[10px] tracking-[0.3em] uppercase"
              style={{ color: mutedColor }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Line drawn from inline-start */}
            <div
              className="flex-1 h-px"
              style={{
                background: dark ? "hsl(var(--stone) / 0.06)" : "hsl(var(--foreground) / 0.06)",
                transformOrigin: "var(--line-origin, 0% 50%)",
                transform: lineDrawn ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 2s cubic-bezier(0.16,1,0.3,1)",
              }}
            />

            <span
              className="font-sans text-[10px] tracking-[0.3em] uppercase"
              style={{ color: accentColor }}
            >
              {subtitle}
            </span>
          </div>

          {/* Title: massive, cinematic */}
          <h3
            className="font-serif font-light tracking-[-0.03em] text-balance"
            style={{
              color: textColor,
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              lineHeight: 0.95,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 1.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <div className="mt-10 md:mt-16 max-w-xl">
            <p
              className="font-sans text-sm md:text-base font-extralight leading-[1.9]"
              style={{
                color: mutedColor,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transition: "opacity 1.6s cubic-bezier(0.16,1,0.3,1) 0.6s, transform 1.6s cubic-bezier(0.16,1,0.3,1) 0.6s",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function WorkSection() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1)

  const works = [
    {
      id: "sbrt",
      title: "SBRT",
      subtitle: t("System", "\u05DE\u05E2\u05E8\u05DB\u05EA"),
      description: t(
        "A comprehensive system integrating martial arts principles with somatic awareness. SBRT bridges traditional combat knowledge with modern understanding of the body's intelligence, creating a practice that is both ancient and alive.",
        "\u05DE\u05E2\u05E8\u05DB\u05EA \u05DE\u05E7\u05D9\u05E4\u05D4 \u05D4\u05DE\u05E9\u05DC\u05D1\u05EA \u05E2\u05E7\u05E8\u05D5\u05E0\u05D5\u05EA \u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4 \u05E2\u05DD \u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA. SBRT \u05DE\u05D2\u05E9\u05E8\u05EA \u05D1\u05D9\u05DF \u05D9\u05D3\u05E2 \u05DC\u05D7\u05D9\u05DE\u05D4 \u05DE\u05E1\u05D5\u05E8\u05EA\u05D9 \u05DC\u05D1\u05D9\u05DF \u05D4\u05D1\u05E0\u05D4 \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05EA \u05E9\u05DC \u05D0\u05D9\u05E0\u05D8\u05DC\u05D9\u05D2\u05E0\u05E6\u05D9\u05D4 \u05D2\u05D5\u05E4\u05E0\u05D9\u05EA."
      ),
    },
    {
      id: "team-bert",
      title: "Team Bert",
      subtitle: t("Community", "\u05E7\u05D4\u05D9\u05DC\u05D4"),
      description: t(
        "A dedicated community of practitioners committed to growth through disciplined training. Team Bert is built on mutual respect, shared purpose, and the understanding that individual mastery serves the collective.",
        "\u05E7\u05D4\u05D9\u05DC\u05D4 \u05DE\u05E1\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05EA\u05E8\u05D2\u05DC\u05D9\u05DD \u05D4\u05DE\u05D7\u05D5\u05D9\u05D1\u05D9\u05DD \u05DC\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D3\u05E8\u05DA \u05D0\u05D9\u05DE\u05D5\u05DF \u05DE\u05DE\u05D5\u05E9\u05DE\u05E2."
      ),
    },
    {
      id: "eitan",
      title: t("\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7", "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7"),
      subtitle: t("Spirit", "\u05E8\u05D5\u05D7"),
      description: t(
        "Eitan BaRuach \u2014 steadfast in spirit. A dedicated practice space for cultivating inner strength, emotional resilience, and the unshakable calm that comes from deep self-knowledge and somatic integration.",
        "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7 \u2014 \u05DE\u05E8\u05D7\u05D1 \u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05E1\u05D5\u05E8 \u05DC\u05D8\u05D9\u05E4\u05D5\u05D7 \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA, \u05D7\u05D5\u05E1\u05DF \u05E8\u05D2\u05E9\u05D9 \u05D5\u05D4\u05E9\u05E7\u05D8 \u05D4\u05D1\u05DC\u05EA\u05D9 \u05DE\u05E2\u05D5\u05E8\u05E2\u05E8."
      ),
    },
  ]

  return (
    <section id="work">
      {/* Section header */}
      <div
        ref={headerRef}
        className="py-20 md:py-28 px-6 md:px-12 lg:px-20 xl:px-28"
        style={{ background: "hsl(var(--background))" }}
      >
        <div className="max-w-5xl mx-auto">
          <span
            className="font-sans text-[10px] tracking-[0.4em] uppercase block mb-8"
            style={{
              color: "hsl(var(--foreground) / 0.3)",
              opacity: headerVisible ? 1 : 0,
              transition: "opacity 1.4s 0.1s",
            }}
          >
            {t("Work", "\u05E2\u05D1\u05D5\u05D3\u05D4")}
          </span>
          <h2
            className="font-serif text-[clamp(2rem,5vw,4.5rem)] font-light text-foreground tracking-[-0.03em]"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            {t("Three paths, one practice", "\u05E9\u05DC\u05D5\u05E9\u05D4 \u05E0\u05EA\u05D9\u05D1\u05D9\u05DD, \u05EA\u05E8\u05D2\u05D5\u05DC \u05D0\u05D7\u05D3")}
          </h2>
        </div>
      </div>

      {/* Work cards with clip-path reveals */}
      {works.map((work, i) => (
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title}
          subtitle={work.subtitle}
          description={work.description}
          index={i}
          dark={i % 2 === 0}
          jpChar={WORK_JP[i]}
        />
      ))}
    </section>
  )
}
