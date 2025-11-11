'use client'

import Image from 'next/image'
import { useState } from 'react'

const ALL_SWORDS = [
  // Katanas
  {
    id: 'kat-1',
    name: "Dragon's Breath",
    category: 'katana',
    price: 8500,
    image: '/images/hero/katana-1.jpg',
  },
  {
    id: 'kat-2',
    name: 'Blue Elegance',
    category: 'katana',
    price: 7200,
    image: '/images/hero/katana-2.jpg',
  },
  {
    id: 'kat-3',
    name: 'Burgundy Luxury',
    category: 'katana',
    price: 9800,
    image: '/images/hero/katana-3.jpg',
  },
  {
    id: 'kat-4',
    name: 'Ancient Warrior',
    category: 'katana',
    price: 6500,
    image: '/images/hero/katana-4.jpg',
  },
  // Wakizashis
  {
    id: 'wak-1',
    name: 'White Silk',
    category: 'wakizashi',
    price: 4200,
    image: '/images/hero/wakizashi-1.jpg',
  },
  {
    id: 'wak-2',
    name: 'Crimson Samurai',
    category: 'wakizashi',
    price: 4800,
    image: '/images/hero/wakizashi-2.jpg',
  },
  {
    id: 'wak-3',
    name: 'Battle Worn',
    category: 'wakizashi',
    price: 3900,
    image: '/images/hero/wakizashi-3.jpg',
  },
  {
    id: 'wak-4',
    name: 'Ceremonial Gold',
    category: 'wakizashi',
    price: 5500,
    image: '/images/hero/wakizashi-4.jpg',
  },
  // Tantos
  {
    id: 'tan-1',
    name: 'Black Silk Tanto',
    category: 'tanto',
    price: 2200,
    image: '/images/hero/tanto-1.jpg',
  },
  {
    id: 'tan-2',
    name: 'Combat Tanto',
    category: 'tanto',
    price: 1900,
    image: '/images/hero/tanto-2.jpg',
  },
  {
    id: 'tan-3',
    name: 'Luxury Ceremonial',
    category: 'tanto',
    price: 3200,
    image: '/images/hero/tanto-3.jpg',
  },
  {
    id: 'tan-4',
    name: 'Traditional Red',
    category: 'tanto',
    price: 2500,
    image: '/images/hero/tanto-4.jpg',
  },
]

export default function SwordGallery() {
  const [filter, setFilter] = useState('all')

  const filteredSwords =
    filter === 'all'
      ? ALL_SWORDS
      : ALL_SWORDS.filter((sword) => sword.category === filter)

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-[#FFD700]">Our Collection</h2>
          <p className="mt-2 text-lg text-white/70">
            Handcrafted blades for the modern collector
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex justify-center gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
              filter === 'all' ? 'bg-[#FFD700] text-black' : 'bg-[#1A1A1A] text-white/70'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('katana')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
              filter === 'katana' ? 'bg-[#FFD700] text-black' : 'bg-[#1A1A1A] text-white/70'
            }`}
          >
            Katanas
          </button>
          <button
            onClick={() => setFilter('wakizashi')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
              filter === 'wakizashi' ? 'bg-[#FFD700] text-black' : 'bg-[#1A1A1A] text-white/70'
            }`}
          >
            Wakizashis
          </button>
          <button
            onClick={() => setFilter('tanto')}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition ${
              filter === 'tanto' ? 'bg-[#FFD700] text-black' : 'bg-[#1A1A1A] text-white/70'
            }`}
          >
            Tantos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSwords.map((sword) => (
            <div key={sword.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#1A1A1A]">
                <Image
                  src={sword.image}
                  alt={sword.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">{sword.name}</h3>
                <p className="text-lg font-semibold text-[#FFD700]">${sword.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
