"use client";

import { useEffect, useState, Suspense } from "react"; // Added Suspense
import { useSearchParams } from "next/navigation";
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
import { LocationSection } from "@/components/wedding/location-section";

// 1. Move the main logic to a internal component
function WeddingContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const to = searchParams.get("to");
    if (to) {
      setGuestName(decodeURIComponent(to));
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen">
      <CoverSection onOpen={() => setIsOpen(true)} guestName={guestName} imagePath="/images/bg.jpg" />

      {isOpen && (
        <>
          <HeroSection />
          <CountdownSection />
          <CoupleSection />
          <EventSection />
          <LocationSection />
          <RsvpSection guestName={guestName} />
          <WishesSection />
          <GiftSection />
          <FooterSection />
          <MusicPlayer />
        </>
      )}
    </main>
  );
}

// 2. Wrap the component in Suspense in the default export
export default function WeddingInvitation() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <WeddingContent />
    </Suspense>
  );
}