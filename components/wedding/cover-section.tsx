"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CoverSectionProps {
  onOpen: () => void;
  guestName?: string;
  imagePath?: string; // Added this to your interface
}

export function CoverSection({ onOpen, guestName, imagePath }: CoverSectionProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  // 1. Logic stays outside the return JSX
  const bgPath = imagePath && imagePath !== "/" ? imagePath : "/images/bg.jpg";

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          // 2. Apply the background style here safely
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(248,245,240,0.8), rgba(237,228,216,0.9)), url('${bgPath}')` 
          }}
        >
          {/* Decorative top border - removed the broken return () block from here */}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center px-8 z-10"
          >
            {guestName && (
              <div className="mb-6">
                <p className="text-[#8b7355] text-sm mb-1">Kepada Yth.</p>
                <p className="text-[#5c4934] text-xl font-medium">
                  {guestName}
                </p>
              </div>
            )}

            <p className="text-[#8b7355] text-sm tracking-[0.3em] uppercase mb-4">
              The Wedding Of
            </p>

            <div className="relative my-8">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-gradient-to-r from-transparent to-[#c9a962]" />
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-gradient-to-l from-transparent to-[#c9a962]" />

              <h1 className="font-serif text-5xl md:text-7xl text-[#5c4934] tracking-wide">
                Bagus
              </h1>
              <p className="font-serif text-3xl md:text-4xl text-[#c9a962] my-2">
                &
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-[#5c4934] tracking-wide">
                Mei
              </h1>
            </div>

            <p className="text-[#8b7355] text-lg mt-6 mb-2">06 . 04 . 2026</p>

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
            <svg
              width="60"
              height="30"
              viewBox="0 0 60 30"
              className="text-[#c9a962] opacity-60"
            >
              <path
                d="M30 0 Q15 15 0 15 Q15 15 30 30 Q45 15 60 15 Q45 15 30 0"
                fill="currentColor"
              />
            </svg>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}