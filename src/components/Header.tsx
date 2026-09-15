import { useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../data/site'

/**
 * Measures the header's real rendered height (it compresses at narrow
 * widths) and exposes it as --header-h so anchored sections and the
 * menu page's category nav can offset against the actual sticky bar
 * instead of a hard-coded desktop height.
 */
function useHeaderHeightVar(ref: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const setVar = () => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`)
    }

    setVar()
    const observer = new ResizeObserver(setVar)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

const navLinkClass =
  (visibility: string) =>
  ({ isActive }: { isActive: boolean }) =>
    `${visibility} whitespace-nowrap border-b-2 pb-1 pt-1 transition-colors hover:text-pine ${
      isActive ? 'border-gold text-pine' : 'border-transparent text-ink-soft'
    }`

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  useHeaderHeightVar(headerRef)

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-rule bg-paper"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-1.5 px-2.5 py-1.5 sm:gap-4 sm:px-6 sm:py-2.5">
        <Link to="/" className="flex min-w-0 flex-shrink items-center gap-1.5 sm:flex-shrink-0 sm:gap-2.5">
          <span className="grid h-8 w-8 flex-shrink-0 place-items-center overflow-hidden rounded-full border border-rule bg-white sm:h-11 sm:w-11">
            <img
              src="/images/logo.png"
              alt="Việt Phở You bowl-and-chopsticks mark"
              className="h-[78%] w-[78%] object-contain"
            />
          </span>
          <span className="truncate font-display text-xs font-semibold leading-tight tracking-tight sm:text-lg">
            Viet Ph<em className="text-pine not-italic">ở</em> You
          </span>
        </Link>

        <nav className="mx-auto flex flex-shrink-0 items-center gap-4 text-sm font-medium sm:gap-6">
          <NavLink to="/#about" className={navLinkClass('hidden md:inline')}>
            About
          </NavLink>
          <NavLink to="/menu" className={navLinkClass('inline text-xs sm:text-sm')}>
            Menu
          </NavLink>
          <NavLink to="/#visit" className={navLinkClass('hidden md:inline')}>
            Hours &amp; Location
          </NavLink>
        </nav>

        <div className="ml-auto flex flex-shrink-0 items-center gap-1.5 sm:gap-4">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name} at ${site.phone}`}
            className="whitespace-nowrap text-[11px] font-semibold hover:text-pine sm:text-sm"
          >
            {site.phone}
          </a>
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-pine px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap text-paper transition-colors hover:bg-pine-dark sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Order</span>
            <span className="hidden sm:inline">Order Online</span>
          </a>
        </div>
      </div>
    </header>
  )
}
