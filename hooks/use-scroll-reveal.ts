"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

/**
 * Returns a scroll progress value (0-1) for an element relative to the viewport.
 * Used for parallax and scroll-driven transitions.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    // 0 = element just entered bottom, 1 = element exited top
    const raw = 1 - (rect.top / (windowHeight + rect.height))
    setProgress(Math.max(0, Math.min(1, raw)))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { ref, progress }
}
