import { useMemo, useState } from 'react';
import { BedDouble, Users, Wifi, Check, ArrowRight } from 'lucide-react';
import { rooms, roomCategories } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

const facilityIcons: Record<string, typeof BedDouble> = {
  'King Bed': BedDouble,
  'Luxury King Bed': BedDouble,
  'Twin Beds': BedDouble,
  '2 Guests': Users,
  '3 Guests': Users,
  '4 Guests': Users,
  'Free Wi-Fi': Wifi,
  'Garden View': Check,
  'Private Balcony': Check,
  'Lounge Area': Check,
  'Private Living Room': Check,
  'Butler Service': Check,
  'Private Deck': Check,
  'Garden Access': Check,
  'Work Desk': Check,
  'Rainfall Shower': Check,
};

export default function Rooms() {
  const [filter, setFilter] = useState('All');
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const filteredRooms = useMemo(
    () => (filter === 'All' ? rooms : rooms.filter((r) => r.category === filter)),
    [filter]
  );

  return (
    <section id="rooms" className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="container-lux">
        {/* Header */}
        <div className="text-center">
          <p className="heading-eyebrow">Accommodation</p>
          <h2 className="mt-4 heading-title">Rooms &amp; Suites</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Each room and suite is thoughtfully designed with premium furnishings, modern
            amenities, and breathtaking views for an indulgent stay.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {roomCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-500/30'
                  : 'border border-gold-200 bg-white text-charcoal-700 hover:border-gold-400 hover:text-gold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room cards */}
        <div
          ref={ref}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredRooms.map((room, i) => (
            <article
              key={room.id}
              className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-charcoal-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-charcoal-900/10`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600 backdrop-blur-sm">
                  {room.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-semibold text-charcoal-900">
                  {room.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">
                  {room.description}
                </p>

                {/* Facilities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.facilities.map((f) => {
                    const Icon = facilityIcons[f] ?? Check;
                    return (
                      <span
                        key={f}
                        className="flex items-center gap-1 rounded-lg bg-cream-100 px-2.5 py-1 text-xs font-medium text-charcoal-700"
                      >
                        <Icon className="h-3.5 w-3.5 text-gold-500" />
                        {f}
                      </span>
                    );
                  })}
                </div>

                {/* Price + buttons */}
                <div className="mt-5 flex items-center justify-between border-t border-gold-200/50 pt-5">
                  <div>
                    <span className="font-serif text-2xl font-semibold text-gold-600">
                      &#8377;{room.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-charcoal-700"> / night</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href="#booking"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gold-500 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-gold-600 active:scale-95"
                  >
                    Book Now
                  </a>
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold-300 px-4 py-2.5 text-xs font-semibold text-gold-600 transition-all duration-300 hover:bg-gold-100 active:scale-95">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
