import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import CustomOrderForm from "@/components/CustomOrderForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Showcase />
      <About />
      <WhyChooseUs />
      <FeaturedDesigns />
      <CustomOrderForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
