// Real FixHup business info, sourced from fixhup.com and CLAUDE.md.
// Anything not confirmed by the business is intentionally left out rather than invented.

export const business = {
  name: "FixHup",
  fullName: "FixHup Home Renovation",
  tagline: "Give Your Home The Upgrade It's Been Waiting For",
  phone: "(919) 600-7778",
  phoneHref: "tel:+19196007778",
  email: null as string | null, // TODO: not published on fixhup.com — get from owner
  address: {
    line1: "4208 Six Forks Rd, Suite 1000",
    line2: "Raleigh, NC 27609",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=4208+Six+Forks+Rd+Suite+1000,+Raleigh,+NC+27609&output=embed",
  serviceArea: "Raleigh, NC and the greater Triangle area",
};

export const navLinks = [
  { href: "/windows", label: "Windows" },
  { href: "/siding-and-doors", label: "Siding & Doors" },
  { href: "/#process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "windows",
    name: "Windows",
    shortDescription:
      "Energy-efficient replacement windows built to handle Triangle-area weather and keep energy bills down.",
    href: "/windows",
  },
  {
    slug: "siding-and-doors",
    name: "Siding & Doors",
    shortDescription:
      "Entry doors, screen doors, patio doors and full siding replacement that boosts curb appeal and comfort.",
    href: "/siding-and-doors",
  },
];

export const processSteps = [
  {
    title: "Free Assessment",
    description:
      "We come to you, take a look at your windows, siding or doors, and talk through what actually needs fixing — no high-pressure sales pitch.",
  },
  {
    title: "Custom Quote",
    description:
      "You get a clear, honest quote based on your home and your budget, with the products that make sense for your project.",
  },
  {
    title: "Professional Installation",
    description:
      "Our installers do the work right the first time, treat your home with respect, and clean up when they're done.",
  },
  {
    title: "Enjoy the Upgrade",
    description:
      "A more comfortable, better-looking home — and a team you can call if anything ever needs a second look.",
  },
];

export const testimonials = [
  {
    quote:
      "We replaced all 40 windows in our home with Fixhup 5 years ago—great quality, no issues. Minh was knowledgeable, friendly, and helped us pick the right options within budget. Recently, a seal broke on one window, and Minh replaced it under warranty within 2 weeks, no questions asked, free of charge. Highly recommend, great company to work with.",
    name: "Nesha Tom",
    location: "Raleigh, NC",
  },
  {
    quote:
      "We contracted Fixhup to replace all our upstairs windows and our front and back screen doors. Their estimator was professional and knowledgeable about the renovation process, local real estate trends, and the specific products recommended for our home.",
    name: "David",
    location: "Raleigh, NC",
  },
  {
    quote:
      "If you are looking for a company to help with some home repairs, FixHup is for you. I was looking to have my siding replaced and wanted something top notch, and they helped me find exactly the right look for my home.",
    name: "Cindy Parrish",
    location: "Raleigh, NC",
  },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Raleigh, NC and serve homeowners throughout the greater Triangle area. Contact us with your address and we'll confirm we cover your neighborhood.",
  },
  {
    question: "What products do you install?",
    answer:
      "Windows, entry doors, screen doors, patio door systems, and siding. If you're not sure what your home needs, that's exactly what the free assessment is for.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes — our customers have had real warranty issues resolved quickly and at no cost. Ask us for the specific warranty terms that apply to your product during your free assessment.",
  },
  {
    question: "How does the free assessment work?",
    answer:
      "We visit your home, look at what you're working with, and give you a straightforward, no-pressure quote. There's no obligation to move forward.",
  },
  {
    question: "How do I get started?",
    answer:
      `Fill out the quote request form on this site or call us at ${business.phone}, and our team will follow up to schedule your free assessment.`,
  },
];
