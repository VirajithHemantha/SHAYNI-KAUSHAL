'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RingsDivider() {
  return (
    <div className="relative w-full flex justify-center items-center h-0 z-50 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-16 h-16 md:w-32 md:h-32 bg-[radial-gradient(circle,rgba(255,143,163,0.15),transparent_60%)] rounded-full blur-md z-0"
      />
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-14 h-14 md:w-28 md:h-28 flex justify-center items-center z-10 mix-blend-multiply"
      >
        <Image 
          src="/premium-rings.png" 
          alt="Premium 3D Couple Rings" 
          fill 
          className="object-contain drop-shadow-xl"
          priority
        />
      </motion.div>
    </div>
  );
}
