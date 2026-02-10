"use client"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useState, useRef } from "react"

function SplitText({
  text,
  className,
  baseDelay = 0,
  charDelay = 70,
  visible,
}: {
  text: string
  className?: string
  baseDelay?: number
  charDelay?: number
  visible: boolean
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(100%)",
            transition: `opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)`,
            transitionDelay: `${baseDelay + i * charDelay}ms`,
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Subtle mouse-driven atmospheric movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      document.documentElement.style.setProperty("--hero-shift-x", `${x}px`)
      document.documentElement.style.setProperty("--hero-shift-y", `${y}px`)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      style={{ background: "hsl(var(--ink))" }}
    >
      {/* Atmospheric layers responding to mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 25% 45%, hsl(var(--warm-accent) / 0.05) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 75% 25%, hsl(var(--stone) / 0.02) 0%, transparent 60%)
          `,
          transform: "translate(var(--hero-shift-x, 0), var(--hero-shift-y, 0))",
          transition: "transform 0.8s ease-out",
        }}
        aria-hidden="true"
      />

      {/* Very faint vertical lines creating a meditative grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px"
            style={{
              insetInlineStart: `${pos}%`,
              background: `linear-gradient(to bottom, transparent 0%, hsl(var(--stone) / 0.03) 30%, hsl(var(--stone) / 0.03) 70%, transparent 100%)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 xl:px-28 pb-12 md:pb-20">
        {/* Small kanji */}
        <p
          className="text-xs tracking-[0.6em] mb-16 md:mb-24 font-sans"
          style={{
            color: "hsl(var(--stone) / 0.2)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 2s ease-out 0.5s",
          }}
          aria-hidden="true"
        >
          {"\u5BAE\u672C\u6B66\u8535"}
        </p>

        {/* Title: massive, split character reveal */}
        <h1 className="overflow-hidden" style={{ color: "hsl(var(--stone))" }}>
          <span className="block overflow-hidden">
            <SplitText
              text={t("Still", "\u05E9\u05E7\u05D8")}
              className="font-serif text-[clamp(4rem,15vw,14rem)] font-light leading-[0.85] tracking-[-0.04em]"
              baseDelay={400}
              charDelay={90}
              visible={mounted}
            />
          </span>
          <span className="block overflow-hidden mt-1 md:mt-2">
            <SplitText
              text={t("Water", "\u05DE\u05D9\u05DD")}
              className="font-serif text-[clamp(4rem,15vw,14rem)] font-light leading-[0.85] tracking-[-0.04em] italic"
              baseDelay={800}
              charDelay={90}
              visible={mounted}
            />
          </span>
        </h1>

        {/* Ink line separator drawing from inline-start */}
        <div
          ref={lineRef}
          className="mt-10 md:mt-14 h-px w-48 md:w-80"
          style={{
            background: "hsl(var(--warm-accent) / 0.3)",
            transformOrigin: "var(--line-origin, 0% 50%)",
            transform: mounted ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1.8s cubic-bezier(0.16,1,0.3,1) 1.4s",
          }}
          aria-hidden="true"
        />

        {/* Subtitle */}
        <p
          className="font-sans text-sm md:text-base font-extralight tracking-[0.04em] mt-8 md:mt-10 max-w-sm leading-relaxed"
          style={{
            color: "hsl(var(--stone) / 0.4)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.8s cubic-bezier(0.16,1,0.3,1) 1.8s, transform 1.8s cubic-bezier(0.16,1,0.3,1) 1.8s",
          }}
        >
          {t(
            "Martial arts. Somatic learning. The art of presence.",
            "\u05D0\u05DE\u05E0\u05D5\u05D9\u05D5\u05EA \u05DC\u05D7\u05D9\u05DE\u05D4. \u05DC\u05DE\u05D9\u05D3\u05D4 \u05E1\u05D5\u05DE\u05D8\u05D9\u05EA. \u05D0\u05DE\u05E0\u05D5\u05EA \u05D4\u05E0\u05D5\u05DB\u05D7\u05D5\u05EA."
          )}
        </p>

        {/* Scroll indicator - vertical line that breathes */}
        <div
          className="mt-20 md:mt-28"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 2s 2.6s",
          }}
        >
          <div className="flex items-end gap-4">
            <div
              className="w-px h-16 origin-top rule-breathe"
              style={{ background: "hsl(var(--stone) / 0.15)" }}
            />
            <span
              className="font-sans text-[9px] tracking-[0.4em] uppercase"
              style={{ color: "hsl(var(--stone) / 0.2)" }}
            >
              {t("Scroll", "\u05D2\u05DC\u05D5\u05DC")}
            </span>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(var(--ink)), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
