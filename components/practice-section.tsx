"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface DomainCardProps {
  title: string
  description: string
  index: number
  dark?: boolean
}

function DomainCard({ title, description, index, dark = false }: DomainCardProps) {
  const { ref, isVisible } = useScrollReveal(0.2)

  const textColor = dark ? "hsl(40 15% 92%)" : "hsl(30 10% 8%)"
  const mutedColor = dark ? "hsl(40 15% 92% / 0.5)" : "hsl(30 10% 8% / 0.5)"
  const borderColor = dark ? "hsl(40 15% 92% / 0.08)" : "hsl(30 10% 8% / 0.08)"

  return (
    <div
      ref={ref}
      className={`py-12 md:py-16 transition-all duration-[1500ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        borderBlockEnd: `1px solid ${borderColor}`,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
        <span
          className="font-sans text-[10px] tracking-[0.3em] uppercase font-light shrink-0 w-8"
          style={{ color: mutedColor }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <h3
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-[-0.01em]"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="font-sans text-sm md:text-base font-light leading-relaxed mt-4 max-w-lg"
            style={{ color: mutedColor }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function PracticeSection() {
  const { t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.2)

  const domains = [
    {
      title: t("Martial Arts Teaching", "\u05D4\u05D5\u05E8\u05D0\u05EA \u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4"),
      description: t(
        "A practice rooted in discipline, awareness, and the continuous refinement of body and mind. Training that builds not just technique, but character.",
        "\u05EA\u05E8\u05D2\u05D5\u05DC \u05DE\u05D5\u05E9\u05EA\u05EA \u05E2\u05DC \u05DE\u05E9\u05DE\u05E2\u05EA, \u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05D5\u05D7\u05D9\u05D3\u05D5\u05D3 \u05DE\u05EA\u05DE\u05D9\u05D3 \u05E9\u05DC \u05D2\u05D5\u05E3 \u05D5\u05E0\u05E4\u05E9. \u05D0\u05D9\u05DE\u05D5\u05DF \u05E9\u05D1\u05D5\u05E0\u05D4 \u05DC\u05D0 \u05E8\u05E7 \u05D8\u05DB\u05E0\u05D9\u05E7\u05D4, \u05D0\u05DC\u05D0 \u05D0\u05D5\u05E4\u05D9."
      ),
    },
    {
      title: t("Somatic Learning Integration", "\u05E9\u05D9\u05DC\u05D5\u05D1 \u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA"),
      description: t(
        "Bridging the gap between knowing and embodying. Somatic practices that bring intelligence from the mind into the tissues, the breath, the movement.",
        "\u05D2\u05D9\u05E9\u05D5\u05E8 \u05D4\u05E4\u05E2\u05E8 \u05D1\u05D9\u05DF \u05D9\u05D3\u05D9\u05E2\u05D4 \u05DC\u05D4\u05EA\u05D2\u05DC\u05DE\u05D5\u05EA. \u05EA\u05E8\u05D2\u05D5\u05DC\u05D9\u05DD \u05E1\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05E9\u05DE\u05E2\u05D1\u05D9\u05E8\u05D9\u05DD \u05D0\u05D9\u05E0\u05D8\u05DC\u05D9\u05D2\u05E0\u05E6\u05D9\u05D4 \u05DE\u05D4\u05DE\u05D5\u05D7 \u05D0\u05DC \u05D4\u05E8\u05E7\u05DE\u05D5\u05EA, \u05D4\u05E0\u05E9\u05D9\u05DE\u05D4, \u05D4\u05EA\u05E0\u05D5\u05E2\u05D4."
      ),
    },
    {
      title: t("Meditation Guidance", "\u05D4\u05D3\u05E8\u05DB\u05EA \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4"),
      description: t(
        "Cultivating stillness as a practice of power. Guided meditation that sharpens attention, deepens presence, and dissolves unnecessary tension.",
        "\u05D8\u05D9\u05E4\u05D5\u05D7 \u05E9\u05E7\u05D8 \u05DB\u05EA\u05E8\u05D2\u05D5\u05DC \u05E9\u05DC \u05E2\u05D5\u05E6\u05DE\u05D4. \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4 \u05DE\u05D5\u05E0\u05D7\u05D9\u05EA \u05E9\u05DE\u05D7\u05D3\u05D3\u05EA \u05E7\u05E9\u05D1, \u05DE\u05E2\u05DE\u05D9\u05E7\u05D4 \u05E0\u05D5\u05DB\u05D7\u05D5\u05EA \u05D5\u05DE\u05DE\u05D9\u05E1\u05D4 \u05DE\u05EA\u05D7 \u05DE\u05D9\u05D5\u05EA\u05E8."
      ),
    },
    {
      title: t("Conscious Movement", "\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DE\u05D5\u05D3\u05E2\u05EA"),
      description: t(
        "Movement as language. Every gesture carries intention, every step a statement. Learning to inhabit the body with full awareness and purpose.",
        "\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DB\u05E9\u05E4\u05D4. \u05DB\u05DC \u05DE\u05D7\u05D5\u05D5\u05D4 \u05E0\u05D5\u05E9\u05D0\u05EA \u05DB\u05D5\u05D5\u05E0\u05D4, \u05DB\u05DC \u05E6\u05E2\u05D3 \u05D4\u05D5\u05D0 \u05D4\u05E6\u05D4\u05E8\u05D4. \u05DC\u05DC\u05DE\u05D5\u05D3 \u05DC\u05D0\u05DB\u05DC\u05E1 \u05D0\u05EA \u05D4\u05D2\u05D5\u05E3 \u05D1\u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D5\u05DE\u05D8\u05E8\u05D4."
      ),
    },
    {
      title: t("Resilience & Regulation", "\u05D7\u05D5\u05E1\u05DF \u05D5\u05D5\u05D9\u05E1\u05D5\u05EA"),
      description: t(
        "Building the inner architecture of stability. Tools and practices for self-regulation, emotional resilience, and grounded responsiveness.",
        "\u05D1\u05E0\u05D9\u05D9\u05EA \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4 \u05E4\u05E0\u05D9\u05DE\u05D9\u05EA \u05E9\u05DC \u05D9\u05E6\u05D9\u05D1\u05D5\u05EA. \u05DB\u05DC\u05D9\u05DD \u05D5\u05EA\u05E8\u05D2\u05D5\u05DC\u05D9\u05DD \u05DC\u05D5\u05D5\u05D9\u05E1\u05D5\u05EA \u05E2\u05E6\u05DE\u05D9, \u05D7\u05D5\u05E1\u05DF \u05E8\u05D2\u05E9\u05D9 \u05D5\u05EA\u05D2\u05D5\u05D1\u05D4 \u05DE\u05D5\u05E9\u05E8\u05E9\u05EA."
      ),
    },
  ]

  return (
    <section
      id="practice"
      className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20"
      style={{ background: "hsl(40 20% 97%)" }}
    >
      {/* Section header */}
      <div
        ref={headerRef}
        className={`mb-16 md:mb-24 transition-all duration-[1500ms] ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
          {t("The Practice", "\u05D4\u05EA\u05E8\u05D2\u05D5\u05DC")}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-[-0.02em] text-balance max-w-3xl">
          {t("Five domains of mastery", "\u05D7\u05DE\u05D9\u05E9\u05D4 \u05EA\u05D7\u05D5\u05DE\u05D9 \u05E9\u05DC\u05D9\u05D8\u05D4")}
        </h2>
      </div>

      {/* Domain cards */}
      <div className="max-w-4xl">
        {domains.map((domain, i) => (
          <DomainCard
            key={domain.title}
            title={domain.title}
            description={domain.description}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
