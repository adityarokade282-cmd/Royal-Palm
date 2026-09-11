import { useEffect, useState } from 'react';
import { Menu, X, TreePalm } from 'lucide-react';
import { navLinks } from '@/data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 py-3 shadow-lg shadow-charcoal-900/5 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between px-5 md:px-10">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Royal Palm Resort home">
          <TreePalm
            className={`h-7 w-7 transition-colors duration-300 ${
              scrolled ? 'text-gold-500' : 'text-white'
            }`}
          />
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-charcoal-900' : 'text-white'
            }`}
          >
            Royal Palm
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-charcoal-700 hover:bg-gold-100 hover:text-gold-600'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#booking" className="btn-gold hidden md:inline-flex">
            Book Now
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className={`rounded-full p-2 transition-colors lg:hidden ${
              scrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 lg:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-cream-50 shadow-2xl transition-transform duration-400 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-gold-200/50 px-6 py-5">
            <span className="font-serif text-lg font-semibold text-charcoal-900">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 text-charcoal-700 hover:bg-gold-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-charcoal-700 transition-colors hover:bg-gold-100 hover:text-gold-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-gold-200/50 p-4">
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="btn-gold w-full"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
