export const site = {
  name: "Dee Kim",
  role: "Product Designer",
  location: "Los Angeles",
  email: "hello@deekim.design",
  resumeUrl: "/dee-kim-resume.pdf",
  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Let's talk", href: "/about#contact" },
  social: [
    { label: "Dribbble", href: "https://dribbble.com/deekim" },
    { label: "LinkedIn", href: "https://linkedin.com/in/daegonkim" },
    { label: "Email", href: "mailto:hello@deekim.design" },
  ],
  meta: {
    title: "Dee Kim — Product Designer",
    description:
      "Dee Kim is a Los Angeles product designer with 9+ years across Disney, Turo, WeWork, RingCentral and Verizon — an AI-leveraging designer expanding into advertising and creative work.",
    url: "https://deekim.design",
  },
} as const;
