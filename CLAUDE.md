# FIXHUP Home Renovation — Website

## What this project is

Marketing website for **FIXHUP Home Renovation**, a residential home renovation company serving homeowners in the USA. The site's two jobs:

1. **Showcase products/services** — windows, siding, entry doors, patio doors, screen doors.
2. **Convert visitors into booked appointments** via a quote/consultation request form.

Target audience: residential homeowners in the USA — not contractors, not commercial clients. Copy and design should speak to someone worried about cost, hassle, and trustworthiness of a contractor working on their home.

**Design tone:** simple, professional, friendly. Warm and approachable, not corporate/cold, not flashy. Should read as trustworthy to an everyday homeowner.

## Company information (from fixhup.com — verify before launch, site content changes over time)

- **Company name:** FixHup
- **Tagline:** "Give Your Home The Upgrade It's Been Waiting For"
- **Services:** Premium windows (energy-efficient, high-performance glass), siding installation/replacement, entry doors, screen doors, patio door systems
- **Positioning:** locally owned and operated, regional (NC) climate expertise, professional installation, "a bigger difference than most people realize"
- **Service area:** North Carolina, based out of Raleigh
- **Address:** 4208 Six Forks Rd, Suite 1000, Raleigh, NC 27609
- **Phone:** 919-600-7778
- **Email:** not published on the current site — get from owner before launch
- **Primary CTA copy used on current site:** "Get a Free Assessment"
- **Existing site nav:** Home, Windows, Sidings (doors), Contact, Book Appointment (links to a live booking-calendar page on the current site), Blog
- **Warranty:** current site doesn't publish formal warranty terms on-page, but a customer testimonial confirms real warranty service ("replaced it under warranty within 2 weeks, no questions asked, free of charge") — get exact warranty terms from the owner for accurate copy.
- **No pricing, financing terms, or certifications (e.g. ENERGY STAR) are published on the current site** — do not invent these; ask the owner if they should be featured.

### Real customer testimonials (use verbatim, don't paraphrase into fake ones)

- **Nesha Tom:** "We replaced all 40 windows in our home with Fixhup 5 years ago—great quality, no issues. Minh was knowledgeable, friendly, and helped us pick the right options within budget. Recently, a seal broke on one window, and Minh replaced it under warranty within 2 weeks, no questions asked, free of charge. Highly recommend, great company to work with."
- **David:** "We contracted Fixhup to replace all our upstairs windows and our front and back screen doors. Their estimator was professional and knowledgeable about the renovation process, local real estate trends, and the specific products recommended..." *(full quote truncated on source page — get complete text from owner if needed)*
- **Cindy Parrish:** "If you are looking for a company to help with some home repairs, FixHup is for you. I was looking to have my siding replaced and wanted something top notch, I was leaning towards the new vertical look they are doing on many homes today, but..." *(full quote truncated on source page — get complete text from owner if needed)*

Remaining gaps (years in business/founding story, team bios, licensing/certification numbers, exact warranty terms, financing options, high-res project photos) are not on the current site — flag as `TODO` rather than inventing them.

## Design reference

Source mockup: `G:\Claude\website test\performance window website.png` (a home-services/window-replacement landing page used as the visual/structural reference — not a template to copy verbatim, but the pattern to follow for layout, tone, and componentry).

### Visual style extracted from the reference

- **Background:** warm blush/cream (~`#F5EBE6`) for section backgrounds, alternating with white (`#FFFFFF`) content cards/sections for rhythm.
- **Primary accent (CTAs, links, highlights):** deep brick red / maroon (~`#8C2F2F`–`#A13B3B`). Used for buttons, section labels, icon accents, star ratings area.
- **Footer / dark sections:** near-black charcoal navy (~`#1E1E2A`).
- **Text:** dark charcoal/near-black for headings, medium gray for body copy.
- **Accent/seal color:** muted gold/tan for trust badges (e.g. warranty seal with laurel wreath motif).
- **Typography:** clean modern sans-serif. Large, bold, slightly condensed headlines; regular-weight readable body text. Generous line-height and whitespace.
- **Buttons:** pill/rounded-rectangle, solid maroon fill with white text; secondary buttons are outlined.
- **Cards:** white background, soft shadow, rounded corners (~8–12px radius).
- **Imagery:** real photos of people (friendly, approachable — e.g. a technician/owner on camera) rather than stock illustration-heavy design; a few simple line-art icons for process steps.

### Page structure/sections to mirror (adapt content to FIXHUP)

1. **Top nav** — logo, simple links, phone number, primary CTA button ("Get a Free Quote" / "Book Now").
2. **Hero** — bold value-prop headline, subcopy, trust badges row (financing/0% APR, warranty, "10,000+ happy customers" style stat), CTA button(s), hero image.
3. **Offer/urgency banner** — short highlighted strip calling out a current promotion.
4. **"How it works" 3–4 step process** — icon + short label + description (e.g. Free Consultation → Measure & Quote → Installation → Enjoy).
5. **Why choose us** — video or photo of a real person (owner/technician), short trust-building copy, secondary CTA.
6. **Warranty/guarantee callout** — big reassurance statement with a seal/badge graphic.
7. **Social proof** — big stat ("Over X Happy Customers") + star-rated testimonial cards (3-up on desktop).
8. **Before/after showcase** — project photos with a before/after comparison for a signature service.
9. **Local expertise / service area** — map or visual showing where FIXHUP operates, framed as "local expertise."
10. **FAQ accordion** — common homeowner questions (financing, timeline, process, warranty).
11. **Contact / quote request section** — two-column: friendly photo/video on one side, quote request form on the other (name, phone, email, address/zip, service interested in, message).
12. **Footer** — logo, nav links, contact info, social icons, newsletter signup, legal links.

Treat this structure as a strong default for the homepage; other pages (Services, individual product/service detail pages, About, Contact) should reuse the same visual language (colors, buttons, cards, section rhythm) rather than reinventing style per page.

## Booking / lead capture

**No calendar-booking widget.** Customers request an appointment via a **quote/consultation request form**, and the FIXHUP team follows up by phone to schedule. This matches the reference design's contact form pattern.

Form should capture at minimum: name, phone, email, address or zip code, service(s) interested in, and a free-text message. Keep it short — every extra field lowers conversion. Submissions need to go somewhere real (email notification and/or a simple backend/DB + admin view) — confirm the delivery mechanism (e.g. email via a form service, or a lightweight API route + email/DB) before wiring it up in production; don't ship a form that silently goes nowhere.

## Tech stack

- **Framework:** Next.js (App Router) + React
- **Styling:** Tailwind CSS
- **Language:** TypeScript preferred for new code
- **Deployment target:** not yet decided — Vercel is the natural fit for Next.js if no existing hosting preference emerges

## Content status — placeholders

Core business identity, services, location, and phone number are now known (see "Company information" above). Still missing: business hours, licensing/certification info, financing details, exact warranty terms, high-res project photos, and complete testimonial text. Use clearly-marked placeholders (e.g. `[HOURS]`, `TODO:` comments) for these rather than inventing fake details, fake certifications, or fake stats — those must come from the real business before launch.

## Mandatory requirements

- **Screenshot check after every major change.** After implementing any significant UI change (new section, layout pass, styling overhaul, new page), take a screenshot of the affected page/section and visually compare it against the original reference design (`G:\Claude\website test\performance window website.png`). Call out drift in layout, spacing, color, or tone rather than assuming it matches.
- **Mobile-friendly, always.** Every section must be verified at mobile width (~375–414px), not just desktop. Check this alongside the screenshot comparison above, not as an afterthought.
- **Booking must be easy.** The quote/appointment request form should be reachable in one tap/click from anywhere (sticky header CTA, hero, footer) and quick to fill out on a phone — minimal required fields, large touch targets, no unnecessary steps.
- **Project photos must be easy to view.** Before/after and project gallery images need a mobile-friendly viewing experience (e.g. swipeable gallery/lightbox, properly sized/optimized images, no tiny thumbnails that can't be tapped to enlarge).

## Conventions

- Mobile-first responsive layout — homeowners will browse on phones.
- Keep components reusable (Button, Card, Section, TestimonialCard, FAQItem, etc.) rather than one-off markup per section, since multiple pages will share this visual system.
- Accessibility basics matter: real alt text, sufficient color contrast against the blush background, keyboard-navigable FAQ accordion and nav.
- No lorem ipsum in committed content — use bracketed placeholders instead so gaps are easy to grep for before launch.
