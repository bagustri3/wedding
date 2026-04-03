"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export function LocationSection() {
  const latitude = -6.846462733165752;
  const longitude = 107.48951007265056;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f5f0] to-[#f5efe8]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934]">
            Lokasi Acara
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Map Container */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.58547390748865!2d107.48951007265056!3d-6.846462733165752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1775254438245!5m2!1sid!2sid"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Custom Marker Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="relative">
                  {/* Marker Pin */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 15,
                      delay: 0.5 
                    }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-[#c9a962] rounded-full p-2 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-1 shadow-md" />
                  </motion.div>
                  
                  {/* Pulse Animation */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#c9a962]/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="p-6 md:p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#c9a962]" />
                <h3 className="font-serif text-xl text-[#5c4934]">
                  Lokasi Pernikahan
                </h3>
              </div>
              
              <p className="text-[#8b7355] mb-6 max-w-lg mx-auto">
                Kami sangat menantikan kehadiran Bapak/Ibu/Saudara/i di hari bahagia kami.
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a962] text-white rounded-full hover:bg-[#b89952] transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
