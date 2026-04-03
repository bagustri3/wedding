"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/wedding-music.mp3");
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#5c4934] text-[#f5efe8] rounded-full shadow-lg flex items-center justify-center hover:bg-[#4a3a28] transition-colors"
    >
      {isPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      ) : (
        <Play className="w-5 h-5 ml-0.5" />
      )}
    </motion.button>
  );
}
