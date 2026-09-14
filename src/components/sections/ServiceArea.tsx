import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { PinIcon, PhoneIcon } from "@/components/ui/Icons";
import { business } from "@/lib/content";

export default function ServiceArea() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Find Us"
          title="Local Expertise, Right Here in Raleigh"
          description="We're a local team that knows Triangle-area homes and weather — not a call center."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-line shadow-sm lg:col-span-3">
            <iframe
              title="FixHup Home Renovation location"
              src={business.mapEmbedSrc}
              className="h-72 w-full sm:h-96 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-8 shadow-sm shadow-ink/5 lg:col-span-2">
            <div className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
              <div>
                <div className="text-sm font-bold text-ink">{business.address.line1}</div>
                <div className="text-sm text-body">{business.address.line2}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-coral" />
              <a href={business.phoneHref} className="text-sm font-semibold text-ink hover:text-coral">
                {business.phone}
              </a>
            </div>
            <p className="text-sm text-body">
              Serving {business.serviceArea}. Not sure if we cover your neighborhood?
              Just ask.
            </p>
            <Button href="/contact" className="w-full sm:w-fit">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
