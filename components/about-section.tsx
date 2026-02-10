"use client"

import { useLanguage } from "@/lib/language-context"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollReveal(0.15)
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2)

  return (
    <section
      id="about"
      className="py-24 md:py-40 lg:py-56 px-6 md:px-12 lg:px-20"
      style={{ background: "hsl(30 10% 6%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div
          ref={ref}
          className={`transition-all duration-[1500ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-12 md:mb-16"
            style={{ color: "hsl(40 15% 92% / 0.35)" }}
          >
            {t("About", "\u05D0\u05D5\u05D3\u05D5\u05EA")}
          </span>

          <p
            className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-[1.3] md:leading-[1.4] tracking-[-0.01em]"
            style={{ color: "hsl(40 15% 92%)" }}
          >
            {t(
              "A martial arts teacher specializing in the integration of somatic learning processes, a meditation and conscious movement guide, and a facilitator of resilience and self-regulation skills.",
              "\u05DE\u05D5\u05E8\u05D4 \u05DC\u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4 \u05D4\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05E9\u05D9\u05DC\u05D5\u05D1 \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA, \u05DE\u05D3\u05E8\u05D9\u05DA \u05DE\u05D3\u05D9\u05D8\u05E6\u05D9\u05D4 \u05D5\u05EA\u05E0\u05D5\u05E2\u05D4 \u05DE\u05D5\u05D3\u05E2\u05EA, \u05D5\u05DE\u05E0\u05D7\u05D4 \u05DC\u05DE\u05D9\u05D5\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05D7\u05D5\u05E1\u05DF \u05D5\u05D5\u05D9\u05E1\u05D5\u05EA \u05E2\u05E6\u05DE\u05D9."
            )}
          </p>
        </div>

        {/* Divider */}
        <div
          className="my-16 md:my-24 h-px w-full"
          style={{ background: "hsl(40 15% 92% / 0.08)" }}
        />

        {/* Philosophy quote */}
        <div
          ref={quoteRef}
          className={`flex flex-col md:flex-row gap-8 md:gap-16 transition-all duration-[1500ms] ease-out ${
            quoteVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="shrink-0">
            <span
              className="font-sans text-6xl md:text-8xl font-extralight jp-char"
              style={{ color: "hsl(18 60% 42% / 0.4)" }}
              aria-hidden="true"
            >
              {"\u9053"}
            </span>
          </div>
          <div>
            <p
              className="font-sans text-sm md:text-base font-light leading-relaxed"
              style={{ color: "hsl(40 15% 92% / 0.6)" }}
            >
              {t(
                "The path is not about arriving. It is about the quality of each step, the depth of each breath, the integrity of each moment. True mastery is found in the space between effort and surrender.",
                "\u05D4\u05D3\u05E8\u05DA \u05D0\u05D9\u05E0\u05D4 \u05E2\u05DC \u05D4\u05D4\u05D2\u05E2\u05D4. \u05D4\u05D9\u05D0 \u05E2\u05DC \u05D0\u05D9\u05DB\u05D5\u05EA \u05DB\u05DC \u05E6\u05E2\u05D3, \u05E2\u05D5\u05DE\u05E7 \u05DB\u05DC \u05E0\u05E9\u05D9\u05DE\u05D4, \u05D9\u05D5\u05E9\u05E8\u05D4 \u05E9\u05DC \u05DB\u05DC \u05E8\u05D2\u05E2. \u05E9\u05DC\u05D9\u05D8\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05E0\u05DE\u05E6\u05D0\u05EA \u05D1\u05DE\u05E8\u05D7\u05D1 \u05E9\u05D1\u05D9\u05DF \u05DE\u05D0\u05DE\u05E5 \u05DC\u05DB\u05E0\u05D9\u05E2\u05D4."
              )}
            </p>
            <p
              className="font-sans text-xs tracking-[0.2em] uppercase mt-6"
              style={{ color: "hsl(40 15% 92% / 0.3)" }}
            >
              {t("The Way", "\u05D4\u05D3\u05E8\u05DA")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
