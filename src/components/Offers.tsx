import { Tag, ArrowRight } from 'lucide-react';
import { offers } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

export default function Offers() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="offers" className="section-padding bg-cream-50">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Exclusive Deals</p>
          <h2 className="mt-4 heading-title">Special Offers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Take advantage of our curated packages for an unforgettable stay at exceptional value.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-8 md:grid-cols-3">
          {offers.map((offer, i) => (
            <article
              key={offer.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl shadow-lg shadow-charcoal-900/5 transition-all duration-500 hover:shadow-2xl`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative h-80 overflow-hidden rounded-3xl">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-900/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {offer.badge}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
                  {offer.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5">
                  <Tag className="h-4 w-4 text-gold-300" />
                  <span className="text-sm font-semibold text-gold-300">{offer.discount}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {offer.description}
                </p>
                <a
                  href="#booking"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-charcoal-900 transition-all duration-300 hover:bg-gold-500 hover:text-white active:scale-95"
                >
                  Book Offer <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
