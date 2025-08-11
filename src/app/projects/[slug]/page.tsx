"use client"

import Head from "next/head";
import Link from "next/link";
// import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";
import { NextPage } from "next";

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  location?: string;
  year?: string;
  heroImage?: string;
  intro: string;
  details: {
    "Target Audience": string[];
    "Scope of works": string[];
  };
};

type Props = {
  project: Project;
};

const projectsData: Record<string, Project> = {
  "concordia-design-event": {
    slug: "concordia-design-event",
    title: "Concordia Design Event - Canada",
    subtitle: "Identity Design",
    location: "Canada",
    year: "2016",
    heroImage: "https://picsum.photos/1200/700?random=11",
    intro:
      "The objective of the event seeks to bring together the thinkers and doers that are breaking ground and the shaping of new standards in media and design.",
    details: {
      "Target Audience": ["Students of Art and design.", "Professional Designers."],
      "Scope of works": [
        "Event identity elements.",
        "Event poster and banner.",
        "Event invitation card & certificates.",
      ],
    },
  },

  // You can add more project objects here keyed by slug
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const slugs = Object.keys(projectsData);
//   const paths = slugs.map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false, // change to 'blocking' if you want dynamic behavior later
//   };
// };

// export const getStaticProps: GetStaticProps<Props> = async (context) => {
//   const slug = context.params?.slug as string;
//   const project = projectsData[slug];

//   if (!project) {
//     return { notFound: true };
//   }

//   return {
//     props: { project },
//   };
// };

const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectPage: NextPage<Props> = () => {
  const project = projectsData["concordia-design-event"]
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
                  <Link href="/#projects">
                    <p className="hover:underline">Work</p>
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-medium">{project.title}</li>
              </ol>
            </nav>

            <Link href="/#projects">
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
                className="w-full h-72 md:h-96 object-cover rounded-lg shadow-sm"
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
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.figure
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="col-span-1 rounded-lg overflow-hidden bg-gray-100"
              >
                <img
                  src={`https://picsum.photos/900/600?random=${20 + i}`}
                  alt={`${project.title} image ${i + 1}`}
                  className="w-full h-56 object-cover"
                />
                <figcaption className="p-3 text-sm text-gray-700">Gallery image {i + 1}</figcaption>
              </motion.figure>
            ))}
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;