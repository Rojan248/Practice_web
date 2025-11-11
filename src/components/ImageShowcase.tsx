'use client';

import Image from 'next/image';

// ============================================================================
// ImageShowcase Component
// ============================================================================

export default function ImageShowcase() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Image
        src="/images/hero/craftmanship-1.jpg"
        alt="Swordsmith forging blade"
        width={500}
        height={350}
        className="rounded-lg object-cover shadow-lg"
      />
      <Image
        src="/images/hero/craftmanship-2.jpg"
        alt="Katana blade polishing"
        width={500}
        height={350}
        className="rounded-lg object-cover shadow-lg"
      />
    </div>
  );
}

