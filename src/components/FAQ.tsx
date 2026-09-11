import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Got Questions?</p>
          <h2 className="mt-4 heading-title">Frequently Asked Questions</h2>
        </div>

        <div ref={ref} className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`reveal ${isVisible ? 'is-visible' : ''} overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-gold-400 bg-white shadow-lg shadow-gold-200/30'
                    : 'border-gold-200/50 bg-white/60 hover:border-gold-300'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-charcoal-900 md:text-base">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'bg-gold-500 text-white' : 'bg-gold-100 text-gold-600'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
