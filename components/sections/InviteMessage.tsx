'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles } from 'lucide-react';

export default function InviteMessage() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-white"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-primary/20 shadow-sm rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Invitation</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-relaxed max-w-3xl mb-8">
            We cordially invite you to share in our joy as we exchange our vows and celebrate our new life together.
          </h2>

          <div className="flex items-center justify-center gap-4 text-primary mb-8">
            <div className="h-px w-16 bg-primary/30" />
            <Heart className="w-6 h-6 fill-primary/20" />
            <div className="h-px w-16 bg-primary/30" />
          </div>

          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto italic">
            Your presence will bring joy to our hearts and make our celebration complete. We look forward to creating beautiful memories with our beloved family and friends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
