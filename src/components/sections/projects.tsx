// components/sections/projects.tsx
'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react'
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
import realtalk from '../../../public/projects/realtalk.png'
import SriChat from '../../../public/projects/srichat.png'
import StateLk from '../../../public/projects/statelk.png'

const projects = [
  {
    title: "CAFE-MR.KING - E-COMMERCE PLATFORM",
    description: "Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management.",
    image: MrKing,
    github: "https://github.com/SarangaSiriwardhana9/Cafe_MRKing",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT"],
    category: "Full Stack"
  },
  {
    title: "Codewave - Interactive Programming Assistant Tool",
    description: "Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace.",
    image: codewave,
    github: "https://github.com/SarangaSiriwardhana9/CodeWave",
    tags: ["Educational", "Virtual Lab", "Collaboration", "Programming"],
    category: "Education"
  },
  {
    title: "StateLk - Real Estate Platform",
    description: "StateLk is a comprehensive real estate platform designed for the Sri Lankan market. It offers a user-friendly interface for buying and selling homes and lands. Users can easily add property listings, view property details, and contact sellers. The platform aims to simplify the property search process and enhance the overall experience for both buyers and sellers in Sri Lanka.",
    image: StateLk,
    github: "https://github.com/SarangaSiriwardhana9/StateLK--MERN_Full_Stack_Estate_Marketplace",
    tags: ["MERN", "Real Estate", "Marketplace", "Sri Lanka"],
    category: "E-Commerce"
  },
  {
    title: "KeepIt - Book Marketplace Mobile App",
    description: "This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books.",
    image: keepIt,
    github: "https://github.com/SarangaSiriwardhana9/KeepIt",
    tags: ["Mobile", "React Native", "Marketplace", "P2P"],
    category: "Mobile App"
  },
  {
    title: "Real Talk - Real Time Chat App",
    description: "Real Talk is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to sign up, sign in, and chat with other users in real time. The app utilizes Vite as a build tool, Socket.IO for real-time communication, Daisy UI for styling, JWT for authentication, and Tailwind CSS for UI components.",
    image: realtalk,
    github: "https://github.com/SarangaSiriwardhana9/RealTalk-Real-Time-Chat-App",
    tags: ["MERN", "Socket.io", "Real-time", "Chat", "Vite"],
    category: "Communication"
  },
  {
    title: "Idea Vault - Notes Keeping Web Application",
    description: "Idea Vault is a note-keeping web application designed to help users organize their thoughts, ideas, and tasks. Users can create, update, and delete notes, as well as pin notes for easy access and search for notes. The application provides a user-friendly interface and is built with Vite, Node.js, Express, MongoDB, and Firebase for authentication and image storage.",
    image: note,
    github: "https://github.com/SarangaSiriwardhana9/IdeaVault-MERN_Full_Stack_Notes_APP?tab=readme-ov-file",
    tags: ["MERN", "Notes", "Firebase", "Vite"],
    category: "Productivity"
  },
  {
    title: "SriChat - Next.js ChatGPT Clone",
    description: "SriChat is a clone of the ChatGPT application built using Next.js. It leverages Firebase for real-time chat functionality and integrates the OpenAI API for natural language processing. SriChat provides users with a seamless chat experience, enabling them to communicate effectively in real-time.",
    image: SriChat,
    github: "https://github.com/SarangaSiriwardhana9/SriChat-ChatGtp-clone",
    tags: ["Next.js", "OpenAI", "Firebase", "AI", "Chat"],
    category: "AI"
  },
  {
    title: "BuildHub - Procurement Management System",
    description: "Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB",
    image: buildHub,
    github: "https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-",
    tags: ["React Native", "Node.js", "MongoDB", "Construction", "Enterprise"],
    category: "Enterprise"
  },
  {
    title: "Restaurant Management System",
    description: "Restaurant Management System Using MERN Stack, this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a proper UI.",
    image: projectOne,
    github: "https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using",
    tags: ["MERN", "Restaurant", "POS", "Management"],
    category: "Enterprise"
  },
  {
    title: "Full-Stack-MERN-Auth-project",
    description: "MERN Auth is a lightweight full-stack web application with user authentication, protected routes, and image uploads. Built using MongoDB, Express.js, React, and Node.js, it offers a simple yet powerful solution for implementing authentication in your projects.",
    image: Auth,
    github: "https://github.com/SarangaSiriwardhana9/Full-Stack-MERN-Auth-project",
    tags: ["MERN", "Authentication", "JWT", "Security"],
    category: "Security"
  },
  {
    title: "Student Management System",
    description: "Excited to share my capstone project as part of the Trainee Full-Stack Developer Programme offered by the UOM. This project focuses on developing an efficient information management system for a school. Leveraging cutting-edge technologies, I utilized Angular for the frontend, and for the backend.",
    image: projectThree,
    github: "https://github.com/SarangaSiriwardhana9/UOM-Capstone-Project---Trainee-Full-Stack-Developer-Program",
    tags: ["Angular", "School Management", "Education", "Enterprise"],
    category: "Education"
  }
]

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">My Portfolio Projects</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through various development projects that demonstrate my skills and passion for creating impactful digital solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary/20 hover:border-primary/40"
              } rounded-full`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-background/80 backdrop-blur-sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full bg-background/80 backdrop-blur-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="border-primary/20 text-primary/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* View Project Link */}
                    <Button
                        variant="link"
                        className="text-primary hover:underline"
                        onClick={() => window.open(project.github, '_blank')}   
                    >
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
                </Card>
            </motion.div>
            ))}
        </motion.div>
        </div>
        </section>
    )
}
export default ProjectsSection