'use client';

import { useState, useEffect } from 'react';
import { EnvelopeOpener } from '@/components/envelope-opener';
import HeroSection from '@/components/sections/HeroSection';
import InviteMessage from '@/components/sections/InviteMessage';
import CeremonyDetails from '@/components/sections/CeremonyDetails';
import CountdownSection from '@/components/sections/CountdownSection';
import RingsDivider from '@/components/sections/RingsDivider';

import GallerySection from '@/components/sections/GallerySection';
import RSVPSection from '@/components/sections/RSVPSection';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener onEnvelopeOpen={() => setIsOpened(true)} />
      ) : (
        <>
          <HeroSection />
          <InviteMessage />
          <CeremonyDetails />
          
          <RingsDivider />
          <CountdownSection />

          <RingsDivider />
          <GallerySection />

          <RingsDivider />
          <RSVPSection />
          
          <RingsDivider />
          <BlessingsSection />
          
          <FooterSection />
        </>
      )}
    </div>
  );
}
