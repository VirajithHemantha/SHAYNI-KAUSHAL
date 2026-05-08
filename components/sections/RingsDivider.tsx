'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RingsDivider() {
  return (
    <div className="relative w-full flex justify-center items-center py-8">
      <div className="h-px w-24 bg-primary/20" />
      <div className="mx-4 h-1.5 w-1.5 rotate-45 rounded-sm bg-primary/40" />
      <div className="h-px w-24 bg-primary/20" />
    </div>
  );
}
