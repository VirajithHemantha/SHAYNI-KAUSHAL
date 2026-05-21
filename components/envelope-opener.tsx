'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeOpenerProps {
  onEnvelopeOpen: () => void;
}

export function EnvelopeOpener({ onEnvelopeOpen }: EnvelopeOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);



  const handleEnvelopeClick = () => {
    if (isAnimating || isOpen) return;

    setIsAnimating(true);
    setIsOpen(true);



    setTimeout(() => {
      setShowContent(true);
      onEnvelopeOpen();
    }, 3200); // Slightly longer for the premium animation
  };

  const petals = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2.5,
    duration: 10 + Math.random() * 8,
    scale: 0.5 + Math.random() * 0.9,
    drift: Math.random() * 120 - 60,
  }));

  const sparkles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
  }));

  return (
    <AnimatePresence mode="wait">
      {!showContent && (
        <motion.section
          key="envelope-section"
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.9, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,133,110,0.12),transparent_35%),linear-gradient(135deg,#1a0408_0%,#2c0710_38%,#3e0d19_65%,#0a1a0d_100%)]" />

          {/* Soft ambient glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.8, 1, 0.85],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute top-[-12rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#fdf2f4]/[0.07] blur-3xl" />
          </motion.div>

          {/* Spotlight */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.4, 0.6, 0.45],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute left-1/2 top-0 h-[40rem] w-[24rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,240,200,0.16),rgba(255,240,200,0.04)_35%,transparent_72%)] blur-2xl" />
          </motion.div>

          {/* Christian-inspired geometric pattern overlay */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20px 20px, rgba(226,133,110,0.35) 1.2px, transparent 1.2px),
                  linear-gradient(rgba(226,133,110,0.12) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(226,133,110,0.12) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px, 80px 80px, 80px 80px',
                backgroundPosition: '0 0, 0 0, 0 0',
              }}
            />
          </div>

          {/* Top and bottom ornamental fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/25 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Ornamental rings */}
          <motion.div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full border border-primary/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full border border-secondary/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          />

          {/* Floating sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {sparkles.map((item) => (
              <motion.span
                key={item.id}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{ left: item.left, top: item.top }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.6, 1.2, 0.6],
                }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Floating lotus petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {petals.map((petal) => (
              <motion.div
                key={petal.id}
                className="absolute top-[-10%]"
                style={{ left: petal.left }}
                animate={{
                  y: ['0vh', '115vh'],
                  x: [0, petal.drift, petal.drift * -0.35],
                  rotate: [0, 120, 240],
                  opacity: [0, 0.8, 0.65, 0],
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div
                  className="h-5 w-3 rounded-full bg-gradient-to-b from-[#ffccd5] via-primary to-[#D1755E] shadow-[0_0_14px_rgba(226,133,110,0.18)]"
                  style={{
                    transform: `scale(${petal.scale}) rotate(18deg)`,
                    borderRadius: '70% 30% 70% 30% / 70% 30% 70% 30%',
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-soft-light pointer-events-none"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.75%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27 opacity=%271%27/%3E%3C/svg%3E")',
            }}
          />

          {/* Main content */}
          <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6">
            {/* Intro label */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="mb-8 text-center"
            >
              <div className="mb-3 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/70" />
                <p className="text-[10px] uppercase tracking-[0.45em] text-white/80">
                  A Wedding Invitation
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/70" />
              </div>
              <p className="text-[11px] tracking-[0.24em] text-white/70">
                Unveil the moment
              </p>
            </motion.div>

            {/* Envelope stage */}
            <div className="relative flex flex-col items-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="relative"
              >
                <motion.div
                  className="absolute -inset-8 -z-20 rounded-[3rem] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(226,133,110,0.0),rgba(226,133,110,0.2),rgba(226,133,110,0.0),rgba(226,133,110,0.18),rgba(226,133,110,0.0))] blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                />

                {/* Outer aura */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.55, 0.8, 0.55],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Decorative frame */}
                <div className="absolute -inset-6 rounded-[2rem] border border-primary/15" />
                <div className="absolute -inset-3 rounded-[1.6rem] border border-white/10" />

                <motion.button
                  type="button"
                  onClick={handleEnvelopeClick}
                  whileHover={!isOpen ? { scale: 1.015, y: -4 } : {}}
                  whileTap={!isOpen ? { scale: 0.995 } : {}}
                  className="group relative block cursor-pointer isolate"
                >
                  <div className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-primary/40 opacity-60" />

                  {/* Envelope body */}
                  <motion.div
                    animate={isOpen ? { y: 56, opacity: 0 } : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="relative h-[260px] w-[340px] sm:w-[420px] overflow-hidden rounded-[28px] border border-primary/25 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                  >
                    {/* Inner texture */}
                    <div className="absolute inset-0 opacity-[0.08]">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `
                            radial-gradient(circle at center, rgba(226,133,110,0.25) 1px, transparent 1px)
                          `,
                          backgroundSize: '24px 24px',
                        }}
                      />
                    </div>

                    {/* Premium layers for closed-envelope look */}
                    <div className="pointer-events-none absolute inset-[8px] rounded-[22px] border border-primary/20" />
                    <div className="pointer-events-none absolute inset-[14px] rounded-[18px] border border-secondary/20" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(128deg,rgba(255,255,255,0.26)_0%,transparent_36%,transparent_64%,rgba(255,255,255,0.2)_100%)]" />

                    {!isOpen && (
                      <>
                        <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 rounded-lg border border-primary/45 bg-white/50" />
                        <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 rounded-lg border border-primary/45 bg-white/50" />
                        <div className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 rounded-lg border border-primary/45 bg-white/50" />
                        <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 rounded-lg border border-primary/45 bg-white/50" />
                      </>
                    )}

                    {/* Top flap */}
                    <motion.div
                      initial={{ rotateX: 0 }}
                      animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
                      transition={{
                        duration: 1.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-0 h-[54%] w-full origin-top"
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1600px',
                        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      }}
                    >
                      <div className="absolute inset-0 bg-primary shadow-[0_18px_40px_rgba(0,0,0,0.22)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_45%)]" />

                      {/* Flap ornament */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full border border-white/20 p-4">
                          <Heart className="h-10 w-10 text-white/75" />
                        </div>
                      </div>

                      {!isOpen && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                          className="pointer-events-none absolute inset-0 m-auto h-20 w-20 rounded-full border border-white/25"
                        />
                      )}
                    </motion.div>

                    {/* Side folds */}
                    <div
                      className="absolute bottom-0 left-0 h-[62%] w-1/2 bg-gradient-to-tr from-primary/10 to-white/50"
                      style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
                    />
                    <div
                      className="absolute bottom-0 right-0 h-[62%] w-1/2 bg-gradient-to-tl from-primary/10 to-white/50"
                      style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                    />

                    {/* Bottom section */}
                    <div className="absolute inset-x-0 bottom-0 flex h-[58%] flex-col items-center justify-end px-8 pb-4 sm:pb-6 text-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={!isOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="translate-y-4"
                      >
                        <h3 className="font-serif text-[1rem] sm:text-[1.3rem] tracking-[0.08em] text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] flex items-center justify-center gap-2 sm:gap-4">
                          <span>SHAYNI</span>
                          <span aria-hidden="true">&amp;</span>
                          <span>KAUSHAL</span>
                        </h3>
                        <div className="mt-4 flex items-center justify-center gap-3">
                          <span className="h-px w-10 bg-primary/50" />
                          <span className="text-primary">✦</span>
                          <span className="h-px w-10 bg-primary/50" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Wax seal */}
                    <motion.div
                      animate={!isOpen ? { scale: [1, 1.05, 1] } : { scale: 0.9, opacity: 0 }}
                      transition={{
                        duration: 2.8,
                        repeat: !isOpen ? Infinity : 0,
                        ease: 'easeInOut',
                      }}
                      className="absolute left-1/2 top-[54%] z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                    >
                      {/* Premium outer ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-dashed border-primary/25"
                      />

                      <div className="relative h-20 w-20 flex items-center justify-center">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-60" />

                        {/* The Heart Stamped Seal */}
                        <Heart
                          className="absolute inset-0 h-full w-full text-primary/40 fill-[url(#waxGradientStandalone)] drop-shadow-[0_15px_35px_rgba(209,117,94,0.6)]"
                          strokeWidth={1}
                        />

                        {/* Gold Outline Heart */}
                        <Heart
                          className="absolute inset-0 h-full w-full text-[#F8E6A6] opacity-80"
                          strokeWidth={2}
                          fill="none"
                        />

                        {/* Monogram with premium styling */}
                        <span className="relative z-10 font-serif text-lg text-white font-medium tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] mb-2">
                          S <span className="text-[10px] align-middle opacity-80">✦</span> K
                        </span>

                        {/* Shine overlay */}
                        <div className="absolute inset-4 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-md pointer-events-none" />
                      </div>

                      {/* SVG Gradient definition */}
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <radialGradient id="waxGradientStandalone" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#F3B0A2" />
                            <stop offset="60%" stopColor="#E2856E" />
                            <stop offset="100%" stopColor="#D1755E" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </motion.div>

                    {/* Hover sheen */}
                    <motion.div
                      className="absolute inset-y-0 left-[-30%] w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      animate={!isOpen ? { left: ['-35%', '125%'] } : {}}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 1.8,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>

                  {/* Invitation card */}
                  <motion.div
                    initial={{ y: 110, opacity: 0, scale: 0.96 }}
                    animate={
                      isOpen
                        ? { y: -8, opacity: 1, scale: 1 }
                        : { y: 110, opacity: 0, scale: 0.96 }
                    }
                    transition={{
                      duration: 1.1,
                      delay: 0.72,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="pointer-events-none absolute left-1/2 top-[56px] w-[320px] sm:w-[360px] -translate-x-1/2"
                  >
                    <div className="relative overflow-hidden rounded-[24px] border border-primary/35 bg-white px-6 sm:px-8 py-10 shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
                      {/* Card glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,133,110,0.18),transparent_44%)]" />

                      {/* Card frame */}
                      <div className="absolute inset-3 rounded-[18px] border border-primary/25" />
                      <div className="absolute left-1/2 top-4 h-8 w-8 -translate-x-1/2 rounded-full border border-primary/50 bg-white text-center text-[10px] leading-8 text-primary font-bold">
                        SK
                      </div>

                      {/* Card ornament */}
                      <div className="relative text-center">
                        <div className="space-y-2 mb-3">
                          <p className="text-[9px] uppercase tracking-[0.28em] text-primary">
                            Together with their families
                          </p>
                          <p className="text-[9px] leading-5 text-slate-500">
                            Bride, the loving daughter of<br />
                            <span className="font-semibold text-primary">Mr Janaka Dias & Mrs Anusha Thisera</span>
                          </p>
                          <p className="text-[9px] leading-5 text-slate-500">
                            Groom, the loving son of<br />
                            <span className="font-semibold text-primary">Mr Samantha Perera & Mrs Swarna Fernando</span>
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-3">
                          <span className="h-px w-10 bg-primary/45" />
                          <span className="text-primary">❋</span>
                          <span className="h-px w-10 bg-primary/45" />
                        </div>

                        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-light tracking-[0.08em] text-primary">
                          SHAYNI
                        </h2>
                        <p className="mt-1 font-serif text-lg italic text-secondary">&</p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.08em] text-primary">
                          KAUSHAL
                        </h2>

                        <p className="mx-auto mt-5 max-w-[240px] text-[12px] sm:text-sm leading-7 text-slate-600">
                          Invite you to witness our wedding ceremony filled with love and joy.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3">
                          <span className="h-px w-10 bg-primary/45" />
                          <span className="text-primary">✦</span>
                          <span className="h-px w-10 bg-primary/45" />
                        </div>

                        <p className="mt-5 text-[11px] uppercase tracking-[0.36em] text-primary">
                          June 18, 2026
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Styled Open Button replacing Touch to Unveil */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={!isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-12"
              >
                <button
                  onClick={handleEnvelopeClick}
                  className="group relative overflow-hidden rounded-full bg-white/10 px-10 py-3 backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
                >
                  <div className="absolute inset-0 border border-white/20 rounded-full" />
                  <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.4em] text-white px-2">
                    Tap Seal to Open
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}