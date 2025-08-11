"use client"
import Link from "next/link";
import type { NextPage } from "next";
import { motion } from "framer-motion";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const About: NextPage = () => {
  return (
    <>

      <main id="about-content" className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
          >
            <motion.header variants={item} className="lg:col-span-2">
              <p className="text-sm text-gray-500 mb-2">ABOUT</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Hello — I'm RAED
              </h1>

              <div className="mt-6 space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Design director with over a decade of experience, I've woven a tapestry of
                  creativity and expertise.
                </p>

                <p>
                  My academic foundation in Advertising & Graphic Design, Graphic Design
                  Applications, and Fine Art fuels a profound understanding of the synergy
                  between aesthetics and strategic communication.
                </p>

                <p>
                  From Saudi Arabia to Malaysia and Canada, my design journey spans diverse
                  cultures and contexts, contributing to globally recognized brands like
                  Petronas, Saudi Airlines, and Lexus.
                </p>

                <p>
                  Collaborating with industry leaders in renowned design studios, I've
                  transformed countless concepts into compelling visuals, embracing the fusion of
                  design principles, artistic intuition, and technological finesse.
                </p>

                <p>
                  My portfolio is more than visual — it's a narrative of passion, dedication,
                  and an unwavering commitment to turning ordinary concepts into extraordinary
                  visual stories.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#projects" className="inline-block px-5 py-3 bg-black text-white rounded-full text-sm">
                    View Work
                 
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-5 py-3 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </motion.header>

            <aside className="lg:col-span-1">
              <motion.div variants={item} className="sticky top-28 space-y-6">
              <img src="/R.png" alt="read" className="w-auto h-auto object-contain" />
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Role</h3>
                  <p className="text-sm text-gray-700">Design Director</p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Experience</h3>
                  <p className="text-sm text-gray-700">10+ years — International studios & brands</p>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">Selected Clients</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Petronas</li>
                    <li>Saudi Airlines</li>
                    <li>Lexus</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="text-xs text-gray-500">
                    Based across Saudi Arabia, Malaysia & Canada
                  </p>
                </div>
              </motion.div>
            </aside>
          </motion.div>

          <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.h2 variants={item} className="text-lg font-semibold text-gray-900 mb-4">
              Approach
            </motion.h2>

            <motion.p variants={item} className="text-gray-700 leading-relaxed">
              I believe in work that balances strategy, craft and timeless visual language.
              Whether defining a brand identity, directing a campaign, or designing an event
              system, I focus on clarity of idea and attention to detail — the work should
              speak clearly at every scale and across every touchpoint.
            </motion.p>
          </motion.section>
        </div>
      </main>

    </>
  );
};

export default About;