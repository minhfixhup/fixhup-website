"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { PlusMinusIcon } from "@/components/ui/Icons";
import { faqs, business } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <Container className="mx-auto flex max-w-3xl flex-col gap-8">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-coral">FAQ</span>
          <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-sm text-body">
            Don&apos;t see your question?{" "}
            <a href={business.phoneHref} className="font-semibold text-forest hover:underline">
              Give us a call
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-sm font-semibold text-ink sm:text-base">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                    <PlusMinusIcon open={open} className="h-4 w-4" />
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 text-sm leading-relaxed text-body">{faq.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
