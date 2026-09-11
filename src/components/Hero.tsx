import { useState } from 'react';
import { Calendar, Users, BedDouble, Search, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [rooms, setRooms] = useState('1');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Royal Palm Resort exterior with swimming pool and palm trees"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/30 to-charcoal-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-28 pb-12 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.4em] text-gold-300 md:text-sm">
            5-Star Luxury Resort & Hotel
          </p>
          <h1
            className="mt-6 animate-fade-up font-serif text-4xl font-medium leading-tight text-white text-balance md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Your Perfect Escape Awaits
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/85 md:text-lg"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Experience luxury, comfort and unforgettable moments at Royal Palm Resort &amp; Hotel.
          </p>
          <div
            className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <a href="#booking" className="btn-gold w-full sm:w-auto">
              Book Your Stay
            </a>
            <a href="#rooms" className="btn-outline w-full sm:w-auto">
              Explore Rooms
            </a>
          </div>
        </div>

        {/* Booking search box */}
        <div
          className="mt-14 w-full max-w-5xl animate-fade-up"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <form
            onSubmit={handleSearch}
            className="glass-card rounded-3xl p-4 md:p-6"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {/* Check-in */}
              <div className="rounded-2xl bg-white/90 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-gold-400">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  <Calendar className="h-3.5 w-3.5" /> Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="mt-1 w-full bg-transparent text-sm font-medium text-charcoal-900 outline-none"
                />
              </div>
              {/* Check-out */}
              <div className="rounded-2xl bg-white/90 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-gold-400">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  <Calendar className="h-3.5 w-3.5" /> Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="mt-1 w-full bg-transparent text-sm font-medium text-charcoal-900 outline-none"
                />
              </div>
              {/* Guests */}
              <div className="relative rounded-2xl bg-white/90 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-gold-400">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  <Users className="h-3.5 w-3.5" /> Guests
                </label>
                <div className="relative mt-1">
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-medium text-charcoal-900 outline-none"
                  >
                    {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6+ Guests'].map(
                      (g) => (
                        <option key={g} value={g.split(' ')[0]}>
                          {g}
                        </option>
                      )
                    )}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-700" />
                </div>
              </div>
              {/* Rooms */}
              <div className="relative rounded-2xl bg-white/90 px-4 py-3 transition-all focus-within:ring-2 focus-within:ring-gold-400">
                <label className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  <BedDouble className="h-3.5 w-3.5" /> Rooms
                </label>
                <div className="relative mt-1">
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full appearance-none bg-transparent text-sm font-medium text-charcoal-900 outline-none"
                  >
                    {['1 Room', '2 Rooms', '3 Rooms', '4 Rooms'].map((r) => (
                      <option key={r} value={r.split(' ')[0]}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-700" />
                </div>
              </div>
              {/* Search button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-2xl bg-gold-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/30 active:scale-95"
              >
                <Search className="h-4 w-4" />
                Search Availability
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
