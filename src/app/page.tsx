"use client"
// import Head from "next/head";

import Gallery from "../components/Gallery";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  {/* <Head>
    <title>Raed Abbad — Portfolio</title>
    <meta name="description" content="Portfolio site" />
    </Head>
    
    {/* Skip to content link for accessibility */}
    // <Link href="#main-content" className="skip-to-content">Wixside page</Link>
    
    
    return (

      <main id="main-content" className="min-h-screen">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <p className="text-sm text-gray-500 mb-2">/ Featured Work</p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
                  Creative Work & Studio
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  A portfolio showing selected projects - Luxury Accessories Photography
                </p>
                <div className="flex gap-4">
                  <Link className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm" href="/projects/13">
                    View Projects
                  </Link>
                  <Link className="inline-block px-6 py-3 border border-gray-200 rounded-full text-sm" href="/about">
                    About
                  </Link>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <motion.img
                  src="/p1301.png"
                  alt="Hero"
                  className="w-full h-80 object-cover rounded-lg"
                  initial={{ scale: 1.02 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="projects-heading" className="text-2xl font-semibold text-gray-800 mb-6">Work</h2>
            <Gallery />
          </div>
        </section>
      </main>
  );
}