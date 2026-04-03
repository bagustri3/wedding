"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export function EventSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f5efe8] to-[#f8f5f0]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            Wedding Event
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934]">
            Waktu & Tempat
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Akad Nikah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[#f5efe8] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-[#c9a962]">1</span>
            </div>
            <h3 className="font-serif text-2xl text-[#5c4934] mb-6">
              Akad Nikah
            </h3>

            <div className="space-y-4 text-[#8b7355]">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-[#c9a962]" />
                <span>Senin, 06 April 2026</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-[#c9a962]" />
                <span>9:00 WIB - 10.00 WIB</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[#c9a962]" />
                <span>Kediaman Mempelai Wanita</span>
              </div>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-[#f5efe8] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-serif text-2xl text-[#c9a962]">2</span>
            </div>
            <h3 className="font-serif text-2xl text-[#5c4934] mb-6">Resepsi</h3>

            <div className="space-y-4 text-[#8b7355]">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-[#c9a962]" />
                <span>Senin, 06 April 2026</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-[#c9a962]" />
                <span>10:00 WIB - Selesai</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-[#c9a962]" />
                <span>Kediaman Mempelai Wanita</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
