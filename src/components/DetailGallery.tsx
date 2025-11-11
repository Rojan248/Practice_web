'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// ============================================================================
// DetailGallery Component
// ============================================================================

export default function DetailGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const detailImages = [
    {
      src: '/images/hero/detail-1.jpg',
      alt: 'Hamon detail',
    },
    {
      src: '/images/hero/detail-2.jpg',
      alt: 'Tsuba detail',
    },
    {
      src: '/images/hero/detail-3.jpg',
      alt: 'Tsuka wrap detail',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/hero/background-3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Detail gallery"
    >
      {/* Background Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading mb-4 text-5xl font-bold text-white">
            Exquisite Details
          </h2>
          <p className="font-body text-lg text-white/70">
            Discover the intricate artistry in every element
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {detailImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#1A1A1A] transition-all duration-300 group-hover:border-[#FFD700]/50 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-body text-sm font-semibold text-white">
                    {image.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

