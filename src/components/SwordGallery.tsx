'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const swordData = [
  // Katanas
  {
    id: 'kat-1',
    name: "Dragon's Breath",
    nameJapanese: '竜の息吹',
    category: 'katana',
    price: 12500,
    image: '/images/hero/katana-1.jpg',
  },
  {
    id: 'kat-2',
    name: 'Moonlight Serenity',
    nameJapanese: '月光の静けさ',
    category: 'katana',
    price: 9800,
    image: '/images/hero/katana-2.jpg',
  },
  {
    id: 'kat-3',
    name: 'Thunder Strike',
    nameJapanese: '雷の一撃',
    category: 'katana',
    price: 15200,
    image: '/images/hero/katana-3.jpg',
  },
  {
    id: 'kat-4',
    name: 'Cherry Blossom',
    nameJapanese: '桜の花',
    category: 'katana',
    price: 11200,
    image: '/images/hero/katana-4.jpg',
  },
  // Wakizashis
  {
    id: 'wak-1',
    name: 'Shadow Walker',
    nameJapanese: '影の歩行者',
    category: 'wakizashi',
    price: 6800,
    image: '/images/hero/wakizashi-1.jpg',
  },
  {
    id: 'wak-2',
    name: 'Wind Chaser',
    nameJapanese: '風の追跡者',
    category: 'wakizashi',
    price: 7200,
    image: '/images/hero/wakizashi-2.jpg',
  },
  {
    id: 'wak-3',
    name: 'Silent Guardian',
    nameJapanese: '静かな守護者',
    category: 'wakizashi',
    price: 6500,
    image: '/images/hero/wakizashi-3.jpg',
  },
  {
    id: 'wak-4',
    name: 'Flame Dancer',
    nameJapanese: '炎の舞踊者',
    category: 'wakizashi',
    price: 7500,
    image: '/images/hero/wakizashi-4.jpg',
  },
  // Tantos
  {
    id: 'tan-1',
    name: "Dawn's Edge",
    nameJapanese: '夜明けの刃',
    category: 'tanto',
    price: 3800,
    image: '/images/hero/tanto-1.jpg',
  },
  {
    id: 'tan-2',
    name: 'Precision Point',
    nameJapanese: '精密な先端',
    category: 'tanto',
    price: 3500,
    image: '/images/hero/tanto-2.jpg',
  },
  {
    id: 'tan-3',
    name: 'Eternal Flame',
    nameJapanese: '永遠の炎',
    category: 'tanto',
    price: 4200,
    image: '/images/hero/tanto-3.jpg',
  },
  {
    id: 'tan-4',
    name: 'Hidden Blade',
    nameJapanese: '隠された刃',
    category: 'tanto',
    price: 3200,
    image: '/images/hero/tanto-4.jpg',
  },
]

export default function SwordGallery() {
  const [filter, setFilter] = useState('all')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    console.log('Sword Data:', swordData)
  }, [])

  const filteredSwords =
    filter === 'all'
      ? swordData
      : swordData.filter((sword) => sword.category === filter)

  if (!mounted) {
    return null // Or a loading skeleton
  }

  return (
    <section id="swords" className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-[#FFD700]">Our Collection</h2>
          <p className="mt-2 text-lg text-white/70">
            Handcrafted blades of traditional Japanese swords
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSwords.map((sword) => (
            <div key={sword.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-transparent group-hover:border-[#FFD700]">
                <Image
                  src={sword.image}
                  alt={sword.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">{sword.name} - <span className='text-sm text-white/70'>{sword.nameJapanese}</span></h3>
                <p className="text-lg font-semibold text-[#FFD700]">${sword.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
