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
  title: "Replacement Windows | FixHup Home Renovation",
  description:
    "Energy-efficient replacement windows, professionally installed by FixHup in Raleigh, NC. Get a free assessment.",
};

const features = [
  "Energy-efficient glass built to handle NC summers and winters",
  "Professional, respectful installation crews",
  "Options to fit a range of budgets — we'll help you find the right one",
  "Backed by manufacturer and workmanship warranty support",
];

const galleryImages = [
  { src: "/images/interior-windows-1.jpg", alt: "Living room with large replacement windows" },
  { src: "/images/interior-windows-2.jpg", alt: "Bright living space with natural light from new windows" },
  { src: "/images/hero-house.jpg", alt: "Home exterior featuring modern window installation" },
];

export default function WindowsPage() {
  return (
    <>
      <PageHero
        eyebrow="Windows"
        title="Windows That Make a Bigger Difference Than You'd Think"
        description="Good windows change how a home feels — better light, better temperature control, and lower energy bills."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/interior-windows-2.jpg"
              alt="Bright room with new energy-efficient windows"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5">
            <SectionHeading
              align="left"
              eyebrow="Why It Matters"
              title="Brighter Rooms, Steadier Temperatures, Lower Bills"
              description="Drafty, single-pane windows work against you year-round. We replace them with windows built for comfort and efficiency."
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
            title="A Look at Our Window Installations"
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
        title="Ready to Stop Fighting With Drafty Windows?"
        description="Get a free, no-pressure assessment and find out what new windows would look like for your home."
      />
    </>
  );
}
