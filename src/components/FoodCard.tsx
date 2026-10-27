import { img, type Dish } from '../data'

export function FoodCard({ dish, forceHover = false }: { dish: Dish; forceHover?: boolean }) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-cream-deep">
        <img
          src={img(dish.image, 800)}
          alt={dish.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out-soft ${forceHover ? 'scale-[1.04]' : 'group-hover:scale-[1.04]'}`}
        />
        {dish.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 t-caption font-semibold text-forest">{dish.tag}</span>
        )}
      </div>
      <div
        className={`mt-5 flex items-baseline justify-between gap-4 border-b pb-4 transition-colors duration-300 ${
          forceHover ? 'border-tomato' : 'border-charcoal/15 group-hover:border-tomato'
        }`}
      >
        <h3 className="t-h4 text-forest">{dish.name}</h3>
        <span className="font-serif text-xl tabular-nums text-tomato-deep">${dish.price}</span>
      </div>
      <p className="t-caption mt-3 font-semibold uppercase tracking-[0.14em] text-charcoal/45">{dish.italian}</p>
      <p className="t-small mt-2 text-charcoal/70">{dish.description}</p>
    </article>
  )
}
