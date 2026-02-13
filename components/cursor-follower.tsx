"use client"

import { useEffect, useRef, useState } from "react"

export function CursorFollower() {
  const innerRef = useRef<HTMLDivElement>(null)
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
      // Inner dot: faster, snappier
      const innerEase = 0.15
      innerPos.current.x += (target.current.x - innerPos.current.x) * innerEase
      innerPos.current.y += (target.current.y - innerPos.current.y) * innerEase - .5

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
     
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="cursor-follower fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          width: hovering ? 8 : 6,
          height: hovering ? 8 : 6,
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
