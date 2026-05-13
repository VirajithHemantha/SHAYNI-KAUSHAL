'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles } from 'lucide-react';

const LIVE_LOCATION_URL = 'https://maps.app.goo.gl/pj2nymY27RNf1pv8A';

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#FDFBFB] border-t border-primary/10 pt-12 pb-8 md:pt-20 md:pb-12 text-[#1A1A1A]">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(115,30,61,0.05),transparent_52%)]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(115,30,61,1) 1px, transparent 1px), linear-gradient(90deg, rgba(115,30,61,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8 md:mb-16 grid grid-cols-1 gap-8">

          {/* Brand/Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center text-center"
          >
            <div className="mb-5 inline-flex items-center justify-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-primary">Thank You For Your Blessings</span>
            </div>

            <h2 className="mb-6 font-serif text-5xl font-light tracking-wide text-primary md:text-6xl">
              S <span className="text-3xl text-primary/40">&</span> N
            </h2>
            <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#4B4B4B]">
              We look forward to sharing our joy and celebrating our union surrounded by the people we love most.
            </p>
            <a
              href={LIVE_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 self-center rounded-full border border-primary/25 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm transition-all hover:bg-primary/5 hover:border-primary/40"
            >
              <MapPin className="h-4 w-4" />
              <div className="flex flex-col items-start">
                <span>Eagles' Lagoon View</span>
                <span className="text-[10px] opacity-70 normal-case font-normal">Katunayake</span>
              </div>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="group relative mb-8 md:mb-16 flex w-full items-center justify-center overflow-hidden border-y border-primary/10 py-6 md:py-14"
        >
          <div className="absolute inset-0 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite]" />

          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-center font-light tracking-wide bg-gradient-to-r from-primary/60 via-primary to-primary/60 text-transparent bg-clip-text">
            A New Chapter Begins
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 text-center text-xs font-light tracking-[0.1em] text-primary md:flex-row md:text-left">
          <div className="space-y-2">
            <p className="!text-primary/70">
              &copy; {new Date().getFullYear()} SHANI & NAVEEN. All rights reserved.
            </p>
            <p className="!text-primary/70">
              Design and created by <span className="!text-primary font-medium">InviteMint</span> | Connect WhatsApp: <a href="https://wa.me/94707819074" target="_blank" rel="noopener noreferrer" className="!text-primary hover:underline font-medium">+94 70 781 9074</a>
            </p>
          </div>
          <p className="flex items-center justify-center gap-1.5 whitespace-nowrap text-primary/70">
            Crafted with <Heart className="h-3 w-3 fill-current text-primary animate-pulse" /> for our special day
          </p>
        </div>

      </div>
    </footer>

  );
}
