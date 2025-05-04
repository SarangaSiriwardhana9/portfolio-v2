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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModal, setShowModal] = useState(false)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="projects" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[2000px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
<h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
  Featured{' '}
  <span className="text-primary sm:bg-clip-text sm:text-transparent sm:bg-gradient-to-r sm:from-primary sm:via-accent sm:to-primary">
    Projects
  </span>
</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise across various domains and technologies
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm ${
                activeCategory === category 
                  ? 'shadow-md shadow-primary/20' 
                  : 'hover:shadow-sm hover:shadow-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
              <div className={`relative h-full rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br ${project.color} backdrop-blur-sm`}>
                <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${project.color.replace('/20', '/30')} blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70" />
                    
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <Badge variant="secondary" className="text-xs sm:text-sm font-medium bg-background/80 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
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
                    
                    <div className="flex gap-2 sm:gap-3">
                      <Button size="sm" variant="secondary" asChild className="flex-1 text-xs sm:text-sm py-1 sm:py-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 sm:mr-1.5 h-3 sm:h-4 w-3 sm:w-4" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 text-xs sm:text-sm py-1 sm:py-2"
                        onClick={() => {
                          setSelectedProject(project)
                          setShowModal(true)
                        }}
                      >
                        <Eye className="mr-1 sm:mr-1.5 h-3 sm:h-4 w-3 sm:w-4" />
                        Details
                      </Button>
                    </div>
                  </div>

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
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl">
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-left">
                  <Badge variant="outline" className="mb-2 bg-background/50 backdrop-blur-sm text-xs sm:text-sm">
                    {selectedProject.category}
                  </Badge>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About this project</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
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
                  
                  <div className="lg:col-span-1">
                    <div className="bg-muted rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Code className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                          <h4 className="font-semibold text-sm sm:text-base">Technologies</h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {selectedProject.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-background/50 text-xs sm:text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                          <h4 className="font-semibold text-sm sm:text-base">Project Size</h4>
                        </div>
                        <Badge variant="outline" className="capitalize text-xs sm:text-sm">
                          {selectedProject.size}
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <ArrowUpRight className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                          <h4 className="font-semibold text-sm sm:text-base">Project Links</h4>
                        </div>
                        <div className="space-y-3">
                          <Button asChild className="w-full text-xs sm:text-sm py-2 sm:py-5">
                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-1.5 sm:mr-2 h-3 sm:h-4 w-3 sm:w-4" />
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

      <style jsx global>{`
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