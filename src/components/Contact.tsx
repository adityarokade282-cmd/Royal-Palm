import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!form.name.trim()) er.name = 'Please enter your name';
    if (!form.email.trim()) er.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Enter a valid email';
    if (!form.message.trim()) er.message = 'Please enter a message';
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSuccess(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Royal Palm Road, Coastal Highway, Goa 403001, India',
    },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: Mail, label: 'Email', value: 'reservations@royalpalm.com' },
    { icon: Clock, label: 'Front Desk', value: 'Open 24 hours, 7 days a week' },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Get in Touch</p>
          <h2 className="mt-4 heading-title">Contact Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Have questions or special requests? Our concierge team is available around the
            clock to assist you.
          </p>
        </div>

        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mt-12 grid gap-8 lg:grid-cols-2`}>
          {/* Contact info + map */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-gold-200/50 bg-white p-5 transition-all duration-300 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-200/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-600">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-charcoal-700">{info.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border border-gold-200/50 shadow-lg">
              <iframe
                title="Royal Palm Resort location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.8%2C15.3%2C74.0%2C15.6&layer=mapnik&marker=15.45%2C73.9"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-forest-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-forest-600 hover:shadow-lg hover:shadow-forest-500/30 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-charcoal-900/5 md:p-8">
            {success && (
              <div className="mb-5 flex items-center gap-3 rounded-xl bg-forest-50 border border-forest-200 p-4 animate-slide-down">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-forest-500" />
                <p className="text-sm font-semibold text-forest-700">
                  Message sent! We will get back to you soon.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, name: e.target.value }));
                    if (errors.name) setErrors((p) => ({ ...p, name: '' }));
                  }}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm font-medium text-charcoal-900 outline-none transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                      : 'border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, email: e.target.value }));
                    if (errors.email) setErrors((p) => ({ ...p, email: '' }));
                  }}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3 text-sm font-medium text-charcoal-900 outline-none transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                      : 'border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => {
                    setForm((p) => ({ ...p, message: e.target.value }));
                    if (errors.message) setErrors((p) => ({ ...p, message: '' }));
                  }}
                  rows={5}
                  className={`w-full resize-none rounded-xl border bg-cream-50 px-4 py-3 text-sm font-medium text-charcoal-900 outline-none transition-all ${
                    errors.message
                      ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                      : 'border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200'
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-forest w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
