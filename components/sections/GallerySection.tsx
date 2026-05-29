'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Sparkles, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const galleryItems = [
  { src: '/11.jpeg', width: 'w-[200px] sm:w-[280px] md:w-[380px]', height: 'h-[320px] sm:h-[450px] md:h-[520px]', yOffset: 'translate-y-0' },
  { src: '/12.jpeg', width: 'w-[180px] sm:w-[240px] md:w-[320px]', height: 'h-[280px] sm:h-[380px] md:h-[440px]', yOffset: 'translate-y-8' },
  { src: '/13.jpeg', width: 'w-[220px] sm:w-[300px] md:w-[400px]', height: 'h-[340px] sm:h-[480px] md:h-[550px]', yOffset: '-translate-y-6' },
  { src: '/14.jpeg', width: 'w-[190px] sm:w-[260px] md:w-[340px]', height: 'h-[300px] sm:h-[420px] md:h-[480px]', yOffset: 'translate-y-4' },
  { src: '/15.jpeg', width: 'w-[210px] sm:w-[290px] md:w-[390px]', height: 'h-[330px] sm:h-[460px] md:h-[530px]', yOffset: '-translate-y-8' },
];

// Duplicate items multiple times to ensure a seamless infinite scroll
const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems];

export default function GallerySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [mounted, setMounted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIdx]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-[#FFFDFD] to-[#FFF5F7] py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />

        {/* Subtle grid pattern for premium modern feel */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="font-serif text-5xl font-light tracking-wide text-[#2C2422] md:text-7xl">
            Our <span className="italic text-primary">Gallery</span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <Heart size={14} className="text-primary fill-primary/20" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Gallery */}
      <div className="relative mt-20 flex w-full overflow-hidden py-10">

        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 z-20 h-full w-[15%] bg-gradient-to-r from-[#FFF5F7] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-20 h-full w-[15%] bg-gradient-to-l from-[#FFF5F7] to-transparent pointer-events-none" />

        {mounted && (
          <motion.div
            className="flex w-max items-center gap-4 sm:gap-6 md:gap-12 px-2 sm:px-4 md:px-6"
            // Start at -50% and go to 0% to move visuals to the RIGHT continuously
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 45, // Adjust speed
              repeat: Infinity,
            }}
          >
            {duplicatedItems.map((item, index) => {
              const originalIndex = index % galleryItems.length;
              return (
                <motion.div
                  key={index}
                  onClick={() => setSelectedIdx(originalIndex)}
                  className={`group relative shrink-0 overflow-hidden rounded-[2.5rem] border border-primary/20 bg-white shadow-[0_20px_50px_rgba(226,133,110,0.15)] cursor-pointer ${item.width} ${item.height} ${item.yOffset}`}
                  whileHover={{ scale: 1.05, y: -10, zIndex: 50 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  {/* Premium Inner Frame */}
                  <div className="absolute inset-4 z-20 rounded-[1.8rem] border border-primary/20 transition-all duration-500 group-hover:border-primary/60 group-hover:scale-[0.98]" />

                  {/* Image Element */}
                  <Image
                    src={item.src}
                    alt="Gallery Moment"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 300px, 500px"
                    quality={90}
                  />

                  {/* Romantic Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-y-0 left-[-50%] z-20 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    animate={{ left: ['-50%', '150%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: Math.random() * 2 + 1, ease: 'easeInOut' }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>

      <div className="relative z-10 mx-auto mt-24 max-w-3xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-xl italic text-[#73615E] md:text-2xl"
        >
          Some moments are too beautiful for words.
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close Gallery"
            >
              <X size={24} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
              }}
              className="absolute left-4 z-[110] rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer md:left-8"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
              }}
              className="absolute right-4 z-[110] rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer md:right-8"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative aspect-[3/4] w-full max-w-[90vw] max-h-[80vh] md:max-w-[450px] md:max-h-[600px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[selectedIdx].src}
                alt={`Gallery image ${selectedIdx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 450px"
                quality={95}
                priority
              />
              {/* Caption/Number overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                <p className="text-sm tracking-widest uppercase text-white/80 font-medium">Memory {selectedIdx + 1} of {galleryItems.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}