"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface Wish {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

const WISHES_PER_PAGE = 5;

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Baru saja";
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} menit yang lalu`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} jam yang lalu`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} hari yang lalu`;
  } else {
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }
}

export function WishesSection() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / WISHES_PER_PAGE);

  useEffect(() => {
    async function fetchWishes() {
      const supabase = createClient();
      
      // Get total count
      const { count } = await supabase
        .from("rsvp")
        .select("*", { count: "exact", head: true })
        .not("message", "is", null)
        .not("message", "eq", "");
      
      if (count !== null) {
        setTotalCount(count);
      }

      // Get paginated data
      const from = (currentPage - 1) * WISHES_PER_PAGE;
      const to = from + WISHES_PER_PAGE - 1;
      
      const { data, error } = await supabase
        .from("rsvp")
        .select("id, name, message, created_at")
        .not("message", "is", null)
        .not("message", "eq", "")
        .order("created_at", { ascending: false })
        .range(from, to);

      if (!error && data) {
        setWishes(data);
      }
      setIsLoading(false);
    }

    fetchWishes();
  }, [currentPage]);

  // Set up realtime subscription for new wishes (only on first page)
  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel("wishes-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "rsvp",
        },
        (payload) => {
          const newWish = payload.new as Wish;
          if (newWish.message) {
            setTotalCount((prev) => prev + 1);
            if (currentPage === 1) {
              setWishes((prev) => [newWish, ...prev].slice(0, WISHES_PER_PAGE));
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setIsLoading(true);
      setCurrentPage(page);
    }
  };

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
          {totalCount > 0 && (
            <p className="text-[#8b7355] text-sm mt-2">
              {totalCount} ucapan
            </p>
          )}
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-[#c9a962] animate-spin" />
            </div>
          ) : wishes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <Heart className="w-12 h-12 text-[#c9a962] mx-auto mb-4" />
              <p className="text-[#8b7355]">
                Belum ada ucapan. Jadilah yang pertama memberikan doa & ucapan!
              </p>
            </motion.div>
          ) : (
            <>
              {wishes.map((wish, index) => (
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
                        <span className="text-xs text-[#8b7355]">
                          {formatTimeAgo(wish.created_at)}
                        </span>
                      </div>
                      <p className="text-[#8b7355] text-sm leading-relaxed">
                        {wish.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-6">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5c4934] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5efe8] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-[#c9a962] text-white"
                          : "bg-white text-[#5c4934] hover:bg-[#f5efe8] shadow-sm"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#5c4934] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f5efe8] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
