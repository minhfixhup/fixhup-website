import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/ui/Icons";
import { business, navLinks } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src="/images/logo.png"
              alt="FixHup Home Renovation"
              width={1920}
              height={1080}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {business.tagline}. Locally owned and operated, serving {business.serviceArea}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/windows" className="text-white/60 hover:text-coral">
                Windows
              </Link>
            </li>
            <li>
              <Link href="/siding-and-doors" className="text-white/60 hover:text-coral">
                Siding &amp; Doors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/#process" className="text-white/60 hover:text-coral">
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="text-white/60 hover:text-coral">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/60 hover:text-coral">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Get In Touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <a href={business.phoneHref} className="hover:text-coral">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
            {business.email ? (
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={`mailto:${business.email}`} className="hover:text-coral">
                  {business.email}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.fullName}. All rights reserved.
          </p>
          <div className="flex gap-2">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link href={link.href} className="hover:text-white/70">
                  {link.label}
                </Link>
                {i < navLinks.length - 1 ? <span>&middot;</span> : null}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
