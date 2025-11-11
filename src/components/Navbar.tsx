'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'HOME', href: '#' },
  { label: 'SWORDS', href: '#swords' },
  { label: 'CRAFTSMANSHIP', href: '#craftsmanship' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Return to HOME when near top
      if (scrollY < 100) {
        setActiveIndex(0)
        return
      }

      // Check which section is in view
      const sections = ['swords', 'craftsmanship', 'gallery', 'contact']
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveIndex(i + 1)
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#FFD700]">Katana</div>

          {/* Nav Links */}
          <ul className="flex items-center gap-8 lg:gap-12">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === '#') {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                    handleClick(idx)
                  }}
                  className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-300
                    ${activeIndex === idx ? 'text-[#FFD700]' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {link.label}
                </Link>
                
                {/* Animated Yellow Underline */}
                {activeIndex === idx && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FFD700]"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
