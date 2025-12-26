"use client";
import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600',
    alt: 'Editorial Fashion',
    category: 'Portrait'
  },
  {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600',
    alt: 'High Fashion Concept',
    category: 'Fashion'
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600',
    alt: 'Classic Portraiture',
    category: 'Creative'
  },
  {
    src: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1600',
    alt: 'Modern Aesthetic',
    category: 'Editorial'
  }
];

export default function Home() {
  return (
    <div className="flex h-screen overflow-x-auto snap-x snap-mandatory no-scrollbar bg-black cursor-crosshair">
      {IMAGES.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="relative min-w-[50vw] h-full snap-start overflow-hidden group border-r border-[#111]"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 hover:backdrop-blur-sm" />

          <div className="absolute bottom-16 left-16 overflow-hidden">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
            >
              <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-white/50 mb-4 font-sans">{image.category}</h3>
              <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tighter leading-none">{image.alt}</h2>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Visual spacer at the end */}
      <div className="min-w-[10vw] flex items-center justify-center">
        <div className="w-[1px] h-32 bg-[#222]" />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
