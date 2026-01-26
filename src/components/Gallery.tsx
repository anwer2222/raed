'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Projects } from '@/seed'

// --- Data Preparation ---
// Note: We use the heights you provided to maintain the "Dense Center" look
const leftImages = [
  {
    id: '1',
    src: Projects[0].heroImage,
    alt: Projects[0].title,
    height: 'h-[450px]',
  },
  {
    id: '2',
    src: Projects[1].heroImage,
    alt: Projects[1].title,
    height: 'h-[450px]',
  },
  {
    id: '3',
    src: Projects[2].heroImage,
    alt: Projects[2].title,
    height: 'h-[450px]',
  },
  {
    id: '15',
    src: Projects[14].heroImage,
    alt: Projects[14].title,
    height: 'h-[450px]',
  },
  {
    id: '17',
    src: Projects[16].heroImage,
    alt: Projects[16].title,
    height: 'h-[450px]',
  },
]

const centerImages = [
  {
    id: '4',
    src: Projects[3].heroImage,
    alt: Projects[3].title,
    height: 'h-[280px]',
  },
  {
    id: '5',
    src: Projects[4].heroImage,
    alt: Projects[4].title,
    height: 'h-[280px]',
  },
  {
    id: '6',
    src: Projects[5].heroImage,
    alt: Projects[5].title,
    height: 'h-[280px]',
  },
  {
    id: '7',
    src: Projects[6].heroImage,
    alt: Projects[6].title,
    height: 'h-[280px]',
  },
  {
    id: '8',
    src: Projects[7].heroImage,
    alt: Projects[7].title,
    height: 'h-[280px]',
  },
  {
    id: '12',
    src: Projects[11].heroImage,
    alt: Projects[11].title,
    height: 'h-[280px]',
  }
  
]

const rightImages = [
  {
    id: '18',
    src: Projects[17].heroImage,
    alt: Projects[17].title,
    height: 'h-[450px]',
  },
  {
    id: '9',
    src: Projects[8].heroImage,
    alt: Projects[8].title,
    height: 'h-[450px]',
  },
  {
    id: '10',
    src: Projects[9].heroImage,
    alt: Projects[9].title,
    height: 'h-[450px]',
  },
  {
    id: '11',
    src: Projects[10].heroImage,
    alt: Projects[10].title,
    height: 'h-[450px]',
  },
  {
    id: '16',
    src: Projects[15].heroImage,
    alt: Projects[15].title,
    height: 'h-[450px]',
  },
]

// --- Animation Variants ---
const getDirectionVariant = (direction: string): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
      y: direction === 'up' ? 60 : 0,
    },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    }),
  }
}

const hoverVariants: Variants = {
  initial: { y: 0, scale: 1, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
}

type itemPropt = { id: string;
src: string | undefined;
alt: string;
height: string;
}

// --- Component ---
function GalleryItem({
  item,
  index,
  direction,
}: {
  item: itemPropt
  index: number
  direction: 'left' | 'right' | 'up'
}) {
  return (
    <motion.div
      layout
      // Heavy, smooth layout transition (Matches the video's friction)
      transition={{
        layout: { duration: 0.8, type: 'spring', stiffness: 45, damping: 25 },
      }}
      custom={index}
      variants={getDirectionVariant(direction)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full"
    >
      <motion.figure
        layout
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={hoverVariants}
        className="rounded-xl overflow-hidden bg-gray-50 cursor-pointer"
        style={{ transform: 'translateZ(0)' }}
      >
        <Link href={`/projects/${item.id}`} className="block relative group">
          <div className={`relative w-full ${item.height} overflow-hidden`}>
            <Image
              src={item.src || ""}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            />
          </div>
          <figcaption className="p-4 bg-white border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900">{item.alt}</h3>
            <p className="text-xs text-gray-500 mt-1">View Case Study &rarr;</p>
          </figcaption>
        </Link>
      </motion.figure>
    </motion.div>
  )
}

export default function Gallery() {
  return (
    <section id="projects-gallery" className="mt-8 overflow-hidden">
      <motion.div
        layout
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 45,
          damping: 25,
        }}
        // Use gap-6 to match the tighter spacing in the video
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      >
        {/* LEFT COLUMN: Standard Alignment */}
        <div className="flex flex-col gap-6">
          {leftImages.map((img, i) => (
            <GalleryItem key={img.id} item={img} index={i} direction="left" />
          ))}
        </div>

        {/* CENTER COLUMN: The "Layout" Fix
            Added 'md:pt-24'. This pushes the center column down by roughly 100px.
            This creates the "broken grid" / masonry look where images don't align horizontally.
        */}
        <div className="flex flex-col gap-6 md:pt-24">
          {centerImages.map((img, i) => (
            <GalleryItem key={img.id} item={img} index={i} direction="up" />
          ))}
        </div>

        {/* RIGHT COLUMN: Standard Alignment (or subtle offset) 
            We keep this aligned with Left to create a nice frame.
        */}
        <div className="flex flex-col gap-6">
          {rightImages.map((img, i) => (
            <GalleryItem key={img.id} item={img} index={i} direction="right" />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
