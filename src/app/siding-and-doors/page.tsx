import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Gallery from "@/components/Gallery";
import PageHero from "@/components/sections/PageHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import { CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Siding, Entry & Patio Doors | FixHup Home Renovation",
  description:
    "Siding, entry doors, screen doors and patio door systems installed by FixHup in Raleigh, NC. Get a free assessment.",
};

const features = [
  "Entry doors, screen doors and patio door systems",
  "Full siding replacement that boosts curb appeal and protects your home",
  "Installed by crews who treat your home like their own",
  "Backed by manufacturer and workmanship warranty support",
];

const galleryImages = [
  { src: "/images/patio-doors-house.jpg", alt: "Home with modern sliding patio doors" },
  { src: "/images/hero-house.jpg", alt: "Home exterior with siding and entry door" },
  { src: "/images/window-detail.jpg", alt: "Home exterior showcasing siding and trim work" },
];

export default function SidingAndDoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Siding & Doors"
        title="Transform Your Home With Quality Siding and Doors"
        description="A great entry door is a handshake to your home. A great patio door is a seamless extension of your living space. Siding ties it all together."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="/images/patio-doors-house.jpg"
              alt="Modern home with sliding patio doors"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Why It Matters"
              title="Premium Entry & Patio Door Solutions"
              description="Your entry door is the first thing guests see. Your patio door should feel like part of the room. We install both to fit — perfectly, every time."
            />
            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                  {f}
                </li>
              ))}
            </ul>
            <Button href="/contact" className="w-fit">
              Get My Free Assessment
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-10">
          <SectionHeading
            eyebrow="Gallery"
            title="A Look at Our Siding & Door Projects"
            description="Tap any photo to view it larger."
          />
          <div className="w-full">
            <Gallery images={galleryImages} />
          </div>
        </Container>
      </section>

      <ProcessSteps />
      <Testimonials />
      <CTASection
        title="Ready to Upgrade Your Curb Appeal?"
        description="Get a free, no-pressure assessment for siding, entry doors or patio doors."
      />
    </>
  );
}
