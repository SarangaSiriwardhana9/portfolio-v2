"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Project, projects } from "@/data/projects";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Eye, Tag, X } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    <section id='projects' className='py-16 md:py-24 relative overflow-hidden'>
      {/* Simple Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none' />

      <div className='container mx-auto px-4 sm:px-6 max-w-7xl' ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <motion.div
            className='inline-block mb-4'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className='px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/30'>
              My Work
            </span>
          </motion.div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white'>
            Featured <span className='text-blue-400'>Projects</span>
          </h2>

          <p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
            A showcase of my technical expertise across various domains and
            technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap gap-2 justify-center mb-8'
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                size='sm'
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                    : "hover:bg-blue-500/10 border-blue-500/30 text-blue-400 hover:text-blue-300 bg-transparent"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='h-full'
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className='relative h-full rounded-xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-blue-500/10 backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300'>
                {/* Project Structure */}
                <div className='relative z-10 h-full flex flex-col'>
                  {/* Project Image - Fixed Height */}
                  <div className='relative w-full h-[180px] flex-shrink-0'>
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=180&width=300"
                      }
                      alt={project.title}
                      fill
                      className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

                    {/* Category Badge */}
                    <div className='absolute top-3 right-3'>
                      <Badge
                        variant='secondary'
                        className='text-xs font-medium bg-black/80 backdrop-blur-sm text-blue-400 border-blue-500/30'
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className='p-4 sm:p-5 flex flex-col flex-grow'>
                    {/* Title */}
                    <div className='mb-3'>
                      <h3 className='font-bold text-base sm:text-lg text-white line-clamp-2 leading-tight'>
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className='mb-4 flex-grow'>
                      <p className='text-sm text-gray-400 line-clamp-3 leading-relaxed'>
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-1.5'>
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant='outline'
                            className='text-xs bg-blue-500/10 backdrop-blur-sm border-blue-500/30 text-blue-300'
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge
                            variant='outline'
                            className='text-xs bg-blue-500/10 backdrop-blur-sm border-blue-500/30 text-blue-300'
                          >
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Buttons - Fixed at Bottom */}
                    <div className='flex gap-2 mt-auto'>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='flex-1'
                      >
                        <Button
                          size='sm'
                          variant='secondary'
                          asChild
                          className='w-full text-xs bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30'
                        >
                          <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='mr-1.5 h-3 w-3' />
                            Code
                          </a>
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='flex-1'
                      >
                        <Button
                          size='sm'
                          className='w-full text-xs bg-blue-600 hover:bg-blue-700'
                          onClick={() => {
                            setSelectedProject(project);
                            setShowModal(true);
                          }}
                        >
                          <Eye className='mr-1.5 h-3 w-3' />
                          Details
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className='flex justify-center items-center gap-2'>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='w-2 h-2 bg-blue-400/50 rounded-full'
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simplified Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className='relative w-full max-w-4xl max-h-[90vh] bg-black/95 rounded-xl shadow-2xl border border-blue-500/20 overflow-hidden'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setShowModal(false)}
                className='absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 backdrop-blur-sm hover:bg-blue-500/20 transition-colors border border-blue-500/30'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className='h-4 w-4 text-blue-400' />
              </motion.button>

              {/* Header Image */}
              <div className='relative h-48 md:h-64 overflow-hidden'>
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
                <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent' />

                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <Badge
                    variant='outline'
                    className='mb-3 bg-black/50 backdrop-blur-sm text-sm border-blue-500/30 text-blue-400'
                  >
                    {selectedProject.category}
                  </Badge>
                  <h2 className='text-2xl md:text-3xl font-bold text-white'>
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content - Only this has scrollbar */}
              <div className='p-6 max-h-[calc(90vh-250px)] overflow-y-auto custom-scrollbar'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                  {/* Description */}
                  <div className='lg:col-span-2'>
                    <h3 className='text-lg font-semibold mb-3 text-white'>
                      About this project
                    </h3>
                    <p className='text-gray-400 mb-6 leading-relaxed'>
                      {selectedProject.description}
                    </p>

                    {/* Project Image */}
                    <div className='relative aspect-video rounded-lg overflow-hidden'>
                      <Image
                        src={
                          selectedProject.image ||
                          "/placeholder.svg?height=300&width=500"
                        }
                        alt={selectedProject.title}
                        fill
                        className='object-cover'
                        priority
                      />
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className='space-y-6'>
                    {/* Technologies */}
                    <div>
                      <div className='flex items-center gap-2 mb-3'>
                        <Tag className='h-4 w-4 text-blue-400' />
                        <h4 className='font-semibold text-white'>
                          Technologies Used
                        </h4>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant='secondary'
                            className='text-sm bg-blue-500/10 text-blue-300 border-blue-500/30'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div>
                      <div className='flex items-center gap-2 mb-3'>
                        <ArrowUpRight className='h-4 w-4 text-blue-400' />
                        <h4 className='font-semibold text-white'>
                          Project Links
                        </h4>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          asChild
                          className='w-full bg-blue-600 hover:bg-blue-700'
                        >
                          <a
                            href={selectedProject.github}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='mr-2 h-4 w-4' />
                            View Source Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgb(59 130 246 / 0.6) rgb(30 41 59 / 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgb(30 41 59 / 0.3);
          border-radius: 10px;
          margin: 0.5rem;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgb(59 130 246 / 0.8),
            rgb(34 211 238 / 0.8)
          );
          border-radius: 10px;
          border: 1px solid rgb(59 130 246 / 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgb(59 130 246),
            rgb(34 211 238)
          );
        }
      `}</style>
    </section>
  );
}
