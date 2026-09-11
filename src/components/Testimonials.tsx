import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/siteData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      className="section-padding bg-forest-800 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote */}
      <Quote className="absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 text-forest-700/40" />

      <div className="container-lux relative">
        <div className="text-center">
          <p className="heading-eyebrow text-gold-300">Guest Stories</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            What Our Guests Say
          </h2>
        </div>

        {/* Slider */}
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-full max-w-3xl">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`transition-all duration-500 ${
                  i === current
                    ? 'relative opacity-100 translate-x-0'
                    : 'absolute inset-0 pointer-events-none opacity-0 translate-x-8'
                }`}
              >
                <div className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 md:p-12">
                  {/* Stars */}
                  <div className="flex justify-center gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="mt-6 text-center text-lg leading-relaxed text-white/85 md:text-xl">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  {/* Author */}
                  <div className="mt-8 flex flex-col items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-gold-400/50"
                    />
                    <div className="text-center">
                      <p className="font-serif text-lg font-semibold text-white">{t.name}</p>
                      <p className="text-xs font-medium uppercase tracking-wide text-gold-300">
                        Verified Guest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-white/20 p-2.5 text-white transition-all hover:bg-white/10 active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-white/20 p-2.5 text-white transition-all hover:bg-white/10 active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
