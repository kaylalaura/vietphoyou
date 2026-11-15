import { useEffect, useState } from 'react'

/**
 * React Router's NavLink only knows the pathname ("/"), so a plain
 * NavLink can't tell #about and #visit apart — both read as "active"
 * the whole time you're on the homepage. This tracks which of the
 * given section ids is actually in view (just below the sticky
 * header) so nav links can highlight by scroll position instead.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    let observer: IntersectionObserver | undefined
    let rafId: number

    const setup = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)

      if (elements.length < ids.length) {
        rafId = requestAnimationFrame(setup)
        return
      }

      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 0

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting)
          if (visible.length > 0) {
            const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b))
            setActive(topMost.target.id)
          }
        },
        { rootMargin: `-${headerH + 1}px 0px -60% 0px`, threshold: 0 },
      )

      elements.forEach((el) => observer?.observe(el))
    }

    setup()

    return () => {
      cancelAnimationFrame(rafId)
      observer?.disconnect()
    }
  }, [ids, enabled])

  return active
}
