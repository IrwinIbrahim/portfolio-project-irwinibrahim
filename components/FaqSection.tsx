"use client";

import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

/*
  Desktop: ukuran memakai clamp(min, vw, max) berdasarkan desain Figma 1440px,
  sehingga proporsional di layar < 1440px dan sesuai desain di >= 1440px.
*/
export default function FaqSection() {
  // Item pertama terbuka secara default, seperti di desain
  const [value, setValue] = useState<string>("item-0");

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-6 pt-10 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-10 lg:pt-21">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-2 text-center text-[13px] font-light leading-7 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          Got questions? Here are the answers to the ones we get
          <br className="md:hidden" /> asked the most.
        </motion.p>

        {/* Accordion (Radix UI) */}
        <Accordion.Root
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
          className="mt-2 lg:mt-9"
        >
          {FAQS.map((faq, i) => {
            const itemValue = `item-${i}`;
            const isOpen = value === itemValue;

            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                custom={i + 2}
                {...reveal}
              >
                <Accordion.Item
                  value={itemValue}
                  className="border-b border-white/10 py-4 last:border-b-0 md:py-[clamp(24px,2.5vw,36px)]"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full cursor-pointer items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 md:gap-4">
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex size-6 shrink-0 items-center justify-center"
                      >
                        <ChevronDown className="size-4 text-white md:size-4.5" />
                      </motion.span>
                      <span className="text-base font-medium leading-8 transition-colors duration-300 group-hover:text-white/80 md:text-[clamp(18px,1.67vw,24px)]">
                        {faq.question}
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Accordion.Content forceMount asChild>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden pl-9 md:pl-10"
                        >
                          <p className="mt-0.5 text-[13px] font-light leading-7 text-white/80 md:mt-5 md:text-[clamp(12px,1.11vw,16px)] md:leading-6">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </Accordion.Content>
                    )}
                  </AnimatePresence>
                </Accordion.Item>
              </motion.div>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
}
