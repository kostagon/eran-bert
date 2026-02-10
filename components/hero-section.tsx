"use client"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: "hsl(30 10% 6%)" }}
    >
      {/* Atmospheric gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, hsl(18 60% 42% / 0.06) 0%, transparent 70%), radial-gradient(ellipse at 70% 30%, hsl(40 20% 97% / 0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle horizontal line */}
      <div
        className="absolute top-1/2 inset-inline-start-0 inset-inline-end-0 h-px bg-[hsl(40,15%,92%)]/5"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Small Japanese characters above */}
          <p
            className="text-[hsl(40,15%,92%)]/30 text-xs md:text-sm tracking-[0.5em] mb-6 md:mb-8 font-sans jp-char"
            aria-hidden="true"
          >
            {"\u5BAE \u672C \u6B66 \u8535"}
          </p>

          {/* Main headline */}
          <h1 className="text-[hsl(40,15%,92%)] font-serif text-5xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-light leading-[0.9] tracking-[-0.02em] text-balance">
            <span
              className={`block transition-all duration-[2000ms] ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {t("Still", "\u05E9\u05E7\u05D8")}
            </span>
            <span
              className={`block mt-2 md:mt-4 transition-all duration-[2000ms] ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {t("Water", "\u05DE\u05D9\u05DD")}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className={`text-[hsl(40,15%,92%)]/50 font-sans text-sm md:text-base font-light tracking-[0.05em] mt-8 md:mt-12 max-w-md leading-relaxed transition-all duration-[2000ms] ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          {t(
            "Martial arts. Somatic learning. The art of presence.",
            "\u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4. \u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA. \u05D0\u05DE\u05E0\u05D5\u05EA \u05D4\u05E0\u05D5\u05DB\u05D7\u05D5\u05EA."
          )}
        </p>

        {/* Scroll indicator */}
        <div
          className={`mt-16 md:mt-24 transition-all duration-[2000ms] ease-out ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-px h-12 bg-[hsl(40,15%,92%)]/20 animate-pulse" />
            <span className="text-[hsl(40,15%,92%)]/30 text-[10px] tracking-[0.3em] uppercase font-sans">
              {t("Scroll", "\u05D2\u05DC\u05D5\u05DC")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
