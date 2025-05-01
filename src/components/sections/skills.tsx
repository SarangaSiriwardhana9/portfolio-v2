// components/sections/skills.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { Brain, Code2, Database, Globe, Layout, Server, Smartphone, Zap } from 'lucide-react'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="h-6 w-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vue.js'],
    gradient: 'from-blue-500/20 via-blue-400/20 to-cyan-500/20',
    accentColor: 'blue',
    progress: 90
  },
  {
    title: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    skills: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'Microservices'],
    gradient: 'from-green-500/20 via-green-400/20 to-emerald-500/20',
    accentColor: 'green',
    progress: 85
  },
  {
    title: 'Database & Storage',
    icon: <Database className="h-6 w-6" />,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Supabase'],
    gradient: 'from-yellow-500/20 via-yellow-400/20 to-orange-500/20',
    accentColor: 'yellow',
    progress: 80
  },
  {
    title: 'DevOps & Tools',
    icon: <Code2 className="h-6 w-6" />,
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux'],
    gradient: 'from-purple-500/20 via-purple-400/20 to-pink-500/20',
    accentColor: 'purple',
    progress: 75
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    skills: ['React Native', 'Flutter', 'Kotlin', 'Expo'],
    gradient: 'from-red-500/20 via-red-400/20 to-rose-500/20',
    accentColor: 'red',
    progress: 80
  },
  {
    title: 'Cloud & Services',
    icon: <Globe className="h-6 w-6" />,
    skills: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Firebase', 'Cloudflare'],
    gradient: 'from-indigo-500/20 via-indigo-400/20 to-violet-500/20',
    accentColor: 'indigo',
    progress: 70
  },
  {
    title: 'Machine Learning',
    icon: <Brain className="h-6 w-6" />,
    skills: ['TensorFlow', 'Python', 'PyTorch', 'Scikit-learn', 'Neural Networks'],
    gradient: 'from-emerald-500/20 via-emerald-400/20 to-teal-500/20',
    accentColor: 'emerald',
    progress: 60
  },
  {
    title: 'Problem Solving',
    icon: <Zap className="h-6 w-6" />,
    skills: ['Algorithms', 'Data Structures', 'System Design', 'debugging', 'Critical Thinking'],
    gradient: 'from-orange-500/20 via-orange-400/20 to-red-500/20',
    accentColor: 'orange',
    progress: 95
  },
]

export function SkillsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(250, 204, 21, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.05) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${category.gradient} blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card content */}
              <div className={`relative h-full p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${category.gradient} backdrop-blur-sm`}>
                {/* Progress indicator */}
                <div className="absolute top-3 right-3 w-10 h-10">
                  <motion.svg 
                    viewBox="0 0 36 36" 
                    className="w-full h-full -rotate-90"
                    initial={{ strokeDasharray: "0 100" }}
                    animate={isInView ? { strokeDasharray: `${category.progress} 100` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <path
                      className="stroke-current text-primary/20"
                      strokeWidth="4"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="stroke-current text-primary"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </motion.svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                    {category.progress}%
                  </span>
                </div>

                {/* Icon and title */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="p-3 rounded-xl bg-background/50 backdrop-blur-sm text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1 text-sm rounded-full bg-background/50 backdrop-blur-sm border border-border/50 
                        hover:border-${category.accentColor}-500/50 hover:bg-${category.accentColor}-500/10 transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover effect underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.gradient} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional interactive elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Always learning and exploring new technologies to stay at the forefront of software development.
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-block"
          >
            <Brain className="h-12 w-12 text-primary opacity-40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}