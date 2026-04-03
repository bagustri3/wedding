"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoverSectionProps {
  onOpen: () => void;
}

export function CoverSection({ onOpen }: CoverSectionProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f5f0] via-[#f5efe8] to-[#ede4d8]"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M0%2C50%20Q25%2C30%2050%2C50%20T100%2C50%22%20fill%3D%22none%22%20stroke%3D%22%23c9a962%22%20stroke-width%3D%220.5%22%20opacity%3D%220.3%22%2F%3E%3C%2Fsvg%3E')] bg-repeat-x opacity-50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center px-8"
          >
            <p className="text-[#8b7355] text-sm tracking-[0.3em] uppercase mb-4">
              The Wedding Of
            </p>

            <div className="relative my-8">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]" />
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]" />
              
              <h1 className="font-serif text-5xl md:text-7xl text-[#5c4934] tracking-wide">
                Bagus
              </h1>
              <p className="font-serif text-3xl md:text-4xl text-[#c9a962] my-2">&</p>
              <h1 className="font-serif text-5xl md:text-7xl text-[#5c4934] tracking-wide">
                Mei
              </h1>
            </div>

            <p className="text-[#8b7355] text-lg mt-6 mb-2">
              06 . 04 . 2026
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="mt-10 px-8 py-3 bg-[#5c4934] text-[#f8f5f0] rounded-full text-sm tracking-[0.2em] uppercase hover:bg-[#4a3a28] transition-colors duration-300 shadow-lg"
            >
              Buka Undangan
            </motion.button>
          </motion.div>

          {/* Decorative bottom ornament */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <svg width="60" height="30" viewBox="0 0 60 30" className="text-[#c9a962] opacity-60">
              <path d="M30 0 Q15 15 0 15 Q15 15 30 30 Q45 15 60 15 Q45 15 30 0" fill="currentColor" />
            </svg>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
