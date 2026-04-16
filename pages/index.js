import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyUs from '../components/WhyUs';
import AIRecommend from '../components/AIRecommend';
import Reviews from '../components/Reviews';
import Booking from '../components/Booking';
import Offers from '../components/Offers';
import Location from '../components/Location';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import DynamicOfferBanner from '../components/DynamicOfferBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Revive Beauty Saloon | Best Unisex Salon in Hyderabad</title>
      </Head>

      <div className="grain-overlay">
        <DynamicOfferBanner />
        <Navbar />
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <AIRecommend />
        <Reviews />
        <Offers />
        <Booking />
        <Location />
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
