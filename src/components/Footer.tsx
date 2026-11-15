import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white/80">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-9 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-paper">
                <img src="/images/logo.png" alt="" className="h-[78%] w-[78%] object-contain" />
              </span>
              <span className="font-display text-lg font-semibold text-paper">Viet Phở You</span>
            </div>
            <p className="text-sm">
              Vietnamese comfort food in downtown Blacksburg.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-paper uppercase">Visit</h3>
            <p className="text-sm">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
            <p className="mt-2 text-sm">
              <a href={site.phoneHref} className="hover:text-paper">
                {site.phone}
              </a>
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-paper uppercase">Order</h3>
            <p className="text-sm">
              <a href={site.orderUrl} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                Order Online &rarr;
              </a>
            </p>
            <p className="mt-2 text-sm">
              <Link to="/menu" className="hover:text-paper">
                View Menu &rarr;
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-sm text-white/55">
          <span>&copy; 2026 Viet Phở You</span>
          <span>Tue&ndash;Sun 11 AM&ndash;9 PM &middot; Closed Mondays</span>
        </div>
      </div>
    </footer>
  )
}
