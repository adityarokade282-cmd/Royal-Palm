import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Experiences from '@/components/Experiences';
import Dining from '@/components/Dining';
import Amenities from '@/components/Amenities';
import Offers from '@/components/Offers';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Experiences />
        <Dining />
        <Amenities />
        <Offers />
        <Gallery />
        <Testimonials />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
