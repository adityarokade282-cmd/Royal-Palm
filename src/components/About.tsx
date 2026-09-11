import { Award, Leaf, Sparkles, Star } from 'lucide-react';
import { stats } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

const statIcons = [Award, Leaf, Sparkles, Star];

export default function About() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-cream-50">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''} relative`}
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.pexels.com/photos/14036253/pexels-photo-14036253.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Royal Palm Resort lobby"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
            <p className="font-serif text-3xl font-semibold text-gold-500">25+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
              Years of Excellence
            </p>
          </div>
          {/* Decorative border */}
          <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-2xl border-2 border-gold-200" />
        </div>

        {/* Text side */}
        <div>
          <p className="heading-eyebrow">About Royal Palm</p>
          <h2 className="mt-4 heading-title">
            Welcome to Royal Palm Resort &amp; Hotel
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal-700">
            <p>
              Nestled amid swaying palms and tropical greenery, Royal Palm Resort &amp; Hotel
              is a sanctuary of refined luxury. For over two decades, we have welcomed guests
              with warm hospitality, impeccable service, and a commitment to creating
              unforgettable memories.
            </p>
            <p>
              From our elegantly appointed rooms and suites to our award-winning restaurants,
              serene spa, and sprawling gardens, every corner of our resort is designed for
              your comfort and delight. Whether you seek a peaceful retreat, a romantic
              getaway, or a memorable family vacation, Royal Palm offers an experience beyond
              compare.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gold-200/60 bg-white p-4 text-center transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-200/40"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon className="mx-auto h-6 w-6 text-gold-500" />
                  <p className="mt-2 font-serif text-2xl font-semibold text-charcoal-900">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-charcoal-700">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
