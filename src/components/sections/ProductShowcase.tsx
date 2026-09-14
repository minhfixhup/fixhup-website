import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Gallery from "@/components/Gallery";

const images = [
  { src: "/images/interior-windows-1.jpg", alt: "Living space with large energy-efficient windows", label: "Windows" },
  { src: "/images/patio-doors-house.jpg", alt: "Home with modern sliding patio doors", label: "Patio Doors" },
  { src: "/images/window-detail.jpg", alt: "Home exterior with new siding and windows", label: "Siding" },
];

export default function ProductShowcase() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading
          eyebrow="See The Difference"
          title="High Performance, High Style"
          description="A look at the kind of windows, doors and siding we install. Tap any photo to view it larger."
        />

        <div className="w-full">
          <Gallery images={images} />
        </div>

        <Button href="/contact">Upgrade My Home</Button>
      </Container>
    </section>
  );
}
