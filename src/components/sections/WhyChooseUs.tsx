import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-8">
        <SectionHeading
          eyebrow="Our Founder"
          title="Why Choose FixHup?"
          description="Getting new windows or doors shouldn't be complicated. We're a locally owned Raleigh business, and we stand behind every job we do."
        />

        <div className="w-full max-w-3xl overflow-hidden rounded-[1.75rem] border-2 border-coral/70 shadow-lg shadow-ink/10">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/window-detail.jpg"
              alt="A FixHup home renovation project in the Raleigh area"
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="text-center text-sm text-body">Let&apos;s get started.</p>
        <Button href="/contact">Schedule My Consult</Button>
      </Container>
    </section>
  );
}
