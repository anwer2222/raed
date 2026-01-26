'use client'

import Gallery from '../components/Gallery'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

// 1. Entrance Animations (Fade in Up)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
}

// 2. New "Hover Lift" Variant for the Image
const cardHoverVariants: Variants = {
  initial: { y: 0, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  hover: {
    y: -15, // Moves UP by 15px
    scale: 1.02, // Slight zoom
    boxShadow:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // Deep shadow
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT COLUMN: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center z-10"
            >
              <motion.p
                variants={itemVariants}
                className="text-sm font-medium text-gray-500 mb-4 tracking-wide"
              >
                / FEATURED WORK
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]"
              >
                Creative Work <br /> & Studio
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                A portfolio showing selected projects — specialized design for
                Formula E Racing & Automotive concepts.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link href="/projects/14">
                  <motion.div
                    // Button Lift Effect
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer inline-flex px-8 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium transition-colors hover:bg-black shadow-lg"
                  >
                    View Projects
                  </motion.div>
                </Link>

                {/* <Link href="/about">
                  <motion.div
                    // Button Lift Effect
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      backgroundColor: '#f3f4f6',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer inline-flex px-8 py-3.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm"
                  >
                    About
                  </motion.div>
                </Link> */}
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Interactive Image Card */}
            {/* "If hovered, raise the selected one" */}
            <motion.div
              initial="initial"
              whileHover="hover" // Triggers the lift when THIS element is hovered
              animate="initial"
              className="relative "
            >
              <motion.div
                variants={cardHoverVariants}
                className="relative rounded-2xl overflow-hidden bg-white"
              >
                <motion.img
                  src="/p1401.png"
                  alt="Hero Design Project"
                  // Clean Fade-in for the image specifically
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-full h-[550px] object-cover"
                />

                {/* Optional: Add a glossy sheen overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 pointer-events-none"
                  variants={{ hover: { opacity: 0.1 } }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="projects" className="bg-gray-50 py-24">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
            <h2 className="text-3xl font-bold text-gray-900">Selected Works</h2>
            <span className="text-gray-400 text-sm">2023 — 2024</span>
          </div>
          <Gallery />
        </motion.div>
      </section>
    </main>
  )
}
