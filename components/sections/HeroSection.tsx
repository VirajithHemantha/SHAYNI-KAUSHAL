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
      {/* Deep Maroon Base */}
      <div className="absolute inset-0 z-0 bg-[#731e3d]" />
      
      {/* Dynamic Light Beams */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            rotate: [0, 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[20%] -top-[10%] h-[150%] w-[60%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0%,rgba(255,255,255,0.1)_25%,transparent_50%)] blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-[20%] -top-[10%] h-[150%] w-[60%] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0%,rgba(255,255,255,0.08)_25%,transparent_50%)] blur-3xl"
        />
      </div>

      {/* Decorative Royal Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50 L50 0 M50 50 L100 50 M50 50 L50 100 M50 50 L0 50' stroke='white' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='2' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} 
      />

      {/* Atmospheric Glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(115,30,61,0)_0%,rgba(115,30,61,0.4)_70%,rgba(115,30,61,0.8)_100%)]" />

      {/* Floating Gold Dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30 blur-[1px]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 7 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Mobile-only Background Image */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Image 
          src="/o.png" 
          alt="Hero Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 mx-auto hidden md:flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-12 text-center sm:px-8">
        
        {/* Decorative Frame for Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative flex flex-col items-center px-8 py-16 md:px-16 md:py-24"
        >
          {/* Subtle Corner Accents */}
          <div className="absolute left-0 top-0 h-16 w-16 border-l-[0.5px] border-t-[0.5px] border-white/30" />
          <div className="absolute right-0 top-0 h-16 w-16 border-r-[0.5px] border-t-[0.5px] border-white/30" />
          <div className="absolute left-0 bottom-0 h-16 w-16 border-l-[0.5px] border-b-[0.5px] border-white/30" />
          <div className="absolute right-0 bottom-0 h-16 w-16 border-r-[0.5px] border-b-[0.5px] border-white/30" />

          {/* Top Ornament */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-px w-8 bg-white/20 md:w-12" />
            <Sparkles className="h-4 w-4 text-white/60" />
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/80 md:text-xs">
              A Love Written in the Stars
            </span>
            <Sparkles className="h-4 w-4 text-white/60" />
            <div className="h-px w-8 bg-white/20 md:w-12" />
          </motion.div>

          {/* Parents Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-10 space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Daughter of <span className="text-white font-medium">Mr & Mrs Ganewaththa</span>
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-4 bg-white/10" />
              <Heart className="h-3 w-3 text-white/40 fill-white/10" />
              <div className="h-px w-4 bg-white/10" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Son of <span className="text-white font-medium">Mr & Mrs Perera (Late)</span>
            </p>
          </motion.div>

          {/* Main Names with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="relative"
          >
            <h1 className="font-serif text-5xl font-light leading-tight tracking-[0.15em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
              SHANI
              <span className="block text-3xl italic text-white/50 my-4 sm:my-0 sm:inline sm:mx-8 md:text-4xl">&amp;</span>
              NAVEEN
            </h1>
          </motion.div>

          {/* Wedding Date with Premium Look */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex flex-col items-center"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
            <p className="font-serif text-2xl tracking-[0.2em] text-white sm:text-3xl">
              JUNE 29, 2026
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.5em] text-white/40">
              Gampaha, Sri Lanka
            </p>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator or Ambient Bottom Sparkle */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="h-10 w-px bg-gradient-to-b from-white to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
