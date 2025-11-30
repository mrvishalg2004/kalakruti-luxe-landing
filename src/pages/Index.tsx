import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-dark via-purple-mid to-purple-light">
      <Navigation />
      <Hero />
      <Showcase />
      <About />
      <WhyChooseUs />
      <FeaturedDesigns />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
