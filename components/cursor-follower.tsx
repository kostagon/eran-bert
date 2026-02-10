"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const position = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const innerPos = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = el?.closest("a, button, [role='button'], input, textarea, select")
      setHovering(!!isInteractive)
    }

    const animate = () => {
      // Outer ring: slower, more lag
      const outerEase = 0.06
      position.current.x += (target.current.x - position.current.x) * outerEase
      position.current.y += (target.current.y - position.current.y) * outerEase

      // Inner dot: faster, snappier
      const innerEase = 0.15
      innerPos.current.x += (target.current.x - innerPos.current.x) * innerEase
      innerPos.current.y += (target.current.y - innerPos.current.y) * innerEase

      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%)`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${innerPos.current.x}px, ${innerPos.current.y}px) translate(-50%, -50%)`
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
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="cursor-follower fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: "50%",
          border: "1px solid hsl(40 15% 92% / 0.4)",
          transition: "width 0.5s cubic-bezier(0.16,1,0.3,1), height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s",
          willChange: "transform",
          opacity: hovering ? 0.8 : 0.35,
        }}
        aria-hidden="true"
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="cursor-follower fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          borderRadius: "50%",
          background: "hsl(40 15% 92% / 0.7)",
          transition: "width 0.4s, height 0.4s",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    </>
  )
}
