import { useState, type FormEvent } from 'react';
import { User, Phone, Mail, Calendar, Users, BedDouble, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';
import { rooms } from '@/data/siteData';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  specialRequest: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialState: FormData = {
  fullName: '',
  phone: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: '',
  specialRequest: '',
};

export default function Booking() {
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[+]?[\d\s-]{8,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.checkIn) e.checkIn = 'Select check-in date';
    if (!form.checkOut) e.checkOut = 'Select check-out date';
    else if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      e.checkOut = 'Check-out must be after check-in';
    if (!form.roomType) e.roomType = 'Please select a room type';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSuccess(true);
    setForm(initialState);
    setTimeout(() => setSuccess(false), 6000);
  };

  const today = new Date().toISOString().split('T')[0];

  const fieldClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 pl-11 text-sm font-medium text-charcoal-900 outline-none transition-all duration-200 ${
      hasError
        ? 'border-red-400 focus:ring-2 focus:ring-red-300'
        : 'border-gold-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200'
    }`;

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-lux">
        <div className="text-center">
          <p className="heading-eyebrow">Reservations</p>
          <h2 className="mt-4 heading-title">Book Your Stay</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal-700">
            Reserve your perfect getaway in just a few steps. Our team will confirm your
            booking within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-charcoal-900/10">
            <div className="grid lg:grid-cols-5">
              {/* Image side */}
              <div className="relative hidden lg:block lg:col-span-2">
                <img
                  src="https://images.pexels.com/photos/18649226/pexels-photo-18649226.jpeg?auto=compress&cs=tinysrgb&w=940"
                  alt="Royal Palm Resort"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    Begin Your Journey
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Let us craft an unforgettable experience tailored just for you.
                  </p>
                </div>
              </div>

              {/* Form side */}
              <div className="p-6 md:p-10 lg:col-span-3">
                {success && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-forest-50 border border-forest-200 p-4 animate-slide-down">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-forest-500" />
                    <div>
                      <p className="text-sm font-semibold text-forest-700">
                        Booking request submitted successfully!
                      </p>
                      <p className="text-xs text-forest-600">
                        We will contact you shortly to confirm your reservation.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <input
                          type="text"
                          value={form.fullName}
                          onChange={(e) => handleChange('fullName', e.target.value)}
                          className={fieldClass(errors.fullName)}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={fieldClass(errors.phone)}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={fieldClass(errors.email)}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Check-in */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Check-in Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <input
                          type="date"
                          min={today}
                          value={form.checkIn}
                          onChange={(e) => handleChange('checkIn', e.target.value)}
                          className={fieldClass(errors.checkIn)}
                        />
                      </div>
                      {errors.checkIn && (
                        <p className="mt-1 text-xs text-red-500">{errors.checkIn}</p>
                      )}
                    </div>

                    {/* Check-out */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Check-out Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <input
                          type="date"
                          min={form.checkIn || today}
                          value={form.checkOut}
                          onChange={(e) => handleChange('checkOut', e.target.value)}
                          className={fieldClass(errors.checkOut)}
                        />
                      </div>
                      {errors.checkOut && (
                        <p className="mt-1 text-xs text-red-500">{errors.checkOut}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Guests */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <select
                          value={form.guests}
                          onChange={(e) => handleChange('guests', e.target.value)}
                          className={`${fieldClass()} appearance-none`}
                        >
                          {['1', '2', '3', '4', '5', '6+'].map((g) => (
                            <option key={g} value={g}>
                              {g} {g === '1' ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Room Type */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                        Room Type
                      </label>
                      <div className="relative">
                        <BedDouble className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500" />
                        <select
                          value={form.roomType}
                          onChange={(e) => handleChange('roomType', e.target.value)}
                          className={`${fieldClass(errors.roomType)} appearance-none`}
                        >
                          <option value="">Select room</option>
                          {rooms.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name} — &#8377;{r.price.toLocaleString('en-IN')}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.roomType && (
                        <p className="mt-1 text-xs text-red-500">{errors.roomType}</p>
                      )}
                    </div>
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700">
                      Special Request <span className="text-charcoal-700/50">(optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-gold-500" />
                      <textarea
                        value={form.specialRequest}
                        onChange={(e) => handleChange('specialRequest', e.target.value)}
                        rows={3}
                        className={`${fieldClass()} resize-none`}
                        placeholder="Any special requirements or preferences..."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Book Now'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
