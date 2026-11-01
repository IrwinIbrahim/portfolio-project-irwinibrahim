"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

type Status = "idle" | "sending" | "sent";

const FIELDS = [
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
  viewport: { once: true, amount: 0.15 },
} as const;

const fieldBase =
  "block w-full border-0 border-b border-white/15 bg-transparent px-2 text-sm font-light text-white placeholder:text-white/40 transition-colors duration-300 focus:border-white/60 focus:outline-none md:px-4";

/*
  Desktop (md+): foto di kiri, form di kanan. Mobile: foto di atas, form di bawah.
  Ukuran heading memakai clamp(min, vw, max) berdasarkan desain Figma 1440px.
*/
export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      // TODO: ganti dengan request ke API route / layanan form (Formspree, Resend, dll.)
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      console.log("Contact form:", data);
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="text-white">
      <div className="mx-auto max-w-360 px-4 pb-8 pt-13 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-29.5 lg:pt-25">
        <motion.div
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="grid overflow-hidden rounded-2xl border border-white/10 bg-black md:grid-cols-2"
        >
          {/* Foto */}
          <div className="relative aspect-361/390 overflow-hidden md:aspect-auto">
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/profile-contact.jpg"
                alt="Foto Irwin Ibrahim sedang bekerja"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Form */}
          <div className="bg-black px-4 pb-10 pt-7 md:px-5 md:pb-7 md:pt-9">
            <motion.h2
              variants={fadeUp}
              custom={1}
              {...reveal}
              className="text-2xl font-bold leading-8 md:text-[clamp(28px,2.78vw,40px)] md:leading-[1.2]"
            >
              Start a Conversation
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              {...reveal}
              className="mt-5 text-[13px] font-light leading-7 text-white/70 md:mt-6 md:text-[clamp(13px,1.11vw,16px)] md:leading-6"
            >
              I&apos;m open to freelance gigs, collaborations, or
              <br className="md:hidden" /> even just a casual chat.
            </motion.p>

            <form onSubmit={handleSubmit} className="mt-7 md:mt-10">
              {FIELDS.map((field, i) => (
                <motion.div
                  key={field.id}
                  variants={fadeUp}
                  custom={i + 3}
                  {...reveal}
                  className={i > 0 ? "mt-6 md:mt-8" : ""}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-bold leading-5"
                  >
                    {field.label}
                    <span className="ml-px align-top text-xs text-red-500/80">
                      *
                    </span>
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={1}
                      required
                      placeholder={field.placeholder}
                      className={`${fieldBase} mt-2.5 min-h-15.5 resize-none py-5 leading-5.5 field-sizing-content md:mt-4`}
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      className={`${fieldBase} mt-2.5 h-15.5 md:mt-4`}
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={fadeUp}
                custom={6}
                {...reveal}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-12 w-full rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90 disabled:opacity-70"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Message sent, thank you!"
                      : "Let's Build Something"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
