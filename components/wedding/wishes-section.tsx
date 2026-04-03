"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const sampleWishes = [
  {
    id: 1,
    name: "Ahmad Ridwan",
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.",
    time: "2 jam yang lalu",
  },
  {
    id: 2,
    name: "Siti Fatimah",
    message: "Barakallahu lakuma wa baraka alaikuma wa jama a bainakuma fi khair. Semoga bahagia selalu!",
    time: "5 jam yang lalu",
  },
  {
    id: 3,
    name: "Budi Santoso",
    message: "Happy wedding! Semoga pernikahan kalian diberkahi Allah SWT dan langgeng sampai Jannah. Aamiin.",
    time: "1 hari yang lalu",
  },
];

export function WishesSection() {
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
            Wishes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934]">
            Ucapan & Doa
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {sampleWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#f5efe8] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-[#c9a962]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-[#5c4934]">{wish.name}</h4>
                    <span className="text-xs text-[#8b7355]">{wish.time}</span>
                  </div>
                  <p className="text-[#8b7355] text-sm leading-relaxed">{wish.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
