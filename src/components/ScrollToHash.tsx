import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router doesn't scroll to a URL's hash on navigation the way a
 * plain <a> does, and it doesn't reset scroll position between routes
 * either. This keeps header nav links (e.g. to /#about from the menu
 * page) and route changes behaving like a normal site.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const frame = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}
