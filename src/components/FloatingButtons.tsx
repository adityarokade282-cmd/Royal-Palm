import { useEffect, useState } from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function FloatingButtons() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Floating action buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-500 text-white shadow-lg shadow-forest-500/30 transition-all duration-300 hover:scale-110 hover:bg-forest-600"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:+919876543210"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-white shadow-lg shadow-gold-500/30 transition-all duration-300 hover:scale-110 hover:bg-gold-600 md:hidden"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Sticky Book Now CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-30 transition-all duration-400 md:bottom-5 md:left-5 md:right-auto ${
          showCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:translate-y-0'
        }`}
      >
        <div className="border-t border-gold-200/50 bg-cream-50/95 p-3 backdrop-blur-xl md:rounded-full md:border md:border-gold-200 md:shadow-xl">
          <a
            href="#booking"
            className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-600 active:scale-95"
          >
            <Calendar className="h-4 w-4" />
            Book Your Stay
          </a>
        </div>
      </div>
    </>
  );
}
