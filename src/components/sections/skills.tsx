'use client'

import { motion, useInView } from 'framer-motion'
import { Brain, Code2, Database, Globe, Layout, Server, Smartphone, Zap } from 'lucide-react'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layout className="h-6 w-6" />,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vue.js'],
    gradient: 'from-blue-500/15 via-blue-400/15 to-cyan-500/15',
    accentColor: 'blue',
    progress: 90
  },
  {
    title: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    skills: ['Node.js', 'Express', 'Python', 'Java', 'REST APIs', 'Microservices'],
    gradient: 'from-green-500/15 via-green-400/15 to-emerald-500/15',
    accentColor: 'green',
    progress: 85
  },
  {
    title: 'Database & Storage',
    icon: <Database className="h-6 w-6" />,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Supabase'],
    gradient: 'from-yellow-500/15 via-yellow-400/15 to-orange-500/15',
    accentColor: 'yellow',
    progress: 80
  },
  {
    title: 'DevOps & Tools',
    icon: <Code2 className="h-6 w-6" />,
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Linux'],
    gradient: 'from-purple-500/15 via-purple-400/15 to-pink-500/15',
    accentColor: 'purple',
    progress: 75
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    skills: ['React Native', 'Flutter', 'Kotlin', 'Expo'],
    gradient: 'from-red-500/15 via-red-400/15 to-rose-500/15',
    accentColor: 'red',
    progress: 80
  },
  {
    title: 'Cloud & Services',
    icon: <Globe className="h-6 w-6" />,
    skills: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Firebase', 'Cloudflare'],
    gradient: 'from-indigo-500/15 via-indigo-400/15 to-violet-500/15',
    accentColor: 'indigo',
    progress: 70
  },
  {
    title: 'Machine Learning',
    icon: <Brain className="h-6 w-6" />,
    skills: ['TensorFlow', 'Python', 'PyTorch', 'Scikit-learn', 'Neural Networks'],
    gradient: 'from-emerald-500/15 via-emerald-400/15 to-teal-500/15',
    accentColor: 'emerald',
    progress: 60
  },
  {
    title: 'Problem Solving',
    icon: <Zap className="h-6 w-6" />,
    skills: ['Algorithms', 'Data Structures', 'System Design', 'debugging', 'Critical Thinking'],
    gradient: 'from-orange-500/15 via-orange-400/15 to-red-500/15',
    accentColor: 'orange',
    progress: 95
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative max-w-[2000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              My Expertise
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6">
            Technical
            <span className="text-primary"> Skills</span>
          </h2>

          <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities and expertise
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className={`relative h-full p-4 sm:p-6 rounded-2xl border border-border/50 bg-gradient-to-br ${category.gradient} backdrop-blur-sm bg-background/40`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${category.accentColor}-500/20 text-${category.accentColor}-500`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-background/30 backdrop-blur-sm border border-border/50 
                        hover:border-${category.accentColor}-500/50 hover:bg-${category.accentColor}-500/20 transition-all cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}