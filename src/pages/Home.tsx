import { Link } from 'react-router-dom'
import { hours, site } from '../data/site'

const favorites = [
  { name: 'Chicken Phở', image: '/images/large/chicken_pho.jpg', anchor: '/menu#pho' },
  { name: 'Brisket Phở', image: '/images/large/brisket_pho.jpg', anchor: '/menu#pho' },
  { name: 'Traditional Bánh Mì', image: '/images/large/traditional_banh_mi.jpg', anchor: '/menu#banh-mi' },
  { name: 'Grilled Pork Vermicelli', image: '/images/large/grilled_pork_vermicelli.jpg', anchor: '/menu#bun' },
  { name: 'Pork Spring Rolls', image: '/images/large/pork_spring_rolls.jpg', anchor: '/menu#rolls' },
  { name: 'Seafood Phở', image: '/images/thumb/seafood_pho.jpg', anchor: '/menu#pho' },
]

export default function Home() {
  return (
    <>
      <section
        className="relative flex min-h-[420px] items-end bg-cover bg-[center_65%] text-paper sm:min-h-[560px]"
        style={{ backgroundImage: "url('/images/large/vph_outside.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pine-dark/15 via-pine-dark/55 to-pine-dark/90" />
        <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-11">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Blacksburg, Virginia</p>
          <h1 className="mt-3 text-4xl leading-[1.02] font-semibold sm:text-6xl">Phở, done right.</h1>
          <p className="mt-4 max-w-[46ch] text-base text-paper/90 sm:text-lg">
            Bone broth simmered low and slow since sunrise, rice noodles cut fresh, and herbs locally sourced. 
            Vietnamese comfort food, served in downtown Blacksburg.
          </p>
          <div className="mt-6 flex flex-wrap gap-3.5">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-pine bg-pine px-5.5 py-3 text-sm font-semibold text-paper transition-colors hover:border-pine-dark hover:bg-pine-dark"
            >
              Order Online
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-paper/60 px-5.5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper hover:text-pine-dark"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-[var(--header-h)] py-16 sm:py-19">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 md:items-center md:gap-14">
          <div className="order-2 md:order-1">
            <p className="text-xs font-semibold tracking-[0.16em] text-pine uppercase">Our Story</p>
            <h2 className="mt-2.5 text-3xl sm:text-4xl">A family broth, simmered since sunrise</h2>
            <p className="mt-4 text-base text-ink-soft">
              Viet Phở You started with one goal: bring the bowl of phở we grew up on to Blacksburg,
              exactly as it should be. Bones roast overnight, broth simmers for twelve hours, and every
              bowl gets built to order — noodles, herbs, and a squeeze of lime, just like home.
            </p>
            <p className="mt-3 text-base text-ink-soft">
              Everything on the menu is made in-house daily, from the bánh mì baguette to the nước chấm
              on the fresh rolls.
            </p>
            <div className="mt-7 flex gap-9 border-t border-rule pt-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-pine tabular-nums">12+ hrs</span>
                <span className="text-sm text-ink-soft">Broth simmer time</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-pine tabular-nums">100%</span>
                <span className="text-sm text-ink-soft">Made in-house daily</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-pine tabular-nums">126</span>
                <span className="text-sm text-ink-soft">Jackson St NE</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/large/brisket_pho.jpg"
              alt="Bowl of brisket phở topped with fresh herbs and scallion"
              className="aspect-[4/5] w-full rounded-sm object-cover shadow-[0_18px_40px_-22px_rgba(18,48,36,0.35)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 sm:py-19">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-[56ch]">
            <p className="text-xs font-semibold tracking-[0.16em] text-pine uppercase">On The Menu</p>
            <h2 className="mt-2.5 text-3xl sm:text-4xl">A few favorites</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {favorites.map((dish) => (
              <Link key={dish.name} to={dish.anchor} className="group text-ink">
                <div className="mb-3 aspect-square overflow-hidden rounded-sm">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <div className="font-display text-base font-semibold sm:text-lg">{dish.name}</div>
              </Link>
            ))}
          </div>
          <div className="mt-11 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-ink px-5.5 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              See the Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-[var(--header-h)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center bg-pine-dark px-6 py-14 text-paper sm:px-12 sm:py-16">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">Visit Us</p>
            <h2 className="mt-2.5 text-3xl text-paper sm:text-4xl">Hours &amp; location</h2>
            <p className="mt-5 text-base">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phone}
              </a>
            </p>
            <table className="mt-7 w-full tabular-nums">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="border-t border-white/15">
                    <td className="py-1.5 text-sm">{h.day}</td>
                    <td
                      className={`py-1.5 text-right text-sm ${h.closed ? 'text-brick italic' : 'text-paper/85'}`}
                    >
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-paper/60 px-5.5 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-pine-dark"
            >
              Get Directions
            </a>
          </div>
          <div className="min-h-[280px] overflow-hidden">
            <img
              src="/images/large/pork_spring_rolls.jpg"
              alt="Fresh spring rolls plated at Việt Phở You"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
