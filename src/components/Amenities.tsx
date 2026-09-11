import {
  Wifi, Waves, Car, BellRing, Flower2, Dumbbell,
  UtensilsCrossed, Plane, Clock, Users, ShowerHead, ShieldCheck,
} from 'lucide-react';
import { amenities } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof Wifi> = {
  Wifi, Waves, Car, BellRing, Flower2, Dumbbell,
  UtensilsCrossed, Plane, Clock, Users, ShowerHead, ShieldCheck,
};

export default function Amenities() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="amenities" className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">World-Class Facilities</p>
          <h2 className="mt-4 heading-title">Resort Amenities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Every detail is curated for your comfort. Enjoy a comprehensive range of premium
            amenities and services throughout your stay.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {amenities.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Wifi;
            return (
              <div
                key={a.label}
                className={`reveal ${isVisible ? 'is-visible' : ''} group flex flex-col items-center gap-3 rounded-2xl border border-gold-200/50 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-200/40`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-500 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-charcoal-700">{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
