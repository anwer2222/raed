"use client"

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from 'next/navigation'
import {Projects} from "@/seed"
import Image from "next/image"


const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectPage= () => {
  const {slug}=useParams<{ slug: string }>()
  const project = Projects[Number(slug)-1]//projectsData["concordia-design-event"]
  
  return (
    <>
      <Head>
        <title>{project.title} — Raed Abbad</title>
        <meta name="description" content={`${project.title} — ${project.subtitle}`} />
      </Head>

      <main id="project-content" className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link href="/">
                    <p className="hover:underline">Home</p>
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/">
                    <p className="hover:underline">Work</p>
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-medium">{project.title}</li>
              </ol>
            </nav>

            <Link href="/" className="hidden md:block">
              <p className="text-sm px-3 py-2 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50">
                Back to work
              </p>
            </Link>
          </div>

          <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
            aria-labelledby="project-title"
          >
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h1 id="project-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                {project.title}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                {project.subtitle} {project.year ? `— ${project.year}` : ""} {project.location ? `· ${project.location}` : ""}
              </p>

              <motion.img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto object-cover rounded-lg shadow-sm"
                initial={{ scale: 1.02, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <motion.p variants={itemVariants} className="mt-6 text-gray-700 leading-relaxed">
                {project.intro}
              </motion.p>
            </motion.div>

            <aside className="lg:col-span-1">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-5 border border-gray-100"
              >
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Project Details</h3>

                <dl className="space-y-4 text-sm text-gray-700">
                  <div>
                    <dt className="font-medium text-gray-900">Target Audience</dt>
                    <dd className="mt-1 space-y-1">
                      <ul className="list-disc ml-5">
                        {project.details["Target Audience"].map((aud, idx) => (
                          <li key={idx}>{aud}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-900">Scope of works</dt>
                    <dd className="mt-1 space-y-1">
                      <ul className="list-disc ml-5">
                        {project.details["Scope of works"].map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-6 text-sm text-gray-600"
              >
                <p className="font-medium text-gray-900">Share</p>
                <div className="mt-2 flex gap-3">
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      project.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-full text-xs hover:bg-gray-100"
                  >
                    Twitter
                  </Link>
                  <Link
                    href={`mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(
                      project.intro
                    )}`}
                    className="inline-flex items-center px-3 py-2 border border-gray-200 rounded-full text-xs hover:bg-gray-100"
                  >
                    Email
                  </Link>
                </div>
              </motion.div>
            </aside>
          </motion.header>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Example project image gallery / extras */}
            {project.imgs.map((img, i) => (
              <motion.figure
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 rounded-lg overflow-hidden bg-gray-100"
              >
                <Image 
                  src={img}
                  alt={`${project.title} image ${i + 1}`}
                  className="w-full h-56 object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-3 text-sm text-gray-700">Gallery image {i + 1}</div>
              </motion.figure>
            ))}
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;