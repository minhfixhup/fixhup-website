import Container from "@/components/ui/Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <Container className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        {eyebrow ? (
          <span className="text-xs font-bold uppercase tracking-widest text-coral">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="text-base text-body sm:text-lg">{description}</p> : null}
      </Container>
    </section>
  );
}
