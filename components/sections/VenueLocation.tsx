'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react';
import Image from 'next/image';

const LIVE_LOCATION_URL = 'https://share.google/uDiSh5l8Yuj6LV9JZ';
const FUNCTION_LOCATION_URL = 'https://share.google/uDiSh5l8Yuj6LV9JZ';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-[#E2856E]/20 to-[#F3B0A2]/10 opacity-75 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#E2856E]/15 to-white opacity-60 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, var(--pink-dark) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-14 text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/45 bg-white/70 px-5 py-2.5 shadow-[0_10px_28px_rgba(226,133,110,0.1)] backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary sm:text-sm">
              Wedding Venue
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl">
            Venue <span className="relative inline-block text-primary">
              Location
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="var(--pink-light)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-[320px] w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-white/65 shadow-[0_16px_50px_rgba(226,133,110,0.1)] backdrop-blur-xl sm:h-[420px] md:h-[500px] lg:col-span-8"
          >
            {/* Venue Image Background */}
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
              <Image
                src="/lo.jpeg"
                alt="Venue Location"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500 z-1" />
            
            {/* Subtle patterns on top of image */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay z-2"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '42px 42px',
              }}
            />

            <div className="absolute left-1/2 top-[48%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/90 bg-white/85 shadow-[0_0_35px_rgba(226,133,110,0.4)]"
              >
                <MapPin className="h-10 w-10 text-primary" />
                <div className="absolute bottom-[-6px] h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_#E2856E]" />
              </motion.div>
              <div className="absolute top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full border border-primary/20" />
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.75, 0] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: 'easeOut' }}
                className="absolute top-1/2 -z-10 h-24 w-24 -translate-y-1/2 rounded-full bg-primary/10"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-transparent p-4 pt-16 sm:p-6 md:p-8">
              <a
                href={LIVE_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-primary/15 bg-white/85 px-4 py-3 shadow-[0_10px_30px_rgba(226,133,110,0.08)] transition-all hover:bg-white sm:px-5 sm:py-4"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Live Location</p>
                  <h4 className="mt-1 font-serif text-lg text-[#1A1A1A] sm:text-2xl">Eagles' Lagoon View</h4>
                  <p className="text-xs text-slate-500 font-medium">Katunayake</p>
                </div>
                <motion.div whileHover={{ scale: 1.08 }} className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <Navigation className="h-5 w-5" />
                </motion.div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-[2rem] border border-primary/10 bg-white/80 p-6 shadow-[0_16px_45px_rgba(226,133,110,0.08)] backdrop-blur-xl md:p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Venue Details</span>
              </div>

              <h3 className="font-serif text-3xl leading-tight text-[#1A1A1A] md:text-4xl">
                Eagles' Lagoon View
              </h3>
              <p className="text-sm text-primary/70 font-medium tracking-wider uppercase mt-1">Katunayake</p>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                We warmly invite you to join us at Eagles' Lagoon View, Katunayake to celebrate our special day.
              </p>

              <a
                href={LIVE_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(226,133,110,0.3)] transition-transform hover:scale-[1.02]"
              >
                Open Venue Location
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-8 rounded-2xl border border-primary/20 bg-white/75 p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">Event Schedule</p>
                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Church Ceremony</p>
                      <p className="font-serif text-lg text-[#1A1A1A]">2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">Reception</p>
                      <p className="font-serif text-lg text-[#1A1A1A]">6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
