"use client"
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "/ WORK", href: "/" },
  { label: "/ STUDIO", href: "/studio" },
  { label: "/ ABOUT", href: "/about" },
  { label: "/ CONTACT", href: "/contact" },
  { label: "Blog", href: "/blog" }
];

export default function Header() {
  const [query, setQuery] = useState("");
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b border-gray-200"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              
                {/* Replace with Next Image or your logo */}
                <img src="/raed_logo.png" alt="logo" className="w-32 h-auto object-contain" />
             
            </Link>

            <nav aria-label="Primary" className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className="text-sm tracking-wide text-gray-700 hover:text-black transition-colors">
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <form action="/search" method="get" className="relative">
              <label htmlFor="site-search" className="sr-only">Search</label>
              <input
                id="site-search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="hidden sm:inline-block border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </form>
          </div>
        </div>
      </div>
    </motion.header>
  );
}