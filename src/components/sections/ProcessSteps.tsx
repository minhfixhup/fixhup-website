import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChatIcon, QuoteIcon, InstallIcon, UpgradeIcon } from "@/components/ui/Icons";
import { processSteps } from "@/lib/content";

const icons = [ChatIcon, QuoteIcon, InstallIcon, UpgradeIcon];

export default function ProcessSteps() {
  return (
    <section id="process" className="bg-cream py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Process"
          title="A Simple, Stress-Free Renovation Experience"
          description="New windows, new siding, new doors — here's what to expect when working with FixHup."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm shadow-ink/5"
              >
                <Icon className="h-8 w-8 text-coral" />
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-body">{step.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
