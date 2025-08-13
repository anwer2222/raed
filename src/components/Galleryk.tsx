"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const y=[3,4,5]
const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/${y.includes(i)?'800/600':'600/800'}?random=${i + 1}`,
  alt: `Project ${i + 1}`
}));

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Gallery() {
 
//  function isOdd(n) {
//     return Math.abs(n % 2) == 1;
//  }
   console.log("im",images)
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          
          <motion.figure
            key={img.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg overflow-hidden bg-gray-100"
          >
            <Link href={`/projects/${img.id}`}>
            <Image src={img.src} alt={img.alt} className="w-full h-56 object-cover" loading="lazy" width={300} height={300} />
            <figcaption className="p-3 text-sm text-gray-700">{img.alt}</figcaption>
            </Link>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}