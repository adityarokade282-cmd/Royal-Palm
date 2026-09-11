import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryImages } from '@/data/siteData';
import { useReveal } from '@/hooks/useReveal';

export default function Gallery() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Visual Journey</p>
          <h2 className="mt-4 heading-title">Gallery</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Take a visual tour of Royal Palm Resort &amp; Hotel and imagine yourself in our
            world of luxury.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div
          ref={ref}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.label}
              onClick={() => setLightboxIndex(i)}
              className={`reveal ${isVisible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 3 ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
              aria-label={`View ${img.label}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? 'h-full min-h-[300px]' : 'h-44 md:h-52'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-8 w-8 text-white" />
                <span className="text-sm font-semibold text-white">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-900/90 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 md:right-8"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="animate-scale-in max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm font-medium text-white/80">
              {galleryImages[lightboxIndex].label} —{' '}
              {lightboxIndex + 1} / {galleryImages.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
