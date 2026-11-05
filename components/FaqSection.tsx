"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function FaqSection() {
  return (
    <section className="bg-black text-white">
      <div className={cn(container, "pb-6 pt-10 lg:pb-10 lg:pt-21")}>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle={
            <>
              Got questions? Here are the answers to the ones we get
              <MobileBreak /> asked the most.
            </>
          }
        />

        <motion.div
          variants={listVariants}
          {...reveal}
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 lg:mt-9"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {FAQS.map((faq, i) => (
              <motion.div key={faq.question} variants={fadeUp}>
                <AccordionItem
                  value={`item-${i}`}
                  className="border-b border-white/10 py-4 md:py-5"
                >
                  <AccordionTrigger
                    className={cn(
                      "group flex items-center justify-start gap-3 p-0",
                      "text-left text-base font-medium leading-7 text-white",
                      "hover:no-underline sm:text-lg",
                      "md:gap-4 md:text-[20px]"
                    )}
                  >
                    {/* Ikon panah hanya di sebelah kiri */}
                    <span className="flex size-5 shrink-0 items-center justify-center">
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-300",
                          "group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>

                    <span>{faq.question}</span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-0 pl-8 md:pl-9">
                    <p className="mt-2 text-[13px] font-light leading-6 text-white/70 sm:text-sm md:mt-2 md:text-[14px] md:leading-6">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
