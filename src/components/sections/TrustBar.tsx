import Container from "@/components/ui/Container";
import { HomeBadgeIcon, ClockBadgeIcon, ShieldIcon, MapBadgeIcon } from "@/components/ui/Icons";

const items = [
  { icon: HomeBadgeIcon, label: "Locally Owned & Operated" },
  { icon: ClockBadgeIcon, label: "Free In-Home Assessment" },
  { icon: ShieldIcon, label: "Warranty-Backed Work" },
  { icon: MapBadgeIcon, label: "Serving the Triangle, NC" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-white py-10">
      <Container className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon className="h-9 w-9 text-coral" />
            <span className="max-w-[9rem] text-xs font-bold uppercase tracking-wide text-ink/70 sm:text-sm">
              {label}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
