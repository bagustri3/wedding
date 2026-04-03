"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c4934]/60 via-[#5c4934]/40 to-[#5c4934]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-[#f5efe8]/80 text-sm tracking-[0.4em] uppercase mb-6">
            We Are Getting Married
          </p>

          <div className="relative inline-block">
            <h1 className="font-serif text-6xl md:text-8xl text-[#f5efe8] tracking-wider">
              Bagus
            </h1>
            <p className="font-serif text-4xl md:text-5xl text-[#c9a962] my-3">&</p>
            <h1 className="font-serif text-6xl md:text-8xl text-[#f5efe8] tracking-wider">
              Mei
            </h1>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-[#f5efe8]">
            <div className="w-16 h-[1px] bg-[#c9a962]" />
            <p className="text-lg tracking-[0.2em]">06 April 2026</p>
            <div className="w-16 h-[1px] bg-[#c9a962]" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#f5efe8]/60"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
