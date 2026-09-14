import Image from "next/image";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { business } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/interior-windows-1.jpg"
                alt="Bright home interior with new windows"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Ready for a Total Home Makeover?
              </h2>
              <p className="mt-3 text-base text-body">
                Let&apos;s talk through your project. We&apos;d be happy to help.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-forest hover:underline">
                <PhoneIcon className="h-4 w-4" />
                {business.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-body">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                <span>
                  {business.address.line1}, {business.address.line2}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm shadow-ink/5 sm:p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              Contact Us for a Free Quote
            </h3>
            <p className="mt-2 text-sm text-body">
              We won&apos;t sell your info and we don&apos;t do high-pressure sales
              tactics. Fill in a few details and we&apos;ll be in touch.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
