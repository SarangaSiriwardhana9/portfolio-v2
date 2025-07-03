"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project, projects } from "@/data/projects";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Code,
  Github,
  Eye,
  Tag,
  X,
  Zap,
  Globe,
  Smartphone,
  Database,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const floatingElements = [
  { icon: <Code className='h-4 w-4' />, delay: 0 },
  { icon: <Globe className='h-5 w-5' />, delay: 0.3 },
  { icon: <Smartphone className='h-4 w-4' />, delay: 0.6 },
  { icon: <Database className='h-4 w-4' />, delay: 0.9 },
  { icon: <Zap className='h-5 w-5' />, delay: 1.2 },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll-based transforms
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [100, 0, 0, -100]
  );

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const uniqueCategories = Array.from(
    new Set(projects.map((project) => project.category))
  );
  const categories = ["All", ...uniqueCategories];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.section
      ref={containerRef}
      id='projects'
      className='py-6 relative overflow-hidden'
      style={{ opacity, scale, y }}
    >
      {/* Animated Background */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        style={{ y: backgroundY }}
      >
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className='absolute'
            style={{
              left: `${15 + index * 17}%`,
              top: `${20 + (index % 2) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 360],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div className='p-3 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20 backdrop-blur-sm text-blue-400/40'>
              {element.icon}
            </div>
          </motion.div>
        ))}

        {/* Background Gradients */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </motion.div>

      <div className='container mx-auto px-3 max-w-6xl' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-10'
        >
          <motion.div
            className='inline-block mb-3'
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <span className='px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/30'>
              My Work
            </span>
          </motion.div>

          <motion.h2
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Featured{" "}
            <motion.span
              className='text-blue-400'
              animate={{
                textShadow: [
                  "0 0 0px #60a5fa",
                  "0 0 20px #60a5fa",
                  "0 0 0px #60a5fa",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A showcase of my technical expertise across various domains and
            technologies
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap gap-2 justify-center mb-6 sm:mb-8'
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                size='sm'
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 py-1 text-xs relative overflow-hidden ${
                  activeCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    : "hover:bg-blue-500/10 border-blue-500/30 text-blue-400 hover:text-blue-300 bg-transparent"
                }`}
              >
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0'
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10'>{category}</span>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.08 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className='h-full'
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 20,
              }}
            >
              <div className='relative h-full rounded-xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-500/10 backdrop-blur-sm group'>
                {/* Glow effect */}
                <motion.div
                  className='absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100'
                  transition={{ duration: 0.3 }}
                />

                {/* Animated particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className='absolute w-1 h-1 bg-blue-400/30 rounded-full'
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${10 + i * 20}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3 + index * 0.1,
                    }}
                  />
                ))}

                {/* Fixed Layout Structure */}
                <div className='relative z-10 h-full flex flex-col'>
                  {/* Project Image - Fixed Height */}
                  <div className='relative w-full h-[150px] flex-shrink-0'>
                    <motion.div
                      className='absolute inset-0'
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={
                          project.image ||
                          "/placeholder.svg?height=150&width=300"
                        }
                        alt={project.title}
                        fill
                        className='object-cover object-center'
                        style={{ objectPosition: "center" }}
                      />
                    </motion.div>

                    <motion.div
                      className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70'
                      animate={{
                        background: [
                          "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)",
                          "linear-gradient(to top, rgba(0,0,0,0.7), rgba(59,130,246,0.1), transparent)",
                          "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2), transparent)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.2,
                      }}
                    />

                    {/* Category Badge - Fixed Position */}
                    <div className='absolute top-2 sm:top-3 right-2 sm:right-3'>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant='secondary'
                          className='text-xs font-medium bg-black/80 backdrop-blur-sm text-blue-400 border-blue-500/30'
                        >
                          {project.category}
                        </Badge>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Area - Structured Layout */}
                  <div className='p-3 sm:p-4 flex flex-col flex-grow relative min-h-0'>
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100'
                      transition={{ duration: 0.3 }}
                    />

                    <div className='relative z-10 flex flex-col h-full'>
                      {/* Title - Fixed Height */}
                      <div className='h-[3.5rem] flex items-start mb-2'>
                        <motion.h3
                          className='font-bold text-sm sm:text-base text-white line-clamp-4 leading-tight'
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          {project.title}
                        </motion.h3>
                      </div>

                      {/* Description - Fixed Height */}
                      <div className='h-[3rem] mb-3'>
                        <motion.p
                          className='text-xs text-gray-400 line-clamp-3 leading-tight'
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>

                      {/* Tags - Fixed Height */}
                      <div className='h-[3.5rem] mb-3 flex-shrink-0'>
                        <motion.div
                          className='flex flex-wrap gap-1 h-full overflow-hidden'
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <motion.div
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.9 + tagIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant='outline'
                                className='text-xs bg-blue-500/10 backdrop-blur-sm border-blue-500/30 text-blue-300 h-fit'
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                          {project.tags.length > 3 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.2 }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge
                                variant='outline'
                                className='text-xs bg-blue-500/10 backdrop-blur-sm border-blue-500/30 text-blue-300 h-fit'
                              >
                                +{project.tags.length - 3}
                              </Badge>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      {/* Buttons - Fixed at Bottom */}
                      <div className='mt-auto pt-2'>
                        <motion.div
                          className='flex gap-2'
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex-1'
                          >
                            <Button
                              size='sm'
                              variant='secondary'
                              asChild
                              className='w-full text-xs py-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30 relative overflow-hidden'
                            >
                              <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <motion.div
                                  className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-0'
                                  whileHover={{ opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                />
                                <span className='relative z-10 flex items-center justify-center'>
                                  <Github className='mr-1 h-3 w-3' />
                                  Code
                                </span>
                              </a>
                            </Button>
                          </motion.div>

                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex-1'
                          >
                            <Button
                              size='sm'
                              className='w-full text-xs py-1 bg-blue-600 hover:bg-blue-700 relative overflow-hidden'
                              onClick={() => {
                                setSelectedProject(project);
                                setShowModal(true);
                              }}
                            >
                              <motion.div
                                className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className='relative z-10 flex items-center justify-center'>
                                <Eye className='mr-1 h-3 w-3' />
                                Details
                              </span>
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Animation */}
        <motion.div
          className='mt-10 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className='inline-flex items-center gap-2'
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className='w-2 h-2 bg-blue-400/40 rounded-full'
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm overflow-y-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className='relative w-full max-w-3xl max-h-[90vh] custom-scrollbar bg-black/90 rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden'
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10'
                animate={{
                  background: [
                    "linear-gradient(to bottom right, rgba(59,130,246,0.1), rgba(34,211,238,0.1))",
                    "linear-gradient(to bottom right, rgba(34,211,238,0.1), rgba(59,130,246,0.1))",
                    "linear-gradient(to bottom right, rgba(59,130,246,0.1), rgba(34,211,238,0.1))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.button
                onClick={() => setShowModal(false)}
                className='absolute top-3 right-3 z-10 p-2 rounded-full bg-black/80 backdrop-blur-sm shadow-md hover:bg-blue-500/20 transition-colors border border-blue-500/30'
                aria-label='Close modal'
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className='h-4 w-4 text-blue-400' />
              </motion.button>

              <div className='relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-xl'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-400/20'>
                  <div className='absolute inset-0 mix-blend-overlay opacity-40'>
                    <Image
                      src={
                        selectedProject.image ||
                        "/placeholder.svg?height=300&width=600"
                      }
                      alt={selectedProject.title}
                      fill
                      className='object-cover'
                      priority
                    />
                  </div>
                </div>

                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />

                <motion.div
                  className='absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 text-left'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge
                    variant='outline'
                    className='mb-2 bg-black/50 backdrop-blur-sm text-xs border-blue-500/30 text-blue-400'
                  >
                    {selectedProject.category}
                  </Badge>
                  <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-white'>
                    {selectedProject.title}
                  </h2>
                </motion.div>
              </div>

              <div className='p-3 sm:p-4 md:p-6 relative'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6'>
                  <motion.div
                    className='lg:col-span-2'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className='text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-white'>
                      About this project
                    </h3>
                    <p className='text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4'>
                      {selectedProject.description}
                    </p>

                    <div className='mt-3 sm:mt-4 mb-4 sm:mb-6'>
                      <motion.div
                        className='relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={
                            selectedProject.image ||
                            "/placeholder.svg?height=300&width=500"
                          }
                          alt={selectedProject.title}
                          fill
                          className='object-cover object-center'
                          style={{ objectPosition: "center" }}
                          priority
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className='space-y-4'
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div>
                      <div className='flex items-center gap-2 mb-2'>
                        <Tag className='h-4 w-4 text-blue-400' />
                        <h4 className='font-semibold text-xs sm:text-sm text-white'>
                          Technologies Used
                        </h4>
                      </div>
                      <div className='flex flex-wrap gap-1.5'>
                        {selectedProject.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + tagIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant='secondary'
                              className='text-xs bg-blue-500/10 text-blue-300 border-blue-500/30'
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center gap-2 mb-2'>
                        <ArrowUpRight className='h-4 w-4 text-blue-400' />
                        <h4 className='font-semibold text-xs sm:text-sm text-white'>
                          Project Links
                        </h4>
                      </div>
                      <div className='space-y-2'>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            className='w-full text-xs py-2 bg-blue-600 hover:bg-blue-700 relative overflow-hidden'
                          >
                            <a
                              href={selectedProject.github}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <motion.div
                                className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              />
                              <span className='relative z-10 flex items-center justify-center'>
                                <Github className='mr-1.5 h-3 w-3' />
                                View Source Code
                              </span>
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgb(59 130 246 / 0.3) transparent;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin: 0.5rem;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgb(59 130 246 / 0.3);
          border-radius: 100px;
          border: 2px solid transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgb(59 130 246 / 0.5);
        }
      `}</style>
    </motion.section>
  );
}
