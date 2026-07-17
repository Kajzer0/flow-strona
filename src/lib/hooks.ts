import { useEffect, useRef, useState } from 'react'

/**
 * Adds `.is-visible` to every `.reveal` element as it enters the viewport.
 * Respects prefers-reduced-motion (everything is shown immediately).
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (els.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** Tracks which page section is currently in view; returns its id. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return active
}

/**
 * Vertical parallax for a section background image.
 * Returns a ref to attach to the section and the current translateY percentage.
 * Respects prefers-reduced-motion (image stays still).
 */
export function useParallax(rate = 0.12) {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number | null>(null)
  const lastScrollRef = useRef<number>(-1)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const sectionHeight = rect.height

        // Section is fully above or below the viewport -> nothing to do.
        if (rect.bottom <= 0 || rect.top >= windowHeight) return

        // Progress: -1 when section bottom enters viewport, 1 when top leaves viewport.
        const progress = (rect.top + sectionHeight / 2 - windowHeight / 2) / (windowHeight / 2 + sectionHeight / 2)
        const nextOffset = progress * rate * 100

        if (nextOffset !== lastScrollRef.current) {
          lastScrollRef.current = nextOffset
          setOffset(nextOffset)
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [rate])

  return { ref, offset }
}
