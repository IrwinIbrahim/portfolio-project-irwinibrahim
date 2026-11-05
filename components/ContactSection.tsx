"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MessageStatusDialog, {
  type MessageResult,
} from "@/components/MessageStatusDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_FIELDS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

type FormPayload = Record<string, FormDataEntryValue>;

/*
  Endpoint pengiriman form, misalnya Formspree: https://formspree.io/f/xxxxxxx
  Isi di .env.local  ->  NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
  Jika kosong, form berjalan dalam mode demo (selalu berhasil).
  Untuk melihat popup gagal, isi dengan URL yang salah, mis. https://invalid.example
*/
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

async function sendMessage(data: FormPayload) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to send message");
}

/* Gaya field desain Figma: tanpa kotak, hanya garis bawah. Menimpa gaya bawaan ShadCN. */
const fieldClass =
  "mt-2.5 rounded-none border-0 border-b border-white/15 bg-transparent px-2 text-sm font-light text-white shadow-none placeholder:text-white/40 focus-visible:border-white/60 focus-visible:ring-0 md:mt-4 md:px-4 dark:bg-transparent";

/*
  Desktop (md+): foto di kiri, form di kanan. Mobile: foto di atas, form di bawah.
  Ukuran heading memakai clamp(min, vw, max) berdasarkan desain Figma 1440px.
*/
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const lastPayload = useRef<FormPayload | null>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<MessageResult | null>(null);

  const submit = async (payload: FormPayload) => {
    lastPayload.current = payload;
    setSending(true);
    try {
      await sendMessage(payload);
      formRef.current?.reset();
      setResult("success");
    } catch {
      setResult("failed");
    } finally {
      setSending(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void submit(Object.fromEntries(new FormData(e.currentTarget)));
  };

  const handleDialogAction = (shown: MessageResult) => {
    setResult(null);
    if (shown === "success") {
      // Tunggu popup tertutup (scroll body sempat terkunci) lalu kembali ke atas
      setTimeout(
        () =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" }),
        200,
      );
    } else if (lastPayload.current) {
      // "Try Again": kirim ulang data terakhir
      void submit(lastPayload.current);
    }
  };

  return (
    <section className="text-white">
      <div className={cn(container, "pb-8 pt-13 lg:pb-29.5 lg:pt-25")}>
        <motion.div
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="grid overflow-hidden rounded-2xl border border-white/10 bg-black md:grid-cols-2"
        >
          {/* Foto */}
          <div className="relative aspect-361/390 overflow-hidden sm:aspect-16/10 md:aspect-auto">
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/images/profile-contact.jpg"
                alt="Edwin Anderson sedang bekerja dengan laptop"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Form */}
          <div className="bg-black px-4 pb-10 pt-7 sm:px-6 md:px-5 md:pb-7 md:pt-9">
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
              className="mt-5 text-[13px] font-light leading-7 text-white/70 sm:text-sm md:mt-6 md:text-[clamp(13px,1.11vw,16px)] md:leading-6"
            >
              I&apos;m open to freelance gigs, collaborations, or
              <br className="md:hidden" /> even just a casual chat.
            </motion.p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-7 md:mt-10"
            >
              {CONTACT_FIELDS.map((field, i) => (
                <motion.div
                  key={field.id}
                  variants={fadeUp}
                  custom={i + 3}
                  {...reveal}
                  className={i > 0 ? "mt-6 md:mt-8" : undefined}
                >
                  <Label
                    htmlFor={field.id}
                    className="block text-sm font-bold leading-5"
                  >
                    {field.label}
                    <span className="ml-px align-top text-xs text-red-500/80">
                      *
                    </span>
                  </Label>

                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.id}
                      name={field.id}
                      rows={1}
                      required
                      placeholder={field.placeholder}
                      className={cn(
                        fieldClass,
                        "min-h-15.5 resize-none py-5 leading-5.5",
                      )}
                    />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      className={cn(fieldClass, "h-15.5")}
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
                  disabled={sending}
                  className="h-12 w-full rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90 disabled:opacity-70"
                >
                  {sending ? "Sending..." : "Let's Build Something"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Popup hasil pengiriman */}
      <MessageStatusDialog
        result={result}
        onClose={() => setResult(null)}
        onAction={handleDialogAction}
      />
    </section>
  );
}
