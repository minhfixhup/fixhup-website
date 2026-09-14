import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import NeedUpgrade from "@/components/sections/NeedUpgrade";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WarrantyCallout from "@/components/sections/WarrantyCallout";
import Testimonials from "@/components/sections/Testimonials";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <NeedUpgrade />
      <ProcessSteps />
      <WhyChooseUs />
      <WarrantyCallout />
      <Testimonials />
      <ProductShowcase />
      <ServiceArea />
      <FAQ />
      <ContactSection />
    </>
  );
}
