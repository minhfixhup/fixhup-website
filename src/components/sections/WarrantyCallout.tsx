import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function WarrantyCallout() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            When Something&apos;s Wrong, We Make It Right
          </h2>
          <p className="text-base text-body">
            Our products and installations are backed by manufacturer and workmanship
            warranties. When a customer of ours had a seal fail years after
            installation, we replaced it at no cost — no questions asked. That&apos;s
            the kind of follow-through you get with FixHup.
          </p>
          <Button href="/contact">Get Started</Button>
        </div>

        <div className="flex items-center justify-center">
          <WarrantySeal className="h-56 w-56 text-coral sm:h-64 sm:w-64" />
        </div>
      </Container>
    </section>
  );
}

function WarrantySeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 200C40 188 26 164 26 138c0-16 6-34 14-46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M160 200c20-12 34-36 34-62 0-16-6-34-14-46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`l-${i}`} transform={`rotate(${-30 + i * 12} 60 200)`}>
          <ellipse cx="60" cy={140 + i * 6} rx="10" ry="4" fill="currentColor" opacity="0.85" />
        </g>
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`r-${i}`} transform={`rotate(${30 - i * 12} 160 200)`}>
          <ellipse cx="160" cy={140 + i * 6} rx="10" ry="4" fill="currentColor" opacity="0.85" />
        </g>
      ))}

      <rect
        x="46"
        y="40"
        width="128"
        height="92"
        rx="8"
        fill="white"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect x="58" y="54" width="60" height="8" rx="2" fill="currentColor" />
      <rect x="58" y="70" width="90" height="5" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="58" y="80" width="90" height="5" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="58" y="90" width="60" height="5" rx="2" fill="currentColor" opacity="0.35" />

      <circle cx="140" cy="108" r="16" fill="currentColor" />
      <path
        d="M133 108l5 5 10-11"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
