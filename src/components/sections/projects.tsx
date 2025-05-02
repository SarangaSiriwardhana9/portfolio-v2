 
'use client'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project, projects } from '@/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink, Eye, Github, Tag, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const uniqueCategories = Array.from(new Set(projects.map(project => project.category)))
  const categories = ['All', ...uniqueCategories]
  const [activeCategory, setActiveCategory] = useState('All')
  // Fix: Properly type selectedProject to be Project or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModal, setShowModal] = useState(false)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background elements - similar to skills section */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(250, 204, 21, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across various domains and technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 ${
                activeCategory === category 
                  ? 'shadow-md shadow-primary/20' 
                  : 'hover:shadow-sm hover:shadow-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              {/* Card */}
              <div className={`relative h-full rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br ${project.color} backdrop-blur-sm`}>
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${project.color.replace('/20', '/30')} blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Card content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="font-medium bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1.5 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={() => {
                          setSelectedProject(project)
                          setShowModal(true)
                        }}
                      >
                        <Eye className="mr-1.5 h-4 w-4" />
                        Details
                      </Button>
                    </div>
                  </div>

                  {/* Hover indicator line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Project Details Modal with Custom Scrollbar */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className="relative w-full max-w-4xl max-h-[90vh] custom-scrollbar bg-background rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Project header with gradient */}
              <div 
                className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color.replace('/20', '')}`}>
                  <div className="absolute inset-0 mix-blend-overlay opacity-60">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                
                {/* Header content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                  <Badge variant="outline" className="mb-2 bg-background/50 backdrop-blur-sm">
                    {selectedProject.category}
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content area */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold mb-4">About this project</h3>
                    <p className="text-muted-foreground mb-6">
                      {selectedProject.description}
                    </p>
                    
                    {/* Project image gallery */}
                    <div className="mt-6 mb-8">
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-muted rounded-xl p-6 space-y-6">
                      {/* Technologies */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-background/50">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Project size */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Project Size</h4>
                        </div>
                        <Badge variant="outline" className="capitalize">
                          {selectedProject.size}
                        </Badge>
                      </div>
                      
                      {/* Actions */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <ArrowUpRight className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Project Links</h4>
                        </div>
                        <div className="space-y-3">
                          <Button asChild className="w-full">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Source Code
                            </a>
                          </Button>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add this style block for the custom scrollbar or add to globals.css */}
      <style jsx global>{`
        /* Custom Scrollbar Styling */
        .custom-scrollbar {
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--primary) / 0.3) transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin: 0.5rem;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: hsl(var(--primary) / 0.3);
          border-radius: 100px;
          border: 2px solid transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: hsl(var(--primary) / 0.5);
        }

        /* For Firefox */
        @supports (scrollbar-color: auto) {
          .custom-scrollbar {
            scrollbar-color: hsl(var(--primary) / 0.3) transparent;
            scrollbar-width: thin;
          }
        }
      `}</style>
    </section>
  )
}