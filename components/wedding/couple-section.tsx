"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CoupleSection() {
  return (
    <section className="py-20 bg-[#f5efe8]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934] mb-6">
            Mempelai
          </h2>
          <p className="text-[#8b7355] max-w-2xl mx-auto leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-[#c9a962] transform rotate-45" />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/groom.jpg"
                  alt="Bagus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#5c4934] mb-2">Bagus</h3>
            <p className="text-[#8b7355] text-sm mb-4">Putra dari</p>
            <p className="text-[#5c4934]">Bapak & Ibu</p>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-[#c9a962] transform rotate-45" />
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/images/bride.jpg"
                  alt="Mei"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl text-[#5c4934] mb-2">Mei</h3>
            <p className="text-[#8b7355] text-sm mb-4">Putri dari</p>
            <p className="text-[#5c4934]">Bapak & Ibu</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
