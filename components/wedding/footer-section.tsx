"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="py-16 bg-[#5c4934] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-[#f5efe8] mb-4">
          Bagus & Mei
        </h2>
        
        <div className="flex items-center justify-center gap-2 text-[#c9a962] mb-8">
          <div className="w-12 h-[1px] bg-[#c9a962]" />
          <Heart className="w-4 h-4 fill-current" />
          <div className="w-12 h-[1px] bg-[#c9a962]" />
        </div>

        <p className="text-[#f5efe8]/80 max-w-md mx-auto mb-8 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.
        </p>

        <p className="text-[#c9a962] text-sm tracking-wider">
          Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="mt-12 pt-8 border-t border-[#f5efe8]/20">
          <p className="text-[#f5efe8]/60 text-sm">
            06 April 2026
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
