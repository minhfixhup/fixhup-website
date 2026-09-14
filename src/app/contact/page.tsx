import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import ServiceArea from "@/components/sections/ServiceArea";

export const metadata: Metadata = {
  title: "Contact FixHup | Free Assessment in Raleigh, NC",
  description:
    "Get in touch with FixHup Home Renovation for a free, no-pressure assessment on windows, siding or doors in Raleigh, NC.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Project"
        description="Tell us a bit about your home and what you're looking to upgrade. We'll follow up to schedule your free assessment."
      />
      <ContactSection />
      <ServiceArea />
    </>
  );
}
