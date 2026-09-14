import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { business } from "@/lib/content";

const highlights = [
  "Free, no-pressure in-home assessment",
  "Locally owned and operated in Raleigh, NC",
  "Warranty-backed products and installation",
  "Windows, siding, entry doors & patio doors",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl lg:text-[3.25rem]">
            {business.tagline}
          </h1>
          <p className="text-lg font-semibold text-coral">
            Windows, siding &amp; doors done right — no high-pressure sales, just
            honest work.
          </p>

          <ul className="flex flex-col gap-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-body sm:text-base">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Get My Free Assessment</Button>
            <Button href={business.phoneHref} variant="outline">
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-[2rem] border-2 border-coral/30 sm:block" />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10">
            <Image
              src="/images/hero-house-real.jpg"
              alt="A FixHup window and siding replacement project in the Raleigh, NC area"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
