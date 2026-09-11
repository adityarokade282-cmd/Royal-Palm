import { Clock, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { restaurants } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

export default function Dining() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="dining" className="section-padding bg-cream-50">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Culinary Excellence</p>
          <h2 className="mt-4 heading-title">Fine Dining Experiences</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Savor exquisite flavors crafted by master chefs across three distinctive dining
            venues, each offering a unique ambiance and culinary journey.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 lg:grid-cols-3">
          {restaurants.map((r, i) => (
            <article
              key={r.name}
              className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-charcoal-900/5 transition-all duration-500 hover:shadow-2xl`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/50 to-transparent" />
                <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gold-600 backdrop-blur-sm">
                  <UtensilsCrossed className="h-3.5 w-3.5" />
                  {r.cuisine}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-charcoal-900">{r.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">
                  {r.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-charcoal-700">
                  <Clock className="h-4 w-4 text-gold-500" />
                  {r.timings}
                </div>
                <button className="mt-5 flex items-center justify-center gap-1.5 rounded-full border border-gold-300 px-5 py-2.5 text-xs font-semibold text-gold-600 transition-all duration-300 hover:bg-gold-500 hover:text-white active:scale-95">
                  View Menu <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
