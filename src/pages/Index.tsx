import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import Testimonials from "@/components/Testimonials";
import ReviewSection from "@/components/ReviewSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NewYearBanner from "@/components/NewYearBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-dark via-purple-mid to-purple-light">
      <NewYearBanner />
      <Navigation />
      <Hero />
      <Showcase />
      <About />
      <WhyChooseUs />
      <FeaturedDesigns />
      <Testimonials />
      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
