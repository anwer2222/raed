"use client"
import { motion } from "framer-motion";
import Image from 'next/image'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-15 border-t border-gray-200 flex justify-center items-center flex-col"
      role="contentinfo"
    >
        {/* <image src="/read_logo.png" alt="" height={300} width={300}/> */}
        <img src="/raed_logo_w.png" alt="logo" className="w-32 h-auto object-contain" />
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <nav aria-label="Footer" className="mb-3">
          <ul className="flex justify-center gap-6 text-sm text-gray-600">
            <li>/ WORK</li>
            <li>/ STUDIO</li>
            <li>/ ABOUT</li>
            <li>/ CONTACT</li>
            <li>Blog</li>
          </ul>
        </nav>
        <p className="text-sm text-gray-500">© 2025 All rights reserved RaedAbbad</p>
      </div>
    </motion.footer>
  );
}