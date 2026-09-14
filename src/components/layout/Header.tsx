"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { business, navLinks } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="FixHup Home Renovation"
            width={1920}
            height={1080}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full border-2 border-forest px-4 py-2.5 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {business.phone}
          </a>
          <Button href="/contact">Get a Free Assessment</Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border-2 border-forest px-4 py-3 text-sm font-semibold text-forest"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <Button href="/contact" className="mt-2 w-full">
              Get a Free Assessment
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
