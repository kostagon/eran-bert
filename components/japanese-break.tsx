"use client"

import { useScrollReveal, useScrollProgress } from "@/hooks/use-scroll-reveal"
import { useRef, useEffect, useState } from "react"

interface JapaneseBreakProps {
  characters: string
  dark?: boolean
  subtitle?: string
}

export function JapaneseBreak({ characters, dark = false, subtitle }: JapaneseBreakProps) {
  const { ref, isVisible } = useScrollReveal(0.15)
  const { ref: parallaxRef, progress } = useScrollProgress()
  const [charStates, setCharStates] = useState<boolean[]>([])

  const chars = characters.split(" ").filter(Boolean)

  // Stagger character reveals
  useEffect(() => {
    if (!isVisible) return
    const timers: ReturnType<typeof setTimeout>[] = []
    chars.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setCharStates((prev) => {
            const next = [...prev]
            next[i] = true
            return next
          })
        }, 200 + i * 250)
      )
    })
    return () => timers.forEach(clearTimeout)
  }, [isVisible, chars.length])

  const bgColor = dark ? "hsl(var(--ink))" : "hsl(var(--background))"
  const textColor = dark ? "hsl(var(--stone))" : "hsl(var(--foreground))"
  const subtitleColor = dark ? "hsl(var(--stone) / 0.18)" : "hsl(var(--foreground) / 0.15)"

  // Parallax: subtle vertical drift
  const yOffset = (progress - 0.5) * -30

  return (
    <section
      ref={parallaxRef}
      className="relative py-32 md:py-48 lg:py-64 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: bgColor }}
      aria-hidden="true"
    >
      {/* Very faint large kanji watermark behind */}
      {chars[0] && (
        <span
          className="absolute font-sans pointer-events-none select-none"
          style={{
            fontSize: "clamp(20rem, 50vw, 50rem)",
            color: dark ? "hsl(var(--stone) / 0.015)" : "hsl(var(--foreground) / 0.015)",
            lineHeight: 1,
            transform: `translateY(${yOffset * 2}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {chars[0]}
        </span>
      )}

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center"
        style={{
          transform: `translateY(${yOffset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Characters with staggered reveal */}
        <div className="flex items-center gap-3 md:gap-6 lg:gap-10">
          {chars.map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="font-sans text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extralight jp-char"
              style={{
                color: textColor,
                opacity: charStates[i] ? 1 : 0,
                transform: charStates[i] ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                filter: charStates[i] ? "blur(0)" : "blur(4px)",
                transition: `opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1), filter 1.4s cubic-bezier(0.16,1,0.3,1)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="font-sans text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] mt-10 md:mt-16 font-light uppercase"
            style={{
              color: subtitleColor,
              opacity: isVisible ? 1 : 0,
              transition: "opacity 2s cubic-bezier(0.16,1,0.3,1) 0.8s",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
