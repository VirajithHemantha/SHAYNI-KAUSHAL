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

export default function HomecomingPage() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="theme-homecoming relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener onEnvelopeOpen={() => setIsOpened(true)} isHomecoming={true} />
      ) : (
        <>
          <HeroSection isHomecoming={true} />
          <InviteMessage />
          <CeremonyDetails isHomecoming={true} />
          
          <RingsDivider />
          <CountdownSection isHomecoming={true} />

          <RingsDivider />
          <GallerySection />

          <RingsDivider />
          <RSVPSection isHomecoming={true} />
          
          <RingsDivider />
          <BlessingsSection isHomecoming={true} />
          
          <FooterSection isHomecoming={true} />
        </>
      )}
    </div>
  );
}
