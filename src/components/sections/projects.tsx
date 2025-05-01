/* eslint-disable sonarjs/no-all-duplicated-branches */
// components/sections/projects.tsx
'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Code,
    Cpu,
    Github,
    Layers,
    Palette,
    Sparkles,
    Zap
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

import Auth from '../../../public/projects/auth.png'
import buildHub from '../../../public/projects/buildHub.jpeg'
import codewave from '../../../public/projects/codewave1.png'
import keepIt from '../../../public/projects/keepIt.png'
import MrKing from '../../../public/projects/mrKing.jpeg'
import note from '../../../public/projects/note.png'
import projectOne from '../../../public/projects/projectOne.jpg'
import projectThree from '../../../public/projects/projectThree.png'
import SriChat from '../../../public/projects/srichat.png'
import StateLk from '../../../public/projects/statelk.png'

const projects = [
  {
    title: "CAFE-MR.KING - E-COMMERCE PLATFORM",
    description: "Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management.",
    image: MrKing,
    github: "https://github.com/SarangaSiriwardhana9/Cafe_MRKing",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
    category: "E-Commerce",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Codewave - Interactive Programming Assistant Tool",
    description: "Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace.",
    image: codewave,
    github: "https://github.com/SarangaSiriwardhana9/CodeWave",
    tags: ["Educational", "Virtual Lab", "Collaboration", "Programming"],
    category: "Education",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "KeepIt - Book Marketplace Mobile App",
    description: "This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books.",
    image: keepIt,
    github: "https://github.com/SarangaSiriwardhana9/KeepIt",
    tags: ["Mobile", "React Native", "Marketplace", "P2P"],
    category: "Mobile App",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "StateLk - Real Estate Platform",
    description: "StateLk is a comprehensive real estate platform designed for the Sri Lankan market. It offers a user-friendly interface for buying and selling homes and lands. Users can easily add property listings, view property details, and contact sellers. The platform aims to simplify the property search process and enhance the overall experience for both buyers and sellers in Sri Lanka.",
    image: StateLk,
    github: "https://github.com/SarangaSiriwardhana9/StateLK--MERN_Full_Stack_Estate_Marketplace",
    tags: ["MERN", "Real Estate", "Marketplace", "Sri Lanka"],
    category: "E-Commerce",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "SriChat - Next.js ChatGPT Clone",
    description: "SriChat is a clone of the ChatGPT application built using Next.js. It leverages Firebase for real-time chat functionality and integrates the OpenAI API for natural language processing. SriChat provides users with a seamless chat experience, enabling them to communicate effectively in real-time.",
    image: SriChat,
    github: "https://github.com/SarangaSiriwardhana9/SriChat-ChatGtp-clone",
    tags: ["Next.js", "OpenAI", "Firebase", "AI", "Chat"],
    category: "Communication",
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "BuildHub - Procurement Management System",
    description: "Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB",
    image: buildHub,
    github: "https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-",
    tags: ["React Native", "Node.js", "MongoDB", "Construction", "Enterprise"],
    category: "Mobile App",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Restaurant Management System",
    description: "Restaurant Management System Using MERN Stack, this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a proper UI.",
    image: projectOne,
    github: "https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using",
    tags: ["MERN", "Restaurant", "POS", "Management"],
    category: "E-Commerce",
    color: "from-red-500/20 to-pink-500/20"
  },
  {
    title: "Full-Stack-MERN-Auth-project",
    description: "MERN Auth is a lightweight full-stack web application with user authentication, protected routes, and image uploads. Built using MongoDB, Express.js, React, and Node.js, it offers a simple yet powerful solution for implementing authentication in your projects.",
    image: Auth,
    github: "https://github.com/SarangaSiriwardhana9/Full-Stack-MERN-Auth-project",
    tags: ["MERN", "Authentication", "JWT", "Security"],
    category: "Mini Projects",
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Student Management System",
    description: "Excited to share my capstone project as part of the Trainee Full-Stack Developer Programme offered by the UOM. This project focuses on developing an efficient information management system for a school. Leveraging cutting-edge technologies, I utilized Angular for the frontend, and for the backend.",
    image: projectThree,
    github: "https://github.com/SarangaSiriwardhana9/UOM-Capstone-Project---Trainee-Full-Stack-Developer-Program",
    tags: ["Angular", "School Management", "Education", "Enterprise"],
    category: "Education",
    color: "from-rose-500/20 to-orange-500/20"
  },
  {
    title: "Idea Vault - Notes Keeping Web Application",
    description: "Idea Vault is a note-keeping web application designed to help users organize their thoughts, ideas, and tasks. Users can create, update, and delete notes, as well as pin notes for easy access and search for notes. The application provides a user-friendly interface and is built with Vite, Node.js, Express, MongoDB, and Firebase for authentication and image storage.",
    image: note,
    github: "https://github.com/SarangaSiriwardhana9/IdeaVault-MERN_Full_Stack_Notes_APP?tab=readme-ov-file",
    tags: ["MERN", "Notes", "Firebase", "Vite"],
    category: "Mini Projects",
    color: "from-teal-500/20 to-green-500/20"
  }
]

const categories = ["All", "E-Commerce", "Mobile App", "Communication", "Education", "Mini Projects"]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="relative group h-full"
      >
        <Card className="overflow-hidden border-none shadow-xl bg-[#182124] h-full">
          <div className="flex flex-col h-full">
            <div className="relative overflow-hidden aspect-video w-full">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="px-3 py-1 rounded-full backdrop-blur-md bg-background/30 border border-white/20 text-xs text-white shadow-lg"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/70"
              >
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-gray-800/80 backdrop-blur-lg text-gray-200 hover:bg-gray-700/80 shadow-lg"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-6 w-6 text-gray-100" />
                </Button>
              </motion.div>
            </div>
            
            <div className="p-4 flex-1 flex flex-col">
              <Badge variant="secondary" className="w-fit mb-2 bg-primary/10 text-primary border-primary/20 text-xs">
                {project.category}
              </Badge>
              
              <h3 className="font-bold mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-3 flex-1">
                {project.tags.slice(3, 6).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="border-primary/20 text-primary/80 text-xs py-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mt-auto"
              >
                <Button
                  variant="link"
                  className="text-primary hover:underline p-0 text-sm"
                  onClick={() => window.open(project.github, '_blank')}   
                >
                  Explore Project
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    )
}

export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState("All")
    const sectionRef = useRef<HTMLElement>(null)
    
    const filteredProjects = activeCategory === "All"
      ? projects
      : projects.filter(project => project.category === activeCategory)
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    }

    // Group projects into sets of 3 for the resizable layout
    const groupedProjects = []
    for (let i = 0; i < filteredProjects.length; i += 3) {
      groupedProjects.push(filteredProjects.slice(i, i + 3))
    }
  
    return (
      <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]" />
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          />
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Featured Work</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Creative <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dive into my collection of innovative projects that showcase my passion for
              creating exceptional digital experiences.
            </p>
          </motion.div>
  
          {/* Category Filter with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => {
              const icons = {
                "All": <Layers className="h-4 w-4" />,
                "E-Commerce": <Zap className="h-4 w-4" />,
                "Mobile App": <Cpu className="h-4 w-4" />,
                "Communication": <Code className="h-4 w-4" />,
                "Education": <Palette className="h-4 w-4" />,
                "Mini Projects": <Sparkles className="h-4 w-4" />
              }
              
              return (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={`${
                      activeCategory === category 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                        : "border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                    } rounded-full px-6 py-2 flex items-center gap-2`}
                  >
                    {icons[category as keyof typeof icons]}
                    {category}
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
  
          {/* Projects with Resizable Layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {groupedProjects.map((group, groupIndex) => (
              <ResizablePanelGroup
                key={groupIndex}
                direction="horizontal"
                className="rounded-lg border border-primary/10"
              >
                {group.map((project, index) => {
                  const isMiddle = index === 1
                  const isEdge = index === 0 || index === 2
                  const isOddRow = groupIndex % 2 === 0
                  
                  // Determine size based on position and row
                  const defaultSize = (isOddRow && isMiddle) || (!isOddRow && isEdge) ? 40 : 30
                  
                  return (
                    <>
                      <ResizablePanel
                        key={project.title}
                        defaultSize={defaultSize}
                        minSize={20}
                        className="p-2"
                      >
                        <ProjectCard 
                          project={project} 
                          index={groupIndex * 3 + index} 
                        />
                      </ResizablePanel>
                      {index < group.length - 1 && (
                        <ResizableHandle withHandle className="bg-primary/10" />
                      )}
                    </>
                  )
                })}
              </ResizablePanelGroup>
            ))}
          </motion.div>
  
          {/* View All Projects Button */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    )
}

export default ProjectsSection