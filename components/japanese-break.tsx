"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface JapaneseBreakProps {
  characters: string
  dark?: boolean
  subtitle?: string
}

export function JapaneseBreak({ characters, dark = false, subtitle }: JapaneseBreakProps) {
  const { ref, isVisible } = useScrollReveal(0.3)

  const bgColor = dark ? "hsl(30 10% 6%)" : "hsl(40 20% 97%)"
  const textColor = dark ? "hsl(40 15% 92%)" : "hsl(30 10% 8%)"
  const mutedColor = dark ? "hsl(40 15% 92% / 0.25)" : "hsl(30 10% 8% / 0.2)"

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 lg:py-56 flex flex-col items-center justify-center"
      style={{ background: bgColor }}
      aria-hidden="true"
    >
      <p
        className={`font-sans text-3xl md:text-5xl lg:text-7xl font-extralight tracking-[0.4em] md:tracking-[0.6em] jp-char transition-all duration-[2000ms] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ color: textColor }}
      >
        {characters}
      </p>
      {subtitle && (
        <p
          className={`font-sans text-xs md:text-sm tracking-[0.3em] mt-6 md:mt-10 font-light transition-all duration-[2000ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: mutedColor, transitionDelay: "400ms" }}
        >
          {subtitle}
        </p>
      )}
    </section>
  )
}
