"use client";

import { useState } from "react";
import { CoverSection } from "@/components/wedding/cover-section";
import { HeroSection } from "@/components/wedding/hero-section";
import { CountdownSection } from "@/components/wedding/countdown-section";
import { CoupleSection } from "@/components/wedding/couple-section";
import { EventSection } from "@/components/wedding/event-section";
import { RsvpSection } from "@/components/wedding/rsvp-section";
import { WishesSection } from "@/components/wedding/wishes-section";
import { GiftSection } from "@/components/wedding/gift-section";
import { FooterSection } from "@/components/wedding/footer-section";
import { MusicPlayer } from "@/components/wedding/music-player";

export default function WeddingInvitation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <CoverSection onOpen={() => setIsOpen(true)} />
      
      {isOpen && (
        <>
          <HeroSection />
          <CountdownSection />
          <CoupleSection />
          <EventSection />
          <RsvpSection />
          <WishesSection />
          <GiftSection />
          <FooterSection />
          <MusicPlayer />
        </>
      )}
    </main>
  );
}
