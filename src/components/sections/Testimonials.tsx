import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { StarIcon } from "@/components/ui/Icons";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Homeowners Love Us"
          title="Real Reviews From Real FixHup Customers"
          description="We take care of our customers, and it shows."
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-cream/40 p-6"
            >
              <div className="flex gap-1 text-coral">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <div className="text-sm font-bold text-ink">{t.name}</div>
                <div className="text-xs text-body">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-body">Ready for a 5-star renovation of your own?</p>
          <Button href="/contact">Schedule My Consult</Button>
        </div>
      </Container>
    </section>
  );
}
