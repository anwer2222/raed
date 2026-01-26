"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-15 border-t border-gray-200 flex justify-center items-center flex-col bg-black"
      role="contentinfo"
    >

        <Image src="/dm_logo_w.png" alt="logo" className="w-32 h-auto object-contain" width={300} height={300}/>
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <nav aria-label="Footer" className="mb-3">
          <ul className="flex justify-center gap-6 text-sm text-gray-600">
            <Link href="\"><li>/ WORK</li></Link>
            {/* <Link href="\studio"><li>/ STUDIO</li></Link> */}
            {/* <Link href="\about"><li>/ ABOUT</li></Link> */}
            <Link href="\contact"><li>/ CONTACT</li></Link>
          </ul>
        </nav>
        <p className="text-sm text-gray-500">© 2025 All rights reserved RaedAbbad</p>
      </div>
    </motion.footer>
  );
}