import { menu } from '../data/menu'
import { site } from '../data/site'

export default function Menu() {
  return (
    <>
      <section className="border-b border-rule bg-pine-tint py-10 sm:py-11">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-pine uppercase">The Full Menu</p>
          <h1 className="mt-2.5 text-3xl sm:text-5xl">Everything we make, in-house, daily</h1>
          <p className="mt-3 max-w-[60ch] text-base text-ink-soft">
            Browse the menu here, then order for pickup through our online ordering site.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3.5">
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-pine px-5.5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-pine-dark"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      <nav className="sticky top-[var(--header-h)] z-30 border-b border-rule bg-paper">
        <div className="mx-auto flex max-w-6xl gap-2.5 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="flex-shrink-0 rounded-full border border-rule bg-paper-2 px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink-soft hover:border-pine hover:text-pine"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {menu.map((category, i) => (
            <section
              key={category.id}
              id={category.id}
              className={`scroll-mt-[calc(var(--header-h)+56px)] ${i === 0 ? 'pt-9' : 'pt-14'} sm:pt-16`}
            >
              <div className="mb-7 flex items-baseline gap-4.5">
                <h2 className="text-2xl text-pine italic sm:text-3xl">{category.title}</h2>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-x-10 md:gap-y-7">
                {category.items.map((item) => (
                  <div key={item.name} className="flex gap-4">
                    {item.image && (
                      <div className="h-[78px] w-[78px] flex-shrink-0 overflow-hidden rounded-sm">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display font-semibold">{item.name}</span>
                        <span className="-translate-y-0.5 flex-1 border-b border-dotted border-rule" />
                        <span className="flex-shrink-0 font-semibold text-pine tabular-nums">{item.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-sm bg-pine-dark p-9 text-paper sm:mt-18">
            <div>
              <h3 className="text-xl text-paper sm:text-2xl">Ready to order?</h3>
              <p className="mt-1.5 text-paper/80">Pickup and delivery are handled through MealKeyWay.</p>
            </div>
            <a
              href={site.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-paper/60 px-5.5 py-3 text-sm font-semibold transition-colors hover:bg-paper hover:text-pine-dark"
            >
              Order Online &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
