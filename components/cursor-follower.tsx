"use client"

import { useEffect, useRef } from "react"

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const ease = 0.08
      position.current.x += (target.current.x - position.current.x) * ease
      position.current.y += (target.current.y - position.current.y) * ease

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${position.current.x - 12}px, ${position.current.y - 12}px)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    const frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor-follower fixed top-0 left-0 w-6 h-6 rounded-full border border-foreground/30 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{ willChange: "transform" }}
      aria-hidden="true"
    />
  )
}
