"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-cream/60 px-6 py-14 text-center">
        <h3 className="font-display text-xl font-bold text-ink">Thanks — we got it!</h3>
        <p className="max-w-sm text-sm text-body">
          A member of the FixHup team will reach out shortly to schedule your free
          assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="First name" required>
          <input
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            className={inputClasses}
          />
        </Field>
        <Field label="Last name" required>
          <input
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Email" required>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </Field>

      <Field label="Phone" required>
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={inputClasses}
        />
      </Field>

      <Field label="What are you interested in?">
        <select name="service" defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a service
          </option>
          <option value="Windows">Windows</option>
          <option value="Siding">Siding</option>
          <option value="Entry Doors">Entry Doors</option>
          <option value="Patio Doors">Patio Doors</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </Field>

      <Field label="Tell us about your project">
        <textarea
          name="message"
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="A few details about what you're looking to upgrade..."
        />
      </Field>

      <Button type="submit" className="mt-1 w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" ? (
        <p className="text-sm text-coral-dark">
          Something went wrong. Please try again, or call us at{" "}
          <a href="tel:+19196007778" className="font-semibold underline">
            (919) 600-7778
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-body/50 outline-none transition-colors focus:border-forest";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-semibold text-ink">
        {label} {required ? <span className="text-coral">*</span> : null}
      </span>
      {children}
    </label>
  );
}
