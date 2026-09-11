import { useState, type FormEvent } from 'react';
import { TreePalm, Facebook, Instagram, Twitter, Youtube, Send, CheckCircle2 } from 'lucide-react';
import { navLinks } from '@/data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const quickLinks = navLinks.filter((l) => l.href !== '#home');

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="container-lux px-5 py-12 md:px-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Get exclusive offers, seasonal packages, and resort updates delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-600 active:scale-95"
              >
                {subscribed ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                {subscribed ? 'Done' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-lux px-5 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <TreePalm className="h-7 w-7 text-gold-400" />
              <span className="font-serif text-xl font-semibold tracking-wide">
                Royal Palm
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              A 5-star luxury resort and hotel offering unparalleled hospitality, exquisite
              dining, and unforgettable experiences in the heart of tropical paradise.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-gold-400 hover:bg-gold-500 hover:text-white"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Royal Palm Road, Coastal Highway, Goa 403001, India</li>
              <li>
                <a href="tel:+919876543210" className="transition-colors hover:text-gold-400">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@royalpalm.com"
                  className="transition-colors hover:text-gold-400"
                >
                  reservations@royalpalm.com
                </a>
              </li>
              <li>Front Desk: Open 24/7</li>
            </ul>
          </div>

          {/* Awards */}
          <div>
            <h4 className="font-serif text-lg font-semibold">Awards &amp; Recognition</h4>
            <div className="mt-4 space-y-3">
              {[
                'TripAdvisor Travelers Choice 2025',
                'Best Luxury Resort — India Travel Awards',
                '5-Star Diamond Award',
              ].map((award) => (
                <div
                  key={award}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                >
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-gold-400" />
                  <span className="text-xs text-white/70">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-lux px-5 py-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} Royal Palm Resort &amp; Hotel. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-xs text-white/50 transition-colors hover:text-gold-400">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/50 transition-colors hover:text-gold-400">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/50 transition-colors hover:text-gold-400">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
