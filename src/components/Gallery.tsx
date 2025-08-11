import { motion } from "framer-motion";
import Link from "next/link";

const leftImages = [
  { id: "h1", src: "https://picsum.photos/800/600?random=1", alt: "Project H1" },
  { id: "h2", src: "https://picsum.photos/800/600?random=2", alt: "Project H2" },
  { id: "h3", src: "https://picsum.photos/800/600?random=3", alt: "Project H3" }
];

const centerImages = [
  { id: "v1", src: "https://picsum.photos/600/800?random=11", alt: "Project V1" },
  { id: "v2", src: "https://picsum.photos/600/800?random=12", alt: "Project V2" },
  // { id: "v3", src: "https://picsum.photos/600/800?random=13", alt: "Project V3" },
  // { id: "v4", src: "https://picsum.photos/600/800?random=14", alt: "Project V4" }
];

const rightImages = [
  { id: "h4", src: "https://picsum.photos/800/600?random=4", alt: "Project H4" },
  { id: "h5", src: "https://picsum.photos/800/600?random=5", alt: "Project H5" },
  { id: "h6", src: "https://picsum.photos/800/600?random=6", alt: "Project H6" }
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export default function Gallery() {
  return (
    <motion.section
      id="projects-gallery"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
    >
      {/* Desktop: 3 columns. On small screens it will stack into a single column */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - horizontal images only */}
        <div className="flex flex-col gap-6">
          {leftImages.map((img) => (
            <motion.figure
              key={img.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg overflow-hidden bg-gray-100"
            >
             <Link href={`/projects/${img.id}`}>
            <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
            <figcaption className="p-3 text-sm text-gray-700">{img.alt}</figcaption>
            </Link>
            </motion.figure>
          ))}
        </div>

        {/* Center Column - vertical images only */}
        <div className="flex flex-col gap-6">
          {centerImages.map((img) => (
            <motion.figure
              key={img.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg overflow-hidden bg-gray-100"
            >
             <Link href={`/projects/${img.id}`}>
            <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
            <figcaption className="p-3 text-sm text-gray-700">{img.alt}</figcaption>
            </Link>
            </motion.figure>
          ))}
        </div>

        {/* Right Column - horizontal images only */}
        <div className="flex flex-col gap-6">
          {rightImages.map((img) => (
            <motion.figure
              key={img.id}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-lg overflow-hidden bg-gray-100"
            >
          
              <Link href={`/projects/${img.id}`}>
            <img src={img.src} alt={img.alt} className="w-full h-auto block" loading="lazy" />
            <figcaption className="p-3 text-sm text-gray-700">{img.alt}</figcaption>
            </Link>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}