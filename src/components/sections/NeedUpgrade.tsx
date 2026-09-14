import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NeedUpgrade() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="/images/interior-windows-2.jpg"
            alt="Bright living room with large replacement windows"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 flex flex-col items-start gap-4 lg:order-2">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Need a Home Upgrade Without the Hassle?
          </h2>
          <p className="text-base text-body">
            Replacing your windows, siding, or doors should be easy, affordable and
            convenient. That&apos;s why we come to you, skip the pushy sales pitch,
            and give it to you straight — so drafts, peeling paint, and rising
            energy bills become a thing of the past.
          </p>
          <Button href="/contact">Get My Free Assessment</Button>
        </div>
      </Container>
    </section>
  );
}
