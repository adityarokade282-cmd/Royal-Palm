import { ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

export default function Experiences() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="experiences" className="section-padding bg-forest-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-forest-700/40 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold-700/10 blur-3xl" />

      <div className="container-lux relative">
        <div className="text-center">
          <p className="heading-eyebrow text-gold-300">Resort Experiences</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            Endless Ways to Unwind
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            From rejuvenating spa rituals to thrilling outdoor adventures, discover a world
            of experiences within the resort.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((exp, i) => (
            <article
              key={exp.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-72 overflow-hidden rounded-3xl">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />
              </div>
              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl font-semibold text-white">{exp.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70 transition-all duration-500 max-h-0 overflow-hidden group-hover:max-h-32 group-hover:text-white/85">
                  {exp.description}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gold-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Explore <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
