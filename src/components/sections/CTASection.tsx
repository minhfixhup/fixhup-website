import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { business } from "@/lib/content";

export default function CTASection({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-charcoal py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="font-display max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm text-white/60 sm:text-base">{description}</p>
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Get My Free Assessment</Button>
          <Button href={business.phoneHref} variant="outline-white">
            <PhoneIcon className="h-4 w-4" />
            Call {business.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
