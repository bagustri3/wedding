"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Send, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      
      const { error: insertError } = await supabase
        .from("rsvp")
        .insert({
          name: formData.name,
          attendance: formData.attendance,
          guests: formData.attendance === "hadir" ? parseInt(formData.guests) : 0,
          message: formData.message || null,
        });

      if (insertError) {
        throw insertError;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("RSVP error:", err);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f5f0] to-[#f5efe8]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4">
            RSVP
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934] mb-4">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-[#8b7355] max-w-md mx-auto">
            Mohon konfirmasi kehadiran Anda untuk membantu kami mempersiapkan acara dengan lebih baik.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg mx-auto"
        >
          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl text-[#5c4934] mb-2">Terima Kasih!</h3>
              <p className="text-[#8b7355]">
                Konfirmasi Anda telah kami terima. Kami sangat menantikan kehadiran Anda.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label className="block text-[#5c4934] text-sm mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e0d5] focus:border-[#c9a962] focus:ring-1 focus:ring-[#c9a962] outline-none transition-colors bg-[#faf8f5]"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-[#5c4934] text-sm mb-2">Konfirmasi Kehadiran</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: "hadir" })}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                        formData.attendance === "hadir"
                          ? "border-[#c9a962] bg-[#c9a962] text-white"
                          : "border-[#e8e0d5] text-[#8b7355] hover:border-[#c9a962]"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      Hadir
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: "tidak" })}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-colors ${
                        formData.attendance === "tidak"
                          ? "border-[#c9a962] bg-[#c9a962] text-white"
                          : "border-[#e8e0d5] text-[#8b7355] hover:border-[#c9a962]"
                      }`}
                    >
                      <X className="w-4 h-4" />
                      Tidak Hadir
                    </button>
                  </div>
                </div>

                {formData.attendance === "hadir" && (
                  <div>
                    <label className="block text-[#5c4934] text-sm mb-2">Jumlah Tamu</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#e8e0d5] focus:border-[#c9a962] focus:ring-1 focus:ring-[#c9a962] outline-none transition-colors bg-[#faf8f5]"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-[#5c4934] text-sm mb-2">Ucapan & Doa</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#e8e0d5] focus:border-[#c9a962] focus:ring-1 focus:ring-[#c9a962] outline-none transition-colors bg-[#faf8f5] resize-none"
                    placeholder="Tulis ucapan dan doa untuk kedua mempelai..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !formData.attendance}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#5c4934] text-white rounded-lg hover:bg-[#4a3a28] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Konfirmasi
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
