'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cross, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Optimized Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/WhatsApp Image 2026-05-05 at 14.18.44.jpeg"
          alt="Wedding Background"
          fill
          priority
          className="object-cover opacity-[0.45] grayscale-[15%]"
          sizes="100vw"
          quality={85}
        />
      </motion.div>

      {/* Decorative watermark image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.12, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -right-20 bottom-0 h-[65%] w-[65%] pointer-events-none mix-blend-screen z-0"
      >
        <Image
          src="/WhatsApp Image 2026-05-05 at 14.18.44.jpeg"
          alt="Watermark"
          fill
          className="object-contain object-right-bottom grayscale contrast-[110%]"
          sizes="65vw"
        />
      </motion.div>

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(20,17,28,0.4)_60%,rgba(20,17,28,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,28,0.8)_0%,rgba(20,17,28,0.4)_40%,rgba(20,17,28,0.4)_60%,rgba(20,17,28,0.9)_100%)]" />

      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[-5%] h-[40vw] w-[40vw] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] h-[40vw] w-[40vw] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(142,28,63,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(142,28,63,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="h-full w-full" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-12 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/55 bg-white/20 px-5 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-primary sm:text-xs">
            The Wedding Celebration
          </span>
          <Sparkles className="h-4 w-4 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="mt-10 font-serif text-3xl font-light leading-tight tracking-[0.12em] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block sm:inline">UDAYANGANI</span>
          <span className="block sm:inline sm:mx-4 text-primary italic py-2 sm:py-0">&amp;</span>
          <span className="block sm:inline">SAMUDRA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 max-w-3xl text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-base md:text-lg italic font-light"
        >
          We invite you to witness our love and celebrate the beginning of our forever together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 rounded-3xl border border-white/20 bg-white/10 px-8 py-6 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:px-12"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold">Wedding Date</p>
          <p className="mt-3 font-serif text-3xl text-white sm:text-4xl drop-shadow-lg tracking-wider">July 27, 2026</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/20" />
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="h-px w-8 bg-white/20" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-8 flex items-center gap-3 text-white/60"
        >
          <Sparkles className="h-4 w-4" />
          <Heart className="h-4 w-4 fill-current" />
          <Sparkles className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
