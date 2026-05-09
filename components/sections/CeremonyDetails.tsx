'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles, Crown, Heart, Cross } from 'lucide-react';
import Image from 'next/image';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'poruwa',
      title: 'Poruwa Ceremony',
      timeLabel: 'Ceremony Time',
      timeValue: '9:05 AM',
      timeSub: 'Traditional Poruwa Ceremony',
      venueLabel: 'Venue',
      venueValue: "Wasala Nature Resort",
      venueSub: "Gampaha",
      mapLink: "https://maps.app.goo.gl/QFoYhpcX6QEzKZk49"
    },
    {
      key: 'church',
      title: 'Church Ceremony',
      timeLabel: 'Ceremony Time',
      timeValue: '2:00 PM Onward',
      venueLabel: 'Venue',
      venueValue: "St. Anthony's Church",
      venueSub: "Weliweriya",
      mapLink: "https://maps.app.goo.gl/YLxk4WhENK4x5pCR8"
    },
    {
      key: 'reception',
      title: 'Wedding Reception',
      timeLabel: 'Arrival Time',
      timeValue: '6:30 PM - 11:30 PM',
      venueLabel: 'Venue',
      venueValue: "Eagles' Lagoon View",
      mapLink: "https://maps.app.goo.gl/pj2nymY27RNf1pv8A"
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FDFBFB] via-[#FFF5F7] to-[#FDFBFB] px-4 sm:px-6 lg:px-8 py-12 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, var(--primary) 1.1px, transparent 1.1px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative flex justify-center perspective-[1000px]"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative h-[500px] sm:h-[520px] md:h-[600px] w-full max-w-[420px] overflow-hidden rounded-[30px] md:rounded-t-[200px] md:rounded-b-[30px] border-[0.5px] border-primary/40 shadow-[0_40px_100px_rgba(115,30,61,0.35)] bg-[linear-gradient(145deg,#731e3d_0%,#91274d_45%,#731e3d_100%)]"
            >
              {/* Background Video - More Clear */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-85 brightness-[1.05] contrast-[1.1]"
              >
                <source src="/35575-407595493.mp4" type="video/mp4" />
              </video>

              {/* Sophisticated Overlays for depth */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Large artistic monogram watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.1] pointer-events-none">
                <span className="font-serif text-[18rem] md:text-[22rem] text-white/50 tracking-tighter select-none">SN</span>
              </div>

              {/* Central Light Highlight - More Intense */}
              <motion.div
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/30 blur-[100px] pointer-events-none mix-blend-overlay"
              />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-8 text-center text-white">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
                >
                  <Heart className="h-4 w-4 text-white fill-white/20" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white font-bold">Joined as One</p>
                </motion.div>
                
                <h3 className="relative z-10 mt-6 md:mt-8 font-serif text-5xl md:text-7xl text-white tracking-wide drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                  S <span className="text-primary italic drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">&amp;</span> N
                </h3>
                
                <div className="relative z-10 mt-6 md:mt-10 flex items-center justify-center gap-5">
                  <span className="h-[0.5px] w-14 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                  <span className="h-[0.5px] w-14 bg-gradient-to-l from-transparent via-white/60 to-transparent" />
                </div>

                <p className="relative z-10 mt-6 md:mt-10 text-lg md:text-xl leading-relaxed text-white drop-shadow-lg font-light italic px-4 max-w-[320px]">
                  "Two hearts, one love, and a beautiful journey begins."
                </p>
                
                <div className="relative z-10 mt-8 md:mt-12 group">
                   <div className="absolute -inset-4 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <p className="relative z-10 text-xs md:text-sm uppercase tracking-[0.4em] text-white font-bold border-y border-white/40 py-3 md:py-4 px-6 md:px-8 backdrop-blur-sm">
                      June 29, 2026
                    </p>
                </div>
              </div>

              {/* Elegant floating badge */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 top-20 flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
              >
                <div className="text-center">
                  <Crown className="mx-auto h-10 w-10 text-white" />
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.4em] text-white">Forever</span>
                </div>
              </motion.div>

              {/* Cinematic Light streaks */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_10s_infinite_linear] opacity-40 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_35%,rgba(115,30,61,0.1)_50%,transparent_65%)] bg-[length:250%_250%] animate-[shimmer_12s_infinite_linear] opacity-40" />

              {/* Cinematic Lens Flare */}
              <motion.div
                animate={{ 
                  left: ['-50%', '150%'],
                  top: ['20%', '80%'],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute h-[2px] w-64 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[-45deg] blur-sm pointer-events-none"
              />
            </motion.div>
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                The Wedding Celebration
              </span>
            </div>

            <h2 className="mb-8 font-serif text-5xl font-light leading-snug text-[#1A1A1A] md:text-7xl">
              Wedding <br />
              <span className="italic text-primary">Ceremony</span>
            </h2>

            <p className="mb-12 text-lg leading-relaxed text-[#4B4B4B] max-w-lg">
              With immense joy in our hearts, we invite you to share our happiness as we embark on our journey together. Join us for the celebration of our love, commitment, and new beginnings.
            </p>

            <div className="flex flex-col gap-5">
              {detailGroups.map((group, index) => {
                return (
                    <motion.div
                      key={group.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(115,30,61,0.08)' }}
                      className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-white p-5 shadow-[0_10px_40px_rgba(115,30,61,0.06)] transition-all cursor-default"
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-primary/70">{group.title} Details</p>
                    </div>

                    <div className="space-y-5">
                      {group.timeLabel && (
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-white/10 shadow-inner">
                            <Clock3 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-primary/70 mb-1">{group.timeLabel}</p>
                            <h3 className="font-serif text-2xl text-[#1A1A1A]">{group.timeValue}</h3>
                            <p className="text-sm text-slate-500 mt-1">{group.timeSub}</p>
                          </div>
                        </div>
                      )}

                      {group.venueLabel && (
                        <>
                          {(group.timeLabel) && <div className="h-px w-full bg-primary/20" />}
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-white/10 shadow-inner">
                              <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="text-[10px] uppercase tracking-wider text-primary/60">{group.venueLabel}</p>
                              <p className="font-serif text-lg text-[#1A1A1A] leading-tight">{group.venueValue}</p>
                              {group.venueSub && <p className="text-xs text-slate-500 italic">{group.venueSub}</p>}
                              
                              {group.mapLink && (
                                <motion.a
                                  href={group.mapLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ x: 5 }}
                                  className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                                >
                                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                  </span>
                                  View on Map
                                </motion.a>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
}