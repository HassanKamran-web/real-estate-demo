import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import MegaProjects from "./components/MegaProjects";
import WhyChooseUs from "./components/WhyChooseUs";
import LeadCapture from "./components/LeadCapture";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <MegaProjects />
      <WhyChooseUs />
      <LeadCapture />
      <Testimonials />
      <Footer />
    </div>
  );
}
