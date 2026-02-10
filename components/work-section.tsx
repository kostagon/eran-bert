"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface WorkCardProps {
  id: string
  title: string
  subtitle: string
  description: string
  index: number
  dark?: boolean
}

function WorkCard({ id, title, subtitle, description, index, dark = false }: WorkCardProps) {
  const { ref, isVisible } = useScrollReveal(0.15)

  const bgColor = dark ? "hsl(30 10% 6%)" : "hsl(40 20% 97%)"
  const textColor = dark ? "hsl(40 15% 92%)" : "hsl(30 10% 8%)"
  const mutedColor = dark ? "hsl(40 15% 92% / 0.45)" : "hsl(30 10% 8% / 0.45)"
  const accentColor = "hsl(18 60% 42% / 0.6)"
  const borderColor = dark ? "hsl(40 15% 92% / 0.06)" : "hsl(30 10% 8% / 0.06)"

  return (
    <article
      id={id}
      ref={ref}
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
      style={{ background: bgColor }}
    >
      <div
        className={`max-w-5xl mx-auto transition-all duration-[1500ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Number and label */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase"
            style={{ color: mutedColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px" style={{ background: borderColor }} />
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase"
            style={{ color: accentColor }}
          >
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] mb-8 md:mb-12"
          style={{ color: textColor }}
        >
          {title}
        </h3>

        {/* Description */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/2">
            <p
              className="font-sans text-sm md:text-base font-light leading-relaxed"
              style={{ color: mutedColor }}
            >
              {description}
            </p>
          </div>

          {/* Decorative element */}
          <div className="md:w-1/2 flex items-end justify-end">
            <div
              className="w-32 h-32 md:w-48 md:h-48 border opacity-20"
              style={{
                borderColor: textColor,
                borderRadius: index === 0 ? "50%" : index === 1 ? "0" : "50% 0 50% 0",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export function WorkSection() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.15)

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
        "\u05E7\u05D4\u05D9\u05DC\u05D4 \u05DE\u05E1\u05D5\u05E8\u05D4 \u05E9\u05DC \u05DE\u05EA\u05E8\u05D2\u05DC\u05D9\u05DD \u05D4\u05DE\u05D7\u05D5\u05D9\u05D1\u05D9\u05DD \u05DC\u05E6\u05DE\u05D9\u05D7\u05D4 \u05D3\u05E8\u05DA \u05D0\u05D9\u05DE\u05D5\u05DF \u05DE\u05DE\u05D5\u05E9\u05DE\u05E2. Team Bert \u05D1\u05E0\u05D5\u05D9 \u05E2\u05DC \u05DB\u05D1\u05D5\u05D3 \u05D4\u05D3\u05D3\u05D9, \u05DE\u05D8\u05E8\u05D4 \u05DE\u05E9\u05D5\u05EA\u05E4\u05EA \u05D5\u05D4\u05D1\u05E0\u05D4 \u05E9\u05E9\u05DC\u05D9\u05D8\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05DE\u05E9\u05E8\u05EA\u05EA \u05D0\u05EA \u05D4\u05DB\u05DC\u05DC."
      ),
    },
    {
      id: "eitan",
      title: t("\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7", "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7"),
      subtitle: t("Spirit", "\u05E8\u05D5\u05D7"),
      description: t(
        "Eitan BaRuach \u2014 steadfast in spirit. A dedicated practice space for cultivating inner strength, emotional resilience, and the unshakable calm that comes from deep self-knowledge and somatic integration.",
        "\u05D0\u05D9\u05EA\u05DF \u05D1\u05E8\u05D5\u05D7 \u2014 \u05DE\u05E8\u05D7\u05D1 \u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05E1\u05D5\u05E8 \u05DC\u05D8\u05D9\u05E4\u05D5\u05D7 \u05E2\u05D5\u05E6\u05DE\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA, \u05D7\u05D5\u05E1\u05DF \u05E8\u05D2\u05E9\u05D9 \u05D5\u05D4\u05E9\u05E7\u05D8 \u05D4\u05D1\u05DC\u05EA\u05D9 \u05DE\u05E2\u05D5\u05E8\u05E2\u05E8 \u05E9\u05DE\u05D2\u05D9\u05E2 \u05DE\u05D4\u05D9\u05DB\u05E8\u05D5\u05EA \u05E2\u05DE\u05D5\u05E7\u05D4 \u05D5\u05E9\u05D9\u05DC\u05D5\u05D1 \u05E1\u05D5\u05DE\u05D8\u05D9."
      ),
    },
  ]

  return (
    <section id="work">
      {/* Section header */}
      <div
        ref={headerRef}
        className="py-16 md:py-24 px-6 md:px-12 lg:px-20"
        style={{ background: "hsl(40 20% 97%)" }}
      >
        <div
          className={`max-w-5xl mx-auto transition-all duration-[1500ms] ease-out ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
            {t("Work", "\u05E2\u05D1\u05D5\u05D3\u05D4")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[-0.02em]">
            {t("Three paths, one practice", "\u05E9\u05DC\u05D5\u05E9\u05D4 \u05E0\u05EA\u05D9\u05D1\u05D9\u05DD, \u05EA\u05E8\u05D2\u05D5\u05DC \u05D0\u05D7\u05D3")}
          </h2>
        </div>
      </div>

      {/* Work cards - alternating light/dark */}
      {works.map((work, i) => (
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title}
          subtitle={work.subtitle}
          description={work.description}
          index={i}
          dark={i % 2 === 0}
        />
      ))}
    </section>
  )
}
