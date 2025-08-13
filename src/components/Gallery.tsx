import { motion } from "framer-motion";
import Link from "next/link";
import { Projects } from "@/seed";
import Image from "next/image"


const leftImages = [
  { id: "1", src: Projects[0].heroImage, alt: Projects[0].title },
  { id: "2", src:Projects[1].heroImage, alt: Projects[1].title  },
  { id: "3", src:Projects[2].heroImage, alt: Projects[2].title  },
  
];

const centerImages = [
  { id: "4", src:Projects[3].heroImage, alt: Projects[3].title },
  { id: "5", src:Projects[4].heroImage, alt: Projects[4].title },
  { id: "6", src:Projects[5].heroImage, alt: Projects[5].title },
  { id: "7", src:Projects[6].heroImage, alt: Projects[6].title },
  { id: "8", src:Projects[7].heroImage, alt: Projects[7].title },
  { id: "12", src:Projects[11].heroImage, alt: Projects[11].title },
];

const rightImages = [
  { id: "9", src:Projects[8].heroImage, alt: Projects[8].title },
  { id: "10", src:Projects[9].heroImage, alt: Projects[9].title },
  { id: "11", src:Projects[10].heroImage, alt: Projects[10].title },
  
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
            <Image src={img.src as string} alt={img.alt} className="w-full h-110 object-cover" loading="lazy" width={300} height={300}/>
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
            <Image src={img.src as string} alt={img.alt} className="w-full h-56 object-cover" loading="lazy" width={300} height={300}/>
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
            <Image src={img.src as string} alt={img.alt} className="w-full h-110 object-cover" loading="lazy" width={300} height={300}/>
            <figcaption className="p-3 text-sm text-gray-700">{img.alt}</figcaption>
            </Link>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}