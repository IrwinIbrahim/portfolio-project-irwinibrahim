/* Seluruh konten website dikumpulkan di sini, komponen hanya mengatur tampilan. */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export const SOCIALS = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedIn.svg",
    href: "https://linkedin.com",
  },
  { name: "TikTok", icon: "/icons/tiktok.svg", href: "https://tiktok.com" },
];

export const STATS = [
  {
    value: 2,
    suffix: "+",
    label: ["Years", "Experience"],
    image: "/images/years-experience.jpg",
    alt: "Edwin bekerja dengan laptop",
  },
  {
    value: 99,
    suffix: "%",
    label: ["Client", "Satisfaction"],
    image: "/images/client-satisfaction.jpg",
    alt: "Klien yang puas dengan hasil kerja Edwin",
  },
  {
    value: 12,
    suffix: "+",
    label: ["Project", "Delivered"],
    image: "/images/project-delivered.jpg",
    alt: "Contoh project yang telah diselesaikan",
  },
];

export const SKILLS = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Javascript", icon: "/icons/javascript.svg" },
  { name: "Typescript", icon: "/icons/typescript.svg" },
  { name: "Sequalize", icon: "/icons/sequalize.svg" },
  { name: "Mongo DB", icon: "/icons/mongo-db.svg" },
];

export const QUOTE = {
  text: '"Programming is the art of telling another human what you want the computer to do."',
  author: "— Donald Knuth",
};

export const COMPARISON_FEATURES = [
  "React Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "UI Design Proficiency (Figma)",
];

export const EXPERIENCES = [
  { period: "2025 - Present", company: "Airbnb", logo: "/icons/airbnb.svg" },
  {
    period: "2025 - Present",
    company: "Coinbase",
    logo: "/icons/coinbase.svg",
  },
  { period: "2025 - Present", company: "Webflow", logo: "/icons/webflow.svg" },
];

export const RESPONSIBILITIES = [
  "Develop responsive and user-friendly web interfaces using modern frontend technologies.",
  "Collaborate with UI/UX designers to turn design mockups into functional components.",
  "Optimize web applications for maximum speed and scalability.",
  "Ensure cross-browser and cross-platform compatibility.",
  "Implement reusable code and component libraries for future use.",
];

export const PROJECTS = [
  {
    title: "Portofolio 1",
    year: "2025",
    image: "/images/portfolio-1.jpg",
    href: "#",
  },
  {
    title: "Portofolio 2",
    year: "2025",
    image: "/images/portfolio-2.jpg",
    href: "#",
  },
  {
    title: "Portofolio 3",
    year: "2025",
    image: "/images/portfolio-3.jpg",
    href: "#",
  },
];

export const TESTIMONIALS = [
  { company: "Airbnb", logo: "/icons/airbnb-white.svg" },
  { company: "Coinbase", logo: "/icons/coinbase-white.svg" },
  { company: "Webflow", logo: "/icons/webflow-white.svg" },
].map((item) => ({
  ...item,
  rating: 5,
  quote:
    '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
  name: "Sarah Liem",
  role: "Product Manager at Techlynk",
}));

export const FAQS = [
  {
    question: "What technologies do you work with?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I am open to both freelance and remote projects. I am comfortable collaborating asynchronously and keeping communication clear across time zones.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Absolutely. I turn Figma and Sketch designs into pixel-perfect, responsive interfaces, paying close attention to spacing, typography, and interaction details.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes. I work closely with backend developers and cross-functional teams, integrating REST APIs and agreeing on data contracts early to keep delivery smooth.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "I am open to full-time opportunities that match my skills and interests. Feel free to reach out and share more about the role.",
  },
];

export const CONTACT_FIELDS = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "What should I call you?...",
    autoComplete: "name",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Where can I reach you? ...",
    autoComplete: "email",
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell me about your project or just say hi :) ...",
    autoComplete: "off",
  },
] as const;
