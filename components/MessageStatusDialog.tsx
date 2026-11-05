"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export type MessageResult = "success" | "failed";

const CONTENT: Record<
  MessageResult,
  { image: string; alt: string; title: string; lines: string[]; action: string }
> = {
  success: {
    image: "/images/message-success.jpg",
    alt: "Amplop dengan tanda centang",
    title: "Message Sent Successfully!",
    lines: [
      "Thank you for reaching out.",
      "I'll get back to you as soon as possible",
    ],
    action: "Back to Home",
  },
  failed: {
    image: "/images/message-failed.jpg",
    alt: "Amplop dengan tanda silang",
    title: "Send Failed",
    lines: ["Something broke along the way. Let's try resending it."],
    action: "Try Again",
  },
};

type Props = {
  /** null = popup tertutup */
  result: MessageResult | null;
  onClose: () => void;
  /** Tombol utama: "Back to Home" (success) atau "Try Again" (failed) */
  onAction: (result: MessageResult) => void;
};

/* Popup memakai Dialog ShadCN (berbasis Radix UI): fokus terkunci, Escape menutup, scroll terkunci. */
export default function MessageStatusDialog({
  result,
  onClose,
  onAction,
}: Props) {
  // Simpan hasil terakhir agar teks tidak berubah saat animasi tutup berjalan.
  // Pola "menyesuaikan state saat render" (tanpa ref/effect), sesuai dokumentasi React.
  const [current, setCurrent] = useState<MessageResult>("success");
  if (result && result !== current) {
    setCurrent(result);
  }

  const data = CONTENT[current];

  return (
    <Dialog
      open={result !== null}
      onOpenChange={(isOpen) => !isOpen && onClose()}
    >
      <DialogContent
        showCloseButton={false}
        // Ruang untuk amplop di atas judul. Memakai style inline agar tidak ditimpa padding bawaan ShadCN.
        style={{ paddingTop: 120 }}
        className="w-full max-w-[calc(100%-2rem)] gap-0 rounded-xl border-0 bg-black px-6 pb-6 text-center text-white sm:max-w-115"
      >
        {/* Ilustrasi amplop: menonjol keluar dari sisi atas kartu */}
        <div className="absolute left-1/2 top-0 size-32.5 -translate-x-1/2 translate-y-[-37%]">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 14,
              delay: 0.12,
            }}
            className="size-full"
          >
            <Image
              src={data.image}
              alt={data.alt}
              width={130}
              height={130}
              className="size-full object-contain mix-blend-screen"
            />
          </motion.div>
        </div>

        <DialogTitle className="text-xl font-semibold leading-7">
          {data.title}
        </DialogTitle>

        <DialogDescription asChild>
          <div className="mt-2.5 text-[13px] font-light leading-7 text-white/80">
            {data.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </DialogDescription>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8"
        >
          <Button
            type="button"
            onClick={() => onAction(current)}
            className="h-12 w-full rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90"
          >
            {data.action}
          </Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
