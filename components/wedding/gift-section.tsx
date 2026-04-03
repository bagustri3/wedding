"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";

const bankAccounts = [
  {
    id: 1,
    bank: "Bank BCA",
    accountNumber: "2780516430",
    accountName: "Bagus Tri Prasetyo",
  },
  // {
  //   id: 2,
  //   bank: "Bank BJB",
  //   accountNumber: "0987654321",
  //   accountName: "Mei",
  // },
];

export function GiftSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
            Wedding Gift
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c4934] mb-4">
            Kirim Hadiah
          </h2>
          <p className="text-[#8b7355] max-w-md mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, kami menyediakan informasi berikut.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto space-y-4">
          {bankAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#f5efe8] rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#5c4934]">{account.bank}</h4>
                  <p className="text-sm text-[#8b7355]">a.n {account.accountName}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-[#faf8f5] rounded-lg p-4">
                <span className="font-mono text-[#5c4934] tracking-wider">{account.accountNumber}</span>
                <button
                  onClick={() => copyToClipboard(account.accountNumber, account.id)}
                  className="flex items-center gap-1 text-sm text-[#c9a962] hover:text-[#5c4934] transition-colors"
                >
                  {copiedId === account.id ? (
                    <>
                      <Check className="w-4 h-4" />
                      Tersalin
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
